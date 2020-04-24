  const serviceLogout = (token) =>{
    localStorage.setItem('user', null );
    localStorage.setItem('token', null );
    return true;
  }

  const  serviceLogin = (u, p ) =>{
    var url = 'https://testing.flowapigestionrh.dns-cloud.net/v1/api-token-auth/';
    var json_data = {username:u, password:p};

    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json_data),
    })
    .then((response) => {

      if (response.status ==400) throw new Error("Usuario o contraseña invalida");
      if (!response.ok) throw Error("No se pudo conectar con el servidor "+ response.status + " "+ response.statusText);
      return response.json();
  })
  .catch(error => {
      return {status:error.status, message:error.message, data:{}};
  })

  }


  export default {serviceLogin, serviceLogout};
