<?php
// IMPORTACIONES
require_once("./DatosPersonalesClass.php");
require_once("./EstudiosClass.php");
require_once("./ExperienciaClass.php");
require_once("./DatosPersonalesClass.php");

// Programación orientada a objetos en PHP: https://diego.com.es/programacion-orientada-a-objetos-en-php
// Declaraciones de tipo: https://www.php.net/manual/es/language.types.declarations.php

class CVClass
{
    public $idCV;
    public $idUsuario;
    public $tituloDescriptivo;
    public $tituloExperiencia;
    public $empresa;
    public $fechaInicio;
    public $fechaFin;

    public $datosPersonales; // Objeto de tipo 'DatosPersonalesClass'
    public $listaEstudios; // Array de Objetos de tipo 'EstudiosClass'
    public $listaExperiencias; // Array de Objetos de tipo 'ExperienciaClass'

    public function __construct($idCV, $idUsuario, $tituloDescriptivo, $tituloExperiencia, $empresa, $fechaInicio, $fechaFin, $datosPersonales, $listaEstudios, $listaExperiencias)
    {
        $this->idCV = $idCV;
        $this->idUsuario = $idUsuario;
        $this->tituloDescriptivo = $tituloDescriptivo;
        $this->tituloExperiencia = $$tituloExperiencia;
        $this->empresa = $empresa;
        $this->fechaInicio = $fechaInicio;
        $this->fechaFin = $fechaFin;

        $this->datosPersonales = $datosPersonales;
        $this->listaEstudios = $listaEstudios;
        $this->listaExperiencias = $listaExperiencias;


    }
}

?>