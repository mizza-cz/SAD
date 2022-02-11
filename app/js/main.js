$(function(){
   $('.mob-menu').on('click', function () {
      $('.nav').slideToggle();
    });
    $('.nav__item').on('click', function () {
      $(this).closest('.nav__list').toggleClass('active');
    });
})