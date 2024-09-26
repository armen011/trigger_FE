import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <div className="min-w-screen min-h-screen flex flex-col justify-between overflow-x-hidden overflow-y-auto relative">
          {children}
          <Footer />
          <div className="w-full h-full bg-[url('/images/textures.png')] bg-contain bg-repeat absolute left-0 top-0 z-10" />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

export const metadata: Metadata = {
  title: "Trigger",
  description:
    "Touchpoints. Reflrect. Results. Research based marketing agency",
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
