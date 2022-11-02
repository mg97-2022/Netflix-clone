import React from "react";
import classes from "./InvalidInput.module.css";

function InvalidInput({ message, messageHandler = null }) {
  const errorMessage = message.toLowerCase().replace(/_/g, " ");
  return (
    <p className={classes.invalid_inputs}>
      {errorMessage} {messageHandler(errorMessage)}
    </p>
  );
}

export default InvalidInput;
