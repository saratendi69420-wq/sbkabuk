import Image from "next/image";
import Link from "next/link";

interface PartnerCardProps {
  logo: string;
  name: string;
  userId: string;
  password: string;
  link: string;
}

const partnerData: PartnerCardProps[] = [
  {
    logo: "/images/skyexchange.webp",
    name: "Sky Exchange",
    userId: "SARA Book",
    password: "Yatri1234",
    link: "https://wa.me/919310759871",
  },
  {
    logo: "/images/goexchange.webp",
    name: "Go Exchange",
    userId: "SARA Book",
    password: "Yatri1234",
    link: "https://wa.me/919310759871",
  },
  {
    logo: "/images/my99.jpg",
    name: "My99",
    userId: "SARA Book",
    password: "Yatri1234",
    link: "https://wa.me/919310759871",
  },
  {
    logo: "/images/tigerexch-logo.webp",
    name: "Tigerexch",
    userId: "SARA Book",
    password: "Yatri1234",
    link: "https://wa.me/919310759871",
  },
];

const paymentMethods = [
  {
    name: "UPI",
    image: "/images/upi.webp",
  },
  {
    name: "Visa",
    image: "/images/visa.webp",
  },
  {
    name: "Mastercard",
    image: "/images/mastercard.webp",
  },
  {
    name: "Neteller",
    image: "/images/neteller.webp",
  },
];

const PartnerCard = ({
  logo,
  name,
  userId,
  password,
  link,
}: PartnerCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-surface-dark p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
      <div className="flex flex-col gap-4">
        {/* Logo */}
        <div className="h-12 w-full">
          <Image
            src={logo}
            alt={name}
            width={200}
            height={48}
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Partner Name */}
        <h3 className="text-2xl font-bold text-primary">{name}</h3>

        {/* Features */}
        <div className="space-y-2">
          {[
            "Best Platform for Games",
            "Best Betting Options",
            "Competitive odds",
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span className="text-sm text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="flex gap-3">
          {paymentMethods.map((method, index) => (
            <Image
              key={index}
              src={method.image}
              alt={method.name}
              width={40}
              height={25}
              className="h-6 w-auto object-contain"
            />
          ))}
        </div>

        {/* Bonus Info */}
        <div className="space-y-2">
          <p className="text-sm text-primary">2x World Cup Welcome Bonus</p>
          <div className="text-center">
            <span className="text-2xl font-bold text-primary">
              5% Bonus on{" "}
            </span>
            <span className="text-2xl font-bold text-foreground">New ID</span>
          </div>
        </div>

        {/* Demo Details */}
        <div className="space-y-2 text-center text-sm text-foreground/80">
          <p>Demo ID</p>
          <p>User ID: {userId}</p>
          <p>Pass: {password}</p>
        </div>

        {/* CTA Button */}
        <Link
          href={link}
          target="_blank"
          className="mt-2 block rounded-lg bg-primary px-6 py-3 text-center font-semibold text-background transition-all duration-300 hover:bg-primary-dark"
        >
          Get ID
        </Link>
      </div>
    </div>
  );
};

export default function Partner() {
  return (
    <section id="partner-sec" className="py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnerData.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
