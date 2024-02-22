import { SeatClasses } from "@features/flights/SeatClasses/SeatClasses";
import { Header } from "@shared/layout/Header/Header";
import styles from "./style.module.scss";
import { Plane } from "@features/flights/Plane/Plane";
import Button from "@shared/ui/Button";
export const FlightSeatSelection = () => {
  return (
    <div className={styles["seat-selecion-page"]}>
      <Header variant="basic" />
      <div className={styles["left-container"]}>
        <div className={styles["plane"]}>
          <Plane />
        </div>
      </div>
      <div className={styles["right-container"]}>
        <SeatClasses>
          <div className={styles["footer"]}>
            <div>
              <p>Passenger 1</p>
              <p>Sofia Knowles</p>
            </div>
            <div>
              <p>Seat number</p>
              <p>--</p>
            </div>
            <div className={styles["buttons"]}>
              <Button variant="secondary" size="md">
                Save and close
              </Button>
              <Button variant="primary" size="md">
                Next flight
              </Button>
            </div>
          </div>
        </SeatClasses>
      </div>
    </div>
  );
};
