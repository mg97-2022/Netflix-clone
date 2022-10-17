import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInputValidate from "../../../../hooks/use-input";
import classes from "./Content.module.css";
import { signupActions } from "../../../../store/signup";
import useHttp from "../../../../hooks/use-http";
import InvalidInput from "../../../../components/InvalidInput/InvalidInput";
import LoadingSpinner from "../../../../components/ui/Modal/LoadingSpinner/LoadingSpinner";
import { signinActions } from "../../../../store/signin";

function Content() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailValueFromHomePage = useSelector((state) => state.signup.email);
  const { error: requestError, sendRequest, isLoading } = useHttp();

  const {
    validInput: validEmail,
    enteredValue: emailValue,
    hasError: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useInputValidate(
    (value) => value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    emailValueFromHomePage
  );

  const {
    validInput: validPassword,
    enteredValue: passwordValue,
    hasError: passwordError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetInput: resetPassword,
  } = useInputValidate(
    (value) => value.trim().length >= 6 && value.trim().length <= 60
  );

  const emailChange = (e) => {
    dispatch(signupActions.signupMail(e.target.value));
    emailChangeHandler(e.target.value);
  };

  const responseHandler = (data) => {
    const userId = `${data.localId}${data.email.replace(".", "")}`;
    dispatch(signinActions.loggedIn(userId));
    setTimeout(() => {
      dispatch(signupActions.modalOpen());
    }, 1000);
    resetEmail();
    resetPassword();
    navigate("/shows", { replace: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!validEmail || !validPassword) {
      return;
    }

    sendRequest(
      {
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARZXLEoUEkZwSKFncbv7oYPnYgnqF9lo8",

        method: "POST",
        body: {
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true,
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      responseHandler
    );

    // resetEmail();
    // resetPassword();
  };
  return (
    <form className={`container ${classes.form}`} onSubmit={submitHandler}>
      <div className={classes.content}>
        <span
          style={{
            marginBottom: requestError ? "20px" : "",
          }}
        >
          step 1 of 3
        </span>
        {requestError && (
          <InvalidInput
            messageHandler={(message) => {}}
            message={requestError}
          />
        )}
        <h2>Create a password to start your membership</h2>
        <p>Just a few more steps and you're done! </p>
        <p>We hate paperwork, too.</p>
        <div className={`${classes.input} ${emailError ? classes.error : ""}`}>
          <input
            type="email"
            placeholder="Email"
            value={emailValue}
            onChange={emailChange}
            onBlur={emailBlurHandler}
            required
          />

          {emailError && (
            <p className={classes.error_message}>
              {emailValue.trim().length === 0
                ? "Email is required!"
                : (emailValue.trim().length < 5) & !emailValue.includes("@")
                ? "Email should be between 5 and 50 characters"
                : "Please enter a valid email address"}
            </p>
          )}
        </div>
        <div
          className={`${classes.input} ${passwordError ? classes.error : ""}`}
        >
          <input
            type="password"
            placeholder="Add a password"
            onChange={(e) => passwordChangeHandler(e.target.value)}
            onBlur={passwordBlurHandler}
            value={passwordValue}
            required
          />
          {passwordError && (
            <p className={classes.error_message}>
              {passwordValue.trim().length === 0
                ? "Password is required!"
                : "Password should be between 6 and 60 characters"}
            </p>
          )}
        </div>

        <div className={classes.checkbox}>
          <input type="checkbox" id="special-offer" />
          <label htmlFor="special-offer">
            Please do not email me Netflix special offers.
          </label>
        </div>
        <button className={`form_btn ${classes.btn}`} type="submit">
          {isLoading && (
            <LoadingSpinner color="white" width="35px" height="35px" />
          )}
          {!isLoading && "next"}
        </button>
      </div>
    </form>
  );
}

export default Content;
