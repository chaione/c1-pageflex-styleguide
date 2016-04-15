  $(document).ready(function(){
        $('.product-slider').slick({
    
          prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="glyphicon glyphicon-chevron-left"></i></button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="glyphicon glyphicon-chevron-right"></i></button>',
          autoplay: false,
          infinite:true,
          //slide:$('.slide'),
          variableWidth:true,
          slidesToShow: 3,
          slidesToScroll:1,
          slidesPerRow: 3,
          centerMode: false,
          centerPadding: '50px',
          appendArrows: $('.pager'),
          speed:200,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
      });

