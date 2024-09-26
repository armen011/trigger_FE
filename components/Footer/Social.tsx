import SocialLinkButton from "../SocialLinkButton";

const Social = () => {
  return (
    <div
      className={`flex flex-col md:flex-row lg:flex-col xl:flex-row md:items-center lg:items-start xl:items-center h-fit gap-3 mb-6 lg:mb-0`}
    >
      <div className="flex shrink-0 gap-3 items-center">
        <SocialLinkButton type="facebook" />
        <div className="w-2 h-2 rounded-full bg-white shrink-0" />
        <SocialLinkButton type="instagram" />
      </div>
      <div className="w-2 h-2 rounded-full bg-white shrink-0 hidden md:block lg:hidden xl:block" />
      <div className="flex shrink-0 gap-3 items-center">
        <SocialLinkButton type="telegram" />
        <div className="w-2 h-2 rounded-full bg-white shrink-0" />
        <SocialLinkButton type="linkedin" />
      </div>
    </div>
  );
};

export default Social;
