(function(){

//cuando se ejecute el pósteo de informacion con el submmit haga esto
$("#frmData").on("submit", function(e){
	//por defecto tiene dos comportamientos uno va al servidor y recarga el navegador web
	//no queremos eso 
	// console.log(e);
	//alteramos este comportamiento 
	e.preventDefault();
	// $(this).find(":submit").prop("disabled", true);
	// jQuery(this).find(":submit").prop("disabled", true).slideUp(3000).slideDown(6000);

	// console.log($('#txtNombre').val());
	if ($('#txtNombre').val() == '') {
		swal({
		    text: "Se debe de cargar un nombre",
			icon: "warning",
			// buttons: true,
			// dangerMode: true,
		  })
	} else {
		var formulario = $(this);// esto apunta al frmData
		var dataSerializada = formulario.serialize();//agarramos toda la data de nuestro formulario 
    	$.ajax({
			type: 'POST',
			url : 'php/servicios/post.alumnos.php',
			dataType: 'json',
			data:dataSerializada
		})
		.done(function( data ){
			console.log("Correcto!");
			console.log( data ); // Se imprime en consola la api
			$("#txtNombre").val('');
			url = "../ajax/";
            $(location).attr('href',url);
			// $('input[type="text"]').val('');
		});
		// .fail(function(){
		// 	console.log("Fallo!");
		// })
		// .always(function(){//es opcional
		// 	console.log("Completo!");
		// });
		
	}

});

})();

