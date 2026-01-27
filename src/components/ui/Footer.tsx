"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  const bettingSites1 = [
    "Mahakal Online Book",
    "Reddy Anna Book",
    "Tiger Exchange 247",
    "Silver Exchange",
    "Diamond Exchange ID",
    "Lotus365",
    "4RaBet",
    "Funbet",
    "Indibet",
    "Satfair",
  ];

  const bettingSites2 = [
    "Ambani Book",
    "Mahadev Online Book",
    "Betbhai9",
    "IPL Betting ID",
    "Betting Satta ID",
    "Casino ID",
    "Rajbet",
    "Lords Exchange",
    "Satsport247",
    "Yolo247",
  ];

  return (
    <footer className="bg-gradient-to-br from-surface-dark via-surface-dark/95 to-surface-dark border-t border-primary/20">
      {/* 18+ Warning Banner */}
      <div className="bg-gradient-to-r from-accent-red/20 via-accent-red/10 to-accent-red/20 backdrop-blur-sm py-4">
        <div className="container">
          <div className="flex items-center justify-center gap-3 text-accent-red">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-accent-red/30">
              <span className="text-2xl font-bold">18+</span>
            </div>
            <p className="text-sm md:text-base font-medium">
              Gambling can be addictive. Please play responsibly and at your own
              risk.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16 relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.1),transparent_50%)]" />

        {/* Brand Section */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-neon-blue to-primary bg-clip-text text-transparent">
            SARA Book
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            SARA Book is the most Trusted Betting Exchange and Leading Online
            Casino.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Betting Sites Column 1 */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon-blue">
              Online Betting Sites
            </h3>
            <ul className="space-y-3">
              {bettingSites1.map((site) => (
                <li key={site}>
                  <Link
                    href="#"
                    className="text-sm lg:text-base text-foreground/70 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-primary/50 group-hover:w-6 transition-all duration-300" />
                    {site}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Betting Sites Column 2 */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon-blue">
              More Betting Sites
            </h3>
            <ul className="space-y-3">
              {bettingSites2.map((site) => (
                <li key={site}>
                  <Link
                    href="#"
                    className="text-sm lg:text-base text-foreground/70 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-primary/50 group-hover:w-6 transition-all duration-300" />
                    {site}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon-blue">
              Site Information
            </h3>
            <ul className="space-y-3">
              {[
                "Contact us",
                "About us",
                "Terms & conditions",
                "Privacy Policy",
                "Blog",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm lg:text-base text-foreground/70 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-primary/50 group-hover:w-6 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon-blue">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: Phone,
                  text: "+91-9310764844",
                  href: "tel:+919310759871",
                },
                {
                  icon: MessageCircle,
                  text: "WhatsApp",
                  href: "https://wa.me/919310759871",
                  className: "text-whatsapp",
                },
                {
                  icon: Send,
                  text: "Telegram",
                  href: "#",
                  className: "text-telegram",
                },
              ].map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className={`group flex items-center gap-3 text-sm lg:text-base text-foreground/70 hover:text-primary transition-all duration-300 ${item.className}`}
                  >
                    <div className="p-2.5 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 py-6 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-foreground/50">
              © {new Date().getFullYear()} SARA Book. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {[
                { src: "/images/upi.webp", alt: "UPI Payment" },
                { src: "/images/visa.webp", alt: "Visa" },
                { src: "/images/mastercard.webp", alt: "Mastercard" },
                { src: "/images/neteller.webp", alt: "Neteller" },
              ].map((payment) => (
                <Image
                  key={payment.alt}
                  src={payment.src}
                  alt={payment.alt}
                  width={40}
                  height={40}
                  className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
