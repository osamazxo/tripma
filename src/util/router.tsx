import { FlightSearch } from "@pages/FlightSearch";
import { Home } from "@pages/Home";
import { Hotels } from "@pages/Hotels";
import { Layout } from "@shared/layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/flights",
        children: [
          { index: true, element: <Home /> },
          {
            path: "search",
            element: <FlightSearch />,
          },
        ],
      },
      {
        path: "/hotels",
        element: <Hotels />,
      },
    ],
  },
]);
export { router };
