!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1),t(2)},function(e,n){var t=document.getElementById("header__checkbox-dropdown"),r=document.querySelector(".header__backdrop--dropdown"),o=document.querySelector(".header__dropdown-list"),a=document.querySelectorAll(".header__navbar-item--has-dropdown"),d=function(){a.forEach((function(e){e.classList.remove("header__navbar-item--active")}))},c=function(e){var n,r=e.target;r.classList.contains("header__navbar-item--active")||setTimeout((function(){t.checked=!0}),0),n=r,d(),n.classList.add("header__navbar-item--active"),o.innerHTML="",JSON.parse(r.dataset.elements).forEach((function(e){var n=e.text,t=e.href,r='\n                <li class="header__dropdown-item">\n                    <a href="'.concat(t,'" class="header__dropdown-link">').concat(n,"</a>\n                </li>\n            ");o.insertAdjacentHTML("beforeend",r)}))},i=function(){t.checked=!1,d()};t.addEventListener("change",(function(){d()})),r.addEventListener("mouseenter",i),r.addEventListener("touchend",i),a.forEach((function(e){e.addEventListener("mouseenter",c),e.addEventListener("touchend",c)}))},function(e,n){document.getElementById("video-background").onloadeddata=function(){this.classList.add("video-background--loaded")}}]);