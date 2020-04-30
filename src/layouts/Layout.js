
import React, { Fragment, useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/simple-sidebar.css';
import Menu from '../layouts/menu';
import ContainerDetalle from '../layouts/containerOpcionMenu';
import {
Link,
useHistory
} from "react-router-dom";
import UserService  from '../services/UserService';

const Layout = (props) =>{
  let history = useHistory();
  const children = useState('');




const handleLogout = event => { 
  event.preventDefault();
  UserService.serviceLogout();
  history.push('/login');
}

  return (
    <Fragment>
  <body>      
  <div class="d-flex" id="wrapper">
        <div class="bg-light border-right" id="sidebar-wrapper">
          <Menu></Menu>
        </div>
  
      <div id="page-content-wrapper">
  
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                        <NavDropdown title="Menu Dropdown" id="basic-nav-dropdown">
          
                          <NavDropdown.Item as={Link} to='/'>Home</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to='/paises'>Paises</NavDropdown.Item>
        
                          <NavDropdown.Divider />
                          <NavDropdown.Item as={Link} to='/' onClick={handleLogout}>Salir</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
  
                    </Navbar.Collapse>
                </li>
              </ul>
            </div>
        </nav>
  <ContainerDetalle>
      
      {props.children}
   
     
  </ContainerDetalle>
        
      </div>
  
  
  </div>
  </body> 
  </Fragment>
          );
}

export default Layout;

/*class Layout extends React.Component {
    handleLogout () {
      UserService.serviceLogout();
    };
>>>>>>> 60a5259a641fa61f2da7fbbaaec514d6d132ee53


return (
  <Fragment>
<body>      
<div class="d-flex" id="wrapper">
      <div class="bg-light border-right" id="sidebar-wrapper">
        <Menu></Menu>
      </div>

    <div id="page-content-wrapper">

      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
              <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <NavDropdown title="Menu Dropdown" id="basic-nav-dropdown">
				
                        <NavDropdown.Item as={Link} to='/'>Home</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/paises'>Paises</NavDropdown.Item>
			
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to='/' onClick={handleLogout}>Salir</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>

                  </Navbar.Collapse>
              </li>
            </ul>
          </div>
      </nav>
<ContainerDetalle>
    
    {children}
 
   
</ContainerDetalle>
      
    </div>


</div>
</body> 
</Fragment>
        );
    }
}

export default Layout;*/
