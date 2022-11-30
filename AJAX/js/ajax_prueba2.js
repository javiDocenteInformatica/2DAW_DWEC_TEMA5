// VARIABLES GLOBALES
let input_usuario; // obtiene el input del usuario
let btn_enviar; // obtiene el botón para enviar datos al servidor
let contenedor_ajax; // obtiene el div que contiene la información de ajax_prueba1.html
let respuestaServidor; // obtiene el párrafo donde se almacenará el resultado
let f_cargaDatos; // función que nos permite traernos datos del servidor con AJAX


// Espera a que cargue el contenido del HTML
window.addEventListener("load", ()=>{
    
    input_usuario = document.querySelector("#input_usuario");
    btn_enviar = document.querySelector("#btn_enviar");
    contenedor_ajax = document.querySelector("#contenedor_ajax");
    // resultadoAJAX = document.querySelector("#resultadoAJAX");


    btn_enviar.addEventListener("click", ()=>{
        f_cargaDatos();
    });

});





f_cargaDatos = function (){

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
    let url = `php/ajax_prueba1.php?${input_usuario.getAttribute("name")}=${input_usuario.value}`;
    console.log(url);
    let async = true;

    // CONFIGURAMOS LA PETICIÓN ANTES DE ENVIARLA
    objetoAJAX.open(method,url,async); //objetoAJAX.open(method,url,async,user,psw);
    
    // --------------------------------------

    // EL CLIENTE PERMACENECE A LA ESCUCHA, ESPERANDO RESPUESTA DEL SERVIDOR
    //** IMPORTANTE: La escucha hay que hacerla antes del SEND(). Puede estar antes o después del open, pero siempre antes de enviar la petición. **/
    objetoAJAX.addEventListener('readystatechange', function(){ //NOTA: No le gusta la función flecha '()=>'
    // objetoAJAX.onreadystatechange = ()=>{
        switch(this.readyState){
            case 0:
                console.log("objetoAJAX.readyState: ","0: solicitud no inicializada");
                console.log("objetoAJAX.status: ",this.status);
                break;
            case 1:
                console.log("objetoAJAX.readyState: ","1: conexión de servidor establecida");
                console.log("objetoAJAX.status: ",this.status);
                break;
            case 2:
                console.log("objetoAJAX.readyState: ","2: solicitud recibida");
                console.log("objetoAJAX.status: ",this.status);
                break;
            case 3:
                console.log("objetoAJAX.readyState: ","3: solicitud de procesamiento");
                console.log("objetoAJAX.status: ",this.status);
                break;
            case 4:
                console.log("objetoAJAX.readyState: ","4: solicitud finalizada y respuesta lista");
                console.log("objetoAJAX.status: ",this.status);
                if(objetoAJAX.status == 200){
                    
                    // Obtenemos el elemento HTML que almacenará la respuesta
                    respuestaServidor = document.querySelector("#respuestaServidor");
            
                    // Si es nulo o está indefinido, deberemos insertarlo en el HTML
                    if(respuestaServidor === null || respuestaServidor === undefined){
                        
                        // Insertamos la respuesta al final del div contenedor 
                        contenedor_ajax.insertAdjacentHTML("beforeend",`<p id="respuestaServidor">${this.responseText}</p>`);

                    }else{// Si no, sólo tenemos que cambiar su contenido.
                        
                        respuestaServidor.innerHTML = this.responseText;
                    }
                    
                }
                break;
            default:
                // console.log("objetoAJAX.readyState: ",objetoAJAX.readyState," : Error, el estado no se encuentra entre 0 y 4");
                // console.log("objetoAJAX.status: ",objetoAJAX.status);
                break;
        }
        // console.log("objetoAJAX.getResponseHeader(): ",objetoAJAX.getResponseHeader()); // Devuelve información de encabezado específica
        // console.log("objetoAJAX.getAllResponseHeaders(): ",objetoAJAX.getAllResponseHeaders()); // Devuelve información de encabezado
    });


    // --------------------------------------
    
    // SE ENVÍA LA PETICIÓN AL SERVIDOR
    objetoAJAX.send(); //Envía la solicitud al servidor. Utilizado para solicitudes GET
    // objetoAJAX.send(string);// POST

    // --------------------------------------
      
};

// console.log(f_cargaDatos);