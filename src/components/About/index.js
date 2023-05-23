import {
  MDBContainer,
  MDBListGroup,
  MDBRow,
  MDBTypography,
  MDBIcon,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { expertTeam } from "../../data";
import Card from "../Card";
import PricingCard from "./PricingCard";
import { pricing } from "../../data/index";

function About() {
  const [pricingValue, setPricingValue] = useState("month");

  const handlePricingBtnClick = (e) => {
    setPricingValue(e.target.value);
  };

  return (
    <>
      <MDBRow className="mb-5">
        <div className="bg-image  ">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/855/961/202/rat-hands-pet-wallpaper-preview.jpg"
            className="img-fluid"
            alt="Sample"
            style={{ objectFit: "cover", height: "60vh", width: "100%" }}
          />
          <div
            className="mask "
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white" }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center h-100 px-5 ">
              <MDBTypography variant="h2">
                Best Agency For Your Pet
              </MDBTypography>
              <MDBTypography className=" my-3 text-muted">
                We denounce with righteous indignition and dislike men
                <br />
                who are so beguiled and demoralized by hatred torwards pets.{" "}
              </MDBTypography>
              <MDBContainer className="d-flex flex-row justify-content-evenly align-items-center w-50 text-muted">
                <MDBListGroup>
                  <MDBTypography listUnStyled className="mb-0">
                    <li className="mb-1">
                      <MDBIcon
                        icon="check-circle"
                        className="me-2 text-success"
                      />
                      Certified Groomer
                    </li>
                    <li className="mb-1">
                      <MDBIcon
                        icon="check-circle"
                        className="me-2 text-success"
                      />
                      Pet parent of 3 dogs
                    </li>
                  </MDBTypography>
                </MDBListGroup>
                <MDBListGroup>
                  <MDBTypography listUnStyled className="mb-0">
                    <li className="mb-1">
                      <MDBIcon
                        icon="check-circle"
                        className="me-2 text-success"
                      />
                      20+ years of experience
                    </li>
                    <li className="mb-1">
                      <MDBIcon
                        icon="check-circle"
                        className="me-2 text-success"
                      />
                      Animal lover
                    </li>
                  </MDBTypography>
                </MDBListGroup>
              </MDBContainer>
            </div>
          </div>
        </div>
      </MDBRow>
      <MDBRow className="px-5 ">
        <MDBContainer fluid>
          <MDBRow className="text-center ">
            <MDBTypography variant="h1">Meet The Expert Team</MDBTypography>
            <MDBTypography>
              We have outsourced some of the best professionals in their field
              of expertise
            </MDBTypography>
            <MDBRow className=" g-4 mb-5">
              {expertTeam.map((item) => (
                <MDBCol key={item.id}>
                  <Card
                    title={item.name}
                    description={item.designation}
                    image={item.image}
                    socials={true}
                  />
                </MDBCol>
              ))}
            </MDBRow>
          </MDBRow>
          <MDBRow className="d-flex justify-content-between align-items-center mb-5 w-100">
            <div className="d-flex flex-column w-50 ">
              <MDBTypography variant="h1">Best Pricing Plan</MDBTypography>
              <MDBTypography className="text-muted">
                Our Pricing Plan is designed to cater to your pets needs. With a
                range of services and products, our plan offers you the
                flexibility, and value you need . Choose the plan that suits you
                and give your pet the best life!
              </MDBTypography>
            </div>
            <MDBBtnGroup shadow="0" className="w-25 ">
              <MDBBtn
                color="danger"
                value={"month"}
                rounded
                outline={pricingValue === "month"}
                onClick={handlePricingBtnClick}
              >
                Monthly
              </MDBBtn>
              <MDBBtn
                color="danger"
                value={"year"}
                rounded
                outline={pricingValue === "year"}
                onClick={handlePricingBtnClick}
              >
                Yearly
              </MDBBtn>
            </MDBBtnGroup>
          </MDBRow>
          <MDBRow className=" g-4 mb-5">
            {pricing.map((item) => (
              <MDBCol key={item.id}>
                <PricingCard
                  {...item}
                  price={pricingValue === "year" ? item.price * 12 : item.price}
                />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </MDBRow>
    </>
  );
}

export default About;
