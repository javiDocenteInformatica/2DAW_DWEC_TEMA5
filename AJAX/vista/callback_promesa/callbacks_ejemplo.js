// MAIN

envio_y_gestion_de_respuesta("Javi", f_gestiona_respuesta_servidor);



// CLIENTE
function envio_y_gestion_de_respuesta(datos, funcion) {

    window.setTimeout(function () {
        let respuesta = recibe_respuesta_del_controlador(datos);

        funcion(respuesta);

    }, 1500); // espera 1.5seg

    console.log(`%c Esperando datos del servidor...`, `color: yellow`);
}

function f_gestiona_respuesta_servidor(datos) {
    console.log(datos);
}



// SERVIDOR

function recibe_respuesta_del_controlador(p_datos_recibidos_del_cliente) {
    if (p_datos_recibidos_del_cliente !== null && p_datos_recibidos_del_cliente !== undefined) {

        let usuario_check = "javi";
        if (p_datos_recibidos_del_cliente.toUpperCase() === usuario_check.toUpperCase()) {
            return `%c Bienvenido: ${datos} `, `color: green`;
        } else {
            return `%c No te has logueado correctamente`, `color: red`;
        }

    } else {
        return `%c ERROR EN EL SERVIDOR`, `color: red`;
    }
}