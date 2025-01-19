import { Team } from "#/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Bet = {
  eventId: string;
  stake: number;
  choice: string | "draw";
  odd: number;
  teams: {
    teamA: Team;
    teamB: Team;
  };
  eventTime: string | Date;
};

type BetState = {
  bets: Bet[];
  activeChoices: string[];
  toggleBet: (bet: Bet, choiceId: string) => void;
  clearBet: (eventId: string) => void;
};

export const useBetStore = create<BetState>()(
  persist(
    (set) => ({
      bets: [],
      activeChoices: [],

      toggleBet: (bet, choiceId) =>
        set((state) => {
          if (state.activeChoices.includes(choiceId)) {
            return {
              bets: state.bets.filter((b) => b.eventId !== bet.eventId),
              activeChoices: state.activeChoices.filter((c) => c !== choiceId),
            };
          }

          // If there's already a bet for this event, replace it
          const eventId = bet.eventId;
          const updatedBets = state.bets.filter((b) => b.eventId !== eventId);
          const updatedChoices = state.activeChoices.filter(
            (c) => c.split("_")[1] !== eventId,
          );

          return {
            bets: [...updatedBets, bet],
            activeChoices: [...updatedChoices, choiceId],
          };
        }),

      clearBet: (eventId) =>
        set((state) => ({
          bets: state.bets.filter((bet) => bet.eventId !== eventId),
          activeChoices: state.activeChoices.filter(
            (choiceId) => choiceId.split("_")[1] !== eventId,
          ),
        })),
    }),
    {
      name: "bet-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
