!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=57)}({0:function(t,e,n){t.exports=n(6)},1:function(t,e){function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}},10:function(t,e,n){var r=n(12),o=n(13),a=n(9),i=n(14);t.exports=function(t,e){return r(t)||o(t,e)||a(t,e)||i()}},12:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},13:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},14:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},2:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},3:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(4),o=n.n(r),a=n(5),i=n.n(a),c=n(2),s=n.n(c),l=function(){function t(e,n,r,a){var i=this,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(o()(this,t),s()(this,"el",null),s()(this,"_title",""),n)this.el=n;else{var l=document.createElement("div");console.log("customClass",c),l.innerHTML='\n                <div class="modal '.concat(c,'">\n                    <div class="modal__backdrop modal__close-trigger">\n                    </div>\n                    <div class="modal__window modal__window--active">\n                        <div class="modal__header">\n                            <p class="modal__title">').concat(this.title,'</p>\n                            <div class="modal__close-btn ').concat(r?"modal__close-btn--white":"",' modal__close-trigger"></div>\n                        </div>\n                        <div class="modal__content">\n                        </div>\n                    </div>\n                </div>\n            '),this.el=l.querySelector(".modal")}var u=this.el.querySelectorAll(".modal__close-trigger");u.forEach((function(t){t.addEventListener("click",(function(){a?i.destroy():i.hideModal()}))})),this.title=e}return i()(t,[{key:"setContent",value:function(t){this.el.querySelector(".modal__content").innerHTML=t}},{key:"showModal",value:function(){this.el.classList.add("modal--active"),document.documentElement.classList.add("noscroll")}},{key:"hideModal",value:function(){this.el.classList.remove("modal--active"),document.documentElement.classList.remove("noscroll")}},{key:"mount",value:function(){document.body.append(this.el)}},{key:"destroy",value:function(){var t=this;this.hideModal(),setTimeout((function(){var e;null===(e=t.el.parentNode)||void 0===e||e.removeChild(t.el)}),100)}},{key:"title",get:function(){return this._title},set:function(t){this._title=t,this.el.querySelector(".modal__title").textContent=t}}]),t}()},4:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},5:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},53:function(t,e){var n=document.querySelector(".about-news__nav-mask--left"),r=document.querySelector(".about-news__nav-mask--right"),o=document.querySelector(".about-news__nav-btn--prev"),a=document.querySelector(".about-news__nav-btn--next");new Swiper(".about-news__slider",{slidesPerView:"auto",spaceBetween:30,navigation:{prevEl:o,nextEl:a},on:{reachBeginning:function(){n.classList.remove("about-news__nav-mask--visible")},reachEnd:function(){r.classList.remove("about-news__nav-mask--visible")},fromEdge:function(t){var e=t.activeIndex;0!==e||n.classList.contains("about-news__nav-mask--visible")?r.classList.contains("about-news__nav-mask--visible")||(console.log("from end",e),r.classList.add("about-news__nav-mask--visible")):n.classList.add("about-news__nav-mask--visible")}}})},54:function(t,e){document.querySelectorAll(".news-detail2-slider__container").forEach((function(t){swiper=new Swiper(t,{navigation:{nextEl:".slider__btn--next",prevEl:".slider__btn--prev"},pagination:{el:".news-detail2-slider__dots",bulletClass:"slider__dots-item news-detail2-slider__dots-item",bulletActiveClass:"active",renderBullet:function(t,e){return'<li class="'.concat(e,'"><div class="slider__dot"></div></li>')},clickable:!0},mousewheel:{forceToAxis:!0,invert:!0,sensitivity:.7}})}))},57:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n.n(r),a=document.querySelector(".news-detail2-card__col--aside");a&&new IntersectionObserver((function(t){var e=o()(t,1)[0];e.isIntersecting?e.target.classList.remove("hidden"):(e.target.classList.add("hidden"),window.dispatchEvent(new Event("resize")))})).observe(a);n(53),n(54);var i=n(0),c=n.n(i),s=n(1),l=n.n(s),u=n(7),d=document.getElementById("comments-form");if(d){var f=d.querySelector(".loader");d.addEventListener("submit",(function(t){t.preventDefault(),grecaptcha.ready(l()(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f&&f.classList.add("loader--active"),t.next=3,grecaptcha.execute("6LeU5UkaAAAAALkmPBk8OgAGsiWiT4HeLcIdVw_v",{action:"add_comment"});case 3:return e=t.sent,t.next=6,y(e);case 6:f&&f.classList.remove("loader--active");case 7:case"end":return t.stop()}}),t)}))))}));var v=document.querySelectorAll(".comment__reply-btn"),h=d.querySelector("[name='reply']"),p=d.querySelector("[name='text']");v.forEach((function(t){t.addEventListener("click",(function(t){var e=t.target.dataset,n=e.commentId,r=e.authorName;n&&r&&m(n,r)}))}));var m=function(t,e){if(h){h.value=t;var n=document.createElement("div");n.innerHTML='\n\t\t\t\t<div class="comments-form__reply-tag">\n\t\t\t\t\t<div class="comments-form__reply-tag-content">\n\t\t\t\t\t\t<span class="text text--xs">Ответ для '.concat(e,'</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class="comments-form__reply-tag-close"></button>\n\t\t\t\t</div>\n\t\t\t');var r=n.children[0];r.querySelector(".comments-form__reply-tag-close").addEventListener("click",(function(){r.parentElement.removeChild(r),h.value=""})),p.before(r),p.parentElement.parentElement.scrollIntoView({behavior:"smooth"})}}}var y=function(){var t=l()(c.a.mark((function t(e){var n,r,o,a,i,s,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=d.action,r=d.method,!n){t.next=21;break}return(o=new g(d)).append("g-recaptcha",e),t.prev=4,t.next=7,fetch(n,{method:r,body:o});case 7:return l=t.sent,t.next=10,l.json();case 10:a="Комментарий успешно отправлен",t.next=18;break;case 13:t.prev=13,t.t0=t.catch(4),a="Не удалось отправить комментарий",i="Произошла какая-то внутренная ошибка сайта и ваш комментарий не отправлен.",s="danger";case 18:return t.prev=18,Object(u.a)(a,null,i,s),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[4,13,18,21]])})));return function(e){return t.apply(this,arguments)}}(),g=function(t){var e=new FormData(t);return t.querySelectorAll("[contenteditable='true']").forEach((function(t){var n=t.dataset.name;n&&e.append(n,t.textContent)})),e},_=document.querySelector(".comments-form__avatar-img"),b=document.querySelector(".comments-form__avatar-input"),w=document.querySelector(".comments-form__avatar-label");b.addEventListener("change",(function(t){var e=t.target.files[0],n=new FileReader;n.readAsDataURL(e),n.onloadend=function(){var t=n.result;_.style.background="url(".concat(t,") center center/cover")}})),w.addEventListener("keypress",(function(t){" "!==t.key&&"Enter"!==t.key||w.click()}));var x=document.querySelector(".header");x&&x.classList.add("header--dark")},6:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function d(){}function f(){}function v(){}var h={};h[o]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(E([])));m&&m!==e&&n.call(m,o)&&(h=m);var y=v.prototype=d.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=y.constructor=v,v.constructor=f,f.displayName=c(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new _(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},7:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(3),o=function(t,e,n){return'\n        <div class="message message--'.concat(n,'">\n            <div class="message__body">\n                ').concat(e||"","\n            </div>\n            ").concat(t,"\n        </div>\n    ")},a=function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"success",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5;if(!e)switch(a){case"success":e='\n                    <footer>\n                        <span class="text">Окно автоматически закроется через:&nbsp;</span>\n                        <span class="message__timer text text--bold">'.concat(i," секунд</span>\n                    </footer>\n                ");break;case"danger":e='\n                    <footer>\n                        <span class="text">Обратитесь пожалуйста к администратору по эл. почте:&nbsp;</span>\n                        <span class="text text--bold">help@icpcentre.org</span>\n                    </footer>\n                '}var c=o(e,n,a),s=new r.a(t,null,!0,!0);if(s.setContent(c),s.mount(),s.showModal(),"success"===a)var l={5:"5 секунд",4:"4 секунды",3:"3 секунды",2:"2 секунды",1:"1 секунду"},u=s.el.querySelector(".message__timer"),d=5,f=setInterval((function(){d--,u.textContent=l[d],0===d&&(clearInterval(f),s.destroy())}),1e3)}},8:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},9:function(t,e,n){var r=n(8);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}}});