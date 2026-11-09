(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return x},useLinkStatus:function(){return y}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let a=e.r(90809),u=e.r(43476),n=a._(e.r(71645)),l=e.r(95057),s=e.r(8372),c=e.r(18581),f=e.r(18967),d=e.r(5550),v=e.r(88540),m=e.r(91949),h=e.r(73668),p=e.r(9396);function x(t){var r;let i,o,a,[x,y]=(0,n.useOptimistic)(m.IDLE_LINK_STATUS),T=(0,n.useRef)(null),{href:g,as:D,children:b,prefetch:P=null,passHref:E,replace:U,shallow:R,scroll:w,onClick:S,onMouseEnter:A,onTouchStart:C,legacyBehavior:F=!1,onNavigate:L,transitionTypes:k,ref:G,unstable_dynamicOnHover:M,...B}=t;i=b,F&&("string"==typeof i||"number"==typeof i)&&(i=(0,u.jsx)("a",{children:i}));let I=n.default.useContext(s.AppRouterContext),N=!1!==P,O=!1===P?"none":!0===P?"full":"auto",V="none"!==O?"auto"===O?p.FetchStrategy.PPR:p.FetchStrategy.Full:p.FetchStrategy.PPR,X="string"==typeof(r=D||g)?r:(0,l.formatUrl)(r);if(F){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=n.default.Children.only(i)}let j=F?o&&"object"==typeof o&&o.ref:G,W,H=n.default.useCallback(e=>(null!==I&&(T.current=(0,m.mountLinkInstance)(e,X,I,V,N,y,W)),()=>{T.current&&((0,m.unmountLinkForCurrentNavigation)(T.current),T.current=null),(0,m.unmountPrefetchableInstance)(e)}),[N,X,I,V,y,W]),$={ref:(0,c.useMergedRef)(H,j),onClick(t){F||"function"!=typeof S||S(t),F&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!I||t.defaultPrevented||function(t,r,i,o,a,u,l,s="none"){if("u">typeof window){let c,{nodeName:f}=t.currentTarget;if("A"===f.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),u){let e=!1;if(u({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);n.default.startTransition(()=>{d(r,o?"replace":"push",!1===a?v.ScrollBehavior.NoScroll:v.ScrollBehavior.Default,i.current,l,s)})}}(t,X,T,U,w,L,k,O)},onMouseEnter(e){F||"function"!=typeof A||A(e),F&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&N&&(0,m.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){F||"function"!=typeof C||C(e),F&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&N&&(0,m.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,f.isAbsoluteUrl)(X)?$.href=X:F&&!E&&("a"!==o.type||"href"in o.props)||($.href=(0,d.addBasePath)(X)),a=F?n.default.cloneElement(o,$):(0,u.jsx)("a",{...B,...$,children:i}),(0,u.jsx)(_.Provider,{value:x,children:a})}let _=(0,n.createContext)(m.IDLE_LINK_STATUS),y=()=>(0,n.useContext)(_);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let i=e.r(71645);function o(e,t){let r=(0,i.useRef)(null),o=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,i)),t&&(o.current=a(t,i))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let i=e.r(18967),o=e.r(52817);function a(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return n}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});function a(e){let t={};for(let[r,i]of e.entries()){let e=t[r];void 0===e?t[r]=i:Array.isArray(e)?e.push(i):t[r]=[e,i]}return t}function u(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function n(e){let t=new URLSearchParams;for(let[r,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)t.append(r,u(e));else t.set(r,u(i));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,i]of r.entries())e.append(t,i)}return e}},95057,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return n},formatWithValidation:function(){return s},urlObjectKeys:function(){return l}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let a=e.r(90809)._(e.r(98183)),u=/https?|ftp|gopher|file/;function n(e){let{auth:t,hostname:r}=e,i=e.protocol||"",o=e.pathname||"",n=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||u.test(i))&&!1!==s?(s="//"+(s||""),o&&"/"!==o[0]&&(o="/"+o)):s||(s=""),n&&"#"!==n[0]&&(n="#"+n),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${i}${s}${o}${c}${n}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return n(e)}},18967,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var i={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return g},MissingStaticPage:function(){return T},NormalizeError:function(){return _},PageNotFoundError:function(){return y},SP:function(){return h},ST:function(){return p},WEB_VITALS:function(){return a},execOnce:function(){return u},getDisplayName:function(){return f},getLocationOrigin:function(){return s},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return d},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return v},stringifyError:function(){return D}};for(var o in i)Object.defineProperty(r,o,{enumerable:!0,get:i[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function u(e){let t,r=!1;return(...i)=>(r||(r=!0,t=e(...i)),t)}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&n.test(e)};function s(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=s();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function v(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let i=await e.getInitialProps(t);if(r&&d(r))return i;if(!i)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${i}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return i}let h="u">typeof performance,p=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class _ extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class T extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class g extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function D(e){return JSON.stringify({message:e.message,stack:e.stack})}},18566,(e,t,r)=>{t.exports=e.r(76562)},6718,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let i=`
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
`,u=`
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
`,l=`
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
`,c=`
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
`,f=`
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
`,d=`
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
`,v=new Float32Array([-1,-1,1,-1,-1,1,1,1]),m=`
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
`;class x{constructor(e,t=512,r=320){this.gl=e,this.width=t,this.height=r,this.time=0,this.frameCount=0,this.autoInk=!1,this.motionSpeed=0,this.pending=[],this.last=null,this.quad=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quad),e.bufferData(e.ARRAY_BUFFER,v,e.STATIC_DRAW);const x=t=>{let r=e.createShader(e.VERTEX_SHADER);e.shaderSource(r,i),e.compileShader(r);let o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,t),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)||console.error(e.getShaderInfoLog(o));let a=e.createProgram();e.attachShader(a,r),e.attachShader(a,o),e.linkProgram(a);let u={},n=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let t=0;t<n;t+=1){let r=e.getActiveUniform(a,t);u[r.name]=e.getUniformLocation(a,r.name)}return{program:a,uniforms:u}};this.splatVelocityProgram=x(o),this.splatDyeProgram=x(a),this.advectProgram=x(u),this.curlProgram=x(n),this.vorticityProgram=x(l),this.divergenceProgram=x(s),this.pressureProgram=x(c),this.gradientProgram=x(f),this.warpProgram=x(d),this.emitProgram=x(p),this.stirProgram=x(m),this.buoyancyProgram=x(h);const _=(t,r)=>{let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,r,0,e.RGBA,e.HALF_FLOAT,null);let o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER);return a!==e.FRAMEBUFFER_COMPLETE&&console.error("Fluid FBO incomplete",a),{texture:i,fbo:o,width:t,height:r}},y=()=>({read:_(t,r),write:_(t,r),swap(){let e=this.read;this.read=this.write,this.write=e}});this.velocity=y(),this.dye=y(),this.pressure=y(),this.warp=y(),this.divergence=_(t,r),this.curl=_(t,r),this.pointerPos={x:.5,y:.5},this.active=!1,this.breakAmount=0,this.textTexture=null,e.bindFramebuffer(e.FRAMEBUFFER,null)}bindTexture(e,t){let{gl:r}=this;r.activeTexture(r.TEXTURE0+t),r.bindTexture(r.TEXTURE_2D,e)}draw(e,t,r){let{gl:i}=this;i.bindFramebuffer(i.FRAMEBUFFER,e.fbo),i.viewport(0,0,e.width,e.height),i.useProgram(t.program),i.bindBuffer(i.ARRAY_BUFFER,this.quad);let o=i.getAttribLocation(t.program,"aPosition");i.enableVertexAttribArray(o),i.vertexAttribPointer(o,2,i.FLOAT,!1,0,0),r(t.uniforms),i.drawArrays(i.TRIANGLE_STRIP,0,4)}splatVelocity(e,t,r,i,o=9e-4){this.bindTexture(this.velocity.read.texture,0),this.draw(this.velocity.write,this.splatVelocityProgram,a=>{let{gl:u}=this;u.uniform1i(a.uTarget,0),u.uniform2f(a.uPoint,e,t),u.uniform2f(a.uForce,r,i),u.uniform1f(a.uRadius,o)}),this.velocity.swap()}splatDye(e,t,r,i=.0012){this.bindTexture(this.dye.read.texture,0),this.draw(this.dye.write,this.splatDyeProgram,o=>{let{gl:a}=this;a.uniform1i(o.uTarget,0),a.uniform2f(o.uPoint,e,t),a.uniform3f(o.uColor,r[0],r[1],r[2]),a.uniform1f(o.uRadius,i)}),this.dye.swap()}ripple(e=.5,t=.5,r=1){for(let i=0;i<18;i+=1){let o=i/18*Math.PI*2,a=e+.028*Math.cos(o),u=t+.028*Math.sin(o),n=.3*r;this.splatVelocity(a,u,Math.cos(o)*n,Math.sin(o)*n,.006)}this.splatDye(e,t,[0,0,.022*r],.0045)}setTextTexture(e){this.textTexture=e}setAutoInk(e){this.autoInk=e}emitSideInk(){if(!this.autoInk)return;let e=this.time%6.2,t=e<3.2,r=e>1.8&&e<5.4;if(!t&&!r||this.frameCount%2!=0)return;let i=.5+.5*Math.sin(.9*this.frameCount),o=.009+.006*i,a=.01*Math.sin(.42*this.frameCount);t&&(this.splatVelocity(.055+a,.035,.025,.065,.003),this.splatDye(.055+a,.035,[0,0,o],.0029+6e-4*i)),r&&(this.splatVelocity(.945+a,.035,-.025,.065,.003),this.splatDye(.945+a,.035,[0,0,o],.0029+6e-4*i))}emitText(){if(!this.textTexture)return;let{gl:e}=this;this.bindTexture(this.dye.read.texture,0),this.bindTexture(this.textTexture,1),this.draw(this.dye.write,this.emitProgram,t=>{e.uniform1i(t.uDye,0),e.uniform1i(t.uText,1),e.uniform2f(t.uPointer,this.pointerPos.x,this.pointerPos.y),e.uniform1f(t.uEmit,.022),e.uniform1f(t.uDissolve,.06*!!this.active),e.uniform1f(t.uRestore,.05),e.uniform1f(t.uActive,+!!this.active)}),this.dye.swap()}stir(){if(!this.active)return;let{gl:e}=this;this.bindTexture(this.velocity.read.texture,0),this.draw(this.velocity.write,this.stirProgram,t=>{e.uniform1i(t.uVelocity,0),e.uniform2f(t.uPointer,this.pointerPos.x,this.pointerPos.y),e.uniform1f(t.uStrength,.7)}),this.velocity.swap()}applyBuoyancy(e){let{gl:t}=this;this.bindTexture(this.velocity.read.texture,0),this.bindTexture(this.dye.read.texture,1),this.draw(this.velocity.write,this.buoyancyProgram,r=>{t.uniform1i(r.uVelocity,0),t.uniform1i(r.uDye,1),t.uniform1f(r.uDt,e),t.uniform1f(r.uTime,this.time),t.uniform1f(r.uStrength,14)}),this.velocity.swap()}pointer(e,t){if(this.active=!0,this.pointerPos={x:e,y:t},this.last){let r=e-this.last.x,i=t-this.last.y,o=Math.hypot(r,i),a=Math.min(1,35*o);if(this.motionSpeed=.65*this.motionSpeed+.35*a,o>5e-4){let e=Math.max(1,Math.min(6,Math.ceil(o/.008)));for(let t=1;t<=e;t+=1)this.pending.push({x:this.last.x+r*t/e,y:this.last.y+i*t/e,dx:r/e,dy:i/e})}}this.last={x:e,y:t}}pointerLeave(){this.active=!1,this.last=null}updateWarp(e){let{gl:t}=this;this.bindTexture(this.warp.read.texture,0),this.bindTexture(this.velocity.read.texture,1),this.draw(this.warp.write,this.warpProgram,r=>{t.uniform1i(r.uWarp,0),t.uniform1i(r.uVelocity,1),t.uniform2f(r.uPoint,this.pointerPos.x,this.pointerPos.y),t.uniform2f(r.uTexel,1/this.width,1/this.height),t.uniform1f(r.uDt,e),t.uniform1f(r.uStrength,.8*!!this.active),t.uniform1f(r.uRadius,.0035),t.uniform1f(r.uDecay,.982)}),this.warp.swap()}step(e){let{gl:t}=this;this.time+=e,this.frameCount+=1;let r=this.time;for(let e of(this.emitText(),this.stir(),this.emitSideInk(),this.pending)){let t=8*e.dx,i=8*e.dy,o=.35+.65*(.5+.5*Math.sin(41*e.x+57*e.y+4*r));this.splatVelocity(e.x,e.y,t,i,.0015),this.splatDye(e.x,e.y,[0,0,(.004+.007*o)*(.55+.45*this.motionSpeed)],26e-5+3e-4*o)}if(this.pending=[],this.active&&this.frameCount%2==0){let e=.92*this.frameCount,t=.008*Math.cos(e),r=.005*Math.sin(.73*e),i=(.014+.008*(.5+.5*Math.sin(1.4*e)))*(.55+.45*this.motionSpeed);this.splatVelocity(this.pointerPos.x+t,this.pointerPos.y+r,.05*Math.sin(e),.1,.003),this.splatDye(this.pointerPos.x+t,this.pointerPos.y+r,[0,0,i],.0025+6e-4*(.5+.5*Math.cos(e)))}let i=1/this.width,o=1/this.height;this.bindTexture(this.velocity.read.texture,0),this.bindTexture(this.velocity.read.texture,1),this.draw(this.velocity.write,this.advectProgram,r=>{t.uniform1i(r.uVelocity,1),t.uniform1i(r.uSource,0),t.uniform1f(r.uDt,e),t.uniform1f(r.uDissipation,this.active?.96:.93)}),this.velocity.swap(),this.applyBuoyancy(e),this.bindTexture(this.velocity.read.texture,0),this.draw(this.curl,this.curlProgram,e=>{t.uniform1i(e.uVelocity,0),t.uniform2f(e.uTexel,i,o)}),this.bindTexture(this.velocity.read.texture,0),this.bindTexture(this.curl.texture,1),this.draw(this.velocity.write,this.vorticityProgram,r=>{t.uniform1i(r.uVelocity,0),t.uniform1i(r.uCurl,1),t.uniform2f(r.uTexel,i,o),t.uniform1f(r.uDt,e),t.uniform1f(r.uStrength,18)}),this.velocity.swap(),this.bindTexture(this.velocity.read.texture,0),this.draw(this.divergence,this.divergenceProgram,e=>{t.uniform1i(e.uVelocity,0),t.uniform2f(e.uTexel,i,o)});for(let e=0;e<14;e+=1)this.bindTexture(this.pressure.read.texture,0),this.bindTexture(this.divergence.texture,1),this.draw(this.pressure.write,this.pressureProgram,e=>{t.uniform1i(e.uPressure,0),t.uniform1i(e.uDivergence,1),t.uniform2f(e.uTexel,i,o)}),this.pressure.swap();this.bindTexture(this.velocity.read.texture,0),this.bindTexture(this.pressure.read.texture,1),this.draw(this.velocity.write,this.gradientProgram,e=>{t.uniform1i(e.uVelocity,0),t.uniform1i(e.uPressure,1),t.uniform2f(e.uTexel,i,o)}),this.velocity.swap(),this.bindTexture(this.velocity.read.texture,1),this.bindTexture(this.dye.read.texture,0),this.draw(this.dye.write,this.advectProgram,r=>{t.uniform1i(r.uVelocity,1),t.uniform1i(r.uSource,0),t.uniform1f(r.uDt,e),t.uniform1f(r.uDissipation,.97)}),this.dye.swap(),this.active?this.breakAmount=Math.min(1,this.breakAmount+.12):this.breakAmount*=.962}}var _=e.i(82278);let y=`
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,T=`
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
`,g=[{core:[1,.94,.62],edge:[1,.78,.18],base:[.14,.55,.48]},{core:[.62,.96,.98],edge:[.18,.62,.9],base:[.08,.38,.52]},{core:[1,.64,.74],edge:[.9,.24,.42],base:[.42,.14,.28]},{core:[.84,.68,1],edge:[.5,.3,.9],base:[.24,.16,.5]},{core:[.76,1,.62],edge:[.35,.8,.3],base:[.15,.4,.2]},{core:[1,.84,.42],edge:[1,.58,.08],base:[.42,.2,.05]},{core:[.78,.9,1],edge:[.3,.5,.95],base:[.16,.3,.55]}],D=`
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
`;function b(e,t,r){let i=e.createShader(t);return(e.shaderSource(i,r),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS))?i:(console.error(e.getShaderInfoLog(i)),e.deleteShader(i),null)}e.s(["default",0,function({lines:e,onClick:i,variant:o="cover",titleScale:a=1,titleY:u}){let n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=n.current;if(!t)return;let r=t.getContext("webgl2",{antialias:!1,alpha:!1,powerPreference:"high-performance"});if(!r)return;if(!r.getExtension("EXT_color_buffer_float"))return void console.error("EXT_color_buffer_float not supported");let i=b(r,r.VERTEX_SHADER,y),l=b(r,r.FRAGMENT_SHADER,T);if(!i||!l)return;let s=r.createProgram();if(r.attachShader(s,i),r.attachShader(s,l),r.linkProgram(s),!r.getProgramParameter(s,r.LINK_STATUS))return void console.error(r.getProgramInfoLog(s));r.useProgram(s);let c=b(r,r.FRAGMENT_SHADER,D);if(!c)return;let f=r.createProgram();if(r.attachShader(f,i),r.attachShader(f,c),r.linkProgram(f),!r.getProgramParameter(f,r.LINK_STATUS))return void console.error(r.getProgramInfoLog(f));r.getUniformLocation(f,"uScene"),r.getUniformLocation(f,"uTexel"),r.getAttribLocation(f,"aPosition");let d=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,d),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),r.STATIC_DRAW);let v=r.getAttribLocation(s,"aPosition");r.enableVertexAttribArray(v),r.vertexAttribPointer(v,2,r.FLOAT,!1,0,0);let m="moduleFull"===o,h="backdrop"===o,p="module"===o,_="moduleStage"===o,P=0,E=()=>{if(!_)return;let e=Math.max(1,.38*window.innerHeight);P=Math.min(1,Math.max(0,window.scrollY/e))};_&&(E(),window.addEventListener("scroll",E,{passive:!0}));let U=new x(r,h?256:448,h?160:280);U.setAutoInk("cover"===o||h||_),("cover"===o||_)&&(window.__studioFluid=U);let R=r.createTexture();r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,R),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),U.setTextTexture(R);let w=r.getUniformLocation(s,"uText"),S=r.getUniformLocation(s,"uDye"),A=r.getUniformLocation(s,"uVelocity"),C=r.getUniformLocation(s,"uResolution"),F=r.getUniformLocation(s,"uPointer"),L=r.getUniformLocation(s,"uActive"),k=r.getUniformLocation(s,"uCrisp"),G=r.getUniformLocation(s,"uPaintCore"),M=r.getUniformLocation(s,"uPaintEdge"),B=r.getUniformLocation(s,"uPaintBase"),I=r.getUniformLocation(s,"uTime"),N=r.getUniformLocation(s,"uTitleScale"),O=r.getUniformLocation(s,"uTitleOffset"),V=r.getUniformLocation(s,"uTitleOpacity");r.uniform1i(w,0),r.uniform1i(A,1),r.uniform1i(S,2),r.uniform1f(k,+("moduleFull"===o)),r.uniform1f(N,1),r.uniform1f(O,0),r.uniform1f(V,1);let X=m?1:h?.65:_?.8:p?1.05:Math.min(window.devicePixelRatio||1,.9),j=m||p||_?2:X,W=0,H=0,$=0,z=!1,K=0,Y=null,q=()=>{let t=document.createElement("canvas");t.width=Math.floor(W*j),t.height=Math.floor(H*j);let i=t.getContext("2d");if(!i)return;i.scale(j,j);let n="module"===o||"moduleFull"===o,l="moduleFull"===o,s=window.innerHeight,c=l?Math.min(.24*W,.24*s):_?Math.min(.26*W,.22*s):n?Math.min(.26*W,.62*H):e.length>1?Math.min(.16*W,.255*H):Math.min(.205*W,.34*H);_&&(c*=a);let f=.82*c,d=(e.length-1)*f,v=l?Math.min(.2*s,230):_?null!=u?s*u:Math.min(.2*s,230):n?.56*H:H/2-d/2+.02*c;if(i.font=`900 ${c}px "StudioPoppins", "Segoe UI Black", "Arial Black", "Helvetica Neue", sans-serif`,(n||_)&&e[0]){let t=i.measureText(e[0]).width,r=.9*W;t>r&&(c*=r/t)}i.font=`900 ${c}px "StudioPoppins", "Segoe UI Black", "Arial Black", "Helvetica Neue", sans-serif`,i.textAlign="center",i.textBaseline="middle","letterSpacing"in i&&(i.letterSpacing=`${-(.035*c)}px`),i.fillStyle="#ffffff",e.forEach((e,t)=>{i.fillText(e,W/2,v+t*f)}),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,R),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1)},Q=()=>{let e=t.getBoundingClientRect(),i=Math.round(e.width),o=Math.round(e.height);i<20||o<20||(i!==W||o!==H)&&(W=i,H=o,t.width=Math.floor(W*X),t.height=Math.floor(H*X),r.viewport(0,0,t.width,t.height),r.uniform2f(C,W,H),q())},J=()=>{K&&cancelAnimationFrame(K),K=requestAnimationFrame(()=>{K=0,Q()})},Z=t.parentElement;Z&&"ResizeObserver"in window&&(Y=new ResizeObserver(J)).observe(Z);let ee=e=>{let r=t.getBoundingClientRect(),i="module"===o,a=i?e.clientX/Math.max(1,window.innerWidth):(e.clientX-r.left)/Math.max(1,r.width),u=i?1-e.clientY/Math.max(1,window.innerHeight):1-(e.clientY-r.top)/Math.max(1,r.height);U.pointer(a,u)},et=()=>{U.pointerLeave()},er=0,ei=e=>{if(!z){let i=_&&P>.82,o=h?33:_?i?42:22:0;if(o&&e-er<o){$=requestAnimationFrame(ei);return}er=e,U.step(1/60),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,t.width,t.height),r.useProgram(s),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,R),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,U.velocity.read.texture),r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,U.dye.read.texture);let a=e/1e3,u=Math.floor(a/7)%g.length,n=(u+1)%g.length,l=a%7,c=0;if(l>6.2){let e=(l-6.2)/.8;c=e*e*(3-2*e)}let f=g[u],m=g[n],p=(e,t)=>e+(t-e)*c,x=f.core.map((e,t)=>p(e,m.core[t])),y=f.edge.map((e,t)=>p(e,m.edge[t])),T=f.base.map((e,t)=>p(e,m.base[t]));r.uniform3fv(G,x),r.uniform3fv(M,y),r.uniform3fv(B,T),r.uniform1f(I,e/1e3);let D=_?P:0;r.uniform1f(N,1-.52*D),r.uniform1f(O,-.18*D),r.uniform1f(V,Math.max(0,1-1.08*D)),r.uniform2f(F,U.pointerPos.x,U.pointerPos.y),r.uniform1f(L,+!!U.active),r.bindBuffer(r.ARRAY_BUFFER,d),r.enableVertexAttribArray(v),r.vertexAttribPointer(v,2,r.FLOAT,!1,0,0),r.drawArrays(r.TRIANGLE_STRIP,0,4)}$=requestAnimationFrame(ei)};return Q(),document.fonts.load('900 200px "StudioPoppins"').then(()=>{z||q()}).catch(()=>{}),window.addEventListener("resize",J),window.addEventListener("pointermove",ee,{passive:!0}),window.addEventListener("pointerleave",et),$=requestAnimationFrame(ei),()=>{z=!0,cancelAnimationFrame($),K&&cancelAnimationFrame(K),Y&&Y.disconnect(),window.removeEventListener("resize",J),window.removeEventListener("pointermove",ee),window.removeEventListener("pointerleave",et),window.removeEventListener("scroll",E),("cover"===o||_)&&window.__studioFluid===U&&(window.__studioFluid=null),r.deleteBuffer(d),r.deleteTexture(R),r.deleteProgram(s),r.deleteProgram(f),r.deleteShader(i),r.deleteShader(l),r.deleteShader(c)}},[e,o,a,u]),(0,t.jsx)("canvas",{ref:n,className:_.default.fluidCanvas,style:"backdrop"===o?void 0:{filter:"blur(0.7px)"},onClick:i,"aria-hidden":"true"})}],6718)},82278,e=>{e.v({avatar:"studio-module__G7fT1a__avatar",body:"studio-module__G7fT1a__body",cardArrow:"studio-module__G7fT1a__cardArrow",cardIndex:"studio-module__G7fT1a__cardIndex",cardText:"studio-module__G7fT1a__cardText",fluidCanvas:"studio-module__G7fT1a__fluidCanvas",grain:"studio-module__G7fT1a__grain",headingWrap:"studio-module__G7fT1a__headingWrap",horizon:"studio-module__G7fT1a__horizon",identity:"studio-module__G7fT1a__identity",inkCanvas:"studio-module__G7fT1a__inkCanvas",lead:"studio-module__G7fT1a__lead",letter:"studio-module__G7fT1a__letter",letterAlt:"studio-module__G7fT1a__letterAlt",letterSway:"studio-module__G7fT1a__letterSway",letterSwayAlt:"studio-module__G7fT1a__letterSwayAlt",line:"studio-module__G7fT1a__line",main:"studio-module__G7fT1a__main",moduleBack:"studio-module__G7fT1a__moduleBack",moduleBackFixed:"studio-module__G7fT1a__moduleBackFixed",moduleBody:"studio-module__G7fT1a__moduleBody",moduleFluid:"studio-module__G7fT1a__moduleFluid",moduleHero:"studio-module__G7fT1a__moduleHero",moduleHeroFoot:"studio-module__G7fT1a__moduleHeroFoot",moduleNav:"studio-module__G7fT1a__moduleNav",moduleNavLink:"studio-module__G7fT1a__moduleNavLink",moduleNavPanel:"studio-module__G7fT1a__moduleNavPanel",moduleNavToggle:"studio-module__G7fT1a__moduleNavToggle",modulePage:"studio-module__G7fT1a__modulePage",moduleShade:"studio-module__G7fT1a__moduleShade",moduleSheet:"studio-module__G7fT1a__moduleSheet",moduleTopline:"studio-module__G7fT1a__moduleTopline",nav:"studio-module__G7fT1a__nav",navCard:"studio-module__G7fT1a__navCard",navLabel:"studio-module__G7fT1a__navLabel",navRight:"studio-module__G7fT1a__navRight",navSub:"studio-module__G7fT1a__navSub",outputGrid:"studio-module__G7fT1a__outputGrid",outputs:"studio-module__G7fT1a__outputs",outputsFoot:"studio-module__G7fT1a__outputsFoot",outputsHead:"studio-module__G7fT1a__outputsHead",panel:"studio-module__G7fT1a__panel",panelIn:"studio-module__G7fT1a__panelIn",panelLinks:"studio-module__G7fT1a__panelLinks",particleCanvas:"studio-module__G7fT1a__particleCanvas",pointerGlow:"studio-module__G7fT1a__pointerGlow",projectCard:"studio-module__G7fT1a__projectCard",sidebar:"studio-module__G7fT1a__sidebar",sidebarArrow:"studio-module__G7fT1a__sidebarArrow",sidebarBackdrop:"studio-module__G7fT1a__sidebarBackdrop",sidebarCard:"studio-module__G7fT1a__sidebarCard",sidebarHead:"studio-module__G7fT1a__sidebarHead",sidebarIndex:"studio-module__G7fT1a__sidebarIndex",sidebarNav:"studio-module__G7fT1a__sidebarNav",sidebarText:"studio-module__G7fT1a__sidebarText",sidebarToggle:"studio-module__G7fT1a__sidebarToggle",smoke:"studio-module__G7fT1a__smoke",smokePurple:"studio-module__G7fT1a__smokePurple",smokeTeal:"studio-module__G7fT1a__smokeTeal",smokeVeil:"studio-module__G7fT1a__smokeVeil",srOnly:"studio-module__G7fT1a__srOnly",stage:"studio-module__G7fT1a__stage",title:"studio-module__G7fT1a__title",titleBreathe:"studio-module__G7fT1a__titleBreathe",titleHome:"studio-module__G7fT1a__titleHome",titleIn:"studio-module__G7fT1a__titleIn",titleSingle:"studio-module__G7fT1a__titleSingle",topLinks:"studio-module__G7fT1a__topLinks",veilDrift:"studio-module__G7fT1a__veilDrift"})},19467,e=>{"use strict";e.s(["navItems",0,[{href:"/",label:"首页"},{href:"/about",label:"关于我"},{href:"/works",label:"阶段作业"},{href:"/projects",label:"项目成果"},{href:"/process",label:"过程证据"},{href:"/iterations",label:"迭代记录"},{href:"/reflection",label:"学习复盘"},{href:"/credits",label:"引用声明"}],"site",0,{name:"张海燕",title:"我的数智编程作品集",tagline:"从零开始学编程 · 持续迭代记录",intro:"这是我在数智编程课上的个人作品集。这里不只放最后的成品，还记录了我每一阶段的作业、遇到问题时是怎么解决的，以及每次修改的原因和效果。",email:"2034267621@qq.com",siteUrl:"https://zhy-246-bd.github.io/",siteUrlAlt:"https://zhanghaiyan-portfolio.surge.sh/",github:"",lastUpdated:"2026-11-08"}])}]);