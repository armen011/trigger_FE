"use client";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import Typography from "./Typography";
import { usePathname } from "next/navigation";

type LinkButtonProps = {
  href: string;
  children?: ReactNode;
  className?: string;
};

const linkButton = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const LinkButton: FC<LinkButtonProps> = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);
  return (
    <Link href={href}>
      <motion.div
        variants={linkButton}
        className={`${className} px-8 py-3 rounded-[50px] bg-white ${
          isActive ? "" : "bg-opacity-40"
        } group transition-colors duration-300`}
      >
        <Typography
          variant="p"
          color="lightPrimary"
          className={`font-medium ${isActive ? "" : "group-hover:text-white"}`}
        >
          {children}
        </Typography>
      </motion.div>
    </Link>
  );
};

export default LinkButton;
