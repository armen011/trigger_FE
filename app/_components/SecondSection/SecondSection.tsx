import Section from "@/components/Section";
import Marquee from "./Marquee";
import Partners from "./Partners";

const firstSectionEllipseWidthClassName =
  "h-[288px] md:h-[450px] xl:h-[521px] w-[380px] md:w-[592px] xl:w-[685px]";
const firstSectionEllipsePositionClassName =
  "-right-[288px] -md:right-[394px] -xl:right-[192px] -2xl:right-[272px]";

const SecondSection = () => {
  return (
    <Section
      ellipse="yellow"
      className={`${firstSectionEllipseWidthClassName} absolute ${firstSectionEllipsePositionClassName} rotate-[30deg] top-[100px] `}
      wrapperCN="w-full"
    >
      <Marquee />
      <Partners />
    </Section>
  );
};

export default SecondSection;
