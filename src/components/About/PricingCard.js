import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import styles from "./PricingCard.module.css";

export default function PricingCard({ title, price, description }) {
  return (
    <MDBCard className={`${styles.pricing_card}`} style={{ minWidth: "15rem" }}>
      <MDBCardBody className="d-flex flex-column align-items-center justify-content-center">
        <MDBTypography variant="h4">{title}</MDBTypography>
        <MDBTypography variant="h1">&#36;{price}</MDBTypography>
        {description.map((item) => (
          <MDBCardText key={item.id}>{item.text}</MDBCardText>
        ))}

        <MDBBtn color="danger" rounded className={`${styles.buy_btn}`}>
          Buy Now
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
