$(document).ready(function() {
    $('#button').click(function(e) {
        data = $('#login-info').serialize();
        $.ajax({
            url: '/login',
            type: 'POST',
            data: data,
        })
        .done(function(response) {
            if (response == 'OK') {
                window.location.replace("/home")
            } else {
                $('.incorrect').fadeIn('400')
            };  
        })        
        e.preventDefault();
    });
});