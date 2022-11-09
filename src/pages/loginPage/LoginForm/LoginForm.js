import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import { signinActions } from "../../../store/signin";
import useInputValidate from "../../../hooks/use-input";
import LoadingSpinner from "../../../components/ui/LoadingSpinner/LoadingSpinner";
import classes from "./LoginForm.module.css";
import BottomText from "./BottonText/BottomText";
import InvalidInput from "../../../components/InvalidInput/InvalidInput";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error: requestError, sendRequest, isLoading } = useHttp();

  // validate email and password
  const {
    validInput: validEmail,
    enteredValue: emailValue,
    hasError: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useInputValidate((value) =>
    value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
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

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validEmail || !validPassword) {
      return;
    }

    const data = await sendRequest({
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_KEY}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: emailValue,
        password: passwordValue,
        returnSecureToken: true,
      },
    });

    if (!!requestError) {
      return
    }

    const userId = `${data.localId}${data.email.replace(".", "")}`;

    dispatch(signinActions.loggedIn(userId));

    navigate("/shows", { replace: true });

    resetEmail();
    resetPassword();
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      {requestError && (
        <InvalidInput
          messageHandler={(errorMessage) => {
            if (errorMessage.match(/email/gi)) {
              return <Link to="/">create a new account.</Link>;
            }
          }}
          message={requestError}
        />
      )}
      <h2>sign in</h2>
      <div className={classes.inputs}>
        <div className={classes.input}>
          <input
            className={emailError ? classes.error : ""}
            type="email"
            placeholder="Email"
            value={emailValue}
            onChange={(e) => emailChangeHandler(e.target.value)}
            onBlur={emailBlurHandler}
          />
          {emailError && <p>Please enter a valid email.</p>}
        </div>
        <div className={classes.input}>
          <input
            className={passwordError ? classes.error : ""}
            type="password"
            placeholder="password"
            value={passwordValue}
            onChange={(e) => passwordChangeHandler(e.target.value)}
            onBlur={passwordBlurHandler}
          />
          {passwordError && (
            <p>Your password must contain between 6 and 60 characters.</p>
          )}
        </div>
        <button className="form_btn" type="submit">
          {!isLoading && "sign in"}
          {isLoading && (
            <LoadingSpinner color="white" width="35px" height="35px" />
          )}
        </button>
      </div>
      <BottomText />
    </form>
  );
}

export default LoginForm;
