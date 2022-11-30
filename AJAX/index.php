<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AJAX1</title>
  
  <!-- ESTILOS CSS -->
  <!-- bootstrap CSS -->
  <link rel="stylesheet" href="css/style.css"></link>
  <link rel="stylesheet" href="css/tooltip.css">
  <link rel="stylesheet" href="css/code.css">
 

  <!-- SCRIPTS JS -->
  <script src="js/utiles.js"></script>
  

  
  
</head>
<body>
<div class="container-flex">
  <!-- AQUI EL CÓDIGO HTML PRINCIPAL -->
  <div class="itemPrincipal">
    <hr>
    <?php
        // include_once("html/ajax_prueba1.html");
        include_once("html/ajax_fichero1.html");
    ?>
    <br>
    <!-- <button id="btn_limpiarConsola" onclick="console.clear()" style="margin: 0.6em 0">Limpiar Consola</button> -->
    <br>
    <hr>
      <!-- TEORÍA -->
      <?php
        include_once("html/teoria.html");
      ?>
    <hr>
  </div>
  <div class="itemWebgrafia">
    <!-- WEBGRAFIA -->
    <?php
      include_once("html/webgrafia.html");
    ?>
  </div>
</div>
</body>
</html>
