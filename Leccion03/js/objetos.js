$(function(){
    // definicion de objetos
    // cuando se define objetos en mejor no poner acentos ni carateres especiales 
    
    var carro = {

        encendido:false,
        llantas:4,
        puertas:5,
        fabricantes:{
            creador:"Toyota",
            telefono:"555-4564564",
            direccion:"XYZ Avenida 123",

        },
        colores: ["Azul", "Blanco", "Rojo", "Negro"],
        //definimos funciones dentro de los objetos
        arrancar: function(){
            if (carro.encendido) {
                console.log('el vehiculo estaba encendido....');
            } else {
                console.log('encendiendo el motor.');
                this.encendido = true;
                console.log(this);//this se refiere al objeto en si 
            }
        },
       
       
        apagar: function(){
            if (carro.encendido === false) {
                console.log('el vehiculo ya estaba apagado');
            } else {
                console.log('apagando el motor.');
                carro.encendido = false;
            }
        },
    };
    
    // se puede achicar el objeto
    var fab = carro.fabricantes;
    // console.log(fab.telefono);
    // se puede setear valores
    fab.direccion = "ABC nuevo";
    // console.log(carro.fabricantes.direccion);
    // console.log(carro);

    //llamamos a la funcion que creamos 
    // carro.arrancar();
    // carro.apagar();

    $("#btnEncender").on("click", function(){
        carro.arrancar();
    });

    $("#btnApagar").on("click", function(){
        carro.apagar();
    });
    
    });
    
    
    