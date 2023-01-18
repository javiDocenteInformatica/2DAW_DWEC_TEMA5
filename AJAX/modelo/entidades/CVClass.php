<?php
// IMPORTACIONES
require_once("DatosPersonalesClass.php");
require_once("EstudiosClass.php");
require_once("ExperienciaClass.php");


// Programación orientada a objetos en PHP: https://diego.com.es/programacion-orientada-a-objetos-en-php
// Declaraciones de tipo: https://www.php.net/manual/es/language.types.declarations.php

class CVClass
{
    public static $contCV = 0;
    public $idCV;
    public $idUsuario;
    public $tituloDescriptivo;
    public $fechaCreacion;
    public $fechaActualizacion;

    public $datosPersonales; // Objeto de tipo 'DatosPersonalesClass'
    public $listaEstudios; // Array de Objetos de tipo 'EstudiosClass'
    public $listaExperiencias; // Array de Objetos de tipo 'ExperienciaClass'

    public function __construct($idUsuario, $tituloDescriptivo, $fechaCreacion, $fechaActualizacion, $datosPersonales, $listaEstudios, $listaExperiencias)
    {

        $this->idUsuario = $idUsuario;
        $this->tituloDescriptivo = $tituloDescriptivo;
        $this->fechaCreacion = $fechaCreacion;
        $this->fechaActualizacion = $fechaActualizacion;

        $this->datosPersonales = $datosPersonales;
        $this->listaEstudios = $listaEstudios;
        $this->listaExperiencias = $listaExperiencias;

        self::$contCV++; // valor autoincremental

        // asignamos id a CV
        $this->idCV = self::$contCV;
    }
}

?>