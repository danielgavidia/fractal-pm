"use client";

import EpicDisplay from "@/components/EpicDisplay";
import { epicStore } from "@/stores/epicStore";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const { epics } = epicStore();
  const epic = epics.find((epic) => epic.id === params.slug);

  return <div>{epic && <EpicDisplay epic={epic} />}</div>;
};

export default Page;
