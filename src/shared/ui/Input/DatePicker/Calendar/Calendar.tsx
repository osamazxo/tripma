import { FC, HTMLAttributes } from "react";
import "./Calendar.scss";
import clsx from "clsx";
interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  month: number;
  year: number;
  selectedDates: string[];
  getClickedDate?: (day: string) => void;
}
const daysLetters = ["S", "M", "T", "W", "T", "F", "S"];
const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function get_days_numbers(year: number, month: number) {
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastMonthDays = new Date(year, month - 1, 0).getDate();
  const days: { day: number; date: string; greyed: boolean }[] = [];

  // last days of the last month
  for (let i = 1; i <= firstDay; i++) {
    let date = `${year}/${month - 1}/${lastMonthDays - firstDay + i}`;
    if (month - 1 === 0) {
      date = `${year - 1}/12/${lastMonthDays - firstDay + i}`;
    }
    days.push({ day: lastMonthDays - firstDay + i, date, greyed: true });
  }
  // days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    const date = `${year}/${month}/${i}`;
    days.push({ day: i, date, greyed: false });
  }

  // first days of the next month
  for (let i = 1; i <= 42 - daysInMonth - firstDay; i++) {
    let date = `${year}/${month + 1 < 13 ? month + 1 : 1}/${i}`;
    if (month + 1 > 12) {
      date = `${year + 1}/1/${i}`;
    }
    days.push({ day: i, date, greyed: true });
  }

  return days;
}

export const Calendar: FC<CalendarProps> = ({
  month,
  year,
  selectedDates,
  getClickedDate,
  className,
  ...other
}) => {
  const daysArray = get_days_numbers(year, month);

  return (
    <div className={clsx("calendar", className)} {...other}>
      <div className="header">
        <h6>{monthsNames[month - 1] + " " + year}</h6>
      </div>
      <div className="days">
        {daysLetters.map((day, index) => (
          <span key={"day-name" + index} className="day-name">
            {day}
          </span>
        ))}
        {daysArray.map((day, index) => (
          <span
            key={"daynum" + index}
            className={clsx("day", day.greyed && "greyed")}
            aria-selected={selectedDates?.includes(day.date)}
            onClick={() => {
              getClickedDate && getClickedDate(day.date);
            }}
          >
            {day.day}
          </span>
        ))}
      </div>
    </div>
  );
};
