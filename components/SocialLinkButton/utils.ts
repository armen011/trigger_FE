import { SocialLinkButtonType } from "./types";

export const linkMap: Record<
  SocialLinkButtonType,
  { href: string; className: string; content: string }
> = {
  facebook: {
    href: "https://www.facebook.com/bsmi.am?mibextid=LQQJ4d",
    className: "md:hover:bg-primary-green",
    content: "Facebook",
  },
  instagram: {
    href: "https://www.instagram.com/bsmi.am?igsh=MTd6c2J1dW45eHo4cw==",
    className: "md:hover:bg-primary-red",
    content: "Instagram",
  },
  telegram: {
    href: "https://t.me/bsmischool",
    className: "md:hover:bg-primary-blue",
    content: "Telegram",
  },
  linkedin: {
    href: "https://www.linkedin.com",
    className: "md:hover:bg-primary-yellow",
    content: "LinkedIn",
  },
};
