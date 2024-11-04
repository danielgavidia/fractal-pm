import { dummyThemes } from "@/api/dummyThemes";
import { Theme } from "@/types/types";
import { create } from "zustand";

interface ThemeStoreState {
  currentTheme: Theme;
  themes: Theme[];
  createTheme: (theme: Theme) => void;
  setCurrentTheme: (theme: Theme) => void;
}

export const themeStore = create<ThemeStoreState>((set) => ({
  currentTheme: dummyThemes[0],
  themes: dummyThemes,
  createTheme: (theme: Theme) => set((state) => ({ themes: [...state.themes, theme] })),
  setCurrentTheme: (theme: Theme) => set({ currentTheme: theme }),
}));
