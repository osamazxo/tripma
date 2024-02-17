import Pill from "@shared/ui/Pill/Pill";
import styles from "./FlightFilter.module.scss";
export const FlightFilter = () => {
  return (
    <div className={styles["flight-filter"]}>
      <Pill>Max price</Pill>
      <Pill>Shops</Pill>
      <Pill>Times</Pill>
      <Pill>Airlines</Pill>
      <Pill>Seat class</Pill>
      <Pill>More</Pill>
    </div>
  );
};
