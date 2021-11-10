$(function(){
    $(".imgThumb").on("mouseover", function(){
        var color = $(this).data('color');
        var url = "img/camiseta/large/"+ color +".jpg";
        $("#vistaPrevia").attr('src', url);
        $("#lblColor").text( color );
    });
});
    
    
    