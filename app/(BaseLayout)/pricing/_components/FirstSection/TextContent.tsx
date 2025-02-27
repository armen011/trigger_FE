import TextTyping from "@/components/Motion/TextTyping";
import Transition from "@/components/Motion/Transition";
import Typography from "@/components/Typography";

const TextContent = () => {
  return (
    <div className="max-w-[600px] md:mr-60 lg:mr-[unset] overflow-hidden">
      <TextTyping
        text="Customized Pricing For Tailored Solutions"
        variant="h1"
        className="mb-4 xl:mb-7 2xl:mb-8"
      />
      <Transition y={-20} duration={0.2}>
        <Typography
          variant="p1"
          color="secondary"
          className="mb-3 max-w-[524px]"
        >
          We do not provide standard packages as our pricing is tailored based
          on the specific requirements of your project.
        </Typography>
      </Transition>
      <Transition y={20} duration={0.2} delay={1}>
        <Typography variant="h4" color="primary" className="mb-3 max-w-[524px]">
          The cost depends on the number of team members involved, their
          expertise level, and the overall scope of work.
        </Typography>
      </Transition>
    </div>
  );
};

export default TextContent;
