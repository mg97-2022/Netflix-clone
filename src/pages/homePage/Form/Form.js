import React, { useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupActions } from "../../../store/signup";

import classes from "./Form.module.css";

function Form(props) {
  const emailValue = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signupActions.signupMail(emailValue.current.value))
    navigate("/signup/registration");
  };

  return (
    <section className={`${classes["form-container"]} ${props.className}`}>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form className={classes.form} onSubmit={submitHandler}>
        <input type="email" placeholder="Email address" ref={emailValue} />
        <button type="submit">
          get started <MdArrowForwardIos />
        </button>
      </form>
    </section>
  );
}

export default Form;
