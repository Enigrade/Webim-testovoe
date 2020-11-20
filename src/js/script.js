@@include('libs/_jquery-2.2.4.min.js')
@@include('libs/_slick.min.js')

$(document).ready(function () {
  $('.partners__items').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.features__item-desc').click(function (e) {
    $(e.target).closest('.features__item').toggleClass('active');
  });

  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
  });
});
