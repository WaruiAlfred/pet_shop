import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ImageCard from "../components/image/index";

const ImagesPage = () => {
  return (
    <MDBContainer fluid className="px-3 mt-3">
      <MDBRow className="mb-3">
        <MDBCol md="4">
          <ImageCard />
        </MDBCol>
        {/* </MDBRow>
      <MDBRow className="mb-4"> */}
        <MDBCol md="4">
          <ImageCard />
        </MDBCol>
        <MDBCol md="4">
          <ImageCard />
        </MDBCol>
        <MDBCol md="4">
          <ImageCard />
        </MDBCol>
        <MDBCol md="4">
          <ImageCard />
        </MDBCol>
        {/* </MDBRow>
      <MDBRow className="mb-4"> */}
        <MDBCol md="4">
          <ImageCard />
        </MDBCol>
        <MDBCol md="4">
          <ImageCard />
        </MDBCol>
        <MDBCol md="4">
          <ImageCard />
        </MDBCol>
        <MDBCol md="4">
          <ImageCard />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ImagesPage;
