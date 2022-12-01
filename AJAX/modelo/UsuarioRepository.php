<?php
include("../Utiles/ConectarBD.php");

function crearUsuario($correo, $contrasena, $cp, $direccion, $pais) {
    $sqlCrear = "INSERT INTO Usuario(correo, password, direccion, cp, pais, activo, esAdmin)
    VALUES ('$correo', '$contrasena', '$direccion', '$cp', '$pais', '1', '0')";

    // Alternativa (Se tiene que copiar en cada consulta)
    //$bd = ConectarBD();
    //$bd->query($sqlCrear);
     
    $GLOBALS["bd"]->query($sqlCrear);
}

function findCorreoUsuario($correo) {
    $sqlFindCorreo = "SELECT * FROM Usuario where correo = '$correo'";
    $result = $GLOBALS["bd"]->query($sqlFindCorreo);
    $res = true;

    if ($result->rowCount() == 0) {
        $res = false;
    }

    return $res;
}

function findCorreoPassActivoUsuario($correo, $pass) {
    $sqlFindCorreoPassActivo = "SELECT * FROM Usuario where correo = '$correo'
        and password = '$pass' and activo = '1'";
    $result = $GLOBALS["bd"]->query($sqlFindCorreoPassActivo);

    $res = true;
    $esAdmin = 0;
    
    if ($result->rowCount() == 0) {
        $res = false;
    } else {
        $esAdmin = $result->fetch(PDO::FETCH_ASSOC)["esAdmin"];
    }

    return array ($res, $esAdmin);
}

?>