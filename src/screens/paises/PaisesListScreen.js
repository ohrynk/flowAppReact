import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';


const PaisesScreen = (props) =>{
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
        Paises
      </Col>
      </Row>
    </Container>
  );
}

export default PaisesScreen;
