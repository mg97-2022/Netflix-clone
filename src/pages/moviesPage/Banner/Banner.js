import React, { useEffect, useState } from "react";
import requests from "../../../general/fetchData/requests";
import classes from "./Banner.module.css";
import useHttp from "../../../hooks/use-http";
import BannerItem from "./BannerItem/BannerItem";

const showsBaseUrl = "https://api.themoviedb.org/3";

function Banner({ onLoadingHandler }) {
  const [shows, setShows] = useState([]);
  const { error: requestError, sendRequest, isLoading } = useHttp();

  useEffect(() => {
    const fetchShows = async () => {
      const data = await sendRequest({
        url: `${showsBaseUrl}${requests.actionMovies}`,
      });
      setShows(data.results);
    };
    fetchShows();
  }, [sendRequest]);

  // slider part
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      let newIndex = index + 1;
      if (index >= shows.length - 1) {
        setIndex(0);
        return;
      } else {
        setIndex(newIndex);
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [index, shows]);

  // loading page part
  useEffect(() => {
    onLoadingHandler(isLoading, requestError);
  }, [isLoading, onLoadingHandler, requestError]);

  return (
    <section className={classes.section}>
      {shows.map((show, movieIndex) => {
        const { release_date, id } = show;
        const date = release_date.slice(0, 4);

        return (
          <BannerItem
            key={id}
            movie={{ ...show, date }}
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
