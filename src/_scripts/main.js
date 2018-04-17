// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var jQuery = require('jquery');
window.jQuery = jQuery;

require('material-design-lite');

require('owl.carousel');

(function($){
  var carousel = $('.owl-carousel');

  carousel.on('initialized.owl.carousel', function(event){
    carousel.after($('<div class="carousel-counter pull-right" />').html('<span class="text-up">'+(event.item.index + 1)+'</span>/' + event.item.count));
  });

  carousel.owlCarousel({
    items: 1,
    dotsContainer: '#dots-competences',
    navText: ['<i class="hb-icon hb-icon-btn-next-white"></i>','<i class="hb-icon hb-icon-btn-next-white"></i>'],
    autoHeight:true,
    responsive: {
      0 : {
        nav: true
      },
      1200: {
        nav: false
      }
    }
  });

  carousel.on('changed.owl.carousel', function(event) {
    $('.carousel-counter .text-up').text(event.item.index + 1);
  });
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

  $('.hb-card--media .mdl-button').on('mouseenter',function(){
    $(this).parents('.hb-card').addClass('hover');
  }).on('mouseleave', function(){
    $(this).parents('.hb-card').removeClass('hover');
  });
  $('.btn-linkedin-autofill').on('mouseover', function(e){
    e.preventDefault();
    $('.mdl-textfield').addClass('is-dirty');
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