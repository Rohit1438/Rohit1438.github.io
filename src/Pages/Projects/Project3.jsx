import React, { useState } from 'react'
import ShoppersImage from "./ProjectImages/Wheels.png";
import styles from "./Project.module.css";


const Project3 = () => {

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
                       Wheels<span>(customizedparl.com Clone)</span>
                      </h2>
                      <p>
                        An cycler focused platform that sells a wide range of differnet types of bi-cycles and other motor vehicled accessories for different locations.
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
                            Type : <span style={{color:"red"}}>Individual </span>
                          </h3>
                        </div>
                        <div className={`${styles.AreasofResponsibility}`}>
                          <h3 style={{ fontWeight: "600" }}>Areas of Responsiblity :</h3>
                          <ul>
                            <li>Homepage</li>
                            <li>Product page with json server</li>
                            <li>Single product page</li>
                            <li>Private routing </li>
                            <li>Cart section </li>
                          </ul>
                        </div>
                        <div className={`${styles.techStacks}`}>
          
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                            alt=""
                          />
                          <img
                            src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
                            alt=""
                          />
          
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                            alt=""
                          />
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__9_SEOIEZbvl3-o_0ru-SuWzIREXSNqYeb-FYRHod_EH4JQJKJ2uVPtp9ecCcGQaeWCB3h8r5ZE&usqp=CAU&ec=48665698"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
          
          







  
  )
}

export default Project3
