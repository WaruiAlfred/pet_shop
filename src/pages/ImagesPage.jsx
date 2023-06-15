import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import ImageCard from "../components/image/index";
import { sampleImages } from "../data/index";

const ImagesPage = () => {
  return (
    <MDBContainer fluid className="px-5 mt-3">
      <MDBRow className="mb-5 d-flex justify-content-center align-items-center flex-column">
        <MDBTypography tag="h1" variant="h1" className="text-center">
          Some of the pets at our center
        </MDBTypography>
        <MDBTypography className="text-center text-muted">
          Click on <b>image</b> to see their brief description
        </MDBTypography>
      </MDBRow>
      <MDBRow className="mb-3">
        {sampleImages.map((image) => (
          <MDBCol md="4" sm="6" xs="12" key={image.id}>
            <ImageCard {...image} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default ImagesPage;
