import React from "react";
import { MDBCarousel, MDBCarouselItem, MDBBtn } from "mdb-react-ui-kit";
import styles from "./Home.module.css";
import { LinkContainer } from "react-router-bootstrap";

export default function IntroSection() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className={`w-100 d-block ${styles.image}`}
        itemId={1}
        src="https://tlcpetfood.com/wp-content/uploads/2021/12/tlc-pet-food-home.jpg"
        alt="..."
      >
        <h1>Care of Your Pets</h1>
        <p>
          We give our best of services to make sure your pets are comfortable.
        </p>
        <LinkContainer to="/services">
          <MDBBtn color="danger" rounded className="mb-3">
            {" "}
            Our Services
          </MDBBtn>
        </LinkContainer>
      </MDBCarouselItem>
      <MDBCarouselItem
        className={`w-100 d-block ${styles.image}`}
        itemId={2}
        src="https://www.edmonton.ca/sites/default/files/public-files/documents/PetLicenceService03.jpg"
        alt="..."
      >
        {/* <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className={`w-100 d-block ${styles.image}`}
        itemId={3}
        src="https://www.thehappychickencoop.com/wp-content/uploads/2021/10/Top-Parrot-Species-1.jpg"
        alt="..."
      >
        {/* <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
