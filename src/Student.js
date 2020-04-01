import React from "react";
import Score from "./Score";

export default function Student(props) {
  return (
    <div className="student">
      <h1>Name: {props.name}</h1>
      <h3>Bio: {props.bio}</h3>
      {props.scores.map((score, idx) => (
        <Score key={idx} date={score.date} score={score.score} />
      ))}
    </div>
  );
}
