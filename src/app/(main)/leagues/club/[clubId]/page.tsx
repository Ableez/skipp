import { Player } from "#/types";
import teams from "_mock/teams.json";
import Image from "next/image";
import React from "react";

type Props = {
  params: Promise<{
    clubId: string;
  }>;
};

const ClubPage = async ({ params }: Props) => {
  const { clubId } = await params;
  const clubPlayers = teams[
    decodeURI(clubId) as keyof typeof teams
  ] as Player[];

  // console.log("clubPlayers: ", clubPlayers);

  return (
    <div>
      <h4 className={"px-4 text-xl font-bold text-white"}>
        {decodeURI(clubId)}
      </h4>

      <div className={"grid p-4"}>
        {clubPlayers.map((player, idx) => (
          <div
            key={player.long_name}
            className="flex place-items-center justify-between border-b border-neutral-900 py-4 align-middle"
          >
            <div className="flex place-items-center justify-start gap-6 align-middle">
              <div
                className={`flex place-items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-${["orange", "blue", "purple", "green"][Math.floor(Math.random() * 4)]}-800/10 via-neutral-800 p-6 align-middle`}
              >
                <Image
                  className="opacity-50"
                  src={"/logo.svg"}
                  alt={"Player image"}
                  width={30}
                  height={30}
                />
              </div>

              <div className="grid gap-[-20px]">
                <div className="text-base font-bold">
                  {player.short_name}
                  <h4 className="text-xs opacity-50">
                    {player.player_positions}
                  </h4>
                </div>
                <div className="flex place-items-center justify-start gap-1 align-middle mb-0.5">
                  <div className="rounded-full bg-white/5 p-0.5">
                    <Image
                      src={"/logo.svg"}
                      alt={"logo"}
                      width={12}
                      height={12}
                    />
                  </div>
                  <h4 className="text-xs font-bold opacity-50">
                    {player.club}
                  </h4>
                </div>
                <div className="flex place-items-center justify-start gap-1 align-middle mb-0.5">
                  <div className="rounded-full bg-white/5 p-0.5">
                    <Image
                      src={"/logo.svg"}
                      alt={"logo"}
                      width={12}
                      height={12}
                    />
                  </div>
                  <h4 className="text-xs font-bold opacity-50">
                    {player.nationality}
                  </h4>
                </div>
              </div>
            </div>

            <div className="flex place-items-center justify-between gap-1 align-middle">
              {[
                player.overall,
                player.defending,
                player.dribbling,
                player.passing,
                player.physic,
                player.shooting,
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center first-of-type:mr-1"
                >
                  <div className="grid h-6 w-2.5 place-items-end rounded-xl bg-neutral-600">
                    <div
                      style={{
                        height: `${stat}%`,
                      }}
                      className={`w-full rounded-xl bg-gradient-to-t from-${idx === 0 ? "red" : idx === 1 ? "green" : idx === 4 ? "green" : idx === 2 ? "blue" : idx === 3 ? "purple" : "blue"}-800 via-${idx === 0 ? "red" : idx === 1 ? "green" : idx === 4 ? "green" : idx === 2 ? "blue" : idx === 3 ? "purple" : "blue"}-600 to-${idx === 0 ? "red" : idx === 1 ? "green" : idx === 4 ? "green" : idx === 2 ? "blue" : idx === 3 ? "purple" : "blue"}-400`}
                    />
                  </div>
                  <h4 className="mt-1 text-[10px] font-semibold">
                    {stat ?? "00"}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubPage;
