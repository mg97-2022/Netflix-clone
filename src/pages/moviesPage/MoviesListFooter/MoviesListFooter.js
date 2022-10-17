import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { ImTwitter } from "react-icons/im";
import classes from "./MoviesListFooter.module.css";

function MoviesListFooter() {
  return (
    <footer>
      <div className={classes.social}>
        <ImFacebook2 />
        <FiInstagram />
        <ImTwitter />
      </div>
    </footer>
  );
}

export default MoviesListFooter;
