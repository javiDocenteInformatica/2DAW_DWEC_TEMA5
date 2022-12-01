<?php
// // Cargamos consultas del repositorio
// include("../../Repositorio/UsuarioRepository.php");

// // Errores 
// $errorContrasena = false;
// $correoYaExiste = false;

// // Comprobamos que hemos enviado el formulario mediante POST
// if ($_SERVER["REQUEST_METHOD"] == "POST") {

//     $correo = $_POST['correo'];
//     $contrasena = $_POST['password'];
//     $contrasenaConf = $_POST['passwordComprobar'];
//     $direccion = $_POST['direccion'];
//     $cp = $_POST['cp'];
//     $pais = $_POST['pais'];

//     // Comprobamos que las constraseñas sean iguales
//     if ($contrasena == $contrasenaConf) {
//         //Comprobamos que el correo del usuario no esta en la BD
//         if (!findCorreoUsuario($correo)) {
//             // Cifrado de la contraseña con SHA256
//             $contasenaCifrada = hash('sha256', $contrasena);
//             crearUsuario($correo, $contasenaCifrada, $cp, $direccion, $pais);
//             header("Location:../LoginUsuario.php");
//         } else {
//             $correoYaExiste = true;
//         }
//     } else {
//         $errorContrasena = true;
//     }


// }

?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Registro</title>
    <!-- <link rel="stylesheet" href="../../css/style.css"> -->
    <style>
        #cajaError, .cajaError {
            background-color: rgb(245, 130, 130);
        }

        .cajaExito{
            background-color: rgb(121, 246, 110);
        }

    </style>
    <script src="../../js/ValidaFormulario.js"></script>
</head>

<body>
    <h2>Registro de usuarios</h2>
    <!--Comprobacion de errores-->
    <div id="cajaError">
        <?php 
        // if ($errorContrasena == true) {
        //     echo "<p>Las contraseñas no coinciden</p>";
        // }
        // if ($correoYaExiste == true) {
        //     echo "<p>Correo ya esta en la BD</p>";
        // }
        ?>
    </div>
    <!-- <form id="form_CreaUsuario" action="CrearUsuario.php" method="POST"> -->
    <form id="form_CreaUsuario" action="" method="POST">
        <label for="correo">Correo</label>
        <!-- <input type="email" required id="correo" placeholder="correo@correo.es" -->
        <input type="text" required id="correo" placeholder="correo@correo.es"
            value="<?php 
            // if (isset($correo))
            //     echo $correo 
                ?>" name="correo" /><br>

        <label for="password">Contraseña</label>
        <input type="password" required id="password" name="password" /><br>

        <label for="passwordComprobar">Comprobar contraseña</label>
        <input type="password" required id="passwordComprobar" name="passwordComprobar" /><br>

        <label for="direccion">Direccion</label>
        <input type="text" required placeholder="C/Falsa, 123" id="direccion"
            value="<?php 
                // if (isset($direccion))
                //  echo $direccion 
                ?>" name="direccion" /><br>

        <label for="cp">CP</label>
        <input type="text" required placeholder="12053" pattern="[0-9]{5}" value="<?php 
                // if (isset($cp))
                //  echo $cp 
                ?>"
            id="cp" name="cp" /><br>

        <label for="pais">Pais</label>
        <input type="text" required placeholder="España" id="pais" value="
        <?php 
            // if (isset($pais))
            //     echo $pais 
            ?>"
            name="pais" /><br>

        <input type="submit" value="Enviar" />
        <input type="reset" value="Resetear valores" />
    </form>
</body>

</html>