(self.AMP=self.AMP||[]).push({n:"amp-instagram",v:"1910151804560",f:(function(AMP,_){
var e,k="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={a:!0},t={};try{t.__proto__=q;p=t.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=n;var v;function w(a,b){var c=void 0,f=a,r=b;var d=function(a){try{return r(a)}catch(m){throw self.__AMP_REPORT_ERROR(m),m;}};var g=x(),h=!1;c&&(h=c.capture);f.addEventListener("message",d,g?c:h);return function(){f&&f.removeEventListener("message",d,g?c:h);d=f=r=null}}function x(){if(void 0!==v)return v;v=!1;try{var a={get capture(){v=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return v};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var y=Object.prototype.toString;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z=self.__AMP_LOG;function A(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function B(a,b){return w(a,b)};var C,E="Webkit webkit Moz moz ms O o".split(" ");function F(a,b){for(var c in b){var f=a,r=b[c];var d=f.style;var g=c;if(A(g,"--"))d=g;else{C||(C=Object.create(null));var h=C[g];if(!h){h=g;if(void 0===d[g]){var l=g;l=l.charAt(0).toUpperCase()+l.slice(1);b:{for(var m=0;m<E.length;m++){var D=E[m]+l;if(void 0!==d[D]){l=D;break b}}l=""}void 0!==d[l]&&(h=l)}C[g]=h}d=h}d&&(f.style[d]=r)}};function G(a){var b;try{return JSON.parse(a)}catch(c){return b&&b(c),null}};function H(a){a=AMP.BaseElement.call(this,a)||this;a.c=null;a.h="";a.j=null;a.l="";a.m=null;return a}var I=AMP.BaseElement;H.prototype=k(I.prototype);H.prototype.constructor=H;if(u)u(H,I);else for(var J in I)if("prototype"!=J)if(Object.defineProperties){var K=Object.getOwnPropertyDescriptor(I,J);K&&Object.defineProperty(H,J,K)}else H[J]=I[J];H.w=I.prototype;e=H.prototype;
e.preconnectCallback=function(a){this.preconnect.url("https://www.instagram.com",a);this.preconnect.url("https://instagram.fsnc1-1.fna.fbcdn.net",a)};e.renderOutsideViewport=function(){return!1};
e.buildCallback=function(){var a=this.element.getAttribute("data-shortcode")||this.element.getAttribute("shortcode"),b=this.element;if(!z.user)throw Error("failed to call initLogConstructor");this.h=z.user.assert(a,"The data-shortcode attribute is required for <amp-instagram> %s",b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);this.l=this.element.hasAttribute("data-captioned")?"captioned/":""};
e.createPlaceholderCallback=function(){var a=this,b=this.win.document.createElement("div");b.setAttribute("placeholder","");var c=this.win.document.createElement("img");this.getAmpDoc().whenFirstVisible().then(function(){c.setAttribute("src","https://www.instagram.com/p/"+encodeURIComponent(a.h)+"/media/?size=l")});c.setAttribute("referrerpolicy","origin");F(c,{overflow:"hidden","max-width":"100%"});this.propagateAttributes(["alt"],c);this.element.hasAttribute("data-default-framing")&&this.element.classList.add("amp-instagram-default-framing");
b.appendChild(c);F(b,{marginTop:"54px"});return b};e.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
e.layoutCallback=function(){var a=this,b=this.element.ownerDocument.createElement("iframe");this.c=b;this.j=B(this.win,this.o.bind(this));b.setAttribute("scrolling","no");b.setAttribute("frameborder","0");b.setAttribute("allowtransparency","true");b.setAttribute("title","Instagram: "+this.element.getAttribute("alt"));b.src="https://www.instagram.com/p/"+encodeURIComponent(this.h)+"/embed/"+this.l+"?cr=1&v=12";this.applyFillContent(b);this.element.appendChild(b);F(b,{opacity:0});return this.m=this.loadPromise(b).then(function(){a.getVsync().mutate(function(){F(b,
{opacity:1})})})};e.o=function(a){var b=this;if("https://www.instagram.com"==a.origin&&a.source==this.c.contentWindow){var c=a.data;if(c&&("[object Object]"===y.call(c)||A(c,"{"))&&(a="[object Object]"===y.call(c)?c:G(c),void 0!==a&&"MEASURE"==a.type&&a.details)){var f=a.details.height;this.getVsync().measure(function(){b.c&&b.c.offsetHeight!==f&&b.changeHeight(f)})}}};e.unlayoutOnPause=function(){return!0};
e.unlayoutCallback=function(){if(this.c){var a=this.c;a.parentElement&&a.parentElement.removeChild(a);this.m=this.c=null}this.j&&this.j();return!0};(function(a){a.registerElement("amp-instagram",H,"amp-instagram.amp-instagram-default-framing{border:1px solid #dbdbdb!important}\n/*# sourceURL=/extensions/amp-instagram/0.1/amp-instagram.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-instagram-0.1.js.map
