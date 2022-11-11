import React, { Fragment, useEffect, useState } from "react";
import MoviesNav from "../moviesPage/MoviesNav/MoviesNav";
import BigFooter from "../../components/layout/BigFooter/BigFooter";
import { MdPlayArrow } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import classes from "./MovieDetail.module.css";
import { useSelector } from "react-redux";
import useUpdateMovies from "../../hooks/use-updateMovie";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function MovieDetail() {
  const showDetails = useSelector((state) => state.showDetail.showDetail);
  const {
    id,
    backdrop_path,
    name,
    title,
    vote_average,
    overview,
    first_air_date,
    release_date,
  } = showDetails;

  const [movieInList, setMovieInList] = useState(false);

  const { updateMovies } = useUpdateMovies();
  const myList = useSelector((state) => state.myList.myList);

  const addMovieToListHandler = async (movie) => {
    const itemExist = myList.filter(item=>item.id === movie.id)
    if (itemExist.length > 0) {
      return
    }
    updateMovies(movie, 'POST');
  };


  useEffect(() => {
    const itemExist = myList.find((item) => item.id === id);
    if (itemExist) {
      setMovieInList(true);
    } else {
      setMovieInList(false);
    }
  }, [myList, id]);

  return (
    <Fragment>
      <MoviesNav backgroundColor="black" />
      <div className={classes.middle}>
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
                className={classes.banner_btn}
                onClick={addMovieToListHandler.bind(null,showDetails)}
              >
                {movieInList ? (
                  <AiFillHeart className={classes.icon} />
                ) : (
                  <HiPlus className={classes.icon} />
                )}{" "}
                myList
              </button>
            </div>
          </div>
        </div>
      </div>
      <BigFooter />
    </Fragment>
  );
}

export default MovieDetail;
