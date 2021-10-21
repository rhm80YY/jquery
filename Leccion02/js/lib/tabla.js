$(function () {
  //tabla de multiplicar
  var contador = 0;
  var base = "";
  
  $(".btn").on("click", function () {
        contador++;
        h3Dinamico = "";
        // variable base a multiĺicar ::
        if (base != "") {
          var h3Dinamico = "<tr>" + "<td>" + base + "</td>" + "<td>" + 'x' + "</td>" + "<td>" + contador + "</td>" + "<td>" + '=' + "</td>" + "<td>" + ( base * contador ) + "</td>" + "</tr>";
          $(".table").append(h3Dinamico);
        } else {
          alert('Debe seleccionar un numero!!!!!!!');
        }
  });

  // Funcion que detecta el cambio de la base
  $("#cmbBase").on("change", function(){
        base = $("#cmbBase").val();
        $("tr").not(":eq(0)").remove();//borrar todos los table rows menos la primera 
        contador = 0;
  })

});
