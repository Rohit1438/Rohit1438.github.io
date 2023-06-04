import React from 'react'
import styles from "./About.module.css"
import Qualification from './Qualification'
const About = () => {
  return (
   <div className={`${styles.About} about section`}  id="about" >
    <h1>
      About
    </h1>
 <div className={`${styles.About_Page}`}>

<div className={`${styles.about_summary}`}>

<p>
A solution-driven developer with a learning and problem solving mindset with customizable skillsets. Experienced with
modern tech stacks and powered by 800 hours of practical
implementation and teamwork. Dedicated to learn new
skills and gain new experiences.

  <br />
  <br />
  In addition to being a Musician, Composer, Music Programmer, and Pianist, I am also active on YouTube, where I have published numerous original songs in collaboration with different regional labels.
           
      </p>
</div>
<div className={`${styles.qualification}`}>
<Qualification/>

</div>
    </div>

   </div>
  )
}

export default About
