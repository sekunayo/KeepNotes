import React, { useContext } from "react";
import ProgressBar from "../ProgressBar/ProgressBar.js";
import { SignupContext } from "../../../context/SignupContext/SignupContext";
import { Link } from "react-router-dom";

function FinalSetup() {
  const { progress, submitFinalInfo } = useContext(SignupContext);
  console.log(progress.step);
  return (
    <div className="signup">
      <div className="signup-box">
        <div className="signup-logo">
          <p>Keep notes</p>
        </div>
        <ProgressBar arrayType={progress.classes} />
        <div className="signup-icon">
          <div className="signup-icon-box">
            <i class="fas fa-check"></i>
          </div>
        </div>
        <div className="signup-heading final-setup-margin">
          <h2 className="signup-heading-title">Congratulations!</h2>
          <p className="text text__center">
            You hae completed onboarding,you can start using KeepNotes!
          </p>
        </div>
        <form className="signup-form" onSubmit={submitFinalInfo}>
          <button type="submit" className="form-button">
            Launch KeepNotes
          </button>
        </form>
      </div>
    </div>
  );
}

export default FinalSetup;
