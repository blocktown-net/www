(self.AMP=self.AMP||[]).push({n:"amp-gfycat",v:"1910151804560",f:(function(AMP,_){
var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var p;a:{var ba={a:!0},ca={};try{ca.__proto__=ba;p=ca.a;break a}catch(a){}p=!1}m=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=m;function ea(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var fa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function r(a){var b=Object.create(null);if(!a)return b;for(var c;c=fa.exec(a);){var d=ea(c[1],c[1]),g=c[2]?ea(c[2].replace(/\+/g," "),c[2]):"";b[d]=g}return b};var t="";var ha=Object.prototype.toString;function u(a){return"number"===typeof a&&isFinite(a)};function v(a){var b=!1,c=null,d=a;return function(a){for(var g=[],f=0;f<arguments.length;++f)g[f-0]=arguments[f];b||(c=d.apply(self,g),b=!0,d=null);return c}};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){if(!w.user)throw Error("failed to call initLogConstructor");return w.user}function y(){if(w.dev)return w.dev;throw Error("failed to call initLogConstructor");}function z(a,b,c){return x().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function A(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function B(a){return a||{}};function ia(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};B({c:!0,v:!0,a:!0,ad:!0,action:!0});function ja(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(g){y().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function C(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),g=c!=d;var e=d;if(e.__AMP__EXPERIMENT_TOGGLES)var f=e.__AMP__EXPERIMENT_TOGGLES;else{e.__AMP__EXPERIMENT_TOGGLES=Object.create(null);f=e.__AMP__EXPERIMENT_TOGGLES;if(e.AMP_CONFIG)for(var l in e.AMP_CONFIG){var h=e.AMP_CONFIG[l];"number"===typeof h&&0<=h&&1>=h&&(f[l]=Math.random()<h)}if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-doc-opt-in"])&&0<e.AMP_CONFIG["allow-doc-opt-in"].length&&(l=e.AMP_CONFIG["allow-doc-opt-in"],
h=e.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){h=h.getAttribute("content").split(",");for(var n=0;n<h.length;n++)-1!=l.indexOf(h[n])&&(f[h[n]]=!0)}Object.assign(f,ja(e));if(e.AMP_CONFIG&&Array.isArray(e.AMP_CONFIG["allow-url-opt-in"])&&0<e.AMP_CONFIG["allow-url-opt-in"].length)for(l=e.AMP_CONFIG["allow-url-opt-in"],e=r(e.location.originalHash||e.location.hash),h=0;h<l.length;h++)n=e["e-"+l[h]],"1"==n&&(f[l[h]]=!0),"0"==n&&(f[l[h]]=!1)}var q=!!f["ampdoc-fie"];g&&!q?b=D(c,
b)?E(c,b):null:(a=F(a),a=G(a),b=D(a,b)?E(a,b):null);return b}function H(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return E(a,b)}function I(a,b){var c=F(a);c=G(c);return E(c,b)}function F(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function G(a){a=F(a);return a.isSingleDoc()?a.win:a}function E(a,b){D(a,b);var c=ka(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function ka(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function D(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function J(a){a.parentElement&&a.parentElement.removeChild(a)}function la(a){var b,c,d=b||function(a){return a},g=a.dataset;a={};var e=c?c:/^param(.+)/,f;for(f in g){var l=f.match(e);if(l){var h=l[1][0].toLowerCase()+l[1].substr(1);a[d(h)]=g[f]}}return a};function K(a){a.signals().signal("user-interacted")};var L;function ma(a,b,c,d){var g=a,e=c;var f=function(a){try{return e(a)}catch(q){throw self.__AMP_REPORT_ERROR(q),q;}};var l=na(),h=!1;d&&(h=d.capture);g.addEventListener(b,f,l?d:h);return function(){g&&g.removeEventListener(b,f,l?d:h);f=g=e=null}}function na(){if(void 0!==L)return L;L=!1;try{var a={get capture(){L=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return L};function oa(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function M(a,b,c){return ma(a,b,c,void 0)}function pa(a,b,c,d){var g=c,e=ma(a,b,function(a){try{g(a)}finally{g=null,e()}},d);return e}function qa(a){var b,c,d=new Promise(function(b){c=pa(a,"load",b,void 0)});d.then(c,c);b&&b(c);return d};var ra={title:"",artist:"",album:"",artwork:[{src:""}]};function sa(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){try{var c=JSON.parse(b.textContent)}catch(g){c=null}var d=c;if(d&&d.image){if("string"===typeof d.image)return d.image;if(d.image["@list"]&&"string"===typeof d.image["@list"][0])return d.image["@list"][0];if("string"===typeof d.image.url)return d.image.url;if("string"===typeof d.image[0])return d.image[0]}}}
function ta(a,b){var c=C(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a="[object Object]"===ha.call(a)?a.src:a,z(c.isProtocolValid(a)))})}};function ua(){this.m=null}k=ua.prototype;k.add=function(a){var b=this;this.m||(this.m=[]);this.m.push(a);return function(){b.remove(a)}};k.remove=function(a){this.m&&(a=this.m.indexOf(a),-1<a&&this.m.splice(a,1))};k.removeAll=function(){this.m&&(this.m.length=0)};k.fire=function(a){if(this.m)for(var b=this.m,c=0;c<b.length;c++)(0,b[c])(a)};k.getHandlerCount=function(){return this.m?this.m.length:0};function N(){this.I=!1;this.Y=new ua}N.prototype.onSessionEnd=function(a){this.Y.add(a)};N.prototype.beginSession=function(){this.I=!0};N.prototype.endSession=function(){this.I&&this.Y.fire();this.I=!1};N.prototype.isSessionActive=function(){return this.I};var O,va="Webkit webkit Moz moz ms O o".split(" ");function wa(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b){var d=a,g=b[c];var e=d.style;var f=c;if(ia(f,"--"))e=f;else{O||(O=A());var l=O[f];if(!l){l=f;if(void 0===e[f]){var h=f;h=h.charAt(0).toUpperCase()+h.slice(1);b:{for(var n=0;n<va.length;n++){var q=va[n]+h;if(void 0!==e[q]){h=q;break b}}h=""}void 0!==e[h]&&(l=h)}O[f]=l}e=l}e&&(d.style[e]=g)}};function xa(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;wa(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var P=null;function ya(a){var b=250,c=4E3;return Math.min(Math.max(a,b),c)};function za(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Aa="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-component:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Q;function Ba(a){a=a.ownerDocument||a;Q&&Q.ownerDocument===a||(Q=a.createElement("div"));return Ca}function Ca(a){var b=Q;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};var Da=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Ea=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Fa(a){var b=Ba(a);return b(Da)}
function Ga(a,b){var c=Ba(b)(Ea),d=c.firstElementChild;for(b=0;4>b;b++){for(var g=d.cloneNode(!0),e=g.children,f=0;f<e.length;f++){var l=e[f];l.classList.add("amp-video-eq-"+(b+1)+"-"+(f+1))}c.appendChild(g)}J(d);H(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Ha(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=v(function(){var a=Aa,d=b.ampdoc.getHeadNode();var g=(g=d.__AMP_CSS_TR)?g(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=A());var e=za(d,a,"amp-extension=amp-video-autoplay");e?e.textContent!==g&&(e.textContent=g):(e=(d.ownerDocument||d).createElement("style"),e.textContent=g,e.setAttribute("amp-extension","amp-video-autoplay"),g=za(d,a,"amp-runtime"),d.insertBefore(e,g?g.nextSibling:d.firstChild),a["amp-extension=amp-video-autoplay"]=
e)});this.ea=I(this.ampdoc,"viewport");this.h=null;this.da=!1;this.L=H(a.win,"timer");this.fa=C(a.getHeadNode(),"action");this.X=function(){for(var a=0;a<b.h.length;a++){var d=b.h[a];if("paused"!==d.getPlayingState()){R(d,"video-seconds-played");var g=d.video.getCurrentTime(),e=d.video.getDuration();u(g)&&u(e)&&0<e&&(g=oa(b.ampdoc.win,"video-manager.timeUpdate",B({time:g,percent:g/e})),b.fa.trigger(d.video.element,"timeUpdate",g,1))}}b.L.delay(b.X,1E3)};this.O=v(function(){return new S(b.ampdoc,b)});
this.L.delay(this.X,1E3)}k=Ha.prototype;k.dispose=function(){this.O().dispose();if(this.h)for(var a=0;a<this.h.length;a++){var b=this.h[a];b.dispose()}};k.register=function(a){Ia(a);if(a.supportsPlatform()){this.h=this.h||[];var b=new Ja(this,a);Ka(this,b);this.h.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-video-component");var c=a.signals();c.signal("registered");b.classList.add("i-amphtml-video-interface")}};
function Ia(a){function b(b,g){a.registerAction(b,function(){K(a);g()},c)}var c=1;b("play",function(){return a.play(!1)});b("pause",function(){return a.pause()});b("mute",function(){return a.mute()});b("unmute",function(){return a.unmute()});b("fullscreen",function(){return a.fullscreenEnter()})}
function Ka(a,b){var c=b.video.element;M(c,"amp:video:visibility",function(a){var c=a.data;c&&1==c.visible?b.updateVisibility(!0):b.updateVisibility()});M(c,"reloaded",function(){b.videoLoaded()});if(!a.da){var d=function(){for(var b=0;b<a.h.length;b++)a.h[b].updateVisibility()};a.ea.onScroll(d);a.ea.onChanged(d);a.da=!0}}function T(a,b){for(var c=0;c<a.h.length;c++)if(a.h[c].video===b)return a.h[c];y().error("video-manager","video is not registered to this video manager");return null}
k.getAnalyticsDetails=function(a){var b;a:{for(b=0;b<this.h.length;b++){var c=this.h[b];if(c.video.element===a){b=c;break a}}y().error("video-manager","video is not registered to this video manager");b=null}return b?b.getAnalyticsDetails():Promise.resolve()};k.getPlayingState=function(a){return T(this,a).getPlayingState()};k.isMuted=function(a){return T(this,a).isMuted()};k.userInteracted=function(a){return T(this,a).userInteracted()};k.registerForAutoFullscreen=function(a){this.O().register(a)};
k.ma=function(){return this.O()};
function Ja(a,b){var c=this;this.J=a;this.j=a.ampdoc;this.video=b;this.W=!0;this.w=this.A=this.ba=!1;this.N=new N;this.N.onSessionEnd(function(){return R(c,"video-session")});this.D=new N;this.D.onSessionEnd(function(){return R(c,"video-session-visible")});this.S=function(){var a=c.j.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var e=self.AMP_CONFIG||{};var f=!!e.test||!(!b.__AMP_TEST&&!b.__karma__);var l=b.__karma__&&b.__karma__.config.amp.testOnIe,h=!!e.localDev||f,n=r(b.location.originalHash||
b.location.hash);e=e.spt;var q=r(b.location.search);t||(t=h?"1910151804560":b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"011910151804560");f={localDev:h,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(n.development)||b.AMP_DEV_MODE),examiner:"2"==n.development,filter:n.filter,geoOverride:n["amp-geo"],userLocationOverride:n["amp-user-location"],minified:!0,lite:void 0!=q.amp_lite,test:f,testIe:l,log:n.log,version:"1910151804560",rtvVersion:t,singlePassType:e};b=b.__AMP_MODE=f}b=
b.lite;P||(P=v(xa));return P(a,b)};this.$=v(function(){return new U(c.j.win,c)});this.R=this.ca=!1;this.P=null;this.K=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.J.installAutoplayStyles();this.B=ra;this.ja=function(){c.video.play(!1)};this.ia=function(){c.video.pause()};qa(b.element).then(function(){return c.videoLoaded()});M(b.element,"pause",function(){R(c,"video-pause");c.A=!1;c.R?c.R=!1:c.N.endSession()});M(b.element,"playing",function(){c.A=!0;"playing_manual"==c.getPlayingState()&&
c.Z();var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=c.j.win;var e=c.B,f=c.ja,l=c.ia,h=a.navigator;"mediaSession"in h&&a.MediaMetadata&&(h.mediaSession.metadata=new a.MediaMetadata(ra),ta(b,e),h.mediaSession.metadata=new a.MediaMetadata(e),h.mediaSession.setActionHandler("play",f),h.mediaSession.setActionHandler("pause",l))}c.N.beginSession();c.w&&c.D.beginSession();R(c,"video-play")});M(b.element,"muted",function(){return c.K=
!0});M(b.element,"unmuted",function(){return c.K=!1});M(b.element,"ended",function(){R(c,"video-ended")});M(b.element,"ad_start",function(){return R(c,"video-ad-start")});M(b.element,"ad_end",function(){return R(c,"video-ad-end")});M(b.element,"amp:video:tick",function(a){a=a.data;var b=a.eventType;b&&La(c,b,a.vars)});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:z(c.video.isInteractive(),
"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",a))&&c.J.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&Ma(c)});this.Z=v(function(){var a="firstPlay",b=oa(c.j.win,a,B({})),e=c.video.element,f=C(e,"action");f.trigger(e,a,b,1)});Na(this)}k=Ja.prototype;k.dispose=function(){this.$().stop()};
function La(a,b,c){var d={},g=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){g["custom_"+a]=c[a]});R(a,"video-hosted-custom",g)}function Na(a){a.video.signals().whenSignal("autoplay-delegated").then(function(){a.W=!1;a.A&&a.video.pause()})}k.isMuted=function(){return this.K};
k.videoLoaded=function(){this.ba=!0;this.P=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.B=A(this.video.getMetadata()));var a=this.j.win.document;if(!this.B.artwork||0==this.B.artwork.length){var b;(b=sa(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.B.artwork=[{src:b}])}!this.B.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.P.getAttribute("title")||this.P.getAttribute("aria-label")||a.title)&&(this.B.title=a)}this.$().start();this.updateVisibility();this.w&&Oa(this)};
function Oa(a){a.j.isVisible()&&a.S().then(function(b){var c=a.hasAutoplay&&!a.userInteracted();c&&b?a.W&&(a.w?(a.D.beginSession(),a.video.play(!0),a.ca=!0):(a.A&&a.D.endSession(),a.video.pause(),a.R=!0)):a.w?a.D.beginSession():a.A&&a.D.endSession()})}function Ma(a){a.video.isInteractive()&&a.video.hideControls();a.S().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Pa(a))})}
function Pa(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var g=Ga(c,d),e=function(a){b.mutateElement(function(){g.classList.toggle("amp-video-eq-play",a)})};b.mutateElement(function(){d.appendChild(g)});var f=[M(d,"pause",function(){return e(!1)}),M(d,"playing",function(){return e(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.Z();b.isInteractive()&&b.showControls();b.unmute();f.forEach(function(a){a()});
b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&J(b);c&&J(c)});if(b.isInteractive()){var l=Fa(d),h=function(a){b.mutateElement(function(){var b=a;void 0===b&&(b=l.hasAttribute("hidden"));b?l.removeAttribute("hidden"):l.setAttribute("hidden","")})};b.hideControls();b.mutateElement(function(){d.appendChild(l)});[M(l,"click",function(){return K(b)}),M(d,"ad_start",function(){h(!1);b.showControls()}),M(d,"ad_end",function(){h(!0);b.hideControls()}),M(d,"unmuted",function(){return K(b)})].forEach(function(a){return f.push(a)})}}}
k.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(u(c)?c:0)}this.w!=b&&this.ba&&Oa(this)};k.getPlayingState=function(){return this.A?this.A&&this.ca&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};k.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
k.getAnalyticsDetails=function(){var a=this,b=this.video;return this.S().then(function(c){var d=b.element.getLayoutBox(),g=d.width;d=d.height;var e=a.hasAutoplay&&c,f=b.getPlayedRanges(),l=f.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:e,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.K,playedTotal:l,playedRangesJson:JSON.stringify(f),state:a.getPlayingState(),width:g}})};
function S(a,b){var c=this;this.J=b;this.j=a;this.C=this.F=null;this.h=[];this.l=[];this.G=function(){return Qa(c)};this.ha=function(a){return"playing_manual"==c.J.getPlayingState(a)};this.ga=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var f=b.element.getIntersectionChangeEntry();b=f.boundingClientRect;d-=f.intersectionRatio;.1<Math.abs(d)?a=d:(f=I(c.j,"viewport"),d=Ra(f,a),f=Ra(f,b),a=d<f||d>f?d-f:a.top-b.top);return a};Sa(this);Ta(this)}
S.prototype.dispose=function(){this.l.forEach(function(a){return a()});this.l.length=0};S.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=H(this.j.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.h.push(a),M(b,"pause",this.G),M(b,"playing",this.G),M(b,"ended",this.G),a.signals().whenSignal("user-interacted").then(this.G),Qa(this))};
function Ta(a){function b(){a.F=null}var c=a.j.getRootNode();a.l.push(M(c,"webkitfullscreenchange",b),M(c,"mozfullscreenchange",b),M(c,"fullscreenchange",b),M(c,"MSFullscreenChange",b))}S.prototype.isInLandscape=function(){var a=this.j.win;return a.screen&&"orientation"in a.screen?ia(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function Sa(a){var b=a.j.win,c=b.screen;if(c&&"orientation"in c){var d=c.orientation;a.l.push(M(d,"change",function(){return Ua(a)}))}a.l.push(M(b,"orientationchange",function(){return Ua(a)}))}function Ua(a){a.isInLandscape()?null!=a.C&&Va(a,a.C):a.F&&Wa(a,a.F)}function Va(a,b){var c=H(a.j.win,"platform");a.F=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():Xa(a,b).then(function(){return b.fullscreenEnter()})}
function Wa(a,b){a.F=null;Xa(a,b,"center").then(function(){return b.fullscreenExit()})}function Xa(a,b,c){c=void 0===c?null:c;var d=b.element,g=I(a.j,"viewport");return Ya(a).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a,l=b.top;b=b.bottom;var h=g.getSize().height,n=0<=l&&b<=h;return n?Promise.resolve():g.animateScrollIntoView(d,c?c:b>h?"bottom":"top")})}function Ya(a){var b=330;return H(a.j.win,"timer").promise(b)}
function Qa(a){if(a.isInLandscape())return a.C;a.C=null;var b=a.h.filter(a.ha).sort(a.ga)[0];if(b){var c=b.element.getIntersectionChangeEntry().intersectionRatio;.5<=c&&(a.C=b)}return a.C}function Ra(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function U(a,b){this.L=H(a,"timer");this.H=b;this.l=null;this.M=this.aa=0}
U.prototype.start=function(){var a=this,b=this.H.video.element;this.stop();this.l=this.l||[];V(this)?W(this,this.M):this.l.push(pa(b,"loadedmetadata",function(){V(a)&&W(a,a.M)}));this.l.push(M(b,"ended",function(){V(a)&&Za(a,100)}))};U.prototype.stop=function(){if(this.l){for(;0<this.l.length;)this.l.pop().call();this.M++}};
function V(a){var b=a.H.video,c=b.getDuration();if(!c||isNaN(c)||0>=c)return!1;if(250>50*c){var d=5;a.la("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",d,"seconds long.",b.element)}return!0}U.prototype.la=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];x().warn.apply(x(),["video-manager"].concat(b))};
function W(a,b){if(b==a.M){var c=a.H,d=a.L,g=c.video,e=function(){return W(a,b)};if("paused"==c.getPlayingState())d.delay(e,500);else{c=g.getDuration();var f=ya(50*c),l=g.getCurrentTime()/c*100,h=5*Math.floor(l/5);u(h);Za(a,h);d.delay(e,f)}}}function Za(a,b){0>=b||a.aa==b||(a.aa=b,R(a.H,"video-percentage-played",{normalizedPercentage:b.toString()}))}function R(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};function X(a){a=AMP.BaseElement.call(this,a)||this;a.V="";a.o=null;a.U=null;a.T=null;return a}var Y=AMP.BaseElement;X.prototype=aa(Y.prototype);X.prototype.constructor=X;if(da)da(X,Y);else for(var Z in Y)if("prototype"!=Z)if(Object.defineProperties){var $a=Object.getOwnPropertyDescriptor(Y,Z);$a&&Object.defineProperty(X,Z,$a)}else X[Z]=Y[Z];X.na=Y.prototype;k=X.prototype;
k.preconnectCallback=function(a){this.preconnect.url("https://gfycat.com",a);this.preconnect.url("https://giant.gfycat.com",a);this.preconnect.url("https://thumbs.gfycat.com",a)};k.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
k.buildCallback=function(){this.V=z(this.element.getAttribute("data-gfyid"),"The data-gfyid attribute is required for <amp-gfycat> %s",this.element);this.element.hasAttribute("noautoplay")||this.element.setAttribute("autoplay","");var a=F(this.element),b=G(a),c=ka(b),d=c["video-manager"];d||(d=c["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Ha,d.context=a,d.resolve&&E(b,"video-manager"));I(this.element,"video-manager").register(this)};
k.createPlaceholderCallback=function(){var a=this.win.document.createElement("amp-img"),b=this.V;this.propagateAttributes(["alt","aria-label"],a);a.setAttribute("src","https://thumbs.gfycat.com/"+encodeURIComponent(b)+"-poster.jpg");a.setAttribute("layout","fill");a.setAttribute("placeholder","");a.setAttribute("referrerpolicy","origin");this.element.hasAttribute("aria-label")?a.setAttribute("alt","Loading gif "+this.element.getAttribute("aria-label")):this.element.hasAttribute("alt")?a.setAttribute("alt",
"Loading gif "+this.element.getAttribute("alt")):a.setAttribute("alt","Loading gif");this.applyFillContent(a);return a};
function ab(a){if(a.U)return a.U;var b="https://gfycat.com/ifr/"+encodeURIComponent(a.V),c=la(a.element),d=a.element.hasAttribute("noautoplay");d&&(c.autoplay="0");var g=[];for(h in c){var e=c[h];if(null!=e)if(Array.isArray(e))for(var f=0;f<e.length;f++){var l=e[f];g.push(encodeURIComponent(h)+"="+encodeURIComponent(l))}else g.push(encodeURIComponent(h)+"="+encodeURIComponent(e))}c=g.join("&");if(c){b=b.split("#",2);var h=b[0].split("?",2);c=h[0]+(h[1]?"?"+h[1]+"&"+c:"?"+c);b=c+=b[1]?"#"+b[1]:""}return a.U=
b}k.layoutCallback=function(){var a=this,b=this.element.ownerDocument.createElement("iframe"),c=ab(this);b.setAttribute("frameborder","0");b.src=c;this.applyFillContent(b);this.o=b;this.T=M(this.win,"message",this.ka.bind(this));this.element.appendChild(b);return this.loadPromise(this.o).then(function(){a.element.dispatchCustomEvent("load")})};k.unlayoutCallback=function(){this.o&&(J(this.o),this.o=null);this.T&&this.T();return!0};
k.ka=function(a){var b=a.data;"https://gfycat.com"===a.origin&&a.source==this.o.contentWindow&&"string"===typeof b&&("paused"==b?this.element.dispatchCustomEvent("pause"):"playing"==b&&this.element.dispatchCustomEvent("playing"))};k.pauseCallback=function(){this.pause()};k.supportsPlatform=function(){return!0};k.isInteractive=function(){return!1};k.play=function(){this.o&&this.o.contentWindow&&this.o.contentWindow.postMessage("play","*")};
k.pause=function(){this.o&&this.o.contentWindow&&this.o.contentWindow.postMessage("pause","*")};k.mute=function(){};k.unmute=function(){};k.showControls=function(){};k.hideControls=function(){};k.fullscreenEnter=function(){};k.fullscreenExit=function(){};k.isFullscreen=function(){return!1};k.getMetadata=function(){};k.preimplementsMediaSessionAPI=function(){return!1};k.preimplementsAutoFullscreen=function(){return!1};k.getCurrentTime=function(){return 0};k.getDuration=function(){return 1};
k.getPlayedRanges=function(){return[]};k.seekTo=function(){this.user().error("amp-gfycat","`seekTo` not supported.")};(function(a){a.registerElement("amp-gfycat",X)})(self.AMP);
})});

//# sourceMappingURL=amp-gfycat-0.1.js.map
