import React from "react";
import { MDBRipple } from "mdb-react-ui-kit";

export default function Image() {
  return (
    <MDBRipple rippleTag="a">
      <img
        src="https://mdbootstrap.com/img/new/standard/city/044.webp"
        className="img-fluid rounded"
        alt="example"
      />
    </MDBRipple>
  );
}
