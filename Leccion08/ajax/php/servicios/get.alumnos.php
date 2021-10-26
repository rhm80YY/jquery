<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

/**
 * si viene el por parametro el id se ejecuta esta funcion 
 */

if ( isset($_GET['id']) ) {
	$id = $_GET['id'];
/**
 * evalua si es numerico en id que se envia
 */

	if( is_numeric( $id ) ){
    	$sql = "SELECT * FROM alumnos where id = $id";
	}else{
		$respuesta = array(
			'error' => true, 
			'mensaje' => "El parametro enviado no es valido"
			);
		echo json_encode($respuesta);
		die;
	}

}else{
    $sql = "SELECT * FROM alumnos order by nombre asc";
}

// $sql = "SELECT * FROM alumnos order by nombre asc";
$alumnos = Database::get_arreglo( $sql );
$respuesta = array(
			'error' => false,
			'alumnos' => $alumnos 
		);

echo json_encode( $respuesta );

?>