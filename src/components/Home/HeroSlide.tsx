"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface IHeroSlide {
  _id?: string;
  title: string;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface HeroSlideProps {
  slide: IHeroSlide;
  isActive?: boolean;
}

export default function HeroSlide({ slide, isActive = false }: HeroSlideProps) {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={slide.imageUrl}
          alt={slide.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl space-y-6"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-dark to-secondary">
              {slide.title}
            </span>
          </h1>

          {/* Optional Metadata */}
          {slide.createdAt && (
            <p className="text-sm text-foreground/70">
              Posted on {new Date(slide.createdAt).toLocaleDateString()}
            </p>
          )}

          {/* Call to Action Button */}
          <div className="pt-4">
            <button
              className="group relative px-6 py-3 bg-surface-dark hover:bg-surface-light 
              border border-primary/20 rounded-lg transition-all duration-300
              hover:border-primary/40 hover:shadow-[0_0_20px_rgba(255,215,0,0.1)]"
            >
              <span
                className="relative z-10 text-foreground group-hover:text-primary 
                transition-colors duration-300"
              >
                Learn More
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-primary/10 to-transparent
                rounded-lg transition-opacity duration-300"
              />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 
        bg-gradient-to-t from-background to-transparent"
      />
      <div
        className="absolute top-0 right-0 w-64 h-64 
        bg-neon-purple/10 blur-[100px] rounded-full"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 
        bg-neon-blue/10 blur-[100px] rounded-full"
      />
    </div>
  );
}

export const heroSlides: IHeroSlide[] = [];
