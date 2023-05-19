import { MDBRow } from "mdb-react-ui-kit";
import React, { Fragment } from "react";
import styles from "./Home.module.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <Fragment>
      <MDBRow className={`${styles.top_row} bg-dark bg-gradient`}>
        <Navbar />
      </MDBRow>
      <MDBRow className={styles.top_row}>Bottom Section</MDBRow>
    </Fragment>
  );
};

export default Home;
