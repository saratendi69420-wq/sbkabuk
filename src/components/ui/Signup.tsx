"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [countryCode, setCountryCode] = useState("+91");

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row py-20 px-10"
      style={{
        backgroundImage: "url('/images/login-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Section - Form */}
      <div className="w-full md:w-[450px]  p-6 bg-surface-dark z-10">
        <div className="max-w-md mx-auto space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
              Register Now
            </h1>
            <p className="text-sm text-foreground/70">
              Get your ready-made ID from WhatsApp
            </p>
          </div>

          {/* WhatsApp Button */}
          <button className="w-full flex items-center justify-center gap-2 bg-[var(--whatsapp)] hover:opacity-90 text-black font-medium py-3 rounded-lg transition-all duration-300">
            <Image
              src="/whatsapp-icon.png"
              alt="WhatsApp"
              width={24}
              height={24}
            />
            Whatsapp Now
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-surface-dark text-foreground/50">
                OR create account with Mobile Number
              </span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Phone Input */}
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-24 px-3 py-2 bg-surface-light rounded-lg border border-white/10 focus:border-primary outline-none"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="flex-1 px-4 py-2 bg-surface-light rounded-lg border border-white/10 focus:border-primary outline-none"
              />
            </div>

            {/* Other Fields */}
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 bg-surface-light rounded-lg border border-white/10 focus:border-primary outline-none"
            />
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-surface-light rounded-lg border border-white/10 focus:border-primary outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 bg-surface-light rounded-lg border border-white/10 focus:border-primary outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 bg-surface-light rounded-lg border border-white/10 focus:border-primary outline-none"
            />

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-black font-medium py-3 rounded-lg transition-all duration-300"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-foreground/70">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary hover:text-primary-dark"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
