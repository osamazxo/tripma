import { DatePicker } from "@shared/ui/Input";
import DepartureIcon from "@shared/icons/32/departure.svg?react";
import ArrivalIcon from "@shared/icons/32/arrival.svg?react";
import PersonIcon from "@shared/icons/32/person solid.svg?react";
import styles from "./FlightSearchBar.module.scss";
import Button from "@shared/ui/Button";
import { useFormik } from "formik";
import { SelectList } from "@shared/ui/Input/SelectList/SelectList";
import { PassengerList } from "@shared/ui/Input/PassengerList/PassengerList";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import clsx from "clsx";
import { FlightSearchValues } from "@shared/types";
interface FlightSearchBarProps {
  className?: string;
  initialValues?: FlightSearchValues;
}
export const FlightSearchBar: FC<FlightSearchBarProps> = ({
  initialValues: initVal,
  className,
}) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fromDestination: initVal?.fromDestination || "",
      toDestination: initVal?.toDestination || "",
      tripType: initVal?.tripType || "multiple",
      slectedDates: initVal?.slectedDates || [],
      passengerCount: initVal?.passengerCount || { adults: 1, minors: 0 },
    },
    onSubmit: (values) => {
      const encoded = encodeURIComponent(JSON.stringify(values));
      console.log(encoded);
      navigate(`/flights/search?${encoded}`);
    },
  });
  return (
    <form
      className={clsx(styles.searchbar, className)}
      onSubmit={formik.handleSubmit}
    >
      <div>
        <SelectList
          key={"fromDestination"}
          id="fromDestination"
          name="fromDestination"
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
          name="toDestination"
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
          type={formik.values.tripType}
          getType={(val) => formik.setFieldValue("tripType", val)}
          selectedDates={formik.values.slectedDates}
          getSelectedDates={(val) => formik.setFieldValue("slectedDates", val)}
          name="travelingDate"
          placeholder="Depart - Arrive"
          radioNames={["Round trip", "One way"]}
        />
        <PassengerList
          className="passenger-count"
          placeholder="1 adult"
          startIcon={<PersonIcon />}
          id="passengerCount"
          value={formik.values.passengerCount}
          getValue={(val) => formik.setFieldValue("passengerCount", val)}
          name="passengerCount"
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
