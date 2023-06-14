import { MDBRow } from "mdb-react-ui-kit";
import React from "react";

function ServicesPage() {
  return (
    <>
      <MDBRow className="mb-3">
        <img
          src="https://lh3.googleusercontent.com/eun3C9nrgHBtqI_x6hfQdf6rjBmfK-bwHe4Z_rdZj4hDH8V_wHTRU1jWlUGXCEP292kndI89btwfCNrdUDyilD0OZ-aDMGP_qYEK284PnA=s0"
          className="img-fluid shadow-4"
          alt="services intro image"
          style={{
            objectFit: "cover",
            height: "60vh",
            width: "100%",
            objectPosition: "center",
          }}
        />
      </MDBRow>
    </>
  );
}

export default ServicesPage;
