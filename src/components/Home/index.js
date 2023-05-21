import {
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { Fragment } from "react";
import styles from "./Home.module.css";
import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import dogPic from "../../assets/dog.png";
import catPic from "../../assets/cat.png";

const Home = () => {
  return (
    <Fragment>
      <MDBRow className={`${styles.top_row} bg-dark bg-gradient mb-5`}>
        <Navbar />
        <IntroSection />
      </MDBRow>
      <MDBRow className={`bg-light ${styles.bottom_row} px-5`}>
        <MDBCard
          className={` ${styles.glass_card} w-100 mx-auto bg-dark text-white mb-5`}
        >
          <MDBRow className="g-0">
            <MDBCol
              md="3"
              className="d-flex align-items-center justify-content-center"
            >
              <MDBCardImage src={catPic} alt="..." fluid className="h-75" />
            </MDBCol>
            <MDBCol
              md="6"
              className="d-flex align-items-center justify-content-center"
            >
              <MDBCardBody className="d-flex align-items-center justify-content-center flex-column">
                <MDBTypography variant="h1">
                  While you are on vacation or at work can be stressful
                </MDBTypography>
                <MDBCardText>
                  If you need someone to take care of your pet while you are on
                  vacation or at work can be stressful. We are here to help you
                  with that. We will take care of your pet while you are away.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol
              md="3"
              className="d-flex align-items-center justify-content-center"
            >
              <MDBCardImage src={dogPic} alt="..." fluid className="h-75" />
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBRow>
    </Fragment>
  );
};

export default Home;
