<?php
function listarTodosLosUsuarios(){

  $numUsuarios = 5;
  $lista = array();
  
  for ($i = 1; $i <= $numUsuarios; $i++){
    $usuario = [
      'nombre'=> "usuario $i",
      'edad'=> 20 + $i,
      'hobbies' => ["futbol","gaming", "fiesta"]  
    ];
    array_push($lista, $usuario);
  }
  
  return $lista;
}

?>