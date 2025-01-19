import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import type { BetEvent, Team } from "#/types";
import { useBetStore } from "#/lib/zustand/bet-store";
import { format } from "date-fns";

const TeamIcon = ({ team }: { team: Team }) => (
  <div className="flex w-[15%] flex-col items-center justify-center transition-all duration-100 ease-in-out active:scale-90">
    <Image
      src={team.logo}
      alt={`${team.shortName} logo`}
      width={36}
      height={36}
      className="max-h-[40px] max-w-[40px]"
    />
    <h6 className="truncate text-[10px]">{team.shortName}</h6>
  </div>
);

const BettingButton: React.FC<{
  value: string;
  odds: number;
  choiceId: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}> = ({ value, odds, isActive, onClick, className }) => (
  <ToggleGroupItem asChild value={value} aria-label={`Toggle ${value}`}>
    <Button
      variant="ghost"
      className={`h-10 w-full rounded-none ${value === "teamA" ? "rounded-bl-2xl" : value === "teamB" ? "rounded-br-2xl" : ""} bg-transparent text-sm text-white/60 ${
        isActive ? "!bg-purple-700 hover:bg-purple-600" : ""
      } ${className}`}
      onClick={onClick}
    >
      {odds}X
    </Button>
  </ToggleGroupItem>
);

const SportCard: React.FC<{
  betEvent: BetEvent;
}> = ({ betEvent }) => {
  const { toggleBet, activeChoices } = useBetStore();

  const createChoiceId = (choice: string, teamId?: string) =>
    `${choice}_${betEvent.eventId}_${teamId || choice}`;

  const handleBetToggle = (choice: string, odds: number, teamId?: string) => {
    const choiceId = createChoiceId(choice, teamId);

    toggleBet(
      {
        eventId: betEvent.eventId,
        stake: odds,
        odd: odds,
        choice,
        teams: {
          teamA: betEvent.teamA.data,
          teamB: betEvent.teamB.data,
        },
        eventTime: betEvent.time,
      },
      choiceId,
    );
  };

  const isChoiceActive = (choice: string, teamId?: string) =>
    activeChoices.includes(createChoiceId(choice, teamId));

  return (
    <div className="mb-4">
      <div className="relative flex place-items-center justify-between rounded-t-3xl bg-gradient-to-r from-neutral-600/10 via-white/5 to-neutral-600/10 px-4 py-2.5 align-middle">
        <TeamIcon team={betEvent.teamA.data} />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-6">
          <h6 className="text-[14px] text-white/60">
            {betEvent.teamA.data.teamValue}
          </h6>
          <div>
            <h4 className="text-center text-[8px]">{betEvent.sport}</h4>
            <h4 className="text-center">
              {format(betEvent.time, "HH:mm")}
            </h4>
            <h4 className="flex place-items-center gap-1 text-center align-middle text-[10px] opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
              {betEvent.perticipators}
            </h4>
          </div>
          <h6 className="text-[14px] text-white/60">
            {betEvent.teamB.data.teamValue}
          </h6>
        </div>
        <TeamIcon team={betEvent.teamB.data} />
      </div>

      <ToggleGroup
        className="mx-auto rounded-b-2xl bg-purple-800/20"
        type="single"
      >
        <BettingButton
          value="teamA"
          odds={betEvent.teamA.teamOdds}
          choiceId={createChoiceId("teamA", betEvent.teamA.teamId)}
          isActive={isChoiceActive("teamA", betEvent.teamA.teamId)}
          onClick={() =>
            handleBetToggle(
              "teamA",
              betEvent.teamA.teamOdds,
              betEvent.teamA.teamId,
            )
          }
          className="rounded-bl-2xl"
        />
        <BettingButton
          value="draw"
          odds={betEvent.drawOdd}
          choiceId={createChoiceId("draw")}
          isActive={isChoiceActive("draw")}
          onClick={() => handleBetToggle("draw", betEvent.drawOdd)}
        />
        <BettingButton
          value="teamB"
          odds={betEvent.teamB.teamOdds}
          choiceId={createChoiceId("teamB", betEvent.teamB.teamId)}
          isActive={isChoiceActive("teamB", betEvent.teamB.teamId)}
          onClick={() =>
            handleBetToggle(
              "teamB",
              betEvent.teamB.teamOdds,
              betEvent.teamB.teamId,
            )
          }
          className="rounded-br-2xl"
        />
      </ToggleGroup>
    </div>
  );
};

export default SportCard;
