import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Image from "../components/image/index";

const ImagesPage = () => {
  return (
    <MDBContainer fluid className="px-3 mt-3">
      <MDBRow className="mb-3">
        <MDBCol md="3">
          <Image />
        </MDBCol>
        <MDBCol md="3">
          <Image />
        </MDBCol>
        <MDBCol md="3">
          <Image />
        </MDBCol>
        <MDBCol md="3">
          <Image />
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-3">
        <MDBCol md="3">
          <Image />
        </MDBCol>
        <MDBCol md="3">
          <Image />
        </MDBCol>
        <MDBCol md="3">
          <Image />
        </MDBCol>
        <MDBCol md="3">
          <Image />
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-3">
        <MDBCol md="3">
          <Image />
        </MDBCol>
        <MDBCol md="3">
          <Image />
        </MDBCol>
        <MDBCol md="3">
          <Image />
        </MDBCol>
        <MDBCol md="3">
          <Image />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ImagesPage;
