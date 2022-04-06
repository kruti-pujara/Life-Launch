$(document).ready(function(){
  jQuery('.menu-toggle').click(function(){
    jQuery('html,body').toggleClass('active')
    jQuery('.nav-wrapper').toggleClass('active')
    jQuery('.menu-toggle').toggleClass('active')
  });
  jQuery('.nav-link').click(function(){
    jQuery('.menu-toggle').removeClass('active')
    jQuery('.nav-wrapper').removeClass('active')
  });

  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    prevArrow:'<button class="slide-arrow prev-arrow"></button>',
    nextArrow:'<button class="slide-arrow next-arrow"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:1,
          slidesToScrol:1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow:1,
          slidesToScrol:1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows:false,
          dots:true,
          slidesToShow: 1,
          slidesToScrol:1,
          
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
        
  });
})

// const menuToggle = document.querySelector(".menu-toggle");
// const navWrapper = document.querySelector(".nav-wrapper");

// menuToggle.addEventListener("click",() => {
//   menuToggle.classList.toggle("active");
//   navWrapper.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.
//   addEventListener("click", () => {
//     menuToggle.classList.remove("active");
//     navWrapper.classList.remove("active");
// }))

  