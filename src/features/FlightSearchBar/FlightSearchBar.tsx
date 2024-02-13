import { DatePicker, TextField } from "@shared/ui/Input";
import DepartureIcon from "@shared/icons/32/departure.svg?react";
import ArrivalIcon from "@shared/icons/32/arrival.svg?react";
import PersonIcon from "@shared/icons/32/person solid.svg?react";

import styles from "./FlightSearchBar.module.scss";
import { Button } from "@shared/ui/Button/Button";
export const FlightSearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <TextField
        className="from-where"
        placeholder="From where?"
        startIcon={<DepartureIcon />}
      />
      <TextField
        className="where-to"
        placeholder="Where to?"
        startIcon={<ArrivalIcon />}
      />
      <DatePicker />
      <TextField
        className="passenger-count"
        placeholder="1 adult"
        startIcon={<PersonIcon />}
      />
      <Button variant="primary" size="lg">
        Search
      </Button>
    </div>
  );
};
