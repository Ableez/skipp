"use client";
import MenuDrawer from "#/components/home/menu";
import PlaceBetBar from "#/components/home/placebet-bar";
import TabButtons from "#/components/home/tab-buttons";
import SportCard from "#/components/sports/card";

import { betEvents } from "_mock/data";
import Image from "next/image";

export default function Home() {

  return (
    <div className="h-full w-full">
      <div className="h-32 w-full bg-gradient-to-b from-purple-950/70 to-transparent px-4">
        <div className="fixed left-0 z-50 flex w-full items-center justify-between bg-gradient-to-b from-purple-950/70 via-transparent to-transparent px-4 pb-2 pt-4 backdrop-blur-md">
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
        <div className="pt-14">
          <TabButtons />
        </div>
      </div>

      <div className="px-4">
        {betEvents.map((betEvent) => (
          <SportCard betEvent={betEvent} key={betEvent.eventId} />
        ))}
      </div>

      <PlaceBetBar/>
    </div>
  );
}
