import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { FaWhatsapp, FaGamepad, FaTrophy } from "react-icons/fa";

const HowToPlay = () => {
  const steps = [
    {
      id: 1,
      title: "WhatsApp Us",
      description:
        "Connect with us instantly through WhatsApp to start your gaming journey.",
      isUp: true,
      IconComponent: FaWhatsapp,
      gradientFrom: "from-whatsapp",
      gradientTo: "to-accent-green",
    },
    {
      id: 2,
      title: "Get ID & Play",
      description:
        "Receive your unique gaming ID and access our exclusive gaming platform.",
      isUp: false,
      IconComponent: FaGamepad,
      gradientFrom: "from-neon-purple",
      gradientTo: "to-neon-blue",
    },
    {
      id: 3,
      title: "Win Amazing Prizes",
      description:
        "Compete and win exciting rewards in our daily gaming tournaments.",
      isUp: true,
      IconComponent: FaTrophy,
      gradientFrom: "from-primary",
      gradientTo: "to-secondary",
    },
  ];

  return (
    <section className="py-20 px-4 bg-surface-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-black rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-black rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center tracking-tight sm:text-5xl lg:text-6xl mb-4">
            How To Play
            <span className="gradient-text block mt-2">With Us</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto mt-4">
            Follow these simple steps to join our gaming community and start
            winning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative ${
                step.isUp ? "-mt-6" : "mt-6"
              } transition-all duration-300`}
            >
              <div className="bg-gaming-gray/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border border-primary/10 group">
                {/* Gradient background effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background: `linear-gradient(45deg, var(--${
                      step.gradientFrom.split("-")[1]
                    }), var(--${step.gradientTo.split("-")[1]}))`,
                  }}
                />

                <div className="flex justify-center mb-6 relative">
                  <div
                    className={`bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} p-0.5 rounded-full group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="bg-surface-dark p-4 rounded-full">
                      <step.IconComponent className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center gradient-text">
                  {step.title}
                </h3>
                <p className="text-foreground/80 text-center">
                  {step.description}
                </p>
                <div
                  className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-surface-light flex items-center justify-center text-5xl font-black group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(45deg, var(--${
                      step.gradientFrom.split("-")[1]
                    }), var(--${step.gradientTo.split("-")[1]}))`,
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/80">
                    {step.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="https://wa.me/917357796945" target="_blank" passHref>
            <Button
              variant="primary"
              size="xl"
              className="bg-primary text-background font-semibold shadow-md rounded-full"
              leftIcon={<FaWhatsapp className="size-6 lg:size-7" />}
            >
              WhatsApp Us Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
