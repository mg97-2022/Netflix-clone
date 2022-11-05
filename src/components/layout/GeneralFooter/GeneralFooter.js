import React from "react";
import classes from "./GeneralFooter.module.css";

function GeneralFooter({ backgroundColor, borderTop }) {
  return (
    <footer className={classes.footer} style={{ backgroundColor, borderTop }}>
      <div className={classes.content}>
        <span>questions? contact us.</span>
        <ul className={classes.list}>
          <li>
            <span>FAQ</span>
          </li>
          <li>
            <span>heLP center</span>
          </li>
          <li>
            <span>terms of use</span>
          </li>
          <li>
            <span>privacy</span>
          </li>
          <li>
            <span>cookie preferences</span>
          </li>
          <li>
            <span>corporate information</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default GeneralFooter;
