import React, { useState } from "react";
import MovieControl from "../../MovieControl/MovieControl";
import { HiPlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { myListActions } from "../../../../store/myList";
import classes from "./MovieItem.module.css";
import { useEffect } from "react";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function MovieItem({ movie }) {
  const [movieInList, setMovieInList] = useState(false);
  const dispatch = useDispatch();
  const myList = useSelector((state) => state.myList.myList);
  const { poster_path, title, id } = movie;

  const addMovieToListHandler = (movie) => {
    dispatch(myListActions.addToList(movie));
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
    <div className={classes.item}>
      <MovieControl
        className={classes.item_control}
        onClick={addMovieToListHandler}
        movie={movie}
        icon={movieInList ? <AiFillHeart /> : <HiPlus />}
      />
      <img loading="lazy" src={`${imageBaseUrl}${poster_path}`} alt={title} />
    </div>
  );
}

export default MovieItem;
