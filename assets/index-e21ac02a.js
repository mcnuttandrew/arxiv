(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function T(){}const Te=e=>e;function De(e){return e()}function fe(){return Object.create(null)}function q(e){e.forEach(De)}function re(e){return typeof e=="function"}function oe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function je(e){return Object.keys(e).length===0}const Ee=typeof window<"u";let Pe=Ee?()=>window.performance.now():()=>Date.now(),ie=Ee?e=>requestAnimationFrame(e):T;const B=new Set;function Se(e){B.forEach(t=>{t.c(e)||(B.delete(t),t.f())}),B.size!==0&&ie(Se)}function Le(e){let t;return B.size===0&&ie(Se),{promise:new Promise(n=>{B.add(t={c:e,f:n})}),abort(){B.delete(t)}}}function $(e,t){e.appendChild(t)}function Oe(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Be(e){const t=w("style");return Re(Oe(e),t),t.sheet}function Re(e,t){return $(e.head||e,t),t.sheet}function M(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function Ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function D(e){return document.createTextNode(e)}function N(){return D(" ")}function Fe(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function E(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function qe(e){return Array.from(e.childNodes)}function j(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ie(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,o,t),r}const U=new Map;let V=0;function ze(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function He(e,t){const n={stylesheet:Be(t),rules:{}};return U.set(e,n),n}function de(e,t,n,o,r,l,i,a=0){const u=16.666/o;let c=`{
`;for(let v=0;v<=1;v+=u){const s=t+(n-t)*l(v);c+=v*100+`%{${i(s,1-s)}}
`}const p=c+`100% {${i(n,1-n)}}
}`,d=`__svelte_${ze(p)}_${a}`,g=Oe(e),{stylesheet:_,rules:y}=U.get(g)||He(g,e);y[d]||(y[d]=!0,_.insertRule(`@keyframes ${d} ${p}`,_.cssRules.length));const f=e.style.animation||"";return e.style.animation=`${f?`${f}, `:""}${d} ${o}ms linear ${r}ms 1 both`,V+=1,d}function Ge(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?l=>l.indexOf(t)<0:l=>l.indexOf("__svelte")===-1),r=n.length-o.length;r&&(e.style.animation=o.join(", "),V-=r,V||Je())}function Je(){ie(()=>{V||(U.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&S(t)}),U.clear())})}let H;function z(e){H=e}function Ke(){if(!H)throw new Error("Function called outside component initialization");return H}function We(e){Ke().$$.on_mount.push(e)}const L=[],pe=[];let R=[];const he=[],Ue=Promise.resolve();let ne=!1;function Ve(){ne||(ne=!0,Ue.then(Me))}function G(e){R.push(e)}const Z=new Set;let P=0;function Me(){if(P!==0)return;const e=H;do{try{for(;P<L.length;){const t=L[P];P++,z(t),Qe(t.$$)}}catch(t){throw L.length=0,P=0,t}for(z(null),L.length=0,P=0;pe.length;)pe.pop()();for(let t=0;t<R.length;t+=1){const n=R[t];Z.has(n)||(Z.add(n),n())}R.length=0}while(L.length);for(;he.length;)he.pop()();ne=!1,Z.clear(),z(e)}function Qe(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}function Xe(e){const t=[],n=[];R.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),R=t}let I;function Ye(){return I||(I=Promise.resolve(),I.then(()=>{I=null})),I}function ee(e,t,n){e.dispatchEvent(Ie(`${t?"intro":"outro"}${n}`))}const K=new Set;let F;function Q(){F={r:0,c:[],p:F}}function X(){F.r||q(F.c),F=F.p}function x(e,t){e&&e.i&&(K.delete(e),e.i(t))}function C(e,t,n,o){if(e&&e.o){if(K.has(e))return;K.add(e),F.c.push(()=>{K.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}const Ze={duration:0};function _e(e,t,n,o){const r={direction:"both"};let l=t(e,n,r),i=o?0:1,a=null,u=null,c=null;function p(){c&&Ge(e,c)}function d(_,y){const f=_.b-i;return y*=Math.abs(f),{a:i,b:_.b,d:f,duration:y,start:_.start,end:_.start+y,group:_.group}}function g(_){const{delay:y=0,duration:f=300,easing:v=Te,tick:s=T,css:h}=l||Ze,m={start:Pe()+y,b:_};_||(m.group=F,F.r+=1),a||u?u=m:(h&&(p(),c=de(e,i,_,f,y,v,h)),_&&s(0,1),a=d(m,f),G(()=>ee(e,_,"start")),Le(O=>{if(u&&O>u.start&&(a=d(u,f),u=null,ee(e,a.b,"start"),h&&(p(),c=de(e,i,a.b,a.duration,0,v,l.css))),a){if(O>=a.end)s(i=a.b,1-i),ee(e,a.b,"end"),u||(a.b?p():--a.group.r||q(a.group.c)),a=null;else if(O>=a.start){const b=O-a.start;i=a.a+a.d*v(b/a.duration),s(i,1-i)}}return!!(a||u)}))}return{run(_){re(l)?Ye().then(()=>{l=l(r),g(_)}):g(_)},end(){p(),a=u=null}}}function Ne(e){e&&e.c()}function le(e,t,n,o){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),o||G(()=>{const i=e.$$.on_mount.map(De).filter(re);e.$$.on_destroy?e.$$.on_destroy.push(...i):q(i),e.$$.on_mount=[]}),l.forEach(G)}function se(e,t){const n=e.$$;n.fragment!==null&&(Xe(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function et(e,t){e.$$.dirty[0]===-1&&(L.push(e),Ve(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ce(e,t,n,o,r,l,i,a=[-1]){const u=H;z(e);const c=e.$$={fragment:null,ctx:[],props:l,update:T,not_equal:r,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:fe(),dirty:a,skip_bound:!1,root:t.target||u.$$.root};i&&i(c.root);let p=!1;if(c.ctx=n?n(e,t.props||{},(d,g,..._)=>{const y=_.length?_[0]:g;return c.ctx&&r(c.ctx[d],c.ctx[d]=y)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](y),p&&et(e,d)),g}):[],c.update(),p=!0,q(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const d=qe(t.target);c.fragment&&c.fragment.l(d),d.forEach(S)}else c.fragment&&c.fragment.c();t.intro&&x(e.$$.fragment),le(e,t.target,t.anchor,t.customElement),Me()}z(u)}class ae{$destroy(){se(this,1),this.$destroy=T}$on(t,n){if(!re(n))return T;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Y(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function tt(e,t){const n=indexedDB.open(e);n.onupgradeneeded=()=>n.result.createObjectStore(t);const o=Y(n);return(r,l)=>o.then(i=>l(i.transaction(t,r).objectStore(t)))}let te;function ue(){return te||(te=tt("keyval-store","keyval")),te}function me(e,t=ue()){return t("readonly",n=>Y(n.get(e)))}function J(e,t,n=ue()){return n("readwrite",o=>(o.put(t,e),Y(o.transaction)))}function ge(e,t=ue()){return t("readwrite",n=>(n.delete(e),Y(n.transaction)))}const W="arxiv-query-cache",Ae="arxiv-query-cache-key";async function nt(){const e=await me(W),t=await me(Ae);if(!e||!t){const l=await ye();return J(W,l),J("arxiv-query-cache-key",new Date().toString()),l}const n=new Date().getTime()-new Date(t).getTime();if(Math.floor(n/1e3/60/60/24)<1)return e;const r=await ye();return J(W,r),J("arxiv-query-cache-key",new Date().toString()),r}async function rt(){await ge(Ae),await ge(W)}const ye=()=>fetch("http://export.arxiv.org/api/query?search_query=cat:cs.HC&sortBy=submittedDate&sortOrder=descending&start=0&max_results=100").then(e=>e.text());function ot(e){return[...new DOMParser().parseFromString(e,"text/xml").firstChild.children].filter(l=>l.tagName==="entry").map(l=>{const i=u=>[...l.getElementsByTagName(u)].map(c=>c.innerHTML).join(", ").trim(),a=[...l.getElementsByTagName("link")].map(u=>u.getAttribute("href"))[0];return{authors:i("name"),abstract:i("summary"),title:i("title"),date:i("updated").split("T")[0],link:a}})}function it(e){const t=e-1;return t*t*t+1}function $e(e,{delay:t=0,duration:n=400,easing:o=it,axis:r="y"}={}){const l=getComputedStyle(e),i=+l.opacity,a=r==="y"?"height":"width",u=parseFloat(l[a]),c=r==="y"?["top","bottom"]:["left","right"],p=c.map(s=>`${s[0].toUpperCase()}${s.slice(1)}`),d=parseFloat(l[`padding${p[0]}`]),g=parseFloat(l[`padding${p[1]}`]),_=parseFloat(l[`margin${p[0]}`]),y=parseFloat(l[`margin${p[1]}`]),f=parseFloat(l[`border${p[0]}Width`]),v=parseFloat(l[`border${p[1]}Width`]);return{delay:t,duration:n,easing:o,css:s=>`overflow: hidden;opacity: ${Math.min(s*20,1)*i};${a}: ${s*u}px;padding-${c[0]}: ${s*d}px;padding-${c[1]}: ${s*g}px;margin-${c[0]}: ${s*_}px;margin-${c[1]}: ${s*y}px;border-${c[0]}-width: ${s*f}px;border-${c[1]}-width: ${s*v}px;`}}function be(e){let t,n=e[0].abstract+"",o,r,l;return{c(){t=w("div"),o=D(n),E(t,"class","text-xs")},m(i,a){M(i,t,a),$(t,o),l=!0},p(i,a){(!l||a&1)&&n!==(n=i[0].abstract+"")&&j(o,n)},i(i){l||(G(()=>{l&&(r||(r=_e(t,$e,{},!0)),r.run(1))}),l=!0)},o(i){r||(r=_e(t,$e,{},!1)),r.run(0),l=!1},d(i){i&&S(t),i&&r&&r.end()}}}function lt(e){let t,n,o,r=e[0].title+"",l,i,a,u,c=e[0].authors+"",p,d,g,_,y=e[1]?"-":"+",f,v,s,h,m,O,b=e[1]&&be(e);return{c(){t=w("div"),n=w("div"),o=w("a"),l=D(r),a=N(),u=w("div"),p=D(c),d=N(),g=w("div"),_=D("abstract ("),f=D(y),v=D(")"),s=N(),b&&b.c(),E(o,"class","text-cyan-800 underline"),E(o,"href",i=e[0].link),E(g,"class","text-cyan-800 cursor-pointer flex text-sm no-underline"),E(t,"class","my-4")},m(k,A){M(k,t,A),$(t,n),$(n,o),$(o,l),$(t,a),$(t,u),$(u,p),$(t,d),$(t,g),$(g,_),$(g,f),$(g,v),$(t,s),b&&b.m(t,null),h=!0,m||(O=Fe(g,"click",e[2]),m=!0)},p(k,[A]){(!h||A&1)&&r!==(r=k[0].title+"")&&j(l,r),(!h||A&1&&i!==(i=k[0].link))&&E(o,"href",i),(!h||A&1)&&c!==(c=k[0].authors+"")&&j(p,c),(!h||A&2)&&y!==(y=k[1]?"-":"+")&&j(f,y),k[1]?b?(b.p(k,A),A&2&&x(b,1)):(b=be(k),b.c(),x(b,1),b.m(t,null)):b&&(Q(),C(b,1,1,()=>{b=null}),X())},i(k){h||(x(b),h=!0)},o(k){C(b),h=!1},d(k){k&&S(t),b&&b.d(),m=!1,O()}}}function st(e,t,n){let{item:o}=t,r=!1;const l=()=>{n(1,r=!r)};return e.$$set=i=>{"item"in i&&n(0,o=i.item)},[o,r,l]}class ct extends ae{constructor(t){super(),ce(this,t,st,lt,oe,{item:0})}}class at extends ae{constructor(t){super(),ce(this,t,null,null,oe,{})}}function ve(e,t,n){const o=e.slice();return o[8]=t[n],o}function we(e,t,n){const o=e.slice();return o[11]=t[n],o}function ut(e){let t,n,o=e[2],r=[];for(let i=0;i<o.length;i+=1)r[i]=ke(ve(e,o,i));const l=i=>C(r[i],1,1,()=>{r[i]=null});return{c(){t=w("div");for(let i=0;i<r.length;i+=1)r[i].c();E(t,"class","w-full flex flex-col px-2 py-8")},m(i,a){M(i,t,a);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(t,null);n=!0},p(i,a){if(a&29){o=i[2];let u;for(u=0;u<o.length;u+=1){const c=ve(i,o,u);r[u]?(r[u].p(c,a),x(r[u],1)):(r[u]=ke(c),r[u].c(),x(r[u],1),r[u].m(t,null))}for(Q(),u=o.length;u<r.length;u+=1)l(u);X()}},i(i){if(!n){for(let a=0;a<o.length;a+=1)x(r[a]);n=!0}},o(i){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)C(r[a]);n=!1},d(i){i&&S(t),Ce(r,i)}}}function ft(e){let t;return{c(){t=w("h1"),t.textContent="LOADING",E(t,"class","animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black")},m(n,o){M(n,t,o)},p:T,i:T,o:T,d(n){n&&S(t)}}}function xe(e){let t,n;return t=new ct({props:{item:e[11]}}),{c(){Ne(t.$$.fragment)},m(o,r){le(t,o,r),n=!0},p(o,r){const l={};r&5&&(l.item=o[11]),t.$set(l)},i(o){n||(x(t.$$.fragment,o),n=!0)},o(o){C(t.$$.fragment,o),n=!1},d(o){se(t,o)}}}function ke(e){let t,n=e[3][new Date(e[8]).getDay()+2]+"",o,r,l=e[4][new Date(e[8]).getMonth()]+"",i,a,u=new Date(e[8]).getDate()+2+"",c,p,d,g,_,y=e[0][e[8]],f=[];for(let s=0;s<y.length;s+=1)f[s]=xe(we(e,y,s));const v=s=>C(f[s],1,1,()=>{f[s]=null});return{c(){t=w("h1"),o=D(n),r=D(", "),i=D(l),a=N(),c=D(u),p=N(),d=w("div");for(let s=0;s<f.length;s+=1)f[s].c();g=N(),E(t,"class","text-5xl bolder")},m(s,h){M(s,t,h),$(t,o),$(t,r),$(t,i),$(t,a),$(t,c),M(s,p,h),M(s,d,h);for(let m=0;m<f.length;m+=1)f[m]&&f[m].m(d,null);$(d,g),_=!0},p(s,h){if((!_||h&4)&&n!==(n=s[3][new Date(s[8]).getDay()+2]+"")&&j(o,n),(!_||h&4)&&l!==(l=s[4][new Date(s[8]).getMonth()]+"")&&j(i,l),(!_||h&4)&&u!==(u=new Date(s[8]).getDate()+2+"")&&j(c,u),h&5){y=s[0][s[8]];let m;for(m=0;m<y.length;m+=1){const O=we(s,y,m);f[m]?(f[m].p(O,h),x(f[m],1)):(f[m]=xe(O),f[m].c(),x(f[m],1),f[m].m(d,g))}for(Q(),m=y.length;m<f.length;m+=1)v(m);X()}},i(s){if(!_){for(let h=0;h<y.length;h+=1)x(f[h]);_=!0}},o(s){f=f.filter(Boolean);for(let h=0;h<f.length;h+=1)C(f[h]);_=!1},d(s){s&&S(t),s&&S(p),s&&S(d),Ce(f,s)}}}function dt(e){let t,n,o,r,l,i,a,u,c,p,d,g,_;t=new at({});const y=[ft,ut],f=[];function v(s,h){return s[1]?0:1}return c=v(e),p=f[c]=y[c](e),{c(){Ne(t.$$.fragment),n=N(),o=w("main"),r=w("nav"),l=w("div"),l.textContent="HCI Reader",i=N(),a=w("button"),a.textContent="Hard Refresh",u=N(),p.c(),E(r,"class","w-full bg-black text-white flex flex-row justify-between px-2 py-1 text-2xl"),E(o,"class","w-full h-full flex flex-col items-center")},m(s,h){le(t,s,h),M(s,n,h),M(s,o,h),$(o,r),$(r,l),$(r,i),$(r,a),$(o,u),f[c].m(o,null),d=!0,g||(_=Fe(a,"click",e[7]),g=!0)},p(s,[h]){let m=c;c=v(s),c===m?f[c].p(s,h):(Q(),C(f[m],1,1,()=>{f[m]=null}),X(),p=f[c],p?p.p(s,h):(p=f[c]=y[c](s),p.c()),x(p,1),p.m(o,null))},i(s){d||(x(t.$$.fragment,s),x(p),d=!0)},o(s){C(t.$$.fragment,s),C(p),d=!1},d(s){se(t,s),s&&S(n),s&&S(o),f[c].d(),g=!1,_()}}}function pt(e,t,n){let o,r,l=[],i=!0;const a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dev"],c=()=>nt().then(d=>{n(1,i=!1),n(6,l=ot(d))});We(()=>c());const p=()=>{n(1,i=!0),rt().then(c)};return e.$$.update=()=>{e.$$.dirty&64&&n(0,o=l.reduce((d,g)=>(d[g.date]=(d[g.date]||[]).concat(g),d),{})),e.$$.dirty&1&&n(2,r=Object.keys(o).sort().reverse())},[o,i,r,a,u,c,l,p]}class ht extends ae{constructor(t){super(),ce(this,t,pt,dt,oe,{})}}new ht({target:document.getElementById("app")});