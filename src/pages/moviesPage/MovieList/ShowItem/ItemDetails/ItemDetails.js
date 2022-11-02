import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiEye } from "react-icons/hi";
import { myListActions } from "../../../../../store/myList";
import { HiPlus } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import { showDetailActions } from "../../../../../store/showDetail";
import classes from "./ItemDetails.module.css";
import { useEffect } from "react";
import { useState } from "react";

function ItemDetails({ showDetails, itemDetailsVisible }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [itemInList, setItemInList] = useState(false);

  const { id, name, title } = showDetails;
  const listShow = useSelector((state) => state.myList.myList);

  const movieToListHandler = (movie) => {
    const itemExistInList = listShow.findIndex((item) => {
      return item.id === movie.id
    });
    if (itemExistInList > 0) {
      console.log(movie)
      dispatch(myListActions.removeFromList(movie.id));
    } else {
      console.log(movie)
      dispatch(myListActions.addToList(movie));
    }
  };

  const previewMovieHandler = () => {
    dispatch(showDetailActions.getShow(showDetails));
    navigate(`${id}`);
  };

  useEffect(() => {
    const itemExistInList = listShow.findIndex((item) => item.id === id);
    if (itemExistInList >= 0) {
      setItemInList(true);
    } else {
      setItemInList(false);
    }
  }, [listShow, id]);

  return (
    <div
      className={classes.details}
      style={{
        bottom: itemDetailsVisible ? "0px" : "-100%",
      }}
    >
      <div className={classes.content}>
        <div className={classes.btns}>
          <button onClick={previewMovieHandler}>
            <HiEye />
          </button>
          <button
            onClick={movieToListHandler.bind(null, { ...showDetails })}
          >
            {itemInList ? (
              <AiFillHeart className={classes.heart} />
            ) : (
              <HiPlus />
            )}
          </button>
        </div>
        <p>{name || title}</p>
      </div>
    </div>
  );
}

export default ItemDetails;
