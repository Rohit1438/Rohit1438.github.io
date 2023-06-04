import React, { useState } from "react";
import styles from "./Project.module.css";
import bewakoofImage from "./ProjectImages/bewakoof.png";

import ShoppersImage from "./ProjectImages/Shoppers.png";

const Project1 = () => {
    const [hide, setHide] = useState(true);
    const handleToggle = () => {
        setHide(!hide);
      };

      const handleImageClick = () => {
        window.location.href = "https://beunikue.netlify.app/";
      };
  return (
    
        
      <div className={`${styles.Project_card} 1`}>
          <img src={bewakoofImage} alt="" onClick={handleImageClick}/>
          <div className={`${styles.Project_card_text} 1`}>
            <h2>
              Be-Unique <span>(Bewakoof.com Clone)</span>
            </h2>
            <p>
              A popular fashion e-commerce brand that sells a wide range of
              clothing, fashion accessories, backpacks, and everyday use items
              directly to customers.{" "}
            </p>

            <button onClick={handleToggle}>
              {hide ? "See More" : "See Less"}
            </button>
            <div
              className={`${
                hide
                  ? styles.Project_card_text_hidden
                  : styles.Project_card_text_visible
              }`}
            >
              <div className={`${styles.Time}`}>
                <h3>
                  Time ⏲️ : <span> 4 days</span>
                </h3>
                <h3>
                  Type : <span>Group ( 5 members)</span>
                </h3>
              </div>
              <div className={`${styles.AreasofResponsibility}`}>
                <h3 style={{ fontWeight: "600" }}>Areas of Responsiblity :</h3>
                <ul>
                  <li>Admin Portal</li>
                  <li>Making json server and controlling the data flow</li>
                  <li>Login-Logout feature for admin</li>
                  <li>CRUD operation for admin panel</li>
                </ul>
              </div>
              <div className={`${styles.techStacks}`}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>



  )
}

export default Project1
