import React, { useEffect, useState } from "react";
import requests from "../../../general/fetchData/requests";

import { MdPlayArrow } from "react-icons/md";
import { HiPlus } from "react-icons/hi";

import classes from "./Banner.module.css";
import { useDispatch } from "react-redux";
import { myListActions } from "../../../store/myList";
import useHttp from "../../../hooks/use-http";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";
const showsBaseUrl = "https://api.themoviedb.org/3";

function textFit(string, n) {
  return string?.length > n ? string.substr(0, n) + "..." : string;
}

function Banner(props) {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const { error: requestError, sendRequest, isLoading } = useHttp();

  const responseHandler = (data) => {
    const bannerShows = data.results;
    setMovies(bannerShows);
  };

  // start fetching data part
  useEffect(() => {
    sendRequest(
      {
        url: `${showsBaseUrl}${requests.actionMovies}`,
      },
      responseHandler
    );

    // const fetchData = async () => {
    //   const response = await axios(requests.actionMovies);
    //   const data = await response.data.results;
    //   setMovies(data);
    //   return data;
    // };
    // fetchData();
  }, [sendRequest]);
  // end fetching data part

  // start slider part
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      let newIndex = index + 1;
      if (index >= movies.length - 1) {
        setIndex(0);
        return;
      } else {
        setIndex(newIndex);
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [index, movies]);
  // end slider part

  // loading page part
  useEffect(() => {
    props.onLoadingHandler(isLoading, requestError);
  }, [isLoading, props, requestError]);

  return (
    <section className={classes.section}>
      {movies.map((movie, movieIndex) => {
        const {
          backdrop_path,
          title,
          vote_average,
          overview,
          release_date,
          id,
          poster_path,
        } = movie;
        const date = release_date.slice(0, 4);
        return (
          <div
            key={movieIndex}
            className={`${classes.banner} ${
              movieIndex === index ? classes.opacity : ""
            }`}
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
                  onClick={() => {
                    dispatch(
                      myListActions.addToList({
                        backdrop_path,
                        title,
                        vote_average,
                        overview,
                        release_date,
                        id,
                        poster_path,
                      })
                    );
                  }}
                >
                  <HiPlus className={classes.icon} /> my list
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className={classes.overlay}></div>
      <div className={classes.overlay_bot}></div>
    </section>
  );
}

export default Banner;

// slider buttons part

// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";

/* {windowWidth > 992 && (
  <div>
    <button onClick={rightHandler} className={classes.right}>
      <IoIosArrowBack />
    </button>
    <button onClick={leftHandler} className={classes.left}>
      <IoIosArrowForward />
    </button>
  </div>
)} */

// const rightHandler = () => {
//   if (index >= movies.length - 1) {
//     setIndex(0);
//     return;
//   }
//   setIndex((prev) => prev + 1);
// };

// const leftHandler = () => {
//   if (index <= 0) {
//     setIndex(movies.length - 1);
//     return;
//   }
//   setIndex((prev) => prev - 1);
// };

// start window change part
// const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// useEffect(() => {
//   window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
// }, [windowWidth]);
// end window change part
