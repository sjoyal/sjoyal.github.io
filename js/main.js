(function(window) {

  $('.main-buttons').click(function(){
    $('li').removeClass('tab-current')
    $(this).addClass('tab-current');
  });

  $('.blog-title').click(function(){
    $(this).siblings().toggleClass('long-text');
  });

})(window);
