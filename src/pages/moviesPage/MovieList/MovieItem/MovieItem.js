import React, { useState } from "react";
import MovieControl from "../../MovieControl/MovieControl";
import { HiPlus } from "react-icons/hi";
import { useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import classes from "./MovieItem.module.css";
import { useEffect } from "react";
import useUpdateMovies from "../../../../hooks/use-updateMovie";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function MovieItem({ movie }) {
  const { poster_path, title, id } = movie;
  const [movieInList, setMovieInList] = useState(false);
  const myList = useSelector((state) => state.myList.myList);
  const {updateMovies} = useUpdateMovies()

  const addMovieToListHandler = async (movie) => {
    const itemExist = myList.filter(item=>item.id === movie.id) 
    if (itemExist.length > 0) {
      return
    }
    updateMovies(movie, 'POST')
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
        onClick={addMovieToListHandler.bind(null, movie)}
        movie={movie}
        icon={movieInList ? <AiFillHeart /> : <HiPlus />}
      />
      <img loading="lazy" src={`${imageBaseUrl}${poster_path}`} alt={title} />
    </div>
  );
}

export default MovieItem;
