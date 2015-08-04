(function() {
  'use strict';

  $('.blog-post')
    .on('click', 'h2', function(){
      console.log("Hello");
      $('#show').toggleClass('show');
    });

})();
