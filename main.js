(() => {
    new Swiper(".hero", {
      spaceBetween: 30,
      centeredSlides: true,
      effect: 'fade',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
    });

    let openMenu = () => {
      let menu = document.querySelector(".menu");
      let header = document.querySelector(".header");
      let links = document.querySelectorAll(".menu__nav__list");

      menu.addEventListener("click",() => {
        header.classList.toggle("open");
      })

      for(let i = 0; i < links.length; i++){
        let link = links[i];

        link.addEventListener("click", () => {
          header.classList.remove("open");
        })
      }
    }

    AOS.init();
    openMenu();
})()

