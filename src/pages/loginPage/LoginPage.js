import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import image from "../../assets/logo (1).png";
import LoginForm from "./LoginForm/LoginForm";
import LoginFooter from "./LoginFooter/LoginFooter";
import classes from "./LoginPage.module.css";

function LoginPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);
  return (
    <div
      className={classes.main}
      style={{
        backgroundImage: `${
          windowWidth >= 768
            ? "url(https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/bc0788fe-a1ce-49fb-bc80-525f4879b02b/EG-en-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg)"
            : ""
        }`,
        backgroundColor: `${windowWidth >= 768 ? "white" : "black"}`,
      }}
    >
      <div className={classes.logo}>
        <Link to="/">
          <img src={image} alt="Netflix" />
        </Link>
      </div>
      <div className={classes.overlay} />
      <LoginForm windowWidth={windowWidth} />
      <LoginFooter />
    </div>
  );
}

export default LoginPage;
