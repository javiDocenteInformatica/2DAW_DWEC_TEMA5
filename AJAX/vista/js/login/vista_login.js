// IMPORTS
import * as Debug from '../depuracion.js';

const url = "controlador/login/controlador_login.php";



// load DOM
window.addEventListener("load", function (evento) {

    let form_login = document.querySelector("#form_login");
    let div_respuesta_ajax = document.querySelector("#respuesta_ajax");

    form_login.action = url; // aquí añadimos la url a la que envía la petición

    // EVENTO CLICK 'ENVIAR'
    form_login.addEventListener("submit", function (evento) {

        // consolaText(evento.target);

        // previene que se envíe el formulario por defecto al pulsar 'submit'
        evento.preventDefault();


        /** XMLHttpRequest **/
        usa_XMLHttpRequest(form_login, div_respuesta_ajax);

        /** FETCH - THEN - CATCH **/
        // usa_fetch_form(form_login, div_respuesta_ajax);
        // usa_fetch_json(form_login, div_respuesta_ajax);

        /** ASYNC - AWAIT **/
    });

});


// XMLHttpRequest
function usa_XMLHttpRequest(form_login, div_respuesta_ajax) {

    /* CREACIÓN DE OBJETO AJAX */
    let peticionAjax = new XMLHttpRequest();


    /* MODO ESCUCHA - DEBE HACERSE ANTES DE ENVIAR LA PETICIÓN */
    peticionAjax.addEventListener("readystatechange", function () {




        // Si todo ha ido correcto
        if (this.readyState == 4 && this.status == 200) {
            div_respuesta_ajax.innerHTML = this.responseText;
        } else {

            //window.location.href='./vista/respuesta_vista_login_incorrecto.php';

            div_respuesta_ajax.innerHTML =
                `
                <p>Estado de la petición AJAX: ${this.readyState}</p>
                <p>Estado de la respuesta del Servidor: ${this.statusText} - ${this.status}</p>
                `;
        }

        // muestra todas las cabeceras HTTP de la respuesta
        // consolaObject(this.getAllResponseHeaders());

    });

    /* CONFIGURACIÓN DE LA PETICIÓN */
    peticionAjax.open(
        form_login.method/* method */,
        form_login.action /* url */,
        true /* async=true */
    );




    /* ENVÍO DE LA PETICIÓN */


    // AYUDA: 
    // PHP Headers: https://www.geeksforgeeks.org/http-headers-content-type/
    // FormData: https://developer.mozilla.org/es/docs/Web/API/FormData
    let formData = new FormData(form_login);
    // envío de la petición
    peticionAjax.send(formData);

    console.log(typeof formData.entries());
    Debug.consolaObject(formData.entries());




}



// FETCH
function usa_fetch_form(form_login, div_respuesta_ajax) {

    /*
    // Fetch API : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      */

    // FormData API: https://developer.mozilla.org/es/docs/Web/API/FormData
    let formulario = new FormData(form_login);
    consolaObject(formulario); // Es un: object 'FormData'


    fetch(p_url, {
        method: p_metodo,
        /*headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },*/
        body: formulario
    })
        .then(function (response) {
            if (!response.ok) { // Si hubo un problema en la respuesta desde el SERVIDOR
                throw new Error(`
                <h3>Status:</h3>
                <p>${response.status}</p>
                <h3> Status Text:</h3>
                <p>${response.statusText}</p>
                `);
            } else {
                console.log(response); // Es un: object 'Response'

                return response.text();
            }


        })
        .then(function (datos) {
            consolaText(datos); // Es un: string
            p_htmlRespuesta.innerHTML += `<p>${datos}</p>`;
        })
        .catch(function (error) {
            p_htmlRespuesta.innerHTML += `<p>${error}</p>`;
        })
        ;



}


function usa_fetch_json(form_login, div_respuesta_ajax) {

    /*
    // Fetch API : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      */

    let formData = new FormData(form_login);

    //console.log(JSON.stringify(formData));

    fetch(p_url, {
        method: p_metodo,
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(objetoDatos)
    })
        .then(function (response) {
            if (!response.ok) { // Si hubo un problema en la respuesta desde el SERVIDOR
                throw new Error(`
                <h3>Status:</h3>
                <p>${response.status}</p>
                <h3> Status Text:</h3>
                <p>${response.statusText}</p>
                `);
            } else {
                console.log(response); // Es una: Response
                return response.text();
            }


        })
        .then(function (datos) {
            consolaText(datos); // Es una: 
            p_htmlRespuesta.innerHTML += `<p>${datos}</p>`;
        })
        .catch(function (error) {
            p_htmlRespuesta.innerHTML += `<p>${error}</p>`;
        })
        ;


}



// ASYNC - AWAIT
function usa_async_await() {

}


