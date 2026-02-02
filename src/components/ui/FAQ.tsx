"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const accordionItems = [
  {
    id: "01",
    title: "How does one get an Online Cricket ID on SARA Book?",
    content:
      "One has to visit the website, fill out the registration form then get an ID after depositing some funds.",
  },
  {
    id: "02",
    title: "Is SARA Book legally safe to bet through?",
    content:
      "SARA Book operates under strict regulatory compliance and security protocols to ensure safe and secure betting experiences for all users.",
  },
  {
    id: "03",
    title: "Which sports betting is possible on SARA Book?",
    content:
      "SARA Book offers a wide range of sports betting options including cricket, football, tennis, basketball, and many other popular sports with competitive odds.",
  },
  {
    id: "04",
    title: "Are there free bets offered for first time players?",
    content:
      "Yes, SARA Book offers welcome bonuses and free bets for new players. Terms and conditions apply to these promotional offers.",
  },
  {
    id: "05",
    title: "Does SARA Book allow placing of online live bets?",
    content:
      "Yes, SARA Book provides real-time live betting features across various sports events with instant updates and quick bet placement options.",
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-12 md:py-20 bg-surface-dark">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Get answers to common questions about SARA Book
          </p>
        </div>

        <div className="space-y-4">
          {accordionItems.map((item) => (
            <div
              key={item.id}
              className="border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span
                    className={cn(
                      "text-2xl md:text-3xl lg:text-4xl font-medium opacity-40",
                      openItem === item.id ? "text-primary" : "text-gray-400",
                    )}
                  >
                    {item.id}
                  </span>
                  <h3
                    className={cn(
                      "text-base md:text-lg font-medium transition-colors duration-300",
                      openItem === item.id ? "text-primary" : "text-gray-200",
                    )}
                  >
                    {item.title}
                  </h3>
                </div>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-all duration-300",
                    openItem === item.id
                      ? "rotate-180 text-primary"
                      : "text-gray-400",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  openItem === item.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-gray-400">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
