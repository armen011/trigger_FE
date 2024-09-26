import TextTyping from "@/components/Motion/TextTyping";
import Transition from "@/components/Motion/Transition";
import Typography from "@/components/Typography";

const Mission = () => {
  return (
    <div className="max-w-[600px] mt-20 md:mt-32 lg:mt-0 mb-14 md:mb-32 xl:mb-[180px]">
      <TextTyping
        text="Our Mission"
        variant="h1"
        className="mb-4 xl:mb-7 2xl:mb-8 whitespace-nowrap"
        delay={0.3}
        speed={50}
      />
      <Transition x={-20} duration={0.5} delay={0.7}>
        <Typography variant="p1" color="secondary" className="mb-3">
          Our mission is to transform partners businesses via data-driven
          approach to creating marketing strategies.
        </Typography>
        <Typography variant="h4" className="mb-4 xl:mb-7 2xl:mb-8">
          We marry data with research to make your voice louder in the market.
        </Typography>
        <Typography variant="p" color="secondary" className="mb-3">
          By researching consumers and deeply analyzing the collected data,
          Trigger bright brains develop digital and offline strategies that
          accurately convey messages and direct them to the right audience at
          the right time.
        </Typography>
      </Transition>
      <TextTyping
        variant="h4"
        delay={1}
        speed={50}
        text="We believe, idea arises not out of nothing, but from research."
        className="font-semibold"
      />
    </div>
  );
};

export default Mission;
