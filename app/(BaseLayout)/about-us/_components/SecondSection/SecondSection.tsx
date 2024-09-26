import Container from "@/components/Container";
import Section from "@/components/Section";
import Mission from "./Mission";
import BrainsBehind from "./BrainsBehind";

const secondSectionEllipseWidthClassName =
  "h-[288px] md:h-[450px] xl:h-[521px] w-[380px] md:w-[592px] xl:w-[685px]";
const secondSectionEllipsePositionClassName =
  "-right-[288px] -md:right-[394px] -xl:right-[192px] -2xl:right-[272px]";

const SecondSection = () => {
  return (
    <Section
      ellipse="yellow"
      className={`${secondSectionEllipseWidthClassName} absolute ${secondSectionEllipsePositionClassName} rotate-[30deg] top-[100px]`}
      wrapperCN="w-full mb-20 md:mb-32 xl:mb-[140px] 2xl:mb-[208px]"
    >
      <Container className="py-0 md:py-12 xl:py-16 2xl:py-20 px-4 md:px-10 xl:px-20 2xl:px-32">
        <Mission />
        <BrainsBehind />
      </Container>
    </Section>
  );
};

export default SecondSection;
