<?php
// IMPORTACIONES


// Programación orientada a objetos en PHP: https://diego.com.es/programacion-orientada-a-objetos-en-php
// Declaraciones de tipo: https://www.php.net/manual/es/language.types.declarations.php

class ExperienciaClass
{
    public $idExperiencia;
    public $idUsuario;
    public $tituloDescriptivo;
    public $tituloExperiencia;
    public $empresa;
    public $fechaInicio;
    public $fechaFin;

    public function __construct($idExperiencia, $idUsuario, $tituloDescriptivo, $tituloExperiencia, $empresa, $fechaInicio, $fechaFin)
    {
        $this->idExperiencia = $idExperiencia;
        $this->idUsuario = $idUsuario;
        $this->tituloDescriptivo = $tituloDescriptivo;
        $this->tituloExperiencia = $$tituloExperiencia;
        $this->empresa = $empresa;
        $this->fechaInicio = $fechaInicio;
        $this->fechaFin = $fechaFin;
    }
}

?>