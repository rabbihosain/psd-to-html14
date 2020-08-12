(function($) {
"use strict";

/*===========================================
[Table of contents]
1.window load functionality
2.document ready load functionality
3. scroll load functionality
4. resize load functionality
5.Service slider
6.Sticky menu activation
7. Project view 
8. Jquery Nav 
9.Sticky menu activation 
10. Mobile menu 
=============================================*/

/* 1.window load functionality
=============================================*/
$(window).on('load', function() {

}); 


/* 2.document ready load functionality
=============================================*/
$(document).ready(function() {

    // Data images
    //----------------------------------
    if($('.background-image').length > 0) {
      $('.background-image').each(function(){
        var src = $(this).attr('data-src');
        $(this).css({
          'background-image':'url(' + src +')'
        });
      });
    }

});

/* 3. scroll load functionality
=============================================*/
$(window).on('scroll', function() {


}); 


/* 4. resize load functionality
=============================================*/
$(window).on('resize', function() {

}); // End Resize

// 5.Service slider 
if($('.service-slider.owl-carousel').length > 0){
  $(".service-slider.owl-carousel").owlCarousel({
    loop: true,
    items:3,
    autoplay: true,
    margin:20,
    navText: ["<i class='icofont-circled-left'></i>","<i class='icofont-circled-right'></i>"],
    responsive: {
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
    }
  })
}
//6. Circular Bars - Knob 

  if(typeof($.fn.knob) != 'undefined') {
    $('.knob').each(function () {
      var $this = $(this),
        knobVal = $this.attr('data-rel');       

      $this.knob({
      'draw' : function () {
        $(this.i).val(this.cv + '%')
      }
      });
      $this.appear(function() {
      $({
        value: 0
      }).animate({
        value: knobVal
      }, {
        duration : 2000,
        easing   : 'swing',
        step     : function () {
        $this.val(Math.ceil(this.value)).trigger('change');
        }
      });
      }, {accX: 0, accY: -150});
    });
  }

//7. Project view 
  if ($('.popup-link').length > 0) {
  $('.popup-link').magnificPopup({
    type: 'image',
    gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1]
        },  
    });
}
//8. Jquery Nav 
if($('#menu').length>0){
  $('#menu').onePageNav({
    scrollOffset:30
    })
}
// 9.Sticky menu activation 
$(window).on('scroll', function(){
  if($(window).scrollTop()>100){
    $('#header').addClass('stick');
  }else{
    $('#header').removeClass('stick');
  }
})
// 10. Mobile menu 
$(function(){
  $('#menu').cookcodesmenu({
    brand: "<a href='index.html'><img src='images/logo.png'></a>"
  });
})

})(jQuery);