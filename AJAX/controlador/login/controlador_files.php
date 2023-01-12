<?php

$subidaOK = false;
$nombreYExtensionFichero;
$rutaDirectorioDestino;
$rutaFicheroDestino;
$extensionFichero;

if (isset($_FILES)) {

    echoH1("\$_FILES :");
    print_rP($_FILES);


    $nombreYExtensionFichero = $_FILES["file"]["name"];
    $rutaDirectorioDestino = "../../modelo/uploads/";
    $rutaFicheroDestino = $rutaDirectorioDestino . $_FILES["file"]["name"];
    $extensionFichero = basename($_FILES["file"]["type"]);


    // echo "getimagesize: " . print_r(getimagesize($_FILES["file"]["tmp_name"]));

    echoH1("rutaFicheroDestino: ");
    echoP($rutaFicheroDestino);

    echoH1("rutaFicheroDestino: ");
    echoP($rutaFicheroDestino);

    echoH1("nombreYExtensionFichero: ");
    echoP($nombreYExtensionFichero);

    echoH1("extensionFichero: ");
    echoP($extensionFichero);


    $ficheroSubido = move_uploaded_file($_FILES["file"]["tmp_name"], $rutaFicheroDestino);

    if ($ficheroSubido) {
        echoP("Fichero subido con éxito");
    } else {
        echoP("Fallo al subir el fichero");
    }




}



?>


<?php
function echoH1($elemento)
{
    echo "<pre>";
    echo "<h1>";
    echo $elemento;
    echo "</h1>";
    echo "</pre>";
}

function echoP($elemento)
{
    echo "<pre>";
    echo "<p>";
    echo $elemento;
    echo "</p>";
    echo "</pre>";
}

function print_rP($array)
{
    echo "<pre>";
    echo "<p>";
    print_r($array);
    echo "</p>";
    echo "</pre>";
}
?>