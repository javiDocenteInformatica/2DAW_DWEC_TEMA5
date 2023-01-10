
const url = "/controlador/controlador_ajax_methods.php";

// load DOM
window.addEventListener("load", function (evento) {

    let btn_enviar = document.querySelector("#btn_enviar");
    let input_usuario = document.querySelector("#input_usuario");
    let respuesta_servidor = document.querySelector("#respuesta_servidor");


    btn_enviar.addEventListener("click", function (evento) {
        usa_XMLHttpRequest(input_usuario, url, "POST", respuesta_servidor);
    });

    const myHeaders = new Headers();
    console.log(myHeaders);

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


function usa_fetch(p_url, p_metodo) {
    fetch(p_url, {
        method: p_metodo,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: {

        }
    })
        .then(function (respuesta) {
            // Array.from(respuesta.body).forEach(function(elemento,indice,array){
            //     divRespuesta.innerHTML = `<p>${elemento}</p>`;    
            // });

            divRespuesta.innerHTML = `<p>${elemento}</p>`;

            console.log(respuesta);
        })
        .catch(function (error) {
            divRespuesta.innerHTML += `<p>${error}</p>`;
            divRespuesta.innerHTML += `<p>${datos}</p>`;
        })
        ;
}

function usa_async_await() {

}


