import CloseIcon from "@/assets/icon/close.svg";
import Image, { ImageProps } from "@/components/Image";
import Typography from "@/components/Typography";
import Link from "next/link";

type SideBarHeaderProps = {
  name: string;
  socials: [];
  image: ImageProps;
  category: string;
};

const SideBarHeader = ({ name, image, category }: SideBarHeaderProps) => {
  return (
    <div className="flex justify-between w-full overflow-hidden">
      <div className=" flex flex-col justify-between">
        <button className="mt-4 md:mt-6 xl:mt-8 group cursor-pointer">
          <Link href={`/portfolio/${category}`}>
            <CloseIcon className="w-6 h-6 xl:w-7 xl:h-7 2xl:h-8 2xl:w-8 [&>path]:fill-background-primary group-hover:[&>path]:opacity-60" />
          </Link>
        </button>
        <div>
          <Typography
            color="lightPrimary"
            variant="h1"
            className="absolute md:relative"
          >
            {name}
          </Typography>
        </div>
      </div>
      <div className="w-[288px] md:w-[343px] xl:w-[380px] 2xl:w-[477px] h-[168px] md:h-[200px] xl:h-[222px] 2xl:h-[279px] rounded-bl-[56px] overflow-hidden flex-shrink-0">
        <Image {...image} alt={image.alt} className="w-full h-full" />
      </div>
    </div>
  );
};

export default SideBarHeader;
