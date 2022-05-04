var swiperEvents = new Swiper(".eventsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    rewind: false,
    pagination: {
      el: ".events__slider-pag",
    },
    navigation: {
      nextEl: ".events__swiper-button-next",
      prevEl: ".events__swiper-button-prev",
      clickable: true,

    },
    
      breakpoints: {
        1700: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
        },
        1123: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 1,
        },

        1023: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 1,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 1,
        }
      },
      
  });