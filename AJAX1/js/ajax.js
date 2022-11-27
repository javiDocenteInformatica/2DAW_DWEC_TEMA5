// VARIABLES GLOBALES
let id_inputFichero; // obtiene el input del selector de fichero
let btn_obtieneFichero; // obtiene el botón para obtener el fichero
let f_cargaDocumento; // función para cargar el documento en HTML

// Espera a que cargue el contenido del HTML
window.addEventListener("load", ()=>{
    id_inputFichero = document.querySelector("#id_inputFichero");
    btn_obtieneFichero = document.querySelector("#btn_obtieneFichero");
    // MOSTRAR POR CONSOLA
    console.log(id_inputFichero);
    console.log(btn_obtieneFichero);
});


f_cargaDocumento = ()=>{
    // Creamos el objeto para gestionar la petición AJAX 'XMLHttpRequest'
    let xmlHttp = new XMLHttpRequest();
    // --------------------
    xmlHttp.abort(); //Cancela la solicitud actual
    // --------------------
    xmlHttp.getAllResponseHeaders(); // Devuelve información de encabezado
    // --------------------
    xmlHttp.getResponseHeader();// Devuelve información de encabezado específica
    // --------------------
    /*
    Especifica la solicitud:
    - método: el tipo de solicitud GET o POST
    - url: la ubicación del archivo
    - async: verdadero (asincrónico) o falso (sincrónico)
    - usuario: nombre de usuario opcional 
    - psw: contraseña opcional
    */
   let method;
   let url;
   let async;
   let user;
   let psw;
   xmlHttp.open(method,url,async,user,psw);
   // --------------------

    // --------------------

    // --------------------

};

