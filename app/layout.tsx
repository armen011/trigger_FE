import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Image from "next/legacy/image";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-white">
        <main className="min-h-screen flex flex-col items-center justify-center p-4">
          {/* Logo */}
          <div className="mb-12 w-full max-w-[400px]">
            <Image
              src="/images/logo.png"
              alt="Gate21 Marketing"
              width={800}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Under Construction Message */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-[#622E64]">
              <span className="text-xl font-medium">Under Construction</span>
            </div>
            <p className="text-gray-600">
              Our website is currently being updated. We'll be back soon!
            </p>
          </div>
        </main>
      </body>
    </html>
  );
  // return (
  //   <html lang="en">
  //     <head></head>
  //     <body className={inter.className}>
  //       <div className="min-w-screen min-h-screen flex flex-col justify-between overflow-x-hidden overflow-y-auto relative">
  //         {children}
  //         <Footer />
  //         <Image
  //           src="/images/textures.webp"
  //           priority
  //           layout="fill"
  //           className="z-10"
  //         />
  //         {/* <div className="w-full h-full bg-[url('/images/textures.webp')] bg-contain bg-repeat absolute left-0 top-0 z-10" /> */}
  //       </div>
  //     </body>
  //   </html>
  // );
};

export default RootLayout;

export const metadata: Metadata = {
  title: "Gate 21",
  description: "From idea to result.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" }, // 16x16 icon
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" }, // 32x32 icon
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      }, // Apple icon
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      }, // Android icon
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      }, // Android icon
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};
