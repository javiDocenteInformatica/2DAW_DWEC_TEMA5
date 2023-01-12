<?php

// IMPORTS
include_once("../depuracion.php");

$usuario_logueado = false;
$image_path = "null";

$usuario_check = "javi";
$password_check = "0000";


if ($_SERVER['REQUEST_METHOD'] == "POST") {

    // print_r($_POST);
    // Creamos variables por cada elemento asociativo del array $_POST
    // AYUDA: https://willi.am/blog/2009/01/14/converting-php-associative-arrays-to-variables/
    foreach ($_POST as $key => $value) {
        ${'post_' . $key} = $value;
    }

    if (isset($_POST["usuario"]) && isset($_POST["password"])) {
        $post_usuario = $_POST["usuario"];
        $post_password = $_POST["password"];

        if ($post_usuario === $usuario_check && $post_password === $password_check) {
            $usuario_logueado = true;
        } else {
            $usuario_logueado = false;
        }

    }

    // NOS FALTA TRATAR LA IMAGEN Y ENVIARSELA AL CLIENTE PARA QUE SE MUESTRE
    require_once("controlador_files.php");

}

// echo "FUNCIONA <br>";

?>
<br>
<?php
if ($usuario_logueado) {
    require_once('../../vista/respuesta_vista_login_correcto.php');
} else {
    require_once('../../vista/respuesta_vista_login_incorrecto.php');
}

?>