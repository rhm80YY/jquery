// generamos una function anonima para proteger nuestro codigo
(function(){

//cargar una imagen de fondo
$("body").css("background-image", "url('img/jqueryB2.jpg')");
$(document).ready(function(){
   
    $.ajax({
		type: 'POST',
		url : 'php/servicios/get.alumnos.php',
		dataType: 'json'
    })
	.done(function( data ){
		console.log("Correcto!");
		console.log( data ); // Se imprime en consola la api
		if ( data.error ) {
			alert("Algo raro paso");
			return;
		};

		data.alumnos.forEach( function(alumno, index) {
			var content = "";
				content += '<tr id="fila' + alumno.id +'">';
					// content += '<td>'+ alumno.id +'</td>';
					content += '<td>'+ alumno.nombre +'</td>';
					content += '<td>'+ alumno.estado +'</td>';
					content += '<td class="text-center">';
					content += '<a href="actualizar.html?id='+ alumno.id +'" class="btn btn-primary"><i class="fas fa-edit"></i></a>';
					content += '</td>';
					content += '<td class="text-center">';
					content += '<a href="" data-nombre="'+ alumno.nombre +'" data-id="'+ alumno.id +'" class="btn btn-danger btnEliminar"><i class="fas fa-trash-alt"></i></a>';
					content += '</td>';
				content += '</tr>';
			$("#tblRegistros").append( content );
		});	

	})

	.fail(function(){
		console.log("Fallo!");
	});

});

//eliminar
$("body").on("click",".btnEliminar",function(e){
	e.preventDefault();
	
	var nombre = $(this).data('nombre');
	var id = $(this).data('id');

	swal({
		title: "Estas seguro?",
		text: "De querer borrar a: " + nombre,
		icon: "warning",
		// buttons: true,
		// dangerMode: true,
	  })
	  .then((willDelete) => {
		if (willDelete) {
			borrarRegistro( id );
		} 
		// else {
		//   swal("Your imaginary file is safe!");
		// }
	  });

	/**
	 * Cuando estamos seguros que lo deseamos borrar
    */
	function borrarRegistro( id ){
		$.ajax({
			type: 'POST',
			url : 'php/servicios/post.eliminaalumnos.php?id=' + id,
			dataType: 'json'
		})
		.done(function( data ){
			console.log("Correcto!");
			console.log( data ); // Se imprime en consola la api
			$("#fila"+ id).remove();
			swal("Borrado! El registro ha sido eliminado correctamente!", {
				icon: "success",
			  });	
		});
	}
	// var id = $(this).data('id');
	// console.log(id);

});

})();