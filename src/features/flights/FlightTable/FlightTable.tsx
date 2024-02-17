import { FC, useState } from "react";
import { FlightDataRow, TableCell } from "./TableCell";
import styles from "./FlightTable.module.scss";
import Button from "@shared/ui/Button";
interface FlightTable {
  data: FlightDataRow[];
  selectedId?: string;
  getSelectedId?: (id: string) => void;
}
export const FlightTable: FC<FlightTable> = ({
  data,
  getSelectedId,
  selectedId,
}) => {
  const [tableExpanded, setTableExpanded] = useState(false);
  const handleSelect = (element: FlightDataRow) => {
    getSelectedId && getSelectedId(element.id);
  };
  return (
    <div className={styles["flight-table"]}>
      <div
        className={styles["table-wrapper"]}
        style={{ maxHeight: tableExpanded ? "fit-content" : "400px" }}
      >
        <table cellSpacing={"1px"}>
          <tbody>
            {data.map((row, index) => (
              <TableCell
                key={"ft" + index}
                {...row}
                onClick={() => handleSelect(row)}
                aria-selected={row.id === selectedId}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Button
        variant="secondary"
        size="lg"
        type="button"
        onClick={() => setTableExpanded((old) => !old)}
      >
        {tableExpanded ? "Show less flights" : "Show all flights"}
      </Button>
    </div>
  );
};
