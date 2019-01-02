$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    speed: 200,
    infinite: false
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    speed: 200,
    swipeToSlide: true,
    infinite: false,
    arrows: false
  });

  //Slider grande

  $('.left-for').click(function(){
    $('.slider-for').slick('slickPrev');
  })
  
  $('.right-for').click(function(){
    $('.slider-for').slick('slickNext');
  })

  //Slider navegation

  $('.left-nav').click(function(){
    $('.slider-for').slick('slickPrev');
  })
  
  $('.right-nav').click(function(){
    $('.slider-for').slick('slickNext');
  })
          