(self.AMP=self.AMP||[]).push({n:"amp-accordion",v:"1910151804560",f:(function(AMP,_){
var k="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}m=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=m;function u(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function v(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){if(!w.user)throw Error("failed to call initLogConstructor");return w.user}function y(){if(w.dev)return w.dev;throw Error("failed to call initLogConstructor");}function z(a,b,c){x().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function ba(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){y().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function ca(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c;var e=c;if(e.__AMP__EXPERIMENT_TOGGLES)var f=e.__AMP__EXPERIMENT_TOGGLES;else{e.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=e.__AMP__EXPERIMENT_TOGGLES;if(e.AMP_CONFIG)for(var g in e.AMP_CONFIG){var h=e.AMP_CONFIG[g];"number"===typeof h&&0<=h&&1>=h&&(f[g]=Math.random()<h)}if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-doc-opt-in"])&&0<e.AMP_CONFIG["allow-doc-opt-in"].length&&(g=e.AMP_CONFIG["allow-doc-opt-in"],
h=e.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){h=h.getAttribute("content").split(",");for(var l=0;l<h.length;l++)-1!=g.indexOf(h[l])&&(f[h[l]]=!0)}Object.assign(f,ba(e));if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-url-opt-in"])&&0<e.AMP_CONFIG["allow-url-opt-in"].length){g=e.AMP_CONFIG["allow-url-opt-in"];h=e.location.originalHash||e.location.hash;e=Object.create(null);if(h)for(var n;n=aa.exec(h);)l=v(n[1],n[1]),n=n[2]?v(n[2].replace(/\+/g," "),n[2]):"",e[l]=n;for(h=
0;h<g.length;h++)l=e["e-"+g[h]],"1"==l&&(f[g[h]]=!0),"0"==l&&(f[g[h]]=!1)}}var da=!!f["ampdoc-fie"];d&&!da?a=A(b,"action")?B(b,"action"):null:(a=C(a),a=C(a),a=a.isSingleDoc()?a.win:a,a=A(a,"action")?B(a,"action"):null);return a}function D(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return B(a,b)}function C(a){return a.nodeType?D((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}
function B(a,b){A(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function A(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ea(a,b,c){for(;a&&a!==c;a=a.parentElement)if(b(a))return a;return null};function E(a,b,c,d){var e=new F(a,b,c,d);return e.solveYValueFromXValue.bind(e)}function F(a,b,c,d){var e=1,f=1;this.y0=this.x0=0;this.x1=a;this.y1=b;this.x2=c;this.y2=d;this.x3=e;this.y3=f}F.prototype.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
F.prototype.solvePositionFromXValue=function(a){var b=1E-6,c=(a-this.x0)/(this.x3-this.x0);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,g=0;8>g;g++){f=this.getPointX(c);var h=(this.getPointX(c+b)-f)/b;if(Math.abs(f-a)<b)return c;if(Math.abs(h)<b)break;else f<a?d=c:e=c,c-=(f-a)/h}for(g=0;Math.abs(f-a)>b&&8>g;g++)f<a?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=this.getPointX(c);return c};
F.prototype.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};F.prototype.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a);b=this.lerp(b,c,a);c=this.lerp(c,d,a);return this.lerp(b,c,a)};
F.prototype.lerp=function(a,b,c){return a+c*(b-a)};var fa=E(.25,.1,.25,1),ha=E(.42,0,1,1),ia=E(0,0,.58,1),ja=E(.42,0,.58,1),ka={linear:function(a){return a},ease:fa,"ease-in":ha,"ease-out":ia,"ease-in-out":ja};
function G(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return E(b[0],b[1],b[2],b[3])}return null}return ka[a]}return a};function la(){}function H(a){var b;this.j=a;(a=b)||(a=D(self,"vsync"));this.o=a;this.D=null;this.c=[]}function ma(a,b,c){var d=na;return(new H(a)).setCurve(d).add(0,b,1).start(c)}H.prototype.setCurve=function(a){a&&(this.D=G(a));return this};H.prototype.add=function(a,b,c,d){this.c.push({delay:a,func:b,duration:c,curve:G(d)});return this};H.prototype.start=function(a){var b=new I(this.o,this.j,this.c,this.D,a);return b};
function I(a,b,c,d,e){this.o=a;this.j=b;this.c=[];for(b=0;b<c.length;b++){var f=c[b];this.c.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.J=e;this.O=Date.now();this.A=!0;this.G={};c=new u;this.F=c.promise;this.N=c.resolve;this.M=c.reject;this.H=this.o.createAnimTask(this.j,{mutate:this.P.bind(this)});this.o.canAnimate(this.j)?this.H(this.G):(y().warn("Animation","cannot animate"),J(this,!1,0))}
I.prototype.then=function(a,b){return a||b?this.F.then(a,b):this.F};I.prototype.thenAlways=function(a){a=a||la;return this.then(a,a)};I.prototype.halt=function(a){J(this,!1,a||0)};function J(a,b,c){if(a.A){a.A=!1;if(0!=c){1<a.c.length&&a.c.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.c.length;c++)a.c[c].func(1,!0);else for(var d=a.c.length-1;0<=d;d--)a.c[d].func(0,!1)}catch(e){y().error("Animation","completion failed: "+e,e),b=!1}}b?a.N():a.M()}}
I.prototype.P=function(){if(this.A){for(var a=Date.now(),b=Math.min((a-this.O)/this.J,1),c=0;c<this.c.length;c++){var d=this.c[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.c.length;c++)if(d=this.c[c],d.started&&!d.completed)a:{var e;if(0<d.duration){var f=e=Math.min((b-d.delay)/d.duration,1);if(d.curve&&1!=f)try{f=d.curve(e)}catch(g){y().error("Animation","step curve failed: "+g,g);J(this,!1,0);break a}}else f=e=1;1==e&&(d.completed=!0);try{d.func(f,d.completed)}catch(g){y().error("Animation",
"step mutate failed: "+g,g),J(this,!1,0)}}1==b?J(this,!0,0):this.o.canAnimate(this.j)?this.H(this.G):(y().warn("Animation","cancel animation"),J(this,!1,0))}};var K,L="Webkit webkit Moz moz ms O o".split(" ");function M(a,b,c){if(2>b.length?0:0==b.lastIndexOf("--",0))return b;K||(K=Object.create(null));var d=K[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<L.length;f++){var g=L[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var h=e;void 0!==a[h]&&(d=h)}c||(K[b]=d)}return d}function N(a,b,c){var d;(b=M(a.style,b,void 0))&&(a.style[b]=d?c+d:c)}function O(a,b){for(var c in b)N(a,c,b[c])};function P(a,b){return function(c,d){for(var e in b){var f=e;"display"===f&&y().error("STYLE","`display` style detected. You must use toggle instead.");N(a,f,b[e](c,d))}}}function Q(a,b){return function(c){return a+(b-a)*c}}function R(a){return function(b){return a(b)+"px"}};var oa=E(.47,0,.745,.715),na=E(.39,.575,.565,1);function S(a){var b=AMP.BaseElement.call(this,a)||this;b.m=[];b.B=null;b.l=null;b.C=!1;b.h=null;b.w=null;b.L=a.id?a.id:Math.floor(100*Math.random());return b}var T=AMP.BaseElement;S.prototype=k(T.prototype);S.prototype.constructor=S;if(t)t(S,T);else for(var U in T)if("prototype"!=U)if(Object.defineProperties){var V=Object.getOwnPropertyDescriptor(T,U);V&&Object.defineProperty(S,U,V)}else S[U]=T[U];S.R=T.prototype;
S.prototype.isLayoutSupported=function(a){return"container"==a};
S.prototype.buildCallback=function(){var a=this;this.w=ca(this.element);this.C=this.element.hasAttribute("disable-session-states");this.B=pa(this);this.l=qa(this);this.h=this.getRealChildren();this.h.forEach(function(b,c){z("section"==b.tagName.toLowerCase(),"Sections should be enclosed in a <section> tag, See https://github.com/ampproject/amphtml/blob/master/extensions/amp-accordion/amp-accordion.md. Found in: %s",a.element);var d=b.children;z(2==d.length,"Each section must have exactly two children. See https://github.com/ampproject/amphtml/blob/master/extensions/amp-accordion/amp-accordion.md. Found in: %s",
a.element);var e=d[1];e.classList.add("i-amphtml-accordion-content");var f=e.getAttribute("id");f||(f=a.L+"_AMP_content_"+c,e.setAttribute("id",f));a.registerAction("toggle",function(b){if(b.args){var c=b.args.section,d=a.getAmpDoc().getElementById(c);d=x().assertElement(d);z(d,"No element found with id: %s",c);W(a,d)}else for(var e=0;e<a.h.length;e++)W(a,a.h[e])});a.registerAction("expand",function(b){if(b.args){b=b.args.section;var c=a.getAmpDoc().getElementById(b);c=x().assertElement(c);z(c,"No element found with id: %s",
b);W(a,c,!0)}else for(b=0;b<a.h.length;b++)W(a,a.h[b],!0)});a.registerAction("collapse",function(b){if(b.args){b=b.args.section;var c=a.getAmpDoc().getElementById(b);c=x().assertElement(c);z(c,"No element found with id: %s",b);W(a,c,!1)}else for(b=0;b<a.h.length;b++)W(a,a.h[b],!1)});var g=new a.win.MutationObserver(function(b){ra(a,b)});g.observe(b,{attributes:!0,attributeFilter:["data-expand"]});a.l[f]?b.setAttribute("expanded",""):!1===a.l[f]&&b.removeAttribute("expanded");a.mutateElement(function(){});
c=d[0];c.classList.add("i-amphtml-accordion-header");c.setAttribute("role","button");c.setAttribute("aria-controls",f);c.setAttribute("aria-expanded",b.hasAttribute("expanded").toString());c.hasAttribute("tabindex")||c.setAttribute("tabindex",0);a.m.push(c);z(0==a.w.hasAction(c,"tap",b),"amp-accordion headings should not have tap actions registered.");c.addEventListener("click",a.I.bind(a));c.addEventListener("keydown",a.K.bind(a))})};
function pa(a){var b=a.element.id||a.element.getResourceId();a=a.win.location.href;var c=a.indexOf("#");a=-1==c?a:a.substring(0,c);return"amp-"+b+"-"+a}function qa(a){if(a.C)return{};try{var b=a.win.sessionStorage.getItem(a.B);return b?JSON.parse(b):{}}catch(c){return{}}}function sa(a){if(!a.C){var b=JSON.stringify(a.l);try{a.win.sessionStorage.setItem(a.B,b)}catch(c){}}}
function X(a,b,c){var d=a.win;var e="accordionSection."+b;var f={};var g={detail:f};Object.assign(g,void 0);"function"==typeof d.CustomEvent?e=new d.CustomEvent(e,g):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent(e,!!g.bubbles,!!g.cancelable,f),e=d);a.w.trigger(c,b,e,100);a.element.dispatchCustomEvent(b)}
function W(a,b,c){var d=b.children,e=d[0];d=d[1].getAttribute("id");var f=b.hasAttribute("expanded"),g=void 0==c?!b.hasAttribute("expanded"):c;g&&b.hasAttribute("expanded")||!g&&!b.hasAttribute("expanded")||(a.element.hasAttribute("animate")?g?(e.setAttribute("aria-expanded","true"),ta(a,b),a.element.hasAttribute("expand-single-section")&&a.h.forEach(function(c){c!=b&&(Y(a,c),c.children[0].setAttribute("aria-expanded","false"))})):(e.setAttribute("aria-expanded","false"),Y(a,b)):a.mutateElement(function(){g?
(X(a,"expand",b),b.setAttribute("expanded",""),e.setAttribute("aria-expanded","true"),a.element.hasAttribute("expand-single-section")&&a.h.forEach(function(c){c!=b&&(c.hasAttribute("expanded")&&(X(a,"collapse",c),c.removeAttribute("expanded")),c.children[0].setAttribute("aria-expanded","false"))})):(X(a,"collapse",b),b.removeAttribute("expanded"),e.setAttribute("aria-expanded","false"))},b),a.l[d]=!f,sa(a))}
function ta(a,b){var c,d,e,f,g,h=b.children[1];a.measureMutateElement(function(){c=b.offsetWidth;var a=h,d=M(a.style,"width",void 0);g=d?a.style[d]:void 0},function(){var d={position:"fixed",width:c+"px",opacity:"0"},e=h.style,f;for(f in d)e.setProperty(M(e,f),d[f].toString(),"important");b.hasAttribute("expanded")||(X(a,"expand",b),b.setAttribute("expanded",""))}).then(function(){return a.measureMutateElement(function(){d=b.offsetHeight;e=h.offsetHeight;var c=a.getViewport().getHeight();f=Z(Math.abs(e),
c)},function(){O(b,{overflow:"hidden",height:d+"px"});O(h,{position:"",opacity:"",width:g})})}).then(function(){var c=new H(a.element);c.setCurve(oa);c.add(0,P(b,{height:R(Q(d,d+e))}),1);c.add(0,P(h,{opacity:Q(0,1)}),1);return c.start(f).thenAlways(function(){a.mutateElement(function(){O(b,{overflow:"",height:""});O(h,{opacity:""})})})})}
function Y(a,b){var c,d,e,f=b.firstElementChild;a.measureMutateElement(function(){c=b.offsetHeight;d=f.offsetHeight;var g=a.getViewport().getSize().height;e=Z(Math.abs(c),g)},function(){O(b,{overflow:"hidden"})}).then(function(){return ma(b,P(b,{height:R(Q(c,d))}),e).thenAlways(function(){return a.mutateElement(function(){b.hasAttribute("expanded")&&(X(a,"collapse",b),b.removeAttribute("expanded"));O(b,{height:"",overflow:""})})})})}
function Z(a,b){var c=void 0===c?200:c;var d=void 0===d?500:d;var e=Math.abs(a)/b*d;return Math.min(Math.max(e,c),d)}S.prototype.I=function(a){ua(this,a)&&(a.preventDefault(),W(this,a.currentTarget.parentElement))};function ua(a,b){var c=b.target;b=b.currentTarget;var d=!!ea(c,function(a){return"A"==a.tagName},b),e=a.w.hasAction(c,"tap",b);return!d&&!e}
S.prototype.K=function(a){if(!a.defaultPrevented)switch(a.key){case "ArrowUp":case "ArrowDown":var b=this.m.indexOf(a.currentTarget);if(-1!==b){a.preventDefault();a=(b+("ArrowUp"==a.key?-1:1))%this.m.length;0>a&&(a+=this.m.length);try{this.m[a].focus()}catch(c){}}break;case "Enter":case " ":a.target==a.currentTarget&&(a.preventDefault(),W(this,a.currentTarget.parentElement))}};
function ra(a,b){b.forEach(function(b){var c=b.target,e=c.hasAttribute("data-expand"),f=c.hasAttribute("expanded");f!==e&&W(a,c,e)})}(function(a){a.registerElement("amp-accordion",S,".i-amphtml-accordion-content,.i-amphtml-accordion-header{margin:0}.i-amphtml-accordion-header{cursor:pointer;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}\n/*# sourceURL=/extensions/amp-accordion/0.1/amp-accordion.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-accordion-0.1.js.map
