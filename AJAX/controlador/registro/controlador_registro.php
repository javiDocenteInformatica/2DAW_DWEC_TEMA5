<?php
if(session_status() <> PHP_SESSION_ACTIVE){
    session_start();
}
// IMPORTS
// include_once("../depuracion.php");
require ('../../modelo/entidades/UsuarioClass.php');


if ($_SERVER['REQUEST_METHOD'] == "POST") {

    // datos del usuario
    $email = $_POST['email'];
    $nombreUsuario = $_POST['nombreUsuario'];
    
    // contraseña
    $password = $_POST['password'];
    // $_SESSION['password'] = $password; // guarda la contraseña en la session para comprobarla
    $hash = password_hash($password, PASSWORD_DEFAULT);
   
    // variables de control de cuenta del usuario
    $esActivo = $_POST['esActivo'];
    $esAdmin = $_POST['esAdmin'];


    // verificamos la contraseña con el hash
    // (Aun no sé si esto es necesario)
    // if(!password_verify($password, $hash)){
    //     session_destroy(); // destruyo la session

    //     die("No se ha podido verificar la password, saliendo de la aplicación web..."); // termino la aplicación y mando un mensaje
    // }else{
    //     echo $hash;
    // }

    $usuario = new UsuarioClass($email, $nombreUsuario,$password,$hash,$esActivo,$esAdmin);

    // CREAR OBJETO JSON
    


    // GUARDAR FICHERO EN SERVIDOR



}


?>

<?php
// COMPROBAR SI SE PUEDE LEER EL FICHERO
include_once('../listarDatosUsuario.php');

?>


<!-- VISTA -->
<br>
<button onclick="window.location.href='http://localhost/2DAW_DWEC_TEMA5/AJAX/controlador/listarDatosUsuario.php'">Muestra datos de mi usuario</button>