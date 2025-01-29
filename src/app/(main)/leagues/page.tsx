import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "#/components/ui/drawer";
import LoaderUI from "#/components/ui/loader";
import { leagues } from "_mock/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeagueInfo = () => {
  const leaguesData = leagues;

  if (!leaguesData)
    return (
      <div className="flex h-[40dvh] w-full place-items-center justify-center align-middle">
        <LoaderUI />
      </div>
    );

  return (
    <div className="px-4">
      <div className="flex place-items-center justify-between gap-2 px-2">
        <h4 className="text-xl font-bold opacity-60">Leagues</h4>
        <Drawer>
          <DrawerTrigger asChild>
            <button className="flex place-items-center justify-between gap-1 rounded-full p-2 px-4 align-middle duration-300 ease-in hover:bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9.5 4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1 -1.5 1.5h-4a1.5 1.5 0 0 1 -1.5 -1.5v-4a1.5 1.5 0 0 1 1.5 -1.5z" />
                <path d="M9.5 13a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1 -1.5 1.5h-4a1.5 1.5 0 0 1 -1.5 -1.5v-4a1.5 1.5 0 0 1 1.5 -1.5z" />
                <path d="M17 5a1 1 0 0 1 1 1v9.584l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-9.586a1 1 0 0 1 1 -1" />
              </svg>
              <span className="text-xs">By name</span>
            </button>
          </DrawerTrigger>
          <DrawerContent className="pb-4">
            <DrawerTitle className="px-4 opacity-60">Sort by</DrawerTitle>
            <div className="flex flex-col items-center p-4">
              <DrawerClose className="w-full rounded-2xl px-4 py-2 text-left duration-300 ease-in hover:bg-white/5">
                <h4>Name</h4>
              </DrawerClose>
              <DrawerClose className="w-full rounded-2xl px-4 py-2 text-left duration-300 ease-in hover:bg-white/5">
                <h4>Clubs</h4>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        {leaguesData.map((league) => {
          return (
            <Link
              href={`/leagues/${league.id}`}
              key={league.name}
              className="group relative flex h-14 cursor-pointer place-items-center justify-between rounded-3xl bg-gradient-to-r from-purple-800/10 via-white/5 to-neutral-600/10 px-3 py-2.5 align-middle transition-all duration-300 ease-in hover:bg-gradient-to-r hover:from-neutral-700/10 hover:via-white/10 hover:to-neutral-600/10"
            >
              <div className="flex place-items-center justify-start gap-3 align-middle">
                {/* enable when yuve got real logos */}
                <div className="rounded-full bg-white/5 p-2">
                  <Image
                    src={"/logo.svg"}
                    alt="league logo"
                    width={20}
                    height={20}
                    className="transition-all duration-200 ease-in group-hover:rotate-45 group-hover:scale-[0.9]"
                  />
                </div>

                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold">{league.name}</h4>
                  <div className="flex place-items-center justify-start gap-3 align-middle">
                    <span className="text-[11px] text-white/50">
                      {league.teams.length} Teams
                    </span>
                    <span className="text-[11px] text-white/50">
                      {league.teams.length} Teams
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="flex place-items-center gap-2 align-middle text-xs text-white/60">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-600" />
                  {Math.floor(Math.random() * 7) + 1} Active
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeagueInfo;
