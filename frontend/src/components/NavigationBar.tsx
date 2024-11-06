import { NavigationItem } from "@/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface NavigationBarProps {
  navigationItems: NavigationItem[];
}

const NavigationBar = ({ navigationItems }: NavigationBarProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState<NavigationItem>();

  return (
    <div className="border-b-[0.5px] py-2 flex space-x-3">
      {navigationItems.map((item, key) => (
        <button
          key={key}
          onClick={() => {
            setSelected(item);
            router.push(item.route);
          }}
          className={`flex space-x-1 items-center text-[10px] ${
            selected === item ? "border-b-[0.5px]" : ""
          }`}
        >
          <div className="flex items-center">{item.title}</div>
          <div className="h-full w-full">
            <FontAwesomeIcon icon={item.iconDefinition} />
          </div>
        </button>
      ))}
    </div>
  );
};

export default NavigationBar;
