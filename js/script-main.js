/* Used in carousel  */
$('.slich-carousel').slick({
  arrows: false,
  autoplay: true,
  dots: false,
  infinite: false,
  speed: 100,
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

/* Filter the content in carousel
based on the selected category  */
function doSomething(value) {
  console.log(value);

  $('.slich-carousel').slick('slickUnfilter');
  if (value !== 'allExperiences') {    
    $('.slich-carousel').slick('slickFilter','.' + value);
  }
};


/* Used to show presentation and experiences contents in modal dialogs*/
// Pause the video when the modal is closed
$(document).on('click', '.hanging-close, .modal-backdrop, .modal', function (event) {
  // Remove the src so the player itself gets removed, as this is the only
  // reliable way to ensure the video stops playing in IE
  $("#trailer-video-container").empty();
});
// Play a movie or show a picture in modal when opened
$(document).on('click', '.movie-tile', function (event) {
  $("#movie-storyline-container").empty();
  var trailerYouTubeId = $(this).attr('data-trailer-youtube-id')
  var imgSrc = $(this).attr('data-image-src')
  if (!!imgSrc) {
    $("#movie-storyline-container").append($("<img></img>", {
      'src': imgSrc,
      'class': 'img-fluid experienceImageLink'
    }));
  } else {
    var sourceUrl = 'https://www.youtube.com/embed/' + trailerYouTubeId + '?autoplay=1&html5=1';
    $("#trailer-video-container").empty().append($("<iframe></iframe>", {
      'id': 'trailer-video',
      'type': 'text-html',
      'src': sourceUrl,
      'frameborder': 0
    }));
  }
  
  $("#movie-title-container").empty().append($(this).attr('data-movie-title'));
  $("#movie-storyline-container").append($(this).attr('data-movie-storyline'));
});