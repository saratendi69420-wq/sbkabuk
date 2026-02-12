"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const waLink =
    "https://wa.me/917357796945?text=Hi%20I%20want%20to%20get%20an%20ID%20for%20SARA%20Book";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white text-2xl md:text-3xl hover:scale-105 transition-transform">
          <FaWhatsapp />
        </div>
      </Link>
    </div>
  );
}
