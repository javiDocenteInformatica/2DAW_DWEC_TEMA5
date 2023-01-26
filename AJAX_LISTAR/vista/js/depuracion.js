export function consolaText(titulo, texto) {
    if (texto != null) {
        console.log(`%c ${titulo}`, "color: orange");

        console.log(`%c ${mensaje}`, "color: #a2d2ff");

        console.log("\n");
    }

}

export function consolaArray(titulo, array) {
    if (array != null) {
        console.log(`%c ${titulo}`, "color: orange");

        array.forEach(function (valor, clave, array) {
            console.log(`%c [${clave}] => ${valor}`, "color: #e9c46a");
        });


        console.log("\n");
    }

}

export function consolaObject(titulo, objeto) {
    if (objeto != null) {
        console.log(`%c ${titulo}`, "color: orange");

        for (let [clave, valor] of Object.entries(objeto)) {
            console.log(`%c [${clave}] => ${valor}`, "color: #f1c0e8");
        };

        console.log("\n");
    }
}

// EXPORT
// export { consolaText, consolaArray, consolaObject }; 