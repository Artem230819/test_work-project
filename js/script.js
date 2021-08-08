$(function () {
    $('.slider__wrapper').slick({
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
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