import React from "react";
import { MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { services } from "../data/index";

const Service = ({ id, title, description, image }) => {
  return (
    <MDBRow
      className={`d-flex 
      ${
        id % 2 === 0 ? "flex-md-row-reverse" : "flex-md-row"
      } flex-sm-column justify-content-center align-items-center mb-5 px-5`}
    >
      <img
        src={image}
        className="img-fluid hover-shadow w-50 mb-2"
        alt={title}
      />
      <div className="d-flex flex-column justify-content-center align-items-center w-50">
        <MDBTypography variant="h2" className="text-center">
          {title}
        </MDBTypography>
        <MDBTypography className="text-center">{description}</MDBTypography>
      </div>
    </MDBRow>
  );
};

function ServicesPage() {
  return (
    <>
      <MDBRow className="mb-3">
        <img
          src="https://lh3.googleusercontent.com/eun3C9nrgHBtqI_x6hfQdf6rjBmfK-bwHe4Z_rdZj4hDH8V_wHTRU1jWlUGXCEP292kndI89btwfCNrdUDyilD0OZ-aDMGP_qYEK284PnA=s0"
          className="img-fluid shadow-4"
          alt="services intro image"
          style={{
            objectFit: "cover",
            height: "60vh",
            width: "100%",
            objectPosition: "center",
          }}
        />
      </MDBRow>
      <MDBRow className="d-flex flex-column justify-content-center align-items-center mb-5">
        <div className="d-flex flex-column justify-content-center align-items-center w-50">
          <MDBTypography variant="h1" className="text-center">
            Our Services
          </MDBTypography>
          <MDBTypography className="text-center">
            At Pet Star, we passionately serve all types of pets, regardless of
            species or age. Our love for animals is evident in every caring
            gesture we offer, from belly rubs to treats. We aim to be your
            trusted companion in ensuring your pet's well-being and happiness.
            Count on us for dependable, high-quality care and an impeccable,
            stress-free experience. Let us support you in creating a healthy and
            joyful life for your beloved companion.
          </MDBTypography>
        </div>
      </MDBRow>
      {services.map((service) => (
        <Service key={service.id} {...service} />
      ))}
    </>
  );
}

export default ServicesPage;
