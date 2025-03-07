import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactUs from "./contact"; // Import the ContactUs component

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
