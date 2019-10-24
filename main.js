$('.btn-320px__item').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('btn-320px__item_active')
    $('.nav-320px__link').toggleClass('nav-320px__link_active')
});