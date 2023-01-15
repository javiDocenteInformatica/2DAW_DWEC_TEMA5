/**
 * 
 * USO DE LLAMADAS 'CALLBACKS'
 *  
 */

// CARGA MODULOS
import * as FormularioJS from './formulario.js';


/////////////////////////////////////////////////////
// ** EVENTO 'LOAD': SE EJECUTA CUANDO CARGA EL DOCUMENTO HTML COMPLETO
/////////////////////////////////////////////////////
window.onload = function (evento) {


    let formHTML = document.querySelector("#form_login");
    let divRespuesta = document.querySelector("#resultado");


    /////////////////////////////////////////////////////
    //** EVENTO 'SUBMIT' DEL FORMULARIO **
    /////////////////////////////////////////////////////
    formHTML.addEventListener("submit", function (evento) {

        // prevengo el evento para que no se envie el formulario
        evento.preventDefault();

        // Obtenemos los valores del formulario
        let formData = new FormData(formHTML)


        // Devuelve 'true' si los campos del formulario están bien rellenos
        let estaFormularioOK = FormularioJS.f_comprueba_formulario(formData);


        if (estaFormularioOK) {

            let respuesta = f_cliente_envia_datos_al_controlador_y_espera_respuesta(formData);

            // Esta función coge los datos que ha recibido del controlador (servidor) y ejecuta la función 'f_respuestaOK' si los datos han venido correctamente del servidor, y si no, ejecuta la función 'f_respuestaKO'
            f_cliente_gestiona_datos_recibidos_del_controlador(respuesta, f_respuestaOK, f_respuestaKO);


            divRespuesta.innerHTML += `<h1 style="color: green;">El formulario se ha enviado correctamente</h1>`;

        } else {
            divRespuesta.innerHTML += `<h1 style="color: red;">El formulario no se puede enviar porque los datos no están correctos</h1>`;
        }

    });
    /////////////////////////////////////////////////





}




///////////////////////////////////////////
// ** CLIENTE  **
///////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
// CLIENTE - ENVÍA LOS DATOS AL SERVIDOR
/////////////////////////////////////////////////////////////////////////////
function f_cliente_envia_datos_al_controlador_y_espera_respuesta(p_formData) {
    let respuesta_del_controlador;

    // AQUÍ TENDREMOS QUE GESTIONAR LA ASINCRONÍA, PUESTO QUE EL SERVIDOR TARDA TIEMPO EN RESPONDER
    respuesta_del_controlador = f_controlador_recibe_datos_y_envia_respuesta_al_cliente(p_formData);

    return respuesta_del_controlador;


}


// CLIENTE - GESTIÓN DE LA RESPUESTA RECIBIDA POR EL SERVIDOR


function f_respuestaOK(p_datosRecibidos) {

    divRespuesta.innerHTML = p_datosRecibidos;
}

function f_respuestaKO() {
    divRespuesta.innerHTML = `
    <h1 style="backgound-color: red;color: white;">Error, hubo algún problema en el servidor y no se recibieron datos</h1>
    `;
}

//////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////
// ** SERVIDOR - CONTROLADOR  **
///////////////////////////////////////////

// Esta función simula que el controlador ha recibido los datos, realiza acciones con ellos, y devuelve una respuesta al cliente (HTML)
// Este sería como el código que realizas en el controlador (PHP)
function f_controlador_recibe_datos_y_envia_respuesta_al_cliente(p_formDataRecibido) {

    // setTimeout(): https://www.w3schools.com/jsref/met_win_settimeout.asp
    // Con esta función simulamos lo que tarda el servidor en contestar al cliente.
    window.setTimeout(function () {

        let respuesta =
            `
            <p style="background-color: red; color: white;"> 
                Los datos del formulario que ha recibido el controlador están vacíos
            </p>
        `;
        // comprobamos que los campos recibidos en el controlador no sean vacios (aquí irian las comprobaciones que estimes oportundas)
        if (p_formDataRecibido.get(FormularioJS.NAME_USUARIO).length != 0
            &&
            p_formDataRecibido.get(FormularioJS.NAME_PASSWORD).length != 0) {

            respuesta =
                `
                <p style="background-color: green; color: white;">
                    Te has logueado con éxito!!
                </p>
                `;
        }

        return respuesta;

    }, 3000);// 3 segundos esperando


}