    $("a").on('click', function(event) {

      if (this.hash !== "") {
 
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });


    $('ul.sc_btn li').click(function(){
    $('.project-image img').attr('src',$(this).attr('href'));
    $(this).addClass('active-link').siblings().removeClass('active-link');
    return false;
    });

    $('.owl-carousel').owlCarousel({
      autoplay: true,
      items:1,
      animateOut: 'fadeOut',
      lazyLoad:true,
      loop:true,
      margin:10
    });

    $('.logo_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
        responsive: [
          {
          breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
          breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
          },
          {
          breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });