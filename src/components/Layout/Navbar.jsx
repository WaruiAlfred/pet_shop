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
import styles from "./Navbar.module.css";
import { LinkContainer } from "react-router-bootstrap";

export default function Navbar() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="transparent">
        <MDBContainer fluid className="px-3">
          <MDBNavbarToggler
            type="button"
            light="true"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <LinkContainer to="/">
            <MDBNavbarBrand className="text-danger">Pet Star</MDBNavbarBrand>
          </LinkContainer>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <LinkContainer to="/">
                  <MDBNavbarLink active aria-current="page">
                    Home
                  </MDBNavbarLink>
                </LinkContainer>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink href="#">Categories</MDBNavbarLink>
              </MDBNavbarItem> */}
              <MDBNavbarItem>
                <LinkContainer to="/images">
                  <MDBNavbarLink>Images</MDBNavbarLink>
                </LinkContainer>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <LinkContainer to="/about">
                  <MDBNavbarLink>About</MDBNavbarLink>
                </LinkContainer>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink href="#">Contact</MDBNavbarLink>
              </MDBNavbarItem> */}
              <MDBNavbarItem>
                <LinkContainer to="/services">
                  <MDBNavbarLink>Services</MDBNavbarLink>
                </LinkContainer>
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
            <LinkContainer to="/auth">
              <MDBBtn
                className={`d-flex w-auto mb-3 ${styles.sign_up_btn}`}
                rounded
                color="danger"
              >
                Sign Up
              </MDBBtn>
            </LinkContainer>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
