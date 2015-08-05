(function() {
  'use strict';

  $('.home-button')
    .on('click', function(){
      event.preventDefault();
      $('html,body').animate({scrollTop: 0}, 500);
    });

  $('.main-buttons')
    .on('click', 'a[href^="#"]', function(){
      event.preventDefault();
      var scrollTo = $($(this).attr('href')).offset().top;
      $('html,body').animate({scrollTop: scrollTo}, 500);
    });

  $('.circle')
    .on('click', function(){
      event.preventDefault();
      var scrollPort = $('#portfolio').offset().top;
      $('html,body').animate({scrollTop: scrollPort}, 500);
    });

  $('#older-portfolio')
    .on('click', function(){
      $('#older-portfolio-modal').modal('toggle');
    });

  $('#explore-outdoors')
    .on('click', function(){
      $('#explore-outdoors-modal').modal('toggle');
    });

  $('#iron-pong')
    .on('click', function(){
      $('#iron-pong-modal').modal('toggle');
    });

  $('.blog-post')
    .on('click', 'h2', function(){
      $('#show').toggleClass('show');
    });

})();
