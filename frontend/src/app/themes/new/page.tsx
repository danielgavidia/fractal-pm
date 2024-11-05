import SectionHeader from "@/components/SectionHeader";
import ColorEditor from "@/components/ColorEditor";

const Page = () => {
  return (
    <div className="px-4">
      <SectionHeader title="New Theme" />
      <ColorEditor title="Background Primary" />
      <ColorEditor title="Background Secondary" />
      <ColorEditor title="Text Primary" />
      <ColorEditor title="Text Secondary" />
    </div>
  );
};

export default Page;
