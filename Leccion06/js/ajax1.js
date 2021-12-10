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
    // Archivos json que vienen con estructura de arreglo  ************************
    // se declara una variable cuando se recorre el arreglo para que el manejo del json sea mas facil
    // 
    //
    
    $.ajax({
        type: 'GET',
        url : 'https://rhm80yy.github.io/jsonapi/datajsonArreglo.json',
        dataType: 'json'
    })
    .done(function( data ){
        console.log("Hecho correcto");
        // console.log(data);
        var personas = data;

        for (let i = 0; i < personas.length; i++) {
            var persona = personas[i];
            var tags = "";
            for (let j = 0; j < persona.tags.length; j++) {
                tags += '<span class="btn btn-primary">' + persona.tags[j] + "</span> ";
            }
        
            var html = "";
                html += '<tr>';
                html += '   <td>'+ persona.name +'</td>';
                html += '   <td>'+ persona.age +'</td>';
                html += '   <td>'+ tags +'</td>';
                html += '</tr>';

            $(".table").append( html );
        }
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