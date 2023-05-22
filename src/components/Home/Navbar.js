import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import styles from "./Home.module.css";

export default function Navbar() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="transparent">
        <MDBContainer fluid className="px-3">
          <MDBNavbarToggler
            type="button"
            light
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href="#" className="text-danger">
            Pet Star
          </MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Categories</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Images</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Contact</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Services</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            {/*<MDBInputGroup tag="form" className="d-flex w-auto mb-3">
              <input
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
                type="Search"
              />
              <MDBBtn outline>Search</MDBBtn>
  </MDBInputGroup>*/}
            <MDBBtn
              className={`d-flex w-auto mb-3 ${styles.sign_up_btn}`}
              rounded
              color="danger"
            >
              Sign Up
            </MDBBtn>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
