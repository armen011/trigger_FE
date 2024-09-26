import { links } from "@/app/(BaseLayout)/portfolio/_utils/links";
import NavLink from "./NavLink";

type NavigationProps = {
  categorySlug: string;
};
const Navigation = ({ categorySlug }: NavigationProps) => {
  return (
    <div className="mb-6 md:mb-8 xl:mb-10 2xl:mb-12">
      <ul className="w-full bg-white flex bg-opacity-60 p-2 rounded-xl">
        {links.map(({ title, slug }, idx) => (
          <NavLink
            title={title}
            slug={slug}
            isActive={slug === categorySlug}
            key={idx}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
