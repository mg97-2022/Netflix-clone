import React from "react";
import classes from "./Content.module.css";
import image from "../../../../assets/screens.png";
import { Link } from "react-router-dom";

function Content() {
  return (
    <section className={`container ${classes.section}`}>
      <div className={`${classes.content}`}>
        <img src={image} alt="screens" />
        {/* <span>step 1 of 3</span> */}
        <h2>Finish setting up your account</h2>
        <div className={classes.text}>
          <p>Netflix is personalized for you.</p>
          <p>Create a password to watch on any</p>
          <p>device at any time.</p>
        </div>
        <Link className={classes.link} to="/signup/regform">next</Link>
      </div>
    </section>
  );
}

export default Content;
