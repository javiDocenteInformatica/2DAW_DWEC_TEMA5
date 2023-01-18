<?php
// echo 'Aquí se debe leer todos los usuarios del fichero JSON que hace de DB';

// dibuja($listaUsuariosJSON);

// LEER FICHERO JSON
// https://ejemplocodigo.com/ejemplo-php-crear-y-leer-archivo-json/

$datosFichero = file_get_contents($rutaFichero); // obtengo el contenido del fichero
$datosJSON = json_decode($datosFichero, true); //convierto el contenido JSON del fichero a un objeto/variable PHP

dibuja($datosJSON);

?>


<!-- VISTA -->
<br>
<button onclick="'http://localhost/2DAW_DWEC_TEMA5/AJAX/controlador/listarDatosUsuario.php'">Muestra datos de mi usuario</button>

<?php
function dibuja($elemento)
{
    echo '<pre>';
    echo '<br>';

    // print_r($elemento);
    // if($elemento )

    // gettype(): https://www.php.net/manual/en/function.gettype.php
    echo gettype($elemento);

    if (gettype($elemento) == 'array' || gettype($elemento) == 'object') {

    } else {

    }

    echo '<br>';
    echo '</pre>';
}

function recorre($elemento)
{
    // https://www.php.net/manual/en/function.is-array.php
    // https://www.php.net/manual/en/function.is-object.php
    if (is_array($elemento) || is_object($elemento)) {
        foreach ($elemento as [key => value]) {

        }
    } else {
        return $elemento;
    }
}

?>