import React, { useState } from "react";
import Banner from "./Banner/Banner";
import MovieList from "./MovieList/MovieList";
import requests from "../../general/fetchData/requests";
import classes from "./MoviesPage.module.css";
import BigFooter from "../../components/layout/BigFooter/BigFooter";
import WelcomeModal from "./WelcomeModal/WelcomeModal";
import LoadingSpinner from "../../components/ui/LoadingSpinner/LoadingSpinner";
import MoviesNav from "./MoviesNav/MoviesNav";
import { useCallback } from "react";

function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [reqError, setReqError] = useState(false);

  const LoadingHandler = useCallback((isLoading, requestError) => {
    setReqError(requestError);
    setLoading(isLoading);
  }, []);

  if (!loading && !!reqError) {
    return (
      <div className={classes.error}>
        <p>Something went wrong!</p>
        <p>Try again</p>
      </div>
    );
  }
  if (loading && !!reqError) {
    return (
      <div className={classes.loading}>
        <p>Loading...</p>
        <LoadingSpinner color="red" width="80px" height="80px" />
      </div>
    );
  }

  return (
    <main className={classes.main}>
      <WelcomeModal />
      <MoviesNav />
      <Banner onLoadingHandler={LoadingHandler} />
      <MovieList title="trending now" url={requests.NetflixOriginals} />
      <MovieList title="top rated" url={requests.topRatedMovies} />
      {/* <MovieList title='upcoming movies' url={requests.upcomingMovies} /> */}
      <MovieList title="action movies" url={requests.actionMovies} />
      {/* <MovieList title="horror movies" url={requests.horrorMovies} /> */}
      <MovieList title="comedy movies" url={requests.comedyMovies} />
      <MovieList title="top rated TV" url={requests.topRatedTv} />
      <MovieList title="popular TV" url={requests.popularTv} />
      <BigFooter borderTop="var(--section-border)" />
    </main>
  );
}

export default MoviesPage;
