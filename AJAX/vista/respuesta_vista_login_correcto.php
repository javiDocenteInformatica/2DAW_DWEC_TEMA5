<h1>
    Bienvenido al Servidor: '<?php echo $post_usuario ?>' !!
</h1>
<!-- 
echo "vista/img/" . $nombreYExtensionFichero;
echo $rutaDirectorioDestino . $nombreYExtensionFichero;
-->

<!-- Esto que hago aquí está mal, puesto que debería enviarle la imagen desde el servidor y no cogerlo del ordenador del cliente, es más, lo puedo acceder porque lo tengo en la carpeta img, pero realmente no podría ni acceder al fichero subido -->
<img src=<?php echo "vista/img/" . $nombreYExtensionFichero; ?> alt="Imagen de perfil" width=<?php echo "200"; ?> height=<?php echo "200"; ?>>

<?php
echo "<br>"
    ?>


<button id="btn_ir_inicio" onclick="window.location.href='../index.php'">
    Ir a Inicio
</button>