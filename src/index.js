import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
// import Components from "views/Components/Components.jsx";
// import LandingPage from "views/LandingPage/LandingPage.jsx";
// import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import MainPage from "views/MainPage/MainPage.jsx";
import SignUpPage from "./views/SignUpPage/SignUpPage";
import KycPage from "./views/SignUpPage/KycPage";
import ProjectPage from "./views/ProjectPage/ProjectPage";
import ClosedProjectPage from "./views/ProjectPage/ClosedProjectPage";
import CommunityPage from "./views/CommunityPage/CommunityPage";
import CommunityList from "./views/CommunityPage/CommunityList";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} /> */}
      <Route path="/login-page" component={LoginPage} />
      <Route path="/signUp-page" component={SignUpPage} />
      <Route path="/kyc-page" component={KycPage} />
      <Route path="/projects/:projectId" component={ProjectPage} />
      <Route path="/closed-project" component={ClosedProjectPage} />
      {/* <Route path="/main" component={MainPage} /> */}
      <Route path="/community/:communityId" component={CommunityPage} />
      <Route path="/community" component={CommunityList} />
      <Route path="/" component={MainPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
