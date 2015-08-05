(function() {
  'use strict';

  $('.blog-post')
    .on('click', 'h2', function(){
      $('#show').toggleClass('show');
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

  $('.circle')
    .on('click', function(){
      event.preventDefault();
      var scroll_port = $('#portfolio').offset().top;
      $('html,body').animate({scrollTop: scroll_port}, 1000);
    });

})();
