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
  NavLink
} from "react-router-dom";

import LoginScreenbs from './screens/LoginScreenbs';
import HomeScreen from './screens/HomeScreen';
import PaisesScreen from './screens/paises/PaisesListScreen';


function App() {
  return (
    <div className="App">


      <Router>
        <Navbar  className="nav navbar-expand-md navbar-light bg-flow fixed-top ">     
          <Navbar.Brand  as={Link} to='/'><img className="img-flow" src="flow_technology.png" alt="logo">
          </img></Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">                
              <NavDropdown title="Abm's" id="basic-nav-dropdown">

                <NavDropdown.Item as={Link} to='/'>Home</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/login'>Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/paises'>Paises</NavDropdown.Item>

                <NavDropdown.Divider />

              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Navbar>




        <Switch>
          <Route exact path="/"><HomeScreen /> </Route>
          <Route path="/login"> <LoginScreenbs /></Route>
          <Route path="/paises"> <PaisesScreen /></Route>
        </Switch>

    </Router>

    </div>
  );
}

export default App;
