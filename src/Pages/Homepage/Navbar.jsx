import React from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar} id="nav-menu">
      <div className="navImage">
        <h1 style={{ color: "#CF12DD" }}>
          R<span style={{ color: "white" }}>|</span>
          <span style={{ color: "#CF12DD" }}>B</span>{" "}
        </h1>
      </div>
      <div>
        <Link className={styles.Navbar_links} to="/about">
          About
        </Link>
        <Link className={styles.Navbar_links} to="/projects">
          Projects
        </Link>
        <Link className={styles.Navbar_links} to="/skills">
          Skills
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
