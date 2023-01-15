

function suma(num1, num2) {
    return num1 + num2;
}


let p = new Promise(function (f_resolve, f_reject) {

    let resultado = suma(Math.random() * 5, Math.random() * 5);
    let limite = 5;

    if (resultado > limite) {
        f_resolve("El resultado es mayor que el limite");
    } else {
        f_reject("El resultado es menor o igual que el limite")
    }
});

p
    .then(function (mensaje) {
        console.log("CORRECTO: " + mensaje);
    })
    .catch(function (error) {
        console.log("ERROR: " + error);
    });