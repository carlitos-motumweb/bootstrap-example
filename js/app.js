const $form = $('#suscribeFORM')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit(function(ev) {
    ev.preventDefault()

    $formGroup.removeClass().addClass('form-group')
    $formControl.removeClass().addClass('form-control')
    $formGroup.find('.form-control-feedback').remove();

    var newElement;
    if (Math.random() > 0.5) {
        console.log('error')
        $formGroup.addClass('has-danger')
        $formControl.addClass('has-danger')
        newElement = $('<div>', {
            html: 'ha ocurrido un error'
        })
    } else {
        console.log('ok')
        $formGroup.addClass('has-success')
        $formControl.addClass('has-success')
        newElement = $('<div>', {
            html: 'Se te enviaran las novedades'
        })
    }
    newElement.addClass('form-control-feedback')
    $formGroup.append(newElement)


})

function mostrarModal() {
    console.log("no mostrar: " + localStorage.noMostrar)
    if(localStorage.noMostrar == null){
        noMostrarPanel = false
    }else{
        noMostrarPanel = JSON.parse(localStorage.noMostrar)
    }

    if (!noMostrarPanel) {
        $('#modalOferta').modal()
    }

    $("#btnNOGracias").click(function(ev) {
        console.log("se ha presionado el boton de NO-Gracias")
        localStorage.noMostrar = true
    })


}
