import { Card } from "@shared/ui/Card/Card";
import styles from "./HotelDeals.module.scss";
import { Button } from "@shared/ui/Button/Button";
import ArrowRightIcon from "@shared/icons/32/arrowRight.svg?react";
export const HotelDeals = () => {
  return (
    <div className={styles["flight-deals"]}>
      <div className={styles["header"]}>
        <h3 className={styles["title"]}>
          Explore unique <span>places to stay</span>
        </h3>
        <div className={styles["view-all"]}>
          <span>All</span>
          <ArrowRightIcon />
        </div>
      </div>
      <div className={styles.container}>
        <Card
          img="images/22.png"
          title={
            <>
              Stay among the atolls in{" "}
              <span style={{ color: "var(--turquoise)" }}>Maldives</span>
            </>
          }
          description="From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages."
        />
        <Card
          img="images/21.png"
          title={
            <>
              Experience the Ourika Valley in{" "}
              <span style={{ color: "var(--turquoise)" }}>Morocco</span>
            </>
          }
          description="Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East."
        />
        <Card
          img="images/23.png"
          title={
            <>
              Live traditionally in{" "}
              <span style={{ color: "var(--turquoise)" }}>Mongolia</span>
            </>
          }
          description="Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel."
        />
      </div>
      <Button size="lg" variant="primary">
        Explore more stays
      </Button>
    </div>
  );
};
