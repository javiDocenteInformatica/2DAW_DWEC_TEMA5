<?php
    session_start();
    include("../Repositorio/UsuarioRepository.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $correo = $_POST["correo"];
        $pass = $_POST["pass"];

        // findCorreoPassActivoUsuario($correo, $pass);

        if (findCorreoPassActivoUsuario($correo, $pass)) {
            $_SESSION['correo'] = $correo;
            //$_SESSION['rol'];

        }
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <!-- <div id="cajaError">
       <?php if ($b == true) {
            echo "<p>Las contraseñas no coinciden</p>";
        }
        if ($a == true) {
            echo "<p>Correo ya esta en la BD</p>";
        }
        ?>
    </div> -->
    <form action="LoginUsuario.php" method="POST">
        <label for="correo">Correo</label>
        <input type="email" placeholder="correo@correo.es" name="correo"
            value="<?php if(isset($correo)) echo $correo ?>"/> <br><br>
        <label for="contrasena">Contraseña</label>
        <input type="password" name="pass" placeholder="Contraseña"/> <br><br>
        <input type="submit" value="Iniciar Sesión"/>
    </form>
</body>

</html>