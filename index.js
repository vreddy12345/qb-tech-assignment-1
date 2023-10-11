import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import { Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

import LandingPage from "./components/LandingPage";
import JobListings from "./components/JobListings";
import JobDetails from "./components/JobDetails";
import ApplyForm from "./components/ApplyForm";
import SuccessPage from "./components/SuccessPage";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/job-listings" component={JobListings} />
        <Route path="/job-details/:id" component={JobDetails} />
        <Route path="/apply" component={ApplyForm} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
