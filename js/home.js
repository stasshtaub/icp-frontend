!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}({20:function(e,t,r){"use strict";r.r(t);r(21),r(22),r(23)},21:function(e,t){var r,n=document.querySelector(".advantages__slider"),s=document.querySelector(".advantages__list"),o=document.querySelectorAll(".advantages__list-item"),i=window.matchMedia("screen and (max-width: 425px)"),l=function(){i.matches?(console.log("init"),a()):r&&(console.log("destroy"),c())},a=function(){n.classList.add("swiper-container"),s.classList.add("swiper-wrapper"),o.forEach((function(e){e.classList.add("swiper-slide")})),r=new Swiper(".advantages__slider",{spaceBetween:50,slidesPerView:1,loop:!0,pagination:{el:".advantages__dots",bulletClass:"slider__dot",bulletActiveClass:"slider__dot--active",clickable:!0}})},c=function(){n.classList.remove("swiper-container"),s.classList.remove("swiper-wrapper"),o.forEach((function(e){e.classList.remove("swiper-slide")})),r.destroy(!0,!0)};try{i.addEventListener("change",l)}catch(e){try{i.addListener(l)}catch(e){console.error(e)}}l()},22:function(e,t){var r=document.querySelector(".strengths__counter-total"),n=document.querySelector(".strengths__counter-curr");new Swiper(".strengths__slider",{slidesPerView:1,loop:!0,navigation:{nextEl:".strengths__btn--next",prevEl:".strengths__btn--prev"},pagination:{el:".strengths__dots",bulletClass:"slider__dot",bulletActiveClass:"slider__dot--active",clickable:!0},on:{init:function(e){r.textContent=e.slides.length-2},slideChange:function(e){var t=e.realIndex;n.textContent=t+1}}})},23:function(e,t){new Swiper(".programs-carousel__slider",{slidesPerView:1,loop:!0,speed:600,centeredSlides:!0,navigation:{nextEl:".programs-carousel__btn--next",prevEl:".programs-carousel__btn--prev"},pagination:{el:".programs-carousel__dots",bulletClass:"slider__dot",bulletActiveClass:"slider__dot--active",clickable:!0},breakpoints:{426:{slidesPerView:2,loopedSlides:2},769:{slidesPerView:3}}})}});