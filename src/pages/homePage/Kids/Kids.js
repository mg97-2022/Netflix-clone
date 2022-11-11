import React from "react";
import classes from "./Kids.module.css";

function Kids() {
  return (
    <div className={classes.kids}>
      <div className={`container ${classes.content}`}>
        <div className={classes.image}>
          <img
            src="https://occ-0-4609-56.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
            alt=""
          />
        </div>
        <div className={`${classes.text}  ${classes.up}`}>
          <h2>Create profiles for kids.</h2>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kids;
