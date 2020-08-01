$( document ).ready(function() {

$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top -90
    }, 500, 'linear');
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
});