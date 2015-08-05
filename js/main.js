(function() {
  'use strict';

  $('.blog-post')
    .on('click', 'h2', function(){
      console.log("Hello");
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

})();
