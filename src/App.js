import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

import LoginScreenbs from './screens/LoginScreenbs';
import HomeScreen from './screens/HomeScreen';
import PaisesListScreen from './screens/paises/PaisesListScreen';
import DashboardScreen from './screens/DashboardScreen';


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        //fakeAuth.isAuthenticated ? (
        localStorage.getItem('token') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


function App() {
  return (
    <div className="App">


      <Router>

        <Switch>

          <Route path="/login"> <LoginScreenbs /></Route>
          <PrivateRoute exact path="/"> <HomeScreen /></PrivateRoute>
          <PrivateRoute path="/dashboard"> <DashboardScreen /> </PrivateRoute>
          <PrivateRoute path="/paises"> <PaisesListScreen /> </PrivateRoute>

        </Switch>

    </Router>

    </div>
  );
}

export default App;
