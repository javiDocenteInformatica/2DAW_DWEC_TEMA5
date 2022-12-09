<?php
// echo "<pre>";
// echo $_SERVER["REQUEST_METHOD"];
// echo "</pre>";

// VARIABEL GLOBAL AL DOCUMENTO
$usuario=""; // Almacena el nombre de usuario
$password=""; // Almacena la contraseña
$mensaje=""; // Almacena el mensaje a mostrar

if($_SERVER["REQUEST_METHOD"] == "POST"){

    // var_dump($_POST);

    if(isset($_POST['name_usuario'])){
        $usuario = $_POST['name_usuario'];
    }else{
        $usuario = 'El usuario no ha sido rellenado';
    }

    if(isset($_POST['name_password'])){
        $password = $_POST['name_password'];
    }else{
        $password = 'La contraseña no ha sido rellenada';
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
