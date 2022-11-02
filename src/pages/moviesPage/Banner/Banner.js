import React, { useEffect, useState } from "react";
import requests from "../../../general/fetchData/requests";
import classes from "./Banner.module.css";
import useHttp from "../../../hooks/use-http";
import BannerItem from "./BannerItem/BannerItem";

const showsBaseUrl = "https://api.themoviedb.org/3";

function Banner({ onLoadingHandler }) {
  const [movies, setMovies] = useState([]);
  const { error: requestError, sendRequest, isLoading } = useHttp();

  // fetching data part
  const responseHandler = (data) => {
    const bannerShows = data.results;
    setMovies(bannerShows);
  };

  useEffect(() => {
    sendRequest(
      {
        url: `${showsBaseUrl}${requests.actionMovies}`,
      },
      responseHandler
    );
  }, [sendRequest]);

  // slider part
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

  // loading page part
  useEffect(() => {
    onLoadingHandler(isLoading, requestError);
  }, [isLoading, onLoadingHandler, requestError]);

  return (
    <section className={classes.section}>
      {movies.map((movie, movieIndex) => {
        const { release_date, id } = movie;
        const date = release_date.slice(0, 4);

        return (
          <BannerItem
            key={id}
            movie={{...movie, date}}
            opacity={movieIndex === index}
          />
        );
      })}
      <div className={classes.overlay}></div>
      <div className={classes.overlay_bot}></div>
    </section>
  );
}

export default Banner;
