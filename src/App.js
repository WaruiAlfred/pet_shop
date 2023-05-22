import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Home from "./components/Home/index";
import Auth from "./components/Auth/index";
import About from "./components/About/index";

function App() {
  return (
    <MDBContainer fluid className="px-0">
      <Home />
      {/* <Auth /> */}
      {/* <About /> */}
    </MDBContainer>
  );
}

export default App;
