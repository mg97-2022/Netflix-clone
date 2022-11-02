import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BigFooter from "../../components/layout/BigFooter/BigFooter";
import MoviesNav from "../moviesPage/MoviesNav/MoviesNav";
import { Link } from "react-router-dom";
import { HiMinus } from "react-icons/hi";
import { myListActions } from "../../store/myList";
import useHttp from "../../hooks/use-http";
import classes from "./MyList.module.css";
import LoadingSpinner from "../../components/ui/LoadingSpinner/LoadingSpinner";
import MovieControl from "../moviesPage/MovieControl/MovieControl";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function MyList() {
  const userIdToken = useSelector((state) => state.signin.idToken);
  const { error: requestError, sendRequest, isLoading } = useHttp();
  const myList = useSelector((state) => state.myList.myList);
  const [shows, setShows] = useState([]);
  const dispatch = useDispatch();

  const responseHandler = (data) => {
    const showsList = [];
    for (const key in data) {
      showsList.push(data[key]);
    }
    setShows(showsList || []);
  };

  useEffect(() => {
    const modifiedUserToken = userIdToken;
    const timer = setTimeout(() => {
      sendRequest(
        {
          url: `https://netflix-mg97-default-rtdb.firebaseio.com/${modifiedUserToken}.json`,
        },
        responseHandler
      );
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [sendRequest, userIdToken, myList]);

  let content;
  if (isLoading) {
    content = (
      <div className={`${classes.content} ${classes.loading}`}>
        <h2>Loading...</h2>
        <LoadingSpinner color="red" width="80px" height="80px" />
      </div>
    );
  }

  if (!isLoading && requestError) {
    content = (
      <div className={`${classes.content} ${classes.error}`}>
        <h2>{requestError}</h2>
      </div>
    );
  }
  if (!isLoading && !requestError) {
    content = (
      <div className={classes.content}>
        <h2>my list</h2>
        {shows.length === 0 && (
          <div className={classes.no_shows}>
            <h4>no shows!!</h4>
            <p>let's add some</p>
            <Link to="/shows" className="btn">
              home
            </Link>
          </div>
        )}
        {shows.length !== 0 && (
          <ul className={classes.list}>
            {shows.map((item) => (
              <li key={item.id}>
                <img
                  loading="lazy"
                  src={`${baseUrl}${item.poster_path}`}
                  alt=""
                />
                <MovieControl
                  className={classes.item_control}
                  icon={<HiMinus />}
                  movie={item}
                  onClick={() =>
                    dispatch(myListActions.removeFromList(item.id))
                  }
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <main className={classes.main}>
      <MoviesNav backgroundColor="black" />
      {content}
      <BigFooter />
    </main>
  );
}

export default MyList;
