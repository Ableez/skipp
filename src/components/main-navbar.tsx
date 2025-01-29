import React from "react";
import MenuDrawer from "./home/menu";
import Image from "next/image";
import Link from "next/link";

const MainNavbar = () => {
  return (
    <div className="flex place-items-center justify-between bg-gradient-to-b from-purple-950/60 to-transparent p-4 align-middle backdrop-blur-md md:px-8">
      <Link href={"/"}>
        <div className="flex place-items-center justify-center gap-2 align-middle">
          <Image src={"/logo.svg"} width={27} height={27} alt={"skipp logo"} />
          <h4 className={"text-3xl font-bold"}>Skipp</h4>
        </div>
      </Link>
      <MenuDrawer />
    </div>
  );
};

export default MainNavbar;
