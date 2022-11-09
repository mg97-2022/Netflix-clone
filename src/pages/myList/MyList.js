import React, { useDispatch } from "react";
import { useSelector } from "react-redux";
import BigFooter from "../../components/layout/BigFooter/BigFooter";
import MoviesNav from "../moviesPage/MoviesNav/MoviesNav";
import { Link } from "react-router-dom";
import { HiMinus } from "react-icons/hi";
import classes from "./MyList.module.css";
import LoadingSpinner from "../../components/ui/LoadingSpinner/LoadingSpinner";
import MovieControl from "../moviesPage/MovieControl/MovieControl";
import useUpdateMovies from "../../hooks/use-updateMovie";
import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { myListActions } from "../../store/myList";
import { useState } from "react";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function MyList() {
  const myList = useSelector((state) => state.myList.myList);
  const { updateMovies, error: requestError, isLoading } = useUpdateMovies();
  const userIdToken = useSelector((state) => state.signin.idToken);
  // const dispatch = useDispatch();
  const { sendRequest } = useHttp();
  const [myFetchedList, setMyFetchedList] = useState([]);

  const removeShowFromListHandler = (id) => {
    const newList = myList.filter((item) => item.id !== id);
    updateMovies(newList, "PUT");
  };

  useEffect(() => {
    const fetchList = async () => {
      const data = await sendRequest({
        url: `https://netflix-mg97-default-rtdb.firebaseio.com/${userIdToken}.json`,
      });
      const fetchedShows = [];
      for (const key in data) {
        fetchedShows.push(data[key]);
      }
      // dispatch(myListActions.addToList(fetchedShows));
      setMyFetchedList(fetchedShows);
    };
    fetchList();
  }, [sendRequest, userIdToken]);

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
        {myFetchedList.length === 0 && (
          <div className={classes.no_shows}>
            <h4>no shows!!</h4>
            <p>let's add some</p>
            <Link to="/shows" className="btn">
              home
            </Link>
          </div>
        )}
        {myFetchedList.length !== 0 && (
          <ul className={classes.list}>
            {myFetchedList.map((item, index) => (
              <li key={index}>
                <img
                  loading="lazy"
                  src={`${baseUrl}${item.poster_path}`}
                  alt=""
                />
                <MovieControl
                  className={classes.item_control}
                  icon={<HiMinus />}
                  movie={item}
                  onClick={removeShowFromListHandler.bind(null, item.id)}
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
