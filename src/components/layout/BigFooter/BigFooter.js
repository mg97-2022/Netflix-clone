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
        <span>questions? contact us</span>
        <ul className={classes.links}>
          <li>
            <span>FAQ</span>
          </li>
          <li>
            <span>Help Center</span>
          </li>
          <li>
            <span>Account</span>
          </li>

          <li>
            <span>Media Center</span>
          </li>

          <li>
            <span>Investor Relations</span>
          </li>
          <li>
            <span>Jobs</span>
          </li>
          <li>
            <span>Ways To Watch</span>
          </li>

          <li>
            <span>Terms of Use</span>
          </li>

          <li>
            <span>Privacy</span>
          </li>

          <li>
            <span>Cookie Preferences</span>
          </li>
          <li>
            <span>Corporate Information</span>
          </li>
          <li>
            <span>Contact Us</span>
          </li>

          <li>
            <span>Speed Test</span>
          </li>

          <li>
            <span>Legal Notices</span>
          </li>

          <li>
            <span>Only on Netflix</span>
          </li>
        </ul>
        <p>Netflix Egypt</p>
      </div>
    </footer>
  );
}

export default BigFooter;
