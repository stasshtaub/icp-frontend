!function(e){var i={};function t(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=i,t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var n in e)t.d(a,n,function(i){return e[i]}.bind(null,n));return a},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="",t(t.s=24)}({24:function(e,i,t){"use strict";t.r(i);t(25),t(26),t(27),t(28),t(29),t(30)},25:function(e,i){new Swiper(".capabilities-program__slider",{slidesPerView:"auto",autoHeight:!0,navigation:{nextEl:".capabilities-program__btn--next",prevEl:".capabilities-program__btn--prev"},pagination:{el:".capabilities-program__dots",bulletClass:"slider__dots-item",bulletActiveClass:"slider__dots-item--active capabilities-program__dots-item--active",renderBullet:function(e,i){return'<li class="'.concat(i,'"><div class="slider__dot capabilities-program__dot"></div></li>')},clickable:!0},mousewheel:{forceToAxis:!0,invert:!0,sensitivity:.7},breakpoints:{1075:{autoHeight:!1}}})},26:function(e,i){var t=document.querySelector(".capabilities-allows__counter-total"),a=document.querySelector(".capabilities-allows__counter-curr");new Swiper(".capabilities-allows__slider",{slidesPerView:1,loop:!0,navigation:{nextEl:".capabilities-allows__btn--next",prevEl:".capabilities-allows__btn--prev"},pagination:{el:".capabilities-allows__dots",bulletClass:"slider__dot",bulletActiveClass:"slider__dot--active",clickable:!0},on:{init:function(e){t.textContent=e.slides.length-2},slideChange:function(e){var i=e.realIndex;a.textContent=i+1}}})},27:function(e,i){var t,a=document.querySelector(".capabilities-leading__content"),n=document.querySelector(".capabilities-leading__persons"),l=document.querySelectorAll(".capabilities-leading__person"),r=window.matchMedia("screen and (max-width: 768px)"),s=function(){r.matches?o():t&&c()},o=function(){a.classList.add("swiper-container"),n.classList.add("swiper-wrapper"),l.forEach((function(e){e.classList.add("swiper-slide")})),t=new Swiper(".capabilities-leading__content",{slidesPerView:1,loop:!0,pagination:{el:".capabilities-leading__dots",bulletClass:"slider__dots-item",bulletActiveClass:"slider__dots-item--active capabilities-leading__dots-item--active",renderBullet:function(e,i){return'<li class="'.concat(i,'"><div class="slider__dot capabilities-leading__dot"></div></li>')},clickable:!0},navigation:{nextEl:".capabilities-leading__buttons > .slider__btn--next",prevEl:".capabilities-leading__buttons > .slider__btn--prev"}})},c=function(){a.classList.remove("swiper-container"),n.classList.remove("swiper-wrapper"),l.forEach((function(e){e.classList.remove("swiper-slide")})),t.destroy(!0,!0)};try{r.addEventListener("change",s)}catch(e){try{r.addListener(s)}catch(e){console.error(e)}}s()},28:function(e,i){new Swiper(".capabilities-reviews__slider",{slidesPerView:1,loop:!0,pagination:{el:".capabilities-reviews__dots",bulletClass:"slider__dots-item",bulletActiveClass:"slider__dots-item--active capabilities-reviews__dots-item--active",renderBullet:function(e,i){return'<li class="'.concat(i,'"><div class="slider__dot slider__dot--blue capabilities-reviews__dot"></div></li>')},clickable:!0}})},29:function(e,i){var t=document.querySelector(".capabilities-more__list");if(t){new IntersectionObserver((function(e,i){e.forEach((function(e){var i=e.isIntersecting,t=e.target;i?t.classList.add("capabilities-more__list--animated"):t.classList.remove("capabilities-more__list--animated")}))}),{threshold:1}).observe(t)}},30:function(e,i){var t=document.querySelector(".capabilities-changes__strikethrough");t&&new IntersectionObserver((function(e){e.forEach((function(e){var i=e.isIntersecting,t=e.target;i&&t.classList.add("capabilities-changes__strikethrough--animated")}))})).observe(t)}});