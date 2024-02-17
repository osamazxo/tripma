import { FC } from "react";
import styles from "./TableCell.module.scss";
interface FlightDataRow
  extends Omit<React.HtmlHTMLAttributes<HTMLTableRowElement>, "id"> {
  id: string;
  logo: string;
  airline: string;
  duration: string;
  time: string;
  stops: {
    name: string;
    duration: string;
  }[];
  price: number;
  tripType: string;
}
export const TableCell: FC<FlightDataRow> = ({
  logo,
  airline,
  duration,
  time,
  stops,
  price,
  tripType,
  ...other
}) => {
  return (
    <tr className={styles["table-cell"]} tabIndex={0} {...other}>
      <td className={styles["logo"]}>
        <img src={logo} alt="" />
      </td>
      <td>
        <p className="duration">{duration}</p>
        <p className="airline">{airline}</p>
      </td>
      <td>
        <p>{time}</p>
        <p>_</p>
      </td>
      <td>
        <p>
          {stops.length === 0
            ? "Nonstop"
            : stops.length + " stop" + `${stops.length === 1 ? "" : "s"}`}
        </p>
        {stops.map((stop) => (
          <p>
            {stop.duration} in {stop.name}
          </p>
        ))}
      </td>
      <td>
        <p>${price}</p>
        <p>{tripType}</p>
      </td>
    </tr>
  );
};

export type { FlightDataRow };
