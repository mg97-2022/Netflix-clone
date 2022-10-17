import React from "react";
import {HiDownload} from 'react-icons/hi'
import classes from "./Download.module.css";

function Download() {
  return (
    <section className={classes.download}>
      <div className={`container ${classes.content}`}>
        <div className={classes.image}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
          <div className={classes["img-overlay"]}>
            <div className={classes.left}>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
              <div className={classes["overlay-text"]}>
                <p>stranger things</p>
                <p>downloading...</p>
              </div>
            </div>
            <div className={classes.right}><HiDownload /></div>
          </div>
        </div>
        <div className={`${classes.text} ${classes.up}`}>
          <h2>Download your shows to watch offline.</h2>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>
    </section>
  );
}

export default Download;
