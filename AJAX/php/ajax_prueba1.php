<?php
echo "<pre>";
echo print_r($_SERVER["REQUEST_METHOD"]);
echo "</pre>";

if($_SERVER["REQUEST_METHOD"] == "GET"){
    
    if(isset($_GET['name_usuario'])){
        // echo "<p id=resultadoAJAX> Bienvenido/a $usuario </p>";
    }else{
        // echo "El \$_GET['name_usuario'] no está definido o es nulo";
    }
    // echo "<pre>";
    // echo print_r($_SERVER);
    // echo "</pre>";
}

$usuario="";
?>

<script src="js/ajax_prueba1.js"></script>
<div id="contenedor_ajax">
    <label for="name_usuario">Nombre de Usuario: </label><br>
    <input type="text" id="input_usuario" name="name_usuario">

    <button id="btn_enviar">Enviar al Servidor</button>
    <br>
</div>

