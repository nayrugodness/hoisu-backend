function cerrarSesion() {
    Swal.fire({
        'title': 'Estas seguro?',
        'text': 'Quieres cerrar sesion?',
        'icon': 'question',
        'showCancelButton': true,
        'cancelButtonText': 'No, cancelar',
        'confirmButtonText': 'Si, cerrar sesion',
        'reverseButtons': true,
        'confirmButtonColor': '#dc3545',
        'cancelButtonColor': '#0dcaf0',
    })
        .then(function (result) {
            if (result.isConfirmed) {
                window.location.href = '/index/'
            }
        })
}