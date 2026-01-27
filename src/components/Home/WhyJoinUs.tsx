"use client";

import {
  Shield,
  Clock,
  Zap,
  Users,
  Headphones,
  Trophy,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Shield,
    title: "100% Trusted Platform",
    description:
      "SARA Book offers secure and reliable Online Cricket ID with attractive offers. Our platform ensures complete safety of your transactions and personal information.",
  },
  {
    icon: Users,
    title: "3M+ Active Users",
    description:
      "Join our growing community of over 3 million satisfied users. Experience the most trusted cricket betting platform with competitive odds and extensive market coverage.",
  },
  {
    icon: Zap,
    title: "Fastest Withdrawal",
    description:
      "Get instant access to your winnings with our lightning-fast withdrawal system. We process all payment requests quickly and securely, ensuring you get your money when you need it.",
  },
  {
    icon: Trophy,
    title: "Best Platform",
    description:
      "Experience the ultimate cricket betting platform with user-friendly interface, live betting, and comprehensive coverage of all cricket matches worldwide.",
  },
  {
    icon: Headphones,
    title: "24x7 Customer Support",
    description:
      "Our dedicated support team is available round the clock to assist you. Get instant resolution for all your queries and enjoy uninterrupted betting experience.",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description:
      "Stay ahead with live scores, real-time odds updates, and instant bet settlement. Never miss an opportunity with our advanced betting platform.",
  },
];

export default function WhyJoinUs() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <section className="text-foreground py-10 px-4 sm:px-6 lg:px-8 relative bg-surface-dark">
      <div className="absolute inset-0 bg-gradient-to-bl from-neon-purple/10 to-neon-blue/10">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="pricing-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.05)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.05)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.05)" />
            </linearGradient>
          </defs>
          <path fill="url(#pricing-grad)" d="M0 0 C 50 100, 80 100, 100 0 Z" />
        </svg>
      </div>
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="absolute"
            style={{ left: `${i * 25}%`, top: "20%" }}
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <path
              d="M20 2 L38 38 L2 38 Z"
              fill="none"
              stroke="rgba(139, 92, 246, 0.1)"
              strokeWidth="1"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 20 20"
                to="360 20 20"
                dur={`${10 + i * 2}s`}
                repeatCount="indefinite"
              />
            </path>
          </svg>
        ))}
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[35%,60%] gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon-blue">
                Why Choose SARA Book?
              </span>
            </h2>
            <p className="text-base lg:text-lg font-light text-center md:text-left text-foreground/80">
              Experience the most trusted and reliable cricket betting platform
              with SARA Book. We offer the best odds, instant withdrawals, and
              24/7 customer support.
            </p>
          </div>
          <div className="w-full relative">
            <Slider {...settings} ref={sliderRef}>
              {reasons.map((reason, index) => (
                <div key={index} className="px-2">
                  <div className="transform transition duration-300 hover:scale-105 h-[280px] lg:h-[320px] relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-surface-light/50 backdrop-blur-sm" />
                    <div className="relative z-10 h-full flex flex-col rounded-2xl text-foreground p-4 mt-2 border border-primary/20">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-primary to-neon-blue rounded-full mb-4">
                        <reason.icon className="w-8 h-8 text-background" />
                      </div>
                      <h3 className="text-base text-center px-0 font-semibold mb-3 text-primary">
                        {reason.title}
                      </h3>
                      <p className="text-foreground/70 text-center text-xs font-light leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="absolute -bottom-4 right-5 flex mt-4 border border-primary/20 overflow-hidden rounded-lg">
              <div
                onClick={() => sliderRef.current?.slickPrev()}
                aria-label="Previous slide"
                className="bg-surface-light hover:bg-primary/20 cursor-pointer p-2 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </div>
              <div
                onClick={() => sliderRef.current?.slickNext()}
                aria-label="Next slide"
                className="bg-surface-light hover:bg-primary/20 border-l border-primary/20 cursor-pointer p-2 transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-8 flex justify-center items-center">
              {reasons.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full mx-1 transition-all duration-300",
                    currentSlide === index
                      ? "bg-primary scale-125"
                      : "bg-foreground",
                  )}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
