// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var jQuery = require('jquery');
window.jQuery = jQuery;

require('material-design-lite');

require('owl.carousel');

(function($){

  $(window).on('scroll', function(){
    if($(window).scrollTop() > 10 || $('.mdl-layout__drawer.navigation-drawer').hasClass('is-visible')){
      $('.mdl-layout__header').addClass('mini');
    }
    else{
      $('.mdl-layout__header').removeClass('mini');
    }
  });

  $('.mdl-layout__drawer-button').on('click', function(e){
    $('.mdl-layout__header').addClass('mini');
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
  var validateEmail = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
})(jQuery);