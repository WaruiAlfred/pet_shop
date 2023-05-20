import { MDBRow } from "mdb-react-ui-kit";
import React, { Fragment } from "react";
import styles from "./Home.module.css";
import Navbar from "./Navbar";
import IntroSection from "./IntroSection";

const Home = () => {
  return (
    <Fragment>
      <MDBRow className={`${styles.top_row} bg-dark bg-gradient `}>
        <Navbar />
        <IntroSection />
      </MDBRow>
      <MDBRow className={styles.top_row}>Bottom Section</MDBRow>
    </Fragment>
  );
};

export default Home;
