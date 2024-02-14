import { FC, useRef, useState } from "react";
import { Calendar } from "./Calendar/Calendar";
import "./DatePicker.scss";
import { RadioButton, TextField } from "..";
import CalendarIcon from "@shared/icons/32/calendar-with-dates.svg?react";
import ChevronLeft from "@shared/icons/32/chevron-Left.svg?react";
import ChevronRight from "@shared/icons/32/chevron-Right.svg?react";
import { Button } from "../../Button/Button";
import useFocusOut from "src/hooks/useFocusOut";
import clsx from "clsx";
interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedDates?: string[];
  tripType?: string;
  getSelectedDates?: (dates: string[]) => void;
  getTripType?: (type: string) => void;
}
const getMonthChange = (value: number, month: number, year: number) => {
  const date = new Date(year, month + value, 1);

  return {
    month: date.getMonth(),
    year: date.getFullYear(),
  };
};
function getSortedDates(dates: string[]) {
  const sortedDates = [...dates];
  return sortedDates.sort(
    (a, b) => new Date(a).valueOf() - new Date(b).valueOf()
  );
}
const getNewSelectedDates = (
  clickedDate: string,
  selectedDates: string[],
  tripType?: string
) => {
  const clickedDateF = new Date(clickedDate);

  if (clickedDateF.valueOf() - new Date().valueOf() < 0)
    return getSortedDates(selectedDates);

  if (selectedDates.includes(clickedDate)) {
    return selectedDates.filter((selectedDate) => selectedDate !== clickedDate);
  }
  if (tripType === "one-way") return [clickedDate];
  console.log("tripType", tripType);

  if (selectedDates.length < 2)
    return getSortedDates([...selectedDates, clickedDate]);

  const sortedDates = getSortedDates(selectedDates);

  if (clickedDateF.valueOf() - new Date(sortedDates[0]).valueOf() < 0)
    return [clickedDate, sortedDates[0]];
  else return getSortedDates([clickedDate, sortedDates[1]]);
};
export const DatePicker: FC<DatePickerProps> = ({
  selectedDates,
  getSelectedDates,
  tripType,
  getTripType,
  ...other
}) => {
  const [opened, setOpened] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentDate = new Date();
  const [calendarDate, setCalendarDate] = useState<{
    month: number;
    year: number;
  }>({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
  });
  useFocusOut(containerRef, () => {
    setOpened(false);
  });
  const handleDateChange = (value: number) => {
    setCalendarDate((old) => {
      return getMonthChange(value, old.month, old.year);
    });
  };

  return (
    <div className={clsx("date-picker-container", other.className)}>
      <TextField
        startIcon={<CalendarIcon />}
        placeholder="Depart - Arrive"
        onClick={() => setOpened((old) => !old)}
        defaultValue={
          selectedDates &&
          [...selectedDates]
            .sort((a, b) => new Date(a).valueOf() - new Date(b).valueOf())
            .join(" - ")
        }
      />
      {opened && (
        <div className="date-picker" {...other} ref={containerRef}>
          <div className="header">
            <div className="radio-group">
              <RadioButton
                label="Round Trip"
                name="flightType"
                id="round-trip"
                checked={tripType === "round-trip"}
                onChange={() => getTripType && getTripType("round-trip")}
              />
              <RadioButton
                label="One Way"
                name="flightType"
                id="one-way"
                checked={tripType === "one-way"}
                onChange={() => getTripType && getTripType("one-way")}
              />
            </div>
            <div className="field-group">
              <TextField
                startIcon={<CalendarIcon />}
                placeholder="Depart - Arrive"
                autoFocus
                onChange={(event) => {
                  getSelectedDates &&
                    getSelectedDates(event.target.value.split(" - ") || []);
                }}
                value={selectedDates && [...selectedDates].join(" - ")}
              />
              <Button onClick={() => setOpened(false)}>Done</Button>
            </div>
          </div>
          <div className="slider">
            <span className="icon" onClick={() => handleDateChange(-1)}>
              <ChevronLeft />
            </span>
            <Calendar
              key={"calender1"}
              month={calendarDate.month + 1}
              year={calendarDate.year}
              selectedDates={selectedDates || []}
              getClickedDate={(date) => {
                getSelectedDates &&
                  getSelectedDates(
                    getNewSelectedDates(date, selectedDates || [], tripType)
                  );
              }}
            />
            <Calendar
              className="right-calendar"
              key={"calender2"}
              month={
                getMonthChange(1, calendarDate.month, calendarDate.year).month +
                1
              }
              year={
                getMonthChange(1, calendarDate.month, calendarDate.year).year
              }
              selectedDates={selectedDates || []}
              getClickedDate={(date) => {
                getSelectedDates &&
                  getSelectedDates(
                    getNewSelectedDates(date, selectedDates || [], tripType)
                  );
              }}
            />
            <span className="icon" onClick={() => handleDateChange(1)}>
              <ChevronRight />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
