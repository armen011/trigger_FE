import Typography from "@/components/Typography";
import { values } from "./utils";
import Transition from "@/components/Motion/Transition";

const opacityNumbers = [1, 2];

const OurValues = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 xl:gap-10 2xl:gap-20">
      {values.map(({ title, Icon }, idx) => (
        <Transition
          key={idx}
          duration={0.5}
          delay={idx * 0.2}
          className={`flex flex-col md:flex-row items-end md:items-center px-8 md:px-14  2xl:px-20 py-8 md:py-9 xl:py-12 2xl:py-14 rounded-[28px] md:rounded-[40px] xl:rounded-[56px] 2xl:max-h-[416px] xl:max-h-[calc((100vh-220px)/2)] bg-white ${
            opacityNumbers.includes(idx) ? "bg-opacity-30" : "bg-opacity-50"
          }`}
        >
          <Typography variant="h2" color="lightPrimary" className="mr-auto">
            {title}
          </Typography>
          <Icon className="h-[145px] xl:h-full" />
        </Transition>
      ))}
    </div>
  );
};

export default OurValues;
