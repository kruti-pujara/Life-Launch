const menuToggle = document.querySelector(".menu-toggle");
const navWrapper = document.querySelector(".nav-wrapper");

menuToggle.addEventListener("click",() => {
  menuToggle.classList.toggle("active");
  navWrapper.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navWrapper.classList.remove("active");
}))

// jQuery('.menu-toggle').click(function(){
//   jQuery('html,body').toggleClass('open-menu')
// });

  