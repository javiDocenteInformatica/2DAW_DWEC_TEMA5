// VARIABLES GLOBALES
let input_usuario; // obtiene el input del usuario
let btn_enviar; // obtiene el botón para enviar datos al servidor
let contenedor_ajax; // obtiene el div que contiene la información de ajax_prueba1.html

let array_exito; // Array que almacena la comprobación exitosa o no de los campos que se van a enviar
let exitoTotal = false; // variable que calcula si todos los campos están validados correctamente.; Se inicializa a 'false' para que por defecto no se supongan validados.

let i = 0; // indice que nos servirá para comprobar cada uno de los campos que se van a enviar al servidor

let numInputs = 0; // Cuenta los campos que se van a enviar al servidor

let respuestaServidor; // obtiene el párrafo donde se almacenará el resultado

// VARIABLES FUNCIONES GLOBALES
let f_cargaDatos; // función que nos permite traernos datos del servidor con AJAX
let f_cuentaElementosAEnviar; // función que calcula los elementos que van a ser enviados; Esto es necesario para luego comprobar los campos y validarlos.
let f_compruebaCampos; // función que comprueba los campos con expresiones regulares (RegEx)



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


    
    // Cuenta elementos a enviar al servidor
    f_cuentaElementosAEnviar();


    /**
     **  EVENTOS ESCUCHA 
     **/
    // EVENTO CLICK - PARA BOTONES
    contenedor_ajax.addEventListener("click", function(evento){
        
        evento.stopPropagation(); //Para el evento de BURBUJEAR (BUBBLING) hacia arriba

        if(evento.target == btn_enviar){
            i = 0; // Volvemos a 0; tras haber pasado el filtro los datos que han sido comprobados

            f_cargaDatos();
        }
    } ,false); //con false usamos bubbling; por defecto está a false (ver más en Webgrafia.html)

    // EVENTO CHANGE - PARA CAMPOS INPUT
    contenedor_ajax.addEventListener("change", function(evento){
        
        evento.stopPropagation(); //Para el evento de BURBUJEAR (BUBBLING) hacia arriba

        // Menos el botón de enviar, el resto deben ser campos a comprobar antes de ser enviados al servidor.
        if(evento.target !== btn_enviar){

            // Comprueba el campo pasado por parámetro
            f_compruebaCampos(evento.target);

            array_exito.forEach(function(valorActual, indice, array){
                if(valorActual === false){
                    return; // para el bucle
                }


            });
            
        }

    } ,false); //con 'false' usamos 'bubbling' (de dentro hacia fuera); por defecto está a false (ver más en Webgrafia.html); 'true' sería 'capture' que es lo contrario a 'bubbling' (de fuera hacia dentro)
});



f_cuentaElementosAEnviar = function(){
    /**
     * 'exito' es un array que almacena por cada posición si ha sido validado cada campo que va a ser enviado al servidor; Cada posición indica si ha sido validado el campo (true) o no (false).
     */
    // Cuenta los datos que se van a enviar al servidor
    Array.from(contenedor_ajax.children).forEach(function(valorActual, indice, array){
        if(valorActual.nodeName == "INPUT"){
            numInputs ++;
        }
        
    });

    // 'exito' almacenará un array con los 'true' o 'false' de cada campo, para ver si han sido validados.; Al inicio, está todo a false
    for(let i=0; i < numInputs; i++){
        array_exito[i] = false;
    }
}


f_compruebaCampos = function(p_elementoHTML){

    // Comprueba campo USUARIO
    if(p_elementoHTML == input_usuario){

        // Expresión Regular que valida el campo de USUARIO
        let regex = /^[a-zA-Z](.*)[a-zA-Z0-9_-]{2,20}$/gm;

        // Si se valida la expresión regular...
        if(regex.test(input_usuario.value) === true){
            input_usuario.classList.remove("no_valido");
            input_usuario.classList.add("valido");
            
            array_exito[i] = true; // Pasa el filtro

        }else{ // Si no... 
            input_usuario.classList.remove("valido");
            input_usuario.classList.add("no_valido");
        }

    // Comprueba campo PASSWORD
    }else if(p_elementoHTML == input_password){

        // Expresión Regular que valida el campo de USUARIO
        let regex = /^[a-zA-Z0-9_-ñ¿?.@$#]{4,12}$/gm;

        // Si se valida la expresión regular...
        if(regex.test(input_password.value) === true){
            input_password.classList.remove("no_valido");
            input_password.classList.add("valido");
            
            array_exito[i] = true; // Pasa el filtro
            
        }else{ // Si no... 
            input_password.classList.remove("valido");
            input_password.classList.add("no_valido");
        }

    }

    i++; // una vez comprobado el campo, se le suma 1 para pasar al siguiente indice para almacenar el resultado de exito o no del siguiente campo


};



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
        respuestaServidor = document.querySelector("#respuestaServidor");
            
        // Si es nulo o está indefinido, deberemos insertarlo en el HTML
        if(respuestaServidor === null || respuestaServidor === undefined){
            
            // Insertamos la respuesta al final del div contenedor 
            contenedor_ajax.insertAdjacentHTML("beforeend",`<p id="respuestaServidor">${this.responseText}</p>`);

        }else{// Si no, sólo tenemos que cambiar su contenido.
            
            respuestaServidor.innerHTML = this.responseText;
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