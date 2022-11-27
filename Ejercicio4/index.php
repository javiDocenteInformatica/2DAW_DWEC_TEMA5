<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio 4</title>
  <style>
    hr {
      height: 0.6em;
      background-color: chocolate;
      margin-top: 2em;
      margin-bottom: 2em;
    }
  </style>
</head>
<body>

<img src="img/enunciado4.png" alt="Imagen de enunciado del ejercicio 4">

<hr>

<p>Web Worker: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button>
<button onclick="stopWorker()">Stop Worker</button>
<p><strong>Note:</strong> Esto funciona en Firefox y Safari pero no en Chrome.</p>

<hr>

<script>
let worker;
function startWorker() {
  if(typeof(Worker) !== "undefined") {
      if(typeof(worker) == "undefined") {
        worker = new Worker("trabajador.js");
      }
      worker.onmessage = function(event) {
          document.getElementById("result").innerHTML = event.data;
      };
  } else {
      document.getElementById("result").innerHTML = "Fallo al ejecutar el web worker";
  }
}
function stopWorker() {
  worker.terminate();
  worker = undefined;
}
</script>

<!-- WEBGRAFIA -->
<?php
  include("webgrafia.html");
?>
</body>
</html>
