import React, { useState } from "react";
import styles from "./Project.module.css";
import bewakoofImage from "./ProjectImages/bewakoof.png";

import ShoppersImage from "./ProjectImages/Shoppers.png";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
const Project = () => {

  const [hide2, setHide2] = useState(true);



  // console.log(hide,"hide")
  // console.log(hide2,"hide2");
  return (
    <div className={`${styles.Project_Page}`}>
      <h1 style={{ fontFamily: "Ysabeau, sans-serif" }}>Projects I made</h1>

      <div className={`${styles.Project_cards} `} id="projects">


<Project1 />

<Project2 />

<Project3/>


{/* <div style={{backgroundColor:"red"}}>red</div>
<div  style={{backgroundColor:"blue"}}>blue</div>
<div  style={{backgroundColor:"green"}}>green</div> */}

      </div>
    </div>
  );
};

export default Project;
