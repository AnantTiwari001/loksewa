import React from "react";

export default function Alert({ right }) {
  alert('inside the alert thing');
  return (
    <div className="absolute top-2 w-7">
      {right ? (<>
        <h3>Yes that is right</h3>
        <img src="../Files/samplephoto.png" alt="for the right answer" />
        </>
      ) : (<>
        <h3>That is wrong</h3>
        <img src="../Files/samplephoto.png" alt="for the wrong answer" />
        </>
      )}
    </div>
  );
}
