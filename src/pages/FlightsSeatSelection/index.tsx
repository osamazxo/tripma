/* eslint-disable react-refresh/only-export-components */
import { SeatClasses } from "@features/flights/SeatClasses/SeatClasses";
import { Header } from "@shared/layout/Header/Header";
import styles from "./style.module.scss";
import { Plane } from "@features/flights/Plane/Plane";
import Button from "@shared/ui/Button";
import { BookedFlights } from "@shared/types";
import PlaneContextProvider, { usePlaneContext } from "@context/PlaneContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const getLetter = (num: number) => {
  return String.fromCharCode(65 + num);
};
const FlightSeatSelection = () => {
  const bookedFlights: BookedFlights = JSON.parse(
    sessionStorage.getItem("bookedFlights") || ""
  );
  const {
    selectedSeats,
    currentSeatsArray,
    departing,
    selectedClass,
    setDeparting,
    setPassengersCount,
  } = usePlaneContext();
  const navigate = useNavigate();
  console.log(selectedClass);
  useEffect(() => {
    if (bookedFlights.passengers?.length) {
      setPassengersCount(bookedFlights.passengers?.length);
    }
  }, [bookedFlights.passengers?.length, setPassengersCount]);
  const currentPassenger =
    bookedFlights.passengers?.[
      currentSeatsArray.length - 1 < 0 ? 0 : currentSeatsArray.length - 1
    ];
  const currentSeat =
    currentSeatsArray[
      currentSeatsArray.length - 1 < 0 ? 0 : currentSeatsArray.length - 1
    ]?.split("-");
  const currentSeatName =
    (currentSeat && currentSeat[0] + getLetter(+currentSeat[1] - 1)) || "--";
  const checkComplete = () => {
    let flag = false;
    if (selectedSeats.departing.length === bookedFlights.passengers?.length) {
      if (bookedFlights.flights?.length === 1) {
        flag = true;
      } else {
        flag =
          selectedSeats.arriving.length === bookedFlights.passengers?.length;
      }
    }
    return flag;
  };
  const handleFormSubmit = () => {
    if (!checkComplete()) return;
    localStorage.setItem(
      "bookedFlights",
      JSON.stringify({ ...bookedFlights, selectedSeats })
    );
    navigate("/flights/payment");
  };
  return (
    <div className={styles["seat-selecion-page"]}>
      <Header variant="basic" />
      <div className={styles["left-container"]}>
        <div className={styles["plane"]}>
          <Plane />
        </div>
      </div>
      <div className={styles["right-container"]}>
        <SeatClasses
          from={bookedFlights?.from}
          to={bookedFlights?.to}
          selectedDates={bookedFlights?.selectedDates}
          flights={bookedFlights?.flights}
          departing={departing}
          setDeparting={setDeparting}
          selectedClass={selectedClass}
        >
          <div className={styles["footer"]}>
            <div>
              <p>
                Passenger{" "}
                {currentSeatsArray.length <= 1 ? 1 : currentSeatsArray.length}
              </p>
              <p>
                {currentPassenger?.firstName + " " + currentPassenger?.lastName}
              </p>
            </div>
            <div>
              <p>Seat number</p>
              <p>{currentSeatName}</p>
            </div>
            <div className={styles["buttons"]}>
              <Button variant="secondary" size="md">
                Save and close
              </Button>
              <Button
                variant="primary"
                size="md"
                disabled={!checkComplete()}
                onClick={handleFormSubmit}
              >
                Next flight
              </Button>
            </div>
          </div>
        </SeatClasses>
      </div>
    </div>
  );
};

export default function main() {
  return (
    <PlaneContextProvider>
      <FlightSeatSelection />
    </PlaneContextProvider>
  );
}
