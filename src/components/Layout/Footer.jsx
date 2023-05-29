import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <MDBTypography
                variant="h6"
                className="text-uppercase fw-bold mb-4"
                color="danger"
              >
                <MDBIcon icon="paw" className="me-3" />
                Pet Star
              </MDBTypography>
              <p>Your pet's next door haven.</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Toys
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Foods
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Treats
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Accessories
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4"> Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              {/* <p>
                <a href="#!" className="text-reset">
                  Categories
                </a>
              </p> */}
              <p>
                <a href="#!" className="text-reset">
                  Images
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Services
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Nairobi, Kenya
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                petstar@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 254 072 456 7888
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.07)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="#">
          PetStar.com
        </a>
      </div>
    </MDBFooter>
  );
}
