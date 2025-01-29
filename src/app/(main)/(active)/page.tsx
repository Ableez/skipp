"use client";
import PlaceBetBar from "#/components/home/placebet-bar";
import TabButtons from "#/components/home/tab-buttons";
import SportCard from "#/components/sports/card";

import { betEvents } from "_mock/data";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="my-2 px-4">
        <TabButtons />
      </div>
      <div className="px-4">
        {betEvents.map((betEvent) => (
          <SportCard betEvent={betEvent} key={betEvent.eventId} />
        ))}
      </div>
      <PlaceBetBar />
    </div>
  );
}
