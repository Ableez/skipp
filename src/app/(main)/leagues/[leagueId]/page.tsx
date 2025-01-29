import RowCard from "#/components/league-table/row-card";
import LoaderUI from "#/components/ui/loader";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/ui/table";

import { leagues } from "_mock/data";

type Props = {
  params: Promise<{
    leagueId: string;
  }>;
};

export default async function LeagueClubsInfo({ params }: Props) {
  const { leagueId } = await params;
  const leagueData = leagues.find((league) => league.id === leagueId) || null;

  if (!leagueData) {
    return (
      <div className="flex h-[40dvh] w-full place-items-center justify-center align-middle">
        <LoaderUI />
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <div className="m-2 rounded-2xl bg-neutral-200/5 p-2">
        <Table className="">
          <TableHeader>
            <TableRow className="border-transparent">
              <TableHead className="w-[5px]"></TableHead>
              <TableHead className="w-[200px]">Team</TableHead>
              <TableHead>MP</TableHead>
              <TableHead>PT</TableHead>
              <TableHead>GA</TableHead>
              <TableHead>GD</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leagueData.teams.map((team, index) => (
              <RowCard
                key={team}
                team={team}
                index={index}
                teamsLength={leagueData.teams.length}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
