// Espera a que el DOM se cargue por completo
window.onload = function () {


    // Obtenemos elementos del DOM
    let btnListaUsuarios = document.querySelector('[name="btn_lista_usuarios"]');
    let divListaUsuarios = document.querySelector('#div_lista_usuarios');


    // Evento 'click' del botón que listará los usuarios recibidos del servidor
    btnListaUsuarios.addEventListener('click', function (evento) {


        // Comprobaciones de los campos
        // -> en mi caso no tengo que comprobar nada

        // petición al servidor con AJAX
        let datosAEnviar = new FormData(); // FormData: https://udn.realityripple.com/docs/Web/API/FormData/Using_FormData_Objects
        datosAEnviar.append('accion', 'listarTodos');
        usaAjax(datosAEnviar, divListaUsuarios);


    });




}

// FUNCIÓN PARA AJAX
const usaAjax = function (datosAEnviar, elementoDondeEscribeRespuestaDelServidor) {


    // 1. Creamos objeto XMLHttpRequest
    let peticionAjax = new XMLHttpRequest(); //XMLHttpRequest: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest


    // 2. Configuramos objeto XMLHttpRequest
    peticionAjax.open('POST', 'controlador/controladorListarDatosUsuario.php');

    // 3. Nos ponemos a escuchar al Servidor, esperando su respuesta
    peticionAjax.onreadystatechange = function (evento) {

        // Si todo ha ido => OK 
        if (this.readyState == 4 && this.status == 200) {// Aquí debéis comentar para que es 'readyState' y para que 'status'

            let respuestaServidor = this.responseText; // XMLHttpRequest.responseText: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText


            let objetoRespuestaServidor; // variable para guardar como Objeto JS la respuesta que viene como JSON
            objetoRespuestaServidor = JSON.parse(respuestaServidor);

            // debug
            // depuraRespuestaServidor(objetoRespuestaServidor);

            /* PROCESANDO RESPUESTA...*/
            if (Object.keys(objetoRespuestaServidor).length == 0) {
                obtieneDocVista('../AJAX_LISTAR/vista/vista_listar_vacio.php', elementoDondeEscribeRespuestaDelServidor);

            } else {
                let representacionHTMLObjeto = ``;

                // Faltaría recorrer bien el objecto para mostrarlo
                Object.values(objetoRespuestaServidor).forEach(function (valor, indice, array) {
                    representacionHTMLObjeto += `
                        <p>${array[indice]['nombre']}</p>
                    `;


                });
                elementoDondeEscribeRespuestaDelServidor.insertAdjacentHTML('afterbegin', representacionHTMLObjeto);

            }




        } else if (this.readyState = 4 && this.status != 200) {
            // Algo ha ocurrido con la respuesta del Servidor
        }
    }

    // 4. Enviamos los datos al Servidor
    peticionAjax.send(datosAEnviar);




};

const obtieneDocVista = function (urlDocVista, elementoPadre) {

    let codigoHTML = '';

    // 1. Creamos objeto XMLHttpRequest
    let peticionAjax = new XMLHttpRequest(); //XMLHttpRequest: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest


    // 2. Configuramos objeto XMLHttpRequest
    peticionAjax.open('GET', urlDocVista);

    // 3. Nos ponemos a escuchar al Servidor, esperando su respuesta
    peticionAjax.onreadystatechange = function (evento) {

        // Si todo ha ido => OK 
        if (this.readyState == 4 && this.status == 200) {// Aquí debéis comentar para que es 'readyState' y para que 'status'

            codigoHTML = this.responseText;

            elementoPadre.insertAdjacentHTML('afterbegin', codigoHTML);

        } else if (this.readyState = 4 && this.status != 200) {
            // Algo ha ocurrido con la respuesta del Servidor
        }
    }

    // 4. Enviamos los datos al Servidor
    peticionAjax.send();
}


// FUNCIONES PARA DEPURAR (comentar cuando ya no hagan falta)
const depuraRespuestaServidor = function (respuesta) {
    console.log(`tipo de la respuesta: ${typeof respuesta}`)
    if (respuesta instanceof Object) {
        console.log(Object.getPrototypeOf(respuesta).constructor.name); // Obtiene el tipo específico de la variable 'respuesta'
    }
    try {
        console.log(`usando eval(): ${eval(respuesta)}`);
    } catch (err) {
        console.log(`Error al realizar eval(): ${err}`);
    }

    console.log(`respuesta: ${(respuesta)}`);
}

