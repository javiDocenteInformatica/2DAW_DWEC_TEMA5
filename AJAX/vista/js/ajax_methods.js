//const url = "controlador/controlador_ajax_methods.php";
const configPeticion = {
    url: "./controlador/controlador_ajax_methods.php",
    method: "POST",
    async: true
};

// load DOM
window.addEventListener("load", function (evento) {

    let btn_enviar = document.querySelector("#btn_enviar");
    let input_usuario = document.querySelector("#input_usuario");
    let respuesta_servidor = document.querySelector("#respuesta_servidor");


    btn_enviar.addEventListener("click", function (evento) {
        usa_XMLHttpRequest(input_usuario, configPeticion, respuesta_servidor);
    });


});


function usa_XMLHttpRequest(p_htmlDatos, p_configPeticion, p_htmlRespuesta) {

    // crea el objeto de petición ajax
    let peticionAjax = new XMLHttpRequest();



    // se configura la petición
    peticionAjax.open(p_configPeticion.method, p_configPeticion.url, p_configPeticion.async);


    // modo escucha
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
        console.log(`%c ${this.getAllResponseHeaders()}`, `color: red`);

    });


    // Antes de enviar la petición podemos incluso cambiar las cabeceras http 
    // por defecto el Content-Type: 'text/html; charset=utf-8'
    // AYUDA: https://www.geeksforgeeks.org/http-headers-content-type/

    // Para POST necesitamos: Content-Type:  --> Si no, no se enviarán los datos
    peticionAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // se envia la petición
    let datosEnvio = `${p_htmlDatos.name}=${p_htmlDatos.value}`;
    console.log(datosEnvio);

    if (p_configPeticion.method == "POST") {
        peticionAjax.send(datosEnvio);
    } else {
        peticionAjax.send();
    }



}


function usa_fetch(configPeticion) {
    fetch(p_configPeticion.url, configPeticion)
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


