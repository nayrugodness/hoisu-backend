$(document).ready(function() {
	
	$('#btnSend').click(function(){

		var errores = '';

		if( $('#names').val() =='' ){
			errores += '<p>Escriba un Nombre</p>';
			$('#names').css("border-bottom-color", "#F14B4B");
		} else{
			$('#names').css("border-bottom-color", "#D1D1D1");
		}

		if( $('#email').val() =='' ){
			errores += '<p>Ingrese un Correo</p>';
			$('#email').css("border-bottom-color", "#F14B4B");
		} else{
			$('#email').css("border-bottom-color", "#D1D1D1");
		}

		if( $('#mensaje').val() =='' ){
			errores += '<p>Escriba un Mensaje</p>';
			$('#mensaje').css("border-bottom-color", "#F14B4B");
		} else{
			$('#mensaje').css("border-bottom-color", "#D1D1D1");
		}

		if( errores == '' == false) {
			var mensajeModal = '<div class="modal_wrap">'+
									'<div class="mensaje_modal">'+
										'<h3>Errores Encontrados</h3>'+
										errores+
										'<span id="btnClose">Cerrar</span>'
									'</div>'+
								'</div>'

			$('body').append(mensajeModal);
		}

		$('#btnClose').click(function() {
			$('.modal_wrap').remove();
		});

	});

});