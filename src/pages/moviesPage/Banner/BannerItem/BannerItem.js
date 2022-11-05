import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdPlayArrow } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import classes from "./BannerItem.module.css";
import { useEffect } from "react";
import useUpdateMovies from "../../../../hooks/use-updateMovie";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function textFit(string, n) {
  return string?.length > n ? string.substr(0, n) + "..." : string;
}

function BannerItem({ movie, opacity }) {
  const { backdrop_path, title, vote_average, overview, date, id } = movie;
  const [movieInList, setMovieInList] = useState(false);
  const myList = useSelector((state) => state.myList.myList);
  const { updateMovies } = useUpdateMovies();

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
    <div
      className={`${classes.banner} ${opacity ? classes.opacity : ""}`}
      style={{
        backgroundImage: `url(${imageBaseUrl}${backdrop_path})`,
      }}
    >
      <div className={classes.banner_content}>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.info}>
          <span>{`IMDB ${vote_average}`}</span>
          <span>{date}</span>
        </div>
        <p className={classes.overview}>{textFit(`${overview}`, 150)}</p>
        <div className={classes.btns}>
          <button className={classes.banner_btn}>
            <MdPlayArrow className={classes.icon} /> play
          </button>
          <button
            className={classes.banner_btn}
            onClick={addMovieToListHandler.bind(null, movie)}
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
  );
}

export default BannerItem;
