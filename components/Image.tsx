import NextImage from "next/legacy/image";

export type ImageProps = {
  width: number;
  height: number;
  alt: string;
  src: string;
  className?: string;
};
const Image = ({ width, height, alt = "", src, className }: ImageProps) => {
  return (
    <NextImage
      width={width}
      height={height}
      alt={alt}
      src={src}
      className={className}
    />
  );
};

export default Image;
