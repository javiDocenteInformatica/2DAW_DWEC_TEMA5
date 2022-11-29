<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Worker</title>
  
  <!-- ESTILOS CSS -->
  <link rel="stylesheet" href="css/style.css"></link>
  <link rel="stylesheet" href="css/tooltip.css">
  <!-- SCRIPTS JS -->
  <script src="js/webworkers.js"></script>
  <script src="js/tiempo.js"></script>
  <script src="js/utiles.js"></script>
</head>
<body>

<p>Web Worker: <output id="p_tiempo"></output></p>
<button id="btn_iniciarWorker">Iniciar Worker</button>
<button id="btn_detenerWorker">Detener Worker</button>
<br>
<button id="btn_limpiarConsola" onclick="console.clear()" style="margin: 0.6em 0">Limpiar Consola</button>
<br>
<hr>
  <!-- TEORÍA WEB WORKER -->
  <?php
    include_once("html/teoria_web_worker_1.html");
  ?>

<hr>

<!-- WEBGRAFIA -->
<?php
  include_once("html/webgrafia.html");
?>
</body>
</html>
