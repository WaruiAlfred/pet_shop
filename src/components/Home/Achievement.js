import React, { useState, useEffect } from "react";
import { MDBIcon, MDBTypography, MDBContainer } from "mdb-react-ui-kit";

//styling
import styles from "./Achievement.module.css";

const Achievement = ({
  title,
  count: countValue,
  countPrefix,
  icon,
  duration,
}) => {
  // label of counter
  // number to increment to
  // duration of count in seconds
  /**
   id: 001,
    title: "Happy Clients",
    count: "30",
    countPrefix: "K",
    icon: "users",
    duration: "2",
   */
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(countValue.substring(0, 3));
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + countValue.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // dependency array
  }, [countValue, duration]);

  return (
    <MDBContainer
      className={`${styles.achievement} w-auto bg-dark bg-opacity-50`}
    >
      <MDBIcon fas icon={icon} size="3x" color="danger" />
      <MDBTypography variant="h1">
        {count}
        {countPrefix}
      </MDBTypography>
      <MDBTypography>{title}</MDBTypography>
    </MDBContainer>
  );
};

export default Achievement;
