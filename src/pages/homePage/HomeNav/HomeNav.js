import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signinActions } from "../../../store/signin";
import NavList from "../../../components/layout/NavList/NavList";
import { FaBars } from "react-icons/fa";
import classes from "./HomeNav.module.css";
import GeneralNav from "../../../components/layout/GeneralNav/GeneralNav";

function HomeNav() {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(signinActions.loggedOut());
    localStorage.removeItem("userId");
  };

  const loggedIn = useSelector((state) => state.signin.loggedIn);
  return (
    <GeneralNav position={"absolute"}>
      <div className={classes.left}>
        {loggedIn && <NavList showNav={showNav} />}
      </div>
      <div className={classes.right}>
        {loggedIn && (
          <Fragment>
            <FaBars
              onClick={() => setShowNav((prev) => !prev)}
              className={classes.bars}
            />
            <button className={`btn ${classes.logout}`} onClick={logoutHandler}>
              Log out
            </button>
          </Fragment>
        )}{" "}
        {!loggedIn && (
          <Link to="login" className={`btn ${classes.sign}`}>
            sign in
          </Link>
        )}
      </div>
    </GeneralNav>
  );
}

export default HomeNav;
