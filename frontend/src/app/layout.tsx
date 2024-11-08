"use client";

import { themeStore } from "@/stores/themeStore";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { valueToColor } from "@/utils/valueToColor";
import AICopilot from "@/components/AICopilot";
import NavigationPath from "@/components/NavigationPath";
import { navigationStore } from "@/stores/navigationStore";
// import { useEffect } from "react";
// import { main } from "@/lib/rag/main";
// import { taskStore } from "@/stores/taskStore";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { currentTheme } = themeStore();
  // const { tasks } = taskStore();
  const { backgroundPrimary, backgroundSecondary, textPrimary } = currentTheme;
  const { currentNavigationItem } = navigationStore();

  // useEffect(() => {
  //   const tasksStringified = tasks.map((task) => JSON.stringify(task));
  //   main(tasksStringified);
  // }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <div className="flex w-full">
          <Sidebar />
          <div className="flex-1 min-w-0 flex flex-col">
            <div
              className="px-2 shadow-md border-b-[0.5px] sticky top-0 z-10"
              style={{
                backgroundColor: valueToColor(backgroundSecondary),
                borderColor: valueToColor(backgroundPrimary),
              }}
            >
              <NavigationPath navigationItem={currentNavigationItem} />
            </div>
            <main
              className="h-full"
              style={{
                backgroundColor: valueToColor(backgroundSecondary),
                color: valueToColor(textPrimary),
              }}
            >
              {children}
            </main>
          </div>

          <AICopilot />
        </div>
      </body>
    </html>
  );
}
