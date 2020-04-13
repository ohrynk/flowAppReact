

  const  serviceLogin = (u, p ) =>{
    var url = 'http://3.19.56.113/v1/api-token-auth/';
    var json_data = {username:u, password:p};
    


    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json_data),
    })
    .catch(error => {
        return {status:error.status, message:error.message, data:{}};
    })
    .then((response) => {
        console.log("serviceLogin");
        return response.json();
    })

  }// Fin post login
export default  serviceLogin;