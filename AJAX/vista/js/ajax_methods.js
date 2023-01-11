
const url = "./controlador/controlador_ajax_methods.php";

// load DOM
window.addEventListener("load", function (evento) {

    let btn_enviar = document.querySelector("#btn_enviar");
    let input_usuario = document.querySelector("#input_usuario");
    let respuesta_servidor = document.querySelector("#respuesta_servidor");


    // EVENTO CLICK 'ENVIAR'
    btn_enviar.addEventListener("click", function (evento) {

        /** XMLHttpRequest **/
        // usa_XMLHttpRequest(input_usuario, url, "POST", respuesta_servidor);

        /** FETCH - THEN - CATCH **/
        // usa_fetch_json(input_usuario, url, "POST", respuesta_servidor);
        usa_fetch_form(input_usuario, url, "POST", respuesta_servidor);

        /** ASYNC - AWAIT **/
    });

});


function usa_XMLHttpRequest(p_htmlDatos, p_url, p_metodo, p_htmlRespuesta) {

    /* CREACIÓN DE OBJETO AJAX */
    let peticionAjax = new XMLHttpRequest();

    /* MODO ESCUCHA - DEBE HACERSE ANTES DE ENVIAR LA PETICIÓN */
    peticionAjax.addEventListener("readystatechange", function () {

        // Si todo ha ido correcto
        if (this.readyState == 4 && this.status == 200) {
            p_htmlRespuesta.innerHTML = `<p>${this.responseText}</p>`;
        } else {
            p_htmlRespuesta.innerHTML =
                `
                <p>Estado de la petición AJAX: ${this.readyState}</p>
                <p>Estado de la respuesta del Servidor: ${this.statusText} - ${this.status}</p>
                `;
        }

        // muestra todas las cabeceras HTTP de la respuesta
        console.log(`%c${this.getAllResponseHeaders()}`, `color:yellow`);

    });

    /* CONFIGURACIÓN DE LA PETICIÓN */
    peticionAjax.open(
        p_metodo/* method */,
        p_url /* url */,
        true /* async=true */
    );




    /* ENVÍO DE LA PETICIÓN */

    // Antes de enviar la petición podemos incluso cambiar las cabeceras http 
    // por defecto el Content-Type: 'text/html; charset=utf-8'
    // AYUDA: https://www.geeksforgeeks.org/http-headers-content-type/

    if (p_metodo == "POST") {

        // Para POST necesitamos: Content-Type: application/x-www-form-urlencoded --> Si no, no se enviarán los datos
        peticionAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        // se envia la petición
        let datosEnvio = `${p_htmlDatos.name}=${p_htmlDatos.value}`;
        console.log(datosEnvio);

        // envío de la petición
        peticionAjax.send(datosEnvio);

    } else if (p_metodo == "GET") {
        peticionAjax.setRequestHeader("Content-Type", "text/html;charset=utf-8");

        // envío de la petición
        peticionAjax.send();
    }



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


