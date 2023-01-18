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

        if (true) {
            /** XMLHttpRequest **/
            usa_XMLHttpRequest(this, div_respuesta_ajax);
        }


        /** FETCH - THEN - CATCH **/
        // usa_fetch_form(form_login, div_respuesta_ajax);
        // usa_fetch_json(form_login, div_respuesta_ajax);

        /** ASYNC - AWAIT **/
        // usa_async_await(form_login, div_respuesta_ajax)


    });

});


// XMLHttpRequest
function usa_XMLHttpRequest(form_login, div_respuesta_ajax) {

    /* CREACIÓN DE OBJETO AJAX */
    let xhr = new XMLHttpRequest();


    /* MODO ESCUCHA - DEBE HACERSE ANTES DE ENVIAR LA PETICIÓN */
    xhr.addEventListener("readystatechange", function () {




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
    xhr.open(form_login.method, form_login.action, true /* async=true */
    );




    /* ENVÍO DE LA PETICIÓN */


    // AYUDA: 
    // PHP Headers: https://www.geeksforgeeks.org/http-headers-content-type/
    // FormData: https://developer.mozilla.org/es/docs/Web/API/FormData
    let formData = new FormData(form_login);
    console.log(formData);

    // envío de la petición
    //name=usuario&password=0000&file
    xhr.send(formData);

    console.log(formData);
    // Debug.consolaObject(formData.entries());




}



// FETCH
function usa_fetch_form(form_login, div_respuesta_ajax) {


    // Fetch API : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // FormData API: https://developer.mozilla.org/es/docs/Web/API/FormData


    let formData = new FormData(form_login);
    // Debug.consolaObject("form_login", form_login);

    let opciones = {
        method: form_login.method,
        /*headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },*/
        body: formData
    };

    fetch(form_login.action, opciones)
        .then(function (response) {
            if (response.status == 200) { // Si la respuesta del servidor es correcta
                return response.text();
            } else {
                window.location.href = "./vista/Error404.html";
                return "";
            }

        })
        .then(function (datos) {
            // Debug.consolaText(datos); // Es un: string
            div_respuesta_ajax.innerHTML = datos;
        })
        .catch(function (error) {

            div_respuesta_ajax.innerHTML = error;
        })
        ;



}


function usa_fetch_json(form_login, div_respuesta_ajax) {

    // Fetch API : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // FormData API: https://developer.mozilla.org/es/docs/Web/API/FormData

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
async function usa_async_await(form_login, div_respuesta_ajax) {

    // Fetch API : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // FormData API: https://developer.mozilla.org/es/docs/Web/API/FormData
    // Promise API: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
    // Response API: https://developer.mozilla.org/es/docs/Web/API/Response
    // Request API: https://developer.mozilla.org/es/docs/Web/API/Request



    let formData = new FormData(form_login);

    let opciones = {
        method: form_login.method,
        /*headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },*/
        body: formData
    };

    try {
        let response = await fetch(form_login.action, opciones); // Recibo un objeto 'Response' que estará listo cuando la respuesta del servidor sea recibida; fetch(...) devuelve una 'Promise<Response>'
        if (response.status != 200) {
            throw new Error(`${response.status} - ${response.statusText}`)
        }
        let datosRecibidos = await response.text(); // Recibo la respuesta del objeto 'response' cuando esté lista la promesa; response.text() devuelve una 'Promise<string>'
        div_respuesta_ajax.innerHTML = datosRecibidos;
    } catch (error) {
        console.error(error);
        let response = await fetch("./vista/Error404.html");
        let datos = await response.text();
        div_respuesta_ajax.innerHTML = datos;
    }




};



/*
.then(function (response) {
        if (response.status == 200) { // Si la respuesta del servidor es correcta
            return response.text();
        } else {
            window.location.href = "./vista/Error404.html";
            return "";
        }

    })
    .then(function (datos) {
        // Debug.consolaText(datos); // Es un: string
        div_respuesta_ajax.innerHTML = datos;
    })
    .catch(function (error) {

        div_respuesta_ajax.innerHTML = error;
    })
    ;
}
*/




