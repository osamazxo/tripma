import { FlightSearchBar } from "@features/flights/FlightSearchBar/FlightSearchBar";
import { FlightTable } from "@features/flights/FlightTable/FlightTable";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { FlightFilter } from "@features/flights/FlightFilter/FlightFilter";
import { PriceGrid } from "@features/flights/PriceGrid/PriceGrid";
import { SelectedFlights } from "@features/flights/SelectedFlights/SelectedFlights";
import { Flight, FlightSearchValues } from "@shared/types";
import Button from "@shared/ui/Button";
import { useLocation } from "react-router-dom";
import { PriceHistory } from "@features/flights/PriceHistory/PriceHistory";
import { PriceRating } from "@features/flights/PriceRating/PriceRating";
import { CardRow } from "@shared/ui/CardRow/CardRow";
import { RowTitle } from "@shared/ui/RowTitle/RowTitle";
import {
  departingFlights,
  flightDeals1,
  hotelDeals1,
  returningFlights,
} from "@shared/data";
const sortData = (
  data: Flight[],
  sortBy?: "price" | "stops" | "times" | "airlines" | null
) => {
  const newArr = [...data];
  if (sortBy === "price")
    newArr.sort((a, b) => a?.price?.total || 0 - (b?.price?.total || 0));
  if (sortBy === "stops")
    newArr.sort((a, b) => a.stops?.length || 0 - (b.stops?.length || 0));
  console.log(newArr);
  return newArr;
};
export const FlightSearch = () => {
  const [searchValues, setSearchValues] = useState<FlightSearchValues | null>(
    null
  );
  const [dataFilter, setDataFilter] = useState<
    "price" | "stops" | "times" | "airlines" | null
  >(null);
  const [selectedFlights, setSelectedFlights] = useState<[string?, string?]>(
    []
  );
  const { search: searchParams } = useLocation();
  console.log(dataFilter);
  useEffect(() => {
    try {
      const params = searchParams.slice(1);
      const decoded = JSON.parse(decodeURIComponent(params));
      setSearchValues(decoded);
    } catch (error) {
      console.error("Error parsing search params");
    }
    setSelectedFlights([]);
  }, [searchParams]);
  const currentTable = () => {
    if (searchValues?.tripType === "multiple") {
      return selectedFlights[0] ? "returning" : "departing";
    } else {
      return "departing";
    }
  };
  const handleFlightSelection = (id: string) => {
    setSelectedFlights((old) => {
      const newArr: [string?, string?] = [...old];
      if (currentTable() === "departing") {
        if (newArr[0] === id) newArr[0] = undefined;
        else newArr[0] = id;
      } else {
        if (newArr[1] === id) newArr[1] = undefined;
        else newArr[1] = id;
      }
      return newArr;
    });
  };
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
          <FlightFilter
            current={dataFilter}
            getFilter={(filter) => setDataFilter(filter)}
          />
          <h4 className={styles["flight-table-title"]}>
            Choose a <span>{currentTable()}</span> flight
          </h4>
          <FlightTable
            flights={
              currentTable() === "departing"
                ? sortData(departingFlights, dataFilter)
                : sortData(returningFlights, dataFilter)
            }
            selectedId={
              currentTable() === "departing"
                ? selectedFlights[0]
                : selectedFlights[1]
            }
            getSelectedId={(id) => handleFlightSelection(id)}
          />
        </div>
        <div className={styles["right-container"]}>
          {!selectedFlights[0] && (
            <>
              <PriceGrid />
              <PriceHistory />
              <PriceRating />
            </>
          )}
          {selectedFlights[0] && (
            <SelectedFlights
              flights={[
                ...departingFlights.filter(
                  (flight) => flight.id === selectedFlights[0]
                ),
                ...returningFlights.filter(
                  (flight) => flight.id === selectedFlights[1]
                ),
              ]}
            />
          )}
          <div className={styles["button-container"]}>
            {selectedFlights[0] &&
              !selectedFlights[1] &&
              searchValues.tripType === "multiple" && (
                <Button variant="secondary" size="lg">
                  Save and close
                </Button>
              )}
            {selectedFlights[0] &&
              (searchValues.tripType !== "multiple" || selectedFlights[1]) && (
                <Button variant="primary" size="lg">
                  Passenger information
                </Button>
              )}
          </div>
        </div>
      </div>
      <CardRow
        title={
          <RowTitle
            info="Find your next adventure with these"
            span="flight deals"
            color="var(--purple-blue)"
          />
        }
        cards={flightDeals1}
        viewAllUrl="/flights"
      />
      <CardRow
        title={
          <RowTitle
            info="Explore unique"
            span="places to stay"
            color="var(--turquoise)"
          />
        }
        viewAllUrl="/hotels"
        cards={hotelDeals1}
      />
    </div>
  );
};
