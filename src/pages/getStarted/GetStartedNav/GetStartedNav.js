import React from "react";
import { Link } from "react-router-dom";
import GeneralNav from "../../../components/layout/GeneralNav/GeneralNav";
import classes from "./GetStartedNav.module.css";

function GetStartedNav() {
  return (
    <GeneralNav position="relative" borderBottom="1px solid #e6e6e6">
      <div className={classes.left}></div>
      <Link className={classes.sign} to="/login">
        sign in
      </Link>
    </GeneralNav>
  );
}

export default GetStartedNav;
