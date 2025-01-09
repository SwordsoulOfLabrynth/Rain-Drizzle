var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true, 
      onlyInViewport: true, 
    },
  });


function createPopup(id){
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector(".overlay");
    let closeBtn = popupNode.querySelector(".close-btn");
    function openPopup(){
        popupNode.classList.add("active");
    }
    function closePopup(){
        popupNode.classList.remove("active");
    }
    overlay.addEventListener("click",closePopup);
    closeBtn.addEventListener("click",closePopup)
    return openPopup;
}

let popup1 = createPopup("#popup1");
document.querySelector("#view1").addEventListener("click", popup1);

let popup2 = createPopup("#popup2");
document.querySelector("#view2").addEventListener("click", popup2);

let popup3 = createPopup("#popup3");
document.querySelector("#view3").addEventListener("click", popup3);

let popup4 = createPopup("#popup4");
document.querySelector("#view4").addEventListener("click", popup4);

let popup5 = createPopup("#popup5");
document.querySelector("#view5").addEventListener("click", popup5);

let popup6 = createPopup("#popup6");
document.querySelector("#view6").addEventListener("click", popup6);

let popup7 = createPopup("#popup7");
document.querySelector("#view7").addEventListener("click", popup7);

let popup8 = createPopup("#popup8");
document.querySelector("#view8").addEventListener("click", popup8);

let popup9 = createPopup("#popup9");
document.querySelector("#view9").addEventListener("click", popup9);

let popup10 = createPopup("#popup10");
document.querySelector("#view10").addEventListener("click", popup10);

let popup11 = createPopup("#popup11");
document.querySelector("#view11").addEventListener("click", popup11);

let popup12 = createPopup("#popup12");
document.querySelector("#view12").addEventListener("click", popup12);