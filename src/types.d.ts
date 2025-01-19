type Team = {
  teamId: string;
  name: string;
  shortName: string;
  abbr: string;
  logo: string;
  teamValue: string;
};

export type BetEvent = {
  eventId: string;
  teamA: {
    teamId: string;
    data: Team;
    teamOdds: number;
  };
  teamB: {
    teamId: string;
    data: Team;
    teamOdds: number;
  };
  drawOdd: number;
  perticipators: number;
  sport: string;
  time: string;
};
