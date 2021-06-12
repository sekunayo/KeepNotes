import React from "react";
import Signup from "./screens/Signup/Signup";
import { Route, Switch } from "react-router-dom";
import PersonalInfo from "./screens/Signup/PersonalInfo/PersonalInfo";
import AdditionalInfo from "./screens/Signup/AdditionalInfo/AdditionalInfo";
import Landing from "./screens/Landing/Landing";
import FinalSetup from "./screens/Signup/FinalSetup/FinalSetup";
import SignupContextProvider from "../src/context/SignupContext/SignupContext";

function App() {
  return (
    <SignupContextProvider>
      <>
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route component={Signup} exact path="/signup"></Route>
          <Route component={PersonalInfo} exact path="/personalInfo"></Route>
          <Route
            component={AdditionalInfo}
            exact
            path="/additionalInfo"
          ></Route>
          <Route component={FinalSetup} exact path="/finalSetup"></Route>
        </Switch>
      </>
    </SignupContextProvider>
  );
}

export default App;
