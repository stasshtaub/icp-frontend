!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=58)}({18:function(e,t){var n=document.getElementById("video-background");n&&(n.onloadeddata=function(){this.classList.add("video-background--loaded")})},58:function(e,t,n){"use strict";n.r(t);var r=function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild},a=document.getElementById("header__checkbox-dropdown"),o=document.querySelector(".header__backdrop--dropdown"),d=document.querySelector(".header__backdrop--level3"),i=document.querySelector(".header__dropdown-list"),c=document.querySelectorAll(".header__navbar-item--has-dropdown"),s=function(){c.forEach((function(e){e.classList.remove("header__navbar-item--active")}))},l=function(e){var t,n=e.target;_(),n.classList.contains("header__navbar-item--active")||setTimeout((function(){a.checked=!0}),0),t=n,s(),t.classList.add("header__navbar-item--active"),i.innerHTML="",JSON.parse(n.dataset.elements).forEach((function(e){var t=e.text,n=e.href,a=e.level3,o=r('<li class="header__dropdown-item"></li>');if(o.addEventListener("mouseenter",_),a){o.classList.add("header__dropdown-item--level2"),o.dataset.elements=JSON.stringify(a);var d=r('<span class="header__dropdown-item-text">'.concat(t,"</span>"));o.append(d),o.addEventListener("mouseenter",f)}else{var c=r('<a href="'.concat(n,'" class="header__dropdown-link">').concat(t,"</a>"));o.append(c)}i.append(o)}))};a.addEventListener("change",s),o.addEventListener("mouseenter",(function(){a.checked=!1,s(),_()})),c.forEach((function(e){e.addEventListener("mouseenter",l)}));var u=document.querySelector(".header__level3-list"),f=function(e){var t=e.target;if(window.innerWidth<530){if(d.classList.contains("header__backdrop--show"))return;d.classList.add("header__backdrop--show")}u.classList.contains("header__level3-list--show")||u.classList.add("header__level3-list--show"),document.querySelectorAll("header__dropdown-item--level2").forEach((function(e){e.classList.remove("header__dropdown-item--active")})),t.classList.add("header__dropdown-item--active"),u.innerHTML="",JSON.parse(t.dataset.elements).forEach((function(e){var t=e.text,n=e.href,a=r('\n\t\t\t<li class="header__dropdown-item">\n\t\t\t\t<a href="'.concat(n,'" class="header__dropdown-link">').concat(t,"</a>\n\t\t\t</li>\n\t\t"));u.append(a)}))},_=function(){d.classList.remove("header__backdrop--show"),u.classList.remove("header__level3-list--show"),u.innerHTML=""};d.addEventListener("mouseenter",_);n(18)}});