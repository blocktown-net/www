(self.AMP=self.AMP||[]).push({n:"amp-brightcove",v:"1910151804560",f:(function(AMP,_){
var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var ba={a:!0},ca={};try{ca.__proto__=ba;p=ca.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=n;function ea(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function fa(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function r(a){var b=Object.create(null);if(!a)return b;for(var c;c=ha.exec(a);){var d=fa(c[1],c[1]),e=c[2]?fa(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var t="";var ia=Object.prototype.toString;function u(a){return"[object Object]"===ia.call(a)}function v(a){return"number"===typeof a&&isFinite(a)};function w(a){var b=!1,c=null,d=a;return function(a){for(var e=[],g=0;g<arguments.length;++g)e[g-0]=arguments[g];b||(c=d.apply(self,e),b=!0,d=null);return c}};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var x=self.__AMP_LOG;function y(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user}function z(){if(x.dev)return x.dev;throw Error("failed to call initLogConstructor");}function A(a,b,c){return y().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function B(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function C(a){return a||{}};function D(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};C({c:!0,v:!0,a:!0,ad:!0,action:!0});function ja(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){z().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function E(a,b){var c=a.ownerDocument.defaultView,d=c.__AMP_TOP||(c.__AMP_TOP=c),e=c!=d;var f=d;if(f.__AMP__EXPERIMENT_TOGGLES)var g=f.__AMP__EXPERIMENT_TOGGLES;else{f.__AMP__EXPERIMENT_TOGGLES=Object.create(null);g=f.__AMP__EXPERIMENT_TOGGLES;if(f.AMP_CONFIG)for(var l in f.AMP_CONFIG){var h=f.AMP_CONFIG[l];"number"===typeof h&&0<=h&&1>=h&&(g[l]=Math.random()<h)}if(f.AMP_CONFIG&&Array.isArray(f.AMP_CONFIG["allow-doc-opt-in"])&&0<f.AMP_CONFIG["allow-doc-opt-in"].length&&(l=f.AMP_CONFIG["allow-doc-opt-in"],
h=f.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){h=h.getAttribute("content").split(",");for(var m=0;m<h.length;m++)-1!=l.indexOf(h[m])&&(g[h[m]]=!0)}Object.assign(g,ja(f));if(f.AMP_CONFIG&&Array.isArray(f.AMP_CONFIG["allow-url-opt-in"])&&0<f.AMP_CONFIG["allow-url-opt-in"].length)for(l=f.AMP_CONFIG["allow-url-opt-in"],f=r(f.location.originalHash||f.location.hash),h=0;h<l.length;h++)m=f["e-"+l[h]],"1"==m&&(g[l[h]]=!0),"0"==m&&(g[l[h]]=!1)}var q=!!g["ampdoc-fie"];e&&!q?b=F(c,
b)?G(c,b):null:(a=H(a),a=I(a),b=F(a,b)?G(a,b):null);return b}function J(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return G(a,b)}function K(a,b){var c=H(a);c=I(c);return G(c,b)}function H(a){return a.nodeType?J((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function I(a){a=H(a);return a.isSingleDoc()?a.win:a}function G(a,b){F(a,b);var c=ka(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function ka(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function F(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function L(a){a.parentElement&&a.parentElement.removeChild(a)}function la(a){var b,c,d=b||function(a){return a},e=a.dataset;a={};var f=c?c:/^param(.+)/,g;for(g in e){var l=g.match(f);if(l){var h=l[1][0].toLowerCase()+l[1].substr(1);a[d(h)]=e[g]}}return a};function M(a){return J(a,"timer")};function N(a){a.signals().signal("user-interacted")};var O;function ma(a){a=a.ownerDocument||a;O&&O.ownerDocument===a||(O=a.createElement("div"));return na}function na(a){var b=O;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function oa(a){var b;try{return JSON.parse(a)}catch(c){return b&&b(c),null}};var pa=["<iframe frameborder=0 allowfullscreen></iframe>"];function qa(a,b){var c={ready:"load",playing:"playing",pause:"pause",ended:"ended","ads-ad-started":"ad_start","ads-ad-ended":"ad_end",loadedmetadata:"loadedmetadata"};if(null==c[b])return!1;var d=c[b];(Array.isArray(d)?d:[d]).forEach(function(b){a.dispatchCustomEvent(b)});return!0}
function ra(a,b){var c,d=a.element,e=ma(d)(pa);c&&e.setAttribute("sandbox",c.join(" "));a.propagateAttributes(["referrerpolicy"],e);e.src=E(d,"url").assertHttpsUrl(b,d);a.applyFillContent(e);d.appendChild(e);return e};var P;function sa(a,b,c,d){var e=a,f=c;var g=function(a){try{return f(a)}catch(q){throw self.__AMP_REPORT_ERROR(q),q;}};var l=ta(),h=!1;d&&(h=d.capture);e.addEventListener(b,g,l?d:h);return function(){e&&e.removeEventListener(b,g,l?d:h);g=e=f=null}}function ta(){if(void 0!==P)return P;P=!1;try{var a={get capture(){P=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return P};function ua(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function Q(a,b,c){return sa(a,b,c,void 0)}function va(a,b,c,d){var e=c,f=sa(a,b,function(a){try{e(a)}finally{e=null,f()}},d);return f}function wa(a){var b,c,d=new Promise(function(b){c=va(a,"load",b,void 0)});d.then(c,c);b&&b(c);return d};var xa={title:"",artist:"",album:"",artwork:[{src:""}]};function ya(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){var c=oa(b.textContent);if(c&&c.image){if("string"===typeof c.image)return c.image;if(c.image["@list"]&&"string"===typeof c.image["@list"][0])return c.image["@list"][0];if("string"===typeof c.image.url)return c.image.url;if("string"===typeof c.image[0])return c.image[0]}}}
function za(a,b){var c=E(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a=u(a)?a.src:a,A(c.isProtocolValid(a)))})}};function Aa(){this.o=null}k=Aa.prototype;k.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};k.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};k.removeAll=function(){this.o&&(this.o.length=0)};k.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};k.getHandlerCount=function(){return this.o?this.o.length:0};function R(){this.J=!1;this.ca=new Aa}R.prototype.onSessionEnd=function(a){this.ca.add(a)};R.prototype.beginSession=function(){this.J=!0};R.prototype.endSession=function(){this.J&&this.ca.fire();this.J=!1};R.prototype.isSessionActive=function(){return this.J};var S,Ba="Webkit webkit Moz moz ms O o".split(" ");function Ca(a){var b={position:"fixed",top:"0",width:"0",height:"0",opacity:"0"},c;for(c in b){var d=a,e=b[c];var f=d.style;var g=c;if(D(g,"--"))f=g;else{S||(S=B());var l=S[g];if(!l){l=g;if(void 0===f[g]){var h=g;h=h.charAt(0).toUpperCase()+h.slice(1);b:{for(var m=0;m<Ba.length;m++){var q=Ba[m]+h;if(void 0!==f[q]){h=q;break b}}h=""}void 0!==f[h]&&(l=h)}S[g]=l}f=l}f&&(d.style[f]=e)}};function Da(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Ca(c);(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var Ea=null;function Fa(a){var b=250,c=4E3;return Math.min(Math.max(a,b),c)};function Ga(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var Ha="i-amphtml-video-mask{display:block;z-index:1}.amp-video-eq{display:none}.i-amphtml-video-component:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var Ia=["<i-amphtml-video-mask class=i-amphtml-fill-content role=button></i-amphtml-video-mask>"],Ja=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Ka(a){var b=ma(a);return b(Ia)}
function La(a,b){var c=ma(b)(Ja),d=c.firstElementChild;for(b=0;4>b;b++){for(var e=d.cloneNode(!0),f=e.children,g=0;g<f.length;g++){var l=f[g];l.classList.add("amp-video-eq-"+(b+1)+"-"+(g+1))}c.appendChild(e)}L(d);J(a,"platform").isIos()&&c.setAttribute("unpausable","");return c};function Ma(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=w(function(){var a=Ha,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=B());var f=Ga(d,a,"amp-extension=amp-video-autoplay");f?f.textContent!==e&&(f.textContent=e):(f=(d.ownerDocument||d).createElement("style"),f.textContent=e,f.setAttribute("amp-extension","amp-video-autoplay"),e=Ga(d,a,"amp-runtime"),d.insertBefore(f,e?e.nextSibling:d.firstChild),a["amp-extension=amp-video-autoplay"]=
f)});this.ma=K(this.ampdoc,"viewport");this.j=null;this.ka=!1;this.N=M(a.win);this.na=E(a.getHeadNode(),"action");this.$=function(){for(var a=0;a<b.j.length;a++){var d=b.j[a];if("paused"!==d.getPlayingState()){T(d,"video-seconds-played");var e=d.video.getCurrentTime(),f=d.video.getDuration();v(e)&&v(f)&&0<f&&(e=ua(b.ampdoc.win,"video-manager.timeUpdate",C({time:e,percent:e/f})),b.na.trigger(d.video.element,"timeUpdate",e,1))}}b.N.delay(b.$,1E3)};this.R=w(function(){return new U(b.ampdoc,b)});this.N.delay(this.$,
1E3)}k=Ma.prototype;k.dispose=function(){this.R().dispose();if(this.j)for(var a=0;a<this.j.length;a++){var b=this.j[a];b.dispose()}};k.register=function(a){Na(a);if(a.supportsPlatform()){this.j=this.j||[];var b=new Oa(this,a);Pa(this,b);this.j.push(b);b=b.video.element;b.dispatchCustomEvent("registered");b.classList.add("i-amphtml-video-component");var c=a.signals();c.signal("registered");b.classList.add("i-amphtml-video-interface")}};
function Na(a){function b(b,e){a.registerAction(b,function(){N(a);e()},c)}var c=1;b("play",function(){return a.play(!1)});b("pause",function(){return a.pause()});b("mute",function(){return a.mute()});b("unmute",function(){return a.unmute()});b("fullscreen",function(){return a.fullscreenEnter()})}
function Pa(a,b){var c=b.video.element;Q(c,"amp:video:visibility",function(a){var c=a.data;c&&1==c.visible?b.updateVisibility(!0):b.updateVisibility()});Q(c,"reloaded",function(){b.videoLoaded()});if(!a.ka){var d=function(){for(var b=0;b<a.j.length;b++)a.j[b].updateVisibility()};a.ma.onScroll(d);a.ma.onChanged(d);a.ka=!0}}function Qa(a,b){for(var c=0;c<a.j.length;c++)if(a.j[c].video===b)return a.j[c];z().error("video-manager","video is not registered to this video manager");return null}
k.getAnalyticsDetails=function(a){var b;a:{for(b=0;b<this.j.length;b++){var c=this.j[b];if(c.video.element===a){b=c;break a}}z().error("video-manager","video is not registered to this video manager");b=null}return b?b.getAnalyticsDetails():Promise.resolve()};k.getPlayingState=function(a){return Qa(this,a).getPlayingState()};k.isMuted=function(a){return Qa(this,a).isMuted()};k.userInteracted=function(a){return Qa(this,a).userInteracted()};k.registerForAutoFullscreen=function(a){this.R().register(a)};
k.ta=function(){return this.R()};
function Oa(a,b){var c=this;this.K=a;this.l=a.ampdoc;this.video=b;this.Z=!0;this.w=this.B=this.ga=!1;this.P=new R;this.P.onSessionEnd(function(){return T(c,"video-session")});this.F=new R;this.F.onSessionEnd(function(){return T(c,"video-session-visible")});this.X=function(){var a=c.l.win,b=a||self;if(b.__AMP_MODE)b=b.__AMP_MODE;else{var f=self.AMP_CONFIG||{};var g=!!f.test||!(!b.__AMP_TEST&&!b.__karma__);var l=b.__karma__&&b.__karma__.config.amp.testOnIe,h=!!f.localDev||g,m=r(b.location.originalHash||
b.location.hash);f=f.spt;var q=r(b.location.search);t||(t=h?"1910151804560":b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"011910151804560");g={localDev:h,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(m.development)||b.AMP_DEV_MODE),examiner:"2"==m.development,filter:m.filter,geoOverride:m["amp-geo"],userLocationOverride:m["amp-user-location"],minified:!0,lite:void 0!=q.amp_lite,test:g,testIe:l,log:m.log,version:"1910151804560",rtvVersion:t,singlePassType:f};b=b.__AMP_MODE=g}b=
b.lite;Ea||(Ea=w(Da));return Ea(a,b)};this.ea=w(function(){return new V(c.l.win,c)});this.U=this.ha=!1;this.T=null;this.A=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.K.installAutoplayStyles();this.C=xa;this.ra=function(){c.video.play(!1)};this.qa=function(){c.video.pause()};wa(b.element).then(function(){return c.videoLoaded()});Q(b.element,"pause",function(){T(c,"video-pause");c.B=!1;c.U?c.U=!1:c.P.endSession()});Q(b.element,"playing",function(){c.B=!0;"playing_manual"==c.getPlayingState()&&
c.da();var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){a=c.l.win;var f=c.C,g=c.ra,l=c.qa,h=a.navigator;"mediaSession"in h&&a.MediaMetadata&&(h.mediaSession.metadata=new a.MediaMetadata(xa),za(b,f),h.mediaSession.metadata=new a.MediaMetadata(f),h.mediaSession.setActionHandler("play",g),h.mediaSession.setActionHandler("pause",l))}c.P.beginSession();c.w&&c.F.beginSession();T(c,"video-play")});Q(b.element,"muted",function(){return c.A=
!0});Q(b.element,"unmuted",function(){return c.A=!1});Q(b.element,"ended",function(){T(c,"video-ended")});Q(b.element,"ad_start",function(){return T(c,"video-ad-start")});Q(b.element,"ad_end",function(){return T(c,"video-ad-end")});Q(b.element,"amp:video:tick",function(a){a=a.data;var b=a.eventType;b&&Ra(c,b,a.vars)});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:A(c.video.isInteractive(),
"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",a))&&c.K.registerForAutoFullscreen(c);c.updateVisibility();c.hasAutoplay&&Sa(c)});this.da=w(function(){var a="firstPlay",b=ua(c.l.win,a,C({})),f=c.video.element,g=E(f,"action");g.trigger(f,a,b,1)});Ta(this)}k=Oa.prototype;k.dispose=function(){this.ea().stop()};
function Ra(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});T(a,"video-hosted-custom",e)}function Ta(a){a.video.signals().whenSignal("autoplay-delegated").then(function(){a.Z=!1;a.B&&a.video.pause()})}k.isMuted=function(){return this.A};
k.videoLoaded=function(){this.ga=!0;this.T=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.C=B(this.video.getMetadata()));var a=this.l.win.document;if(!this.C.artwork||0==this.C.artwork.length){var b;(b=ya(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.C.artwork=[{src:b}])}!this.C.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.T.getAttribute("title")||this.T.getAttribute("aria-label")||a.title)&&(this.C.title=a)}this.ea().start();this.updateVisibility();this.w&&Ua(this)};
function Ua(a){a.l.isVisible()&&a.X().then(function(b){var c=a.hasAutoplay&&!a.userInteracted();c&&b?a.Z&&(a.w?(a.F.beginSession(),a.video.play(!0),a.ha=!0):(a.B&&a.F.endSession(),a.video.pause(),a.U=!0)):a.w?a.F.beginSession():a.B&&a.F.endSession()})}function Sa(a){a.video.isInteractive()&&a.video.hideControls();a.X().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),Va(a))})}
function Va(a){var b=a.video,c=a.video,d=c.element;c=c.win;if(!d.hasAttribute("noaudio")&&!d.signals().get("user-interacted")){var e=La(c,d),f=function(a){b.mutateElement(function(){e.classList.toggle("amp-video-eq-play",a)})};b.mutateElement(function(){d.appendChild(e)});var g=[Q(d,"pause",function(){return f(!1)}),Q(d,"playing",function(){return f(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.da();b.isInteractive()&&b.showControls();b.unmute();g.forEach(function(a){a()});
b=c.querySelector(".amp-video-eq");c=c.querySelector("i-amphtml-video-mask");b&&L(b);c&&L(c)});if(b.isInteractive()){var l=Ka(d),h=function(a){b.mutateElement(function(){var b=a;void 0===b&&(b=l.hasAttribute("hidden"));b?l.removeAttribute("hidden"):l.setAttribute("hidden","")})};b.hideControls();b.mutateElement(function(){d.appendChild(l)});[Q(l,"click",function(){return N(b)}),Q(d,"ad_start",function(){h(!1);b.showControls()}),Q(d,"ad_end",function(){h(!0);b.hideControls()}),Q(d,"unmuted",function(){return N(b)})].forEach(function(a){return g.push(a)})}}}
k.updateVisibility=function(a){var b=this.w;if(a)this.w=!0;else{var c=this.video.element.getIntersectionChangeEntry().intersectionRatio;this.w=.5<=(v(c)?c:0)}this.w!=b&&this.ga&&Ua(this)};k.getPlayingState=function(){return this.B?this.B&&this.ha&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};k.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
k.getAnalyticsDetails=function(){var a=this,b=this.video;return this.X().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var f=a.hasAutoplay&&c,g=b.getPlayedRanges(),l=g.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:f,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.A,playedTotal:l,playedRangesJson:JSON.stringify(g),state:a.getPlayingState(),width:e}})};
function U(a,b){var c=this;this.K=b;this.l=a;this.D=this.G=null;this.j=[];this.m=[];this.H=function(){return Wa(c)};this.pa=function(a){return"playing_manual"==c.K.getPlayingState(a)};this.oa=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=K(c.l,"viewport"),d=Xa(e,a),e=Xa(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};Ya(this);Za(this)}
U.prototype.dispose=function(){this.m.forEach(function(a){return a()});this.m.length=0};U.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=J(this.l.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.j.push(a),Q(b,"pause",this.H),Q(b,"playing",this.H),Q(b,"ended",this.H),a.signals().whenSignal("user-interacted").then(this.H),Wa(this))};
function Za(a){function b(){a.G=null}var c=a.l.getRootNode();a.m.push(Q(c,"webkitfullscreenchange",b),Q(c,"mozfullscreenchange",b),Q(c,"fullscreenchange",b),Q(c,"MSFullscreenChange",b))}U.prototype.isInLandscape=function(){var a=this.l.win;return a.screen&&"orientation"in a.screen?D(a.screen.orientation.type,"landscape"):90==Math.abs(a.orientation)};
function Ya(a){var b=a.l.win,c=b.screen;if(c&&"orientation"in c){var d=c.orientation;a.m.push(Q(d,"change",function(){return $a(a)}))}a.m.push(Q(b,"orientationchange",function(){return $a(a)}))}function $a(a){a.isInLandscape()?null!=a.D&&ab(a,a.D):a.G&&bb(a,a.G)}function ab(a,b){var c=J(a.l.win,"platform");a.G=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():cb(a,b).then(function(){return b.fullscreenEnter()})}
function bb(a,b){a.G=null;cb(a,b,"center").then(function(){return b.fullscreenExit()})}function cb(a,b,c){c=void 0===c?null:c;var d=b.element,e=K(a.l,"viewport");return db(a).then(function(){var a=d.getIntersectionChangeEntry().boundingClientRect,b=a,l=b.top;b=b.bottom;var h=e.getSize().height,m=0<=l&&b<=h;return m?Promise.resolve():e.animateScrollIntoView(d,c?c:b>h?"bottom":"top")})}function db(a){var b=330;return M(a.l.win).promise(b)}
function Wa(a){if(a.isInLandscape())return a.D;a.D=null;var b=a.j.filter(a.pa).sort(a.oa)[0];if(b){var c=b.element.getIntersectionChangeEntry().intersectionRatio;.5<=c&&(a.D=b)}return a.D}function Xa(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function V(a,b){this.N=M(a);this.I=b;this.m=null;this.O=this.fa=0}
V.prototype.start=function(){var a=this,b=this.I.video.element;this.stop();this.m=this.m||[];eb(this)?fb(this,this.O):this.m.push(va(b,"loadedmetadata",function(){eb(a)&&fb(a,a.O)}));this.m.push(Q(b,"ended",function(){eb(a)&&gb(a,100)}))};V.prototype.stop=function(){if(this.m){for(;0<this.m.length;)this.m.pop().call();this.O++}};
function eb(a){var b=a.I.video,c=b.getDuration();if(!c||isNaN(c)||0>=c)return!1;if(250>50*c){var d=5;a.sa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",d,"seconds long.",b.element)}return!0}V.prototype.sa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];y().warn.apply(y(),["video-manager"].concat(b))};
function fb(a,b){if(b==a.O){var c=a.I,d=a.N,e=c.video,f=function(){return fb(a,b)};if("paused"==c.getPlayingState())d.delay(f,500);else{c=e.getDuration();var g=Fa(50*c),l=e.getCurrentTime()/c*100,h=5*Math.floor(l/5);v(h);gb(a,h);d.delay(f,g)}}}function gb(a,b){0>=b||a.fa==b||(a.fa=b,T(a.I,"video-percentage-played",{normalizedPercentage:b.toString()}))}function T(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};function W(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.W=!1;a.A=!1;a.aa=null;a.ba=null;a.ia=[];a.S=!1;a.M=null;a.V=null;a.ja=null;a.Y=null;a.L=null;a.la=null;return a}var X=AMP.BaseElement;W.prototype=aa(X.prototype);W.prototype.constructor=W;if(da)da(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var hb=Object.getOwnPropertyDescriptor(X,Y);hb&&Object.defineProperty(W,Y,hb)}else W[Y]=X[Y];W.ua=X.prototype;k=W.prototype;k.preconnectCallback=function(){this.preconnect.url("https://players.brightcove.net")};
k.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};k.viewportCallback=function(a){this.element.dispatchCustomEvent("amp:video:visibility",{visible:a})};
k.buildCallback=function(){var a=this;this.la=E(this.element,"url-replace");var b=new ea;this.M=b.promise;this.V=b.resolve;this.ja=M(window).delay(function(){y().warn("amp-brightcove","Did not receive ready callback from player %s. Ensure it has the videojs-amp-support plugin.",a.L)},3E3);this.V(this.h)};
k.layoutCallback=function(){var a=this,b=ra(this,ib(this));this.h=b;this.Y=Q(this.win,"message",function(b){var c=a.element;if(b.source==a.h.contentWindow&&(b=b.data)&&(u(b)||D(b,"{"))&&(b=u(b)?b:oa(b),void 0!==b)){var e=b.event;if(e){if("ready"===e){a.S=!0;M(a.win).cancel(a.ja);var f=a.element,g=H(f),l=I(g),h=ka(l),m=h["video-manager"];m||(m=h["video-manager"]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null});m.ctor||m.obj||(m.ctor=Ma,m.context=g,m.resolve&&G(l,"video-manager"));
K(f,"video-manager").register(a);z().info("amp-brightcove","Player %s ready. Brightcove Player version: %s AMP Support version: %s",a.L,b.bcVersion,b.ampSupportVersion)}"playing"===e&&(a.W=!0);"pause"===e&&(a.W=!1);b.ct&&(a.aa=b.ct);b.pr&&(a.ia=b.pr);b.dur&&(a.ba=b.dur);qa(c,e)||"volumechange"!==e||(b=b.muted,null!=b&&a.A!=b&&(a.A=b,c.dispatchCustomEvent(a.A?"muted":"unmuted")))}}});return this.loadPromise(b).then(function(){return a.M})};
function Z(a,b,c){a.M.then(function(){a.h&&a.h.contentWindow&&a.h.contentWindow.postMessage(JSON.stringify(C({command:b,args:c})),"https://players.brightcove.net")})}
function ib(a){var b=a.element,c=A(b.getAttribute("data-account"),"The data-account attribute is required for <amp-brightcove> %s",b),d=b.getAttribute("data-embed")||"default";a.L=b.getAttribute("data-player")||b.getAttribute("data-player-id")||"default";var e="https://players.brightcove.net/"+encodeURIComponent(c)+("/"+encodeURIComponent(a.L))+("_"+encodeURIComponent(d)+"/index.html")+(b.getAttribute("data-playlist-id")?"?playlistId="+jb(b.getAttribute("data-playlist-id")):b.getAttribute("data-video-id")?
"?videoId="+jb(b.getAttribute("data-video-id")):""),f=b.getAttribute("data-referrer");f&&b.setAttribute("data-param-referrer",a.la.expandUrlSync(f));b.setAttribute("data-param-playsinline","true");a=la(b);b=[];for(m in a){var g=a[m];if(null!=g)if(Array.isArray(g))for(var l=0;l<g.length;l++){var h=g[l];b.push(encodeURIComponent(m)+"="+encodeURIComponent(h))}else b.push(encodeURIComponent(m)+"="+encodeURIComponent(g))}var m=b.join("&");m&&(e=e.split("#",2),a=e[0].split("?",2),m=a[0]+(a[1]?"?"+a[1]+
"&"+m:"?"+m),e=m+=e[1]?"#"+e[1]:"");return e}k.mutatedAttributesCallback=function(a){var b=a["data-player"]||a["data-player-id"],c=a["data-embed"],d=a["data-playlist-id"],e=a["data-video-id"];void 0===a["data-account"]&&void 0===b&&void 0===d&&void 0===c&&void 0===e||!this.h||(this.h.src=ib(this))};function jb(a){return"ref:"===a.substring(0,4)?"ref:"+encodeURIComponent(a.substring(4)):encodeURIComponent(a)}k.pauseCallback=function(){this.h&&this.h.contentWindow&&this.S&&this.W&&this.pause()};
k.unlayoutOnPause=function(){return this.S?!1:!0};k.unlayoutCallback=function(){this.h&&(L(this.h),this.h=null);this.Y&&this.Y();var a=new ea;this.M=a.promise;this.V=a.resolve;return!0};k.supportsPlatform=function(){return!0};k.isInteractive=function(){return!0};k.play=function(){Z(this,"play")};k.pause=function(){Z(this,"pause")};k.mute=function(){Z(this,"muted",!0)};k.unmute=function(){Z(this,"muted",!1)};k.showControls=function(){Z(this,"controls",!0)};
k.hideControls=function(){Z(this,"controls",!1)};k.fullscreenEnter=function(){if(this.h){var a=this.h,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)}};
k.fullscreenExit=function(){if(this.h){var a=this.h,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreencancelFullScreen||a.webkitExitFullscreencancelFullScreen||a.webkitCancelFullScreencancelFullScreen||a.mozCancelFullScreencancelFullScreen||a.msExitFullscreen)&&b.call(a)}};
k.isFullscreen=function(){if(this.h){var a=this.h;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1}else a=!1;return a};k.preimplementsAutoFullscreen=function(){return!1};k.getMetadata=function(){};k.preimplementsMediaSessionAPI=function(){return!0};k.getCurrentTime=function(){return this.aa};k.getDuration=function(){return this.ba};k.getPlayedRanges=function(){return this.ia};
k.seekTo=function(){this.user().error("amp-brightcove","`seekTo` not supported.")};(function(a){a.registerElement("amp-brightcove",W)})(self.AMP);
})});

//# sourceMappingURL=amp-brightcove-0.1.js.map