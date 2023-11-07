import ReactDOM from "react-dom/client";

import "./index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import { UserContextProvider } from "./context/UserContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </QueryClientProvider>
);
