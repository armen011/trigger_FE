import Typography from "@/components/Typography";

import Marquee from "react-fast-marquee";
import getPartners from "@/utils/cms/getPartners";
import Image from "@/components/Image";

const Partners = async () => {
  const partners = await getPartners();

  return (
    <div className="flex flex-col items-center py-20 md:py-[120px] xl:py-[140px] 2xl:py-[180px]">
      <Typography variant="h1" className="mb-10 md:mb-12 xl:mb-16 2xl:mb-20">
        They Trusted Us
      </Typography>
      <Marquee className="w-full pl-36 mb-3 md:mb-4 xl:mb-8" speed={100}>
        {partners.firstRow.map((imageProps, index) => (
          <div
            className="h-[38px] md:h-[50px] xl:h-[68px] 2xl:h-[90px] mr-10  md:mr-[64px] xl:mr-20"
            key={index}
          >
            <Image
              {...imageProps}
              alt={imageProps.alt}
              className="h-full w-fit"
            />
          </div>
        ))}
      </Marquee>
      <Marquee className="w-full" speed={100}>
        {partners.secondRow.map((imageProps, index) => (
          <div
            className="h-[38px] md:h-[50px] xl:h-[68px] 2xl:h-[90px] mr-20"
            key={index}
          >
            <Image
              {...imageProps}
              alt={imageProps.alt}
              className="h-full w-fit"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;
