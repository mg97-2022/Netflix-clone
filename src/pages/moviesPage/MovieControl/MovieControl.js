import React from "react";
import classes from "./MovieControl.module.css";
import { useDispatch } from "react-redux";
import { showDetailActions } from "../../../store/showDetail";
import { Link } from "react-router-dom";
import { HiEye } from "react-icons/hi";

function MovieControl({ icon, movie, onClick, className }) {
  const { id } = movie;
  const dispatch = useDispatch();
  return (
    <div className={`${classes.content} ${className}`}>
      <Link
        to={`/shows/${id}`}
        onClick={() => {
          dispatch(showDetailActions.getShow(movie));
        }}
      >
        <HiEye />
      </Link>
      <button className="btn" onClick={onClick}>
        {icon}
      </button>
    </div>
  );
}

export default MovieControl;
