"use client";
import React, { useCallback } from "react";
import { Button } from "../ui/button";
import { useHomeTabStore } from "#/lib/zustand/home-tab";

const tabs = [
  {
    icon: null,
    title: "Live",
    description: "Watch the latest live streams",
    key: "live",
  },
  {
    icon: null,
    title: "Upcoming",
    description: "Watch the upcoming live streams",
    key: "upcoming",
  },
  {
    icon: null,
    title: "Special",
    description: "Watch the special live streams",
    key: "special",
  },
];

const TabButtons = () => {
  const activeTab = useHomeTabStore((state) => state.activeTab);
  const setActiveTab = useHomeTabStore((state) => state.setActiveTab);

  const handleTabChange = useCallback(
    (key: string) => {
      setActiveTab(key);
    },
    [setActiveTab],
  );

  return (
    <div className="mt-4 flex place-items-center justify-between align-middle">
      {tabs.map((tab) => (
        <Button
          key={tab.key}
          onClick={() => handleTabChange(tab.key)}
          variant={"ghost"}
          className={`w-full border-b font-bold text-base border-transparent bg-transparent ${
            activeTab === tab.key
              ? "border-purple-950 text-white"
              : "text-neutral-500"
          }`}
          title={tab.description}
        >
          {tab.icon}
          {tab.title}
        </Button>
      ))}
    </div>
  );
};

export default TabButtons;
