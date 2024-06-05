
jQuery(function($){

$(window).on('load',function(){
  $('#prelodaer').fadeOut(300);
});

$(window).scroll(function(){

  $('.main-header').toggleClass('sticky', $(this).scrollTop() > 50);

  });
// =====================scroll top
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 0) {
    $('.scroll-to-target').addClass('open');
  } else {
    $('.scroll-to-target').removeClass('open');
  }
  if ($(this).scrollTop() > 500) {
    $('.scroll-to-target').addClass('open');
  } else {
    $('.scroll-to-target').removeClass('open');
  }
});
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target'); // animate

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });
}

function bodypadding(){
    var windowwidth = $(this).width();
    var headerheight = $('.main_header').outerHeight();
      $('body').css({
        "padding-top":headerheight,
      });
}
$(window).on('load resize',bodypadding);

// ============fixed-header
function headerfixed() {
    var getscrltop = $(this).scrollTop();
    if (getscrltop > 0) {
        $('.main_header').addClass('sticky-header');
    } else {
        $('.main_header').removeClass('sticky-header');
    }
}
$(window).scroll('scroll resize', headerfixed); 




// navigation
function sidemenu(){
  $('.nav_sec').toggleClass('slidein');
  $('.nav_sec').prepend('<div class="cls-btn"></div>');

  $('.cls-btn').on('click', function(){
      $('.nav_sec').removeClass('slidein');
  });
}
$('body').find('.toggle-menu').on('click',sidemenu);

$('.nav_sec ul > li > ul').parent().prepend('<i class="arw-nav"></i>');
function subMenu(){
    $(this).parent('li').find('> ul').stop(true, true).slideToggle();
    $(this).parents('li').siblings().find('ul').stop(true, true).slideUp();
    $(this).toggleClass('actv');
    $(this).parent().siblings().find('.arw-nav').removeClass('actv');
}
$('.nav_sec ul > li > .arw-nav').on('click',subMenu);

// ================solution-slider

$('.solution_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  centerPadding: '30px',
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '<div class="slick-nav prev-arrow"><i class="bi bi-arrow-left"></i></div>',
	nextArrow: '<div class="slick-nav next-arrow"><i class="bi bi-arrow-right"></i></div>',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        centerPadding: '30px',
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow:4,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '30px',
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
  ]

});
// ================testimonial_slider

$('.testimonial_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  centerPadding: '30px',
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        centerPadding: "30px",
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow:3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '30px',
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        dots: false,
        arrows: false,
      }
    },
  ]

});


});

	
	
	
	
	
	
	
	