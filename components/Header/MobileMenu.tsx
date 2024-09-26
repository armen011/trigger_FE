"use client";
import { motion } from "framer-motion";
import BurgerIcon from "@/assets/icon/burger.svg";
import CloseIcon from "@/assets/icon/close.svg";
import { useState } from "react";
import { links } from "./utils";
import ColoredLinkButton from "../ColoredLinkButton";

const sidebar = {
  open: {
    width: "100vw",
    height: "100vh",
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    width: "0",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const liVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MobileMenu = () => {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsBurgerMenuOpened((prev) => !prev)}
        className="block lg:hidden z-50"
      >
        {isBurgerMenuOpened ? (
          <CloseIcon className="w-6 h-6 md:w-8 md:h-8 animate-smooth-appear" />
        ) : (
          <BurgerIcon className="w-6 h-6 md:w-8 md:h-8 animate-smooth-appear" />
        )}
      </button>
      <motion.nav
        initial={false}
        animate={isBurgerMenuOpened ? "open" : "closed"}
        className="block lg:hidden"
      >
        <motion.div
          variants={sidebar}
          className="bg-background-primary bg-opacity-80 fixed top-0 right-0 w-screen z-40 h-screen flex items-center justify-center"
        >
          <motion.ul variants={variants}>
            {links.map(({ href, title, variant }, idx) => (
              <motion.li
                key={idx}
                variants={liVariant}
                className="mb-16"
                onClick={() => setIsBurgerMenuOpened(false)}
              >
                <ColoredLinkButton href={href} variant={variant}>
                  {title}
                </ColoredLinkButton>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default MobileMenu;
