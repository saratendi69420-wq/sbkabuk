import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BOTTOM_NAV_ITEMS = [
  {
    name: "INPLAY",
    icon: "/images/inplay.webp",
    href: "/inplay",
  },
  {
    name: "CRICKET",
    icon: "/images/cricket.webp",
    href: "/cricket",
  },
  {
    name: "SOCCER",
    icon: "/images/soccer.webp",
    href: "/soccer",
  },
  {
    name: "TENNIS",
    icon: "/images/tennis.webp",
    href: "/tennis",
  },
  {
    name: "PREMIUM SPORTSBOOK",
    icon: "/images/premium.webp",
    href: "/premium",
  },
  {
    name: "LIVE-CARD",
    icon: "/images/live-card.webp",
    href: "/live-card",
  },
  {
    name: "SLOT-GAMES",
    icon: "/images/slot-games.webp",
    href: "/slot-games",
  },
] as const;

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="container">
        <ul className="flex items-center gap-x-8 md:gap-x-2 lg:justify-center overflow-x-auto">
          {BOTTOM_NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                // href={item.href}
                href="https://wa.me/917357796945"
                target="_blank"
                className={cn(
                  "bottom-nav-link group",
                  item.name === "PREMIUM SPORTSBOOK" && "text-primary",
                )}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <span className="whitespace-nowrap text-xs lg:text-[0.8rem] font-medium">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
