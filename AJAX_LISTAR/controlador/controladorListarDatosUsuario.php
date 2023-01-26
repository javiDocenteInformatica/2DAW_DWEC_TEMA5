<?php
// IMPORTS
require_once('../modelo/utiles/usuarios_utiles.php');
?>

<?php
$listaUsuarios = []; // inicializamos a vacío el array de usuarios

if($_SERVER['REQUEST_METHOD'] == 'POST'){
  $accion = $_POST['accion'];

  if(isset($accion)){
    switch ($accion) {
      case 'listarTodos':
        $listaUsuarios = listarTodosLosUsuarios();
        break;

      default:
        # código por defecto
        break;
    }
  }
}

// if (isset($listaUsuarios) && count($listaUsuarios) <> 0){
  /*
  Aquí vamos a encontrar el siguiente problema:
   * Si quiero enviar un array, los datos necesitan ser serializados.
    
   * A efectos prácticos significa que el Objeto (o array o lo que sea que vaya a enviar) no tiene una representación (es decir no tiene algo así como un 'toString') me va a fallar.

   * En mi caso, voy a convertir el array a JSON, puesto que JSON es prácticamente un Objeto JS, y me será fácil luego recuperarlo.

   * Otra opción hubiera sido envolver el array en una clase 'ArrayObject', que implementa la interfaz 'Serializable': https://www.php.net/manual/en/class.arrayobject
  */
  // Esto se envía al cliente con los usuarios a listar; se tendrán que procesar luego en el cliente
  echo json_encode($listaUsuarios); // json_encode: https://www.php.net/manual/en/function.json-encode.php
  
// }

?>