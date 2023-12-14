import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header.jsx";
import { Footer } from "../Components/Footer/Footer";

export function LayoutBase() {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
