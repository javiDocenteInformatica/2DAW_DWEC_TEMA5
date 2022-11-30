<?php
// echo "<pre>";
// echo $_SERVER["REQUEST_METHOD"];
// echo "</pre>";

// VARIABEL GLOBAL AL DOCUMENTO
$usuario; // Almacena el nombre de usuario
$mensaje; // Almacena el mensaje a mostrar

if($_SERVER["REQUEST_METHOD"] == "GET"){
    
    if(isset($_GET['name_usuario'])){
        
        $usuario = $_GET['name_usuario'];
        if(strlen($usuario) <> 0){
            $mensaje = "Bienvenido/a '<strong>$usuario</strong>'" ; 
        }else{
            $mensaje = "El ".$usuario ." no está definido o es una cadena vacía.";
        }
    }
    
}

// echo "<pre>";
// echo print_r($_SERVER);
// echo "</pre>";

?>

<?php 
if(isset($mensaje)){
    echo $mensaje;
}
?> 
