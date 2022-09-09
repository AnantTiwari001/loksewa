import React, { useState, useEffect } from "react";
import { useRef } from "react";
import QuestionJson from "../Files/Questions.json";
import Question from "./Question";

//continuity push Aim : start quiz where u start from the response of localstorage:
//Todo: onStarting questionNo to be set to the next no available from localStorage 
//      either change response to local storage seting (individually) or !! set response ref to localStorage currnet value

export default function QuickQuiz() {
  const [questionNo, setQuestionNo] = useState(0);
  const responses= useRef({});
  const nextQuestion = () => {
    setQuestionNo((pre) => pre + 1);
  };
  useEffect(() => {
    if(localStorage.AnswerResponse){
    let object= JSON.parse(localStorage.AnswerResponse);
    let questions=Object.keys(object).sort();
    let no= Object.keys(object).sort()[questions.length-1]
    // continuiting from where left
    responses.current={...object};
    setQuestionNo(parseInt(no));
    }
  }, [])
  
  const localStore = (response) => {
    responses.current[questionNo]= response;
    localStorage.setItem('AnswerResponse', JSON.stringify(responses.current))
  };

  return (
    <div>
      <Question
        key={questionNo}
        question={QuestionJson[questionNo]}
        handleQuestionChange={nextQuestion}
        localStore={localStore}
      />
    </div>
  );
}
