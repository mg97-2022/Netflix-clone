import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import BigFooter from "../../components/layout/BigFooter/BigFooter";
import MoviesNav from "../moviesPage/MoviesNav/MoviesNav";
import { Link } from "react-router-dom";
import { HiMinus } from "react-icons/hi";
import { myListActions } from "../../store/myList";
import { showDetailActions } from "../../store/showDetail";
import useHttp from "../../hooks/use-http";
import classes from "./MyList.module.css";
import LoadingSpinner from "../../components/ui/Modal/LoadingSpinner/LoadingSpinner";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function MyList() {
  // const myListMovies = useSelector((state) => state.myList.myList);
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
    }, 1000);
    return ()=>{
      clearTimeout(timer)
    }
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
        {/* <LoadingSpinner color="red" width="80px" height="80px" /> */}
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
                <img src={`${baseUrl}${item.poster_path}`} alt="" />
                <div className={classes.item_control}>
                  <Link
                    to={`/shows/${item.id}`}
                    onClick={() => {
                      dispatch(showDetailActions.getShow({ ...item }));
                    }}
                  >
                    preview
                  </Link>
                  <button
                    className="btn"
                    onClick={() =>
                      dispatch(myListActions.removeFromList(item.id))
                    }
                  >
                    <HiMinus className={classes.icon} />
                  </button>
                </div>
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
