<?php

$usuario_name = null;


if ($_SERVER['REQUEST_METHOD'] == "POST") {

    print_r($_POST);

    if (isset($_POST["usuario_name"])) {
        $usuario_name = $_POST["usuario_name"];
    }
} else {
    if (isset($_GET["usuario_name"])) {
        $usuario_name = $_GET["usuario_name"];
    }
}

?>

<h1>
    Bienvenido al Servidor: '<?php echo $usuario_name ?>' !!
</h1>