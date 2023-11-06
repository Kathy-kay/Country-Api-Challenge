import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../Pages/Home";
import CountryDetails from "../Pages/CountryDetails";
import SearchPage from "../Pages/SearchPage";

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
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: `search/$`,
        element: <SearchPage />,
      },
    ],
  },
]);
export default router;
