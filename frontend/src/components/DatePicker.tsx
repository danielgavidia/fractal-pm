import * as React from "react";

interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
}

const DatePicker = ({ date, onDateChange }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date);
  const [isOpen, setIsOpen] = React.useState(false);

  const togglePopover = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        onClick={togglePopover}
        className="cursor-pointer w-full justify-start text-left font-normal text-gray-400 text-xs p-1"
      >
        <span className="mr-2">📅</span>
        {selectedDate ? selectedDate.toLocaleDateString() : <span>Pick a date</span>}
      </div>
      {isOpen && (
        <div className="w-auto p-0">
          <input
            type="date"
            value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
            onChange={(e) => {
              const date = new Date(e.target.value);
              setSelectedDate(date);
              onDateChange?.(date);
            }}
            autoFocus
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
