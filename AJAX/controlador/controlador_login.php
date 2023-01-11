<?php

$usuario_logueado = false;
$usuario = "null";
$password = "null";
$file = "null";

$usuario_check = "javi";
$password_check = "0000"; 


if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST["usuario"]) && isset($_POST["password"])) {
        $usuario = $_POST["usuario"];
        $password = $_POST["password"];

        if($usuario === $usuario_check && $password === $password_check){
            $usuario_logueado = true;
            echo "FUNCIONA <br>";
        }else{
            $usuario_logueado = false;
        }
        
    }
} 

// echo "FUNCIONA <br>";

?>

<?php
if($usuario_logueado){
    require_once('../vista/respuesta_vista_login_correcto.php');    
}else{
    require_once('../vista/respuesta_vista_login_incorrecto.php');    
}

?>