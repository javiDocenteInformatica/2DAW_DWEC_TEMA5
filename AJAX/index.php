<?php
  include_once("controlador/utiles.php");
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AJAX1</title>

  <!-- FAVICON -->
  <link rel="icon" type="image/png" sizes="16x16" href="vista/img/cv_ico.png">
  
  <!-- ESTILOS CSS -->
  <!-- bootstrap CSS -->
  <link rel="stylesheet" href="vista/css/style.css"></link>
  <link rel="stylesheet" href="vista/css/tooltip.css">
  <link rel="stylesheet" href="vista/css/code.css">
 

  <!-- SCRIPTS JS -->
  <!-- <script src="vista/js/selectorVista.js"></script> -->
  <script src="vista/js/utiles.js"></script>
 


  
  

  
  
</head>
<body>
<div class="container-flex">
  <!-- AQUI EL CÓDIGO HTML PRINCIPAL -->
  <div class="itemPrincipal">
    <hr>


    <?php
      // include_once("vista/ajax_prueba1.php");
      // include_once("vista/ajax_fichero1.php");
      include_once("vista/ajax_prueba2.php");

    ?>


    <!-- selecciona la vista que se va a mostrar   -->
    <!-- <label for="selectorVista">Selecciona la vista que quiere mostrar: </label>
    <select id="selectorVista" name="selectorVista"></select>
    <br>
    <br>
    <div id="cargaVista"></div> -->


    
    <br>
    <!-- <button id="btn_limpiarConsola" onclick="console.clear()" style="margin: 0.6em 0">Limpiar Consola</button> -->
    <br>
    <hr>
      <!-- TEORÍA -->
      <?php
        include_once("vista/teoria.php");
      ?>
    <hr>
  </div>
  <div class="itemWebgrafia">
    <!-- WEBGRAFIA -->
    <?php
      include_once("vista/webgrafia.php");
    ?>
  </div>
</div>
</body>
</html>
