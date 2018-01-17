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
})(jQuery);