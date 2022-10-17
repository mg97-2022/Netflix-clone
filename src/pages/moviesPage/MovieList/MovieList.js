import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import classes from "./MovieList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { myListActions } from "../../../store/myList";
import { showDetailActions } from "../../../store/showDetail";
import useHttp from "../../../hooks/use-http";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";
const showsBaseUrl = "https://api.themoviedb.org/3";

function MovieList({ title, url }) {
  const [shows, setShows] = useState([]);
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();

  const responseHandler = (data) => {
    const showsList = data.results;
    setShows(showsList);
  };

  useEffect(() => {
    sendRequest(
      {
        url: `${showsBaseUrl}${url}`,
      },
      responseHandler
    );
  }, [sendRequest, url]);

  const addMovieToListHandler = (movie) => {
    dispatch(myListActions.addToList(movie));
  };

  return (
    <section className={classes.section}>
      <h2>{title}</h2>
      <div id="shows_list" className={classes.list}>
        {shows.map((movie) => {
          const { poster_path, id } = movie;
          return (
            poster_path && (
              <div key={id} className={classes.item}>
                <div className={classes.item_control}>
                  <Link
                    to={`${id}`}
                    onClick={() => {
                      dispatch(showDetailActions.getShow(movie));
                    }}
                  >
                    preview
                  </Link>
                  <button
                    className="btn"
                    onClick={addMovieToListHandler.bind(null, { ...movie })}
                  >
                    <HiPlus />
                  </button>
                </div>
                <img src={`${imageBaseUrl}${poster_path}`} alt={title} />
              </div>
            )
          );
        })}
      </div>
    </section>
  );
}

export default MovieList;

// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// {windowWidth > 768 && (
//   <div>
//     <button onClick={rightHandler(1)} className={classes.right}>
//       <IoIosArrowBack />
//     </button>
//     <button onClick={leftHandler(-1)} className={classes.left}>
//       <IoIosArrowForward />
//     </button>
//   </div>
// )}

// // slider buttons part
// // start window change part
// const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// useEffect(() => {
//   window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
// }, [windowWidth]);
// // end window change part

// // scroll part
// const showsContainer = document.querySelector('#shows_list')

// console.log(showsContainer)

// const rightHandler = () => {

// };

// const leftHandler = () => {};
