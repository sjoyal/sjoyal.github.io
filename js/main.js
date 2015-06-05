(function(window) {

  $('.main-buttons').click(function(){
    $(this).siblings().removeClass('tab-current')
    $(this).addClass('tab-current');
    $('.body-container').children().removeClass('section-current');
    $($('a', this).attr('href')).addClass('section-current');
  });

  $('.blog-title').click(function(){
    $(this).siblings().toggleClass('long-text');
  });

})(window);
