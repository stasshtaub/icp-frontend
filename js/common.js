!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1)},function(e,t){var n=document.getElementById("header__checkbox-dropdown"),r=document.querySelector(".header__dropdown-list"),o=document.querySelectorAll(".header__navbar-item--has-dropdown"),a=function(){o.forEach((function(e){e.classList.remove("header__navbar-item--active")}))},c=function(e){var t,o=e.target;o.classList.contains("header__navbar-item--active")||setTimeout((function(){n.checked=!0}),0),t=o,a(),t.classList.add("header__navbar-item--active"),r.innerHTML="",JSON.parse(o.dataset.elements).forEach((function(e){var t=e.text,n=e.href,o='\n                <li class="header__dropdown-item">\n                    <a href="'.concat(n,'" class="header__dropdown-link">').concat(t,"</a>\n                </li>\n            ");r.insertAdjacentHTML("beforeend",o)}))};n.addEventListener("change",(function(){a()})),o.forEach((function(e){e.addEventListener("mouseenter",c)}))}]);