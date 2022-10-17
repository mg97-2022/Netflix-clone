import React, { useState } from "react";

import Nav from "../../../components/layout/Nav/Nav";
import classes from "./MoviesNav.module.css";
import { FaBars } from "react-icons/fa";
import NavList from "./NavList/NavList";

function MoviesNav({ backgroundColor }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <Nav position="absolute" backgroundColor={backgroundColor}>
      <nav className={classes.nav}>
        <NavList showNav={showNav} />
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
      </nav>
    </Nav>
  );
}

export default MoviesNav;
