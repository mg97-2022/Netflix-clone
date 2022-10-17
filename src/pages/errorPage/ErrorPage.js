import React from "react";
import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.css";
import image from "../../assets/logo (1).png";

function ErrorPage() {
  return (
    <section className={classes.section}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={image} alt="Netflix" />
        </Link>
      </div>
      <div className={classes.background}>
        <div className={classes.content}>
          <h1>Lost your way?</h1>
          <p>
            Sorry, we can't find that page. You'll find lots to explore on the
            home page
          </p>
          <Link to="/">Netflix Home</Link>
          <p>Error Code<span>NSES-404</span></p>
        </div>
        <p className={classes.space}>
          FROM <span>LOST IN SPACE</span>
        </p>
        <div className='overlay'></div>
      </div>
    </section>
  );
}

export default ErrorPage;
