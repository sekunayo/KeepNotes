import React, { useContext, useEffect, useState } from "react";
import { SignupContext } from "../../context/SignupContext/SignupContext";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import CreatePassword from "./CreatePassword/CreatePassword";
import FinalSetup from "./FinalSetup/FinalSetup";

function Signup() {
  const { progress } = useContext(SignupContext);
  return (
    <>
      {progress.step === 1 && <PersonalInfo />}
      {progress.step === 2 && <AdditionalInfo />}
      {progress.step === 3 && <CreatePassword />}
      {progress.step === 4 && <FinalSetup />}
    </>
  );
}

export default Signup;
