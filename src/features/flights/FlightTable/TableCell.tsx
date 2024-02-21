import { FC } from "react";
import styles from "./TableCell.module.scss";
import { Flight } from "@shared/types";
interface FlightDataRow
  extends Omit<React.HtmlHTMLAttributes<HTMLTableRowElement>, "id"> {
  flight: Flight;
}
export const TableCell: FC<FlightDataRow> = ({ flight, ...other }) => {
  return (
    <tr className={styles["table-cell"]} tabIndex={0} {...other}>
      <td className={styles["logo"]}>
        <img src={flight.logo} alt="" />
      </td>
      <td>
        <p className="duration">{flight.duration}</p>
        <p className="airline">{flight.airline}</p>
      </td>
      <td>
        <p>{flight.time}</p>
        <p>_</p>
      </td>
      <td>
        <p>
          {flight.stops?.length === 0
            ? "Nonstop"
            : flight.stops?.length +
              " stop" +
              `${flight.stops?.length === 1 ? "" : "s"}`}
        </p>
        {flight.stops?.map((stop) => (
          <p>
            {stop.duration} in {stop.name}
          </p>
        ))}
      </td>
      <td>
        <p>${flight.price?.total}</p>
        <p>{flight.flightType}</p>
      </td>
    </tr>
  );
};

export type { FlightDataRow };
