"use client";

import SectionHeader from "@/components/SectionHeader";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div className="px-4">
      <SectionHeader
        title="Epics"
        callback={() => router.push("/epics/new")}
        iconDefinition={faPlus}
        buttonLabel="New"
      />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
