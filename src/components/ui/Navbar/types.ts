export type GridColumns = 1 | 2 | 3;

export interface SubMenuItem {
  name: string;
  href: string;
  group?: string;
}

export interface MenuItem {
  name: string;
  href?: string;
  subMenuHeading?: string[];
  subMenu?: SubMenuItem[];
  gridCols?: GridColumns;
  layout?: "grouped" | "default";
}
