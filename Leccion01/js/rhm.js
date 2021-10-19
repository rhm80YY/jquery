$(function(){
  // clase 01 
      //forma larga
        // $(document).ready(function(){//solo se van a ejecutar las funciones cuando el documento este listo
        //     // jQuery('#listaUno').addClass('textVerde');
        //     // jQuery('#listaDos').addClass('textNegrita');
        //     $('#listaUno').addClass('textVerde');
        //     $('#listaDos').addClass('textNegrita');
        // });
        //forma corta

    $('li:first-child').addClass('textVerde');
    $('#listaDos').addClass('textNegrita');

// clase 02 
    // //vamos a cambiar el atributo src en todas las imagenes
    // $('img').attr("src","img/profesor.jpg");
    // //remover las clases de todoas las imagenes
    // $('img').removeClass('rounded-circle');
    // //vmaos a agregar las clases a todas las imagenes
    // $('img').addClass('img-thumbnail');

    // $('img')
    // .attr("src","img/profesor.jpg")
    // .removeClass('rounded-circle')
    // .addClass('img-thumbnail');
    //si queremos agregar dos clases con  jquery
    // .addClass("img-circle img-thumbnail");
    $('img')
    .attr("src","img/profesor.jpg")
    .addClass('rounded-circle img-thumbnail')
    

  // clase 03
  // miestra todos los hijos de la clase .col-sm-5
  console.log( $(".col-sm-5").children());
  // se querems especificamente solo parrafos
  console.log($(".col-sm-5").children("p"));  
  // se queremos mostrar un parrafoexatamente
  console.log($(".col-sm-5").children("p").eq(1));

//buscamos un contenido y los reemplazamos por nuestro texto
  $(".col-sm-5")
      .find("p")
      //reemplaza el texto literal no lo interpreta 
      // .text("Saludos, soy un <u>mater <u/> de jquery"); 
      //reemplaza e interpreta 
      .html("Saludos, soy un <u>master <u/> de jquery");

  //referencia  a la lista ordenada 
  // $("lu li")
  //     .eq(0)
  //     .css("color","red");
  // $("lu li")
  //     .eq(1)
  //     .css("color","blue");  
  // $("lu li")
  //     .eq(2)
  //     .css("color","indigo");
  // $("lu li")
  //     .eq(3)
  //     .css("color","#ff69b4");
  // $("lu li")
  //     .eq(4)
  //     .css("color","lightskyblue");   
  // es una forma de hacerlo pero ahora vemos de hacerlo de otra manera 
  //la funcion end() permite que jquery vuelva para atras para seguir con la proxima ejecucion
  
  $("lu li")
    .eq(0).addClass('morado').end()
    .eq(1).addClass('azul').end()
    .eq(2).addClass('marron').end()
    .eq(3).addClass('celeste').end()
    .eq(4).addClass('verdeO').end();


});


