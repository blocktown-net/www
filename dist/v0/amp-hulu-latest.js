(self.AMP=self.AMP||[]).push({n:"amp-hulu",v:"1910151804560",f:(function(AMP,_){
var b="function"==typeof Object.create?Object.create:function(a){function c(){}c.prototype=a;return new c},d;if("function"==typeof Object.setPrototypeOf)d=Object.setPrototypeOf;else{var e;a:{var f={a:!0},g={};try{g.__proto__=f;e=g.a;break a}catch(a){}e=!1}d=e?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}var h=d;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var k=self.__AMP_LOG;/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function l(a){a=AMP.BaseElement.call(this,a)||this;a.c=null;a.h=null;return a}var m=AMP.BaseElement;l.prototype=b(m.prototype);l.prototype.constructor=l;if(h)h(l,m);else for(var n in m)if("prototype"!=n)if(Object.defineProperties){var p=Object.getOwnPropertyDescriptor(m,n);p&&Object.defineProperty(l,n,p)}else l[n]=m[n];l.j=m.prototype;l.prototype.preconnectCallback=function(){this.preconnect.preload(q(this))};
l.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};l.prototype.layoutCallback=function(){var a=document.createElement("iframe"),c=q(this);a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.src=c;this.applyFillContent(a);this.element.appendChild(a);this.c=a;return this.loadPromise(a)};l.prototype.unlayoutOnPause=function(){return!0};
l.prototype.unlayoutCallback=function(){if(this.c){var a=this.c;a.parentElement&&a.parentElement.removeChild(a);this.c=null}return!0};l.prototype.buildCallback=function(){var a=this.element.getAttribute("data-eid"),c=this.element;if(!k.user)throw Error("failed to call initLogConstructor");this.h=k.user.assert(a,"The data-eid attribute is required for <amp-hulu> %s",c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};
function q(a){return"https://player.hulu.com/site/dash/mobile_embed.html?amp=1&eid="+encodeURIComponent(a.h||"")}(function(a){a.registerElement("amp-hulu",l)})(self.AMP);
})});

//# sourceMappingURL=amp-hulu-0.1.js.map
