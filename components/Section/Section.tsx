import { FC } from "react";
import { EllipseVariant } from "./types";
import { ellipseMap } from "./utils";

type SectionProps = {
  ellipse?: EllipseVariant;
  children?: React.ReactNode;
  className?: string;
  wrapperCN?: string;
};

const Section: FC<SectionProps> = ({
  children,
  ellipse,
  className,
  wrapperCN,
}) => {
  const ellipseClassName = ellipse
    ? `bg-gradient-to-bl rounded-full blur-[100px] ${ellipseMap[ellipse]} ${className} z-10 animate-smooth-appear`
    : "";
  return (
    <section className={`w-full relative ${wrapperCN}`}>
      <div className="z-50 w-full h-[inherit] relative">{children}</div>
      <div className={ellipseClassName} />
    </section>
  );
};

export default Section;
