import React from "react";
import LoadingSpinner from "../../components/ui/LoadingSpinner/LoadingSpinner";
import classes from "./LoadingPage.module.css";
function LoadingPage() {
  return (
    <div className={classes.loading_page}>
      <h2>loading...</h2>
      <LoadingSpinner color="red" width="100px" height="100px" />
    </div>
  );
}

export default LoadingPage;
