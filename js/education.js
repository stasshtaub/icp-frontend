!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=59)}({1:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(1),i=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.querySelector(".swiper-container"),r=e.querySelector(".inline-slider__nav-mask--left"),i=e.querySelector(".inline-slider__nav-mask--right"),o=e.querySelector(".inline-slider__nav-btn--prev"),l=e.querySelector(".inline-slider__nav-btn--next");new Swiper(n,{slidesPerView:"auto",spaceBetween:30,navigation:{prevEl:o,nextEl:l},mousewheel:{forceToAxis:!0,invert:!0,sensitivity:.7},on:c({reachBeginning:function(){r.classList.remove("inline-slider__nav-mask--visible")},reachEnd:function(){i.classList.remove("inline-slider__nav-mask--visible")},fromEdge:function(e){0!==e.activeIndex||r.classList.contains("inline-slider__nav-mask--visible")?i.classList.contains("inline-slider__nav-mask--visible")||i.classList.add("inline-slider__nav-mask--visible"):r.classList.add("inline-slider__nav-mask--visible")}},t)})}},59:function(e,t,n){"use strict";n.r(t);var r=n(11),i=document.querySelector(".education-type__inline-slider");if(i){var o={init:function(){var e=this;setTimeout((function(){e.update()}),500)}};Object(r.a)(i,o)}var c=n(1),l=n.n(c),a=function(e,t,n){e.parentElement.removeChild(e),t.insertAdjacentElement(n,e)};function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=document.querySelector(".education-online__slider .swiper-container"),f=document.querySelector(".education-online__thumbs .swiper-container"),p=document.querySelector(".education-online__btn--prev"),v=document.querySelector(".education-online__btn--next"),b={spaceBetween:30,slidesPerView:1},y=new Swiper(f,u(u({},b),{},{watchSlidesProgress:!0})),m=new Swiper(d,u(u({},b),{},{navigation:{prevEl:p,nextEl:v},mousewheel:{forceToAxis:!0,invert:!0,sensitivity:.7}}));m.controller.control=y,y.controller.control=m;var O=document.querySelector(".education-online__title"),_=document.querySelector(".education-online__col--right"),g=document.querySelector(".education-online__steps"),w=window.matchMedia("screen and (max-width: 1024px)"),j=function(){w.matches?a(O,g,"afterbegin"):a(O,_,"afterbegin")};try{w.addEventListener("change",j)}catch(e){try{w.addListener(j)}catch(e){console.error(e)}}j();var h=document.querySelector(".header");h&&h.classList.add("header--dark")}});