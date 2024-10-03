"use client";

import { FC } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
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
    <LazyMotion features={domAnimation}>
      <Typography {...typographyProps}>
        {splitText.map((chunk, idx) => (
          <m.span
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
          </m.span>
        ))}
      </Typography>
    </LazyMotion>
  );
};

export default TextTyping;
