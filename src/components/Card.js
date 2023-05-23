import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import styles from "./Card.module.css";

export default function Card({ socials = false, title, description, image }) {
  const [showSocials, setShowSocials] = useState(false);

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

      {socials && (
        <div className={`${styles.socials} ${showSocials && "p-3 bg-danger"}`}>
          {showSocials && (
            <>
              <MDBIcon fab icon="instagram" className="mb-2" />
              <MDBIcon fab icon="twitter" className="mb-2" />
              <MDBIcon fab icon="facebook-f" className="mb-2" />
              <MDBIcon
                fas
                icon="minus-circle"
                className="mt-2"
                onClick={() => setShowSocials(false)}
              />
            </>
          )}
          {!showSocials && (
            <MDBIcon
              fas
              icon="plus-circle"
              style={{ marginTop: "7rem", marginRight: "1rem" }}
              color="danger"
              onClick={() => setShowSocials(true)}
            />
          )}
        </div>
      )}
      <MDBCardBody className="d-flex flex-column align-items-center justify-content-center">
        <MDBCardTitle className="fw-bold">{title}</MDBCardTitle>
        <MDBCardText className="text-muted">{description}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
