parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NyaU":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e.Day="day",e.Night="night"}(e||(e={})),exports.default=e;
},{}],"YHJf":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var e=t(require("./Themes")),s=function(){function t(t,e){this.time=t,this.theme=this.defaultTheme(),this.body=e,this.setTheme()}return t.prototype.defaultTheme=function(){var t=this.time.getHours();return t>6&&t<20?e.default.Day:e.default.Night},t.prototype.toggleTheme=function(){return this.theme===e.default.Day?this.theme=e.default.Night:this.theme=e.default.Day,this.setTheme(),this.theme},t.prototype.setTheme=function(){this.theme===e.default.Day?(this.body.classList.remove(e.default.Night),this.body.classList.add(e.default.Day)):(this.body.classList.remove(e.default.Day),this.body.classList.add(e.default.Night))},t}();exports.default=s;
},{"./Themes":"NyaU"}],"QCba":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./ts/Theme"));document.addEventListener("DOMContentLoaded",function(){var e=new Date,n=document.body,d=new t.default(e,n);document.getElementById("theme-switcher").addEventListener("click",function(e){e.preventDefault(),d.toggleTheme()})});
},{"./ts/Theme":"YHJf"}]},{},["QCba"], null)
//# sourceMappingURL=willock.co.dfb8b3ea.js.map