$(function(){
// LECCION 03
  // los eventos en programacion son sucesos que se disparan cuandoa algo ocurre 
  $("#btnClick").on("click", function(){
    console.log('click::');
  })

  $(".img100").on("mouseenter",function(){
    // console.log("mouseenter");
    $(this).attr("src","img/nophoto.jpg");
  })

  $(".img100").on("mouseleave",function(){
    // console.log("mouseleave");
    $(this).attr("src","img/profesor.jpg");
  })

  //controles especiales para links
  //manejar el comportamiento por defecto
  $("#linkUdemy").on("click", function(e){
    e.preventDefault();
    console.log("click en el link...");
    var link = $(this).attr("href");
    console.log(link);
    window.location = link;
  })

  //evento que determina que la pagina a sido cargada y esta lista
  $(document).ready(function(){
    console.log("La pagina esta lista para usuarse:::");
  })

  // LECCION 04
  var dds = $("dd");
  dds.hide();
  dds.eq(0).show();

  $("dt").on("mouseenter", function(){
    dds.slideUp(200);
    $(this)
        .next()
        .slideDown(200);
  })
  
  //leccion 05
  var contador = 0;
  $(".05").on("click","h3", function(){
    contador ++;
    console.log('primer->'+contador);
    var h3Dinamico = "<h3 id='h3-"+ contador + "'>Dinamico: " + contador + "</h3>";
    $(".04").append(h3Dinamico);
    if(contador === 3){
      $("#h3-2").bind("click", function(){
        console.log("funccion dinamica");
      })
    }
  }) 


});


