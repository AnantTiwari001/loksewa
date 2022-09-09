import React from "react";
import { useState } from "react";

export default function Question({ question, handleQuestionChange }) {
  const defaultOptionColor = "bg-blue-600";
  const wrongOptionColor = "bg-red-500";
  const rightOptionColor = "bg-green-500";
  const checkAnswer = (i) => {
    let color= [...colorState];
    if (i === question.correct) {
      color[i]=rightOptionColor;
      setColorState(color);
    } else {
      color[i]=wrongOptionColor;
      setColorState(color);
    }
    color[question.correct]=rightOptionColor;
    setNextBtn(true)
  };


  const [colorState, setColorState] = useState([
    defaultOptionColor,
    defaultOptionColor,
    defaultOptionColor,
    defaultOptionColor,
  ]);
  
  const [nextbtn, setNextBtn]= useState(false);

  return (
    <div>
      <h2>{question.question} </h2>
      <div className="mt-2">
        <span
          className={"p-3 cursor-pointer " + colorState[0]}
          onClick={() => checkAnswer(0)}
        >
          {question.options[0]}
        </span>
        <span
          className={"p-3 cursor-pointer " + colorState[1]}
          onClick={() => checkAnswer(1)}
        >
          {question.options[1]}
        </span>
        <span
          className={"p-3 cursor-pointer " + colorState[2]}
          onClick={() => checkAnswer(2)}
        >
          {question.options[2]}
        </span>
        <span
          className={"p-3 cursor-pointer " + colorState[3]}
          onClick={() => checkAnswer(3)}
        >
          {question.options[3]}
        </span>
      </div>
      {nextbtn && (<button className="absolute bottom-2 p-1 bg-blue-400" onClick={()=>handleQuestionChange()}>Next</button>)}
    </div>
  );
}
