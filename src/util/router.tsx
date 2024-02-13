import { Home } from "@pages/Home";
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
        path: "/hotels",
        element: <div>Hotels</div>,
      },
      {
        path: "/flights",
        element: <Home />,
      },
    ],
  },
]);
export { router };
