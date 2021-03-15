import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../Context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import PrivateRoute from "./Authentication/PrivateRoute";
import ForgotPassword from "./Authentication/ForgotPassword";
import UpdateProfile from "./Authentication/UpdateProfile";
import CenteredContainer from "./Authentication/CenteredContainer";

function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
  );
}

export default App;
