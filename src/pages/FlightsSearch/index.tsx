import { FlightSearchBar } from "@features/flights/FlightSearchBar/FlightSearchBar";
import { FlightTable } from "@features/flights/FlightTable/FlightTable";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { FlightFilter } from "@features/flights/FlightFilter/FlightFilter";
import { PriceGrid } from "@features/flights/PriceGrid/PriceGrid";
import { SelectedFlights } from "@features/flights/SelectedFlights/SelectedFlights";
import { Flight, FlightSearchValues } from "@shared/types";
import Button from "@shared/ui/Button";
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
import { useParamsData } from "@hooks/useParamsData";
import { useNavigate } from "react-router-dom";
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
export const FlightsSearch = () => {
  const [dataFilter, setDataFilter] = useState<
    "price" | "stops" | "times" | "airlines" | null
  >(null);
  const [selectedFlightsId, setSelectedFlightsId] = useState<
    [string?, string?]
  >([]);
  const { data: searchValues } = useParamsData<FlightSearchValues | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    setSelectedFlightsId([]);
  }, [searchValues]);

  const currentTable = () => {
    if (searchValues?.flightType === "multiple") {
      return selectedFlightsId[0] ? "returning" : "departing";
    } else {
      return "departing";
    }
  };

  const handleFlightSelection = (id: string) => {
    setSelectedFlightsId((old) => {
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

  const handleSubmit = () => {
    const selectedFlightsInfo = [
      ...departingFlights.filter(
        (flight) => flight.id === selectedFlightsId[0]
      ),
      ...returningFlights.filter(
        (flight) => flight.id === selectedFlightsId[1]
      ),
    ];
    const values = { selectedFlights: selectedFlightsInfo, searchValues };
    console.log(searchValues);
    const jsonValues = JSON.stringify(values);
    navigate(`/flights/passenger-info?${encodeURIComponent(jsonValues)}`);
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
                ? selectedFlightsId[0]
                : selectedFlightsId[1]
            }
            getSelectedId={(id) => handleFlightSelection(id)}
          />
        </div>
        <div className={styles["right-container"]}>
          {!selectedFlightsId[0] && (
            <>
              <PriceGrid />
              <PriceHistory />
              <PriceRating />
            </>
          )}
          {selectedFlightsId[0] && (
            <SelectedFlights
              flights={[
                ...departingFlights.filter(
                  (flight) => flight.id === selectedFlightsId[0]
                ),
                ...returningFlights.filter(
                  (flight) => flight.id === selectedFlightsId[1]
                ),
              ]}
            />
          )}
          <div className={styles["button-container"]}>
            {selectedFlightsId[0] &&
              !selectedFlightsId[1] &&
              searchValues.flightType === "multiple" && (
                <Button variant="secondary" size="lg">
                  Save and close
                </Button>
              )}
            {selectedFlightsId[0] &&
              (searchValues.flightType !== "multiple" ||
                selectedFlightsId[1]) && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleSubmit()}
                >
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
