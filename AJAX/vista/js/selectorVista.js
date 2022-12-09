
/*****************************
** VARIABLES GLOBALES **
*****************************/
let div_cargaVista; // contenedor donde ira la vista principal de la página web
let selectorVista; // elemento html que permite seleccionar que vista se va a mostrar en la parte principal de la página


// include_once("vista/ajax_prueba1.php"); // Envío con AJAX de texto plano
// include_once("vista/ajax_fichero1.php"); // Acceso con AJAX a fichero JSON
// include_once("vista/ajax_prueba2.php"); // Envío con AJAX para registrar/loguearte con usuario y password
const arrayRutasVistas = ["vista/ajax_prueba1.php","vista/ajax_prueba2.php","vista/ajax_fichero1.php"];




let arrayVistas; // array que almacena el codigo PHP que incluye las vistas


/*****************************
** FUNCIONES GLOBALES **
*****************************/
let f_creaCadenaOpcionesSelect; // función que devuelve una cadena con las opciones que van dentro de un elemento 'select'
let f_insertaNodoHTML; // función que inserta nodo en el DOM
let f_includeHTML_AJAX; // función que realiza la petición AJAX al servidor para incluir HTML


/*****************************
** EVENT LOAD DOM **
*****************************/
window.addEventListener("load", function(){
    
    div_cargaVista = document.querySelector("#cargaVista");
    selectorVista = document.querySelector("#selectorVista");

    // arrayVistas = new Array(f_creaVista(arrayRutasVistas[0]),f_creaVista(arrayRutasVistas[1]),f_creaVista(arrayRutasVistas[2]));

    selectorVista.insertAdjacentHTML(AFTER_BEGIN, f_creaCadenaOpcionesSelect(arrayRutasVistas));

    selectorVista.addEventListener("change",function (evento){

        // incluye la vista que seleccionemos
        f_includeHTML_AJAX(arrayRutasVistas[evento.target.value]);
    });
    
    // Al cargar la página, que cargue la vista que haya seleccionada
    f_includeHTML_AJAX(arrayRutasVistas[selectorVista.selectedIndex]);

    
});




/*****************************
** DEFINICIÓN DE FUNCIONES **
*****************************/
f_insertaNodoHTML = (p_nodoPadreHTML, p_posicion, p_cadenaNodoHijoHTML)=>{
    
    // Con esto eliminamos los nodos que haya, antes de añadir el nuevo contenido
    while(p_nodoPadreHTML.firstChild){
        p_nodoPadreHTML.firstChild.remove();
    }
    
    // Añadiendo nuevo contenido
    p_nodoPadreHTML.insertAdjacentHTML(p_posicion,p_cadenaNodoHijoHTML);
};



f_creaCadenaOpcionesSelect = (p_arrayRutasVistas)=>{
    let cadena_opcionesSelectVista= ``;
    
    p_arrayRutasVistas.forEach(function(valorActual, indice, array){
        cadena_opcionesSelectVista += `<option value="${indice}">${valorActual}</option>`;
    });

    return cadena_opcionesSelectVista;
};



f_includeHTML_AJAX = (rutaFichero)=>{
    let objetoAJAX = new XMLHttpRequest();

    // se configura la petición con el servidor
    let method = 'GET';
    let urlFichero = rutaFichero;
    let async = true;
    objetoAJAX.open(method,urlFichero,async);

    // se activa la escucha sobre la petición, esperando respuesta del servidor
    objetoAJAX.addEventListener("readystatechange", function(){
        if(this.readyState == 4){ // petición finalizada y respuesta lista
            if(this.status == 200){ // Estado de la petición HTTP OK
                f_insertaNodoHTML(div_cargaVista,AFTER_BEGIN, this.responseText);
            }else{
                window.alert(`Algo ha salido mal. this.status: ${this.status} - ${this.statusText}`);
                console.error(`Algo ha salido mal. this.status: ${this.status} - ${this.statusText}`)
            }
        }
    });

    objetoAJAX.getResponseHeader("content-type");

    // se envía la petición, en este caso al ser un fichero, se hará con el método 'GET'
    objetoAJAX.send();

}
