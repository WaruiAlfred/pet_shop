import {
  MDBContainer,
  MDBListGroup,
  MDBRow,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import React from "react";

function About() {
  return (
    <>
      <MDBRow className="">
        <div className="bg-image">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/855/961/202/rat-hands-pet-wallpaper-preview.jpg"
            className="img-fluid w-100 h-75"
            alt="Sample"
          />
          <div
            className="mask h-75"
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
    </>
  );
}

export default About;
