import type { MenuItem } from "./types";

export const NAVIGATION_MENUS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Partner",
    subMenuHeading: ["Partner"],
    subMenu: [
      {
        name: "Sky Exchange",
        href: "#partner-sec",
        group: "Partner",
      },
      {
        name: "Go Exchange 777",
        href: "#partner-sec",
        group: "Partner",
      },
      {
        name: "Go Exchange",
        href: "#partner-sec",
        group: "Partner",
      },
    ],
    gridCols: 1,
    layout: "grouped",
  },
  {
    name: "Online Betting Site",
    subMenuHeading: ["Online Betting Site"],
    subMenu: [
      {
        name: "Online Cricket ID",
        href: "#footer-sec",
        group: "Mainboard IPOs",
      },
      {
        name: "Online Betting ID",
        href: "#footer-sec",
        group: "Online Betting Site",
      },
      {
        name: "Mahakal Online Book",
        href: "#footer-sec",
        group: "Online Betting Site",
      },
      {
        name: "Tiger Exchange 247",
        href: "#footer-sec",
        group: "Online Betting Site",
      },
    ],
    gridCols: 1,
    layout: "grouped",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Contact Us",
    href: "https://wa.me/917357796945",
  },
] as const satisfies MenuItem[];

export type NavigationMenu = (typeof NAVIGATION_MENUS)[number];
