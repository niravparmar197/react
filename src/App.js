import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Navbar'
import Users from './Users'
import UserCreate from './UserCreate'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/create' component={UserCreate} />
        </Switch>
      </div>
    </Router>
  );
}