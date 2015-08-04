(function(window) {

  // $('.main-buttons').click(function(){
  //   event.preventDefault();
  //   $(this).siblings().removeClass('tab-current');
  //   $(this).addClass('tab-current');
  //   $('.body-container').children().removeClass('section-current');
  //   $($('a', this).attr('href')).addClass('section-current');
  // });

  $('.blog-post')
    .on('click', 'h2', function(){
      console.log("Hello");
      $('#show').toggleClass('show');
    });

})(window);
