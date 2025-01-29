"use client";
import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { useRouter } from "next/navigation";

type Props = {
  team: string;
  index: number;
  teamsLength: number;
};

const RowCard = ({ team, index, teamsLength }: Props) => {
  const router = useRouter();

  return (
    <TableRow
      key={team}
      className={`${index === teamsLength - 4 ? "border-t border-neutral-700" : "border-transparent"} ${index >= teamsLength - 3 ? "bg-red-950/20 hover:bg-red-950/30" : ""} cursor-pointer`}
      onClick={() => router.push(`/leagues/club/${team}`)}
    >
      <TableCell className="font-medium">{index + 1}</TableCell>
      <TableCell className="text-xs font-medium">{team}</TableCell>
      <TableCell>2</TableCell>
      <TableCell>5</TableCell>
      <TableCell>5</TableCell>
      <TableCell>6</TableCell>
    </TableRow>
  );
};

export default RowCard;
