import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface HomeTabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useHomeTabStore = create<HomeTabState>()(
  persist(
    (set) => ({
      activeTab: "live",
      setActiveTab: (tab) => set({ activeTab: tab }),
    }),
    {
      name: "home-tab-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
