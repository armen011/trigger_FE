import Section from "@/components/Section";
import Typography from "@/components/Typography";
import Slider from "./Slider";
import getReviews from "@/utils/cms/getReviews";

const thirdSectionEllipseWidthClassName =
  "h-[652px] md:h-[652px] xl:h-[755px] w-[405px] md:w-[645px] xl:w-[746px]";
const thirdSectionEllipsePositionClassName =
  "-left-[180px] -md:left-[173px] -xl:left-[210px]";

const ThirdSection = async () => {
  const reviews = await getReviews();

  return (
    <Section
      ellipse="red"
      className={`${thirdSectionEllipseWidthClassName} absolute ${thirdSectionEllipsePositionClassName} bottom-0`}
    >
      <Typography
        variant="h1"
        className="mb-10 md:mb-12 xl:mb-16 2xl:mb-20 text-center"
      >
        What Our Clients Say!
      </Typography>
      <Slider slides={reviews} />
    </Section>
  );
};

export default ThirdSection;
