import React from "react";
import styles from "./Homepage.module.css";
import { Box, Grid, Image } from "@chakra-ui/react";
const Profilebanner = () => {
  return (
    <div className={`${styles.profile_banner}`}>
      <div className={`${styles.profile_banner_image}`}>
        <img
          src="https://avatars.githubusercontent.com/u/115578812?v=4"
          alt=""
        />
      </div>
      <div className={`${styles.profile_banner_text} `} >
        <h2>
            Hi 
          
            I'm
        </h2>
       <h1>
        Rohit Banerjee
       </h1>
      </div>
    </div>
  );
};

export default Profilebanner;
