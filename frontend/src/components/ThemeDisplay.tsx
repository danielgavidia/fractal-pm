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
      className="flex border-[0.5px] rounded-md items-center w-full p-1"
      style={{ backgroundColor: valueToColor(backgroundPrimary), color: valueToColor(textPrimary) }}
    >
      <div className="flex-1 text-left text-sm p-1">{theme.name}</div>
      <div className="flex space-x-1">
        <div
          className="p-4 border-[0.5px]"
          style={{
            backgroundColor: valueToColor(backgroundPrimary),
            borderColor: valueToColor(textPrimary),
          }}
        ></div>
        <div
          className="p-4 border-[0.5px]"
          style={{
            backgroundColor: valueToColor(backgroundSecondary),
            borderColor: valueToColor(textPrimary),
          }}
        ></div>
        <div
          className="p-4 border-[0.5px]"
          style={{
            backgroundColor: valueToColor(textPrimary),
            borderColor: valueToColor(textPrimary),
          }}
        ></div>
        <div
          className="p-4 border-[0.5px]"
          style={{
            backgroundColor: valueToColor(textSecondary),
            borderColor: valueToColor(textPrimary),
          }}
        ></div>
      </div>
    </button>
  );
};

export default ThemeDisplay;
