import React, { useState } from "react";
import Item from "./Item/Item";
import classes from "./QuesList.module.css";

const questions = [
  {
    id: "q1",
    question: "What is Netflix?",
    answer1:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    answer2:
      "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    id: "q2",
    question: "How much does Netflix cost?",
    answer1:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP120 to EGP200 a month. No extra costs, no contracts.",
  },
  {
    id: "q3",
    question: "Where can I watch?",
    answer1:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    answer2:
      "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    id: "q4",
    question: "How can I cancel?",
    answer1:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: "q5",
    question: "What can I watch on Netflix?",
    answer1:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: "q6",
    question: "Is Netflix good for Kids?",
    answer1:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
    answer2:
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

function Question({ ques }) {


  return (
    <ul className={classes.list}>
      {questions.map((ques) => (
        <Item key={ques.id}  ques={{...ques}} />
      ))}
    </ul>
  );
}

export default Question;
