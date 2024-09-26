import MemberCard from "@/components/MemberCard";
import Transition from "@/components/Motion/Transition";
import Typography from "@/components/Typography";
import getStuff, { Role } from "@/utils/cms/getStuff";

const BrainsBehind = async () => {
  const data = await getStuff([Role.CEO, Role.Founder]);

  return (
    <div>
      <Transition delay={0.5}>
        <Typography variant="h1" className="mb-10 md:mb-12 xl:mb-16 2xl:mb-20">
          Brains Behind
        </Typography>
      </Transition>
      <div className="grid lg:grid-cols-2 gap-10 2xl:gap-20">
        {data.map((stuff, idx) => (
          <Transition key={idx} x={idx === 0 ? -70 : 70} delay={0.5}>
            <MemberCard {...stuff} key={idx} className="max-w-[800px]" />
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default BrainsBehind;
