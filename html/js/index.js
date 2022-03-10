$(document).ready(function(){
  jQuery('.menu-toggle').click(function(){
    jQuery('html,body').toggleClass('open-menu')
    jQuery('.nav-wrapper').toggleClass('active')
    jQuery('.menu-toggle').toggleClass('active')
  });
  jQuery('.nav-link').click(function(){
    jQuery('.menu-toggle').removeClass('active')
    jQuery('.nav-wrapper').removeClass('active')
  });

  $('.main-slider').slick({
    slidesToShow: 1,
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

  