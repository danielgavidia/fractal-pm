"use client";

import { themeStore } from "@/stores/themeStore";
import "./globals.css";
import Sidebar from "@/components/navigation/Sidebar";
import { valueToColor } from "@/utils/valueToColor";
import AICopilot from "@/components/general/AICopilot";
import NavigationPath from "@/components/navigation/NavigationPath";
import { navigationStore } from "@/stores/navigationStore";
import FileBar from "@/components/navigation/FileBar";
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
              className="pr-2 shadow-sm sticky top-0 z-10"
              style={{
                backgroundColor: valueToColor(backgroundSecondary),
                borderColor: valueToColor(backgroundPrimary),
              }}
            >
              <FileBar />
              <div className="px-2">
                <NavigationPath navigationItem={currentNavigationItem} />
              </div>
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
