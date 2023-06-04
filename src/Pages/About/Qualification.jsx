import React from "react";
import styles from "./About.module.css";
const Qualification = () => {
  return (
    <div className={`${styles.Qualifications}`}>
      <h2
        style={{
          color: "rgb(255, 190, 58)",
          fontWeight: "600",
        }}
      >
        Personal Details
      </h2>

      <p>
        Name : Rohit Banerjee
        <br />
        Gender : Male
        <br />
        Date of Birth : 20/03/2002
        <br />
        Location : Kolkata ( South 24 pgs )
      </p>

      <h3
        style={{
          color: "rgb(255, 190, 58)",
          fontSize: "25px",
          fontWeight: "100",
        }}
      >
        Contact details
      </h3>
      <p>
        Email : rohitbanerjee202@gmail.com
        <br />
        Linkdin : Rohit Banerjee
        <br />
        Github : Rohit1438
      </p>
      <h3
        style={{
          color: "rgb(255, 190, 58)",
          fontSize: "25px",
          fontWeight: "100",
        }}
      >
        Languages known
      </h3>
      <p>Bengali (M)
        <br />
      English
      <br />
      Hindi</p>
    </div>
  );
};

export default Qualification;
