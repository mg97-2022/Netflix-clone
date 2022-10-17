import React, { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import classes from "./Item.module.css";

function Item({ ques }) {
  const [showAns, setShowAns] = useState(false);

  const showAnsHandler = () => {
    setShowAns((prev) => !prev);
  };

  const { id, question, answer1, answer2 } = ques;
  return (
    <li key={id} className={classes.item}>
      <div className={classes.question}>
        <p>{question}</p>
        <button onClick={showAnsHandler}>
          <AiOutlinePlus className={showAns ? classes.spin : ""} />
        </button>
      </div>
      {showAns && (
        <div className={classes.answer}>
          <p>{answer1}</p>
          {answer2 && <p className={classes.ans2}>{answer2}</p>}
        </div>
      )}
    </li>
  );
}

export default Item;
