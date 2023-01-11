<script src="vista/js/vista_login.js"></script>
<div id="contenedor_ajax">
    <fieldset>
        <legend>FORMULARIO LOGIN</legend>
        <form id="form_login" name="form_login" action="" method="POST" enctype="multipart-form-data">
            <!-- BOTÓN - ENVÍO DE DATOS -->

            <br>

            <input type="text" name="usuario" id="input_usuario" placeholder="Nombre de Usuario" size="30">

            <br>

            <input type="text" name="password" id="input_password" placeholder="Contraseña" size="30">

            <br>
            <label for="file">Elige una foto</label>
            <input type="file" name="file" id="input_file" accept="image/*">

            <br>

            <input type="submit" name="submit" id="input_submit" value="Enviar">
        </form>


    </fieldset>


    <div id="respuesta_ajax">

    </div>



</div>