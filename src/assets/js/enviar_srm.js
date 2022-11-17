
  $("#seguimiento_form").submit(function(event){
    event.preventDefault();

    $('#mensaje').html('<div class="loading" style="text-align: center;"><img src="clock.gif" width="70px" height="70px"/></div>');

    $.ajax({

      url:'http://universalles.edu.co/web/php/insert_user.php',
      type:'post',
      dataType:'json',
      data: $("#seguimiento_form").serializeArray()

    }).done(function(respuesta){

      if ( respuesta.accion == "exito" ) {    

        $("input[name='first_name']").val( $("input[name='Nombre']").val() );
        $("input[name='last_name']").val( $("input[name='Apellido']").val() );
        $("input[name='email']").val( $("input[name='correo']").val() );
        $("input[name='custom_cae']").val( $("input[name='cae']").val() );
        $("input[name='custom_celular']").val( $("input[name='Celular']").val() );
        $("input[name='custom_curso']").val( $("select[name='cursos'] option:selected, input[name='cursos']").val() );
        $("input[name='campaign_token']").val( $("select[name='cursos'] option:selected, input[name='cursos']").attr("token") ); 

        egoi();

        $("#carga").html('<h3 class="text-white mt-0 mb-10">Solicitud enviada con exito</h3><p style="color: white">Tu solicitud se ha realizado con exito. Te hemos enviado un correo con la informacion del curso que solicitaste, por favor revisa tu correo, y cominicate con nosotros para empezar con la incripcion.</p><br><br><p><small>¡IMPORTANTE! Para asegurarte de que nuestros mensajes llegan correctamente a tu bandeja de entrada y no son bloqueados por error, añade nuestra dirección de correo electrónico a tu lista blanca.  admisiones@bvirtual.edu.co  y  bachillerato_llamadas_156329@getresponse.com  a tu agenda de direcciones y/o a la "lista blanca" (remitentes de confianza).</small></p>');
                      
      } else {
        $("#mensaje").html(respuesta.mensaje);
      }

    });
    
  });


  function egoi() {

    event.preventDefault();
    $.ajax({

      url:'https://app.getresponse.com/add_subscriber.html',
      type:'post',
      data: $("#enviar-egoi").serializeArray()

    })
  }



