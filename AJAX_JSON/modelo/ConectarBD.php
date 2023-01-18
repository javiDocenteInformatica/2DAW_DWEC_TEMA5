<?php

// Function para conectar BD necesario llamar en cada consulta
/*function ConectarBD() {
    $usernameBD = "usuarioBD";
    $passBD = "1234";
    $cadena_conexion = "mysql:dbname=pony_tiendasa;host=127.0.0.1";

    try {
        $bd = new PDO($cadena_conexion, $usernameBD, $passBD, array(PDO::ATTR_PERSISTENT => true));
        return $bd;
    } catch (PDOException $e) {
        echo "Error en la conexión " . $e->getMessage();
        return;
    }
}*/

$usernameBD = "usuarioBD";
$passBD = "1234";
$cadena_conexion = "mysql:dbname=pony_tiendasa;host=127.0.0.1";

try {
    $GLOBALS["bd"] = new PDO($cadena_conexion, $usernameBD, $passBD, array(PDO::ATTR_PERSISTENT => true));
} catch (PDOException $e) {
    echo "Error en la conexión " . $e->getMessage();
}
?>