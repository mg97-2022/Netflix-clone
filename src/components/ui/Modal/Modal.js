import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Transition from "react-transition-group/Transition";
import { useSelector } from "react-redux";

const Overlay = (props) => {
  const modalShow = useSelector((state) => state.signup.isModalOpen);

  return (
    <Fragment>
      {modalShow && <div className={classes.overlay} onClick={props.onClose} />}
    </Fragment>
  );
};

const Box = ({ children }) => {
  const modalShow = useSelector((state) => state.signup.isModalOpen);

  return (
    <Transition mountOnEnter unmountOnExit timeout={300} in={modalShow}>
      {(state) => {
        const cssClasses = `${classes.box} ${
          state === "entering"
            ? classes.modal_open
            : state === "exiting"
            ? classes.modal_close
            : ""
        }`;
        return <div className={cssClasses}>{children}</div>;
      }}
    </Transition>
  );
};

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay onClose={props.onClose} />,
        document.querySelector(".modal_overlay")
      )}
      {ReactDOM.createPortal(
        <Box>{props.children}</Box>,
        document.querySelector(".modal_box")
      )}
    </Fragment>
  );
}

export default Modal;
