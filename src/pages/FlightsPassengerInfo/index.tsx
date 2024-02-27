import { SelectedFlights } from "@features/flights/SelectedFlights/SelectedFlights";
import { useParamsData } from "@hooks/useParamsData";
import {
  BookedFlights,
  EmergencyInfo,
  Flight,
  FlightSearchValues,
  Passenger,
} from "@shared/types";
import styles from "./style.module.scss";
import clsx from "clsx";
import { PassengerForm } from "@features/PassengerInfo/PassengerForm/PassengerForm";
import { EmergencyForm } from "@features/PassengerInfo/EmergencyForm/EmergencyForm";
import { BagForm } from "@features/PassengerInfo/BagForm/BagForm";
import Button from "@shared/ui/Button";
import { useNavigate } from "react-router-dom";

export const FlightPassengerInfo = () => {
  const { data: paramsData } = useParamsData<{
    selectedFlights: Flight[];
    searchValues: FlightSearchValues;
  } | null>(null);
  const formValues: {
    passengers: Passenger[];
    emergency?: EmergencyInfo;
    bags?: number[];
  } = { passengers: [], bags: [] };
  const passengersList = getPassengersList(
    paramsData?.searchValues.passengerCount
  );
  const navigate = useNavigate();
  const handleFormSubmit = () => {
    const values: BookedFlights = {
      selectedDates: paramsData?.searchValues.slectedDates,
      from: paramsData?.searchValues.from,
      to: paramsData?.searchValues.to,
      passengers: formValues.passengers,
      emergency: formValues.emergency,
      bags: formValues.bags,
      flights: paramsData?.selectedFlights,
    };
    sessionStorage.setItem("bookedFlights", JSON.stringify(values));
    navigate("/flights/select-seats");
  };
  return (
    <div className={clsx("page-container", styles["passenger-info"])}>
      <div className={styles["inner-container"]}>
        <div className={styles["left"]}>
          <h3 className={styles["title"]}>Passenger information</h3>
          <p className={styles["description"]}>
            Enter the required information for each traveler and be sure that it
            exactly matches the government-issued ID presented at the airport.
          </p>
          <div className={styles["forms"]}>
            {passengersList?.map((ageGroup, i) => (
              <PassengerForm
                key={i}
                passengerNo={i + 1}
                ageGroup={ageGroup}
                getValues={(values) => {
                  formValues.passengers[i] = { ...values, ageGroup };
                }}
              />
            ))}
            <EmergencyForm
              getValues={(values) => (formValues["emergency"] = values)}
            />
            <BagForm
              passengers={formValues.passengers}
              getValues={(values) => (formValues.bags = values)}
            />
          </div>
          <div className={styles["control-group"]}>
            <Button variant="secondary" size="lg">
              Save and close
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleFormSubmit()}
            >
              Select seats
            </Button>
          </div>
        </div>
        <div className={styles["right"]}>
          <SelectedFlights flights={paramsData?.selectedFlights || []} />
          <img src="/images/bags.png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

const getPassengersList = (passengers?: { adults: number; minors: number }) => {
  if (!passengers) return [];
  const passengerList: ("Adult" | "Minor")[] = [];
  for (let i = 0; i < passengers.adults; i++) {
    passengerList.push("Adult");
  }
  for (let i = 0; i < passengers.minors; i++) {
    passengerList.push("Minor");
  }
  return passengerList;
};
