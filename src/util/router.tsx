import { FlightsSearch } from "@pages/FlightsSearch";
import { FlightsHome } from "@pages/FlightsHome";
import { HotelsHome } from "@pages/HotelsHome";
import { Layout } from "@shared/layout";
import { createBrowserRouter } from "react-router-dom";
import { FlightPassengerInfo } from "@pages/FlightsPassengerInfo";
import { FlightSeatSelection } from "@pages/FlightsSeatSelection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FlightsHome />,
      },
      {
        path: "/flights",
        children: [
          { index: true, element: <FlightsHome /> },
          {
            path: "search",
            element: <FlightsSearch />,
          },
          {
            path: "passenger-info",
            element: <FlightPassengerInfo />,
          },
        ],
      },
      {
        path: "/hotels",
        element: <HotelsHome />,
      },
    ],
  },
  {
    path: "flights/select-seats",
    element: <FlightSeatSelection />,
  },
]);
export { router };
