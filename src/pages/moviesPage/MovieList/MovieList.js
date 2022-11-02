import React, { useEffect, useState } from "react";
import classes from "./MovieList.module.css";
import useHttp from "../../../hooks/use-http";
import MovieItem from "./MovieItem/MovieItem";

const showsBaseUrl = "https://api.themoviedb.org/3";

function MovieList({ title, url }) {
  const [shows, setShows] = useState([]);
  const { sendRequest } = useHttp();
  const responseHandler = (data) => {
    const showsList = data.results;
    setShows(showsList);
  };

  //fetch movies data
  useEffect(() => {
    sendRequest(
      {
        url: `${showsBaseUrl}${url}`,
      },
      responseHandler
    );
  }, [sendRequest, url]);


  return (
    <section className={classes.section}>
      <h2>{title}</h2>
      <div id="shows_list" className={classes.list}>
        {shows.map((movie) => {
          const { poster_path, id } = movie;
          return (
            poster_path && ( 
              <MovieItem key={id} movie={movie} />
            )
          );
        })}
      </div>
    </section>
  );
}

export default MovieList;
