$(function(){

    var teslaView = {
        loader: $(".divPreloader"),
        colores: ['blanco', 'rojo', 'cafe', 'verde'],
        // colores: ['blanco'],


        // funcion para cambiar el color 
        cambiaColor: function( img ){
            var $loader = teslaView.loader;
            $loader.fadeIn(150);

            if( img === undefined ){
                var color = teslaView.colores[0];
                img = "img/tesla/modelS-"+ color +".jpg";
            }
            // var ahora = new Date();
            // console.log(ahora);

            $("<img>",{
                src: img,
                class: "img-responsive"
            })
            .load( function(){
                // console.log("imagen cargada...");
                $(".divVistaPrevia").find("img").remove();
                $(this).appendTo(".divVistaPrevia");
                $loader.fadeOut(150);
            })
        },

        //funcion principal
        init: function( opciones){
            //extend expande las funciones
            $.extend( teslaView, opciones );
            // console.log(teslaView);

            //ciclo para barrer arreglo colores y crear nuestro combo box(select)
            for (let i = 0; i < teslaView.colores.length; i++) {
                var color = teslaView.colores[i];
                var may = color.toUpperCase();
                $("<option>",{
                        value: color,
                        text: may,
                }).appendTo('#cmbColor');
                  
            }
            //nueva funcion de cambio //bind vincula al elemento
            $("#cmbColor").bind("change", function(){
                    var color = $(this).val();
                    var url = "img/tesla/modelS-"+ color +".jpg"; 
                    teslaView.cambiaColor( url );
                    // $("#imgCarro").attr("src", url);
            });

            // cambiar la imagen al iniciar por primera vez
            teslaView.cambiaColor();

        }

    }; 

    //llamamos a la funcion init
    teslaView.init({
        colores: ['rojo', 'verde', 'gris', 'cafe', 'negro', 'blanco'],
    });


    // $("#cmbColor").on("change", function(){
    //     var color = $(this).val();
    //     var url = "img/tesla/modelS-"+ color +".jpg"; 
    //     $("#imgCarro").attr("src", url);
    // })
   
});
    
    
    