$(function () {
    $('.slider__wrapper').slick({
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1.7,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows: true,
              centerMode: true,
              centerPadding: '10%'
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '1%',
            }
          }
        ]
      });
})

// $('.font').css({
//   'font-size' : '1vw'
// });