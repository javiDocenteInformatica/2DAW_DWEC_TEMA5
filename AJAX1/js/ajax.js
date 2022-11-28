// VARIABLES GLOBALES
let id_inputFichero; // obtiene el input del selector de fichero
let btn_obtieneFichero; // obtiene el botón para obtener el fichero
let f_cargaDocumento; // función para cargar el documento en HTML

// Espera a que cargue el contenido del HTML
window.addEventListener("load", ()=>{
    id_inputFichero = document.querySelector("#id_inputFichero");
    btn_obtieneFichero = document.querySelector("#btn_obtieneFichero");
    // MOSTRAR POR CONSOLA
    console.log(id_inputFichero.value);
    // console.log(btn_obtieneFichero);
});


f_cargaDocumento = ()=>{
    // Creamos el objeto para gestionar la petición AJAX 'XMLHttpRequest'
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = ()=>{
        switch(xmlHttp.readyState){
            case 0:
                console.log("xmlHttp.readyState: ","0: solicitud no inicializada");
                break;
            case 1:
                console.log("xmlHttp.readyState: ","1: conexión de servidor establecida");
                break;
            case 2:
                console.log("xmlHttp.readyState: ","2: solicitud recibida");
                break;
            case 3:
                console.log("xmlHttp.readyState: ","3: solicitud de procesamiento");
                break;
            case 4:
                console.log("xmlHttp.readyState: ","4: solicitud finalizada y respuesta lista");
                break
            default:
                console.log("xmlHttp.readyState: ","Error, el estado no se encuentra entre 0 y 4");
                break;
        }
    }
    
};

