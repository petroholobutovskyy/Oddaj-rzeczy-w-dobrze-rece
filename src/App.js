import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
