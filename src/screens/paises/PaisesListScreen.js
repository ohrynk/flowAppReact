import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import Layout from '../../layouts/Layout';


const PaisesListScreen = (props) =>{
  
    //variables
    const [valor, setValor] = useState('');

    //metodos
    const handleSignIn = event => {
        console.log(valor);
     };

    
  return (
    <Layout>
    <Container style={{ padding: 100 }}>
      <Row>
      <Col>
      
      paises
    
      </Col>
      </Row>
    </Container>
    </Layout>
  );
}

export default PaisesListScreen;
