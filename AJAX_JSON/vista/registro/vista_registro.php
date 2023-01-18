<script src="vista/js/registro/vista_registro.js" type="module"></script>
<div id="contenedor_ajax">
    <fieldset>
        <legend>FORMULARIO REGISTRO</legend>
        <form id="form_registro" name="form_registro" action="controlador/registro/controlador_registro.php" method="POST" enctype="multipart-form-data" autocomplete="on">
            <!-- BOTÓN - ENVÍO DE DATOS -->

            <br>

            <input type="email" name="email" id="input_email" placeholder="Email" size="30">

            <br>

            <input type="text" name="nombreUsuario" id="input_nombreUsuario" placeholder="Nombre de Usuario" size="30">

            <br>

            <input type="text" name="password" id="input_password" placeholder="Contraseña" size="30">

            <br><br>

            <input type="submit" name="submit" id="input_submit" value="Enviar">
        </form>


    </fieldset>


    <div id="respuesta_ajax">

    </div>



</div>