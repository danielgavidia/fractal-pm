import { NavigationItem } from "@/types/types";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { create } from "zustand";

interface NavigationStore {
  currentNavigationItemArray: NavigationItem[];
  setCurrentNavigationItemArray: (navigationItemArray: NavigationItem[]) => void;
}

export const navigationStore = create<NavigationStore>((set) => ({
  currentNavigationItemArray: [{ title: "Epics", iconDefinition: faTrophy, route: "/epics" }],
  setCurrentNavigationItemArray: (navigationItemArray: NavigationItem[]) =>
    set(() => ({ currentNavigationItemArray: navigationItemArray })),
}));
