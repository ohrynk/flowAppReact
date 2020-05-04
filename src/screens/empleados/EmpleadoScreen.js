import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Tab,
  Tabs
} from 'react-bootstrap';
import Layout from '../../layouts/Layout';
import {Redirect, useHistory,useLocation } from "react-router-dom";



const EmpleadoScreen = (props) =>{
    //variables
    const [valor, setValor] = useState('');
    const [formState, setFormState] = useState({
      isValid: false,
      values: {},
      touched: {},
      errors: {},
    });


    //metodos
    const handleSignIn = event => {
        console.log(valor);
     };

     const handleChange = event => {
         event.persist();

         setFormState(formState => ({
           ...formState,
           values: {
             ...formState.values,
             [event.target.name]:
               event.target.type === 'checkbox'
                 ? event.target.checked
                 : event.target.value
           },
           touched: {
             ...formState.touched,
             [event.target.name]: true
           }
         }));
       };


       //validar datos


  return (
      <Layout>
        <Row>
        <Col md={{ span: 8, offset: 1 }}>
          <Form>
            <Tabs defaultActiveKey="perfil" id="uncontrolled-tab-example">

              <Tab eventKey="perfil" title="Perfil">

              <Form.Group >
                <Form.Label>Reporta a </Form.Label>

                <Form.Control type="text"
                placeholder="Reporta a"
                name="reporta"
                id="reporta"
                onChange={handleChange}
                value={formState.values.reporta || ''}
                />

                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text"
                placeholder="Email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formState.values.email || ''}
                />
                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Oficina</Form.Label>
                <Form.Control type="text"
                placeholder="Oficina"
                name="oficina"
                id="oficina"
                onChange={handleChange}
                value={formState.values.oficina || ''}
                />
                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>







              </Tab>




              <Tab eventKey="personal" title="Personal" >
                <h3>Informacion Personal</h3>

                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text"
                  placeholder="Nombre"
                  name="nombre"
                  id="nombre"
                  onChange={handleChange}
                  value={formState.values.nombre || ''}
                  />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>


                <Form.Group>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text"
                  placeholder="Apellido"
                  name="apellido"
                  id="apellido"
                  onChange={handleChange}
                  value={formState.values.apellido || ''}
                  />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Fecha Nacimiento</Form.Label>
                  <Form.Control type="text"
                  placeholder="Fecha Nacimiento"
                  name="fechanac"
                  id="fechanac"
                  onChange={handleChange}
                  value={formState.values.fechanac || ''}
                  />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Genero Legal</Form.Label>
                  <Form.Control type="text"
                  placeholder="Genero Legal"
                  name="genero"
                  id="genero"
                  onChange={handleChange}
                  value={formState.values.genero || ''}
                  />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>


                <Form.Group>
                  <Form.Label>Nacionalidad</Form.Label>
                  <Form.Control type="text"
                  placeholder="Nacionalidad"
                  name="nacionalidad"
                  id="nacionalidad"
                  onChange={handleChange}
                  value={formState.values.nacionalidad || ''}
                  />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="text"
                  placeholder="Genero Legal"
                  name="genero"
                  id="genero"
                  onChange={handleChange}
                  value={formState.values.telefono || ''}
                  />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Numero de cuenta Bancaria</Form.Label>
                  <Form.Control type="text"
                  placeholder="Nro Cta Banco"
                  name="cuenta"
                  id="cuenta"
                  onChange={handleChange}
                  value={formState.values.cuenta || ''}
                  />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Documento de Identidad</Form.Label>
                  <Form.Control type="text"
                  placeholder="Documento de indentidad"
                  name="cuenta"
                  id="cuenta"
                  onChange={handleChange}
                  value={formState.values.nrodocumento || ''}
                  />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>

              </Tab>



              <Tab eventKey="direccion" title="Direccion" >
                <h3>Direccion</h3>
                <Form.Group>
                  <Form.Label>Direccion 1</Form.Label>
                  <Form.Control type="text"
                  name="direccion1"
                  id="direccion1"
                  onChange={handleChange}
                  value={formState.values.direccion1 || ''}
                  />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Direccion 2</Form.Label>
                  <Form.Control type="text"
                  name="direccion2"
                  id="direccion2"
                  onChange={handleChange}
                  value={formState.values.direccion2 || ''}
                  />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control type="text"
                  name="ciudad"
                  id="ciudad"
                  onChange={handleChange}
                  value={formState.values.ciudad || ''}
                  />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Codigo Postal</Form.Label>
                  <Form.Control type="text"
                  name="codigopostal"
                  id="codigopostal"
                  onChange={handleChange}
                  value={formState.values.codigopostal || ''}
                  />
                  <Form.Text className="text-muted"> </Form.Text>
                </Form.Group>

                <h5>Contacto</h5>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text"
                  name="contactonombre"
                  id="contactonombre"
                  onChange={handleChange}
                  value={formState.values.contactonombre || ''}
                  />
                  <Form.Text className="text-muted"> </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="text"
                  name="contactotelefono"
                  id="contactotelefono"
                  onChange={handleChange}
                  value={formState.values.contactotelefono || ''}
                  />
                  <Form.Text className="text-muted"> </Form.Text>
                </Form.Group>

              </Tab>

              <Tab eventKey="contrato" title="Contrato" >
                <b>Informacion basica</b>
                <Form.Group>
                  <Form.Label>Fecha Inicio</Form.Label>
                  <Form.Control type="text"
                  name="fechainicio"
                  id="fechainicio"
                  onChange={handleChange}
                  value={formState.values.fechainicio || ''}
                  />
                  <Form.Text className="text-muted"> </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Fecha Fin</Form.Label>
                  <Form.Control type="text"
                  name="fechafin"
                  id="fechafin"
                  onChange={handleChange}
                  value={formState.values.fechafin || ''}
                  />
                  <Form.Text className="text-muted"> </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control type="text"
                  name="titulo"
                  id="titulo"
                  onChange={handleChange}
                  value={formState.values.titulo || ''}
                  />
                  <Form.Text className="text-muted"> </Form.Text>
                </Form.Group>

                <b>Horario Laboral</b>
                <Form.Group>
                  <Form.Label>Horas</Form.Label>
                  <Form.Control type="text"
                  name="horas"
                  id="horas"
                  onChange={handleChange}
                  value={formState.values.horas || ''}
                  />
                  <Form.Text className="text-muted"> </Form.Text>
                </Form.Group>


                <Form.Group>
                  <Form.Label>Unidad</Form.Label>
                  <Form.Control type="text"
                  name="unidad"
                  id="unidad"
                  onChange={handleChange}
                  value={formState.values.unidad || ''}
                  />
                  <Form.Text className="text-muted"> </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Dias</Form.Label>
                  <Form.Control type="text"
                  name="dias"
                  id="dias"
                  onChange={handleChange}
                  value={formState.values.dias || ''}
                  />
                  <Form.Text className="text-muted"> </Form.Text>
                </Form.Group>


                  <b>Salario Fijo</b>
                  <Form.Group>
                    <Form.Label>Tipo Regulacion</Form.Label>
                    <Form.Control type="text"
                    name="dias"
                    id="dias"
                    onChange={handleChange}
                    value={formState.values.tiporegulacion || ''}
                    />
                    <Form.Text className="text-muted"> </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="text"
                    name="dias"
                    id="dias"
                    onChange={handleChange}
                    value={formState.values.montosalario || ''}
                    />
                    <Form.Text className="text-muted"> </Form.Text>
                  </Form.Group>


              </Tab>




            </Tabs>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
            </Form>

              </Col>
          </Row>

    </Layout>
  );
}

export default EmpleadoScreen;
