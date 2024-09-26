import Typography from "@/components/Typography";
import Link from "next/link";

type NavLinkProps = {
  title: string;
  slug: string;
  isActive: boolean;
};

const NavLink = ({ slug, title, isActive }: NavLinkProps) => {
  return (
    <Link href={`/portfolio/${slug}`} className="group">
      <div
        className={`px-10 transition-colors duration-300 rounded-lg ${
          isActive ? "bg-background-primary" : ""
        } py-2 md:py-3 lg:py-4`}
      >
        <Typography
          color="lightPrimary"
          variant="h4"
          className={`${
            isActive ? "text-white" : "group-hover:text-text-primary"
          } whitespace-nowrap font-medium transition-colors`}
        >
          {title}
        </Typography>
      </div>
    </Link>
  );
};

export default NavLink;
