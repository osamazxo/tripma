import { FlightSearchBar } from "@features/FlightSearchBar/FlightSearchBar";
import styles from "./FlightHero.module.scss";
export const FlightHero = () => {
  return (
    <div className={styles.hero}>
      <p className={styles["hero-text"]}>
        It’s more than
        <br /> just a trip
      </p>
      <FlightSearchBar />
    </div>
  );
};
