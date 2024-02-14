import { DatePicker, TextField } from "@shared/ui/Input";
import DepartureIcon from "@shared/icons/32/departure.svg?react";
import ArrivalIcon from "@shared/icons/32/arrival.svg?react";
import PersonIcon from "@shared/icons/32/person solid.svg?react";
import styles from "./FlightSearchBar.module.scss";
import { Button } from "@shared/ui/Button/Button";
import { useFormik } from "formik";
import { SelectList } from "@shared/ui/Input/SelectList/SelectList";
export const FlightSearchBar = () => {
  const formik = useFormik({
    initialValues: {
      fromDestination: "",
      toDestination: "",
      tripType: "round-trip",
      slectedDates: [],
      passengerCount: { adults: 1, minors: 0 },
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className={styles.searchbar} onSubmit={formik.handleSubmit}>
      <div>
        <SelectList
          key={"fromDestination"}
          id="fromDestination"
          className="from-where"
          startIcon={<DepartureIcon />}
          placeholder={"From where?"}
          getSelected={(selected) =>
            formik.setFieldValue("fromDestination", selected)
          }
          value={formik.values.fromDestination}
          options={destinations}
        />
        <SelectList
          key={"toDestination"}
          className="where-to"
          placeholder={"Where to?"}
          startIcon={<ArrivalIcon />}
          id="toDestination"
          value={formik.values.toDestination}
          getSelected={(selected) =>
            formik.setFieldValue("toDestination", selected)
          }
          options={destinations}
        />
      </div>
      <div>
        <DatePicker
          tripType={formik.values.tripType}
          getTripType={(val) => formik.setFieldValue("tripType", val)}
          selectedDates={formik.values.slectedDates}
          getSelectedDates={(val) => formik.setFieldValue("slectedDates", val)}
        />
        <TextField
          className="passenger-count"
          placeholder="1 adult"
          startIcon={<PersonIcon />}
          id="passengerCount"
          onChange={formik.handleChange}
        />
      </div>
      <Button variant="primary" size="lg" type="submit">
        Search
      </Button>
    </form>
  );
};

const destinations = [
  "NRT",
  "PVG",
  "STL",
  "ATL",
  "MSP",
  "SFO",
  "JFK",
  "LAX",
  "Label",
];
