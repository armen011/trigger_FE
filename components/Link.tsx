import { FC } from "react";
import Typography from "./Typography";

type LinkProps = {
  href: string;
  children: string;
};
const Link: FC<LinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="group">
      <Typography
        variant="p2"
        color="secondary"
        className="group-hover:!text-text-primary transition-colors duration-300 whitespace-nowrap"
      >
        {children}
      </Typography>
    </a>
  );
};

export default Link;
