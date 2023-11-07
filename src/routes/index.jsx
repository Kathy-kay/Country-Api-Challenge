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
        path: "country/:countryName",
        element: <CountryDetails />,
      },
      {
        path: "search/:searchTerm",
        element: <SearchPage />,
      },
    ],
  },
]);
export default router;
