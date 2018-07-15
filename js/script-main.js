$('.responsive').slick({
  arrows: false,
  autoplay: true,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
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
  ]
});

$('.filtering').slick({
  slidesToShow: 4,
  slidesToScroll: 4
});

var filtered = false;

$('.js-filter').on('click', function(){
  console.log($(this).selectedValue );
  /*
  if (filtered === false) {
    $('.filtering').slick('slickFilter',':even');
    
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
  */
});