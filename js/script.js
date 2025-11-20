$(document).ready(function() {
    // Desplegar menú hamburguesa
    $('.navbar-toggle').click(function() {
        $('.navbar-menu').toggleClass('active');
    });

    // Cerrar el menu cuando seleccionamos 1 opción
    $('.navbar-menu li a').click(function() {
        if ($(window).width() <= 768) {
            $('.navbar-menu').removeClass('active');
        }
    });
});
