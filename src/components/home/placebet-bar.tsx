import { useBetStore } from "#/lib/zustand/bet-store";
import React, { useState } from "react";
import { Button } from "#/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "#/components/ui/drawer";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { Input } from "../ui/input";

const PlaceBetBar = () => {
  const { bets } = useBetStore((s) => s);
  const totalPrice = bets.reduce((acc, bet) => acc + bet.stake, 0);
  const [stake, setStake] = useState(0);

  return (
    <div
      className={`fixed ${bets.length > 0 ? "bottom-2" : "-bottom-44"} left-1/2 z-40 flex w-[96dvw] -translate-x-1/2 items-center justify-center gap-2 rounded-3xl border border-purple-900 bg-purple-900/50 px-4 py-4 backdrop-blur-md duration-300 transition-all ease-in-out`}
    >
      <div className="w-[40%] rounded-2xl bg-purple-900 p-2 px-4 text-center text-sm">
        <span className="font-bold">Odds: {totalPrice.toFixed(2)}</span>
      </div>

      <Drawer shouldScaleBackground>
        <DrawerTrigger asChild>
          <Button className="w-[60%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
              <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
              <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
              <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
              <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
              <path d="M5 15v1m0 -8v1" />
            </svg>
            Place bet
          </Button>
        </DrawerTrigger>
        <DrawerContent
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1579547945478-a6681fb3c3c9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <DrawerTitle className={"p-4"}>Place bet</DrawerTitle>

          <div className="bg-gradient-to-b from-transparent via-black to-black">
            <div className="p-2">
              {bets.map((bet) => (
                <div
                  key={bet.eventId}
                  className="mb-2 flex place-items-center justify-between gap-6 rounded-2xl bg-white/5 px-4 py-3 align-middle"
                >
                  <div className="flex place-items-center gap-6 align-middle">
                    <div className="relative flex place-items-center align-middle">
                      <Image
                        src={bet.teams.teamA.logo}
                        width={30}
                        height={30}
                        alt="team logo"
                        className="aspect-square -rotate-12 rounded-full"
                      />
                      <Image
                        src={bet.teams.teamB.logo}
                        width={30}
                        height={30}
                        alt="team logo"
                        className="absolute left-3 aspect-square rotate-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-[10px] text-white/60">
                        {bet.teams.teamA.shortName} VS{" "}
                        {bet.teams.teamB.shortName}
                      </h4>
                      <h4 className="text-sm font-semibold">
                        {bet.choice === "teamA"
                          ? bet.teams.teamA.shortName
                          : bet.choice === "teamB"
                            ? bet.teams.teamB.name
                            : "Draw"}
                      </h4>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-center">
                    <h4 className="font-semibold">{bet.odd}X</h4>
                    <h4 className="text-[10px] text-neutral-300">
                      in {formatDistanceToNow(new Date(bet.eventTime))}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <DrawerFooter>
              <div className="mb-1 flex place-items-center justify-start gap-2 rounded-2xl border border-neutral-800 px-4 align-middle">
                <h4 style={{ fontFamily: "sans-serif" }} className="text-lg">
                  ₦
                </h4>
                <Input
                  value={stake}
                  onChange={(e) => setStake(parseInt(e.target.value))}
                  className="placeholder:font-sans! w-[50%] rounded-none border-none px-0 py-5 text-lg focus-visible:outline-none focus-visible:ring-0"
                />

                <h4 className="text-sm">
                  <span>Pot. Wins: </span>
                  <span className="font-semibold">{20_000}</span>
                </h4>
              </div>

              <DrawerClose asChild>
                <Button>Bet</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default PlaceBetBar;
