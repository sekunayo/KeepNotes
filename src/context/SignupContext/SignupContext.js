import React, { createContext, useState } from "react";
import { useHistory } from "react-router";

export const SignupContext = createContext();
function SignupContextProvider(props) {
  const firstProgressArray = {
    firstElement: "complete",
    secondElement: "complete-line",
    thirdElement: "complete-line",
    fourthElement: "blank",
    fifthElement: "blank-line",
    sixthElement: "blank-line",
    seventhElement: "blank",
    eigthElement: "blank-line",
    ninthElement: "blank-line",
    tenthElement: "blank",
  };
  const secondProgressArray = {
    firstElement: "complete",
    secondElement: "complete-line",
    thirdElement: "complete-line",
    fourthElement: "complete",
    fifthElement: "complete-line",
    sixthElement: "blank-line",
    seventhElement: "blank",
    eigthElement: "blank-line",
    ninthElement: "blank-line",
    tenthElement: "blank",
  };
  const thirdProgressArray = {
    firstElement: "complete",
    secondElement: "complete-line",
    thirdElement: "complete-line",
    fourthElement: "blank",
    fifthElement: "blank-line",
    sixthElement: "blank-line",
    seventhElement: "blank",
    eigthElement: "blank-line",
    ninthElement: "blank-line",
    tenthElement: "blank",
  };
  const fourthProgressArray = {
    firstElement: "complete",
    secondElement: "complete-line",
    thirdElement: "complete-line",
    fourthElement: "complete",
    fifthElement: "complete-line",
    sixthElement: "complete-line",
    seventhElement: "complete",
    eigthElement: "complete-line",
    ninthElement: "complete-line",
    tenthElement: "complete",
  };
  const [progress, setProgress] = useState(firstProgressArray);
  const history = useHistory();
  const moveToAdditionalInfo = () => (e) => {
    e.preventDefault();
    setProgress(secondProgressArray);
    history.push("/additionalInfo");
  };
  const moveToFinal = () => (e) => {
    e.preventDefault();
    setProgress(fourthProgressArray);
    history.push("/finalSetup");
  };
  return (
    <SignupContext.Provider
      value={{ progress, moveToAdditionalInfo, moveToFinal }}
    >
      {props.children}
    </SignupContext.Provider>
  );
}

export default SignupContextProvider;
