import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <MDBContainer fluid className="px-0">
      <MDBRow className={`bg-dark bg-gradient`}>
        <Navbar />
      </MDBRow>
      <Outlet />
      <ScrollToTop smooth color="#DC4C64" top={50} />
      <Footer />
    </MDBContainer>
  );
}

export default App;
