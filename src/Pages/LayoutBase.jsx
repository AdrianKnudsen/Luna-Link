import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

export function LayoutBase({ searchTerm, setSearchTerm }) {
  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div>
        <Outlet context={{ searchTerm }} />
      </div>
      <Footer />
    </>
  );
}

LayoutBase.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func.isRequired,
};
