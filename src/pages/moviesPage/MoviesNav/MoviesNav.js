import React, { useState } from "react";
import GeneralNav from "../../../components/layout/GeneralNav/GeneralNav";
import { FaBars } from "react-icons/fa";
import NavList from "../../../components/layout/NavList/NavList";
import classes from "./MoviesNav.module.css";

function MoviesNav() {
  const [showNav, setShowNav] = useState(false);
  return (
    <GeneralNav position="absolute">
      <div className={classes.left}>
        <NavList showNav={showNav} />
      </div>
      <div className={classes.right}>
        <FaBars
          onClick={() => setShowNav((prev) => !prev)}
          className={classes.bars}
        />
        <img
          className={classes.avatar}
          src="https://i.pinimg.com/550x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg"
          alt=""
        />
      </div>
    </GeneralNav>
  );
}

export default MoviesNav;
