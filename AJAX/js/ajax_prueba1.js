// VARIABLES GLOBALES
let input_usuario; // obtiene el input del usuario
let btn_enviar; // obtiene el botón para enviar datos al servidor
let resultadoAJAX; // obtiene el párrafo donde se almacenará el resultado
let f_cargaDatos; // función que nos permite traernos datos del servidor con AJAX


// Espera a que cargue el contenido del HTML
window.addEventListener("load", ()=>{
        
    // MOSTRAR POR CONSOLA
    
    input_usuario = document.querySelector("#input_usuario");
    btn_enviar = document.querySelector("#btn_enviar");
    // resultadoAJAX = document.querySelector("#resultadoAJAX");


    btn_enviar.addEventListener("click", ()=>{
        f_cargaDatos();
    });

});





f_cargaDatos = function (){
    // Creamos el objeto para gestionar la petición AJAX 'XMLHttpRequest'
    let xmlHttp = new XMLHttpRequest();


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
   let url = `/php/ajax_prueba1.php?name_usuario="${input_usuario.value}"`;
   let async = true;

    xmlHttp.open(method,url); //xmlHttp.open(method,url,async,user,psw);

    xmlHttp.send(); //Envía la solicitud al servidor. Utilizado para solicitudes GET
    // xmlHttp.send(string);// POST


    xmlHttp.addEventListener('readystatechange', (evento)=>{
    // xmlHttp.onreadystatechange = ()=>{
        switch(this.readyState){
            // case 0:
            //     console.log("xmlHttp.readyState: ","0: solicitud no inicializada");
            //     console.log("xmlHttp.status: ",this.status);
            //     break;
            // case 1:
            //     console.log("xmlHttp.readyState: ","1: conexión de servidor establecida");
            //     console.log("xmlHttp.status: ",xmlHttp.status);
            //     break;
            // case 2:
            //     console.log("xmlHttp.readyState: ","2: solicitud recibida");
            //     console.log("xmlHttp.status: ",xmlHttp.status);
            //     break;
            // case 3:
            //     console.log("xmlHttp.readyState: ","3: solicitud de procesamiento");
            //     console.log("xmlHttp.status: ",xmlHttp.status);
            //     break;
            case 4:
                console.log("xmlHttp.readyState: ","4: solicitud finalizada y respuesta lista");
                console.log("xmlHttp.status: ",this.status);
                if(xmlHttp.status == 200){
                    btn_obtieneFichero.insertAdjacentHTML("afterend",`<p>${this.responseText}</p>`);
                }
                break;
            default:
                console.log("xmlHttp.readyState: ","Error, el estado no se encuentra entre 0 y 4");
                console.log("xmlHttp.status: ",xmlHttp.status);
                break;
        }
    });

    

    console.log("xmlHttp.getAllResponseHeaders()",xmlHttp.getAllResponseHeaders()); // Devuelve información de encabezado
    
};

// console.log(f_cargaDatos);