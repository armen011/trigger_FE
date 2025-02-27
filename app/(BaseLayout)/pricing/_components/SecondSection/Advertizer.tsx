import Image from "next/legacy/image";
import Typography from "@/components/Typography";
import Marquee from "react-fast-marquee";

const Advertizer = () => {
  return (
    <Marquee
      className="w-full h-[66px] md:h-[83px] xl:h-[96px] 2xl:h-[128px] border-white border-t border-b flex items-center"
      speed={100}
    >
      {Array.from({ length: 4 }).map((_, idx) => {
        return (
          <div key={idx} className="flex items-center gap-4 md:gap-6 xl:gap-10">
            <Typography variant="h3" className="uppercase">
              Note: we do not offer SMM services for 300,000 AMD per month
            </Typography>
            <div className="relative w-[30px] h-[28px] md:w-[39px] md:h-[37px] xl:w-[47px] xl:h-[44px] 2xl:w-[61px] 2xl:h-[56px] mr-4 md:mr-6 xl:mr-10">
              <Image src="/images/warning.png" layout="fill" />
            </div>
          </div>
        );
      })}
    </Marquee>
  );
};

export default Advertizer;
