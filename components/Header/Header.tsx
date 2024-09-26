import Link from "next/link";
import Links from "./Links";
import TriggerIcon from "@/assets/icon/logo.svg";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="w-screen h-[72px] md:h-[88px] xl:h-[111px] 2xl:h-[128px] fixed top-0 left-0 z-50 flex justify-end lg:justify-center items-center pr-6 md:pr-10 lg:pr-0">
      <Link
        href={"/"}
        className="absolute left-4 top-6 md:left-10 md:top-7 xl:left-20 xl:top-9 2xl:top-10 2xl:left-30 z-50"
      >
        <TriggerIcon className="h-6 md:h-8 xl:h-10 2xl:h-12" />
      </Link>
      <Links />
      <MobileMenu />
    </div>
  );
};

export default Header;
