import { Plane } from "@features/flights/Plane/Plane";
import { Header } from "@shared/layout/Header/Header";

export const FlightSeatSelection = () => {
  return (
    <div>
      <Header variant="basic" />
      <Plane />
    </div>
  );
};
