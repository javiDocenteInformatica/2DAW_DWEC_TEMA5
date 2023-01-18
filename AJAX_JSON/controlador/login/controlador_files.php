<?php
// https://www.w3schools.com/php/php_file_upload.asp

$subidaOK = false;
$nombreYExtensionFichero;
$rutaDirectorioDestino;
$rutaFicheroDestino;
$extensionFichero;

if (isset($_FILES)) {

    $nombreYExtensionFichero = $_FILES["file"]["name"];
    $rutaDirectorioDestino = "../../modelo/uploads/";
    $rutaFicheroDestino = $rutaDirectorioDestino . $_FILES["file"]["name"];
    $extensionFichero = basename($_FILES["file"]["type"]);

    $ficheroSubido = move_uploaded_file($_FILES["file"]["tmp_name"], $rutaFicheroDestino);

    if ($ficheroSubido) {
        echoH1("Fichero subido con éxito");
    } else {
        echoH1("Fallo al subir el fichero");
    }


    // depuracion();


}



?>


<?php

function depuracion()
{

    // echoH1("\$GLOBALS :");
    // print_rP($GLOBALS);

    echoH1("\$_FILES :");
    print_rP($_FILES);


    echoH1("rutaFicheroDestino: ");
    echoP($GLOBALS["rutaFicheroDestino"]);

    echoH1("rutaFicheroDestino: ");
    echoP($GLOBALS["rutaFicheroDestino"]);

    echoH1("nombreYExtensionFichero: ");
    echoP($GLOBALS["nombreYExtensionFichero"]);

    echoH1("extensionFichero: ");
    echoP($GLOBALS["extensionFichero"]);


}


?>