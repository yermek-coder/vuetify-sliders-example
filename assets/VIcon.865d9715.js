import{g as K,m as z,E as Q,u as Z,T as ee,F as T,G as $,H as te,p as _,c as y,e as h,n as c,S as A,x as ne,r as C,w as N,J as se,K as ae,L,M as ie,N as re,O as oe,P as B,Q as w,R as j,U as O,V as le,W as ue,q as ce,X as de,s as fe,Y as ge,t as ve}from"./index.73a3154d.js";function P(e){const a=K("useRender");a.render=e}const Be=z(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,a){let{slots:s}=a;const{defaults:t,disabled:o,reset:r,root:n,scoped:i}=Q(e);return Z(t,{reset:r,root:n,scoped:i,disabled:o}),()=>{var f;return(f=s.default)==null?void 0:f.call(s)}}});function m(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",s=arguments.length>2?arguments[2]:void 0;return z()({name:e,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:s},origin:{type:String,default:a}},setup(t,o){let{slots:r}=o;const n={onBeforeEnter(i){i.style.transformOrigin=t.origin},onLeave(i){if(t.leaveAbsolute){const{offsetTop:f,offsetLeft:u,offsetWidth:d,offsetHeight:v}=i;i._transitionInitialStyles={position:i.style.position,top:i.style.top,left:i.style.left,width:i.style.width,height:i.style.height},i.style.position="absolute",i.style.top=`${f}px`,i.style.left=`${u}px`,i.style.width=`${d}px`,i.style.height=`${v}px`}t.hideOnLeave&&i.style.setProperty("display","none","important")},onAfterLeave(i){if(t.leaveAbsolute&&(i==null?void 0:i._transitionInitialStyles)){const{position:f,top:u,left:d,width:v,height:S}=i._transitionInitialStyles;delete i._transitionInitialStyles,i.style.position=f||"",i.style.top=u||"",i.style.left=d||"",i.style.width=v||"",i.style.height=S||""}}};return()=>{const i=t.group?ee:T;return $(i,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:n},r.default)}}})}function D(e,a){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return z()({name:e,props:{mode:{type:String,default:s},disabled:Boolean},setup(t,o){let{slots:r}=o;return()=>$(T,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},r.default)}})}function F(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const s=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=te(`offset-${s}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[s]:n.style[s]}},onEnter(n){const i=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const f=`${n[t]}px`;n.style[s]="0",n.offsetHeight,n.style.transition=i.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[s]=f})},onAfterEnter:r,onEnterCancelled:r,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[s]:n.style[s]},n.style.overflow="hidden",n.style[s]=`${n[t]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[s]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(n){e&&n._parent&&n._parent.classList.remove(e),r(n)}function r(n){const i=n._initialStyle[s];n.style.overflow=n._initialStyle.overflow,i!=null&&(n.style[s]=i),delete n._initialStyle}}m("fab-transition","center center","out-in");m("dialog-bottom-transition");m("dialog-top-transition");m("fade-transition");const Pe=m("scale-transition");m("scroll-x-transition");m("scroll-x-reverse-transition");m("scroll-y-transition");m("scroll-y-reverse-transition");m("slide-x-transition");m("slide-x-reverse-transition");const Re=m("slide-y-transition");m("slide-y-reverse-transition");const Ve=D("expand-transition",F()),Ee=D("expand-x-transition",F("",!0));const me=_({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function he(e){return{dimensionStyles:y(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}function ye(e){return{aspectStyles:y(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const Se=z()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...me()},setup(e,a){let{slots:s}=a;const{aspectStyles:t}=ye(e),{dimensionStyles:o}=he(e);return P(()=>{var r;return c("div",{class:"v-responsive",style:o.value},[c("div",{class:"v-responsive__sizer",style:t.value},null),(r=s.additional)==null?void 0:r.call(s),s.default&&c("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}});function be(e,a){if(!A)return;const s=a.modifiers||{},t=a.value,{handler:o,options:r}=typeof t=="object"?t:{handler:t,options:{}},n=new IntersectionObserver(function(){var v;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const u=(v=e._observe)==null?void 0:v[a.instance.$.uid];if(!u)return;const d=i.some(S=>S.isIntersecting);o&&(!s.quiet||u.init)&&(!s.once||d||u.init)&&o(d,i,f),d&&s.once?q(e,a):u.init=!0},r);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:n},n.observe(e)}function q(e,a){var t;const s=(t=e._observe)==null?void 0:t[a.instance.$.uid];!s||(s.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const _e={mounted:be,unmounted:q},xe=_e,Ce=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),k=(e,a)=>{let{slots:s}=a;const{transition:t,...o}=e,{component:r=T,...n}=typeof t=="object"?t:{};return $(r,ne(typeof t=="string"?{name:t}:n,o),s)},pe=z()({name:"VImg",directives:{intersect:xe},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...Ce()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:s,slots:t}=a;const o=C(""),r=C(),n=C(e.eager?"loading":"idle"),i=C(),f=C(),u=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=y(()=>u.value.aspect||i.value/f.value||0);N(()=>e.src,()=>{v(n.value!=="idle")}),N(d,(l,g)=>{!l&&g&&r.value&&I(r.value)}),se(()=>v());function v(l){if(!(e.eager&&l)&&!(A&&!l&&!e.eager)){if(n.value="loading",u.value.lazySrc){const g=new Image;g.src=u.value.lazySrc,I(g,null)}!u.value.src||ae(()=>{var g,b;if(s("loadstart",((g=r.value)==null?void 0:g.currentSrc)||u.value.src),(b=r.value)!=null&&b.complete){if(r.value.naturalWidth||x(),n.value==="error")return;d.value||I(r.value,null),S()}else d.value||I(r.value),R()})}}function S(){var l;R(),n.value="loaded",s("load",((l=r.value)==null?void 0:l.currentSrc)||u.value.src)}function x(){var l;n.value="error",s("error",((l=r.value)==null?void 0:l.currentSrc)||u.value.src)}function R(){const l=r.value;l&&(o.value=l.currentSrc||l.src)}let V=-1;function I(l){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const b=()=>{clearTimeout(V);const{naturalHeight:W,naturalWidth:H}=l;W||H?(i.value=H,f.value=W):!l.complete&&n.value==="loading"&&g!=null?V=window.setTimeout(b,g):(l.currentSrc.endsWith(".svg")||l.currentSrc.startsWith("data:image/svg+xml"))&&(i.value=1,f.value=1)};b()}const E=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),G=()=>{var b;if(!u.value.src||n.value==="idle")return null;const l=c("img",{class:["v-img__img",E.value],src:u.value.src,srcset:u.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:S,onError:x},null),g=(b=t.sources)==null?void 0:b.call(t);return c(k,{transition:e.transition,appear:!0},{default:()=>[L(g?c("picture",{class:"v-img__picture"},[g,l]):l,[[oe,n.value==="loaded"]])]})},U=()=>c(k,{transition:e.transition},{default:()=>[u.value.lazySrc&&n.value!=="loaded"&&c("img",{class:["v-img__img","v-img__img--preload",E.value],src:u.value.lazySrc,alt:e.alt},null)]}),J=()=>t.placeholder?c(k,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!t.error)&&c("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,X=()=>t.error?c(k,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&c("div",{class:"v-img__error"},[t.error()])]}):null,Y=()=>e.gradient?c("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,p=C(!1);{const l=N(d,g=>{g&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{p.value=!0})}),l())})}return P(()=>L(c(Se,{class:["v-img",{"v-img--booting":!p.value}],style:{width:h(e.width==="auto"?i.value:e.width)},aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>c(re,null,[c(G,null,null),c(U,null,null),c(Y,null,null),c(J,null,null),c(X,null,null)]),default:t.default}),[[ie("intersect"),{handler:v,options:e.options},null,{once:!0}]])),{currentSrc:o,image:r,state:n,naturalWidth:i,naturalHeight:f}}}),ze=_({tag:{type:String,default:"div"}},"tag"),We=_({border:[Boolean,Number,String]},"border");function He(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{borderClasses:y(()=>{const t=w(e)?e.value:e.border,o=[];if(t===!0||t==="")o.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))o.push(`border-${r}`);return o})}}const Le=_({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function Oe(e){return{elevationClasses:y(()=>{const s=w(e)?e.value:e.elevation,t=[];return s==null||t.push(`elevation-${s}`),t})}}const Ae=_({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function je(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{roundedClasses:y(()=>{const t=w(e)?e.value:e.rounded,o=[];if(t===!0||t==="")o.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))o.push(`rounded-${r}`);return o})}}function M(e){return j(()=>{const a=[],s={};return e.value.background&&(O(e.value.background)?s.backgroundColor=e.value.background:a.push(`bg-${e.value.background}`)),e.value.text&&(O(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:s}})}function we(e,a){const s=y(()=>({text:w(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:o}=M(s);return{textColorClasses:t,textColorStyles:o}}function De(e,a){const s=y(()=>({background:w(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:o}=M(s);return{backgroundColorClasses:t,backgroundColorStyles:o}}const Ie=["x-small","small","default","large","x-large"],ke=_({size:{type:[String,Number],default:"default"}},"size");function Ne(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return j(()=>{let s,t;return le(Ie,e.size)?s=`${a}--size-${e.size}`:e.size&&(t={width:h(e.size),height:h(e.size)}),{sizeClasses:s,sizeStyles:t}})}const Te=_({color:String,start:Boolean,end:Boolean,icon:ue,...ke(),...ze({tag:"i"}),...ce()},"v-icon"),Fe=z()({name:"VIcon",props:Te(),setup(e,a){let{attrs:s,slots:t}=a,o;t.default&&(o=y(()=>{var v,S;const d=(v=t.default)==null?void 0:v.call(t);if(!!d)return(S=d.filter(x=>x.type===de&&x.children&&typeof x.children=="string")[0])==null?void 0:S.children}));const{themeClasses:r}=fe(e),{iconData:n}=ge(o||e),{sizeClasses:i}=Ne(e),{textColorClasses:f,textColorStyles:u}=we(ve(e,"color"));return P(()=>c(n.value.component,{tag:e.tag,icon:n.value.icon,class:["v-icon","notranslate",r.value,i.value,f.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[i.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},u.value],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t)]}})),{}}});export{xe as I,k as M,pe as V,We as a,Le as b,Ae as c,De as d,He as e,Oe as f,je as g,Be as h,Ve as i,Fe as j,M as k,we as l,ze as m,ke as n,Ne as o,me as p,he as q,Ce as r,Re as s,Pe as t,P as u,Ee as v,Se as w};
