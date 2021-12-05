window.addEventListener("DOMContentLoaded" , function() {
    document.querySelector("#menu").addEventListener("click", function() {

        document.querySelector("#menu2").classList.toggle("active")
    })


    document.querySelector(".header__icon").addEventListener("click", function() {
        document.querySelector(".header__quest").classList.add("header__quest-active")
    })
    
    document.querySelector(".header__icon-active2").addEventListener("click", function() {
        document.querySelector(".header__quest").classList.remove("header__quest-active");
        document.querySelector(".header__icon").classList.remove("header__icon-remove");
    })


    $("#accordion").accordion( {
        heightStyle: "content",
        active: 0
    });


    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      // пагинация
      pagination: {
      el: '.swiper-pagination',
      },
      // навигация
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
      }); 

      const tabButtons = document.querySelectorAll(".work__link")
      tabButtons.forEach(function(tabslink){
        tabslink.addEventListener("click", function(event){
            const path = event.currentTarget.dataset.path
            let currentButton = event.currentTarget;

            document.querySelectorAll(".work__tab").forEach(function(tabcontent){
                tabcontent.classList.remove("active-tab")
            })
            document.querySelector(`[data-target="${path}"]`).classList.add("active-tab")
            tabButtons.forEach(function(item) {
                item.classList.remove("work__link_link1");
            });

            currentButton.classList.add("work__link_link1");
        })
      })
    
}) 

