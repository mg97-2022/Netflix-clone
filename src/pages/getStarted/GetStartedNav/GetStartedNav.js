import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../components/layout/Nav/Nav";
import classes from "./GetStartedNav.module.css";

function GetStartedNav() {
  return (
    <Nav position='relative' borderBottom='1px solid #e6e6e6'>
      <Link className={classes.sign} to="/login">
        sign in
      </Link>
    </Nav>
  );
}

export default GetStartedNav;
