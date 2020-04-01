import React from "react";

export default function Score(props) {
  return (
    <div>
      <h4>Date: {props.date}</h4>
      <h4>Score: {props.score}</h4>
    </div>
  );
}
