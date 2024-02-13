import { Card } from "@shared/ui/Card/Card";
import styles from "./FlightDeals.module.scss";
import ArrowRightIcon from "@shared/icons/32/arrowRight.svg?react";

export const FlightDeals = () => {
  return (
    <div className={styles["flight-deals"]}>
      <div className={styles["header"]}>
        <h3 className={styles["title"]}>
          Find your next adventure with these <span>flight deals</span>
        </h3>
        <div className={styles["view-all"]}>
          <span>All</span>
          <ArrowRightIcon />
        </div>
      </div>
      <div className={styles.container}>
        <Card
          img="images/19.png"
          title={
            <>
              The Bund, <span>Shanghai</span>
            </>
          }
          price={598}
          description="China’s most international city"
          saturation
        />
        <Card
          img="images/20.png"
          title={
            <>
              Sydney Opera House, <span>Sydney</span>
            </>
          }
          price={981}
          description="Take a stroll along the famous harbor"
          saturation
        />
        <Card
          img="images/5.png"
          title={
            <>
              Kōdaiji Temple, <span>Kyoto</span>
            </>
          }
          price={633}
          description="Step back in time in the Gion district"
          saturation
        />
      </div>
      <Card
        img="images/3.png"
        title={
          <>
            Tsavo East National Park, <span>Kenya</span>
          </>
        }
        price={1248}
        description="Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert."
      />
    </div>
  );
};
