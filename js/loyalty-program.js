!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=53)}({48:function(e,t){var r=document.querySelectorAll(".tabs__button[data-tab]"),n=document.querySelectorAll(".tabs__item[data-tab]");r.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),a(e)}))}));var a=function(e){var t=e.currentTarget.dataset.tab;if(t){var a=document.querySelector(".tabs__item[data-tab='".concat(t,"']"));a&&(n.forEach((function(e){e.classList.remove("active")})),r.forEach((function(e){e.classList.remove("active")})),a.classList.add("active"),e.currentTarget.classList.add("active"))}}},53:function(e,t,r){"use strict";r.r(t);r(48);var n=document.querySelector(".header");n&&n.classList.add("header--dark")}});