import { NavigationItem } from "@/types/types";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { create } from "zustand";

interface NavigationStore {
  currentNavigationItem: NavigationItem;
  setCurrentNavigationItem: (navigationItem: NavigationItem) => void;
  navigationItems: NavigationItem[];
  addNavigationItem: (navigationItem: NavigationItem) => void;
}

export const navigationStore = create<NavigationStore>((set) => ({
  currentNavigationItem: { title: "Epics", iconDefinition: faTrophy, route: "/epics" },
  setCurrentNavigationItem: (navigationItem: NavigationItem) =>
    set(() => ({ currentNavigationItem: navigationItem })),
  navigationItems: [],
  addNavigationItem: (navigationItem: NavigationItem) =>
    set((state) => ({ navigationItems: [...state.navigationItems, navigationItem] })),
}));
