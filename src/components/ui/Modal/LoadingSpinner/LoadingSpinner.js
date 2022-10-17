import React from "react";
import classes from "./LoadingSpinner.module.css";

function LoadingSpinner({ width, height, color }) {
  return (
    <div
      className={classes.spinner}
      style={{
        width,
        height,
        background: `conic-gradient(#0000 10%, ${color})`,
      }}
    ></div>
  );
}

export default LoadingSpinner;
