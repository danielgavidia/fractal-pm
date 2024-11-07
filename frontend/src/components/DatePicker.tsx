import * as React from "react";

interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
}

const DatePicker = ({ date, onDateChange }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date);

  return (
    <div className="w-auto p-0">
      <input
        type="date"
        value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
        onChange={(e) => {
          const date = new Date(e.target.value);
          setSelectedDate(date);
          onDateChange?.(date);
        }}
        className="text-gray-500 text-xs p-1 rounded outline-none"
        autoFocus
      />
    </div>
  );
};

export default DatePicker;
