"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { NAVIGATION_MENUS } from "./constants";
import { throttle } from "lodash";
import { cn, smoothScrollTo } from "@/lib/utils";
import { FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";
import { Button } from "../moving-border";
import Image from "next/image";

const Logo = () => (
  <Link
    href="/"
    className="block text-base md:text-xl whitespace-nowrap lg:text-2xl font-inter font-semibold"
  >
    <Image src="/images/logo.png" alt="logo" width={100} height={100} />
  </Link>
);

const DesktopNavigation = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const elementId = href.substring(1);
      smoothScrollTo(elementId);
    }
  };

  return (
    <nav className="hidden lg:flex items-center gap-2">
      <ul className="flex items-center gap-2 text-base">
        {NAVIGATION_MENUS.map((menu) => (
          <DesktopMenu key={menu.name} menu={menu} onLinkClick={handleClick} />
        ))}
      </ul>
    </nav>
  );
};

const MobileNavigation = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const elementId = href.substring(1);
      smoothScrollTo(elementId);
    }
  };
  return (
    <nav className="flex lg:hidden items-center gap-2">
      <MobMenu Menus={NAVIGATION_MENUS} onLinkClick={handleClick} />
    </nav>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Prevent initial scroll to hash on page load
    if (window.location.hash) {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);

      // Optional: Smooth scroll to hash after a small delay
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          smoothScrollTo(hash);
        }
      }, 500);
    }

    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20);

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={cn(
        "nav-container",
        isScrolled ? "nav-scrolled" : "bg-background",
        "py-1 transition-transform duration-300 shadow-sm mt-10",
        !isVisible && "-translate-y-full",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between max-w-full">
          <Logo />

          <DesktopNavigation />

          <div className="flex items-center gap-2 md:gap-4">
            <MobileNavigation />
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <Link
                href="https://wa.me/919310759871"
                className="social-icon-link group"
                aria-label="WhatsApp"
              >
                <div className="social-icon-wrapper">
                  <FaWhatsapp className="social-icon text-whatsapp group-hover:scale-110 size-4 md:size-5" />
                </div>
              </Link>
              <Link
                href="https://t.me/yatribook"
                className="social-icon-link group"
                aria-label="Telegram"
              >
                <div className="social-icon-wrapper">
                  <FaTelegram className="social-icon text-telegram group-hover:scale-110 size-4 md:size-5" />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/yatri_book"
                className="social-icon-link group"
                aria-label="Instagram"
              >
                <div className="social-icon-wrapper instagram-gradient">
                  <FaInstagram className="social-icon text-foreground group-hover:scale-110 size-4 md:size-5" />
                </div>
              </Link>
            </div>
            <Link href="https://wa.me/919310759871" target="_blank" passHref>
              <Button
                borderRadius="1.75rem"
                className="bg-primary text-background font-semibold shadow-md"
              >
                GET ID NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
