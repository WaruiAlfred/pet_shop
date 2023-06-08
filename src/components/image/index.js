import React, { useState } from "react";
import { MDBRipple, MDBTypography } from "mdb-react-ui-kit";
import ReactCardFlip from "react-card-flip";

export default function ImageCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <MDBRipple rippleTag="a" onClick={handleClick} className="mb-3">
        <img
          src="https://mdbootstrap.com/img/new/standard/city/044.webp"
          className="img-fluid rounded"
          alt="example"
        />
      </MDBRipple>
      <MDBRipple
        rippleTag="a"
        onClick={handleClick}
        className="d-flex align-items-center justify-content-center mb-3 h-100 pt-5"
      >
        <MDBTypography className="align-center">
          Image description
        </MDBTypography>
      </MDBRipple>
    </ReactCardFlip>
  );
}
