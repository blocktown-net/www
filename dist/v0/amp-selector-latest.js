(self.AMP=self.AMP||[]).push({n:"amp-selector",v:"1910151804560",f:(function(AMP,_){
var k,m="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},p;if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var r={a:!0},t={};try{t.__proto__=r;q=t.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=p;function v(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var w=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function x(a){return a?Array.prototype.slice.call(a):[]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var y=self.__AMP_LOG;function z(){if(!y.user)throw Error("failed to call initLogConstructor");return y.user}function A(a,b){z().assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function B(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){if(y.dev)a=y.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var e=0;e<c.length;e++)0!=c[e].length&&("-"==c[e][0]?a[c[e].substr(1)]=!1:a[c[e]]=!0);return a};function C(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),e=b!=c;var d=c;if(d.__AMP__EXPERIMENT_TOGGLES)var h=d.__AMP__EXPERIMENT_TOGGLES;else{d.__AMP__EXPERIMENT_TOGGLES=Object.create(null);h=d.__AMP__EXPERIMENT_TOGGLES;if(d.AMP_CONFIG)for(var g in d.AMP_CONFIG){var f=d.AMP_CONFIG[g];"number"===typeof f&&0<=f&&1>=f&&(h[g]=Math.random()<f)}if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-doc-opt-in"])&&0<d.AMP_CONFIG["allow-doc-opt-in"].length&&(g=d.AMP_CONFIG["allow-doc-opt-in"],
f=d.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){f=f.getAttribute("content").split(",");for(var l=0;l<f.length;l++)-1!=g.indexOf(f[l])&&(h[f[l]]=!0)}Object.assign(h,B(d));if(d.AMP_CONFIG&&Array.isArray(d.AMP_CONFIG["allow-url-opt-in"])&&0<d.AMP_CONFIG["allow-url-opt-in"].length){g=d.AMP_CONFIG["allow-url-opt-in"];f=d.location.originalHash||d.location.hash;d=Object.create(null);if(f)for(var n;n=w.exec(f);)l=v(n[1],n[1]),n=n[2]?v(n[2].replace(/\+/g," "),n[2]):"",d[l]=n;for(f=
0;f<g.length;f++)l=d["e-"+g[f]],"1"==l&&(h[g[f]]=!0),"0"==l&&(h[g[f]]=!1)}}var V=!!h["ampdoc-fie"];e&&!V?a=D(b,"action")?E(b,"action"):null:(a=F(a),a=F(a),a=a.isSingleDoc()?a.win:a,a=D(a,"action")?E(a,"action"):null);return a}function F(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=E(b,"ampdoc").getAmpDoc(a)}return a}
function E(a,b){D(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var e=c;a=e[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function D(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function G(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function H(a){return a.closest?a.closest("[option]"):G(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"[option]"):!1})}function I(a){var b=a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr";return"rtl"==b};function J(a,b){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0};var K={NONE:"none",FOCUS:"focus",SELECT:"select"};function L(a){a=AMP.BaseElement.call(this,a)||this;a.l=!1;a.j=[];a.c=[];a.w=[];a.A=null;a.h=0;a.m="none";return a}var M=AMP.BaseElement;L.prototype=m(M.prototype);L.prototype.constructor=L;if(u)u(L,M);else for(var N in M)if("prototype"!=N)if(Object.defineProperties){var O=Object.getOwnPropertyDescriptor(M,N);O&&Object.defineProperty(L,N,O)}else L[N]=M[N];L.H=M.prototype;k=L.prototype;k.isLayoutSupported=function(){return!0};
k.buildCallback=function(){var a=this;this.A=C(this.element);this.l=this.element.hasAttribute("multiple");this.element.hasAttribute("role")||this.element.setAttribute("role","listbox");this.l&&this.element.setAttribute("aria-multiselectable","true");this.element.hasAttribute("disabled")&&this.element.setAttribute("aria-disabled","true");var b=this.element.getAttribute("keyboard-select-mode");b?(b=b.toLowerCase(),z().assertEnumValue(K,b),A(!(this.l&&"select"==b),"[keyboard-select-mode=select] not supported for multiple selection amp-selector")):
b="none";this.m=b;this.registerAction("clear",this.o.bind(this));P(this);this.element.addEventListener("click",this.B.bind(this));this.element.addEventListener("keydown",this.C.bind(this));this.registerAction("selectUp",function(b){var c=b.args;Q(a,c&&void 0!==c.delta?-c.delta:-1)},1);this.registerAction("selectDown",function(b){b=b.args;Q(a,b&&void 0!==b.delta?b.delta:1)},1);this.registerAction("toggle",function(b){b=b.args;A(0<=b.index,"'index' must be greater than 0");A(b.index<a.c.length,"'index' must be less than the length of options in the <amp-selector>");
return b&&void 0!==b.index?R(a,b.index,b.value):Promise.reject("'index' must be specified")},1);this.element.addEventListener("amp:dom-update",this.D.bind(this))};k.mutatedAttributesCallback=function(a){var b=a.selected;void 0!==b&&aa(this,b);var c=a.disabled;void 0!==c&&(c?this.element.setAttribute("aria-disabled","true"):this.element.removeAttribute("aria-disabled"))};
function aa(a,b){var c=Array.isArray(b)?b:[b];if(null===b||0==c.length)a.o();else{a.l||(c=c.slice(0,1));var e=S(a);if(!J(e.sort(),c.sort())){var d=c.reduce(function(a,b){a[b]=!0;return a},Object.create(null));for(b=0;b<a.c.length;b++){c=a.c[b];var h=c.getAttribute("option");d[h]?T(a,c):U(a,c)}W(a);X(a)}}}function W(a,b){if("none"!=a.m){a.c.forEach(function(a){a.tabIndex=-1});var c=b;c||(c=a.l?a.c[0]:a.j[0]||a.c[0]);c&&(a.h=a.c.indexOf(c),c.tabIndex=0)}}
k.D=function(){var a=x(this.element.querySelectorAll("[option]"));J(this.c,a)||P(this,a)};function P(a,b){a.j.length=0;var c=b?b:x(a.element.querySelectorAll("[option]"));c.forEach(function(b){b.hasAttribute("role")||b.setAttribute("role","option");b.hasAttribute("disabled")&&b.setAttribute("aria-disabled","true");b.hasAttribute("selected")?T(a,b):U(a,b);b.tabIndex=0});a.c=c;W(a);X(a)}
function X(a){var b=[],c=a.element.getAttribute("name");if(c&&!a.element.hasAttribute("disabled")){var e=a.element.getAttribute("form");a.w.forEach(function(b){a.element.removeChild(b)});a.w=[];var d=a.win.document,h=d.createDocumentFragment();a.j.forEach(function(g){if(!g.hasAttribute("disabled")){var f=d.createElement("input");g=g.getAttribute("option");f.setAttribute("type","hidden");f.setAttribute("name",c);f.setAttribute("value",g);e&&f.setAttribute("form",e);a.w.push(f);h.appendChild(f);b.push(g)}});
a.element.appendChild(h)}}function Y(a,b){b.hasAttribute("disabled")||a.mutateElement(function(){b.hasAttribute("selected")?a.l&&(U(a,b),X(a)):(T(a,b),X(a));W(a,b);Z(a,b)})}function S(a){return a.j.map(function(a){return a.getAttribute("option")})}k.B=function(a){!this.element.hasAttribute("disabled")&&(a=a.target)&&(a.hasAttribute("option")||(a=H(a)),a&&Y(this,a))};
function R(a,b,c){var e=a.c[b],d=e.hasAttribute("selected"),h=void 0!==c?c:!d,g=a.c.indexOf(a.j[0]);return h===d?Promise.resolve():a.mutateElement(function(){if(g!==b){T(a,e);var c=a.c[g];c&&U(a,c)}else U(a,e);Z(a,e)})}
function Z(a,b){var c=a.win;b={targetOption:b.getAttribute("option"),selectedOptions:S(a)};var e={detail:b};Object.assign(e,void 0);"function"==typeof c.CustomEvent?c=new c.CustomEvent("amp-selector.select",e):(c=c.document.createEvent("CustomEvent"),c.initCustomEvent("amp-selector.select",!!e.bubbles,!!e.cancelable,b));var d=c;a.A.trigger(a.element,"select",d,100)}
function Q(a,b){var c=a.c.indexOf(a.j[0]),e=-1===c&&0>b;b=e?b:c+b;var d=a.c.length,h=0<b&&0<d?b%d:(b%d+d)%d;b=a.c[h];T(a,b);var g=a.c[c];g&&U(a,g);X(a);Z(a,b)}k.C=function(a){if(this.element.hasAttribute("disabled"))return Promise.resolve();switch(a.key){case "ArrowLeft":case "ArrowUp":case "ArrowRight":case "ArrowDown":case "Home":case "End":if("none"!=this.m)return ba(this,a);break;case "Enter":case " ":var b=a.key;" "!=b&&"Enter"!=b||!this.c.includes(a.target)||(a.preventDefault(),Y(this,a.target))}return Promise.resolve()};
function ba(a,b){var c=a.win.document,e=0;switch(b.key){case "ArrowLeft":e=I(c)?1:-1;break;case "ArrowUp":e=-1;break;case "ArrowRight":e=I(c)?-1:1;break;case "ArrowDown":e=1;break;case "Home":e=1;break;case "End":e=-1;break;default:return Promise.resolve()}b.preventDefault();a.c[a.h].tabIndex=-1;return ca(a).then(function(c){var d=a.h;switch(b.key){case "Home":a.h=a.c.length-1;break;case "End":a.h=0}do a.h=(a.h+e)%a.c.length,0>a.h&&(a.h+=a.c.length);while(da(a.c[a.h],c[a.h])&&a.h!=d);var g=a.c[a.h];
g.tabIndex=0;try{g.focus()}catch(l){}var f=a.c[a.h];"select"==a.m&&Y(a,f)})}function U(a,b){b.removeAttribute("selected");b.setAttribute("aria-selected","false");var c=a.j.indexOf(b);-1!==c&&a.j.splice(c,1)}k.o=function(){for(;0<this.j.length;){var a=this.j.pop();U(this,a)}X(this)};function T(a,b){a.j.includes(b)||(a.l||a.o(),b.setAttribute("selected",""),b.setAttribute("aria-selected","true"),a.j.push(b))}k.F=function(){return this.c};k.G=function(){return this.j};
function ca(a){return a.measureElement(function(){return a.c.map(function(a){return a.getBoundingClientRect()})})}function da(a,b){var c=b,e=c.width;c=c.height;return a.hidden||0==e||0==c}(function(a){a.registerElement("amp-selector",L,"amp-selector [option]{cursor:pointer}amp-selector [option][selected]{cursor:auto;outline:1px solid rgba(0,0,0,0.7)}amp-selector [disabled][option],amp-selector[disabled] [option],amp-selector[disabled] [selected],amp-selector [selected][disabled]{cursor:auto;outline:none}\n/*# sourceURL=/extensions/amp-selector/0.1/amp-selector.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-selector-0.1.js.map