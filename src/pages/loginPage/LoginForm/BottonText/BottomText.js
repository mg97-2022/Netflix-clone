import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./BottomText.module.css";

function BottomText() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Fragment>
      {/* <div className={classes.remember}>
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div> */}
      <div className={classes.signup}>
        <p>New to Netflix?</p>
        <Link to="/">Sign up now</Link>
      </div>
      <div className={classes.text}>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          {!showMore && (
            <button type="button" onClick={() => setShowMore(true)}>
              Learn more
            </button>
          )}
        </p>
        {
          <p className={showMore ? classes.show_more : ""}>
            The information collected by Google reCAPTCHA is subject to the
            Google{" "}
            <a
              href="https://policies.google.com/privacy"
              rel="noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              rel="noreferrer"
              target="_blank"
            >
              Terms of Service
            </a>{" "}
            , and is used for providing, maintaining, and improving the
            reCAPTCHA service and for general security purposes (it is not used
            for personalized advertising by Google).
          </p>
        }
      </div>
    </Fragment>
  );
}

export default BottomText;
