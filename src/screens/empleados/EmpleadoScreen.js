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
import {EmpleadoAddService } from '../../services/EmpleadoService';
import {Redirect, useHistory,useLocation } from "react-router-dom";



const EmpleadoScreen = (props) =>{
    //variables
    let history = useHistory();

    const [message, setMessage] = useState("");
    const [formState, setFormState] = useState({
       isValid: false,
       values: {},
       touched: {},
       errors: {},
     });


     //validar informacion
      const formIsOk=()=>{
        let valid = true;
        console.log("Datos: " + formState.values.nombre);

        if (!formState.values.nombre || formState.values.nombre===""||formState.values.nombre===" "){
           alert("Nombre es Obligatorio");
           return false ;
        }
        if (!formState.values.apellido || formState.values.apellido===""||formState.values.apellido===" "){
           alert("Apellido es Obligatorio");
           return false ;
        }


        //validar cbu solo numerico
        return true ;
      }


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

       //Empleado Edit
          const handleSubmit= event =>{
            event.preventDefault();
            if (formIsOk){

               EmpleadoAddService(formState)
               .then((res)=>{

                   if(res.status===200){
                     alert("Guardado correctamente");
                   }
                   if (res.status!==200){
                     setMessage("Error: " + res.message);
                   }

               });

            }

          }
       //validar datos


  return (
      <Layout>
        <Row>
        <Col md={{ span: 8, offset: 1 }}>
          <Form>
            <Tabs defaultActiveKey="perfil" id="uncontrolled-tab-example">

              <Tab eventKey="perfil" title="Perfil">

              <Form.Group >
                <Form.Label>Usuario de sistema</Form.Label>
                <Form.Control type="text"
                name="username"
                id="username"
                onChange={handleChange}
                value={formState.values.username || ''}
                />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>


              <Form.Group >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={formState.values.password || ''}
                />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>


              <Form.Group >
                <Form.Label>Repetir contraseña</Form.Label>
                <Form.Control type="password"
                name="password2"
                id="password2"
                onChange={handleChange}
                value={formState.values.password2 || ''}
                />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>


              <Form.Group >
                <Form.Label>Reporta a </Form.Label>
                <Form.Control type="text"

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
                  name="fechanac"
                  id="fechanac"
                  onChange={handleChange}
                  value={formState.values.fechanacimiento || ''}
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
                  placeholder="CBU Banco"
                  name="cbu"
                  id="cbu"
                  onChange ={handleChange}
                  value={formState.values.cbu || ''}
                  />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Documento de Identidad</Form.Label>
                  <Form.Control type="text"
                  placeholder="Documento de indentidad"
                  name="nrodocumento"
                  id="nrodocumento"
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
                  name="direccion"
                  id="direccion"
                  onChange={handleChange}
                  value={formState.values.direccion || ''}
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
