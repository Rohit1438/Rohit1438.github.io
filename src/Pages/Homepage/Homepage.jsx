import React from 'react';
import Navbar from './Navbar';
import styles from './Homepage.module.css';
import Profilebanner from './Profilebanner';
import About from '../About/About';
import Education from '../Education/Education';
import Project from '../Projects/Project';

const Homepage = () => {
  return (
    <div style={{
      backgroundColor:"rgb(232, 232, 232)"
   }}>


<div className={`${styles.Homepage}`} id="home"  >
      <Navbar />

      <div className={styles.content}>
      <Profilebanner/>
      </div>
  
  
    </div>


      <div className={`${styles.About_Page}`}>
      <About/>
      </div>
      <div>
        <Education/>
      </div>
      <div>
        <Project/>
      </div>
    </div>

  );
};

export default Homepage;
