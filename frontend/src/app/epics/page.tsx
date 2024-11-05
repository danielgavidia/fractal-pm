"use client";

import { epicStore } from "@/stores/epicStore";

// Components
import Kanban from "@/components/Kanban";
import SectionHeader from "@/components/SectionHeader";
import { useRouter } from "next/navigation";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const { epics } = epicStore();
  const router = useRouter();

  return (
    <div className="px-4">
      <SectionHeader
        title="Epics"
        callback={() => router.push("/epics/new")}
        iconDefinition={faPlus}
        buttonLabel="New"
      />
      <Kanban tickets={epics} />
    </div>
  );
};

export default Page;
