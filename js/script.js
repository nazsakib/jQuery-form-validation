$("#formValidation").validate({
    rules: {
        fname: {
            minlength: 2,
        },
        lname: {
            minlength: 2,
        },
        email: true,
        phone: {
            number: true,
            minlength: 11,
            maxlength: 11,
        },
        address: {
            minlength: 10,
        },
        tmessage: {
            minlength: 15,
        },
    },
    messages: {
        fname: {
            required: "Please enter your First Name!",
            minlength: jQuery.validator.format("Minimum 2 characters!"),
        },
        lname: {
            required: "Please enter your Last Name!",
            minlength: jQuery.validator.format("Minimum 2 characters!"),
        },
        email: "Please enter your Email with valid format",
        phone: {
            required: "Enter your valid phone number!",
            minlength: jQuery.validator.format("Minimum 11 characters!"),
        },
        address: {
            required: "Please enter your address",
            minlength: jQuery.validator.format("Minimum 10 characters!"),
        },
        tmessage: {
            required: "Please enter message",
            minlength: jQuery.validator.format("Minimum 25 characters!"),
        },
    },
    submitHandler: function (form) {
        form.submit();
    },
});
