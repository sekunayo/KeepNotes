import React from "react";
import image from "../../images/image.png";
function FirstUniqueSellingPoint() {
  return (
    <div className="first-usp">
      <div className="first-usp-image">
        <img src={image} alt="first__usp"></img>
      </div>
      <div className="first-usp-textbox">
        <h className="first-usp-textbox-heading">
          Keep track of your notes with custom made labels
        </h>
        <p className="text">
          Nullam arcu felis, porta vel ligula non, ullamcorper porta risus.
          Suspendisse et neque sit amet enim
        </p>
      </div>
    </div>
  );
}

export default FirstUniqueSellingPoint;
