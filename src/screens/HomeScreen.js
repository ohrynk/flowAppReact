import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';

import {
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


const HomeScreen = (props) =>{
    //variables
    const [valor, setValor] = useState('');
    let history = useHistory();
    //metodos
    const gotoLogin = event => {
        console.log(valor);
        history.push('/login');
     };


  return (

    <Container style={{ padding: 100 }}>
      <Row>
      <Col>
<h3>Landing Page </h3>

        <Button variant="primary" type="button" onClick={gotoLogin}>
        Ir al Login
        </Button>

      </Col>
      </Row>
    </Container>

  );
}

export default HomeScreen;
