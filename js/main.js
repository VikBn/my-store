!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="js/",r(r.s=0)}([function(e,t){function r(e,t,r,n,o,u,c){try{var a=e[u](c),i=a.value}catch(e){return void r(e)}a.done?t(i):Promise.resolve(i).then(n,o)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}document.querySelector(".cart-btn"),document.querySelector(".close-cart"),document.querySelector(".clear-cart"),document.querySelector(".cart"),document.querySelector(".cart-overlay"),document.querySelector(".cart-items"),document.querySelector(".cart-total"),document.querySelector(".cart-content"),document.querySelector(".products-center");var u=function(){function e(){n(this,e)}var t,u,c;return t=e,(u=[{key:"getProducts",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("../products.json");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}),function(){var t=this,n=arguments;return new Promise(function(o,u){var c=e.apply(t,n);function a(e){r(c,o,u,a,i,"next",e)}function i(e){r(c,o,u,a,i,"throw",e)}a(void 0)})});return function(){return t.apply(this,arguments)}}()}])&&o(t.prototype,u),c&&o(t,c),e}();document.addEventListener("DOMContentLoaded",function(){(function e(){n(this,e)})();(new u).getProducts().then(function(e){return console.log(e)})})}]);