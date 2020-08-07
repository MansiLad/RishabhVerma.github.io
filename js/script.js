// loader icon fades first, then the background
$(window).on("load", function() {
    $(".loader .inner").fadeOut(500, function() {
      $(".loader").fadeOut(750);
    });
  });
  
  // https://github.com/nicinabox/superslides
  $(document).ready(function(){
    $('#slides').superslides();
  
  // https://github.com/mattboldt/typed.js/
    let typed = new Typed(".typed", {
      strings: ["Aspiring Data Scientist"],
      typeSpeed: 70,
      // loop: true,
      startDelay: 1000,
      showCursor: false
    });
  
  // https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html
  $('#owl-one').owlCarousel({
    loop:true,
    items:4,
    itemsDesktop:[1000,4],
    itemsDesktopSmall:[900,3],
    itemsTablet:[600,2],
    itemsMobile:[480,1],
    autoplay: true
  });

  
  $('#owl-two').owlCarousel({
    loop:true,
    items: 1,
    dots: true,
    lazyLoad: true,
    size: 300
  });

  $('#owl-three').owlCarousel({
    loop:true,
    items: 1,
    dots: true,
    lazyLoad: true,
    size: 300
  });


    $('[data-fancybox]').fancybox({
      transitionIn : 'fade',
      transitionOut: 'fade',
    });
  
    // code that scrolls down to the clicked link instead of jumping to it
    $("#navigation li a").click(function(e) {
      e.preventDefault();
      var targetElement = $(this).attr("href");
      var targetPosition = $(targetElement).offset().top;
      $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });
  
    const nav = $("#navigation");
    const navTop = nav.offset().top; //moment at which to add or remove the sticky class;
    $(window).on("scroll", stickyNavigation);
  
    function stickyNavigation() {
      var body = $("body");
  
      if($(window).scrollTop() >= navTop) {
        body.css("padding-top", nav.outerHeight() - 10 + "px") //fix for content jumping on scroll lock trigger
        body.addClass("fixedNav");
      }
      else {
        body.css("padding-top", 0);
        body.removeClass("fixedNav");
      }
    }
  });
  