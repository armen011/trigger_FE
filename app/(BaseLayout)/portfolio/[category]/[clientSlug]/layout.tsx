import { ReactNode } from "react";
import EmptyArea from "./_components/EmptyArea";

const Layout = ({
  children,
  params: { category },
}: {
  children: ReactNode;
  params: { category: string };
}) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-[100] bg-background-primary bg-opacity-60 animate-smooth-appear flex">
      <EmptyArea category={category} />
      {children}
    </div>
  );
};

export default Layout;
