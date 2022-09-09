import React, { useState } from "react";
import { useRef } from "react";
import QuestionJson from "../Files/Questions.json";
import Question from "./Question";

export default function QuickQuiz() {
  const [questionNo, setQuestionNo] = useState(0);
  const responses= useRef({});
  const nextQuestion = () => {
    setQuestionNo((pre) => pre + 1);
  };
  // useEffect(() => {
  // }, [])
  
  const localStore = (response) => {
    responses.current[questionNo]= response;
    localStorage.setItem('AnswerResponse1', JSON.stringify(responses.current))
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
