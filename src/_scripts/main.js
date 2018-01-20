// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var jQuery = require('jquery');
require('material-design-lite');

(function($){

  $(window).on('scroll', function(){
    if($(window).scrollTop() > 10 ){
      $('.mdl-layout__header').addClass('mini');
    }
    else{
      $('.mdl-layout__header').removeClass('mini');
    }
  });

   $('.contact-form').on('submit', function (e) {
    var form = $(this);

      $.ajax({
        url: '/mail.php',
        data: form.serialize(),
        type: 'POST',
        success: function(data){
          console.log('mail sent');
          form.html(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus + ' ' + errorThrown);
        }
      });

    return false;
  });

})(jQuery);