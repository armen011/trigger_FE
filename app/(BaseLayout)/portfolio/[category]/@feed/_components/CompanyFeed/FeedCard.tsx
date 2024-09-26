"use client";
import Image, { ImageProps } from "@/components/Image";
import Link from "next/link";
import { useParams } from "next/navigation";

type FeedCardProps = {
  link: string;
  slug: string;
  image: ImageProps;
};
const FeedCard = ({ link, image, slug }: FeedCardProps) => {
  const params = useParams<{ clientSlug?: string }>();
  const isActive = params.clientSlug === slug;

  return (
    <Link href={link}>
      <div
        className={`h-[182px] md:h-[192px] xl:h-[236px] 2xl:h-[310px] w-full md:max-w-[433px] xl:max-w-[426px] 2xl:max-w-[560px] rounded-[28px] md:rounded-[40px] xl:rounded-[56px] overflow-hidden relative`}
      >
        {isActive && (
          <div className="w-full h-full absolute rounded-[28px] md:rounded-[40px] xl:rounded-[56px] border-8 border-primary-green animate-smooth-appear" />
        )}
        <Image {...image} alt={image.alt} className="w-full h-full" />
      </div>
    </Link>
  );
};

export default FeedCard;
