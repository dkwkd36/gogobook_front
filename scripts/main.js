let swiperBooks = new Swiper('.books__swiper', {
    
    loop: true,
    spaceBetween: 60,
    grabCursor: true,
    slidesPerView: 3,
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    
});

let swiperBanners = new Swiper('.mainBanner', {
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
      },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})


let menuToggle = document.querySelector('.menuToggle');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active')
}

let searchToggle = document.querySelector('.searchBtn');
searchToggle.onclick = function() {
    searchToggle.classList.toggle('active')
}