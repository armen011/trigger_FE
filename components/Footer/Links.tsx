import { FC } from "react";
import Link from "../Link";
import NextLink from "next/link";
import Typography from "../Typography";

type LinksProps = {
  className: string;
};
const Links: FC<LinksProps> = ({ className }) => {
  return (
    <div className={`${className} flex justify-between my-6 flex-wrap gap-3`}>
      <div className="flex md:justify-between gap-3 md:gap-12 flex-wrap">
        <Link href="mailto:start@trigger.am">start@trigger.am</Link>
        <Link href="tel:+37444144904">+374 44 144904</Link>
        <Link href="https://www.google.com/maps/dir//business+school+of+marketing+%26+innovations+yerevan+address/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x406abdfcd18f61bd:0x44fb2918cf7535fb?sa=X&ved=1t:3061&ictx=111">
          Yerevan, Yekmalyan 1/1
        </Link>
      </div>
      <div className="flex gap-3 lg:gap-12 flex-wrap lg:flex-nowrap ls:shrink-0">
        <NextLink href="/about-us" className="group">
          <Typography
            color="secondary"
            className="group-hover:!text-text-primary transition-colors duration-300 whitespace-nowrap"
          >
            Who We Are
          </Typography>
        </NextLink>
        <NextLink href="/portfolio" className="group">
          <Typography
            color="secondary"
            className="group-hover:!text-text-primary transition-colors duration-300 whitespace-nowrap"
          >
            Our Results
          </Typography>
        </NextLink>
        <NextLink href="/contact-us" className="group">
          <Typography
            color="secondary"
            className="group-hover:!text-text-primary transition-colors duration-300 whitespace-nowrap"
          >
            Contact Us
          </Typography>
        </NextLink>
      </div>
    </div>
  );
};

export default Links;
