import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import Home from "./components/Home/index";

function App() {
  return (
    <MDBContainer fluid className="px-0">
      <Home />
    </MDBContainer>
  );
}

export default App;
