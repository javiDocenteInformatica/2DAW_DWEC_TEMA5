<?php
// Programación orientada a objetos en PHP: https://diego.com.es/programacion-orientada-a-objetos-en-php
// Declaraciones de tipo: https://www.php.net/manual/es/language.types.declarations.php

class DatosPersonalesClass
{
    public $idDatosPersonales;
    public $idUsuario;
    public $nombre;
    public $apellidos;
    public $fechaNacimiento;
    public $direccion;
    public $poblacion;
    public $ciudad;
    public $telefono;

    public function __construct($idDatosPersonales, $idUsuario, $nombre, $apellidos, $fechaNacimiento, $direccion, $poblacion, $ciudad, $telefono)
    {
        $this->idDatosPersonales = $idDatosPersonales;
        $this->idUsuario = $idUsuario;
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->fechaNacimiento = $fechaNacimiento;
        $this->direccion = $direccion;
        $this->direccion = $poblacion;
        $this->ciudad = $ciudad;
        $this->telefono = $telefono;
    }
}

?>