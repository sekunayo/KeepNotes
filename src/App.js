import React from "react";
import Signup from "./screens/Signup/Signup";
import { Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing/Landing";
import SignupContextProvider from "../src/context/SignupContext/SignupContext";

function App() {
  return (
    <SignupContextProvider>
      <>
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route component={Signup} exact path="/signup"></Route>
        </Switch>
      </>
    </SignupContextProvider>
  );
}

export default App;
