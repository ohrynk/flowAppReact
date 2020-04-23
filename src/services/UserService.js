

  const  serviceLogin = (u, p ) =>{
    var url = 'http://3.22.234.208/v1/api-token-auth/';
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
        console.log("serviceLogin");
        if (response.status < 200 || response.status > 300){
          throw Error("No se pudo conectar con el servidor");
        }
        return response.json();
    })
    .catch(error => {
        return {status:error.status, message:error.message, data:{}};
    })

  }// Fin post login
export default  serviceLogin;
