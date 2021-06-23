import React from "react";
import Signup from "./screens/Signup/Signup";
import Login from "./screens/Login/Login";
import { Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing/Landing";
import SignupContextProvider from "../src/context/SignupContext/SignupContext";
import Product from "./screens/Product/Product";

function App() {
  return (
    <SignupContextProvider>
      <>
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route component={Signup} exact path="/signup"></Route>
          <Route component={Login} exact path="/login"></Route>
          <Route component={Product} exact path="/product"></Route>
        </Switch>
      </>
    </SignupContextProvider>
  );
}

export default App;
