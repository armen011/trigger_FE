"use client";
import { FC } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

type TransitionProps = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
};

const Transition: FC<TransitionProps> = ({
  children,
  duration = 1,
  delay = 0,
  x = 0,
  y = 0,
  className,
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={{
          opacity: 0,
          x: x,
          y: y,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
          },
        }}
        viewport={{ once: true, margin: "-180px" }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default Transition;
