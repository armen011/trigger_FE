import { ReactNode } from "react";

const Layout = ({
  children,
  feed,
  params: { category },
}: {
  children: ReactNode;
  feed: ReactNode;
  params: { category: string };
}) => {
  return (
    <div className="z-50">
      {children}
      {feed}
    </div>
  );
};

export default Layout;
