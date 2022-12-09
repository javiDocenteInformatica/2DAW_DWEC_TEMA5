<?php
// echo "<pre>";
// echo $_SERVER["REQUEST_METHOD"];
// echo "</pre>";

// VARIABEL GLOBAL AL DOCUMENTO
$usuario; // Almacena el nombre de usuario
$password; // Almacena la contraseña
$mensaje; // Almacena el mensaje a mostrar

if($_SERVER["REQUEST_METHOD"] == "GET"){
    
}else if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(isset($_POST['name_usuario'])){
        $usuario = $_POST['name_usuario'];
    }else if(isset($_POST['name_password'])){
        $password = $_POST['name_password'];
    }
}

$mensaje = "Usuario: $usuario; Contraseña: $password";

// echo "<pre>";
// echo print_r($_SERVER);
// echo "</pre>";

?>

<?php 
if(isset($mensaje)){
    echo $mensaje;
}
?> 
