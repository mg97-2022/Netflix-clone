import React from "react";
import classes from "./BigFooter.module.css";

function BigFooter({ borderTop }) {
  return (
    <footer
      className={` ${classes.footer}`}
      style={{
        borderTop,
      }}
    >
      <div className={classes.content}>
        <a href="/">questions? contact us</a>
        <ul className={classes.links}>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Help Center</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>

          <li>
            <a href="/">Media Center</a>
          </li>

          <li>
            <a href="/">Investor Relations</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
          <li>
            <a href="/">Ways To Watch</a>
          </li>

          <li>
            <a href="/">Terms of Use</a>
          </li>

          <li>
            <a href="/">Privacy</a>
          </li>

          <li>
            <a href="/">Cookie Preferences</a>
          </li>
          <li>
            <a href="/">Corporate Information</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>

          <li>
            <a href="/">Speed Test</a>
          </li>

          <li>
            <a href="/">Legal Notices</a>
          </li>

          <li>
            <a href="/">Only on Netflix</a>
          </li>
        </ul>
        <p>Netflix Egypt</p>
      </div>
    </footer>
  );
}

export default BigFooter;
