"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Typography, { TypographyProps } from "../Typography";

type TextTypingProps = {
  text: string;
  speed?: number;
  duration?: number;
  delay?: number;
} & Omit<TypographyProps, "children">;

const TextTyping: FC<TextTypingProps> = ({
  text,
  speed = 30,
  duration = 0.1,
  delay = 0,
  ...typographyProps
}) => {
  const splitText = text.split("");
  return (
    <Typography {...typographyProps}>
      {splitText.map((chunk, idx) => (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: duration,
              delay: idx / speed + delay,
            },
          }}
          viewport={{ once: true }}
          key={idx}
        >
          {chunk}
        </motion.span>
      ))}
    </Typography>
  );
};

export default TextTyping;
