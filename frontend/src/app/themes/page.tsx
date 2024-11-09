"use client";

import SectionHeader from "@/components/general/SectionHeader";
import ThemeDisplay from "@/components/general/ThemeDisplay";
import { themeStore } from "@/stores/themeStore";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Page = () => {
  const { themes } = themeStore();
  const router = useRouter();
  return (
    <div className="px-4">
      <SectionHeader
        title="Themes"
        callback={() => router.push("/themes/new")}
        iconDefinition={faPlus}
        buttonLabel="New"
      />
      <div className="flex flex-col space-y-2">
        {themes.map((theme, key) => (
          <ThemeDisplay key={key} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Page;
