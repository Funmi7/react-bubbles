import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink, withRouter, Redirect } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from './components/BubblePage';

function App(props) {
  const onLogout = () => {
    localStorage.clear();
    props.history.replace('/')
  }
  return (
    <div>
      {/* <nav>
        <NavLink exact to ='/'>Login</NavLink>
        <NavLink to ='/bubblesPage'>Bubbles</NavLink>
      </nav> */}
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Route path='/bubblePage' 
        render={props => withAthCheck(BubblePage, props)}/>
      </div>
    </div>
  );
}

function withAthCheck(Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  return <Redirect to='/' />;
}

export default withRouter(App);


