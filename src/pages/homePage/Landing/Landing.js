import React from "react";
import Form from "../Form/Form";
import classes from "./Landing.module.css";

function Landing() {
  return (
    <section className={classes.landing}>
      <div className={classes.overlay}></div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/bc0788fe-a1ce-49fb-bc80-525f4879b02b/EG-en-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className={classes.content}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <Form />
      </div>
    </section>
  );
}

export default Landing;
