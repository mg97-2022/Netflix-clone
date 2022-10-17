import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./NavList.module.css";

function NavList({ showNav }) {
  // const navigate = useNavigate()

  return (
    <ul className={`${classes.list} ${showNav && classes.show_nav}`}>
      <li>
        <NavLink
          end
          to="/shows"
          className={(navLink) => (navLink.isActive ? classes.active : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          end
          to="/shows/mylist"
          className={(navLink) => (navLink.isActive ? classes.active : "")}
        >
          my list
        </NavLink>
      </li>
    </ul>
  );
}

export default NavList;

