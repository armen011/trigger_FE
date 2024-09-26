"use client";
import LinkButton from "../LinkButton";
import { links } from "./utils";
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
    <>
      <div className="hidden lg:block">
        <motion.div
          className="flex md:gap-8 2xl:gap-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {links.map(({ href, title }, idx) => (
            <LinkButton href={href} key={idx}>
              {title}
            </LinkButton>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Links;
