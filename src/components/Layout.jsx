import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-light-gray overflow-hidden dark:bg-dark-BackgroundColor">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
