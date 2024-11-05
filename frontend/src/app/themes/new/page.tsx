"use client";

import SectionHeader from "@/components/SectionHeader";
import ColorEditor from "@/components/ColorEditor";
import { useState } from "react";
import { Theme, Color } from "@/types/types";
import { themeStore } from "@/stores/themeStore";
import { useRouter } from "next/navigation";

const Page = () => {
  const { createTheme } = themeStore();
  const [theme, setTheme] = useState<Theme>({
    id: Date.now().toString(),
    name: "",
    backgroundPrimary: { hue: 180, saturation: 50, lightness: 50 },
    backgroundSecondary: { hue: 180, saturation: 50, lightness: 50 },
    textPrimary: { hue: 180, saturation: 50, lightness: 50 },
    textSecondary: { hue: 180, saturation: 50, lightness: 50 },
  });

  const handleColorChange = (key: keyof Theme) => (color: Color) => {
    setTheme((prev) => ({
      ...prev,
      [key]: color,
    }));
  };

  const router = useRouter();

  return (
    <div className="px-4">
      <SectionHeader title="New Theme" />
      <input
        type="text"
        placeholder="Theme Name"
        value={theme.name}
        onChange={(e) => setTheme((prev) => ({ ...prev, name: e.target.value }))}
        className="w-full p-2 mb-4 text-black text-xs outline-none rounded"
      />
      <ColorEditor
        title="Background Primary"
        value={theme.backgroundPrimary}
        onChange={handleColorChange("backgroundPrimary")}
      />
      <ColorEditor
        title="Background Secondary"
        value={theme.backgroundSecondary}
        onChange={handleColorChange("backgroundSecondary")}
      />
      <ColorEditor
        title="Text Primary"
        value={theme.textPrimary}
        onChange={handleColorChange("textPrimary")}
      />
      <ColorEditor
        title="Text Secondary"
        value={theme.textSecondary}
        onChange={handleColorChange("textSecondary")}
      />
      <button
        onClick={() => {
          if (theme.name) {
            createTheme(theme);
            router.push("/themes");
          }
        }}
        className="w-full p-2 mt-4 text-white rounded border-[0.5px] text-xs"
      >
        Create Theme
      </button>
    </div>
  );
};

export default Page;
