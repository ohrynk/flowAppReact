import React, { Fragment } from 'react';

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

class Layout extends React.Component {


    render() {
        const  {
            children,
        } = this.props;

        return (
            <Fragment>
                <Navbar bg="light" expand="lg" className="nav navbar-expand-md navbar-light bg-flow fixed-top ">
                  <Navbar.Brand as={Link} to='/'>
                  <img className="img-flow" src="flow_technology.png" alt="logo">
                  </img></Navbar.Brand>

                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <NavDropdown title="Abm's" id="basic-nav-dropdown">

                        <NavDropdown.Item as={Link} to='/'>Home</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/login'>Login</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/paises'>Paises</NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to='/' onClick={()=>{

                                localStorage.setItem("token", null) ;
                                alert("token storage: " + localStorage.getItem("token"));
                                
                              }}>Salir</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>

                  </Navbar.Collapse>
                </Navbar>

                <div>
                {children}
                </div>

            </Fragment>
        );
    }
}

export default Layout;
