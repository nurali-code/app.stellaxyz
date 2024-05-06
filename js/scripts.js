$(document).ready(function () {

    $('.btn-menu').on('click', function () {
        $(this).toggleClass('active');
        $('header nav, body').toggleClass('active');
    })

});

