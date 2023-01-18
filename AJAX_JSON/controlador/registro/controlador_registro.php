<?php
// IMPORTS
include_once('../../controlador\utiles\utiles.php');
?>

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

    // CREAR OBJETO PHP
    $usuario = new UsuarioClass($email, $nombreUsuario,$password,$hash,$esActivo,$esAdmin);

    $datosPersonales = new DatosPersonalesClass($usuario->idUsuario, "Pepe", "Moreno Delgado", new DateTime('now'), "C/ Agua 8", "Marchena", "Sevilla", "666777888");

    $cv = new CVClass($usuario->idUsuario, "Mi CV 1",new DateTime('now'),new DateTime('now'),$datosPersonales,array(),array());

    array_push($usuario->listaCVs, $cv); 

    $listaUsuarios = array(); // lista que será almacenada en el fichero
    $listaUsuarios[] = $usuario; // hace lo mismo que array_push
    


    // CREAR OBJETO JSON
    // https://www.php.net/manual/en/function.json-encode.php
    $listaUsuariosJSON = json_encode($listaUsuarios, JSON_PRETTY_PRINT);


    // GUARDAR FICHERO EN SERVIDOR
    //https://ejemplocodigo.com/ejemplo-php-crear-y-leer-archivo-json/
    $nombreFichero = 'db.json';
    $rutaFichero = '../../modelo/db/' . $nombreFichero;
    file_put_contents($rutaFichero, $listaUsuariosJSON);


}


?>

<?php
// COMPROBAR SI SE PUEDE LEER EL FICHERO
include_once('../listarDatosUsuario.php');

?>