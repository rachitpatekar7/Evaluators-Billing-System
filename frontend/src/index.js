import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ExamForm from './components/ExamForm';
import Billing from './components/Billing';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/exam-form" component={ExamForm} />
        <Route path="/billing" component={Billing} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
