import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import styles from "./Card.module.css";

export default function Card({ title, description, image }) {
  return (
    <MDBCard
      className={` ${styles.glass_card} h-100 d-flex flex-column align-items-center justify-content-center`}
    >
      <MDBCardImage
        src={image}
        position="top"
        alt="..."
        // className={`${styles.card_image} w-50 h-50 mx-auto mt-3`}
        className="h-70"
      />
      <MDBCardBody className="d-flex flex-column align-items-center justify-content-center">
        <MDBCardTitle className="fw-bold">{title}</MDBCardTitle>
        <MDBCardText className="text-muted">{description}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
