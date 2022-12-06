// * VARIABLES GLOBALES
let input_usuario; // obtiene el input del usuario
let btn_enviar; // obtiene el botón para enviar datos al servidor
let contenedor_ajax; // obtiene el div que contiene la información de ajax_prueba1.html

let obj_comprobacionCampos; // Objeto que almacena la comprobación exitosa o no de los campos que se van a enviar

let html_respuestaServidor; // obtiene el párrafo donde se almacenará el resultado

// * FUNCIONES GLOBALES
let f_cuentaCamposAEnviar; // función que calcula los elementos que van a ser enviados; Esto es necesario para luego comprobar los campos y validarlos.
let f_compruebaCampos; // función que comprueba los campos con expresiones regulares (RegEx)
let f_cargaDatos; // función que nos permite traernos datos del servidor con AJAX

/* ******************************************************************** */
/* ******************************************************************** */
/* ******************************************************************** */

/* 
******************
* LOAD DOCUMENTO *
******************
*/
// Espera a que cargue el contenido del HTML
window.addEventListener("load", ()=>{

    /**
    ** RECUPERA ELEMENTOS DEL DOM
    **/
    // Elemento HTML que contiene todos los campos de un formulario (sin <form>)
    contenedor_ajax = document.querySelector("#contenedor_ajax");

    // Campos del Formulario (sin <form>)
    input_usuario = document.querySelector("#input_usuario");
    input_password = document.querySelector("#input_password");
    btn_enviar = document.querySelector("#btn_enviar"); // botón que realiza la petición AJAX al servidor


    /**
     **  EVENTOS ESCUCHA 
     **/
    // * EVENTO CLICK - PARA BOTONES
    contenedor_ajax.addEventListener("click", function(evento){
        
        evento.stopPropagation(); //Para (STOP) el evento de BURBUJEAR (BUBBLING) hacia arriba

        if(evento.target == btn_enviar){
            i = 0; // Volvemos a 0; tras haber pasado el filtro los datos que han sido comprobados

            f_cargaDatos();
        }
    } ,false); //con false usamos bubbling; por defecto está a false (ver más en Webgrafia.html)


    // * EVENTO CHANGE - PARA CAMPOS INPUT
    contenedor_ajax.addEventListener("change", function(evento){
        
        evento.stopPropagation(); //Para el evento de BURBUJEAR (BUBBLING) hacia arriba

        // Menos el botón de enviar, el resto deben ser campos a comprobar antes de ser enviados al servidor.
        if(evento.target !== btn_enviar){

            // Comprueba el campo pasado por parámetro
            f_compruebaCampos(evento.target);

            Object.keys(obj_comprobacionCampos).forEach(function(valorActual, indice, array){
                if(obj_comprobacionCampos[valorActual] === false){
                    console.log(`obj_comprobacionCampos[${valorActual}] === false`);
                    
                    // El botón de 'Enviar' debe seguir deshabilitado si algún campo no se ha validado
                    btn_enviar.disabled = true;

                    // Si algún campo no pasa la comprobación, el 'forEach' se detiene aquí (ya no se comprueban más campos, puesto que si un campo no pasa la comprobación, ya no tiene sentido seguir)
                    return; 
                }
                                
                // CONSOLE: recorremos el objeto que contiene los booleanos de comprobación de cada campo a enviar
                console.log(valorActual, obj_comprobacionCampos[valorActual]);

                // Si el código llega hasta aquí, es que ha validado todos los campos, y ya podemos habilitar el botón de 'Enviar' al servidor
                btn_enviar.disabled = false;
            });

        }
    } ,false); //con 'false' usamos 'bubbling' (de dentro hacia fuera); por defecto está a false (ver más en Webgrafia.html); 'true' sería 'capture' que es lo contrario a 'bubbling' (de fuera hacia dentro)




    // * Ejecuta FUNCIÓN *
    // Cuenta campos a enviar al servidor y almacena una variable booleana por cada uno de ellos. 'false' si el campo no es válido y 'true' si lo es
    obj_comprobacionCampos = f_cuentaCamposAEnviar();
    
    // CONSOLE: Comprobamos tamaño del objeto de comprobación
    // console.log(`obj_comprobacionCampos.length: `,`${Object.keys(obj_comprobacionCampos).length}`);

});






/* ******************************************************************** */
/* ******************************************************************** */
/* ******************************************************************** */



/*
*******************************
* Definición de FUNCIONES
*******************************
*/


/* FUNCIÓN f_cuentaCamposAEnviar: 
* Cuenta los campos que van a ser enviados al servidor y carga el 'obj_comprobacionCampos' que guarda en cada posición true/false dependiendo si el campo ha sido validado o no.
*/
f_cuentaCamposAEnviar = function(){

    let obj_comprobacionCampos = {}; // Inicializa el objeto para poder utilizarlo y rellenarlo

    // Cuenta los datos que se van a enviar al servidor
    Array.from(contenedor_ajax.children).forEach(function(valorActual, indice, array){
        
        if(valorActual.nodeName == "INPUT"){
            // Añade la comprobación de dicho campo a 'false' por defecto, si el campo pasa el filtro de comprobación entonces será 'true'
            obj_comprobacionCampos[valorActual.id] = false;

            // CONSOLE: Comprobamos que se va almacenando en el objeto de comprobación
            // console.log(`obj_comprobacionCampos['${valorActual.id}']: `,`${obj_comprobacionCampos[valorActual.id]}`);
            
        }
    });

    return obj_comprobacionCampos;
}


/* FUNCIÓN f_compruebaCampos: 
* función que comprueba cada campo a enviar y que si es válido modificará a 'true' su valor en la posición del array 'obj_comprobacionCampos' correspondiente
*/
f_compruebaCampos = function(p_elementoHTML){

    let regex = / /; // variable que almacena la expresion regular a comprobar
    
    // campo USUARIO
    if(p_elementoHTML == input_usuario){

        // Expresión Regular que valida el campo de USUARIO
        regex = /^[a-zA-Z](.*)[a-zA-Z0-9_-]{2,20}$/gm;

    // campo PASSWORD
    }else if(p_elementoHTML == input_password){

        // Expresión Regular que valida el campo de USUARIO
        regex = /^[a-zA-Z0-9_-ñ¿?.@$#]{4,12}$/gm;

    }

    // Por si acaso, comprobamos que la expresión regular no sea vacía
    if(regex == / /){
        console.error(`f_compruebaCampos -> regex -> ${regex}`);
        return;
    }

    // Almacenamos el booleano que se genera al ejecutar la expresión regular sobre el campo a validar
    obj_comprobacionCampos[p_elementoHTML.id] = regex.test(p_elementoHTML.value); 

    // Si se valida la expresión regular...
    if(obj_comprobacionCampos[p_elementoHTML.id]){
        p_elementoHTML.classList.remove("no_valido");
        p_elementoHTML.classList.add("valido");

    }else{ // Si no... 
        p_elementoHTML.classList.remove("valido");
        p_elementoHTML.classList.add("no_valido");
    }

};


/* FUNCIÓN f_cargaDatos: 
* función que utiliza AJAX para enviar y recibir datos del servidor.
*/
f_cargaDatos = function (){

    /*
    * Creamos el objeto para gestionar la petición AJAX 'XMLHttpRequest'
    */
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
    let method = "POST";
    let url = `controlador/ajax_prueba2.php`;
    console.log(url);

    /*
    * CONFIGURAMOS LA PETICIÓN ANTES DE ENVIARLA
    */
    objetoAJAX.open(method,url); //objetoAJAX.open(method,url,async,user,psw);
    
    // --------------------------------------

    /*
    * EL CLIENTE PERMACENECE A LA ESCUCHA, ESPERANDO RESPUESTA DEL SERVIDOR 
    */
    /*
     * IMPORTANTE: La escucha hay que hacerla antes del SEND(). Puede estar antes o después del open, pero siempre antes de enviar la petición. 
     */
    objetoAJAX.addEventListener('load', function(){ //NOTA: No le gusta la función flecha '()=>'
    
        /**
         * objetoAJAX.readyState: "4 => solicitud finalizada y respuesta lista"
         * objetoAJAX.status: "200 => OK" 
         */

        // Obtenemos el elemento HTML que almacenará la respuesta
        html_respuestaServidor = document.querySelector("#respuestaServidor");
            
        // Si es nulo o está indefinido, deberemos insertarlo en el HTML
        if(html_respuestaServidor === null || html_respuestaServidor === undefined){
            
            // Insertamos la respuesta al final del div contenedor 
            contenedor_ajax.insertAdjacentHTML("beforeend",`<p id="respuestaServidor">${this.responseText}</p>`);

        }else{// Si no, sólo tenemos que cambiar su contenido.
            
            html_respuestaServidor.innerHTML = this.responseText;
        }
    });


    // --------------------------------------
    
    /* 
    * SE ENVÍA LA PETICIÓN AL SERVIDOR
    */

    // Preparando los datos a enviar por método POST
    let datosPOST = `${input_usuario.getAttribute("name")}=${input_usuario.value}&${input_password.getAttribute("name")}=${input_password.value}`;
    
    objetoAJAX.send(datosPOST); // Envío POST

    // --------------------------------------
      
};

// console.log(f_cargaDatos);