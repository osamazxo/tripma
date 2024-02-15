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
        path: "/",
        element: <Home />,
      },
      {
        path: "/flights",
        element: <Home />,
      },
      {
        path: "/hotels",
        element: <Hotels />,
      },
    ],
  },
]);
export { router };
