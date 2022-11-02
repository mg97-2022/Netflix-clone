import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/logo (1).png";
import classes from "./GeneralNav.module.css";

function GeneralNav({
  children,
  className,
  position,
  borderBottom,
  backgroundColor,
}) {
  return (
    <header
      className={classes.header}
      style={{
        position,
        borderBottom,
        backgroundColor,
      }}
    >
      <nav className={classes.nav}>
        <Link to="/" className={classes.logo}>
          <img src={image} alt="" />
        </Link>
        <div className={`${className} ${classes.nav_container}`}>
          {children}
        </div>
      </nav>
    </header>
  );
}

export default GeneralNav;
