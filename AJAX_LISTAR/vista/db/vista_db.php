<?php
// IMPORTS
include_once('../../controlador\utiles\utiles.php');
?>

<?php
// $_SERVER: https://www.php.net/manual/en/reserved.variables.server
// implode(): https://www.php.net/manual/en/function.implode.php
// explode(): https://www.php.net/manual/en/function.explode.php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // dibuja($_SERVER);
    $arrayPathInfo = explode('/', $_SERVER['PATH_INFO']);
    // dibuja($arrayPathInfo);

    if ($arrayPathInfo[1] == 'todos') {
        $datosFichero = file_get_contents('http://localhost/2DAW_DWEC_TEMA5/AJAX/modelo/db/db.json');
        $datosJSON = json_decode($datosFichero);
        dibuja($datosJSON);
    }
}


?>