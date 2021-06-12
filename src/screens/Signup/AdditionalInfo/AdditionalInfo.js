import React, { useContext } from "react";
import { SignupContext } from "../../../context/SignupContext/SignupContext";
import ProgressBar from "../ProgressBar/ProgressBar";
function AdditionalInfo() {
  const { progress, moveToFinal } = useContext(SignupContext);
  return (
    <div className="signup">
      <div className="signup-box">
        <div className="signup-logo">
          <p>Keep notes</p>
        </div>
        <ProgressBar arrayType={progress} />
        <div className="signup-heading">
          <h2 className="signup-heading-title">Additional Information</h2>
          <p className="text text__center">
            Let know a little about where you come...
          </p>
        </div>
        <form className="signup-form">
          <div className="signup-form-input-container">
            <label for="email">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="signup-form-input-container">
            <label for="address">House Address</label>
            <input
              type="text"
              name="address"
              placeholder="street number, street address, city, state,country."
            ></input>
          </div>
          <button className="form-button" onClick={moveToFinal()}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdditionalInfo;
