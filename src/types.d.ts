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

export type League = {
  id: string;
  country: string;
  imgUrl: string;
  name: string;
  teams: string[];
};

export type Player = {
  short_name: string;
  long_name: string;
  age: number;
  dob: string;
  height_cm: number;
  weight_kg: number;
  nationality: string;
  club: string;
  overall: number;
  value_eur: number;
  player_positions: string;
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physic: number;
  gk_diving: number | null;
  gk_handling: number | null;
  gk_kicking: number | null;
  gk_reflexes: number | null;
  gk_speed: number | null;
  gk_positioning: number | null;
};
