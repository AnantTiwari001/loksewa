import React from "react";
import photo from "../Files/samplePhoto.png";

export default function Alert({ right, handleQuestionChange }) {
  let color = " hello";
  if (right) {
    color = "bg-green-500";
  } else {
    color = "bg-red-500";
  }

  return (
    <div
      id="alert"
      className={
        right
          ? "alert absolute top-0 h-10 w-full flex items-center justify-around bg-green-500"
          : "absolute top-0 h-10 w-full flex items-center justify-around bg-red-500"
      }
    >
      {right ? (
        <>
          <h3>Yes that is right</h3>
          <img className="h-5 " src={photo} alt="for the right answer" />
        </>
      ) : (
        <>
          <h3>That is wrong</h3>
          <img className="h-5 " src={photo} alt="for the wrong answer" />
        </>
      )}
      <button className="bg-blue-400 p-1" onClick={()=>handleQuestionChange() }>Next</button>
    </div>
  );
}
