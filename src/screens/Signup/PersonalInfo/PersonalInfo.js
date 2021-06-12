import React, { useContext } from "react";
import { SignupContext } from "../../../context/SignupContext/SignupContext.js";
import ProgressBar from "../ProgressBar/ProgressBar.js";

function PersonalInfo() {
  const { progress, moveToAdditionalInfo } = useContext(SignupContext);
  return (
    <div className="signup">
      <div className="signup-box">
        <div className="signup-logo">
          <p>Keep notes</p>
        </div>
        <ProgressBar arrayType={progress} />
        <div className="signup-heading">
          <h2 className="signup-heading-title">
            Welcome! First things first...
          </h2>
          <p className="text text__center">
            Kindly input your personal details
          </p>
        </div>
        <form className="signup-form">
          <div className="signup-form-input-container">
            <label for="name">Full Name</label>
            <input type="text" placeholder="Full name"></input>
          </div>
          <div className="signup-form-input-container">
            <label for="username">Display Name</label>
            <input type="text" placeholder="Display name"></input>
          </div>
          <button
            type="submit"
            className="form-button"
            onClick={moveToAdditionalInfo()}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfo;
