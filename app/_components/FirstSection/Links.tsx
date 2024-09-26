"use client";

import ColoredLinkButton from "@/components/ColoredLinkButton";
import { motion } from "framer-motion";

const container = {
  visible: {
    transition: {
      delayChildren: 0.1,
    },
  },
};

const Links = () => {
  return (
    <motion.div
      className="flex items-center lg:justify-between flex-col lg:flex-row absolute left-0 right-0 bottom-16 xl:bottom-20 2xl:bottom-24 lg:px-20 2xl:px-28  gap-3 md:gap-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex gap-3 md:gap-8 xl:gap-10 2xl:gap-12 w-fit">
        <ColoredLinkButton href="/about-us" variant="red">
          Who We Are
        </ColoredLinkButton>
        <ColoredLinkButton
          href="/portfolio/influencer-marketing"
          variant="yellow"
        >
          Our Results
        </ColoredLinkButton>
      </div>
      <div className="flex gap-3 md:gap-8 lg:gap-10 2xl:gap-12 w-fit">
        <ColoredLinkButton href="/pricing" variant="green">
          Pricing
        </ColoredLinkButton>
        <ColoredLinkButton href="/contact-us" variant="purple">
          Contact Us
        </ColoredLinkButton>
      </div>
    </motion.div>
  );
};

export default Links;
