import React, { useState } from "react";
import { MDBRipple, MDBTypography } from "mdb-react-ui-kit";
import ReactCardFlip from "react-card-flip";
import styles from "./Image.module.css";

export default function ImageCard({ image, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <MDBRipple rippleTag="a" onClick={handleClick} className="mb-3">
        <img
          src={image}
          className={` ${styles.image} img-fluid rounded`}
          alt="pet images"
        />
      </MDBRipple>
      <MDBRipple
        rippleTag="a"
        onClick={handleClick}
        className="d-flex align-items-center justify-content-center mb-3 h-100 pt-5"
      >
        <MDBTypography className="align-center text-dark">
          {description}
        </MDBTypography>
      </MDBRipple>
    </ReactCardFlip>
  );
}
