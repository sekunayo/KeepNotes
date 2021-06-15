import React, { useContext } from "react";
import { SignupContext } from "../../../context/SignupContext/SignupContext";
function ProgressBar() {
  const { progress } = useContext(SignupContext);
  const {
    firstElement,
    secondElement,
    thirdElement,
    fourthElement,
    fifthElement,
    sixthElement,
    seventhElement,
    eigthElement,
    ninthElement,
    tenthElement,
  } = progress.classes;
  return (
    <div className="signup-progress-bar">
      <div className="signup-progress-bar-container">
        <div className={`signup-progress-bar-circle ${firstElement}`}>1</div>
      </div>
      <div className={`signup-progress-bar-line ${secondElement}`}></div>
      <div className={`signup-progress-bar-line ${thirdElement}`}></div>
      <div className="signup-progress-bar-container">
        <div className={`signup-progress-bar-circle ${fourthElement}`}>2</div>
      </div>
      <div className={`signup-progress-bar-line ${fifthElement}`}></div>
      <div className={`signup-progress-bar-line ${sixthElement}`}></div>
      <div className="signup-progress-bar-container">
        <div className={`signup-progress-bar-circle ${seventhElement}`}>3</div>
      </div>
      <div className={`signup-progress-bar-line ${eigthElement}`}></div>
      <div className={`signup-progress-bar-line ${ninthElement}`}></div>
      <div className="signup-progress-bar-container">
        <div className={`signup-progress-bar-circle ${tenthElement}`}>4</div>
      </div>
    </div>
  );
}

export default ProgressBar;
