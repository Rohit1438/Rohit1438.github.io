import React from "react";
import styles from "./Education.module.css";
const Education = () => {
  return (
    <div className={`${styles.Education_Page}`}>
      <h1>Education</h1>
      <div className={`${styles.Education_cards_component}`}>
        <div className={`${styles.edu_card} ${styles.card_1}`}>
          <h2>Full Stack Web Development</h2>
          <div>
            <p className={`${styles.edu_card_p}`}>
              
              Currently pursuing
              <span style={{ color: "#8EDF52", fontWeight: "600" }}>
              
                ( 2021-present )
              </span>
            </p>
          </div>
          <h3>Masai School (Bengaluru)</h3>
        </div>

        <div className={`${styles.edu_card} ${styles.card_2}`}>
          <h2>Industrial Fisheries( B.Sc )</h2>
          <div>
            <p className={`${styles.edu_card_p}`}>
              {" "}
              Currently pursuing{" "}
              <span style={{ color: "#15d2d9", fontWeight: "600" }}>
                
                ( 2019-2021 )
              </span>
            </p>
            <h3>
            Asutosh College( Calcutta University )
            </h3>
          </div>
          <h3></h3>
        </div>

        <div className={`${styles.edu_card} ${styles.card_3}`}>
          <h2>Masai School</h2>
          <div>
            <p className={`${styles.edu_card_p}`}>
              {" "}
              Currently pursuing{" "}
              <span style={{ color: "#8EDF52", fontWeight: "600" }}>
                {" "}
                ( 2021-present )
              </span>{" "}
            </p>
          </div>
          <h3>Full Stack Web Development</h3>
        </div>

        <div className={`${styles.edu_card} ${styles.card_4}`}>
          <h2>Masai School</h2>
          <div>
            <p className={`${styles.edu_card_p}`}>
              {" "}
              Currently pursuing{" "}
              <span style={{ color: "#8EDF52", fontWeight: "600" }}>
                {" "}
                ( 2021-present )
              </span>{" "}
            </p>
          </div>
          <h3>Full Stack Web Development</h3>
        </div>
      </div>
    </div>
  );
};

export default Education;
