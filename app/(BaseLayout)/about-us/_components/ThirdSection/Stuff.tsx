import MemberCard from "@/components/MemberCard";
import Transition from "@/components/Motion/Transition";
import getStuff, { Role } from "@/utils/cms/getStuff";

const margins = [2, 5, 8, 11, 14, 17, 20, 23, 26];

const isWithMargin = (idx: number) => {
  const item = idx + 1;
  return margins.includes(item);
};

const Stuff = async () => {
  const data = await getStuff([Role.Stuff]);

  return (
    <Transition>
      <div className="z-20 relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-16 2xl:gap-24">
        {data.map((stuff, idx) => (
          <MemberCard
            {...stuff}
            key={idx}
            className={`w-full md:even:mt-[30%] ${
              isWithMargin(idx) && "xl:mt-[50%]"
            }`}
          />
        ))}
      </div>
    </Transition>
  );
};

export default Stuff;
