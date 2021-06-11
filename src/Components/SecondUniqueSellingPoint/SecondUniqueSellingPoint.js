import React from "react";
import image from "../../images/image.png";
function SecondUniqueSellingPoint() {
  return (
    <div className="second-usp">
      <div className="second-usp-textbox">
        <h2 className="second-usp-textbox-heading">
          Set reminders for your important tasks
        </h2>
        <p className="text">
          Nullam arcu felis, porta vel ligula non, ullamcorper porta risus.
          Suspendisse et neque sit amet enim
        </p>
      </div>
      <div className="second-usp-image">
        <img src={image} alt="second__usp"></img>
      </div>
    </div>
  );
}

export default SecondUniqueSellingPoint;
