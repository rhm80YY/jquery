$(function(){
    // forma de hacerlo sin objetos 
    // var caja = '<input type="text" class="form-control" placeholder="Ingrese su nombre">'
    // $(".container").append(caja);

    //forma de hacerlo con objetos ,definimos el objeto que lo pasamos como parametros 
    //dentro de {}


  $("<input>", {
      type:"text",
      class:"form-control",
      placeholder:"Ingrese su nombre"
  })
    .appendTo('.container')
        .on("keypress", function( e ){
            console.log(e.keyCode);//keyCode condigo asscci
        });
    
    $("input").css({
        position:"relative",
        top:"200px"
    });
});
    
    
    