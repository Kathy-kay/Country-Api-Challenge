import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import CountryDetails from "./Pages/CountryDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="country/:id" element={<CountryDetails />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
export default App;
