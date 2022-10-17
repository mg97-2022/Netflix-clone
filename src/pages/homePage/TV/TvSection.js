import React from "react";

import classes from "./TvSection.module.css";

function TvSection() {
  return (
    <section className={classes.tv}>
      <div className={`container ${classes.content}`}>
        <div className={classes.text}>
          <h2>Enjoy on your TV.</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className={classes.video}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <video controls playsInline muted autoPlay loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}

export default TvSection;
