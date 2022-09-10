import React, { useState, useEffect } from "react";
import { useRef } from "react";
import QuestionJson from "../Files/Questions.json";
import Question from "./Question";
import importj from "./JsonImporter";



export default function QuickQuiz() {
  const [questionNo, setQuestionNo] = useState(0);
  const responses= useRef({});

  const nextQuestion = () => {
    if(questionNo>QuestionJson.length){
    setQuestionNo((pre) => pre + 1);
    }else{
      alert('the end of Quiz')
    }
  };
  useEffect(() => {
    if(localStorage.AnswerResponse){
    let object= JSON.parse(localStorage.AnswerResponse);
    let questions=Object.keys(object).sort();
    let no= Object.keys(object).sort()[questions.length-1]
    responses.current={...object};
    setQuestionNo(parseInt(no));
    }
  }, [])
  
  const localStore = (response) => {
    responses.current[questionNo]= response;
    localStorage.setItem('AnswerResponse', JSON.stringify(responses.current))
  };

  const rough= ()=>{
    let a= importj();
    setTimeout(() => {
      console.log(a);
    }, 1000);

  }

  return (
    <div>
      <Question
        key={questionNo}
        question={QuestionJson[questionNo]}
        handleQuestionChange={nextQuestion}
        localStore={localStore}
      />
      <div className="absolute bottom-6 bg-red-600 hover:bg-red-400 cursor-pointer p-3 right-1/2 tra" onClick={rough}>Acess json</div>
    </div>
  );
}
