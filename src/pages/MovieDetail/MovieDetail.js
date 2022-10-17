import React from "react";
import MoviesNav from "../moviesPage/MoviesNav/MoviesNav";
import BigFooter from "../../components/layout/BigFooter/BigFooter";
import { MdPlayArrow } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import classes from "./MovieDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { myListActions } from "../../store/myList";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function MovieDetail() {
  const dispatch = useDispatch();
  const {
    id,
    backdrop_path,
    name,
    title,
    vote_average,
    overview,
    first_air_date,
    release_date,
    poster_path
  } = useSelector((state) => state.showDetail.showDetail);
  return (
    <main className={classes.main}>
      <MoviesNav backgroundColor="black" />
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${baseUrl}${backdrop_path})`,
        }}
      >
        <div className={classes.overlay}></div>
        <div className={classes.content}>
          <h1 className={classes.title}>{title || name}</h1>
          <div className={classes.info}>
            <span>{`IMDB ${vote_average}`}</span>
            <span>{release_date || first_air_date}</span>
          </div>
          <p className={classes.overview}>{overview}</p>
          <div className={classes.btns}>
            <button>
              <MdPlayArrow className={classes.icon} /> play
            </button>
            <button
              onClick={() => {
                dispatch(myListActions.addToList({
                  backdrop_path,
                  id,
                  name,
                  title,
                  vote_average,
                  overview,
                  first_air_date,
                  release_date,
                  poster_path
                }));
              }}
            >
              <HiPlus className={classes.icon} /> my list
            </button>
          </div>
        </div>
      </div>
      <BigFooter />
    </main>
  );
}

export default MovieDetail;
