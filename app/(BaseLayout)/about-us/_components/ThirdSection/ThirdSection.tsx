import Section from "@/components/Section";
import TeamIcon from "@/assets/icon/team.svg";
import Container from "@/components/Container";
import Stuff from "./Stuff";

const thirdSectionEllipseWidthClassName =
  "h-[652px] md:h-[652px] xl:h-[755px] w-[405px] md:w-[645px] xl:w-[746px]";
const thirdSectionEllipsePositionClassName =
  "-left-[180px] -md:left-[173px] -xl:left-[210px]";

const ThirdSection = () => {
  return (
    <Section
      ellipse="red"
      className={`${thirdSectionEllipseWidthClassName} absolute ${thirdSectionEllipsePositionClassName} top-[-110px]`}
      wrapperCN="mb-20 md:mb-32 xl:mb-[140px] 2xl:mb-[208px]"
    >
      <Container className="px-4 md:px-10 xl:px-20 2xl:px-32">
        <TeamIcon className="-mb-4 md:-mb-[100px] xl:-mb-[62px] 2xl:-mb-[52px] z-10 relative" />
        <Stuff />
      </Container>
    </Section>
  );
};

export default ThirdSection;
