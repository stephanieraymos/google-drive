import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../Context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Authentication/Profile";

import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import PrivateRoute from "./Authentication/PrivateRoute";
import ForgotPassword from "./Authentication/ForgotPassword";
import UpdateProfile from "./Authentication/UpdateProfile";
import Dashboard from "./GoogleDrive/Dashboard";

function App() {
  return (
        <Router>
          <AuthProvider>
            <Switch>

              {/* Drive Routes */}
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />

              {/* Profile Routes */}
              <PrivateRoute path="/user" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />

              {/* Auth Routes */}
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />

            </Switch>
          </AuthProvider>
        </Router>
  );
}

export default App;
