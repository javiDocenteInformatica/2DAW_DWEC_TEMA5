// IMPORTS

// const url = "controlador/register/controlador_registro.php";



// load DOM
window.addEventListener("load", function (evento) {

    let form_registro = document.querySelector("#form_registro");
    let div_respuesta_ajax = document.querySelector("#respuesta_ajax");

    // form_registro.action = url; // aquí añadimos la url a la que envía la petición

    // EVENTO CLICK 'ENVIAR'
    form_registro.addEventListener("submit", function (evento) {

        // consolaText(evento.target);

        // previene que se envíe el formulario por defecto al pulsar 'submit'
        evento.preventDefault();

        let esValido = esFormularioValido(form_registro);

        if (esValido) {
            div_respuesta_ajax.innerHTML = `
            <p style="color:green">Todos los campos rellenos correctamente!!</p>
            `;
            // Envío la petición al servidor
            usa_fetch_form(form_registro, div_respuesta_ajax);
        } else {
            div_respuesta_ajax.innerHTML = `
            <p style="color:red">Todos los campos son obligatorios, revísalos bien!!</p>
            `;
        }


    });

});



// FETCH
function usa_fetch_form(form_login, div_respuesta_ajax) {


    // Fetch API : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // FormData API: https://developer.mozilla.org/es/docs/Web/API/FormData


    let formData = new FormData(form_login);
    // Debug.consolaObject("form_login", form_login);

    // Añado campos que necesito en el Servidor
    formData.append('esActivo', 0);
    formData.append('esAdmin', 0);

    let opciones = {
        method: form_login.method,
        /*headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },*/
        body: formData
    };

    fetch(form_login.action, opciones)
        .then(function (response) {
            return response.text();
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


function esFormularioValido(formulario) {

    let esValido = true;

    let formData = new FormData(formulario);

    for (let [clave, valor] of Array.from(formData)) {
        if (valor === null || valor === undefined || valor.length == 0) {
            esValido = false;
            break;
        }
    }

    return esValido;

}