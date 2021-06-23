import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { firstArray, secondArray, thirdArray, fourthArray } from "../../data";

export const SignupContext = createContext();
function SignupContextProvider(props) {
  let history = useHistory();
  const [progress, setProgress] = useState(firstArray);
  const [dataItem, setDataItem] = useState({});

  useEffect(() => {
    let data = localStorage.getItem("data");
    if (data) {
      data = JSON.parse(localStorage.getItem("data"));
      setDataItem(data);
    }
  }, []);
  const submitPersonalInfo = (values) => {
    let { fullName, username } = values;
    let newData = { ...dataItem, fullName, username };
    localStorage.setItem("data", JSON.stringify(newData));
    setDataItem(newData);
    setProgress(secondArray);
  };
  const submitAdditionalInfo = (values) => {
    let { email, address } = values;
    let newData = { ...dataItem, email, address };
    localStorage.setItem("data", JSON.stringify(newData));
    setDataItem(newData);
    setProgress(thirdArray);
  };
  const submitPassword = (values) => {
    let { password, confirmPassword } = values;
    let newData = { ...dataItem, password, confirmPassword };
    localStorage.setItem("data", JSON.stringify(newData));
    setDataItem(newData);
    setProgress(fourthArray);
  };
  const submitFinalInfo = () => {
    history.push("/");
    setProgress(firstArray);
  };
  const validateInfo = (values) => {
    let { email, password } = values;
    if (dataItem?.email === email && dataItem?.password === password) {
      alert("Correct Account");
    } else {
      alert("Wrong Account");
    }
  };

  return (
    <SignupContext.Provider
      value={{
        progress,
        submitPersonalInfo,
        submitAdditionalInfo,
        submitPassword,
        submitFinalInfo,
        validateInfo,
      }}
    >
      {props.children}
    </SignupContext.Provider>
  );
}

export default SignupContextProvider;
