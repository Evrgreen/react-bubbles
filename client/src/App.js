import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.scss";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/private" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
