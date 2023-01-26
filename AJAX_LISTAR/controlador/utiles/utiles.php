<?php

function dibuja($elemento)
{
    echo '<pre>';
    echo '<br>';

    // print_r($elemento);
    // if($elemento )

    // gettype(): https://www.php.net/manual/en/function.gettype.php
    // echo gettype($elemento);

    // if (gettype($elemento) == 'array' || gettype($elemento) == 'object') {}
    print_r($elemento);

    echo '<br>';
    echo '</pre>';
}

function recorre($elemento)
{
    // https://www.php.net/manual/en/function.is-array.php
    // https://www.php.net/manual/en/function.is-object.php
    if (is_array($elemento) || is_object($elemento)) {
        foreach ($elemento as $key => $value) {
            // echo ($key . "<br>");
            recorre($key);
            recorre($value);
        }
    } else {
        echo $elemento;
        echo '<br>';
        return $elemento;
    }
}




?>