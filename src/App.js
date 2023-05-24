import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Home from "./components/Home/index";
import Auth from "./components/Auth/index";
import About from "./components/About/index";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <MDBContainer fluid className="px-0">
      {/* <Home /> */}
      {/* <Auth /> */}
      {/* <About /> */}
      <MDBRow className={`bg-dark bg-gradient`}>
        <Navbar />
      </MDBRow>
      <Outlet />
      <Footer />
    </MDBContainer>
  );
}

export default App;
