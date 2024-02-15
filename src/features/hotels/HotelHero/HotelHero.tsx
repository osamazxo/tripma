import styles from "./HotelHero.module.scss";
import { HotelSearchBar } from "./HotelSearchBar";
export const HotelHero = () => {
  return (
    <div className={styles["hotel-hero"]}>
      <h2>
        Stay<span>.</span> Relax<span>.</span> Recharge<span>.</span>
      </h2>
      <HotelSearchBar />
    </div>
  );
};
