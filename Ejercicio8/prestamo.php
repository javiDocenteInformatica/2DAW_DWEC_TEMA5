<?php
   $capital = $_GET['capital'];
   $interes  = $_GET['interes'];
   $plazo  = $_GET['plazo'];
   $im=$interes/(12*100);

   $mes=($capital)/( (1-pow((1+$im),(-1*$plazo))) / $im);

   echo $mes;
?>
