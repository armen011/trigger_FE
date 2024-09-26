import Header from "@/components/Header";
import React, { ReactNode } from "react";

const BaseLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="pt-20 md:pt-24 xl:pt-28 2xl:pt-36">
      <div className="z-10">{children}</div>
      <Header />
    </div>
  );
};

export default BaseLayout;
