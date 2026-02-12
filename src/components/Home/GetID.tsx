import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/Button";
export default function GetID() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-black  z-0" />

      {/* Main content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">
              Get Your Online Cricket ID With
            </span>
            <span className="text-foreground block">SARA Book</span>
          </h1>

          {/* Separator line */}
          <div className="w-24 h-1 bg-primary mb-8" />

          {/* Description */}
          <p className="text-base md:text-lg mb-8 leading-relaxed">
            Looking for a trusted and professional cricket ID provider? SARA
            Book is your premier destination for secure online cricket IDs. We
            offer a seamless and reliable platform to obtain your{" "}
            <span className="text-primary font-medium">online cricket ID</span>{" "}
            with complete peace of mind. Experience premium features,
            competitive odds, and a user-friendly interface designed to enhance
            your cricket experience.
          </p>

          <p className="text-base md:text-lg mb-12 leading-relaxed">
            Discover why SARA Book stands out as the leading platform for those
            seeking a{" "}
            <span className="text-accent-yellow font-medium">
              premium online cricket ID
            </span>
            . Join thousands of satisfied users who trust our professional
            services.
          </p>
          <Link href="https://wa.me/917357796945" passHref>
            <Button
              variant="primary"
              size="xl"
              className="rounded-full"
              leftIcon={<FaWhatsapp className="size-6 lg:size-7" />}
            >
              WhatsApp Us Now
            </Button>
          </Link>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-gray-500">
            <span>Trusted by 10,000+ users</span>
            <span>•</span>
            <span>Secure payments</span>
            <span>•</span>
            <span>24/7 support</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl" />
    </section>
  );
}
