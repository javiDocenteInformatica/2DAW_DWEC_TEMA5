<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AJAX1</title>
  
  <!-- ESTILOS CSS -->
  <!-- bootstrap CSS -->
  <link rel="stylesheet" href="vista/css/style.css"></link>
  <link rel="stylesheet" href="vista/css/tooltip.css">
  <link rel="stylesheet" href="vista/css/code.css">
 

  <!-- SCRIPTS JS -->
  <script src="vista/js/utiles.js"></script>
  

  
  
</head>
<body>
<div class="container-flex">
  <!-- AQUI EL CÓDIGO HTML PRINCIPAL -->
  <div class="itemPrincipal">
    <hr>
    <?php
        
        // include_once("vista/ajax_prueba1.html"); // Envío con AJAX de texto plano
        // include_once("vista/ajax_fichero1.html"); // Acceso con AJAX a fichero JSON
        include_once("vista/ajax_prueba2.html"); // Envío con AJAX para registrar/loguearte con usuario y password
    ?>
    <br>
    <!-- <button id="btn_limpiarConsola" onclick="console.clear()" style="margin: 0.6em 0">Limpiar Consola</button> -->
    <br>
    <hr>
      <!-- TEORÍA -->
      <?php
        include_once("vista/teoria.html");
      ?>
    <hr>
  </div>
  <div class="itemWebgrafia">
    <!-- WEBGRAFIA -->
    <?php
      include_once("vista/webgrafia.html");
    ?>
  </div>
</div>
</body>
</html>
