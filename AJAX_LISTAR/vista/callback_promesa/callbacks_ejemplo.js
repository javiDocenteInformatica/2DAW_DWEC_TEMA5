
function operacion(num1, num2, op) {
    let respuesta;
    // window.setInterval(function () {
    respuesta = op(num1, num2);
    if (respuesta != null) {
        console.log(respuesta);
        // clearInterval(this);
    } else {
        console.log("respuesta aún no está");
    }

    // }, 1000);

}


// funcion asincrona
function suma(num1, num2) {
    // window.setTimeout(function () {
    return num1 + num2;
    // }, 500);

}

function resta(num1, num2) {
    return num1 - num2;
}


operacion(1, 3, suma);
operacion(1, 3, resta);

