"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";

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
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("activeTab") || "live";
    }
    return "live";
  });

  const handleTabChange = useCallback((key: string) => {
    setActiveTab(key);
  }, []);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("activeTab", activeTab);
    }
  }, [activeTab]);

  return (
    <div className="mt-4 flex place-items-center justify-between align-middle">
      {tabs.map((tab) => (
        <Button
          key={tab.key}
          onClick={() => handleTabChange(tab.key)}
          variant={"ghost"}
          className={`w-full border-b border-transparent bg-transparent ${
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
