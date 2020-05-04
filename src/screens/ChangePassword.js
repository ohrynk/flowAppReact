import React, { useState,Fragment } from 'react';
import {Button} from 'react-bootstrap';
import Layout from '../layouts/Layout';

const PasswordRevealer = () => {
  const [shown, setShown] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const switchShown = () => setShown(!shown);
  const onChange = ({ currentTarget }) => setPassword(currentTarget.value);
  
 


  return (
      <>
      <Layout>
  	<label  htmlFor="password__input">
      <input
        
        id="password__input"
        onChange={onChange}
        placeholder=" "
        type={shown ? 'text' : 'password'}
        value={password}
      />
      <span >
        Contraseña
      </span>
      <button  onClick={switchShown}>
        {shown ? 'Ocultar' : 'Mostrar'}
      </button>
    </label>
    <Button variant="primary" type="submit">
            Guardar Cambios
    </Button>
    </Layout>
    </>
  );
}

export default PasswordRevealer;