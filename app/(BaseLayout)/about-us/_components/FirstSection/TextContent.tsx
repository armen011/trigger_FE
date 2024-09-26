import TextTyping from "@/components/Motion/TextTyping";
import Transition from "@/components/Motion/Transition";
import Typography from "@/components/Typography";

const TextContent = () => {
  return (
    <div className="max-w-[600px] md:mr-60 lg:mr-[unset]">
      <TextTyping
        text="Who We Are"
        variant="h1"
        className="mb-4 xl:mb-7 2xl:mb-8 whitespace-nowrap"
      />
      <Transition y={-20} duration={0.2}>
        <Typography variant="p1" color="secondary" className="mb-3">
          Trigger is founded in 2021 to provide full-funnel services based on
          data and customers touchpoints.
        </Typography>
      </Transition>
      <TextTyping
        text="We marry data with research to make your voice louder in the market."
        variant="h4"
        className="mb-4 xl:mb-7 2xl:mb-8"
        speed={70}
        delay={0.5}
      />
      <Transition y={20} duration={0.2} delay={1}>
        <Typography variant="p" color="secondary" className="mb-3">
          Trigger maverick firm is powered by BSMI, whose founders have massive
          experience with leading international companies and brands.Preparing
          competent and global standard-based professionals for 2 years, the
          founders decided to open a research-based company to help businesses
          grow better and further.
        </Typography>
      </Transition>
      <Transition delay={1.2}>
        <Typography variant="p3" className="font-semibold">
          No cookie-cutter plan, but a custom strategy.
        </Typography>
      </Transition>
    </div>
  );
};

export default TextContent;
