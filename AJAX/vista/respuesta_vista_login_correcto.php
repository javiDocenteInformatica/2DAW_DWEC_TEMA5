<h1>
    Bienvenido al Servidor: '<?php echo $post_usuario ?>' !!
</h1>


<img src=<?php echo "http://localhost/2DAW_DWEC_TEMA5/AJAX/" . "modelo/uploads/" . $nombreYExtensionFichero; ?> alt="Imagen de perfil" width=<?php echo "200"; ?> height=<?php echo "200"; ?>>

<?php
echo "<br>"
    ?>


<button id="btn_ir_inicio" onclick="window.location.href='../index.php'">
    Ir a Inicio
</button>