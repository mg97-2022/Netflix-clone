import React from "react";
import { useDispatch } from "react-redux";
import Modal from "../../../components/ui/Modal/Modal";
import { signupActions } from "../../../store/signup";
import classes from "./WelcomeModal.module.css";

function WelcomeModal() {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(signupActions.modalClose());
  };
  return (
    <Modal onClose={closeModalHandler}>
      <div className={classes.content}>
        <h2>welcome</h2>
        <p>enjoy your time.</p>
        <button
          className={`btn ${classes.close_btn}`}
          onClick={closeModalHandler}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default WelcomeModal;
