(function(window) {

  // $('.main-buttons').click(function(){
  //   event.preventDefault();
  //   $(this).siblings().removeClass('tab-current');
  //   $(this).addClass('tab-current');
  //   $('.body-container').children().removeClass('section-current');
  //   $($('a', this).attr('href')).addClass('section-current');
  // });

  $('.blog-post')
    .on('click', 'h4', function(){
      console.log("Hello");
      $(this).siblings().toggleClass('show');
    });

})(window);
