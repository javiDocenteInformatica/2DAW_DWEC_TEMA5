<?php
   $valor1 = $_GET['valor1'];
   $valor2  = $_GET['valor2'];
   if ($valor1=="admin" && $valor2=="1234"){
     echo "USUARIO VALIDO";
   }else{
     echo "USUARIO NO VALIDO";
   }
?>
