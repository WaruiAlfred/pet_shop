import {
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBTypography,
  MDBCardText,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";
import dogPic from "../../assets/dog2.png";
import styles from "./About.module.css";

function GiftSection() {
  return (
    <MDBCard
      className={` w-100 mx-auto bg-dark text-white mb-5`}
      style={{ borderRadius: "2rem" }}
    >
      <MDBRow className="g-0">
        <MDBCol md={"2"}></MDBCol>
        <MDBCol
          md="6"
          className="d-flex align-items-center justify-content-center"
        >
          <MDBCardBody className="d-flex flex-column px-5">
            <MDBTypography variant="h2">Get Special Gift</MDBTypography>
            <MDBCardText>
              For our customers with more than a year of subscription, we offer
              a special gift for your pet.
            </MDBCardText>
            <MDBBtn
              color="danger"
              rounded
              className={` ${styles.responsive_width} w-25`}
            >
              Contact Us
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol
          md="2"
          className="d-flex align-items-center justify-content-center"
        >
          <MDBCardImage src={dogPic} alt="..." fluid className="h-75" />
        </MDBCol>
        <MDBCol md={"2"}></MDBCol>
      </MDBRow>
    </MDBCard>
  );
}

export default GiftSection;
