<?php
// echo "<pre>";
// echo $_SERVER["REQUEST_METHOD"];
// echo "</pre>";

// VARIABEL GLOBAL AL DOCUMENTO
$json; // Almacena el JSON
$mensaje; // Almacena el mensaje a mostrar

if($_SERVER["REQUEST_METHOD"] == "GET"){
    ECHO "AQUI";
    if(isset($_GET[''])){
        
        $json = $_GET[''];
        if(strlen($json) <> 0){
            $mensaje = "<strong>$json</strong>" ; 
        }else{
            $mensaje = "La variable '\$json' no está definida o es una cadena vacía.";
        }
    }
    
}

echo "<pre>";
echo print_r($_SERVER);
echo "</pre>";

?>

<?php 
if(isset($mensaje)){
    echo $mensaje;
}
?> 
