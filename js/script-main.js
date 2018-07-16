$('.slich-carousel').slick({
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


function doSomething(value) {
  console.log(value);

  $('.slich-carousel').slick('slickUnfilter');
  if (value !== 'allExperiences') {    
    $('.slich-carousel').slick('slickFilter','.' + value);
  }
};