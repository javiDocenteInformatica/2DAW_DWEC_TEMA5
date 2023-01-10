<?php

$usuario_name = null;
$_POST = file_get_contents('php://input');

if ($_SERVER['REQUEST_METHOD'] == "POST") {

    // echo file_get_contents('php://input');
    // echo json_decode(file_get_contents('php://input'), true);
    $_POST = json_decode(file_get_contents('php://input'), true);
    print_r($_POST);



    if (isset($_POST["usuario_name"])) {
        $usuario_name = $_POST["usuario_name"];
    }
} else {
    print_r($_GET);
    if (isset($_GET["usuario_name"])) {
        $usuario_name = $_GET["usuario_name"];
    }
}

?>
<h1>
    Bienvenido al Servidor: '<?php echo $usuario_name ?>' !!
</h1>