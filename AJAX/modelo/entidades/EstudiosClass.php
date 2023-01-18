<?php
// IMPORTACIONES


// Programación orientada a objetos en PHP: https://diego.com.es/programacion-orientada-a-objetos-en-php
// Declaraciones de tipo: https://www.php.net/manual/es/language.types.declarations.php
class EstudiosClass
{
    public static $contExperiencia = 0;
    public $idExperiencia;
    public $idUsuario;
    public $tituloDescriptivo;
    public $tituloExperiencia;
    public $empresa;
    public $fechaInicio;
    public $fechaFin;

    public function __construct($idUsuario, $tituloDescriptivo, $tituloEstudio, $centroRealizado, $fechaInicio, $fechaFin)
    {
        $this->idUsuario = $idUsuario;
        $this->tituloDescriptivo = $tituloDescriptivo;
        $this->tituloExperiencia = $tituloEstudio;
        $this->empresa = $centroRealizado;
        $this->fechaInicio = $fechaInicio;
        $this->fechaFin = $fechaFin;

        // contador autoincremental
        self::$contExperiencia++;

        // asigno id a la experiencia
        $this->idExperiencia = self::$contExperiencia;
    }
}

?>