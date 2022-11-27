<?php
$voto = $_REQUEST['voto'];
$filename = "resultados.txt";
$content = file($filename);
$array = explode("||", $content[0]);
$real = $array[0];
$bar = $array[1];
$atl = $array[2];
$sev = $array[3];
$mal = $array[4];
$este = $array[5];
if ($voto == 0) {
$real = $real + 1;
}
if ($voto == 1) {
$bar = $bar + 1;
}
if ($voto == 2) {
$atl = $atl + 1;
}
if ($voto == 3) {
$sev = $sev + 1;
}
if ($voto == 4) {
   $mal = $mal + 1;
}
if ($voto == 5) {
   $este = $este + 1;
}
//insert votos to txt file
$insertvoto = $real."||".$bar."||".$atl."||".$sev."||".$mal."||".$este;
$fp = fopen($filename,"w");
fputs($fp,$insertvoto);
fclose($fp);
?>
<h2>Resultado:</h2>
<table>
<tr>
<td>Real Madrid:</td>
<td>
<img src="barrita.gif" width='<?php echo(100*round($real/($real+$bar+$atl+$sev+$mal+$este),2)); ?>' height='20'>
<?php echo(100*round($real/($real+$bar+$atl+$sev+$mal+$este),2)); ?>%
</td>
</tr>
<tr>
<td>Barcelona:</td>
<td>
<img src="barrita.gif" width='<?php echo(100*round($bar/($real+$bar+$atl+$sev+$mal+$este),2)); ?>' height='20'>
<?php echo(100*round($bar/($real+$bar+$atl+$sev+$mal+$este),2)); ?>%
</td>
</tr>
<tr>
<td>Atl&eacute;tico de Madrid:</td>
<td>
<img src="barrita.gif" width='<?php echo(100*round($atl/($real+$bar+$atl+$sev+$mal+$este),2)); ?>' height='20'>
<?php echo(100*round($atl/($real+$bar+$atl+$sev+$mal+$este),2)); ?>%
</td>
</tr>
<tr>
<td>Sevilla:</td>
<td>
<img src="barrita.gif" width='<?php echo(100*round($sev/($real+$bar+$atl+$sev+$mal+$este),2)); ?>' height='20'>
<?php echo(100*round($sev/($real+$bar+$atl+$sev+$mal+$este),2)); ?>%
</td>
</tr>
<tr>
<td>M&aacute;laga:</td>
<td>
<img src="barrita.gif" width='<?php echo(100*round($mal/($real+$bar+$atl+$sev+$mal+$este),2)); ?>' height='20'>
<?php echo(100*round($mal/($real+$bar+$atl+$sev+$mal+$este),2)); ?>%
</td>
</tr>
<tr>
<td>Estepona:</td>
<td>
<img src="barrita.gif" width='<?php echo(100*round($este/($real+$bar+$atl+$sev+$mal+$este),2)); ?>' height='20'>
<?php echo(100*round($este/($real+$bar+$atl+$sev+$mal+$este),2)); ?>%
</td>
</tr>
</table>
