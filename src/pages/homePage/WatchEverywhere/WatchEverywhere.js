import React from "react";
import classes from "./WatchEverywhere.module.css";

function WatchEverywhere() {
  return (
    <div className={classes.everywhere}>
      <div className={`container ${classes.content}`}>
        <div className={classes.text}>
          <h2>Watch everywhere.</h2>
          <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
          </p>
        </div>
        <div className={classes.video}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            alt=""
          />
          <video playsInline muted autoPlay loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default WatchEverywhere;
