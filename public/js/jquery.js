console.log('jquery on');

$("#checkout-form").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        name: {
            required: true,
            minlength: 8,
            maxlength: 50
        }
    },
    messages: {
        email: {
            required: "por favor ingresa un correo",
            email: "por favor ingresa un correo"
        },
        name: {
            required: "por favor ingresa un nombre",
            minlength: "mínimo 8 letras",
            maxlength: "máximo 50 letras"
        }
    },
    submitHandler: function(form) {
        const conf = confirm("Estás seguro que deseas continuar?");
        if (conf == true) {
            form.submit();
        }
    }
});
