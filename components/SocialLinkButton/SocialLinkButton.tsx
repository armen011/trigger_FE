import { FC } from "react";
import { SocialLinkButtonType } from "./types";
import { linkMap } from "./utils";
import Typography from "../Typography";

type SocialLinkButtonProps = {
  type: SocialLinkButtonType;
};

const SocialLinkButton: FC<SocialLinkButtonProps> = ({ type }) => {
  const { href, className, content } = linkMap[type];
  return (
    <a href={href} className="w-fit">
      <div
        className={`${className} px-8 py-2 md:px-9 md:py-3 bg-white rounded-[40px] w-fit transition-colors duration-300 group`}
      >
        <Typography
          variant="p"
          className="!text-black font-medium md:group-hover:!text-text-primary transition-colors duration-300"
        >
          {content}
        </Typography>
      </div>
    </a>
  );
};

export default SocialLinkButton;
