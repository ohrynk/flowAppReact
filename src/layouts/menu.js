import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {
  Link
} from "react-router-dom";

class Menu extends React.Component {

    render (){
        const  {
            children,
        } = this.props;

    return(
        <Fragment>
        <div class="sidebar-heading"> <Navbar.Brand as={Link} to='/'>
                  <img className="img-flow" src="flow_technology.png" alt="logo">
                  </img></Navbar.Brand></div>
        <div class="list-group list-group-flush">
          <a href="#" class="list-group-item list-group-item-action bg-light" ><Link to="/">Home</Link></a>
          <a href="#" class="list-group-item list-group-item-action bg-light"><Link to="/login">Login</Link></a>
          <a href="#" class="list-group-item list-group-item-action bg-light"><Link to="/paises">Paises</Link></a>
         
        </div>
        </Fragment>
        );
    }


}

export default Menu;