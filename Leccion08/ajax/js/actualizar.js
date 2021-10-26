(function(){
     /**
     * obtengo el id que viene por url
     */
    function $_GET(param) {
        var vars = {};
        window.location.href.replace( location.hash, '' ).replace( 
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function( m, key, value ) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );
        if ( param ) {
            return vars[param] ? vars[param] : null;	
        }
        return vars;
    }
   
    /**
     * inicio del documento 
     */
    $(document).ready(function(){
    var id = $_GET('id');
 
        $.ajax({
            type: 'POST',
            url : 'php/servicios/get.alumnos.php?id=' + id,
            dataType: 'json'
        })
        .done(function( data ){
            console.log("Correcto!");
            console.log( data ); // Se imprime en consola la api
            //se pone el primer valor ya que el arreglo solo trae un objeto(siempre agarramos la primera posicion)
            var alumno  = data.alumnos[0];

            $("#txtId").val( alumno.id );
            $("#txtNombre").val( alumno.nombre );
            $("#cmbEstado").val( alumno.estado );  
        });
     
    /**
     * Actualizar datos
     */
     $("#frmData").on("submit", function( e ){
        //por defecto tiene dos comportamientos uno va al servidor y recarga el navegador web
        //no queremos eso 
        // console.log(e);
        //alteramos este comportamiento 
        e.preventDefault();
        var formulario = $(this);// esto apunta al frmData
        var dataSerializada = formulario.serialize();//agarramos toda la data de nuestro formulario 
 
        $.ajax({
            type: 'POST',
            url : 'php/servicios/post.guardaralumnos.php',
            dataType: 'json',
            data:dataSerializada
        })
        .done(function( data ){
            console.log("Correcto!");
            console.log( data ); // Se imprime en consola la api
            url = "../ajax/";
            $(location).attr('href',url);
        })
        .fail(function(){
            console.log("Fallo!");
        });
          
    });

});
    
})();
    
 