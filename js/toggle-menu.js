window.addEventListener('load', function () {
  var $button = document.querySelector('.toggle-menu-button');
  var $menu = document.querySelector('.header-menu');
  $button.addEventListener('click', function () {
      if ($menu.classList.contains('is-show')) {
          $menu.classList.remove('is-show');
      }
      else {
          $menu.classList.add('is-show');
      }
  });
});

window.addEventListener('DOMContentLoaded', function(){
    $('.toggle-menu-button').on('click', function () {
        $('.toggle-menu-button').toggleClass('isClosed');
    });
});
