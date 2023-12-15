import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
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
