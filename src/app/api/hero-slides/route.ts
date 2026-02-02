import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { z } from "zod";

/**
 * Validation schema for hero slide data
 * Defines required fields and their validation rules
 */
const slideSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title cannot exceed 100 characters"),
  imageUrl: z
    .string()
    .min(1, "Image URL is required")
    .refine((url) => {
      try {
        // Check if it's a relative URL starting with /
        if (url.startsWith("/")) {
          return true;
        }
        // Check if it's a valid URL
        new URL(url);
        return true;
      } catch {
        return false;
      }
    }, "Invalid image URL"),
});

// Type inference from zod schema
type SlideData = z.infer<typeof slideSchema>;

/**
 * GET handler - Retrieves all hero slides
 * Sorted by creation date in descending order
 */
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ipo-market");

    const slides = await db
      .collection("hero-slides")
      .find({})
      .sort({ createdAt: -1 })
      .project({
        title: 1,
        tagline: 1,
        description: 1,
        imageUrl: 1,
        ctaLabel: 1,
        ctaLink: 1,
        createdAt: 1,
        updatedAt: 1,
      })
      .toArray();

    return NextResponse.json(slides);
  } catch (error) {
    console.error("Error fetching slides:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch slides",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * POST handler - Creates a new hero slide
 * Includes validation and proper error handling
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate input data against schema
    const validatedData: SlideData = slideSchema.parse(data);

    const client = await clientPromise;
    const db = client.db("ipo-market");

    // Add timestamps
    const slideWithTimestamps = {
      ...validatedData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db
      .collection("hero-slides")
      .insertOne(slideWithTimestamps);

    if (!result.acknowledged) {
      throw new Error("Failed to insert slide");
    }

    return NextResponse.json(
      {
        success: true,
        id: result.insertedId,
        message: "Slide created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating slide:", error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        error: "Failed to create slide",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}
