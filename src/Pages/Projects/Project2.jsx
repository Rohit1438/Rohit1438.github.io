import React, { useState } from 'react'
import ShoppersImage from "./ProjectImages/Shoppers.png";
import styles from "./Project.module.css";


const Project2 = () => {
    const [hide, setHide] = useState(true);
    const handleToggle = () => {
        setHide(!hide);
      };
     
      const handleImageClick = () => {
        window.location.href = "https://deft-yeot-23c30d.netlify.app/";



      };

  return (
    

      



  
<div className={`${styles.Project_card} 2`}>

<img src={ShoppersImage} alt="" onClick={handleImageClick} />
          <div className={`${styles.Project_card_text} 1`}>
            <h2>
             Shoppers <span>(Ikea.com Clone)</span>
            </h2>
            <p>
              A e-commerce platform that sells a wide range of
            kitchen ,furnitures and organizers for households
            .{" "}
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
                  <li>Homepage</li>
                  <li>payment Page</li>
                  <li>Product and cart page along with wishlist</li>
                  <li>json server </li>
                </ul>
              </div>
              <div className={`${styles.techStacks}`}>

              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
                  alt=""
                />

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
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

export default Project2
