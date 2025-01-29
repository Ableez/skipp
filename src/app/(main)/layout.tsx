"use client";
import MainNavbar from "#/components/main-navbar";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const pathname =usePathname()
  const colors = [
    "green",
    "red",
    "purple",
    "purple",
    "pink",
    "yellow",
    "orange",
    "blue",
    "gray",
    "cyan",
    "teal",
    "lime",
    "emerald",
    "amber",
    "rose",
    "fuchsia",
    "violet",
  ];
  
  const currentColor = pathname.startsWith("/leagues/club") ? "green" : "blue";
  
  return (
    <div className="relative">
      <div
        className={`fixed left-0 top-0 z-[-10] h-44 w-full bg-gradient-to-b from-purple-900/70 to-transparent`}
      />
      <div className={"sticky top-0 z-[49]"}>
        <MainNavbar />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
