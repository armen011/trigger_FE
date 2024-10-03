import Transition from "@/components/Motion/Transition";
import Image from "next/legacy/image";

const HeroImage = () => {
  return (
    <Transition
      x={-50}
      duration={0.5}
      className="relative md:absolute md:right-[-20%] md:top-10 lg:top-[unset] lg:right-[unset] lg:relative w-[296px] h-[364px] md:w-[465px] md:h-[572px] xl:w-[566px] xl:h-[696px] 2xl:w-[733px] 2xl:h-[902px] flex-shrink-0 mt-0  lg:-mt-16 -2xl:-mt-20"
    >
      <Image src="/images/head.png" alt="hero" layout="fill" priority />
    </Transition>
  );
};

export default HeroImage;
