import React, { useContext } from "react";
import { SignupContext } from "../../../context/SignupContext/SignupContext";
function ProgressBar() {
  const { progress } = useContext(SignupContext);
  return (
    <div className="signup-progress-bar">
      <div className="signup-progress-bar-container">
        <div className={`signup-progress-bar-circle ${progress.firstElement}`}>
          1
        </div>
      </div>
      <div
        className={`signup-progress-bar-line ${progress.secondElement}`}
      ></div>
      <div
        className={`signup-progress-bar-line ${progress.thirdElement}`}
      ></div>
      <div className="signup-progress-bar-container">
        <div className={`signup-progress-bar-circle ${progress.fourthElement}`}>
          2
        </div>
      </div>
      <div
        className={`signup-progress-bar-line ${progress.fifthElement}`}
      ></div>
      <div
        className={`signup-progress-bar-line ${progress.sixthElement}`}
      ></div>
      <div className="signup-progress-bar-container">
        <div
          className={`signup-progress-bar-circle ${progress.seventhElement}`}
        >
          3
        </div>
      </div>
      <div
        className={`signup-progress-bar-line ${progress.eigthElement}`}
      ></div>
      <div
        className={`signup-progress-bar-line ${progress.ninthElement}`}
      ></div>
      <div className="signup-progress-bar-container">
        <div className={`signup-progress-bar-circle ${progress.tenthElement}`}>
          4
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
