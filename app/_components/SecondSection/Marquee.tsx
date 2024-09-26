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
          <div key={idx} className="flex items-center">
            <Typography variant="h3" className="md:mt-1">
              <span className="line-through">CREATIVE.</span> TOUCHPOINTS.
              REFLECT. RESULTS.
            </Typography>
            <div className="w-2 h-2 md:w-4 md:h-4 xl:w-6 xl:h-6 2xl:w-7  2xl:h-7 rounded-full bg-white mx-4" />
          </div>
        );
      })}
    </Marquee>
  );
};

export default Advertizer;
