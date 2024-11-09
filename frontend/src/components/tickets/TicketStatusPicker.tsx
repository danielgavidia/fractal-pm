import { statusMapping } from "@/utils/statusMapping";
import TicketStatusBadge from "@/components/tickets/TicketStatusBadge";
import { TicketStatus } from "@/types/types";
import { themeStore } from "@/stores/themeStore";
import { valueToColor } from "@/utils/valueToColor";

interface TicketStatusPickerProps {
  callback: (value: TicketStatus) => void;
  defaultStatus: TicketStatus;
}

const TicketStatusPicker = ({ callback, defaultStatus }: TicketStatusPickerProps) => {
  const { currentTheme } = themeStore();
  const backgroundPrimary = valueToColor(currentTheme.backgroundPrimary);
  const textPrimary = valueToColor(currentTheme.textPrimary);

  return (
    <div className="grid grid-cols-2 py-2">
      {Object.values(statusMapping).map((status, key) => {
        if (status.name === defaultStatus) {
          return (
            <button
              key={key}
              onClick={() => callback(status.name)}
              className="p-1 border-[0.5px] rounded-xl"
              style={{ borderColor: textPrimary }}
            >
              <TicketStatusBadge status={status.name} />
            </button>
          );
        } else {
          return (
            <button
              key={key}
              onClick={() => callback(status.name)}
              className="p-1 border-[0.5px] rounded-xl"
              style={{ borderColor: backgroundPrimary }}
            >
              <TicketStatusBadge status={status.name} />
            </button>
          );
        }
      })}
    </div>
  );
};

export default TicketStatusPicker;
