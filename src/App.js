import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ContactUs}/>
      </Switch>
    </Router>
  );
}

export default App;
