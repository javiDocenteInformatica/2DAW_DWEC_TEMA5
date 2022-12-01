// VARIABLES GLOBALES
let inputFichero; // obtiene el input del selector de fichero
let btn_obtieneFichero; // obtiene el botón para obtener el fichero
let fichero_json; // fichero json
let respuestaServidor; // obtiene el párrafo donde se almacenará el resultado
let f_cargaDocumento; // función para cargar el documento en HTML

// Espera a que cargue el contenido del HTML
window.addEventListener("load", ()=>{


    inputFichero = document.querySelector("#id_inputFichero");
    btn_obtieneFichero = document.querySelector("#btn_obtieneFichero");
    contenedor_ajax = document.querySelector("#contenedor_ajax");
    // inputFichero.files[0].name="json\\datos.json";
    
    // El click del botón lanza la petición AJAX
    btn_obtieneFichero.addEventListener("click", ()=>{
        f_cargaDocumento();
    });
    
    
    
    // Comprueba el fichero para ver por CONSOLA el contenido (NO ES NECESARIO)
    inputFichero.addEventListener("change", ()=>{
        
        fichero_json = inputFichero.files[0];
        console.log(fichero_json);

        
        
    });
    
});

f_cargaDocumento = ()=>{
    // Creamos el objeto para gestionar la petición AJAX 'XMLHttpRequest'
    let objetoAJAX = new XMLHttpRequest();

    // --------------------------------------

    /*
    Especifica la solicitud:
    - método: el tipo de solicitud GET o POST
    - url: la ubicación del archivo
    - async: verdadero (asincrónico) o falso (sincrónico)
    - usuario: nombre de usuario opcional 
    - psw: contraseña opcional
    * objetoAJAX.open(method,url,async,user,psw);
    */
    let method = "GET";
    let url = `modelo/json/${fichero_json.name}`;
    console.log(url);
    let async = true;

    // CONFIGURAMOS LA PETICIÓN ANTES DE ENVIARLA
    objetoAJAX.open(method,url); //objetoAJAX.open(method,url,async,user,psw);
    

    // --------------------------------------

    // EL CLIENTE PERMACENECE A LA ESCUCHA, ESPERANDO RESPUESTA DEL SERVIDOR
    //** IMPORTANTE: La escucha hay que hacerla antes del SEND(). Puede estar antes o después del open, pero siempre antes de enviar la petición. **/
    objetoAJAX.onreadystatechange = function(){ //NOTA: No le gusta la función flecha '()=>'

        if(objetoAJAX.readyState == 4){ // Estado del XMLHttpRequest
            console.log("objetoAJAX.readyState: ","4: solicitud finalizada y respuesta lista");

            if(objetoAJAX.status == 200){ // Estado de la petición HTTP

                // Obtenemos el elemento HTML que almacenará la respuesta
                respuestaServidor = document.querySelector("#respuestaServidor");
        
                // Si es nulo o está indefinido, deberemos insertarlo en el HTML
                if(respuestaServidor === null || respuestaServidor === undefined){
                    
                    // Insertamos la respuesta al final del div contenedor 
                    contenedor_ajax.insertAdjacentHTML("beforeend",`<pre id="respuestaServidor">${recorreObjeto(JSON.parse(this.responseText))}</pre>`);

                }else{// Si no, sólo tenemos que cambiar su contenido.
                    
                    respuestaServidor.innerHTML = JSON.parse(this.responseText);
                }
            }
        }

        // ..........................................
        // SIMPLEMENTE INFORMATIVO
        // switch(this.readyState){ // Estado del XMLHttpRequest
        //     case 0:
        //         console.log("objetoAJAX.readyState: ","0: solicitud no inicializada");
        //     break;

        //     case 1:
        //         console.log("objetoAJAX.readyState: ","1: conexión de servidor establecida");
        //     break;

        //     case 2:
        //         console.log("objetoAJAX.readyState: ","2: solicitud recibida");
        //     break;

        //     case 3:
        //         console.log("objetoAJAX.readyState: ","3: solicitud de procesamiento");
        //     break;

        //     case 4:
        //         console.log("objetoAJAX.readyState: ","4: solicitud finalizada y respuesta lista");
        //     break;

        // }
        
        // console.log("objetoAJAX.status: ",this.status); // Estado de la petición HTTP

        // console.log("objetoAJAX.getAllResponseHeaders(): ",objetoAJAX.getAllResponseHeaders()); // Devuelve información de encabezado
        // ..........................................
    }

    // --------------------------------------
    
    // SE ENVÍA LA PETICIÓN AL SERVIDOR
   
    // objetoAJAX.setRequestHeader("Content-Type","application/json"); // En principio no es necesario

    objetoAJAX.send(); //Envía la solicitud al servidor. Utilizado para solicitudes GET
    // objetoAJAX.send(fichero_json);//Envía la solicitud al servidor. Utilizado para solicitudes POST

    // --------------------------------------

};

function recorreObjeto(p_objeto){
    console.log(p_objeto);
    // cadena que representa al objeto
    let representacion = `{ <br>`;

    // las claves del objeto
    let claves = Object.keys(p_objeto);

    for(let i=0; i < claves.length; i++){
        if(i == claves.length-1){
            representacion += `${claves[i]}: ${p_objeto[claves[i]]} <br>`;  
        }else{
            representacion += `${claves[i]}: ${p_objeto[claves[i]]} <br>, <br>`;  
        }        
    }

    representacion += `}`;

    return representacion;
}

