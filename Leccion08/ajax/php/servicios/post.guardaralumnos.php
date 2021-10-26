<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$id = $_POST['txtId'];
$nombre = $_POST['txtNombre'];
$estado = $_POST['cmbEstado'];
// var_dump($nombre);
// print_r($nombre);

// $nombre = mysql_real_escape_string($nombre);
$sql = "UPDATE alumnos SET nombre = '$nombre', estado = '$estado' WHERE id=$id";
$hecho = Database::ejecutar_idu( $sql );



if( $hecho ){
	$respuesta = json_encode( 
				array('err' => false, 
					  'mensaje'=>"Actualizado correctamente"
					  )
			);
}else{
	$respuesta = json_encode( 
 				 array('err' => true, 
					  'mensaje'=> $hecho
					  )
			);
}

echo $respuesta;
?>