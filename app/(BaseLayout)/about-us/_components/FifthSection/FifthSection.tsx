import Form from "@/app/(BaseLayout)/contact-us/_components/Form";
import Container from "@/components/Container";
import Section from "@/components/Section";

const FifthSection = () => {
  const fifthSectionEllipseWidthClassName =
    "h-[652px] md:h-[652px] xl:h-[755px] w-[405px] md:w-[645px] xl:w-[746px]";
  const fifthSectionEllipsePositionClassName =
    "-left-[180px] -md:left-[173px] -xl:left-[210px]";
  return (
    <Section
      ellipse="yellow"
      className={`${fifthSectionEllipseWidthClassName} absolute ${fifthSectionEllipsePositionClassName} top-[-110px]`}
      wrapperCN="mb-20 md:mb-32 xl:mb-[140px] 2xl:mb-[208px]"
    >
      <Container className="px-4 md:px-10 xl:px-20 2xl:px-32">
        <Form />
      </Container>
    </Section>
  );
};

export default FifthSection;
