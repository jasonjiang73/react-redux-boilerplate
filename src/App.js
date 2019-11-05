import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
           <Route path="/" component={() => <div>React redux bolierplate</div>} />
      </Switch>
    </div>
  );
}

export default App;
