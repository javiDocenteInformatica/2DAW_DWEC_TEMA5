<?php

$usuario_name = "null";

if ($_SERVER['REQUEST_METHOD'] == "POST") {


    // RECIBE JSON
    // $_POST = json_decode(file_get_contents('php://input'), true);
    // echo "<pre>" . print_r($_POST) . "</pre>";

    // RECIBE FORMULARIO
    // No habría que hacer nada más, sería igual que si lo recibes de un formulario de HTML



    if (isset($_POST["usuario_name"])) {
        $usuario_name = $_POST["usuario_name"];
    }
} else {
    // echo "aqui";
    print_r($_GET);

    if (isset($_GET["usuario_name"])) {
        $usuario_name = $_GET["usuario_name"];
    }
}






?>

<?php
require_once('../vista/vista_ajax_methods.php');
?>