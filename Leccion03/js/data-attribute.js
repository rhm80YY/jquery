$(function(){
   
   // var $imagen = $("img");

   // console.log($imagen.attr("alt") );
   // $imagen.attr("alt","Es un JPG");
   // console.log($imagen.data("color") );


$("img").on("mouseenter", function(){
      console.log( $(this).data("color") );
      console.log( $(this).attr("alt") );
});


    
});
    
    
    