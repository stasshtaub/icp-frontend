!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=19)}({19:function(e,r,t){"use strict";t.r(r);t(20);var n=document.querySelector(".header");n&&n.classList.add("header--dark")},20:function(e,r){var t="branches-map__adress-wrp--collapsed",n=document.querySelectorAll(".branches-map__adress-wrp");document.querySelectorAll(".branches-map__branch-info").forEach((function(e){var r=e.querySelector(".branches-map__city"),o=e.querySelector(".branches-map__adress-wrp"),a=e.querySelector(".branches-map__adress");r.addEventListener("click",(function(){o.classList.contains(t)?(n.forEach((function(e){var r=e.classList;r.contains(t)||r.add(t)})),o.classList.remove(t),o.style.height="".concat(a.offsetHeight,"px")):o.classList.add(t)}))}))}});