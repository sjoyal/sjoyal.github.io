(function(window) {

  // Click listener on main header buttons, adds class='tab-current'
  $('.main-buttons').click(function(){
    $('li').removeClass('tab-current')
    $(this).addClass('tab-current');
  });



})(window);
