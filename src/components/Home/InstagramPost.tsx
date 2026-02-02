"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import Link from "next/link";

// Define the Instagram post type
interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  postUrl: string;
  date: string;
}

// Sample Instagram posts data
const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    imageUrl: "/images/insta01.webp",
    caption:
      "Match predictions for today's IPL game! 🏏 #CricketBetting #IPL2023",
    likes: 245,
    comments: 32,
    postUrl: "https://www.instagram.com/yatri_book",
    date: "2h ago",
  },
  {
    id: "2",
    imageUrl: "/images/insta02.webp",
    caption:
      "Our expert analysis was spot on! Check out today's winning tips 💰 #BettingTips",
    likes: 189,
    comments: 24,
    postUrl: "https://www.instagram.com/yatri_book",
    date: "5h ago",
  },
  {
    id: "3",
    imageUrl: "/images/insta03.webp",
    caption:
      "Last minute odds update for the T20 World Cup! 🌍 #T20WorldCup #CricketOdds",
    likes: 312,
    comments: 45,
    postUrl: "https://www.instagram.com/yatri_book",
    date: "8h ago",
  },
  {
    id: "4",
    imageUrl: "/images/insta04.webp",
    caption:
      "Weekend special: Double your winnings on selected matches! 💯 #SpecialOffer",
    likes: 421,
    comments: 67,
    postUrl: "https://www.instagram.com/yatri_book",
    date: "1d ago",
  },
];

// Add custom type for slider arrow props
interface CustomArrowProps {
  onClick?: () => void;
}

// Update arrow components with proper typing
const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-surface-dark border border-primary/20 shadow-lg text-primary hover:bg-surface-light hover:border-primary/40 focus:outline-none transition-all duration-300"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  );
};

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-surface-dark border border-primary/20 shadow-lg text-primary hover:bg-surface-light hover:border-primary/40 focus:outline-none transition-all duration-300"
      aria-label="Next slide"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  );
};

export default function InstagramPost() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  // Update slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl font-inter font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Instagram Updates
            </h2>
            <p className="text-foreground/70 text-sm font-inter font-light">
              Stay connected with our latest insights and updates
            </p>
          </div>
          <Link
            href="https://www.instagram.com/yatri_book"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark hover:bg-surface-light border border-primary/20 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-primary" />
            <span className="hidden sm:inline text-foreground/90">
              Follow us
            </span>
          </Link>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {instagramPosts.map((post) => (
              <div key={post.id} className="px-2">
                <Link
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-surface-dark rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-white/10">
                    <div className="relative aspect-square">
                      <Image
                        src={post.imageUrl || "/placeholder.svg"}
                        alt={post.caption}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-foreground">
                          <p className="line-clamp-2 text-sm">{post.caption}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-surface-light/50">
                      <div className="flex items-center justify-between text-sm text-foreground/70">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1 text-primary"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            {post.likes}
                          </span>
                          <span className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1 text-secondary"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2h-2.5a2 2 0 0 0-1.5.7l-1.7 2.6a1 1 0 0 1-1.7 0l-1.7-2.6a2 2 0 0 0-1.5-.7H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10z" />
                            </svg>
                            {post.comments}
                          </span>
                        </div>
                        <span className="text-primary-dark">{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="https://www.instagram.com/yatri_book"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-gradient inline-flex items-center justify-center px-8 py-3 text-foreground font-medium rounded-full hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Instagram className="w-5 h-5 mr-2" />
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
