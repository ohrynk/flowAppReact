
export const EmpleadoAddService = async (formState) =>{
        var data = [];
        var error = 0;
        var message = '';

        var url = 'http://127.0.0.1:8000/v1/empleados/';


        //Serializar datos
        var usuario = {
          username: formState.values.username,
          password: formState.values.password,
          email: formState.values.email,
        }

        var json_data ={
                id: formState.values.id,
                reporta:formState.values.reporta,
                email: formState.values.email,
                oficina: formState.values.oficina,

                nombre:formState.values.nombre,
                apellido: formState.values.apellido,
                fechanacimiento: formState.values.fechanacimiento,
                genero:formState.values.genero,
                nacionalidad:formState.values.nacionalidad,
                telefono:formState.values.telefono,
                cbu: formState.values.cbu,
                nrodocumento: formState.values.nrodocumento,

                direccion: formState.values.direccion,
                direccion2: formState.values.direccion2,
                ciudad: formState.values.ciudad,
                codigopostal: formState.values.codigopostal,
                contactonombre:formState.values.contactonombre,
                contactotelefono:formState.values.contactotelefono,

                user: usuario
            };

        console.log("profile edit: " + formState.values.id);
        var url = 'http://127.0.0.1:8000/v1/profiles/'+formState.values.id+ '/';
        console.log("profile edit: " + url);
        console.log("json enviado:"+JSON.stringify(json_data));
        console.log("token:"+localStorage.getItem('token'));
        debugger
        var options ={
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
          },
          body: JSON.stringify(json_data),
        };


        try {
            const response = await fetch(url, options);
            //if (!response.ok  )  throw new Error(response.statusText);
            data = await response.json();
            console.log("resultado: " + data.nombre  );
            return {  data: data ,error: 0, message: response.statusText, status:response.status};
        } catch (error ) {
            console.log("Service Error: " + error.message);
            return {data: [] ,error: 1,message: error.message, status:500};
        }
    }


  export const ProfileServiceFindById = async (id) =>{
        var data = [];
        var error = 0;
        var message = '';
        var url = 'http://127.0.0.1:8000/v1/profiles/'+id+'/';

        var options ={
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
          },
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok)  throw new Error(response.statusText);
            data = await response.json();
            console.log("resultado: " + data + " " + error + " " + message  );
            return {  data: data ,error: 0, message: message, status:response.status};
        } catch (error) {
            console.log("entro por error " + error.message);
            message = "Error " + error.message;
            return {data: [] ,error: 1,message: message, status:500};
        }
    }
