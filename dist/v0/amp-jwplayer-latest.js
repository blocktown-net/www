(self.AMP=self.AMP||[]).push({n:"amp-jwplayer",v:"1910151804560",f:(function(AMP,_){
var e,f="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},h;if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var l;a:{var n={a:!0},p={};try{p.__proto__=n;l=p.a;break a}catch(a){}l=!1}h=l?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=h;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var u=self.__AMP_LOG;function v(a,b,k){if(!u.user)throw Error("failed to call initLogConstructor");return u.user.assert(a,b,k,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function w(a){a=AMP.BaseElement.call(this,a)||this;a.j="";a.w="";a.h="";a.m="";a.o="";a.l="";a.c=null;return a}var x=AMP.BaseElement;w.prototype=f(x.prototype);w.prototype.constructor=w;if(t)t(w,x);else for(var y in x)if("prototype"!=y)if(Object.defineProperties){var z=Object.getOwnPropertyDescriptor(x,y);z&&Object.defineProperty(w,y,z)}else w[y]=x[y];w.A=x.prototype;e=w.prototype;
e.preconnectCallback=function(a){this.preconnect.url("https://content.jwplatform.com",a);this.preconnect.url("https://ssl.p.jwpcdn.com",a)};e.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
e.buildCallback=function(){var a=this.element;this.j=v(a.getAttribute("data-playlist-id")||a.getAttribute("data-media-id"),"Either the data-media-id or the data-playlist-id attributes must be specified for <amp-jwplayer> %s",a);this.w=v(a.getAttribute("data-player-id"),"The data-player-id attribute is required for <amp-jwplayer> %s",a);this.h=a.getAttribute("data-content-search")||"";this.m=a.getAttribute("data-content-contextual")||"";this.o=a.getAttribute("data-content-recency")||"";this.l=a.getAttribute("data-content-backfill")||
""};
e.layoutCallback=function(){var a=this.element.ownerDocument.createElement("iframe"),b=encodeURIComponent(this.j),k=encodeURIComponent(this.w),q={search:this.getContextualVal()||void 0,contextual:this.m||void 0,recency:this.o||void 0,backfill:this.l||void 0};var c=q;var d=[];for(g in c){var m=c[g];if(null!=m)if(Array.isArray(m))for(var r=0;r<m.length;r++){var A=m[r];d.push(encodeURIComponent(g)+"="+encodeURIComponent(A))}else d.push(encodeURIComponent(g)+"="+encodeURIComponent(m))}c=d.join("&");d=
"https://content.jwplatform.com/players/"+b+"-"+k+".html";if(c){d=d.split("#",2);var g=d[0].split("?",2);c=g[0]+(g[1]?"?"+g[1]+"&"+c:"?"+c);c+=d[1]?"#"+d[1]:""}else c=d;a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.src=c;this.applyFillContent(a);this.element.appendChild(a);this.c=a;return this.loadPromise(a)};e.pauseCallback=function(){this.c&&this.c.contentWindow&&this.c.contentWindow.postMessage("pause","https://content.jwplatform.com")};
e.unlayoutCallback=function(){if(this.c){var a=this.c;a.parentElement&&a.parentElement.removeChild(a);this.c=null}return!0};
e.createPlaceholderCallback=function(){if(this.element.hasAttribute("data-media-id")){var a=this.win.document.createElement("amp-img");this.propagateAttributes(["aria-label"],a);a.setAttribute("src","https://content.jwplatform.com/thumbs/"+encodeURIComponent(this.j)+"-720.jpg");a.setAttribute("layout","fill");a.setAttribute("placeholder","");a.setAttribute("referrerpolicy","origin");a.hasAttribute("aria-label")?a.setAttribute("alt","Loading video - "+a.getAttribute("aria-label")):a.setAttribute("alt",
"Loading video");return a}};e.getContextualVal=function(){if("__CONTEXTUAL__"===this.h){var a=this.getAmpDoc().getHeadNode(),b=a.querySelector('meta[property="og:title"]'),k=b?b.getAttribute("content"):null,q=(a.querySelector("title")||{}).textContent;return k||q||""}return this.h};(function(a){a.registerElement("amp-jwplayer",w)})(self.AMP);
})});

//# sourceMappingURL=amp-jwplayer-0.1.js.map
