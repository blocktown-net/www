(self.AMP=self.AMP||[]).push({n:"amp-vimeo",v:"1910151804560",f:(function(AMP,_){
var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var p;a:{var ba={a:!0},ca={};try{ca.__proto__=ba;p=ca.a;break a}catch(a){}p=!1}m=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=m;function ea(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var fa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function q(a){var b=Object.create(null);if(!a)return b;for(var c;c=fa.exec(a);){var d=ea(c[1],c[1]),e=c[2]?ea(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var r="";
function ha(a){var b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!(!c.__AMP_TEST&&!c.__karma__),f=c.__karma__&&c.__karma__.config.amp.testOnIe,k=!!d.localDev||e,l=q(c.location.originalHash||c.location.hash);d=d.spt;var h=q(c.location.search);r||(r=k?"1910151804560":c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011910151804560");c={localDev:k,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(l.development)||c.AMP_DEV_MODE),examiner:"2"==l.development,
filter:l.filter,geoOverride:l["amp-geo"],userLocationOverride:l["amp-user-location"],minified:!0,lite:void 0!=h.amp_lite,test:e,testIe:f,log:l.log,version:"1910151804560",rtvVersion:r,singlePassType:d};c=b.__AMP_MODE=c}return c};var ia=Object.prototype.toString;function u(a){return"[object Object]"===ia.call(a)}function v(a){return"number"===typeof a&&isFinite(a)};function w(a){var b=!1,c=null,d=a;return function(a){for(var e=[],k=0;k<arguments.length;++k)e[k-0]=arguments[k];b||(c=d.apply(self,e),b=!0,d=null);return c}};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var x=self.__AMP_LOG;function y(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user}function z(){if(x.dev)return x.dev;throw Error("failed to call initLogConstructor");}function A(a,b,c){return y().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function B(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function C(a){return a||{}};function D(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};C({c:!0,v:!0,a:!0,ad:!0,action:!0});function ja(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){z().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function E(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d;var f=d;if(f.__AMP__EXPERIMENT_TOGGLES)var k=f.__AMP__EXPERIMENT_TOGGLES;else{f.__AMP__EXPERIMENT_TOGGLES=Object.create(null);k=f.__AMP__EXPERIMENT_TOGGLES;if(f.AMP_CONFIG)for(var l in f.AMP_CONFIG){var h=f.AMP_CONFIG[l];"number"===typeof h&&0<=h&&1>=h&&(k[l]=Math.random()<h)}if(f.AMP_CONFIG&&Array.isArray(f.AMP_CONFIG["allow-doc-opt-in"])&&0<f.AMP_CONFIG["allow-doc-opt-in"].length&&(l=f.AMP_CONFIG["allow-doc-opt-in"],
h=f.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){h=h.getAttribute("content").split(",");for(var n=0;n<h.length;n++)-1!=l.indexOf(h[n])&&(k[h[n]]=!0)}Object.assign(k,ja(f));if(f.AMP_CONFIG&&Array.isArray(f.AMP_CONFIG["allow-url-opt-in"])&&0<f.AMP_CONFIG["allow-url-opt-in"].length)for(l=f.AMP_CONFIG["allow-url-opt-in"],f=q(f.location.originalHash||f.location.hash),h=0;h<l.length;h++)n=f["e-"+l[h]],"1"==n&&(k[l[h]]=!0),"0"==n&&(k[l[h]]=!1)}var t=!!k["ampdoc-fie"];e&&!t?b=F(c,
b)?G(c,b):null:(a=H(a),a=I(a),b=F(a,b)?G(a,b):null);return b}function J(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return G(a,b)}function K(a,b){var c=H(a);c=I(c);return G(c,b)}function H(a){return a.nodeType?J((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function I(a){a=H(a);return a.isSingleDoc()?a.win:a}function G(a,b){F(a,b);var c=ka(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function ka(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function F(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function L(a){a.parentElement&&a.parentElement.removeChild(a)};function M(a){a.signals().signal("user-interacted")};var N,la="Webkit webkit Moz moz ms O o".split(" ");function ma(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b){var d=a,e=b[c];var f=d.style;var k=c;if(D(k,"--"))f=k;else{N||(N=B());var l=N[k];if(!l){l=k;if(void 0===f[k]){var h=k;h=h.charAt(0).toUpperCase()+h.slice(1);b:{for(var n=0;n<la.length;n++){var t=la[n]+h;if(void 0!==f[t]){h=t;break b}}h=""}void 0!==f[h]&&(l=h)}N[k]=l}f=l}f&&(d.style[f]=e)}};function na(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;ma(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var O=null;var P;function oa(a){a=a.ownerDocument||a;P&&P.ownerDocument===a||(P=a.createElement("div"));return pa}function pa(a){var b=P;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function qa(a){var b;try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var ra=["<iframe frameborder=0 allowfullscreen></iframe>"];function sa(a,b){var c=ta;if(null==c[b])return!1;var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)});return!0};var Q;function ua(a,b,c,d){var e=a,f=c;var k=function(a){try{return f(a)}catch(t){throw self.__AMP_REPORT_ERROR(t),t;}};var l=va(),h=!1;d&&(h=d.capture);e.addEventListener(b,k,l?d:h);return function(){e&&e.removeEventListener(b,k,l?d:h);k=e=f=null}}function va(){if(void 0!==Q)return Q;Q=!1;try{var a={get capture(){Q=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return Q};function wa(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function R(a,b,c){return ua(a,b,c,void 0)}function xa(a,b,c,d){var e=c,f=ua(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function ya(a){var b,c,d=new Promise(function(b){c=xa(a,"load",b,void 0)});d.then(c,c);b&&b(c);return d};var za={title:"",artist:"",album:"",artwork:[{src:""}]};function Aa(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=qa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function Ba(a,b){var c=E(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a=u(a)?a.src:a,A(c.isProtocolValid(a)))})}};function Ca(){this.m=null}g=Ca.prototype;g.add=function(a){var b=this;this.m||(this.m=[]);this.m.push(a);return function(){b.remove(a)}};g.remove=function(a){this.m&&(a=this.m.indexOf(a),-1<a&&this.m.splice(a,1))};g.removeAll=function(){this.m&&(this.m.length=0)};g.fire=function(a){if(this.m)for(var b=this.m,c=0;c<b.length;c++)(0,b[c])(a)};g.getHandlerCount=function(){return this.m?this.m.length:0};function S(){this.J=!1;this.W=new Ca}S.prototype.onSessionEnd=function(a){this.W.add(a)};S.prototype.beginSession=function(){this.J=!0};S.prototype.endSession=function(){this.J&&this.W.fire();this.J=!1};S.prototype.isSessionActive=function(){return this.J};function Da(a){var b=250,c=4E3;return Math.min(Math.max(a,b),c)};function Ea(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Fa="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-component:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Ga=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Ha=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Ia(a){var b=oa(a);return b(Ga)}
function Ja(a,b){var c=oa(b)(Ha),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,k=0;k<f.length;k++){var l=f[k];l.classList.add("amp-video-eq-"+(b+1)+"-"+(k+1))}c.appendChild(e)}L(d);J(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Ka(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=w(function(){var a=Fa,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=B());var f=Ea(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=Ea(d,a,"amp-runtime"),d.insertBefore(f,e?e.nextSibling:d.firstChild),a["amp-extension=amp-video-autoplay"]=
f)});this.da=K(this.ampdoc,"viewport");this.h=null;this.ba=!1;this.L=J(a.win,"timer");this.ea=E(a.getHeadNode(),"action");this.V=function(){for(var a=0;a<b.h.length;a++){var d=b.h[a];if("paused"!==d.getPlayingState()){T(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();v(e)&&v(f)&&0<f&&(e=wa(b.ampdoc.win,"video-manager.timeUpdate",C({time:e,percent:e/f})),b.ea.trigger(d.video.element,"timeUpdate",e,1))}}b.L.delay(b.V,1E3)};this.P=w(function(){return new U(b.ampdoc,b)});
this.L.delay(this.V,1E3)}g=Ka.prototype;g.dispose=function(){this.P().dispose();if(this.h)for(var a=0;a<this.h.length;a++){var b=this.h[a];b.dispose()}};g.register=function(a){La(a);if(a.supportsPlatform()){this.h=this.h||[];var b=new Ma(this,a);Na(this,b);this.h.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-video-component");var c=a.signals();c.signal("registered");b.classList.add("i-amphtml-video-interface")}};
function La(a){function b(b,e){a.registerAction(b,function(){M(a);e()},c)}var c=1;b("play",function(){return a.play(!1)});b("pause",function(){return a.pause()});b("mute",function(){return a.mute()});b("unmute",function(){return a.unmute()});b("fullscreen",function(){return a.fullscreenEnter()})}
function Na(a,b){var c=b.video.element;R(c,"amp:video:visibility",function(a){var c=a.data;c&&1==c.visible?b.updateVisibility(!0):b.updateVisibility()});R(c,"reloaded",function(){b.videoLoaded()});if(!a.ba){var d=function(){for(var b=0;b<a.h.length;b++)a.h[b].updateVisibility()};a.da.onScroll(d);a.da.onChanged(d);a.ba=!0}}function Oa(a,b){for(var c=0;c<a.h.length;c++)if(a.h[c].video===b)return a.h[c];z().error("video-manager","video is not registered to this video manager");return null}
g.getAnalyticsDetails=function(a){var b;a:{for(b=0;b<this.h.length;b++){var c=this.h[b];if(c.video.element===a){b=c;break a}}z().error("video-manager","video is not registered to this video manager");b=null}return b?b.getAnalyticsDetails():Promise.resolve()};g.getPlayingState=function(a){return Oa(this,a).getPlayingState()};g.isMuted=function(a){return Oa(this,a).isMuted()};g.userInteracted=function(a){return Oa(this,a).userInteracted()};g.registerForAutoFullscreen=function(a){this.P().register(a)};
g.ma=function(){return this.P()};
function Ma(a,b){var c=this;this.K=a;this.j=a.ampdoc;this.video=b;this.U=!0;this.w=this.B=this.$=!1;this.O=new S;this.O.onSessionEnd(function(){return T(c,"video-session")});this.F=new S;this.F.onSessionEnd(function(){return T(c,"video-session-visible")});this.T=function(){var a=c.j.win,b=ha(a).lite;O||(O=w(na));return O(a,b)};this.Y=w(function(){return new V(c.j.win,c)});this.S=this.aa=!1;this.R=null;this.o=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.K.installAutoplayStyles();
this.C=za;this.ia=function(){c.video.play(!1)};this.ha=function(){c.video.pause()};ya(b.element).then(function(){return c.videoLoaded()});R(b.element,"pause",function(){T(c,"video-pause");c.B=!1;c.S?c.S=!1:c.O.endSession()});R(b.element,"playing",function(){c.B=!0;"playing_manual"==c.getPlayingState()&&c.X();var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=c.j.win;var f=c.C,k=c.ia,l=c.ha,h=a.navigator;"mediaSession"in h&&a.MediaMetadata&&
(h.mediaSession.metadata=new a.MediaMetadata(za),Ba(b,f),h.mediaSession.metadata=new a.MediaMetadata(f),h.mediaSession.setActionHandler("play",k),h.mediaSession.setActionHandler("pause",l))}c.O.beginSession();c.w&&c.F.beginSession();T(c,"video-play")});R(b.element,"muted",function(){return c.o=!0});R(b.element,"unmuted",function(){return c.o=!1});R(b.element,"ended",function(){T(c,"video-ended")});R(b.element,"ad_start",function(){return T(c,"video-ad-start")});R(b.element,"ad_end",function(){return T(c,
"video-ad-end")});R(b.element,"amp:video:tick",function(a){a=a.data;var b=a.eventType;b&&Pa(c,b,a.vars)});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:A(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",a))&&c.K.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&Qa(c)});this.X=w(function(){var a=
"firstPlay",b=wa(c.j.win,a,C({})),f=c.video.element,k=E(f,"action");k.trigger(f,a,b,1)});Ra(this)}g=Ma.prototype;g.dispose=function(){this.Y().stop()};function Pa(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});T(a,"video-hosted-custom",e)}function Ra(a){a.video.signals().whenSignal("autoplay-delegated").then(function(){a.U=!1;a.B&&a.video.pause()})}g.isMuted=function(){return this.o};
g.videoLoaded=function(){this.$=!0;this.R=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.C=B(this.video.getMetadata()));var a=this.j.win.document;if(!this.C.artwork||0==this.C.artwork.length){var b;(b=Aa(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);b&&
(this.C.artwork=[{src:b}])}!this.C.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.R.getAttribute("title")||this.R.getAttribute("aria-label")||a.title)&&(this.C.title=a)}this.Y().start();this.updateVisibility();this.w&&Sa(this)};
function Sa(a){a.j.isVisible()&&a.T().then(function(b){var c=a.hasAutoplay&&!a.userInteracted();c&&b?a.U&&(a.w?(a.F.beginSession(),a.video.play(!0),a.aa=!0):(a.B&&a.F.endSession(),a.video.pause(),a.S=!0)):a.w?a.F.beginSession():a.B&&a.F.endSession()})}function Qa(a){a.video.isInteractive()&&a.video.hideControls();a.T().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Ta(a))})}
function Ta(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=Ja(c,d),f=function(a){b.mutateElement(function(){e.classList.toggle("amp-video-eq-play",a)})};b.mutateElement(function(){d.appendChild(e)});var k=[R(d,"pause",function(){return f(!1)}),R(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.X();b.isInteractive()&&b.showControls();b.unmute();k.forEach(function(a){a()});
b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&L(b);c&&L(c)});if(b.isInteractive()){var l=Ia(d),h=function(a){b.mutateElement(function(){var b=a;void 0===b&&(b=l.hasAttribute("hidden"));b?l.removeAttribute("hidden"):l.setAttribute("hidden","")})};b.hideControls();b.mutateElement(function(){d.appendChild(l)});[R(l,"click",function(){return M(b)}),R(d,"ad_start",function(){h(!1);b.showControls()}),R(d,"ad_end",function(){h(!0);b.hideControls()}),R(d,"unmuted",function(){return M(b)})].forEach(function(a){return k.push(a)})}}}
g.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(v(c)?c:0)}this.w!=b&&this.$&&Sa(this)};g.getPlayingState=function(){return this.B?this.B&&this.aa&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};g.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
g.getAnalyticsDetails=function(){var a=this,b=this.video;return this.T().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,k=b.getPlayedRanges(),l=k.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.o,playedTotal:l,playedRangesJson:JSON.stringify(k),state:a.getPlayingState(),width:e}})};
function U(a,b){var c=this;this.K=b;this.j=a;this.D=this.G=null;this.h=[];this.l=[];this.H=function(){return Ua(c)};this.ga=function(a){return"playing_manual"==c.K.getPlayingState(a)};this.fa=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=K(c.j,"viewport"),d=Va(e,a),e=Va(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};Wa(this);Xa(this)}
U.prototype.dispose=function(){this.l.forEach(function(a){return a()});this.l.length=0};U.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=J(this.j.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.h.push(a),R(b,"pause",this.H),R(b,"playing",this.H),R(b,"ended",this.H),a.signals().whenSignal("user-interacted").then(this.H),Ua(this))};
function Xa(a){function b(){a.G=null}var c=a.j.getRootNode();a.l.push(R(c,"webkitfullscreenchange",b),R(c,"mozfullscreenchange",b),R(c,"fullscreenchange",b),R(c,"MSFullscreenChange",b))}U.prototype.isInLandscape=function(){var a=this.j.win;return a.screen&&"orientation"in a.screen?D(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function Wa(a){var b=a.j.win,c=b.screen;if(c&&"orientation"in c){var d=c.orientation;a.l.push(R(d,"change",function(){return Ya(a)}))}a.l.push(R(b,"orientationchange",function(){return Ya(a)}))}function Ya(a){a.isInLandscape()?null!=a.D&&Za(a,a.D):a.G&&$a(a,a.G)}function Za(a,b){var c=J(a.j.win,"platform");a.G=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():ab(a,b).then(function(){return b.fullscreenEnter()})}
function $a(a,b){a.G=null;ab(a,b,"center").then(function(){return b.fullscreenExit()})}function ab(a,b,c){c=void 0===c?null:c;var d=b.element,e=K(a.j,"viewport");return bb(a).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a,l=b.top;b=b.bottom;var h=e.getSize().height,n=0<=l&&b<=h;return n?Promise.resolve():e.animateScrollIntoView(d,c?c:b>h?"bottom":"top")})}function bb(a){var b=330;return J(a.j.win,"timer").promise(b)}
function Ua(a){if(a.isInLandscape())return a.D;a.D=null;var b=a.h.filter(a.ga).sort(a.fa)[0];if(b){var c=b.element.getIntersectionChangeEntry().intersectionRatio;.5<=c&&(a.D=b)}return a.D}function Va(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.L=J(a,"timer");this.I=b;this.l=null;this.M=this.Z=0}
V.prototype.start=function(){var a=this,b=this.I.video.element;this.stop();this.l=this.l||[];cb(this)?db(this,this.M):this.l.push(xa(b,"loadedmetadata",function(){cb(a)&&db(a,a.M)}));this.l.push(R(b,"ended",function(){cb(a)&&eb(a,100)}))};V.prototype.stop=function(){if(this.l){for(;0<this.l.length;)this.l.pop().call();this.M++}};
function cb(a){var b=a.I.video,c=b.getDuration();if(!c||isNaN(c)||0>=c)return!1;if(250>50*c){var d=5;a.la("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",d,"seconds long.",b.element)}return!0}V.prototype.la=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];y().warn.apply(y(),["video-manager"].concat(b))};
function db(a,b){if(b==a.M){var c=a.I,d=a.L,e=c.video,f=function(){return db(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else{c=e.getDuration();var k=Da(50*c),l=e.getCurrentTime()/c*100,h=5*Math.floor(l/5);v(h);eb(a,h);d.delay(f,k)}}}function eb(a,b){0>=b||a.Z==b||(a.Z=b,T(a.I,"video-percentage-played",{normalizedPercentage:b.toString()}))}function T(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};var ta={play:"playing",pause:"pause",ended:"ended",volumechange:null};
function W(a){var b=AMP.BaseElement.call(this,a)||this;b.A=null;b.ca=w(function(){var a="set";return(a=void 0===a?null:a)?a.toLowerCase()+"Volume":"volume"});b.ka=w(function(){return fb(b)});b.o=!1;b.ja=function(a){var c=b.A,e=/^(https?:)?\/\/((player|www)\.)?vimeo.com(?=$|\/)/;if(c&&a.source==c.contentWindow&&("string"===typeof e?e==a.origin:e.test(a.origin))&&(a=a.data)&&(u(a)||D(a,"{")))if(c=u(a)?a:qa(a),"ready"==c.event||"ping"==c.method)b.ka();else if(a=b.element,!sa(a,c.event)&&"volumechange"==
c.event&&(c=c.data&&c.data.volume))c=0>=c,c!=b.o&&(b.o=c,a.dispatchCustomEvent(c?"muted":"unmuted"))};b.N=null;return b}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(da)da(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var gb=Object.getOwnPropertyDescriptor(X,Y);gb&&Object.defineProperty(W,Y,gb)}else W[Y]=X[Y];W.na=X.prototype;g=W.prototype;
g.preconnectCallback=function(a){a=void 0===a?!1:a;var b=this.preconnect;b.url("https://player.vimeo.com",a);b.url("https://i.vimeocdn.com",a);b.url("https://f.vimeocdn.com",a)};g.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
g.buildCallback=function(){var a=this.getAmpDoc();a=H(a);var b=I(a),c=ka(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Ka,d.context=a,d.resolve&&G(b,"video-manager"))};
g.layoutCallback=function(){var a=this;return hb(this).then(function(b){var c=b,d=a.element;d=A(d.getAttribute("data-videoid"),"The data-videoid attribute is required for <amp-vimeo> %s",d);d="https://player.vimeo.com/video/"+encodeURIComponent(d);if(c&&(a.o=!0,c=encodeURIComponent("muted")+"="+encodeURIComponent("1"),c)){d=d.split("#",2);var e=d[0].split("?",2);c=e[0]+(e[1]?"?"+e[1]+"&"+c:"?"+c);d=c+=d[1]?"#"+d[1]:""}c=d;d=a.element;e=oa(d)(ra);a.propagateAttributes(["referrerpolicy"],e);e.src=E(d,
"url").assertHttpsUrl(c,d);a.applyFillContent(e);d.appendChild(e);a.A=e;a.N=R(a.win,"message",a.ja);Z(a,"ping");return a.loadPromise(e)})};g.unlayoutCallback=function(){this.A&&(L(this.A),this.A=null);this.N&&(this.N(),this.N=null);return!0};function hb(a){if(!a.element.hasAttribute("autoplay"))return Promise.resolve(!1);a=a.win;var b=ha(a).lite;O||(O=w(na));return O(a,b)}
function fb(a){var b=a.element;Object.keys(ta).forEach(function(b){Z(a,"addEventListener",b)});K(b,"video-manager").register(a);b.dispatchCustomEvent("load")}g.pauseCallback=function(){this.pause()};g.pause=function(){Z(this,"pause")};g.play=function(){Z(this,"play")};g.mute=function(){this.o||Z(this,this.ca(),"0")};g.unmute=function(){Z(this,this.ca(),"1")};g.isInteractive=function(){return!0};g.supportsPlatform=function(){return!0};g.preimplementsMediaSessionAPI=function(){return!0};
g.preimplementsAutoFullscreen=function(){return!1};g.fullscreenEnter=function(){};g.fullscreenExit=function(){};g.isFullscreen=function(){return!1};g.showControls=function(){};g.hideControls=function(){};g.getMetadata=function(){};g.getDuration=function(){return 0};g.getCurrentTime=function(){return 0};g.getPlayedRanges=function(){return[]};function Z(a,b,c){c=void 0===c?null:c;if(a.A){var d=a.A.contentWindow;d&&d.postMessage(JSON.stringify(C({method:b,value:c||""})),"*")}}
g.seekTo=function(){this.user().error("amp-vimeo","`seekTo` not supported.")};(function(a){a.registerElement("amp-vimeo",W)})(self.AMP);
})});

//# sourceMappingURL=amp-vimeo-0.1.js.map