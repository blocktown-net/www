(self.AMP=self.AMP||[]).push({n:"amp-access-scroll",v:"1910151804560",f:(function(AMP,_){
var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ba={a:!0},p={};try{p.__proto__=ba;n=p.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=m;
function r(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(q)q(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Z=b.prototype}function ca(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function t(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function u(a){var b=Object.create(null);if(!a)return b;for(var c;c=da.exec(a);){var d=t(c[1],c[1]),f=c[2]?t(c[2].replace(/\+/g," "),c[2]):"";b[d]=f}return b};var v="";
function w(){var a,b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},f=!!d.test||!(!c.__AMP_TEST&&!c.__karma__),e=c.__karma__&&c.__karma__.config.amp.testOnIe,g=!!d.localDev||f,h=u(c.location.originalHash||c.location.hash);d=d.spt;var k=u(c.location.search);v||(v=g?"1910151804560":c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011910151804560");c={localDev:g,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(h.development)||c.AMP_DEV_MODE),examiner:"2"==h.development,
filter:h.filter,geoOverride:h["amp-geo"],userLocationOverride:h["amp-user-location"],minified:!0,lite:void 0!=k.amp_lite,test:f,testIe:e,log:h.log,version:"1910151804560",rtvVersion:v,singlePassType:d};c=b.__AMP_MODE=c}return c};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var x=self.__AMP_LOG;function y(a,b,c,d,f,e){if(!x.user)throw Error("failed to call initLogConstructor");return x.user.assert(a,b,c,d,f,e,void 0,void 0,void 0,void 0,void 0)};function z(a){return a||{}};function A(){var a=100;this.V=a;this.F=this.M=0;this.B=Object.create(null)}A.prototype.has=function(a){return!!this.B[a]};A.prototype.get=function(a){var b=this.B[a];if(b)return b.access=++this.F,b.payload};
A.prototype.put=function(a,b){this.has(a)||this.M++;this.B[a]={payload:b,access:this.F};if(!(this.M<=this.V)){if(x.dev)a=x.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.B;var c=this.F+1,d;for(d in a){var f=a[d].access;if(f<c){c=f;var e=d}}void 0!==e&&(delete a[e],this.M--)}};z({c:!0,v:!0,a:!0,ad:!0,action:!0});var B,C;
function D(a,b){var c=void 0===c?"source":c;y(null!=a,"%s %s must be available",b,c);var d=a;a=d;if("string"==typeof a){B||(B=self.document.createElement("a"),C=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new A));var f=C,e=B;if(f&&f.has(a))a=f.get(a);else{e.href=a;e.protocol||(e.href=e.href);var g={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};"/"!==g.pathname[0]&&(g.pathname="/"+g.pathname);
if("http:"==g.protocol&&80==g.port||"https:"==g.protocol&&443==g.port)g.port="",g.host=g.hostname;g.origin=e.origin&&"null"!=e.origin?e.origin:"data:"!=g.protocol&&g.host?g.protocol+"//"+g.host:g.href;e=w().test&&Object.freeze?Object.freeze(g):g;f&&f.put(a,e);a=e}}(f="https:"==a.protocol||"localhost"==a.hostname||"127.0.0.1"==a.hostname)||(a=a.hostname,f=a.length-10,f=0<=f&&a.indexOf(".localhost",f)==f);y(f||/^(\/\/)/.test(d),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',
b,c,d)};function E(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return F(a,b)}function G(a){var b=H(a);b=I(b);return F(b,"viewport")}function H(a){return a.nodeType?E((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function I(a){a=H(a);return a.isSingleDoc()?a.win:a}function F(a,b){var c=J(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function K(a){var b=J(a).access;if(b){if(b.promise)return b.promise;F(a,"access");return b.promise=Promise.resolve(b.obj)}return null}function J(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function ea(){var a=new ca,b=a,c=b.promise,d=b.resolve;b=b.reject;c.catch(function(){});return{obj:null,promise:c,resolve:d,reject:b,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function L(a,b,c){a=a.createElement(b);for(var d in c)a.setAttribute(d,c[d]);return a};function fa(a){return ha(a).then(function(a){return y(a,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.","access","amp-access","amp-access","amp-access")})}
function ha(a){var b=K(I(a));if(b)return b;var c=H(a);return c.waitForBodyOpen().then(function(){var a=c.win;var b=c.win.document.head;if(b){var e={};b=b.querySelectorAll("script[custom-element],script[custom-template]");for(var g=0;g<b.length;g++){var h=b[g];h=h.getAttribute("custom-element")||h.getAttribute("custom-template");e[h]=!0}e=Object.keys(e)}else e=[];a=e.includes("amp-access")?E(a,"extensions").waitForExtension(a,"amp-access"):Promise.resolve();return a}).then(function(){var b=c.win;if(b.__AMP_EXTENDED_ELEMENTS&&
b.__AMP_EXTENDED_ELEMENTS["amp-access"]){b=I(a);var f=K(b);f?b=f:(b=J(b),b.access=ea(),b=b.access.promise)}else b=null;return b})};function M(a,b,c){this.ampdoc=a;this.O=c;this.A=y(b.authorization,'"authorization" URL must be specified');D(this.A,'"authorization"');this.H=!b.noPingback;this.D=b.pingback;this.H&&(y(this.D,'"pingback" URL must be specified'),D(this.D,'"pingback"'));c=b;c.authorizationTimeout?(c=c.authorizationTimeout,y("number"==typeof c,'"authorizationTimeout" must be a number'),w().localDev||w().development||(c=Math.min(c,3E3))):c=3E3;this.G=c;this.U=E(a.win,"xhr");this.Y=E(a.win,"timer")}l=M.prototype;
l.getConfig=function(){return{authorizationUrl:this.A,pingbackEnabled:this.H,pingbackUrl:this.D,authorizationTimeout:this.G}};l.getAuthorizationUrl=function(){return this.A};l.isAuthorizationEnabled=function(){return!0};l.getAuthorizationTimeout=function(){return this.G};l.authorize=function(){var a=this,b=this.O.buildUrl(this.A,!1);return b.then(function(b){return a.Y.timeoutPromise(a.G,a.U.fetchJson(b,{credentials:"include"})).then(function(a){return a.json()})})};l.isPingbackEnabled=function(){return this.H};
l.pingback=function(){var a=this;return this.O.buildUrl(this.D,!0).then(function(b){return a.U.sendSignal(b,{method:"POST",credentials:"include",headers:z({"Content-Type":"application/x-www-form-urlencoded"}),body:""})})};l.postAction=function(){};function N(a){var b=this;this.l=a;this.j=this.L=null;this.window=new Promise(function(a){b.L=a})}N.prototype.el=function(a,b,c){var d=L(this.l.win.document,a,b);Array.isArray(c)&&c.forEach(function(a){return d.appendChild(a)});return d};function O(a,b){E(a.l.win,"vsync").mutate(b)};function Q(a,b,c){N.call(this,a);this.h=b;this.o=c;this.K()}r(Q,N);Q.prototype.K=function(){var a=this;O(this,function(){a.j||(a.j=a.m(),a.L(a.j.contentWindow))})};
Q.prototype.m=function(){var a=this.el("iframe",z({scrolling:"no",frameborder:"0",allowtransparency:"true",title:"Scroll",width:"100%",height:"100%",sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox"})),b=this.el("div",z({"class":"amp-access-scroll-bar"}),[a]);this.l.getBody().appendChild(b);G(this.l).addToFixedLayer(b);return a};function R(){Q.apply(this,arguments)}r(R,Q);
R.prototype.m=function(){var a=this,b=Q.prototype.m.call(this),c=this.el("div",z({"class":"amp-access-scroll-bar amp-access-scroll-placeholder"}),[this.el("img",z({src:"https://static.scroll.com/assets/icn-scroll-logo32-9f4ceef399905139bbd26b87bfe94542.svg",layout:"fixed",width:32,height:32}))]);this.l.getBody().appendChild(c);this.h.buildUrl(this.o+"/amp/scrollbar?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL",!1).then(function(d){b.onload=function(){a.l.getBody().removeChild(c)};
b.setAttribute("src",d)});return b};function S(){Q.apply(this,arguments)}r(S,Q);S.prototype.m=function(){var a=Q.prototype.m.call(this);this.h.buildUrl(this.o+"/html/amp/activate?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&x=QUERY_PARAM(scrollx)",!1).then(function(b){a.setAttribute("src",b)});return a};function T(a){N.call(this,a);this.N={url:"",open:!1}}r(T,N);T.prototype.update=function(a){this.N={url:void 0!==a.url?a.url:this.N.url,open:a.open};this.K(this.N)};T.prototype.K=function(a){var b=this;O(this,function(){b.j||(b.j=b.m(),b.L(b.j.contentWindow));b.j.src!==a.url&&b.j.setAttribute("src",a.url);var c=b.j,d=a.open;void 0===d&&(d=c.hasAttribute("hidden"));d?c.removeAttribute("hidden"):c.setAttribute("hidden","")})};
T.prototype.m=function(){var a=this.el("iframe",z({"class":"amp-access-scroll-audio",scrolling:"no",frameborder:"0",allowtransparency:"true",title:"Scroll Audio",sandbox:"allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox"}));this.l.getBody().appendChild(a);G(this.l).addToFixedLayer(a);return a};function ia(a,b){function c(){d=0;var g=1E3-(a.Date.now()-f);if(0<g)d=a.setTimeout(c,g);else{var h=e;e=null;b.apply(null,h)}}var d=0,f=0,e=null;return function(b){for(var g=[],k=0;k<arguments.length;++k)g[k-0]=arguments[k];f=a.Date.now();e=g;d||(d=a.setTimeout(c,1E3))}};function U(a,b,c){var d=this;this.w=a;this.P=null;this.h=b;this.W=c;var f=ia(a.win,this.X.bind(this));this.T=G(a);this.J=[];a.whenReady().then(function(){d.T.onChanged(f);d.J=a.getBody().getElementsByTagName("p")})}
U.prototype.X=function(){var a=this;return Promise.all([].slice.call(this.J).map(function(b){return a.T.getClientRectAsync(b)})).then(function(b){for(var c=null,d=null,f=b.length-1;0<=f;f--){var e=b[f].bottom;0>=e&&(null===d||d<e)&&(c=f,d=e)}null!==c&&(f=c,a.P!==f&&(a.P=f,ja(a,a.J[f].innerText.substring(0,50))))})};
function ja(a,b){a.h.buildUrl(a.W+"/amp/updatedepth?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&rd="+encodeURIComponent(b),!1).then(function(b){E(a.w.win,"xhr").fetch(b)})};var V;function ka(a){var b=void 0,c=window,d=a;var f=function(a){try{return d(a)}catch(k){throw self.__AMP_REPORT_ERROR(k),k;}};var e=la(),g=!1;b&&(g=b.capture);c.addEventListener("message",f,e?b:g)}function la(){if(void 0!==V)return V;V=!1;try{var a={get capture(){V=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return V};function W(a){this.C=[];this.R=[];this.S=a;this.I=this.I.bind(this);ka(this.I)}W.prototype.I=function(a){var b=this,c=a.data,d=a.origin===this.S,f="object"===typeof c&&"_scramp"in c,e=-1<this.C.indexOf(a.source);d&&e&&f&&(this.R.forEach(function(a){return a(c)}),this.C.filter(function(b){return b!==a.source}).forEach(function(a){a.postMessage(c,b.S)}))};W.prototype.register=function(a,b){var c=this;b&&this.R.push(b);Promise.resolve(a).then(function(a){-1===c.C.indexOf(a)&&c.C.push(a)})};function ma(a,b){var c=".amp-access-scroll-bar{height:44px;position:fixed;left:0;width:100%;background:transparent;z-index:2147483647;bottom:0}.amp-access-scroll-placeholder{padding-top:5px;padding-left:16px;background-color:#fff;border-top:1px solid #eee;border-bottom:1px solid #eee;box-sizing:border-box}.amp-access-scroll-audio{background-color:#fff;position:fixed;z-index:2147483647;display:block;bottom:44px;height:100px;left:0;width:100%;border-top:1px solid #e1e6e5;border-bottom:1px solid transparent}@media (min-width:600px){.amp-access-scroll-audio{bottom:63px;height:56px;left:auto;right:16px;width:475px;border:1px solid #e1e6e5}}\n/*# sourceURL=/extensions/amp-access-scroll/0.1/amp-access-scroll.css*/",
d=!1,f="amp-access-scroll-elt",e=a.getHeadNode(),g=na(e,oa(e,c),d||!1,f||null);if(b){var h=a.getRootNode();if(X(h,g))b(g);else var k=setInterval(function(){X(h,g)&&(clearInterval(k),b(g))},4)}}
function na(a,b,c,d){var f=a.__AMP_CSS_SM;if(!f){var e=Object.create(null);f=a.__AMP_CSS_SM=e}var g=!c&&d&&"amp-custom"!=d&&"amp-keyframes"!=d;if(e=c?"amp-runtime":g?"amp-extension="+d:null){var h=pa(a,f,e);if(h)return h.textContent!==b&&(h.textContent=b),h}var k=(a.ownerDocument||a).createElement("style");k.textContent=b;var P=null;c?k.setAttribute("amp-runtime",""):g?(k.setAttribute("amp-extension",d||""),P=pa(a,f,"amp-runtime")):(d&&k.setAttribute(d,""),P=a.lastChild);b=P;a.insertBefore(k,b?b.nextSibling:
a.firstChild);e&&(f[e]=k);return k}function pa(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null}function oa(a,b){return(a=a.__AMP_CSS_TR)?a(b):b}function X(a,b){var c=a.styleSheets;for(a=0;a<c.length;a++){var d=c[a];if(d.ownerNode==b)return!0}return!1};function qa(a){var b={authorization:a+"/amp/access?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&x=QUERY_PARAM(scrollx)",pingback:a+"/amp/pingback?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll)&v=AUTHDATA(visitId)",namespace:"scroll"};return b}function Y(a){return"https://connect"+((w().development&&a.etld?a.etld:"")||".scroll.com")}
function Z(a,b){var c=b.getAdapterConfig(),d=Y(c);M.call(this,a,qa(d),{buildUrl:b.buildUrl.bind(b),collectUrlVars:b.collectUrlVars.bind(b)});ma(a,function(){});this.h=b;this.o=d}r(Z,M);
Z.prototype.authorize=function(){var a=this;return M.prototype.authorize.call(this).then(function(b){var c=a.ampdoc.getRootNode().querySelector("amp-story[standalone]");if(b&&b.scroll){if(!c){var d=new R(a.ampdoc,a.h,a.o),f=new T(a.ampdoc),e=new W(a.o);e.register(f.window,function(a){"au"===a._scramp&&f.update(a)});e.register(d.window);var g=a.h.getAdapterConfig();ra(a.ampdoc,g);b.features&&b.features.readDepth&&new U(a.ampdoc,a.h,Y(g))}}else b&&b.blocker&&sa(a.ampdoc)&&(new ta(a.ampdoc,a.h)).check();
return b})};function ta(a,b){this.w=a;this.h=b}function sa(a){var b=u(a.win.location.search);return!b.scrollnoblockerrefresh}ta.prototype.check=function(){var a=this;E(this.w.win,"xhr").fetchJson("https://block.scroll.com/check.json").then(function(){return!1},function(a){return 0===a.message.indexOf("XHR Failed fetching (https://block.scroll.com/...): Resource blocked by content blocker")}).then(function(b){!0===b&&new S(a.w,a.h,Y(a.h.getAdapterConfig()))})};
function ra(a,b){if(!b.disableAnalytics){var c=a.win.document,d=z({trigger:"immediate"});b.dataConsentId&&(d["data-block-on-consent"]="");var f=L(c,"amp-analytics",d),e=L(c,"script",z({type:"application/json"}));c={requests:{scroll:Y(b)+"/amp/analytics?rid=ACCESS_READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll.scroll)&v=AUTHDATA(scroll.visitId)&h=SOURCE_HOSTNAME&s=${totalEngagedTime}"},triggers:{trackInterval:{on:"timer",timerSpec:{interval:15,
maxTimerLength:7200},request:"scroll"}}};e.textContent=JSON.stringify(c);f.appendChild(e);f.CONFIG=c;E(a.win,"extensions").installExtensionForDoc(a,"amp-analytics");a.getBody().appendChild(f)}};(function(a){a.registerServiceForDoc("scroll",function(a){var b=a.getHeadNode();return fa(b).then(function(b){var c=b.getVendorSource("scroll"),d=new Z(a,c),g=c.getAdapter();g.registerVendor(d);return d})})})(self.AMP);
})});

//# sourceMappingURL=amp-access-scroll-0.1.js.map
