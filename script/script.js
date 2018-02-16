
window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    $('.menu-img').click(function(){
        $('nav').toggle(500);
    });
}