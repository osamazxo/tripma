import { FlightSearchBar } from "@features/flights/FlightSearchBar/FlightSearchBar";
import { FlightTable } from "@features/flights/FlightTable/FlightTable";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { FlightFilter } from "@features/flights/FlightFilter/FlightFilter";
import { PriceGrid } from "@features/flights/PriceGrid/PriceGrid";
export const FlightSearch = () => {
  const [searchValues, setSearchValues] = useState<object | null>(null);
  const [selectedFlights, setSelectedFlights] = useState<{
    departing?: string;
    returning?: string;
  }>({});
  useEffect(() => {
    try {
      const params = location.search.slice(1);
      const decoded = JSON.parse(decodeURIComponent(params));
      setSearchValues(decoded);
    } catch (error) {
      console.error("Error parsing search params");
    }
  }, []);
  if (!searchValues) {
    return (
      <div>
        <h3>loading</h3>
      </div>
    );
  }
  return (
    <div className="page-container">
      <div className={styles["flight-search-page"]}>
        <div className={styles["left-container"]}>
          <FlightSearchBar
            initialValues={searchValues}
            className={styles["flight-searchbar"]}
          />
          <FlightFilter />
          <h4 className={styles["flight-table-title"]}>
            Choose a{" "}
            <span>{selectedFlights.departing ? "returning" : "departing"}</span>{" "}
            flight
          </h4>
          {/********************************* departing table ***********************************/}
          {!selectedFlights.departing && (
            <FlightTable
              data={dummyData}
              selectedId={selectedFlights.departing}
              getSelectedId={(id) =>
                setSelectedFlights((old) => ({ ...old, departing: id }))
              }
            />
          )}
          {/********************************* returning table ***********************************/}
          {selectedFlights.departing && (
            <FlightTable
              data={dummyData}
              selectedId={selectedFlights.returning}
              getSelectedId={(id) =>
                setSelectedFlights((old) => ({ ...old, returning: id }))
              }
            />
          )}
        </div>
        <div className={styles["right-container"]}>
          <PriceGrid />
        </div>
      </div>
    </div>
  );
};

const dummyData = [
  {
    id: "1",
    logo: "/airlines/Air China.svg",
    airline: "Hawaiian Airlines",
    duration: "16h 45m",
    time: "7:00AM - 4:15PM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: 624,
    tripType: "round trip",
  },
  {
    id: "2",
    logo: "/airlines/Air China.svg",
    airline: "Hawaiian Airlines",
    duration: "16h 45m",
    time: "7:00AM - 4:15PM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: 624,
    tripType: "round trip",
  },
  {
    id: "3",
    logo: "/airlines/Air China.svg",
    airline: "Hawaiian Airlines",
    duration: "16h 45m",
    time: "7:00AM - 4:15PM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: 624,
    tripType: "round trip",
  },
  {
    id: "4",
    logo: "/airlines/Air China.svg",
    airline: "Hawaiian Airlines",
    duration: "16h 45m",
    time: "7:00AM - 4:15PM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: 624,
    tripType: "round trip",
  },
  {
    id: "5",
    logo: "/airlines/Air China.svg",
    airline: "Hawaiian Airlines",
    duration: "16h 45m",
    time: "7:00AM - 4:15PM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: 624,
    tripType: "round trip",
  },
  {
    id: "6",
    logo: "/airlines/Air China.svg",
    airline: "Hawaiian Airlines",
    duration: "16h 45m",
    time: "7:00AM - 4:15PM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: 624,
    tripType: "round trip",
  },
  {
    id: "7",
    logo: "/airlines/Air China.svg",
    airline: "Hawaiian Airlines",
    duration: "16h 45m",
    time: "7:00AM - 4:15PM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: 624,
    tripType: "round trip",
  },
  {
    id: "8",
    logo: "/airlines/Air China.svg",
    airline: "Hawaiian Airlines",
    duration: "16h 45m",
    time: "7:00AM - 4:15PM",
    stops: [
      {
        name: "HNL",
        duration: "2h 45m",
      },
    ],
    price: 624,
    tripType: "round trip",
  },
];
