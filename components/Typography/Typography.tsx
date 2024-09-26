import { FC } from "react";
import { Color, Variant } from "./types";
import { colors, titleVariants, variants } from "./utils";

import localFont from "next/font/local";

const staraFont = localFont({
  src: [
    {
      path: "./font/stara/Stara-Black.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/stara/Stara-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/stara/Stara-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/stara/Stara-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/stara/Stara-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export type TypographyProps = {
  variant?: Variant;
  color?: Color;
  children: React.ReactNode;
  className?: string;
};

const Typography: FC<TypographyProps> = ({
  variant = "p",
  color = "primary",
  children,
  className,
}) => {
  const realClassName = `${className} ${variants[variant]} ${colors[color]} ${
    titleVariants.includes(variant) ? staraFont.className : ""
  }`;

  switch (variant) {
    case "h1":
      return <h1 className={realClassName}>{children}</h1>;
    case "h2":
      return <h2 className={realClassName}>{children}</h2>;
    case "h3":
      return <h3 className={realClassName}>{children}</h3>;
    case "h4":
      return <h4 className={realClassName}>{children}</h4>;
    default:
      return <p className={realClassName}>{children}</p>;
  }
};

export default Typography;
