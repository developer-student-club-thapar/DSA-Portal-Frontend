import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import Dashboard from "./Pages/Dashboard/Dashboard";

export const CredentialsContext = React.createContext();

function App() {
  const credentialsState = useState({
    email: localStorage.getItem("email") || "",
    password: "",
    token: localStorage.getItem("token") || "",
    check: localStorage.getItem("check") || "",
    leetcodeUserName: localStorage.getItem("username") || "",
    name: localStorage.getItem("name") || "",
  });

  return (
    <CredentialsContext.Provider value={credentialsState}>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/leaderboard"
              element={credentialsState[0].token ? <Leaderboard /> : <Signin />}
            />
            <Route
              path="/dashboard"
              element={credentialsState[0].token ? <Dashboard /> : <Signin />}
            />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </CredentialsContext.Provider>
  );
}

export default App;
