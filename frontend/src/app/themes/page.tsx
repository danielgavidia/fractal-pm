"use client";

// import ColorEditor from "@/components/ColorEditor";
import ThemeDisplay from "@/components/ThemeDisplay";
import { themeStore } from "@/stores/themeStore";

const Page = () => {
  const { themes } = themeStore();
  return (
    <div className="p-4">
      {/* <ColorEditor /> */}
      {themes.map((theme, key) => (
        <ThemeDisplay key={key} theme={theme} />
      ))}
    </div>
  );
};

export default Page;
