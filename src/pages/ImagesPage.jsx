import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ImageCard from "../components/image/index";
import { sampleImages } from "../data/index";

const ImagesPage = () => {
  return (
    <MDBContainer fluid className="px-3 mt-3">
      <MDBRow className="mb-3">
        {sampleImages.map((image) => (
          <MDBCol md="4" key={image.id}>
            <ImageCard image={image.image} description={image.description} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default ImagesPage;
