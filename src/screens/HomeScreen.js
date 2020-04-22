import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';


const HomeScreen = (props) =>{
    //variables
    const [valor, setValor] = useState('');

    //metodos
    const handleSignIn = event => {
        console.log(valor);
     };


  return (
    <Container style={{ padding: 100 }}>
      <Row>
      <Col>
        soy home
      </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
