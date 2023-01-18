<?php
// IMPORTS
include_once('../../controlador\utiles\utiles.php');
?>

<?php
// echo 'Aquí se debe leer todos los usuarios del fichero JSON que hace de DB';

// dibuja($listaUsuariosJSON);

// LEER FICHERO JSON
// https://ejemplocodigo.com/ejemplo-php-crear-y-leer-archivo-json/

$datosFichero = file_get_contents($rutaFichero); // obtengo el contenido del fichero
$datosJSON = json_decode($datosFichero, true); //convierto el contenido JSON del fichero a un objeto/variable PHP

// dibuja($datosJSON);

?>

<!-- VISTA -->
<?php
// require_once('../../vista/db/vista_db.php');
?>
<!-- VISTA -->

<br>
<button onclick="window.location.href='http://localhost/2DAW_DWEC_TEMA5/AJAX/vista/db/vista_db.php/todos'">Muestra datos de mi usuario</button>

<?php


?>