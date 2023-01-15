

function f_principal(p_objeto_datos, p_operacion, p_f_funcionGestionadora) {

    setTimeout(function () {
        let resultado_final; // variable que tendrá el resultado final

        // la funcion gestionadora cogerá el objeto de datos y te devolverá un resultado
        resultado_final = p_f_funcionGestionadora(p_objeto_datos, p_operacion);
        console.log(`El resultado final: ${resultado_final}`);
    }, 500);

}


function f_funcionGestionadora(p_objeto_datos, p_operacion) {
    let respuesta;
    if (p_operacion == '+') {
        respuesta = f_suma(p_objeto_datos.op1, p_objeto_datos.op2)
    } else if (p_operacion == '-') {
        respuesta = f_resta(p_objeto_datos.op1, p_objeto_datos.op2)
    }

    return respuesta;
}

function f_suma(op1, op2) {
    return op1 + op2;
}

function f_resta(op1, op2) {
    return op1 - op2;
}

let objeto = {
    op1: 2,
    op2: 5
};

f_mensaje_temporizado();
f_principal(objeto, '+', f_funcionGestionadora);

function f_mensaje_temporizado() {

    let milisegundos = (Math.random() * 1000).toFixed(2);
    window.setTimeout(function () {
        console.log(`Ejecuta código a los ${milisegundos} milisegundos`);
    }, milisegundos);

}