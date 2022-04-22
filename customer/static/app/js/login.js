$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un Correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#D1D1D1")
        }

        // Validado Mensaje ==============================
        if( $('#password').val() == '' ){
            errores += '<p>Escriba una Contraseña</p>';
            $('#password').css("border-bottom-color", "#F14B4B")
        } else{
            $('#password').css("border-bottom-color", "#D1D1D1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
