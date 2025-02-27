import Transition from "@/components/Motion/Transition";
import Image from "next/legacy/image";

const HeroImage = () => {
  return (
    <Transition
      x={-50}
      duration={0.5}
      className="absolute right-0 top-10 w-[344px] h-[294px] md:w-[685px] md:h-[592px] xl:w-[750px] xl:h-[648px] 2xl:w-[1033px] 2xl:h-[847px] flex-shrink-0 mt-0"
    >
      <Image src="/images/pricing_hero.png" alt="hero" layout="fill" priority />
    </Transition>
  );
};

export default HeroImage;
