import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../../../components/layout/Nav/Nav";
import { signinActions } from "../../../store/signin";
import NavList from "../../../components/layout/NavList/NavList";
import { FaBars } from "react-icons/fa";

import classes from "./HomeNav.module.css";

function HomeNav() {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(signinActions.loggedOut());
    localStorage.removeItem('userId')
  };

  const loggedIn = useSelector((state) => state.signin.loggedIn);
  return (
    <Nav position={"absolute"}>
      <nav className={classes.nav}>
        {loggedIn && <NavList showNav={showNav} />}
        <div className={classes.right}>
          {loggedIn && (
            <Fragment>
              <FaBars
                onClick={() => setShowNav((prev) => !prev)}
                className={classes.bars}
              />
              <button
                className={`btn ${classes.logout}`}
                onClick={logoutHandler}
              >
                Log out
              </button>
            </Fragment>
          )}
          ={" "}
          {!loggedIn && (
            <Link to="login" className={`btn ${classes.sign}`}>
              sign in
            </Link>
          )}
        </div>
      </nav>
      {/* {loggedIn && (
        <button className={`btn ${classes.logout}`} onClick={logoutHandler}>
          Log out
        </button>
      )}
      {!loggedIn && (
        <Link to="login" className={`btn ${classes.sign}`}>
          sign in
        </Link>
      )} */}
    </Nav>
  );
}

export default HomeNav;
