import Pill from "@shared/ui/Pill/Pill";
import styles from "./FlightFilter.module.scss";
import { FC } from "react";
interface FlightFilterProps {
  current?: "price" | "stops" | "times" | "airlines" | null;
  getFilter: (filter: "price" | "stops" | "times" | "airlines" | null) => void;
}
export const FlightFilter: FC<FlightFilterProps> = ({ current, getFilter }) => {
  return (
    <div className={styles["flight-filter"]}>
      <Pill onClick={() => getFilter("price")} opened={current === "price"}>
        Max price
      </Pill>
      <Pill onClick={() => getFilter("stops")} opened={current === "stops"}>
        Stops
      </Pill>
      <Pill>Times</Pill>
      <Pill>Airlines</Pill>
      <Pill>Seat class</Pill>
      <Pill>More</Pill>
    </div>
  );
};
