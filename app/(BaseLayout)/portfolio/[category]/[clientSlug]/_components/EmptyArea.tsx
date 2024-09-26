"use client";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

type EmptyAreaProps = {
  category: string;
};

const EmptyArea = ({ category }: EmptyAreaProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/portfolio/${category}`);
      }}
      className="flex-grow h-full"
    ></div>
  );
};

export default EmptyArea;
