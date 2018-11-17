(function($) {

  $(document).ready(function() {
    
    $('.menu-hum').append('<span>&nbsp;</span>');
    $('.menu-hum').on('click', function(){
      $(this).parent().toggleClass('mopen');
    });

  });

})(jQuery);
