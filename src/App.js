import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Checkout from "./components/Checkout";
import Proceed from "./components/Proceed";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ContactUs}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/proceed" component={Proceed}/>
      </Switch>
    </Router>


  );
}

export default App;
