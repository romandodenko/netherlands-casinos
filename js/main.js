"use strict"

window.addEventListener("load", windowLoad);

function windowLoad() {
  document.addEventListener("click", function (e) {

    const elementInteractive = e.target;

    if (elementInteractive.closest(".popup__close")) {
      document.querySelectorAll(".popup").forEach(function (e) {
        e.classList.remove("active");
      })
    }

    if (elementInteractive.closest(".popup__exit")) {
      document.querySelectorAll(".popup").forEach(function (e) {
        e.classList.remove("active");
      })
    }

    if (elementInteractive.closest(".hero-item__button")) { // Аккордеон на мобилке

      const casinoItem = elementInteractive.closest(".hero-item");

      const casinoItemPays = casinoItem.querySelector(".hero-item__bottom");

      if (!casinoItem.classList.contains("active")) {

        document.querySelectorAll(".hero-item").forEach(function (e) {
          e.classList.remove("active");
          gsap.to(e.querySelector(".hero-item__bottom"), {
            height: 0,
          });
        })

        casinoItem.classList.add("active");

        gsap.to(casinoItemPays, {
          height: "auto",
        });

      } else if (casinoItem.classList.contains("active")) {

        casinoItem.classList.remove("active");

        gsap.to(casinoItemPays, {
          height: 0,
        });
      }

    }
  })

  // Скрипт для проверки , поддерживает ли браузер webp 

  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });

  // Перекидывание элементов из 1 блока в другой , нумерование hero-item, и получение рейтинга из массива

  const ratingMassive = ["10", "9.9", "9.8", "9.7", "9.6", "9.5", "9.4", "9.3", "9.2", "9.1"];

  const heroItemInit = document.querySelector(".hero-item");

  const heroItem = document.querySelectorAll(".hero-item");

  const popupInit = document.querySelector(".popup");

  const popupAll = document.querySelectorAll(".popup");

  let numId1 = 1000;
  let numId2 = 3000;
  let numId3 = 5000;
  let numId4 = 7000;
  let numId5 = 9000;

  let popupNumId1 = 10000;
  let popupNumId2 = 20000;
  let popupNumId3 = 30000;
  let popupNumId4 = 40000;
  let popupNumId5 = 50000;

  // Рейтинг в карточке
  if (heroItemInit) {
    heroItem.forEach(function (e, i) {

      // Рейтинг :)

      // Высчитываем маску у звездочек, маска должна быть разная 
      e.querySelector(".star-1").id = `mask0_43_${numId1 + i}`;
      e.querySelector(".star-1-mask").setAttribute("mask", `url(#mask0_43_${numId1 + i})`);

      e.querySelector(".star-2").id = `mask0_43_${numId2 + i}`;
      e.querySelector(".star-2-mask").setAttribute("mask", `url(#mask0_43_${numId2 + i})`);

      e.querySelector(".star-3").id = `mask0_43_${numId3 + i}`;
      e.querySelector(".star-3-mask").setAttribute("mask", `url(#mask0_43_${numId3 + i})`);

      e.querySelector(".star-4").id = `mask0_43_${numId4 + i}`;
      e.querySelector(".star-4-mask").setAttribute("mask", `url(#mask0_43_${numId4 + i})`);

      e.querySelector(".star-5").id = `mask0_43_${numId5 + i}`;
      e.querySelector(".star-5-mask").setAttribute("mask", `url(#mask0_43_${numId5 + i})`);

      // Вставляем рейтинг взятый из массива в элемент рейтинга
      e.querySelector(".rating-num").innerHTML = ratingMassive[i];

      let rat = 10 - ratingMassive[i];
      let zalivka = 15 - (rat.toFixed(2) * 14 * 1);
      let zalivkaCircle = (rat.toFixed(2) * 10 * 1);

      e.querySelector(".star-1").style.width = 15;
      e.querySelector(".star-rect-1").style.width = 15;
      e.querySelector(".star-2").style.width = 15;
      e.querySelector(".star-rect-2").style.width = 15;
      e.querySelector(".star-3").style.width = 15;
      e.querySelector(".star-rect-3").style.width = 15;
      e.querySelector(".star-4").style.width = 15;
      e.querySelector(".star-rect-4").style.width = 15;
      e.querySelector(".star-5").style.width = 15;
      e.querySelector(".star-rect-5").style.width = 15;
      e.querySelector(".circle").style.background = "conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B 100%, transparent 0%)";

      e.querySelector(".star-5").style.width = zalivka;
      e.querySelector(".star-rect-5").style.width = zalivka;

      if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka >= 0) {
        e.querySelector(".star-5").style.width = zalivka;
        e.querySelector(".star-rect-5").style.width = zalivka;
        e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${100 - zalivkaCircle}%, transparent 0%)`;
      } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka < 0 && zalivka >= -15) {
        e.querySelector(".star-5").style.width = 0;
        e.querySelector(".star-rect-5").style.width = 0;
        e.querySelector(".star-4").style.width = 15 - Math.abs(zalivka);
        e.querySelector(".star-rect-4").style.width = 15 - Math.abs(zalivka);
        e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${95 - zalivkaCircle}%, transparent 0%)`;
      } else if (parseInt(e.querySelector(".star-4").style.width) <= 15 && zalivka < 0 && zalivka >= -60) {
        e.querySelector(".star-5").style.width = 0;
        e.querySelector(".star-rect-5").style.width = 0;
        e.querySelector(".star-4").style.width = 0;
        e.querySelector(".star-rect-4").style.width = 0;
        e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${90 - zalivkaCircle}%, transparent 0%)`;
        if (zalivka <= -15) {
          if (zalivka >= -30) {
            e.querySelector(".star-3").style.width = 30 - Math.abs(zalivka);
            e.querySelector(".star-rect-3").style.width = 30 - Math.abs(zalivka);
            e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${85 - zalivkaCircle}%, transparent 0%)`;
          } else if (zalivka <= -30) {
            e.querySelector(".star-3").style.width = 0;
            e.querySelector(".star-rect-3").style.width = 0;
            e.querySelector(".star-2").style.width = 43 - Math.abs(zalivka);
            e.querySelector(".star-rect-2").style.width = 43 - Math.abs(zalivka);
            e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${80 - zalivkaCircle}%, transparent 0%)`;
            if (zalivka <= -43) {
              e.querySelector(".star-2").style.width = 0;
              e.querySelector(".star-rect-2").style.width = 0;
              e.querySelector(".star-1").style.width = 57 - Math.abs(zalivka);
              e.querySelector(".star-rect-1").style.width = 57 - Math.abs(zalivka);
              e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${75 - zalivkaCircle}%, transparent 0%)`;
              if (zalivka <= -57) {
                e.querySelector(".star-2").style.width = 0;
                e.querySelector(".star-rect-2").style.width = 0;
                e.querySelector(".star-1").style.width = 58 - Math.abs(zalivka);
                e.querySelector(".star-rect-1").style.width = 58 - Math.abs(zalivka);
                e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${71 - zalivkaCircle}%, transparent 0%)`;
              }
            }
          }
        }
      }

      // Нумерование
      if (e.querySelector(".hero-item-num__number")) {
        e.querySelector(".hero-item-num__number").innerHTML = i + 1;
      }

      // Перекидывание
      let heroItemBottomitem = e.querySelector(".hero-item__bottom-item");
      let heroItemMiddle = e.querySelector(".hero-item__middle");
      let heroItemRight = e.querySelector(".hero-item__right");
      let heroItemPays = e.querySelector(".hero-item__pays");
      let heroItemMiddleList = e.querySelector(".hero-item__middle-list");
      let heroItemRating = e.querySelector(".hero-item-rating");
      let heroItemMiddleContent = e.querySelector(".hero-item__middle-content");

      if (document.body.clientWidth < 769) {
        heroItemBottomitem.append(heroItemPays);
      }

      if (document.body.clientWidth < 551) {
        heroItemBottomitem.append(heroItemMiddleList);
        heroItemMiddle.append(heroItemRating);
        heroItemRight.append(heroItemMiddleContent);
      }
    })
  }

  // Рейтинг в попапе
  if (popupInit) {
    popupAll.forEach(function (e, i) {

      // Рейтинг :)

      // Высчитываем маску у звездочек, маска должна быть разная 
      e.querySelector(".star-1").id = `mask0_43_${popupNumId1 + i}`;
      e.querySelector(".star-1-mask").setAttribute("mask", `url(#mask0_43_${popupNumId1 + i})`);

      e.querySelector(".star-2").id = `mask0_43_${popupNumId2 + i}`;
      e.querySelector(".star-2-mask").setAttribute("mask", `url(#mask0_43_${popupNumId3 + i})`);

      e.querySelector(".star-3").id = `mask0_43_${popupNumId3 + i}`;
      e.querySelector(".star-3-mask").setAttribute("mask", `url(#mask0_43_${popupNumId3 + i})`);

      e.querySelector(".star-4").id = `mask0_43_${popupNumId4 + i}`;
      e.querySelector(".star-4-mask").setAttribute("mask", `url(#mask0_43_${popupNumId4 + i})`);

      e.querySelector(".star-5").id = `mask0_43_${popupNumId5 + i}`;
      e.querySelector(".star-5-mask").setAttribute("mask", `url(#mask0_43_${popupNumId5 + i})`);

      // Вставляем рейтинг взятый из массива в элемент рейтинга
      e.querySelector(".rating-num").innerHTML = ratingMassive[i];

      let rat = 10 - ratingMassive[i];
      let zalivka = 15 - (rat.toFixed(2) * 14 * 1);
      let zalivkaCircle = (rat.toFixed(2) * 10 * 1);

      e.querySelector(".star-1").style.width = 15;
      e.querySelector(".star-rect-1").style.width = 15;
      e.querySelector(".star-2").style.width = 15;
      e.querySelector(".star-rect-2").style.width = 15;
      e.querySelector(".star-3").style.width = 15;
      e.querySelector(".star-rect-3").style.width = 15;
      e.querySelector(".star-4").style.width = 15;
      e.querySelector(".star-rect-4").style.width = 15;
      e.querySelector(".star-5").style.width = 15;
      e.querySelector(".star-rect-5").style.width = 15;
      e.querySelector(".circle").style.background = "conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B 100%, transparent 0%)";

      e.querySelector(".star-5").style.width = zalivka;
      e.querySelector(".star-rect-5").style.width = zalivka;

      if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka >= 0) {
        e.querySelector(".star-5").style.width = zalivka;
        e.querySelector(".star-rect-5").style.width = zalivka;
        e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${100 - zalivkaCircle}%, transparent 0%)`;
      } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka < 0 && zalivka >= -15) {
        e.querySelector(".star-5").style.width = 0;
        e.querySelector(".star-rect-5").style.width = 0;
        e.querySelector(".star-4").style.width = 15 - Math.abs(zalivka);
        e.querySelector(".star-rect-4").style.width = 15 - Math.abs(zalivka);
        e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${95 - zalivkaCircle}%, transparent 0%)`;
      } else if (parseInt(e.querySelector(".star-4").style.width) <= 15 && zalivka < 0 && zalivka >= -60) {
        e.querySelector(".star-5").style.width = 0;
        e.querySelector(".star-rect-5").style.width = 0;
        e.querySelector(".star-4").style.width = 0;
        e.querySelector(".star-rect-4").style.width = 0;
        e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${90 - zalivkaCircle}%, transparent 0%)`;
        if (zalivka <= -15) {
          if (zalivka >= -30) {
            e.querySelector(".star-3").style.width = 30 - Math.abs(zalivka);
            e.querySelector(".star-rect-3").style.width = 30 - Math.abs(zalivka);
            e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${85 - zalivkaCircle}%, transparent 0%)`;
          } else if (zalivka <= -30) {
            e.querySelector(".star-3").style.width = 0;
            e.querySelector(".star-rect-3").style.width = 0;
            e.querySelector(".star-2").style.width = 43 - Math.abs(zalivka);
            e.querySelector(".star-rect-2").style.width = 43 - Math.abs(zalivka);
            e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${80 - zalivkaCircle}%, transparent 0%)`;
            if (zalivka <= -43) {
              e.querySelector(".star-2").style.width = 0;
              e.querySelector(".star-rect-2").style.width = 0;
              e.querySelector(".star-1").style.width = 57 - Math.abs(zalivka);
              e.querySelector(".star-rect-1").style.width = 57 - Math.abs(zalivka);
              e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${75 - zalivkaCircle}%, transparent 0%)`;
              if (zalivka <= -57) {
                e.querySelector(".star-2").style.width = 0;
                e.querySelector(".star-rect-2").style.width = 0;
                e.querySelector(".star-1").style.width = 58 - Math.abs(zalivka);
                e.querySelector(".star-rect-1").style.width = 58 - Math.abs(zalivka);
                e.querySelector(".circle").style.background = `conic-gradient(from 360deg at 50% 50%, #167B4B 0deg, #167B4B 0deg, #167B4B ${71 - zalivkaCircle}%, transparent 0%)`;
              }
            }
          }
        }
      }
    })
  }

  // Безопасный падинг если отсутствует элемент hero-item__rate 

  const heroItemMiddle = document.querySelectorAll(".hero-item__middle");

  if (document.body.clientWidth > 551) {
    heroItemMiddle.forEach(function (e) {
      if (e.querySelector(".hero-item__rate")) {
        e.style.paddingTop = 16 + "px";
      }
    })
  } else {
    heroItemMiddle.forEach(function (e) {
      e.style.paddingTop = 8 + "px";
    })
  }

  let popupTimer, timeOut = 4000;
  let flag = true;

  function displayPopup() {
    if (flag) {
      document.querySelector(".popup").classList.add("active")
    }
  }

  popupTimer = setTimeout(displayPopup, timeOut);

  window.addEventListener("scroll", function (e) {
    clearTimeout(popupTimer);
    popupTimer = setTimeout(displayPopup, timeOut);
  })
  document.addEventListener("click", function (e) {
    const elementTarget = e.target;
    if (elementTarget.closest(".popup__close") || elementTarget.closest(".popup__exit")) {
      flag = false;
      clearTimeout(popupTimer);
      document.querySelector(".popup").classList.remove("active")
    }

    if (elementTarget) {
      clearTimeout(popupTimer);
      popupTimer = setTimeout(displayPopup, timeOut);
    }
  });

  document.addEventListener("mouseover", function () {
    clearTimeout(popupTimer);
    popupTimer = setTimeout(displayPopup, timeOut);
  })

};