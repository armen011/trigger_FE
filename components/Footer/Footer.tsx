import Typography from "../Typography";
import Links from "./Links";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="w-full bg-white bg-opacity-10 px-4 md:px-20 2xl:px-32 pt-6 md:pt-12 rounded-t-[40px] md:rounded-t-[80px] lg:rounded-t-[100px] 2xl:rounded-t-[140px] z-30">
      <div className="flex justify-between flex-col lg:flex-row gap-3">
        <Typography variant="h2" className="font-semibold ">
          Feel free to write, call, and visit us. We really love to communicate
          with our clients.
        </Typography>
        <Links className="flex lg:hidden" />
        <Social />
      </div>
      <Links className="hidden lg:flex" />
      <Typography variant="p" color="tertiary" className="mb-5">
        ©2024 all rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
