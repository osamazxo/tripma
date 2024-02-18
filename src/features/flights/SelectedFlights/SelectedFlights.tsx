import { Flight } from "@shared/types";
import { FC } from "react";
import { FlightRow } from "./FlightRow";
import styles from "./SelectedFlights.module.scss";
interface SelectedFlightsProps {
  flights: Flight[];
}
export const SelectedFlights: FC<SelectedFlightsProps> = ({ flights }) => {
  return (
    <div className={styles["selected-flights"]}>
      <div className={styles["flights"]}>
        {flights.map((flight) => (
          <FlightRow flight={flight} key={"f12" + flight.id} />
        ))}
      </div>
      <div className={styles["details"]}>
        <h5 className="subtotal">
          <span>Subtotal</span>
          <span>
            $
            {`${flights.reduce(
              (old, current) => old + (current.price?.subtotal || 0),
              0
            )}`}
          </span>
        </h5>
        <h5 className="taxes">
          <span>Taxes and Fees</span>
          <span>
            $
            {`${flights.reduce(
              (old, current) => old + (current.price?.taxes || 0),
              0
            )}`}
          </span>
        </h5>
        <h5 className="total">
          <span>Total</span>
          <span>
            $
            {`${flights.reduce(
              (old, current) => old + (current.price?.total || 0),
              0
            )}`}
          </span>
        </h5>
      </div>
    </div>
  );
};
