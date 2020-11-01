import React from "react";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from '../src/Routes';
import './App.css';

const history = createBrowserHistory();

const App = () => {
  return (
      <Router history={history}>
        <Routes />
      </Router>
  )
};
export default App;
