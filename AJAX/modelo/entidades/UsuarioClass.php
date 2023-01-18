<?php
// IMPORTACIONES
require_once("CVClass.php");


// Programación orientada a objetos en PHP: https://diego.com.es/programacion-orientada-a-objetos-en-php
// Declaraciones de tipo: https://www.php.net/manual/es/language.types.declarations.php

class UsuarioClass
{
    public static $contUsuario = 0;
    public $idUsuario;
    public $email;
    public $nombreUsuario;
    public $password;
    public $hash;
    public $esActivo;
    public $esAdmin;

    public $listaCVs; // Array de Objetos de tipo 'CVClass'

    public function __construct($email, $nombreUsuario, $password, $hash, $esActivo, $esAdmin)
    {
        $this->email = $email;
        $this->nombreUsuario = $nombreUsuario;
        $this->password = $password;
        $this->hash = $hash;
        $this->esActivo = $esActivo;
        $this->esAdmin = $esAdmin;

        // incrementa id +1
        self::$contUsuario++;

        // asigna id al usuario
        $this->idUsuario = self::$contUsuario;

        // inicializamos a vacía la lista de CVs
        $this->listaCVs = array();
    }
}

?>