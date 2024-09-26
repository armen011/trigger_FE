import { FC } from "react";
import Image, { ImageProps } from "../Image";
import Link from "next/link";
import LinkIcon from "@/assets/icon/link.svg";
import Typography from "../Typography";
import Markdown from "../Markdown";

type MemberCardProps = {
  fullName: string;
  profession: string | undefined;
  experience: string | undefined;
  link: string | undefined;
  image: Omit<ImageProps, "className">;
  className?: string;
};

const MemberCard: FC<MemberCardProps> = ({
  fullName,
  image,
  experience,
  link,
  profession,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <div className="relative w-full rounded-[28px] md:rounded-[40px] xl:rounded-[56px] overflow-hidden mb-7 2xl:mb-8">
        <Image {...image} alt={image.alt} className="w-full" />
        {link && (
          <div className="absolute z-50 group bottom-7 right-7">
            <Link href={link}>
              <LinkIcon className="w-8 h-8 group-hover:stroke-text-secondary" />
            </Link>
          </div>
        )}
      </div>
      <Typography variant="h4" className="font-semibold mb-2">
        {fullName}
      </Typography>
      <Typography variant="p2" className="mb-5 xl:mb-6" color="secondary">
        {profession}
      </Typography>
      {experience && <Markdown content={experience} />}
    </div>
  );
};

export default MemberCard;
