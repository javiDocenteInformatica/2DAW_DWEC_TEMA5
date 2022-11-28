// VARIABLES GLOBALES
let input_usuario; // obtiene el input del usuario
let btn_enviar; // obtiene el botón para enviar datos al servidor

// Espera a que cargue el contenido del HTML
window.addEventListener("load", ()=>{
    
    
    
    
    // MOSTRAR POR CONSOLA


});


f_cargaDocumento = ()=>{
    // Creamos el objeto para gestionar la petición AJAX 'XMLHttpRequest'
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = ()=>{
        switch(xmlHttp.readyState){
            case 0:
                console.log("xmlHttp.readyState: ","0: solicitud no inicializada");
                console.log("xmlHttp.status: ",xmlHttp.status);
                break;
            case 1:
                console.log("xmlHttp.readyState: ","1: conexión de servidor establecida");
                console.log("xmlHttp.status: ",xmlHttp.status);
                break;
            case 2:
                console.log("xmlHttp.readyState: ","2: solicitud recibida");
                console.log("xmlHttp.status: ",xmlHttp.status);
                break;
            case 3:
                console.log("xmlHttp.readyState: ","3: solicitud de procesamiento");
                console.log("xmlHttp.status: ",xmlHttp.status);
                break;
            case 4:
                console.log("xmlHttp.readyState: ","4: solicitud finalizada y respuesta lista");
                console.log("xmlHttp.status: ",xmlHttp.status);
                if(xmlHttp.status == 200){
                    btn_obtieneFichero.insertAdjacentHTML("afterend",`<p>${this.responseText}</p>`);
                }
                break;
            default:
                console.log("xmlHttp.readyState: ","Error, el estado no se encuentra entre 0 y 4");
                console.log("xmlHttp.status: ",xmlHttp.status);
                break;
        }
    }

    /*
    Especifica la solicitud:
    - método: el tipo de solicitud GET o POST
    - url: la ubicación del archivo
    - async: verdadero (asincrónico) o falso (sincrónico)
    - usuario: nombre de usuario opcional 
    - psw: contraseña opcional
    * xmlHttp.open(method,url,async,user,psw);
    */
   let method = "GET";
   let url = "ajax_prueba1.php"
   let async = true;
    xmlHttp.open(method,url,async); //xmlHttp.open(method,url,async,user,psw);

    xmlHttp.send(); //Envía la solicitud al servidor. Utilizado para solicitudes GET

    console.log("xmlHttp.getAllResponseHeaders()",xmlHttp.getAllResponseHeaders()); // Devuelve información de encabezado
    
};

