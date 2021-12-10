(function(){
    
    //peticion ajax
    //tipo
    // GET traer informacion
    // POST mandar informacion
    // URL a donde vamos a llamar nosotros 
    // DATATYPE formato de la respuesta por ejemplo Json

    // Posibles respuesta de ajax
    // done cuando termine y sea echo correcto
    // fail fallo 
    // always de todas maneras(siempre)
    
    //
    // Archivos json o en estructura Json ************************
    // al ser un Json que es una notacion de objeto en javascript es nativo 
    // y no hay que convetirlo no hay que trabajar con eso  
    //
    
    $.ajax({
        type: 'GET',
        url : 'https://rhm80yy.github.io/jsonapi/datajson.json',
        dataType: 'json'
    })
    .done(function( data ){
        console.log("Hecho correcto");
        var persona = data;
        // cargamos los valores en la vista con jquery por valor y por atributo 
        $("#picFoto").attr("src", data.picture);
        $("#txtNombre").val( data.name );
        $("#txtDireccion").val( data.address ); 
        $("#txtTelefono").val( data.phone ); 
        $("#txtGenero").val( data.gender );  
        console.log(persona); 
    })
    .fail(function(){
        console.log("Fallo");
    })
    .always(function(){
        console.log("Completo!");
    });
    // https://www.json-generator.com/ genera codigo json aleatoria apartir de un archivo
    // en este ejemplo usamos el contenido del archivo generador.txt
    
})();