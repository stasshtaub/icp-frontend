!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=55)}({2:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(4),i=n.n(o),r=n(5),l=n.n(r),a=n(2),c=n.n(a),d=function(){function e(t,n,o,r){var l=this,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(i()(this,e),c()(this,"el",null),c()(this,"_title",""),n)this.el=n;else{var d=document.createElement("div");d.innerHTML='\n                <div class="modal '.concat(a,'">\n                    <div class="modal__backdrop modal__close-trigger">\n                    </div>\n                    <div class="modal__window modal__window--active">\n                        <div class="modal__header">\n                            <p class="modal__title">').concat(this.title,'</p>\n                            <div class="modal__close-btn ').concat(o?"modal__close-btn--white":"",' modal__close-trigger"></div>\n                        </div>\n                        <div class="modal__content">\n                        </div>\n                    </div>\n                </div>\n            '),this.el=d.querySelector(".modal")}var s=this.el.querySelectorAll(".modal__close-trigger");s.forEach((function(e){e.addEventListener("click",(function(){r?l.destroy():l.hideModal()}))})),this.title=t}return l()(e,[{key:"setContent",value:function(e){this.el.querySelector(".modal__content").innerHTML=e}},{key:"showModal",value:function(){this.el.classList.add("modal--active"),document.documentElement.classList.add("noscroll")}},{key:"hideModal",value:function(){this.el.classList.remove("modal--active"),document.documentElement.classList.remove("noscroll")}},{key:"mount",value:function(){document.body.append(this.el)}},{key:"destroy",value:function(){var e=this;this.hideModal(),setTimeout((function(){var t;null===(t=e.el.parentNode)||void 0===t||t.removeChild(e.el)}),100)}},{key:"title",get:function(){return this._title},set:function(e){this._title=e,this.el.querySelector(".modal__title").textContent=e}}]),e}()},4:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},5:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},55:function(e,t,n){"use strict";n.r(t);var o=n(3);document.querySelectorAll("[data-video]").forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset,n=t.video,o=t.modalTitle,r=t.videoName;n&&i(n,o,r)}))}));var i=function(e,t,n){var i=new o.a(t,void 0,!0,!0,"modal--video"),r='\n        <div class="modal__iframe-wrp">\n            <div class="loader loader--active loader--transparent"></div>\n            <iframe class="modal__iframe" width="560" height="315" src="'.concat(e,'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n        </div>\n        <div class="modal__description">\n            <p class="text text--s">').concat(n,"</p>\n        </div>\n    ");i.setContent(r),i.mount(),i.showModal()}}});