import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/logo (1).png";
import LoginForm from "./LoginForm/LoginForm";
import classes from "./LoginPage.module.css";
import GeneralFooter from "../../components/layout/GeneralFooter/GeneralFooter";

function LoginPage() {
  return (
    <div
      className={classes.main}
    >
      <div className={classes.logo}>
        <Link to="/">
          <img src={image} alt="Netflix" />
        </Link>
      </div>
      <div className={classes.overlay} />
      <LoginForm />
      <GeneralFooter backgroundColor="rgb(0, 0, 0, 0.75)" />
    </div>
  );
}

export default LoginPage;
