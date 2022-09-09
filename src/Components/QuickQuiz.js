import React, { useEffect, useState } from 'react'
import QuestionJson from '../Files/Questions.json'
import Question from './Question';

export default function QuickQuiz() {
    const [questionNo, setQuestionNo]= useState(0);
    const nextQuestion=()=>{
      setQuestionNo((pre)=>pre+1)
      console.log('next question!')
    }

    
  return (
    <div>
        <Question key={questionNo} question={QuestionJson[questionNo]} handleQuestionChange={nextQuestion} />
    </div>
  )
}
