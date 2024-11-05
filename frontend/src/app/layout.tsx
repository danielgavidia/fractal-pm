"use client";

import { themeStore } from "@/stores/themeStore";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { valueToColor } from "@/utils/valueToColor";
import AICopilot from "@/components/AICopilot";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { currentTheme } = themeStore();
  const { backgroundPrimary, textPrimary } = currentTheme;

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased">
        <div className="flex">
          <Sidebar />
          <main
            className="flex-1"
            style={{
              backgroundColor: valueToColor(backgroundPrimary),
              color: valueToColor(textPrimary),
            }}
          >
            {children}
          </main>
          <AICopilot />
        </div>
      </body>
    </html>
  );
}
