$(document).ready(function () {
  $(".slider-cards-container").slick({
    setting: setting - value,
  });
});

$(".slider-nav").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 3,
  infinite: true,
  dots: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
})
