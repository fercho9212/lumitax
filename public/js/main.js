function load_frm(opt){
  if (opt==1) {var url="frm_create_driver"; console.log('Entra a crear driver')}
  if (opt==2) {var url="frm_create_passenger"; console.log('Entra a crear PASAJERO->'+url)}

  //$("#main_content").html()

    $("#contenido_principal").html($("#cargador_empresa").html());
      $.get(url,function(resul){
          $("#contenido_principal").html(resul);
      })
}
$(document).on("submit",".form_entrada",function(e){

  e.preventDefault();

  console.log("Entra");
  var frm=$(this);
  var id_frm=$(this).attr("id");
  if (id_frm=="add_driver"){
    var url="driver"
  }if(id_frm=="add_passenger"){
    var url="passenger"
  }
  $.ajax({

        type: "POST",
        url : url,
        datatype:'json',
        data : frm.serialize(),
        success : function(resul){

        alert(resul);
      }
        });

});
