(self.AMP=self.AMP||[]).push({n:"amp-app-banner",v:"1910151804560",f:(function(AMP,_){
var k="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=n;
function u(a,b){a.prototype=k(b.prototype);a.prototype.constructor=a;if(t)t(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.C=b.prototype};function v(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function w(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var x=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function y(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];if(e instanceof Error&&!b){b=void 0;var g=Object.getOwnPropertyDescriptor(e,"message");if(g&&g.writable)b=e;else{g=e.stack;var h=Error(e.message);for(b in e)h[b]=e[b];h.stack=g;b=h}}else c&&(c+=" "),c+=e}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function z(a){var b=y.apply(null,arguments);setTimeout(function(){self.__AMP_REPORT_ERROR(b);throw b;})}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};
var A=self.__AMP_LOG;function B(){if(!A.user)throw Error("failed to call initLogConstructor");return A.user}function C(){if(A.dev)return A.dev;throw Error("failed to call initLogConstructor");}function D(a,b,c,d){return B().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function E(a){return a||{}};E({c:!0,v:!0,a:!0,ad:!0,action:!0});function F(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){C().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function G(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c;var e=c;if(e.__AMP__EXPERIMENT_TOGGLES)var g=e.__AMP__EXPERIMENT_TOGGLES;else{e.__AMP__EXPERIMENT_TOGGLES=Object.create(null);g=e.__AMP__EXPERIMENT_TOGGLES;if(e.AMP_CONFIG)for(var h in e.AMP_CONFIG){var f=e.AMP_CONFIG[h];"number"===typeof f&&0<=f&&1>=f&&(g[h]=Math.random()<f)}if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-doc-opt-in"])&&0<e.AMP_CONFIG["allow-doc-opt-in"].length&&(h=e.AMP_CONFIG["allow-doc-opt-in"],
f=e.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){f=f.getAttribute("content").split(",");for(var l=0;l<f.length;l++)-1!=h.indexOf(f[l])&&(g[f[l]]=!0)}Object.assign(g,F(e));if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-url-opt-in"])&&0<e.AMP_CONFIG["allow-url-opt-in"].length){h=e.AMP_CONFIG["allow-url-opt-in"];f=e.location.originalHash||e.location.hash;e=Object.create(null);if(f)for(var m;m=x.exec(f);)l=w(m[1],m[1]),m=m[2]?w(m[2].replace(/\+/g," "),m[2]):"",e[l]=m;for(f=
0;f<h.length;f++)l=e["e-"+h[f]],"1"==l&&(g[h[f]]=!0),"0"==l&&(g[h[f]]=!1)}}var Z=!!g["ampdoc-fie"];d&&!Z?a=H(b,"url")?I(b,"url"):null:(a=J(a),a=K(a),a=H(a,"url")?I(a,"url"):null);return a}function L(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return I(a,b)}function M(a,b){var c=J(a);c=K(c);return I(c,b)}function J(a){return a.nodeType?L((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function K(a){a=J(a);return a.isSingleDoc()?a.win:a}
function I(a,b){H(a,b);var c=N(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function O(a){var b;(b=N(a).storage)?b.promise?b=b.promise:(I(a,"storage"),b=b.promise=Promise.resolve(b.obj)):b=null;var c=b;if(c)return c;a=N(a);a.storage=aa();return a.storage.promise}function N(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function H(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)}
function aa(){var a=new v,b=a,c=b.promise,d=b.resolve;b=b.reject;c.catch(function(){});return{obj:null,promise:c,resolve:d,reject:b,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function P(a,b){var c;try{a.open(b,"_top",c)}catch(d){C().error("DOM","Failed to open url on target: ","_top",d)}};function Q(a){a=AMP.BaseElement.call(this,a)||this;a.m=null;a.j=!1;return a}u(Q,AMP.BaseElement);Q.prototype.openButtonClicked=function(){};function R(a,b,c,d){b.addEventListener("click",function(){a.openButtonClicked(c,d)})}Q.prototype.B=function(){this.getVsync().run({measure:void 0,mutate:ba},{element:this.element,viewport:this.getViewport(),storagePromise:O(K(this.getAmpDoc())),storageKey:S(this)})};
function S(a){var b=D(a.element.id,"amp-app-banner should have an id.");return"amp-app-banner:"+b}Q.prototype.isDismissed=function(){var a=this;return O(K(this.getAmpDoc())).then(function(b){return b.get(S(a))}).then(function(a){return!!a},function(a){C().error("amp-app-banner","Failed to read storage",a);return!1})};
function T(a){a.isDismissed().then(function(b){if(b)U(a);else{var c=a.win.document.createElement("i-amphtml-app-banner-top-padding");a.element.appendChild(c);c=a.win.document.createElement("button");c.classList.add("amp-app-banner-dismiss-button");c.setAttribute("aria-label",a.element.getAttribute("data-dismiss-button-aria-label")||"Dismiss");var d=a.B.bind(a);c.addEventListener("click",d);a.element.appendChild(c);a.getVsync().run({measure:ca,mutate:da},{element:a.element,viewport:a.getViewport()});
a.expand()}})}function U(a){return a.getVsync().runPromise({measure:void 0,mutate:V},{element:a.element,viewport:a.getViewport()})}function W(a){return Q.call(this,a)||this}u(W,Q);W.prototype.upgradeCallback=function(){var a=L(this.win,"platform");return a.isIos()?new X(this.element):a.isAndroid()?new Y(this.element):null};W.prototype.layoutCallback=function(){B().info("amp-app-banner","Only iOS or Android platforms are currently supported.");return U(this)};
function X(a){a=Q.call(this,a)||this;a.h=null;a.w=null;return a}u(X,Q);X.prototype.preconnectCallback=function(a){this.element.parentNode&&this.preconnect.url("https://itunes.apple.com",a)};
X.prototype.buildCallback=function(){this.h=M(this.getAmpDoc(),"viewer");var a=L(this.win,"platform");(this.j=!this.h.isEmbedded()&&a.isSafari())?(B().info("amp-app-banner","Browser supports builtin banners. Not rendering amp-app-banner."),U(this)):this.h.isEmbedded()&&!this.h.hasCapability("navigateTo")?U(this):(this.w=this.win.document.head.querySelector("meta[name=apple-itunes-app]"))?(this.m=D(this.element.querySelector("button[open-button]"),"<button open-button> is required inside %s: %s","amp-app-banner",
this.element),ea(this,this.w.getAttribute("content")),T(this)):U(this)};X.prototype.layoutCallback=function(){return Promise.resolve()};X.prototype.openButtonClicked=function(a,b){var c=this;this.h.isEmbedded()?(L(this.win,"timer").delay(function(){c.h.sendMessage("navigateTo",E({url:b}))},1500),this.h.sendMessage("navigateTo",E({url:a}))):(L(this.win,"timer").delay(function(){P(c.win,b)},1500),P(this.win,a))};
function ea(a,b){var c={};b.replace(/\s/,"").split(",").forEach(function(a){var b=a.split("=");c[b[0]]=b[1]});var d=c["app-id"],e=c["app-argument"];e?D(G(a.element).isProtocolValid(e),"The url in app-argument has invalid protocol: %s",e):B().error("amp-app-banner",'<meta name="apple-itunes-app">\'s content should contain app-argument to allow opening an already installed application on iOS.');d="https://itunes.apple.com/us/app/id"+d;R(a,a.m,e||d,d)}
function Y(a){a=Q.call(this,a)||this;a.o=null;a.l="";a.A=!1;return a}u(Y,Q);Y.prototype.preconnectCallback=function(a){this.element.parentNode&&(this.preconnect.url("https://play.google.com",a),this.l&&this.preconnect.preload(this.l))};
Y.prototype.buildCallback=function(){var a=this.win,b=this.element,c=M(this.getAmpDoc(),"viewer");this.o=a.document.head.querySelector("link[rel=manifest],link[rel=origin-manifest]");var d=L(a,"platform"),e=G(b),g=d.isAndroid()&&d.isChrome(),h=e.isProxyOrigin(a.location);(this.j=!h&&!c.isEmbedded()&&g)?(B().info("amp-app-banner","Browser supports builtin banners. Not rendering amp-app-banner."),U(this)):(this.A=d.isAndroid()&&!this.o)?U(this):(this.l=this.o.getAttribute("href"),e.assertHttpsUrl(this.l,
b,"manifest href"),this.m=D(b.querySelector("button[open-button]"),"<button open-button> is required inside %s: %s","amp-app-banner",b),T(this))};
Y.prototype.layoutCallback=function(){var a=this;return this.A||this.j?Promise.resolve():L(this.win,"xhr").fetchJson(this.l,{}).then(function(a){return a.json()}).then(function(b){var c;a:{if(c=b.related_applications){for(var d=0;d<c.length;d++){var e=c[d];if("play"==e.platform){c="https://play.google.com/store/apps/details?id="+e.id;e=e.id;d=a.element;var g=M(d,"documentInfo").get().canonicalUrl;d=G(d).parse(g);g=d.protocol.replace(":","");R(a,a.m,"android-app://"+e+"/"+g+"/"+d.host+d.pathname,c);
c=void 0;break a}}B().warn("amp-app-banner","Could not find a platform=play app in manifest: %s",a.element)}else B().warn("amp-app-banner","related_applications is missing from manifest.json file: %s",a.element);c=void 0}return c}).catch(function(b){U(a);z(b)})};Y.prototype.openButtonClicked=function(a,b){var c=this;L(this.win,"timer").delay(function(){c.win.top.location.assign(b)},1500);P(this.win,a)};function ba(a){V(a);a.storagePromise.then(function(b){b.set(a.storageKey,!0)})}
function V(a){a.viewport.removeFromFixedLayer(a.element);var b=a.element;b.parentElement&&b.parentElement.removeChild(b);a.viewport.updatePaddingBottom(0)}function ca(a){a.bannerHeight=a.viewport.getLayoutRect(a.element).height}function da(a){a.viewport.updatePaddingBottom(a.bannerHeight);a.viewport.addToFixedLayer(a.element)}(function(a){a.registerElement("amp-app-banner",W,"amp-app-banner{position:fixed!important;bottom:0!important;left:0;width:100%;max-height:100px!important;box-sizing:border-box;background:#fff;z-index:13;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important}i-amphtml-app-banner-top-padding{position:absolute;top:0;left:0;right:0;background:#fff;height:4px;z-index:15}.amp-app-banner-dismiss-button{position:absolute;width:28px;height:28px;top:-28px;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;z-index:14;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}.amp-app-banner-dismiss-button:before{position:absolute;content:\"\";top:-20px;right:0;left:-20px;bottom:0}[dir=rtl] .amp-app-banner-dismiss-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] .amp-app-banner-dismiss-button:before{right:-20px;left:0}\n/*# sourceURL=/extensions/amp-app-banner/0.1/amp-app-banner.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-app-banner-0.1.js.map
