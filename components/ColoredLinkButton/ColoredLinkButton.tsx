"use client";
import Link from "next/link";
import { FC, ReactNode } from "react";
import Typography from "../Typography";
import { colorMap } from "./utils";
import { VariantTye } from "./types";
import { motion } from "framer-motion";

type ColoredLinkButtonProps = {
  href: string;
  children?: ReactNode;
  variant?: VariantTye;
  className?: string;
};

const linkButton = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const ColoredLinkButton: FC<ColoredLinkButtonProps> = ({
  href,
  children,
  variant = "red",
  className,
}) => {
  return (
    <Link href={href}>
      <motion.div
        className={`w-[165px] h-[58px] md:w-[194px] md:h-[68px] xl:w-[236px] xl:h-[81px] 2xl:w-[288px] 2xl:h-[100px] rounded-[50px] flex justify-center items-center ${colorMap[variant]} bg-opacity-80 md:hover:bg-opacity-50 cursor-pointer transition-opacity duration-500 ${className}`}
        variants={linkButton}
      >
        <Typography variant="h4" color="primary" className="font-bold">
          {children}
        </Typography>
      </motion.div>
    </Link>
  );
};

export default ColoredLinkButton;
