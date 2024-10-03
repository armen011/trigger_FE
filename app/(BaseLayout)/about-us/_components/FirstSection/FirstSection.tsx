import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import Image from "next/legacy/image";
import TextContent from "./TextContent";
import HeroImage from "./HeroImage";

const firstSectionEllipseWidthClassName =
  "h-[311px] md:h-[582px] xl:h-[674px] w-[357px] md:w-[669px] xl:w-[774px]";
const firstSectionEllipsePositionClassName =
  "-left-[136px] -md:left-[229px] -xl:left-[260px] -top-[144px] -md:top-[166px] -xl:top-[309px] -2xl:top-[366px]";

const FirstSection = () => {
  return (
    <Section
      ellipse="green"
      className={`${firstSectionEllipseWidthClassName} absolute ${firstSectionEllipsePositionClassName}`}
      wrapperCN="w-full relative"
    >
      <Container className="min-h-[calc(100vh-70px)] flex flex-col justify-center md:justify-between items-center md:items-start lg:flex-row gap-10 md:gap-12 xl:gap-10 2xl:gap-16 py-0 md:py-12 xl:py-16 2xl:py-20 px-4 md:px-10 xl:px-20 2xl:px-32">
        <TextContent />
        <HeroImage />
      </Container>
    </Section>
  );
};

export default FirstSection;
