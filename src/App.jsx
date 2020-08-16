import React from "react";
import "./App.css";
import Loginpage from "./Loginpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <switch>
        <div className="app">
          <Route path="/login">
            <Loginpage />
          </Route>
          <Route path="/">
            <h1> Welcome to Homepage! </h1>
          </Route>
          <Route path="/about">
            <h1>About page!</h1>          
          </Route>
        </div>
      </switch>
    </Router>
  );
}

export default App;
