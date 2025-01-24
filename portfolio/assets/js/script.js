var typed = new Typed(".text", {
    strings: ["Frontend Developer . . ." , "Programmer . . ." , "Web Developer . . ."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})
/*=============== certificates ANIMATION ===============*/
const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: {},
    effect: 'cube',
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  });
/*=============== project ANIMATION ===============*/
  var swiper1 = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });