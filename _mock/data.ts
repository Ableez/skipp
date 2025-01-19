import { BetEvent, Team } from "#/types";

export const teams: Team[] = [
  {
    teamId: "chelsea",
    name: "Chelsea",
    shortName: "chelsea",
    abbr: "CHE",
    logo: "https://cdn.worldvectorlogo.com/logos/chelsea-fc-2.svg",
    teamValue: "65%",
  },
  {
    teamId: "barca",
    name: "Barcelona",
    shortName: "Barca",
    abbr: "FCB",
    logo: "https://cdn.worldvectorlogo.com/logos/fc-barcelona.svg",
    teamValue: "75%",
  },
  {
    teamId: "realmadrid",
    name: "Real Madrid",
    shortName: "Real Madrid",
    abbr: "RMA",
    logo: "https://cdn.worldvectorlogo.com/logos/real-madrid-club-de-futbol.svg",
    teamValue: "80%",
  },
  {
    teamId: "manutd",
    name: "Manchester United",
    shortName: "Man Utd",
    abbr: "MUN",
    logo: "https://cdn.worldvectorlogo.com/logos/manchester-united.svg",
    teamValue: "70%",
  },
  {
    teamId: "liverpool",
    name: "Liverpool",
    shortName: "Liverpool",
    abbr: "LIV",
    logo: "https://cdn.worldvectorlogo.com/logos/liverpool-fc-4.svg",
    teamValue: "78%",
  },
  {
    teamId: "bayern",
    name: "Bayern Munich",
    shortName: "Bayern",
    abbr: "BAY",
    logo: "https://cdn.worldvectorlogo.com/logos/bayern.svg",
    teamValue: "82%",
  },
  {
    teamId: "psg",
    name: "Paris Saint-Germain",
    shortName: "PSG",
    abbr: "PSG",
    logo: "https://cdn.worldvectorlogo.com/logos/psg-3.svg",
    teamValue: "79%",
  },
  {
    teamId: "juventus",
    name: "Juventus",
    shortName: "Juventus",
    abbr: "JUV",
    logo: "https://cdn.worldvectorlogo.com/logos/juventus-5.svg",
    teamValue: "72%",
  },
];

// ... existing code ...
export const betEvents: BetEvent[] = [
  {
    eventId: "1",
    drawOdd: 2,
    teamA: {
      teamId: "barca",
      data: teams.find((team) => team.teamId === "barca")!,
      teamOdds: 1.2,
    },
    teamB: {
      teamId: "chelsea",
      data: teams.find((team) => team.teamId === "chelsea")!,
      teamOdds: 3.5,
    },
    time: new Date(new Date().setHours(19, 0, 0)).toISOString(),
    perticipators: 200,
    sport: "Football",
  },
  {
    eventId: "2",
    drawOdd: 1.6,
    teamA: {
      teamId: "realmadrid",
      data: teams.find((team) => team.teamId === "realmadrid")!,
      teamOdds: 1.5,
    },
    teamB: {
      teamId: "manutd",
      data: teams.find((team) => team.teamId === "manutd")!,
      teamOdds: 2.8,
    },
    time: new Date(new Date().setHours(20, 0, 0)).toISOString(),
    perticipators: 150,
    sport: "Football",
  },
  {
    eventId: "3",
    drawOdd: 9.1,
    teamA: {
      teamId: "liverpool",
      data: teams.find((team) => team.teamId === "liverpool")!,
      teamOdds: 1.8,
    },
    teamB: {
      teamId: "bayern",
      data: teams.find((team) => team.teamId === "bayern")!,
      teamOdds: 2.5,
    },
    time: new Date(new Date().setHours(21, 0, 0)).toISOString(),
    perticipators: 180,
    sport: "Football",
  },
  {
    eventId: "4",
    drawOdd: 3.2,
    teamA: {
      teamId: "psg",
      data: teams.find((team) => team.teamId === "psg")!,
      teamOdds: 2.0,
    },
    teamB: {
      teamId: "juventus",
      data: teams.find((team) => team.teamId === "juventus")!,
      teamOdds: 2.2,
    },
    time: new Date(new Date().setHours(22, 0, 0)).toISOString(),
    perticipators: 220,
    sport: "Football",
  },
  {
    eventId: "5",
    drawOdd: 1.2,
    teamA: {
      teamId: "chelsea",
      data: teams.find((team) => team.teamId === "chelsea")!,
      teamOdds: 2.5,
    },
    teamB: {
      teamId: "realmadrid",
      data: teams.find((team) => team.teamId === "realmadrid")!,
      teamOdds: 1.8,
    },
    time: new Date(new Date().setHours(18, 30, 0)).toISOString(),
    perticipators: 190,
    sport: "Football",
  },
  {
    eventId: "6",
    drawOdd: 5.6,
    teamA: {
      teamId: "manutd",
      data: teams.find((team) => team.teamId === "manutd")!,
      teamOdds: 1.7,
    },
    teamB: {
      teamId: "barca",
      data: teams.find((team) => team.teamId === "barca")!,
      teamOdds: 2.6,
    },
    time: new Date(new Date().setHours(19, 30, 0)).toISOString(),
    perticipators: 210,
    sport: "Football",
  },
];
