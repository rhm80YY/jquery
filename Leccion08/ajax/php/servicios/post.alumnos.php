<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");
//recibimo los datos posteados 
$nombre = $_POST['txtNombre'];
// $estado = $_POST['cmbEstado'];
// $nombre = mysql_real_escape_string($nombre);

//insertamos en la BD
$sql = "INSERT INTO alumnos (nombre) values ('$nombre')";
//llamamos a una clase en php llamada database que contiene varios metodos
$hecho = Database::ejecutar_idu( $sql );


// return;//frena el flujo del programa 

if ( $hecho ) {
	 $respuesta = json_encode(
		array('err' => false,
			  'mensaje' => "Creado correctamente"
	         )
	 );
}else{
	$respuesta = json_encode(
		array('err' => true,
		'mensaje' => $hecho
		)
	);
}
echo $respuesta;
