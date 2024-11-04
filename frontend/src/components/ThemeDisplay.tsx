import { themeStore } from "@/stores/themeStore";
import { Theme } from "@/types/types";
import { valueToColor } from "@/utils/valueToColor";

interface ThemeDisplayProps {
  theme: Theme;
}

const ThemeDisplay = ({ theme }: ThemeDisplayProps) => {
  const { setCurrentTheme } = themeStore();
  const { backgroundPrimary, backgroundSecondary, textPrimary, textSecondary } = theme;
  return (
    <button
      onClick={() => setCurrentTheme(theme)}
      className="flex border-[0.5px] items-center w-full"
    >
      <div className="flex-1 text-left">Theme</div>
      <div className="flex">
        <div className="p-4" style={{ backgroundColor: valueToColor(backgroundPrimary) }}></div>
        <div className="p-4" style={{ backgroundColor: valueToColor(backgroundSecondary) }}></div>
        <div className="p-4" style={{ backgroundColor: valueToColor(textPrimary) }}></div>
        <div className="p-4" style={{ backgroundColor: valueToColor(textSecondary) }}></div>
      </div>
    </button>
  );
};

export default ThemeDisplay;
