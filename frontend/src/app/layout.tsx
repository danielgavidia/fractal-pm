"use client";

import { themeStore } from "@/stores/themeStore";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { valueToColor } from "@/utils/valueToColor";
import AICopilot from "@/components/AICopilot";
import NavigationPath from "@/components/NavigationPath";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { currentTheme } = themeStore();
  const { backgroundSecondary, textPrimary } = currentTheme;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <div className="flex w-full">
          <Sidebar />
          <div className="flex-1 min-w-0 flex flex-col">
            <div>
              <NavigationPath />
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
