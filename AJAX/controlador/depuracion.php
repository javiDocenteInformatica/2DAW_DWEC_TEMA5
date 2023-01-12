<?php
function echoH1($elemento)
{
    echo "<pre>";
    echo "<h1>";
    echo $elemento;
    echo "</h1>";
    echo "</pre>";
}

function echoP($elemento)
{
    echo "<pre>";
    echo "<p>";
    echo $elemento;
    echo "</p>";
    echo "</pre>";
}

function print_rP($array)
{
    echo "<pre>";
    echo "<p>";
    print_r($array);
    echo "</p>";
    echo "</pre>";
}
?>