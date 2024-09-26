import { Color, Variant } from "./types";

export const titleVariants: Variant[] = ["h1", "h2", "h3", "h4"];

export const variants: Record<Variant, string> = {
  h1: "text-40 md:text-52 lg:text-64 2xl:text-80",
  h2: "text-24 md:text-32 lg:text-38 2xl:text-48",
  h3: "text-20 md:text-28 lg:text-32 2xl:text-44",
  h4: "text-18 md:text-20 lg:text-24 2xl:text-32",
  p4: "text-16 md:text-18 lg:text-24 2xl:text-28",
  p3: "text-16 md:text-18 lg:text-20 2xl:text-24",
  p2: "text-16 md:text-16 lg:text-18 2xl:text-20",
  p1: "text-14 md:text-14 lg:text-16 2xl:text-18",
  p: "text-12 md:text-14 lg:text-16 2xl:text-16",
};

export const colors: Record<Color, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  tertiary: "text-text-tertiary",
  lightPrimary: "text-text-light-primary",
  lightSecondary: "text-text-light-secondary",
};
