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

    // Inicializar el mapa de Leaflet solo si existe el elemento
    if ($('#map').length) {
        var map = L.map('map').setView([43.3614, -5.8490], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([43.3614, -5.8490]).addTo(map)
            .bindPopup('<b>Foodie Diw&Co</b><br>Calle Principal 123')
            .openPopup();
    }

    // Desplegar al hacer click
    $('.faq-question').on('click', function() {
        const faqItem = $(this).parent('.faq-item');
        const faqAnswer = $(this).next('.faq-answer');

    
        $('.faq-item').not(faqItem).removeClass('active');
        $('.faq-answer').not(faqAnswer).slideUp(300);

        faqItem.toggleClass('active');
        faqAnswer.slideToggle(300);
    });
});
