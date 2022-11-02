import React, { useState } from "react";
import classes from "./ShowItem.module.css";
import ItemDetails from "./ItemDetails/ItemDetails";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function ShowItem({ showDetails }) {
  const [itemDetailsVisible, setItemDetailsVisible] = useState(false);

  const { backdrop_path, title } = showDetails;

  return (
    <div
      onMouseOver={() => setItemDetailsVisible(true)}
      onMouseLeave={() => setItemDetailsVisible(false)}
      className={classes.item}
    >
      <ItemDetails
        showDetails={showDetails}
        itemDetailsVisible={itemDetailsVisible}
      />
      <img loading="lazy" src={`${imageBaseUrl}${backdrop_path}`} alt={title} />
    </div>
  );
}

export default ShowItem;
