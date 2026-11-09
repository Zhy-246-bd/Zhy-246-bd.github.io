(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return x},useLinkStatus:function(){return g}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let a=e.r(90809),l=e.r(43476),n=a._(e.r(71645)),u=e.r(95057),s=e.r(8372),d=e.r(18581),c=e.r(18967),f=e.r(5550),m=e.r(88540),v=e.r(91949),h=e.r(73668),p=e.r(9396);function x(t){var r;let i,o,a,[x,g]=(0,n.useOptimistic)(v.IDLE_LINK_STATUS),y=(0,n.useRef)(null),{href:T,as:b,children:w,prefetch:D=null,passHref:E,replace:P,shallow:U,scroll:R,onClick:S,onMouseEnter:A,onTouchStart:C,legacyBehavior:k=!1,onNavigate:F,transitionTypes:L,ref:N,unstable_dynamicOnHover:G,...M}=t;i=w,k&&("string"==typeof i||"number"==typeof i)&&(i=(0,l.jsx)("a",{children:i}));let B=n.default.useContext(s.AppRouterContext),j=!1!==D,I=!1===D?"none":!0===D?"full":"auto",O="none"!==I?"auto"===I?p.FetchStrategy.PPR:p.FetchStrategy.Full:p.FetchStrategy.PPR,V="string"==typeof(r=b||T)?r:(0,u.formatUrl)(r);if(k){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=n.default.Children.only(i)}let W=k?o&&"object"==typeof o&&o.ref:N,X,$=n.default.useCallback(e=>(null!==B&&(y.current=(0,v.mountLinkInstance)(e,V,B,O,j,g,X)),()=>{y.current&&((0,v.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,v.unmountPrefetchableInstance)(e)}),[j,V,B,O,g,X]),H={ref:(0,d.useMergedRef)($,W),onClick(t){k||"function"!=typeof S||S(t),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!B||t.defaultPrevented||function(t,r,i,o,a,l,u,s="none"){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);n.default.startTransition(()=>{f(r,o?"replace":"push",!1===a?m.ScrollBehavior.NoScroll:m.ScrollBehavior.Default,i.current,u,s)})}}(t,V,y,P,R,F,L,I)},onMouseEnter(e){k||"function"!=typeof A||A(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),B&&j&&(0,v.onNavigationIntent)(e.currentTarget,!0===G)},onTouchStart:function(e){k||"function"!=typeof C||C(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),B&&j&&(0,v.onNavigationIntent)(e.currentTarget,!0===G)}};return(0,c.isAbsoluteUrl)(V)?H.href=V:k&&!E&&("a"!==o.type||"href"in o.props)||(H.href=(0,f.addBasePath)(V)),a=k?n.default.cloneElement(o,H):(0,l.jsx)("a",{...M,...H,children:i}),(0,l.jsx)(_.Provider,{value:x,children:a})}let _=(0,n.createContext)(v.IDLE_LINK_STATUS),g=()=>(0,n.useContext)(_);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let i=e.r(71645);function o(e,t){let r=(0,i.useRef)(null),o=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,i)),t&&(o.current=a(t,i))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let i=e.r(18967),o=e.r(52817);function a(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={assign:function(){return u},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return n}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});function a(e){let t={};for(let[r,i]of e.entries()){let e=t[r];void 0===e?t[r]=i:Array.isArray(e)?e.push(i):t[r]=[e,i]}return t}function l(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function n(e){let t=new URLSearchParams;for(let[r,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)t.append(r,l(e));else t.set(r,l(i));return t}function u(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,i]of r.entries())e.append(t,i)}return e}},95057,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return n},formatWithValidation:function(){return s},urlObjectKeys:function(){return u}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let a=e.r(90809)._(e.r(98183)),l=/https?|ftp|gopher|file/;function n(e){let{auth:t,hostname:r}=e,i=e.protocol||"",o=e.pathname||"",n=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(a.urlQueryToSearchParams(u)));let d=e.search||u&&`?${u}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||l.test(i))&&!1!==s?(s="//"+(s||""),o&&"/"!==o[0]&&(o="/"+o)):s||(s=""),n&&"#"!==n[0]&&(n="#"+n),d&&"?"!==d[0]&&(d="?"+d),o=o.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${s}${o}${d}${n}`}let u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return n(e)}},18967,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var i={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return T},MissingStaticPage:function(){return y},NormalizeError:function(){return _},PageNotFoundError:function(){return g},SP:function(){return h},ST:function(){return p},WEB_VITALS:function(){return a},execOnce:function(){return l},getDisplayName:function(){return c},getLocationOrigin:function(){return s},getURL:function(){return d},isAbsoluteUrl:function(){return u},isResSent:function(){return f},loadGetInitialProps:function(){return v},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return b}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function l(e){let t,r=!1;return(...i)=>(r||(r=!0,t=e(...i)),t)}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&n.test(e)};function s(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=s();return e.substring(t.length)}function c(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function m(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function v(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await v(t.Component,t.ctx)}:{};let i=await e.getInitialProps(t);if(r&&f(r))return i;if(!i)throw Object.defineProperty(Error(`"${c(e)}.getInitialProps()" should resolve to an object. But found "${i}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return i}let h="u">typeof performance,p=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class _ extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class T extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}},18566,(e,t,r)=>{t.exports=e.r(76562)},46589,e=>{"use strict";var t=e.i(43476),r=e.i(18566),i=e.i(71645),o=e.i(22016),a=e.i(19467);function l(){let e=(0,r.usePathname)(),[l,n]=(0,i.useState)(!1);return(0,t.jsxs)("header",{className:"sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur",children:[(0,t.jsxs)("nav",{className:"mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6",children:[(0,t.jsxs)(o.default,{href:"/",className:"shrink-0 text-base font-bold text-slate-900 hover:text-indigo-600",children:[a.site.name,(0,t.jsx)("span",{className:"ml-1.5 text-xs font-normal text-slate-400",children:"作品集"})]}),(0,t.jsx)("ul",{className:"hidden items-center gap-0.5 md:flex",children:a.navItems.map(r=>{let i=e===r.href;return(0,t.jsx)("li",{children:(0,t.jsx)(o.default,{href:r.href,className:"block rounded-full px-2.5 py-1.5 text-sm transition-colors lg:px-3 "+(i?"bg-indigo-50 font-semibold text-indigo-700":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"),children:r.label})},r.href)})}),(0,t.jsx)("button",{type:"button",onClick:()=>n(!l),"aria-expanded":l,className:"rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 md:hidden",children:l?"关闭 ✕":"菜单 ☰"})]}),l&&(0,t.jsx)("ul",{className:"border-t border-slate-200 bg-white px-4 pt-2 pb-3 md:hidden",children:a.navItems.map(r=>{let i=e===r.href;return(0,t.jsx)("li",{children:(0,t.jsx)(o.default,{href:r.href,onClick:()=>n(!1),className:"block rounded-lg px-3 py-2.5 text-sm "+(i?"bg-indigo-50 font-semibold text-indigo-700":"text-slate-700 hover:bg-slate-100"),children:r.label})},r.href)})})]})}function n(){return(0,t.jsx)("footer",{className:"mt-16 border-t border-slate-200 bg-white",children:(0,t.jsxs)("div",{className:"mx-auto max-w-5xl px-4 py-8 text-sm text-slate-500 sm:px-6",children:[(0,t.jsx)("h2",{className:"font-semibold text-slate-800",children:"关于 AI 辅助的说明"}),(0,t.jsxs)("p",{className:"mt-2 leading-6",children:["本网站由我本人规划、编写和修改，前期使用 Claude Code，后期主要使用 DeepSeek Harness 辅助。AI 参与较多的部分，我都记录在「过程证据」页的提示词记录里，并写清了我自己做了哪些调整。",(0,t.jsx)(o.default,{href:"/credits",className:"ml-1 font-medium text-indigo-600 hover:underline",children:"详见「引用声明」页 →"})]}),a.site.siteUrl&&(0,t.jsxs)("p",{className:"mt-3 leading-6",children:["本站已上线："," ",(0,t.jsx)("a",{href:a.site.siteUrl,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-indigo-600 hover:underline",children:a.site.siteUrl}),a.site.siteUrlAlt&&(0,t.jsxs)(t.Fragment,{children:[" · ","备用网址："," ",(0,t.jsx)("a",{href:a.site.siteUrlAlt,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-indigo-600 hover:underline",children:a.site.siteUrlAlt})]})]}),(0,t.jsxs)("p",{className:"mt-4 text-xs text-slate-400",children:["© ",new Date().getFullYear()," ",a.site.name," · 最近更新：",a.site.lastUpdated]})]})})}e.s(["default",0,function({children:e}){let i=(0,r.usePathname)();return"/"===i||"/notebook"===i||i?.startsWith("/notebook/")||"/studio"===i||i?.startsWith("/studio/")||"/admin"===i||i?.startsWith("/admin/")||["/about","/works","/projects","/process","/iterations","/reflection"].some(e=>i===e||i?.startsWith(`${e}/`))?e:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{}),(0,t.jsx)("main",{className:"flex-1",children:e}),(0,t.jsx)(n,{})]})}],46589)},34967,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(18566),o=e.i(22459);let a=(0,r.createContext)({content:{},ready:!1,refresh:()=>{}});e.s(["SiteContentProvider",0,function({children:e}){let l=(0,i.usePathname)(),[n,u]=(0,r.useState)({}),[s,d]=(0,r.useState)(!1),c=(0,r.useCallback)(async()=>{if(!o.supabase)return void d(!0);let{data:e,error:t}=await o.supabase.from("site_content").select("key, content");!t&&e&&u(Object.fromEntries(e.map(e=>[e.key,e.content]))),d(!0)},[]);(0,r.useEffect)(()=>{l?.startsWith("/admin")?d(!0):c()},[l,c]);let f=(0,r.useMemo)(()=>({content:n,ready:s,refresh:c}),[n,s,c]);return(0,t.jsx)(a.Provider,{value:f,children:e})},"useRemoteContent",0,function(e,t){let{content:i}=(0,r.useContext)(a),o=i?.[e];return null==o?t:o}])},6718,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let i=`
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,o=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uTarget;
uniform vec2 uPoint;
uniform vec2 uForce;
uniform float uRadius;
void main() {
  vec2 d = vUv - uPoint;
  float f = exp(-dot(d, d) / uRadius);
  vec4 base = texture2D(uTarget, vUv);
  gl_FragColor = vec4(base.xy + uForce * f, 0.0, 1.0);
}
`,a=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uTarget;
uniform vec2 uPoint;
uniform vec3 uColor;
uniform float uRadius;
void main() {
  vec2 d = vUv - uPoint;
  float f = exp(-dot(d, d) / uRadius);
  vec4 base = texture2D(uTarget, vUv);
  gl_FragColor = vec4(base.xyz + uColor * f, 1.0);
}
`,l=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform float uDt;
uniform float uDissipation;
void main() {
  vec2 velocity = texture2D(uVelocity, vUv).xy;
  vec2 coord = vUv - uDt * velocity;
  gl_FragColor = texture2D(uSource, coord) * uDissipation;
}
`,n=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform vec2 uTexel;
void main() {
  float L = texture2D(uVelocity, vUv - vec2(uTexel.x, 0.0)).y;
  float R = texture2D(uVelocity, vUv + vec2(uTexel.x, 0.0)).y;
  float T = texture2D(uVelocity, vUv + vec2(0.0, uTexel.y)).x;
  float B = texture2D(uVelocity, vUv - vec2(0.0, uTexel.y)).x;
  float value = 0.5 * (R - L - (T - B));
  gl_FragColor = vec4(value, 0.0, 0.0, 1.0);
}
`,u=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform vec2 uTexel;
uniform float uDt;
uniform float uStrength;
void main() {
  float L = abs(texture2D(uCurl, vUv - vec2(uTexel.x, 0.0)).x);
  float R = abs(texture2D(uCurl, vUv + vec2(uTexel.x, 0.0)).x);
  float T = abs(texture2D(uCurl, vUv + vec2(0.0, uTexel.y)).x);
  float B = abs(texture2D(uCurl, vUv - vec2(0.0, uTexel.y)).x);
  float C = texture2D(uCurl, vUv).x;
  vec2 force = vec2(T - B, R - L);
  float len = length(force) + 0.0001;
  vec2 velocity = texture2D(uVelocity, vUv).xy;
  velocity += (force / len) * C * uStrength * uDt;
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}
`,s=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform vec2 uTexel;
void main() {
  float L = texture2D(uVelocity, vUv - vec2(uTexel.x, 0.0)).x;
  float R = texture2D(uVelocity, vUv + vec2(uTexel.x, 0.0)).x;
  float T = texture2D(uVelocity, vUv + vec2(0.0, uTexel.y)).y;
  float B = texture2D(uVelocity, vUv - vec2(0.0, uTexel.y)).y;
  float value = 0.5 * (R - L + T - B);
  gl_FragColor = vec4(value, 0.0, 0.0, 1.0);
}
`,d=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
uniform vec2 uTexel;
void main() {
  float L = texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
  float R = texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
  float T = texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).x;
  float B = texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).x;
  float divergence = texture2D(uDivergence, vUv).x;
  gl_FragColor = vec4((L + R + T + B - divergence) * 0.25, 0.0, 0.0, 1.0);
}
`,c=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uPressure;
uniform vec2 uTexel;
void main() {
  float L = texture2D(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
  float R = texture2D(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
  float T = texture2D(uPressure, vUv + vec2(0.0, uTexel.y)).x;
  float B = texture2D(uPressure, vUv - vec2(0.0, uTexel.y)).x;
  vec2 velocity = texture2D(uVelocity, vUv).xy;
  velocity -= 0.5 * vec2(R - L, T - B);
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}
`,f=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uWarp;
uniform sampler2D uVelocity;
uniform vec2 uPoint;
uniform vec2 uTexel;
uniform float uDt;
uniform float uStrength;
uniform float uRadius;
uniform float uDecay;
void main() {
  vec2 coord = vUv;
  vec2 prev = texture2D(uWarp, coord).xy * uDecay;

  vec2 L = texture2D(uWarp, coord - vec2(uTexel.x, 0.0)).xy;
  vec2 R = texture2D(uWarp, coord + vec2(uTexel.x, 0.0)).xy;
  vec2 T = texture2D(uWarp, coord + vec2(0.0, uTexel.y)).xy;
  vec2 B = texture2D(uWarp, coord - vec2(0.0, uTexel.y)).xy;
  vec2 average = (prev + L + R + T + B) * 0.2;
  prev = mix(prev, average, 0.24);

  vec2 d = vUv - uPoint;
  float f = exp(-dot(d, d) / uRadius);
  prev += d * f * uStrength;

  gl_FragColor = vec4(clamp(prev, vec2(-0.12), vec2(0.12)), 0.0, 1.0);
}
`,m=new Float32Array([-1,-1,1,-1,-1,1,1,1]),v=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform vec2 uPointer;
uniform float uStrength;
void main() {
  vec2 velocity = texture2D(uVelocity, vUv).xy;
  vec2 delta = vUv - uPointer;
  float falloff = exp(-dot(delta, delta) / 0.0024);
  vec2 tangent = vec2(-delta.y, delta.x);
  vec2 outward = normalize(delta + vec2(0.0001));
  velocity += (tangent * 0.75 + outward * 0.35) * falloff * uStrength;
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}
`,h=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uDye;
uniform float uDt;
uniform float uTime;
uniform float uStrength;
void main() {
  vec2 velocity = texture2D(uVelocity, vUv).xy;
  float paint = texture2D(uDye, vUv).b;
  velocity.y += paint * uStrength * uDt;
  velocity.x += sin(vUv.y * 19.0 + uTime * 1.6) *
    paint * uStrength * uDt * 0.22;
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}
`,p=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uText;
uniform sampler2D uDye;
uniform vec2 uPointer;
uniform float uEmit;
uniform float uDissolve;
uniform float uRestore;
uniform float uActive;
void main() {
  vec4 dye = texture2D(uDye, vUv);
  float glyph = texture2D(uText, vUv).a;
  float mask =
    (1.0 - smoothstep(0.02, 0.16, distance(vUv, uPointer))) * uActive;
  dye.r = mix(dye.r, 0.0, mask * uDissolve);
  float restore = uRestore * (1.0 - mask);
  dye.r = mix(dye.r, glyph * 0.9, restore);
  dye.g *= 1.0 - restore * 0.08;
  dye.r += glyph * uEmit * (1.0 - mask);
  gl_FragColor = dye;
}
`;class x{constructor(e,t=512,r=320){this.gl=e,this.width=t,this.height=r,this.time=0,this.frameCount=0,this.autoInk=!1,this.motionSpeed=0,this.pending=[],this.last=null,this.quad=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quad),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW);const x=t=>{let r=e.createShader(e.VERTEX_SHADER);e.shaderSource(r,i),e.compileShader(r);let o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,t),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)||console.error(e.getShaderInfoLog(o));let a=e.createProgram();e.attachShader(a,r),e.attachShader(a,o),e.linkProgram(a);let l={},n=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let t=0;t<n;t+=1){let r=e.getActiveUniform(a,t);l[r.name]=e.getUniformLocation(a,r.name)}return{program:a,uniforms:l}};this.splatVelocityProgram=x(o),this.splatDyeProgram=x(a),this.advectProgram=x(l),this.curlProgram=x(n),this.vorticityProgram=x(u),this.divergenceProgram=x(s),this.pressureProgram=x(d),this.gradientProgram=x(c),this.warpProgram=x(f),this.emitProgram=x(p),this.stirProgram=x(v),this.buoyancyProgram=x(h);const _=(t,r)=>{let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,r,0,e.RGBA,e.HALF_FLOAT,null);let o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER);return a!==e.FRAMEBUFFER_COMPLETE&&console.error("Fluid FBO incomplete",a),{texture:i,fbo:o,width:t,height:r}},g=()=>({read:_(t,r),write:_(t,r),swap(){let e=this.read;this.read=this.write,this.write=e}});this.velocity=g(),this.dye=g(),this.pressure=g(),this.warp=g(),this.divergence=_(t,r),this.curl=_(t,r),this.pointerPos={x:.5,y:.5},this.active=!1,this.breakAmount=0,this.textTexture=null,e.bindFramebuffer(e.FRAMEBUFFER,null)}bindTexture(e,t){let{gl:r}=this;r.activeTexture(r.TEXTURE0+t),r.bindTexture(r.TEXTURE_2D,e)}draw(e,t,r){let{gl:i}=this;i.bindFramebuffer(i.FRAMEBUFFER,e.fbo),i.viewport(0,0,e.width,e.height),i.useProgram(t.program),i.bindBuffer(i.ARRAY_BUFFER,this.quad);let o=i.getAttribLocation(t.program,"aPosition");i.enableVertexAttribArray(o),i.vertexAttribPointer(o,2,i.FLOAT,!1,0,0),r(t.uniforms),i.drawArrays(i.TRIANGLE_STRIP,0,4)}splatVelocity(e,t,r,i,o=9e-4){this.bindTexture(this.velocity.read.texture,0),this.draw(this.velocity.write,this.splatVelocityProgram,a=>{let{gl:l}=this;l.uniform1i(a.uTarget,0),l.uniform2f(a.uPoint,e,t),l.uniform2f(a.uForce,r,i),l.uniform1f(a.uRadius,o)}),this.velocity.swap()}splatDye(e,t,r,i=.0012){this.bindTexture(this.dye.read.texture,0),this.draw(this.dye.write,this.splatDyeProgram,o=>{let{gl:a}=this;a.uniform1i(o.uTarget,0),a.uniform2f(o.uPoint,e,t),a.uniform3f(o.uColor,r[0],r[1],r[2]),a.uniform1f(o.uRadius,i)}),this.dye.swap()}ripple(e=.5,t=.5,r=1){for(let i=0;i<18;i+=1){let o=i/18*Math.PI*2,a=e+.028*Math.cos(o),l=t+.028*Math.sin(o),n=.3*r;this.splatVelocity(a,l,Math.cos(o)*n,Math.sin(o)*n,.006)}this.splatDye(e,t,[0,0,.022*r],.0045)}setTextTexture(e){this.textTexture=e}setAutoInk(e){this.autoInk=e}emitSideInk(){if(!this.autoInk)return;let e=this.time%6.2,t=e<3.2,r=e>1.8&&e<5.4;if(!t&&!r||this.frameCount%2!=0)return;let i=.5+.5*Math.sin(.9*this.frameCount),o=.009+.006*i,a=.01*Math.sin(.42*this.frameCount);t&&(this.splatVelocity(.055+a,.035,.025,.065,.003),this.splatDye(.055+a,.035,[0,0,o],.0029+6e-4*i)),r&&(this.splatVelocity(.945+a,.035,-.025,.065,.003),this.splatDye(.945+a,.035,[0,0,o],.0029+6e-4*i))}emitText(){if(!this.textTexture)return;let{gl:e}=this;this.bindTexture(this.dye.read.texture,0),this.bindTexture(this.textTexture,1),this.draw(this.dye.write,this.emitProgram,t=>{e.uniform1i(t.uDye,0),e.uniform1i(t.uText,1),e.uniform2f(t.uPointer,this.pointerPos.x,this.pointerPos.y),e.uniform1f(t.uEmit,.022),e.uniform1f(t.uDissolve,.06*!!this.active),e.uniform1f(t.uRestore,.05),e.uniform1f(t.uActive,+!!this.active)}),this.dye.swap()}stir(){if(!this.active)return;let{gl:e}=this;this.bindTexture(this.velocity.read.texture,0),this.draw(this.velocity.write,this.stirProgram,t=>{e.uniform1i(t.uVelocity,0),e.uniform2f(t.uPointer,this.pointerPos.x,this.pointerPos.y),e.uniform1f(t.uStrength,.7)}),this.velocity.swap()}applyBuoyancy(e){let{gl:t}=this;this.bindTexture(this.velocity.read.texture,0),this.bindTexture(this.dye.read.texture,1),this.draw(this.velocity.write,this.buoyancyProgram,r=>{t.uniform1i(r.uVelocity,0),t.uniform1i(r.uDye,1),t.uniform1f(r.uDt,e),t.uniform1f(r.uTime,this.time),t.uniform1f(r.uStrength,14)}),this.velocity.swap()}pointer(e,t){if(this.active=!0,this.pointerPos={x:e,y:t},this.last){let r=e-this.last.x,i=t-this.last.y,o=Math.hypot(r,i),a=Math.min(1,35*o);if(this.motionSpeed=.65*this.motionSpeed+.35*a,o>5e-4){let e=Math.max(1,Math.min(6,Math.ceil(o/.008)));for(let t=1;t<=e;t+=1)this.pending.push({x:this.last.x+r*t/e,y:this.last.y+i*t/e,dx:r/e,dy:i/e})}}this.last={x:e,y:t}}pointerLeave(){this.active=!1,this.last=null}updateWarp(e){let{gl:t}=this;this.bindTexture(this.warp.read.texture,0),this.bindTexture(this.velocity.read.texture,1),this.draw(this.warp.write,this.warpProgram,r=>{t.uniform1i(r.uWarp,0),t.uniform1i(r.uVelocity,1),t.uniform2f(r.uPoint,this.pointerPos.x,this.pointerPos.y),t.uniform2f(r.uTexel,1/this.width,1/this.height),t.uniform1f(r.uDt,e),t.uniform1f(r.uStrength,.8*!!this.active),t.uniform1f(r.uRadius,.0035),t.uniform1f(r.uDecay,.982)}),this.warp.swap()}step(e){let{gl:t}=this;this.time+=e,this.frameCount+=1;let r=this.time;for(let e of(this.emitText(),this.stir(),this.emitSideInk(),this.pending)){let t=8*e.dx,i=8*e.dy,o=.35+.65*(.5+.5*Math.sin(41*e.x+57*e.y+4*r));this.splatVelocity(e.x,e.y,t,i,.0015),this.splatDye(e.x,e.y,[0,0,(.004+.007*o)*(.55+.45*this.motionSpeed)],26e-5+3e-4*o)}if(this.pending=[],this.active&&this.frameCount%2==0){let e=.92*this.frameCount,t=.008*Math.cos(e),r=.005*Math.sin(.73*e),i=(.014+.008*(.5+.5*Math.sin(1.4*e)))*(.55+.45*this.motionSpeed);this.splatVelocity(this.pointerPos.x+t,this.pointerPos.y+r,.05*Math.sin(e),.1,.003),this.splatDye(this.pointerPos.x+t,this.pointerPos.y+r,[0,0,i],.0025+6e-4*(.5+.5*Math.cos(e)))}let i=1/this.width,o=1/this.height;this.bindTexture(this.velocity.read.texture,0),this.bindTexture(this.velocity.read.texture,1),this.draw(this.velocity.write,this.advectProgram,r=>{t.uniform1i(r.uVelocity,1),t.uniform1i(r.uSource,0),t.uniform1f(r.uDt,e),t.uniform1f(r.uDissipation,this.active?.96:.93)}),this.velocity.swap(),this.applyBuoyancy(e),this.bindTexture(this.velocity.read.texture,0),this.draw(this.curl,this.curlProgram,e=>{t.uniform1i(e.uVelocity,0),t.uniform2f(e.uTexel,i,o)}),this.bindTexture(this.velocity.read.texture,0),this.bindTexture(this.curl.texture,1),this.draw(this.velocity.write,this.vorticityProgram,r=>{t.uniform1i(r.uVelocity,0),t.uniform1i(r.uCurl,1),t.uniform2f(r.uTexel,i,o),t.uniform1f(r.uDt,e),t.uniform1f(r.uStrength,18)}),this.velocity.swap(),this.bindTexture(this.velocity.read.texture,0),this.draw(this.divergence,this.divergenceProgram,e=>{t.uniform1i(e.uVelocity,0),t.uniform2f(e.uTexel,i,o)});for(let e=0;e<14;e+=1)this.bindTexture(this.pressure.read.texture,0),this.bindTexture(this.divergence.texture,1),this.draw(this.pressure.write,this.pressureProgram,e=>{t.uniform1i(e.uPressure,0),t.uniform1i(e.uDivergence,1),t.uniform2f(e.uTexel,i,o)}),this.pressure.swap();this.bindTexture(this.velocity.read.texture,0),this.bindTexture(this.pressure.read.texture,1),this.draw(this.velocity.write,this.gradientProgram,e=>{t.uniform1i(e.uVelocity,0),t.uniform1i(e.uPressure,1),t.uniform2f(e.uTexel,i,o)}),this.velocity.swap(),this.bindTexture(this.velocity.read.texture,1),this.bindTexture(this.dye.read.texture,0),this.draw(this.dye.write,this.advectProgram,r=>{t.uniform1i(r.uVelocity,1),t.uniform1i(r.uSource,0),t.uniform1f(r.uDt,e),t.uniform1f(r.uDissipation,.97)}),this.dye.swap(),this.active?this.breakAmount=Math.min(1,this.breakAmount+.12):this.breakAmount*=.962}}var _=e.i(82278);let g=`
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,y=`
precision highp float;

uniform sampler2D uText;
uniform sampler2D uDye;
uniform sampler2D uVelocity;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uActive;
uniform float uCrisp;
uniform vec3 uPaintCore;
uniform vec3 uPaintEdge;
uniform vec3 uPaintBase;
uniform float uTime;
uniform float uTitleScale;
uniform float uTitleOffset;
uniform float uTitleOpacity;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p = p * 2.03 + vec2(13.7, 7.1);
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
  float t = uTime;

  vec4 dye = texture2D(uDye, uv);
  float textDensity = dye.r;
  float pinkDye = dye.g;
  float density = textDensity + pinkDye;

  vec2 texel = 1.0 / uResolution;
  float left = texture2D(uDye, uv - vec2(texel.x, 0.0)).r;
  float right = texture2D(uDye, uv + vec2(texel.x, 0.0)).r;
  float top = texture2D(uDye, uv + vec2(0.0, texel.y)).r;
  float bottom = texture2D(uDye, uv - vec2(0.0, texel.y)).r;
  vec2 gradient = vec2(right - left, top - bottom);

  float grain = fbm(vec2(uv.x * 36.0, uv.y * 26.0 + t * 0.12));
  vec2 dyeTexel = texel * 1.0;
  vec2 titlePivot = vec2(0.5, 0.8);
  vec2 titleUv = clamp(
    (uv - titlePivot) / max(uTitleScale, 0.01) + titlePivot +
      vec2(0.0, uTitleOffset),
    vec2(0.0),
    vec2(1.0)
  );
  float dyeCenter = texture2D(uDye, titleUv).r;
  float dyeLeft = texture2D(uDye, titleUv - vec2(dyeTexel.x, 0.0)).r;
  float dyeRight = texture2D(uDye, titleUv + vec2(dyeTexel.x, 0.0)).r;
  float dyeTop = texture2D(uDye, titleUv + vec2(0.0, dyeTexel.y)).r;
  float dyeBottom = texture2D(uDye, titleUv - vec2(0.0, dyeTexel.y)).r;
  float dyeSoft = (
    dyeCenter * 2.0 + dyeLeft + dyeRight + dyeTop + dyeBottom
  ) / 6.0;
  vec2 titleGradient = vec2(
    dyeRight - dyeLeft,
    dyeTop - dyeBottom
  );
  float textDye = smoothstep(0.1, 0.52, dyeSoft);
  vec2 flowNoise = vec2(
    fbm(uv * 4.0 + vec2(t * 0.12, 0.0)) - 0.5,
    fbm(uv * 4.0 + vec2(5.2, -t * 0.1)) - 0.5
  );
  vec2 flowVelocity = texture2D(uVelocity, uv).xy;
  vec2 textUv = clamp(
    uv + (flowNoise * 0.012 + flowVelocity * 0.022) * uCrisp,
    vec2(0.0),
    vec2(1.0)
  );
  vec2 soft = vec2(0.00065, 0.00065);
  float glyph = (
    texture2D(uText, textUv + vec2(soft.x, 0.0)).a +
    texture2D(uText, textUv - vec2(soft.x, 0.0)).a +
    texture2D(uText, textUv + vec2(0.0, soft.y)).a +
    texture2D(uText, textUv - vec2(0.0, soft.y)).a
  ) * 0.25;
  float text = mix(textDye, glyph, uCrisp);
  text *= uTitleOpacity;
  text *= 0.92 + 0.08 * grain;
  text = pow(text, 1.04);

  float rim = smoothstep(0.06, 0.2, dyeSoft) *
    (1.0 - smoothstep(0.2, 0.48, dyeSoft));
  float specular = pow(
    clamp(length(titleGradient) * 9.0, 0.0, 1.0),
    1.5
  );
  float caustic = pow(
    abs(sin(titleUv.x * 28.0 + grain * 6.0 + t * 1.2)),
    8.0
  ) * text;

  vec3 teal = vec3(0.55, 0.98, 0.9);
  vec3 pink = vec3(0.74, 0.38, 0.82);
  vec3 purple = vec3(0.68, 0.4, 0.84);

  vec3 ink = mix(
    teal,
    pink,
    clamp(pinkDye * 0.1, 0.0, 1.0)
  );
  ink = mix(ink, purple, clamp(dyeSoft * 0.08, 0.0, 0.12));

  vec3 normal = normalize(
    vec3(-titleGradient.x * 16.0, -titleGradient.y * 16.0, 1.0)
  );
  vec3 lightDirection = normalize(vec3(-0.45, 0.65, 0.8));
  vec3 halfDirection = normalize(lightDirection + vec3(0.0, 0.0, 1.0));
  float diffuse = clamp(dot(normal, lightDirection), 0.0, 1.0);
  float gloss = pow(clamp(dot(normal, halfDirection), 0.0, 1.0), 22.0);

  vec3 textColor = ink * (0.52 + 0.54 * diffuse);
  textColor += vec3(0.8, 1.0, 1.0) * gloss * 0.38;
  textColor = mix(textColor, ink * 0.94, uCrisp);

  vec3 color = textColor * text * 0.9;

  float shadowDensity = texture2D(
    uDye,
    titleUv + vec2(0.004, -0.005)
  ).r;
  float occlusion = smoothstep(0.08, 0.4, shadowDensity) * (1.0 - text);
  color *= 1.0 - occlusion * 0.55;

  color += vec3(0.7, 1.0, 0.98) * rim * 0.24 * text;
  color += vec3(0.82, 1.0, 1.0) * specular * 0.1 * text;
  color += teal * caustic * 0.12;
  color += pink * clamp(pinkDye * 1.2, 0.0, 1.0) * 0.02;

  float pinkInk = smoothstep(0.06, 0.4, pinkDye);
  float pinkPatch = fbm(uv * 34.0 + vec2(uTime * 0.35, 0.0));
  pinkInk *= 0.45 + 0.55 * smoothstep(0.32, 0.7, pinkPatch);
  float pinkLeft = texture2D(uDye, uv - vec2(texel.x, 0.0)).g;
  float pinkRight = texture2D(uDye, uv + vec2(texel.x, 0.0)).g;
  float pinkTop = texture2D(uDye, uv + vec2(0.0, texel.y)).g;
  float pinkBottom = texture2D(uDye, uv - vec2(0.0, texel.y)).g;
  vec2 pinkGradient = vec2(
    pinkRight - pinkLeft,
    pinkTop - pinkBottom
  );
  float pinkRim = smoothstep(0.02, 0.1, pinkDye) *
    (1.0 - smoothstep(0.1, 0.28, pinkDye));
  float pinkGloss = pow(
    clamp(length(pinkGradient) * 12.0, 0.0, 1.0),
    1.5
  );

  vec3 pinkInkColor = mix(
    vec3(0.78, 0.26, 0.92),
    vec3(1.0, 0.45, 1.0),
    0.6
  );
  color += pinkInkColor * pinkInk * 0.55;
  color += pink * pinkRim * 0.2;
  color += vec3(0.92, 0.72, 1.0) * pinkGloss * 0.12;

  float paintDye = dye.b;
  float paint = smoothstep(0.025, 0.45, paintDye);
  float paintRim = smoothstep(0.03, 0.13, paintDye) *
    (1.0 - smoothstep(0.13, 0.42, paintDye));
  float paintBreakup = fbm(uv * 18.0 + vec2(uTime * 0.26, 0.0));
  paint *= 0.62 + 0.38 * smoothstep(0.28, 0.76, paintBreakup);
  vec3 cream = uPaintCore;
  vec3 gold = uPaintEdge;
  vec3 paintColor = mix(
    uPaintBase,
    cream,
    clamp(paintDye * 2.6, 0.0, 1.0)
  );
  float greenMix = smoothstep(0.04, 0.34, dye.r) * 0.55;
  paintColor = mix(paintColor, vec3(0.2, 0.76, 0.62), greenMix);
  color += paintColor * paint * 0.95;
  color += cream * paintRim * 0.5;
  color += gold * clamp(paintDye * 0.9, 0.0, 1.0) * 0.22;

  vec2 waterP = uv * aspect;
  float waterField = noise(
    waterP * 2.6 + vec2(uTime * 0.035, -uTime * 0.028)
  );
  float rippleA = pow(
    0.5 + 0.5 * sin(waterP.y * 23.0 + waterField * 7.0 + uTime * 0.45),
    10.0
  );
  float rippleB = pow(
    0.5 + 0.5 * sin(waterP.x * 17.0 - waterField * 6.0 - uTime * 0.32),
    12.0
  );
  float waterLines = (rippleA + rippleB) * 0.5;
  color += teal * waterLines * 0.012;
  color += vec3(0.55, 0.95, 0.88) * (waterField - 0.5) * 0.008;

  float vignette = smoothstep(
    1.05,
    0.25,
    length((uv - 0.5) * vec2(aspect.x, 1.0))
  );
  color *= mix(0.65, 1.0, vignette);

  gl_FragColor = vec4(color, 1.0);
}
`,T=[{core:[1,.94,.62],edge:[1,.78,.18],base:[.14,.55,.48]},{core:[.62,.96,.98],edge:[.18,.62,.9],base:[.08,.38,.52]},{core:[1,.64,.74],edge:[.9,.24,.42],base:[.42,.14,.28]},{core:[.84,.68,1],edge:[.5,.3,.9],base:[.24,.16,.5]},{core:[.76,1,.62],edge:[.35,.8,.3],base:[.15,.4,.2]},{core:[1,.84,.42],edge:[1,.58,.08],base:[.42,.2,.05]},{core:[.78,.9,1],edge:[.3,.5,.95],base:[.16,.3,.55]}],b=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uScene;
uniform vec2 uTexel;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec3 center = texture2D(uScene, vUv).rgb;
  vec3 nw = texture2D(uScene, vUv + vec2(-uTexel.x, -uTexel.y)).rgb;
  vec3 ne = texture2D(uScene, vUv + vec2(uTexel.x, -uTexel.y)).rgb;
  vec3 sw = texture2D(uScene, vUv + vec2(-uTexel.x, uTexel.y)).rgb;
  vec3 se = texture2D(uScene, vUv + vec2(uTexel.x, uTexel.y)).rgb;

  float lCenter = luma(center);
  float lNW = luma(nw);
  float lNE = luma(ne);
  float lSW = luma(sw);
  float lSE = luma(se);

  float lMin = min(lCenter, min(min(lNW, lNE), min(lSW, lSE)));
  float lMax = max(lCenter, max(max(lNW, lNE), max(lSW, lSE)));
  if (lMax - lMin < 0.055) {
    gl_FragColor = vec4(center, 1.0);
    return;
  }

  vec2 dir = vec2(
    -((lNW + lNE) - (lSW + lSE)),
    (lNW + lSW) - (lNE + lSE)
  );
  float reduce = max((lNW + lNE + lSW + lSE) * 0.0078125, 0.0078125);
  float rcp = 1.0 / (min(abs(dir.x), abs(dir.y)) + reduce);
  dir = clamp(dir * rcp, -8.0, 8.0) * uTexel;

  vec3 resultA = 0.5 * (
    texture2D(uScene, vUv + dir * (1.0 / 3.0 - 0.5)).rgb +
    texture2D(uScene, vUv + dir * (2.0 / 3.0 - 0.5)).rgb
  );
  vec3 resultB = resultA * 0.5 + 0.25 * (
    texture2D(uScene, vUv + dir * -0.5).rgb +
    texture2D(uScene, vUv + dir * 0.5).rgb
  );

  float lB = luma(resultB);
  gl_FragColor = vec4(
    (lB < lMin || lB > lMax) ? resultA : resultB,
    1.0
  );
}
`;function w(e,t,r){let i=e.createShader(t);return(e.shaderSource(i,r),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS))?i:(console.error(e.getShaderInfoLog(i)),e.deleteShader(i),null)}e.s(["default",0,function({lines:e,onClick:i,variant:o="cover",titleScale:a=1,titleY:l}){let n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=n.current;if(!t)return;let r=t.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"high-performance"});if(!r)return;if(!r.getExtension("EXT_color_buffer_float"))return void console.error("EXT_color_buffer_float not supported");let i=w(r,r.VERTEX_SHADER,g),u=w(r,r.FRAGMENT_SHADER,y);if(!i||!u)return;let s=r.createProgram();if(r.attachShader(s,i),r.attachShader(s,u),r.linkProgram(s),!r.getProgramParameter(s,r.LINK_STATUS))return void console.error(r.getProgramInfoLog(s));r.useProgram(s);let d=w(r,r.FRAGMENT_SHADER,b);if(!d)return;let c=r.createProgram();if(r.attachShader(c,i),r.attachShader(c,d),r.linkProgram(c),!r.getProgramParameter(c,r.LINK_STATUS))return void console.error(r.getProgramInfoLog(c));r.getUniformLocation(c,"uScene"),r.getUniformLocation(c,"uTexel"),r.getAttribLocation(c,"aPosition");let f=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,f),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),r.STATIC_DRAW);let m=r.getAttribLocation(s,"aPosition");r.enableVertexAttribArray(m),r.vertexAttribPointer(m,2,r.FLOAT,!1,0,0);let v="moduleFull"===o,h="backdrop"===o,p="module"===o,_="moduleStage"===o,D=0,E=()=>{if(!_)return;let e=Math.max(1,.38*window.innerHeight);D=Math.min(1,Math.max(0,window.scrollY/e))};_&&(E(),window.addEventListener("scroll",E,{passive:!0}));let P=new x(r,h?256:448,h?160:280);P.setAutoInk("cover"===o||h||_),("cover"===o||_)&&(window.__studioFluid=P);let U=r.createTexture();r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,U),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),P.setTextTexture(U);let R=r.getUniformLocation(s,"uText"),S=r.getUniformLocation(s,"uDye"),A=r.getUniformLocation(s,"uVelocity"),C=r.getUniformLocation(s,"uResolution"),k=r.getUniformLocation(s,"uPointer"),F=r.getUniformLocation(s,"uActive"),L=r.getUniformLocation(s,"uCrisp"),N=r.getUniformLocation(s,"uPaintCore"),G=r.getUniformLocation(s,"uPaintEdge"),M=r.getUniformLocation(s,"uPaintBase"),B=r.getUniformLocation(s,"uTime"),j=r.getUniformLocation(s,"uTitleScale"),I=r.getUniformLocation(s,"uTitleOffset"),O=r.getUniformLocation(s,"uTitleOpacity");r.uniform1i(R,0),r.uniform1i(A,1),r.uniform1i(S,2),r.uniform1f(L,+("moduleFull"===o)),r.uniform1f(j,1),r.uniform1f(I,0),r.uniform1f(O,1);let V=v?1:h?.65:_?.8:p?1.05:Math.min(window.devicePixelRatio||1,.9),W=v||p||_?2:V,X=0,$=0,H=0,z=!1,K=0,Y=null,q=()=>{let t=document.createElement("canvas");t.width=Math.floor(X*W),t.height=Math.floor($*W);let i=t.getContext("2d");if(!i)return;i.scale(W,W);let n="module"===o||"moduleFull"===o,u="moduleFull"===o,s=window.innerHeight,d=u?Math.min(.24*X,.24*s):_?Math.min(.26*X,.22*s):n?Math.min(.26*X,.62*$):e.length>1?Math.min(.16*X,.255*$):Math.min(.205*X,.34*$);_&&(d*=a);let c=.82*d,f=(e.length-1)*c,m=u?Math.min(.2*s,230):_?null!=l?s*l:Math.min(.2*s,230):n?.56*$:$/2-f/2+.02*d;if(i.font=`900 ${d}px "StudioPoppins", "Segoe UI Black", "Arial Black", "Helvetica Neue", sans-serif`,(n||_)&&e[0]){let t=i.measureText(e[0]).width,r=.9*X;t>r&&(d*=r/t)}i.font=`900 ${d}px "StudioPoppins", "Segoe UI Black", "Arial Black", "Helvetica Neue", sans-serif`,i.textAlign="center",i.textBaseline="middle","letterSpacing"in i&&(i.letterSpacing=`${-(.035*d)}px`),i.fillStyle="#ffffff",e.forEach((e,t)=>{i.fillText(e,X/2,m+t*c)}),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,U),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1)},J=()=>{let e=t.getBoundingClientRect(),i=Math.round(e.width),o=Math.round(e.height);i<20||o<20||(i!==X||o!==$)&&(X=i,$=o,t.width=Math.floor(X*V),t.height=Math.floor($*V),r.viewport(0,0,t.width,t.height),r.uniform2f(C,X,$),q())},Q=()=>{K&&cancelAnimationFrame(K),K=requestAnimationFrame(()=>{K=0,J()})},Z=t.parentElement;Z&&"ResizeObserver"in window&&(Y=new ResizeObserver(Q)).observe(Z);let ee=e=>{let r=t.getBoundingClientRect(),i="module"===o,a=i?e.clientX/Math.max(1,window.innerWidth):(e.clientX-r.left)/Math.max(1,r.width),l=i?1-e.clientY/Math.max(1,window.innerHeight):1-(e.clientY-r.top)/Math.max(1,r.height);P.pointer(a,l)},et=()=>{P.pointerLeave()},er=0,ei=e=>{if(!z){let i=_&&D>.82,o=h?33:_?i?42:22:0;if(o&&e-er<o){H=requestAnimationFrame(ei);return}er=e,P.step(1/60),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,t.width,t.height),r.useProgram(s),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,U),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,P.velocity.read.texture),r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,P.dye.read.texture);let a=e/1e3,l=Math.floor(a/7)%T.length,n=(l+1)%T.length,u=a%7,d=0;if(u>6.2){let e=(u-6.2)/.8;d=e*e*(3-2*e)}let c=T[l],v=T[n],p=(e,t)=>e+(t-e)*d,x=c.core.map((e,t)=>p(e,v.core[t])),g=c.edge.map((e,t)=>p(e,v.edge[t])),y=c.base.map((e,t)=>p(e,v.base[t]));r.uniform3fv(N,x),r.uniform3fv(G,g),r.uniform3fv(M,y),r.uniform1f(B,e/1e3);let b=_?D:0;r.uniform1f(j,1-.52*b),r.uniform1f(I,-.18*b),r.uniform1f(O,Math.max(0,1-1.08*b)),r.uniform2f(k,P.pointerPos.x,P.pointerPos.y),r.uniform1f(F,+!!P.active),r.bindBuffer(r.ARRAY_BUFFER,f),r.enableVertexAttribArray(m),r.vertexAttribPointer(m,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLE_STRIP,0,4)}H=requestAnimationFrame(ei)};return J(),document.fonts.load('900 200px "StudioPoppins"').then(()=>{z||q()}).catch(()=>{}),window.addEventListener("resize",Q),window.addEventListener("pointermove",ee,{passive:!0}),window.addEventListener("pointerleave",et),H=requestAnimationFrame(ei),()=>{z=!0,cancelAnimationFrame(H),K&&cancelAnimationFrame(K),Y&&Y.disconnect(),window.removeEventListener("resize",Q),window.removeEventListener("pointermove",ee),window.removeEventListener("pointerleave",et),window.removeEventListener("scroll",E),("cover"===o||_)&&window.__studioFluid===P&&(window.__studioFluid=null),r.deleteBuffer(f),r.deleteTexture(U),r.deleteProgram(s),r.deleteProgram(c),r.deleteShader(i),r.deleteShader(u),r.deleteShader(d)}},[e,o,a,l]),(0,t.jsx)("canvas",{ref:n,className:_.default.fluidCanvas,style:"backdrop"===o?void 0:{filter:"blur(0.7px)"},onClick:i,"aria-hidden":"true"})}],6718)},22374,e=>{"use strict";var t=e.i(43476),r=e.i(18566),i=e.i(22016),o=e.i(6718),a=e.i(71645),l=e.i(82278);let n=[{href:"/about",label:"关于我"},{href:"/works",label:"阶段作业"},{href:"/projects",label:"项目成果"},{href:"/process",label:"过程证据"},{href:"/iterations",label:"迭代记录"},{href:"/reflection",label:"学习复盘"}];function u(){let e=(0,r.usePathname)(),[o,u]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{u(!window.matchMedia("(max-width: 820px)").matches)},[e]),(0,t.jsxs)("div",{className:l.default.moduleNav,"data-open":o,children:[(0,t.jsxs)("button",{type:"button",className:l.default.moduleNavToggle,onClick:()=>u(e=>!e),"aria-expanded":o,"aria-controls":"module-nav",children:[(0,t.jsx)("span",{"aria-hidden":"true",children:o?"‹":"›"}),o?"收起导航":"模块"]}),(0,t.jsx)("nav",{id:"module-nav",className:l.default.moduleNavPanel,children:n.map(r=>{let o=(e||"").replace(/\/+$/,"")===r.href;return(0,t.jsx)(i.default,{href:r.href,className:l.default.moduleNavLink,"data-active":o,onClick:()=>u(!1),children:(0,t.jsx)("span",{children:r.label})},r.href)})})]})}function s({title:e,label:r,index:a,titleScale:n,titleY:d,children:c}){return(0,t.jsxs)("div",{className:l.default.modulePage,"data-module-page":!0,children:[(0,t.jsx)("div",{className:l.default.moduleFluid,children:(0,t.jsx)(o.default,{lines:[e],variant:"moduleStage",titleScale:n,titleY:d})}),(0,t.jsx)("span",{className:l.default.moduleShade,"aria-hidden":"true"}),(0,t.jsx)("header",{className:l.default.moduleHero,"data-module-hero":!0,"aria-hidden":"true"}),(0,t.jsx)(i.default,{href:"/studio",className:l.default.moduleBackFixed,children:"← 回到首页"}),(0,t.jsx)(u,{}),(0,t.jsx)("div",{className:l.default.moduleBody,"data-module-body":!0,children:(0,t.jsx)("div",{className:l.default.moduleSheet,children:c})})]})}let d={"/about":{title:"ABOUT",label:"关于我",index:"01"},"/works":{title:"WORKS",label:"阶段作业",index:"02"},"/projects":{title:"PROJECTS",label:"项目成果",index:"03"},"/process":{title:"PROCESS",label:"过程证据",index:"04"},"/iterations":{title:"ITERATIONS",label:"迭代记录",index:"05"},"/reflection":{title:"REFLECTION",label:"学习复盘",index:"06"}};e.s(["default",0,function({children:e}){let i=d[((0,r.usePathname)()||"/").replace(/\/+$/,"")||"/"];return i?(0,t.jsx)(s,{title:i.title,label:i.label,index:i.index,titleScale:i.titleScale,titleY:i.titleY,children:e}):e}],22374)},80063,e=>{e.v({overlay:"route-wave-module__c-qC6W__overlay"})},77312,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(18566),o=e.i(80063);let a=["/about","/works","/projects","/process","/iterations","/reflection"],l={"/about":["/images/about/profile-1.webp","/images/about/profile-2.webp","/images/about/profile-3.webp"]},n=e=>(e||"").replace(/\/+$/,"")||"/";e.s(["default",0,function(){let e=(0,i.useRouter)(),u=(0,i.usePathname)(),[s,d]=(0,r.useState)("idle"),[c,f]=(0,r.useState)(null),m=(0,r.useRef)([]),v=(0,r.useRef)([]),h=()=>{m.current.forEach(e=>window.clearTimeout(e)),m.current=[]};return((0,r.useEffect)(()=>{let t=t=>{let r=t.detail?.href;r&&(h(),f(n(r)),d("wave"),document.body.classList.remove("studio-arriving"),document.body.classList.add("studio-departing"),window.__studioFluid?.ripple(.5,.5,1.6),m.current.push(window.setTimeout(()=>window.__studioFluid?.ripple(.5,.5,1.2),120),window.setTimeout(()=>window.__studioFluid?.ripple(.5,.5,.9),250)),e.prefetch(r),(l[n(r)]||[]).forEach(e=>{let t=new window.Image;t.src=e,v.current.push(t)}),m.current.push(window.setTimeout(()=>e.push(r),240)))};return window.addEventListener("studio-wave",t),()=>{window.removeEventListener("studio-wave",t),h(),document.body.classList.remove("studio-arriving","studio-departing")}},[e]),(0,r.useEffect)(()=>{let t,r,i=()=>{a.forEach(t=>{n(t)!==n(u)&&e.prefetch(t)})};return"requestIdleCallback"in window?r=window.requestIdleCallback(i,{timeout:2200}):t=window.setTimeout(i,1e3),()=>{t&&window.clearTimeout(t),r&&window.cancelIdleCallback(r)}},[u,e]),(0,r.useEffect)(()=>{let e=e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target?.closest?.("a[href]");if(!t||t.target&&"_self"!==t.target||t.hasAttribute("download")||void 0!==t.dataset.noWave)return;let r=t.getAttribute("href");if(!r||r.startsWith("#"))return;let i=new URL(t.href,window.location.href);i.origin!==window.location.origin||n(i.pathname)!==n(window.location.pathname)&&(e.preventDefault(),window.dispatchEvent(new CustomEvent("studio-wave",{detail:{href:i.pathname+i.search}})))};return document.addEventListener("click",e,!0),()=>document.removeEventListener("click",e,!0)},[]),(0,r.useEffect)(()=>{"wave"===s&&c&&n(u)===c&&(document.body.classList.remove("studio-departing"),document.body.classList.add("studio-arriving"),d("reveal"),m.current.push(window.setTimeout(()=>window.__studioFluid?.ripple(.5,.5,1.5),30),window.setTimeout(()=>window.__studioFluid?.ripple(.5,.5,1),340)))},[u,s,c]),(0,r.useEffect)(()=>{if("wave"!==s)return;let e=window.setTimeout(()=>{document.body.classList.remove("studio-departing"),document.body.classList.add("studio-arriving"),d("reveal"),window.__studioFluid?.ripple(.5,.5,1.5)},2800);return()=>window.clearTimeout(e)},[s]),(0,r.useEffect)(()=>{if("reveal"!==s)return;let e=window.setTimeout(()=>{d("idle"),f(null),document.body.classList.remove("studio-arriving","studio-departing")},1700);return()=>window.clearTimeout(e)},[s]),"idle"===s)?null:(0,t.jsx)("div",{className:o.default.overlay,"data-phase":s,"aria-hidden":"true"})}])},82278,e=>{e.v({avatar:"studio-module__G7fT1a__avatar",body:"studio-module__G7fT1a__body",cardArrow:"studio-module__G7fT1a__cardArrow",cardIndex:"studio-module__G7fT1a__cardIndex",cardText:"studio-module__G7fT1a__cardText",fluidCanvas:"studio-module__G7fT1a__fluidCanvas",grain:"studio-module__G7fT1a__grain",headingWrap:"studio-module__G7fT1a__headingWrap",horizon:"studio-module__G7fT1a__horizon",identity:"studio-module__G7fT1a__identity",inkCanvas:"studio-module__G7fT1a__inkCanvas",lead:"studio-module__G7fT1a__lead",letter:"studio-module__G7fT1a__letter",letterAlt:"studio-module__G7fT1a__letterAlt",letterSway:"studio-module__G7fT1a__letterSway",letterSwayAlt:"studio-module__G7fT1a__letterSwayAlt",line:"studio-module__G7fT1a__line",main:"studio-module__G7fT1a__main",moduleBack:"studio-module__G7fT1a__moduleBack",moduleBackFixed:"studio-module__G7fT1a__moduleBackFixed",moduleBody:"studio-module__G7fT1a__moduleBody",moduleFluid:"studio-module__G7fT1a__moduleFluid",moduleHero:"studio-module__G7fT1a__moduleHero",moduleHeroFoot:"studio-module__G7fT1a__moduleHeroFoot",moduleNav:"studio-module__G7fT1a__moduleNav",moduleNavLink:"studio-module__G7fT1a__moduleNavLink",moduleNavPanel:"studio-module__G7fT1a__moduleNavPanel",moduleNavToggle:"studio-module__G7fT1a__moduleNavToggle",modulePage:"studio-module__G7fT1a__modulePage",moduleShade:"studio-module__G7fT1a__moduleShade",moduleSheet:"studio-module__G7fT1a__moduleSheet",moduleTopline:"studio-module__G7fT1a__moduleTopline",nav:"studio-module__G7fT1a__nav",navCard:"studio-module__G7fT1a__navCard",navLabel:"studio-module__G7fT1a__navLabel",navRight:"studio-module__G7fT1a__navRight",navSub:"studio-module__G7fT1a__navSub",outputGrid:"studio-module__G7fT1a__outputGrid",outputs:"studio-module__G7fT1a__outputs",outputsFoot:"studio-module__G7fT1a__outputsFoot",outputsHead:"studio-module__G7fT1a__outputsHead",panel:"studio-module__G7fT1a__panel",panelIn:"studio-module__G7fT1a__panelIn",panelLinks:"studio-module__G7fT1a__panelLinks",particleCanvas:"studio-module__G7fT1a__particleCanvas",pointerGlow:"studio-module__G7fT1a__pointerGlow",projectCard:"studio-module__G7fT1a__projectCard",sidebar:"studio-module__G7fT1a__sidebar",sidebarArrow:"studio-module__G7fT1a__sidebarArrow",sidebarBackdrop:"studio-module__G7fT1a__sidebarBackdrop",sidebarCard:"studio-module__G7fT1a__sidebarCard",sidebarHead:"studio-module__G7fT1a__sidebarHead",sidebarIndex:"studio-module__G7fT1a__sidebarIndex",sidebarNav:"studio-module__G7fT1a__sidebarNav",sidebarText:"studio-module__G7fT1a__sidebarText",sidebarToggle:"studio-module__G7fT1a__sidebarToggle",smoke:"studio-module__G7fT1a__smoke",smokePurple:"studio-module__G7fT1a__smokePurple",smokeTeal:"studio-module__G7fT1a__smokeTeal",smokeVeil:"studio-module__G7fT1a__smokeVeil",srOnly:"studio-module__G7fT1a__srOnly",stage:"studio-module__G7fT1a__stage",title:"studio-module__G7fT1a__title",titleBreathe:"studio-module__G7fT1a__titleBreathe",titleHome:"studio-module__G7fT1a__titleHome",titleIn:"studio-module__G7fT1a__titleIn",titleSingle:"studio-module__G7fT1a__titleSingle",topLinks:"studio-module__G7fT1a__topLinks",veilDrift:"studio-module__G7fT1a__veilDrift"})},19467,e=>{"use strict";e.s(["navItems",0,[{href:"/",label:"首页"},{href:"/about",label:"关于我"},{href:"/works",label:"阶段作业"},{href:"/projects",label:"项目成果"},{href:"/process",label:"过程证据"},{href:"/iterations",label:"迭代记录"},{href:"/reflection",label:"学习复盘"},{href:"/credits",label:"引用声明"}],"site",0,{name:"张海燕",title:"我的数智编程作品集",tagline:"从零开始学编程 · 持续迭代记录",intro:"这是我在数智编程课上的个人作品集。这里不只放最后的成品，还记录了我每一阶段的作业、遇到问题时是怎么解决的，以及每次修改的原因和效果。",email:"2034267621@qq.com",siteUrl:"https://zhy-246-bd.github.io/",siteUrlAlt:"https://zhanghaiyan-portfolio.surge.sh/",github:"",lastUpdated:"2026-11-08"}])}]);