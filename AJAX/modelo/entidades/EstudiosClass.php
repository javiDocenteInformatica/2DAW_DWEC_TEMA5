<?php
// IMPORTACIONES


// Programación orientada a objetos en PHP: https://diego.com.es/programacion-orientada-a-objetos-en-php
// Declaraciones de tipo: https://www.php.net/manual/es/language.types.declarations.php
class EstudiosClass
{
    public $idExperiencia;
    public $idUsuario;
    public $tituloDescriptivo;
    public $tituloExperiencia;
    public $empresa;
    public $fechaInicio;
    public $fechaFin;

    public function __construct($idEstudios, $idUsuario, $tituloDescriptivo, $tituloEstudio, $centroRealizado, $fechaInicio, $fechaFin)
    {
        $this->idExperiencia = $idEstudios;
        $this->idUsuario = $idUsuario;
        $this->tituloDescriptivo = $tituloDescriptivo;
        $this->tituloExperiencia = $tituloEstudio;
        $this->empresa = $centroRealizado;
        $this->fechaInicio = $fechaInicio;
        $this->fechaFin = $fechaFin;
    }
}

?>