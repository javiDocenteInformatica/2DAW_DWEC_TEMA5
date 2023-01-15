// CONSTANTES
export const NAME_USUARIO = "usuario";
export const NAME_PASSWORD = "password";

/////////////////////////////////////////////////////
// COMPRUEBA EL FORMULARIO PARA VER SI TODO ESTÁ 'OK'
/////////////////////////////////////////////////////

// Devuelve verdadero si el formulario está correcto, falso en caso contrario
export function f_comprueba_formulario(p_formData) {
    // depuracion
    console.log(`campo usuario: ${p_formData.get(NAME_USUARIO)}`);
    console.log(`campo password: ${p_formData.get(NAME_PASSWORD)}`);

    if (f_compruebaUsuario(p_formData.get(NAME_USUARIO)) && f_compruebaPassword(p_formData.get(NAME_PASSWORD))) {
        return true;
    }
    return false;
}

function f_compruebaUsuario(p_usuarioValor) {
    if (p_usuarioValor.length == 0) {
        return false;
    }
    return true;
}

function f_compruebaPassword(p_passwordValor) {
    if (p_passwordValor.length == 0) {
        return false;
    }
    return true;
}
/////////////////////////////////////////////////////
