"use client";
import MenuDrawer from "#/components/home/menu";
import TabButtons from "#/components/home/tab-buttons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="w-full">
        <div className="h-32 w-full bg-gradient-to-b from-purple-950/70 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex place-items-center justify-center align-middle">
              <Image
                src={"/logo.svg"}
                width={27}
                height={27}
                alt={"skipp logo"}
              />
              <h4 className={"text-3xl font-bold"}>Skipp</h4>
            </div>

            <MenuDrawer />
          </div>
          <TabButtons />
        </div>
      </div>
    </div>
  );
}
