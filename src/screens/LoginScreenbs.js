import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import serviceLogin  from '../services/UserService';

import {
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


const LoginScreenbs = (props) =>{
    let history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

     const handleSignIn = event => {
       event.preventDefault();

       console.log("usuario: "+ username);
       console.log("password: "+ password);

       serviceLogin(username, password)
       .then(res=>{
           if (res.token != null) {
             console.log("Token: " + res.token);
             //setMessage(res.token);
             localStorage.setItem('token',res.token );
             history.push('/dashboard');
           }else{
             setMessage("Error: " + res.message);
           };


       });
     };


  return (
    <Container className="justify-content-md-center" >

    <br/>
    <Row>
        <Col md={{ span: 4, offset: 4 }}>
            <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Usuario:</Form.Label>
            <Form.Control
            type="text"
            placeholder="Usuario"
            value={username || ''}
            onChange={e => setUsername(e.target.value)}/>

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>

            <Form.Control type="password"
            placeholder="Contraseña"
            value={password || ''}
            onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">

            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSignIn}>
            Ingresar
            </Button>
            <Form.Group>
              <Form.Label>{message}</Form.Label>
            </Form.Group>

        </Form>
  </Col>
  </Row>
  </Container>
  );
}

export default LoginScreenbs;
