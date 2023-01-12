
const url = "controlador/login/controlador_login.php";



// load DOM
window.addEventListener("load", function (evento) {

    let form_login = document.querySelector("#form_login");
    let div_respuesta_ajax = document.querySelector("#respuesta_ajax");

    form_login.action = url; // aquí añadimos la url a la que envía la petición

    // EVENTO CLICK 'ENVIAR'
    form_login.addEventListener("submit", function (evento) {

        console.log(evento.target);
        evento.preventDefault();


        /** XMLHttpRequest **/
        usa_XMLHttpRequest(form_login, div_respuesta_ajax);

        /** FETCH - THEN - CATCH **/
        // usa_fetch_json(input_usuario, url, "POST", respuesta_servidor);
        // usa_fetch_form(input_usuario, url, "POST", respuesta_servidor);

        /** ASYNC - AWAIT **/
    });

});


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
        // console.log(`%c${this.getAllResponseHeaders()}`, `color:yellow`);

    });

    /* CONFIGURACIÓN DE LA PETICIÓN */
    peticionAjax.open(
        form_login.method/* method */,
        form_login.action /* url */,
        true /* async=true */
    );




    /* ENVÍO DE LA PETICIÓN */


    // AYUDA: https://www.geeksforgeeks.org/http-headers-content-type/
    let formData = new FormData(form_login);
    // envío de la petición
    peticionAjax.send(formData);


    Array.from(formData.entries()).forEach(function (parKeyValue, indice, array) {
        console.log(`${parKeyValue}`);
    })




}


function usa_fetch_json(p_htmlDatos, p_url, p_metodo, p_htmlRespuesta) {

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

    let objetoDatos = {
        [p_htmlDatos.name]: p_htmlDatos.value
    };
    console.log(JSON.stringify(objetoDatos));

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
            console.log(datos); // Es una: 
            p_htmlRespuesta.innerHTML += `<p>${datos}</p>`;
        })
        .catch(function (error) {
            p_htmlRespuesta.innerHTML += `<p>${error}</p>`;
        })
        ;


}

function usa_fetch_form(p_htmlDatos, p_url, p_metodo, p_htmlRespuesta) {

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

    let formulario = new FormData();

    formulario.append(p_htmlDatos.name, p_htmlDatos.value);


    console.log(formulario); // Es un: object 'FormData'
    Array.from(formulario.entries()).forEach(function (valor, indice, array) { console.log(`${valor[0]}: ${valor[1]}`); });

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
            console.log(datos); // Es un: string
            p_htmlRespuesta.innerHTML += `<p>${datos}</p>`;
        })
        .catch(function (error) {
            p_htmlRespuesta.innerHTML += `<p>${error}</p>`;
        })
        ;



}


function usa_async_await() {

}


