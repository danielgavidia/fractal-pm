import { NavigationItem } from "@/types/types";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
// import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { create } from "zustand";

interface NavigationStore {
  currentNavigationItem: NavigationItem;
  setCurrentNavigationItem: (navigationItem: NavigationItem) => void;
  navigationItems: NavigationItem[];
  addNavigationItem: (navigationItem: NavigationItem) => void;
  deleteNavigationItem: (navigationItem: NavigationItem) => void;
}

export const navigationStore = create<NavigationStore>((set) => ({
  currentNavigationItem: { title: "Projects", route: "/projects", iconDefinition: faAtom },
  setCurrentNavigationItem: (navigationItem: NavigationItem) =>
    set(() => ({ currentNavigationItem: navigationItem })),
  navigationItems: [],
  addNavigationItem: (navigationItem: NavigationItem) =>
    set((state) => {
      // Check if the navigation item already exists
      const exists = state.navigationItems.some((item) => item.title === navigationItem.title);
      return exists ? state : { navigationItems: [...state.navigationItems, navigationItem] };
    }),
  deleteNavigationItem: (navigationItem: NavigationItem) => {
    set((state) => ({
      navigationItems: state.navigationItems.filter((item) => item !== navigationItem),
    }));
  },
}));
