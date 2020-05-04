import React,{Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ContainerDetalle extends React.Component {

    render () {
      const  {
        children,
    } = this.props;

    return(
        <Fragment>
        <Container fluid>
        <Row>
          <Col>    {children}</Col>
        </Row>
      </Container>

        </Fragment>
      );
    }


}

export default ContainerDetalle;
