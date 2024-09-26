import Container from "@/components/Container";
import Transition from "@/components/Motion/Transition";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import OurValues from "./OurValues";

const FourthSection = () => {
  const fourthSectionEllipseWidthClassName =
    "h-[288px] md:h-[450px] xl:h-[521px] w-[380px] md:w-[592px] xl:w-[685px]";
  const fourthSectionEllipsePositionClassName =
    "-right-[288px] -md:right-[394px] -xl:right-[192px] -2xl:right-[272px]";

  return (
    <Section
      ellipse="green"
      className={`${fourthSectionEllipseWidthClassName} absolute ${fourthSectionEllipsePositionClassName} rotate-[30deg] top-[100px]`}
      wrapperCN="w-full mb-20 md:mb-32 xl:mb-[140px] 2xl:mb-[208px]"
    >
      <Container className="py-0 md:py-12 xl:py-16 2xl:py-20 px-4 md:px-10 xl:px-20 2xl:px-32">
        <Transition delay={0.5}>
          <Typography
            variant="h1"
            className="mb-10 md:mb-12 xl:mb-16 2xl:mb-20"
          >
            Our Values
          </Typography>
        </Transition>
        <OurValues />
      </Container>
    </Section>
  );
};

export default FourthSection;
