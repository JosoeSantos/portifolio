import{n as e,o as t,t as n}from"./chunk-BEldbCjX.js";import{a as r,c as i,d as a,f as o,i as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./iframe-D6d4QXiA.js";import{n as h,t as g}from"./button-DW0sZxU2.js";var _=n(((e,t)=>{Object.defineProperty(e,`__esModule`,{value:!0}),Object.defineProperty(e,`useIntersection`,{enumerable:!0,get:function(){return d}});var n=u(),r=a(),i=typeof IntersectionObserver==`function`,o=new Map,s=[];function c(e){let t={root:e.root||null,margin:e.rootMargin||``},n=s.find(e=>e.root===t.root&&e.margin===t.margin),r;if(n&&(r=o.get(n),r))return r;let i=new Map;return r={id:t,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},s.push(t),o.set(t,r),r}function l(e,t,n){let{id:r,observer:i,elements:a}=c(n);return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),a.size===0){i.disconnect(),o.delete(r);let e=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&s.splice(e,1)}}}function d({rootRef:e,rootMargin:t,disabled:a}){let o=a||!i,[s,c]=(0,n.useState)(!1),u=(0,n.useRef)(null),d=(0,n.useCallback)(e=>{u.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(o||s)return;let n=u.current;if(n&&n.tagName)return l(n,e=>e&&c(e),{root:e?.current,rootMargin:t})}else if(!s){let e=(0,r.requestIdleCallback)(()=>c(!0));return()=>(0,r.cancelIdleCallback)(e)}},[o,t,e,s,u.current]),[d,s,(0,n.useCallback)(()=>{c(!1)},[])]}(typeof e.default==`function`||typeof e.default==`object`&&e.default!==null)&&e.default.__esModule===void 0&&(Object.defineProperty(e.default,`__esModule`,{value:!0}),Object.assign(e.default,e),t.exports=e.default)})),v=n(((e,t)=>{Object.defineProperty(e,`__esModule`,{value:!0}),Object.defineProperty(e,`getDomainLocale`,{enumerable:!0,get:function(){return n}}),l();function n(e,t,n,r){return!1}(typeof e.default==`function`||typeof e.default==`object`&&e.default!==null)&&e.default.__esModule===void 0&&(Object.defineProperty(e.default,`__esModule`,{value:!0}),Object.assign(e.default,e),t.exports=e.default)})),y=n(((e,t)=>{Object.defineProperty(e,`__esModule`,{value:!0}),Object.defineProperty(e,`useMergedRef`,{enumerable:!0,get:function(){return r}});var n=u();function r(e,t){let r=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(n===null){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=i(e,n)),t&&(a.current=i(t,n))},[e,t])}function i(e,t){if(typeof e==`function`){let n=e(t);return typeof n==`function`?n:()=>e(null)}else return e.current=t,()=>{e.current=null}}(typeof e.default==`function`||typeof e.default==`object`&&e.default!==null)&&e.default.__esModule===void 0&&(Object.defineProperty(e.default,`__esModule`,{value:!0}),Object.assign(e.default,e),t.exports=e.default)})),b=n((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),Object.defineProperty(e,`errorOnce`,{enumerable:!0,get:function(){return t}});var t=e=>{}})),x=n(((e,t)=>{Object.defineProperty(e,`__esModule`,{value:!0});function n(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}n(e,{default:function(){return R},useLinkStatus:function(){return L}});var a=o(),l=m(),h=a._(u()),g=c(),x=d(),S=f(),C=i(),w=r(),T=p(),E=_(),D=v(),O=s(),k=y();b();var A=new Set;function j(e,t,n,r){if(!(typeof window>`u`)&&(0,x.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let i=r.locale===void 0?`locale`in e?e.locale:void 0:r.locale,a=t+`%`+n+`%`+i;if(A.has(a))return;A.add(a)}e.prefetch(t,n,r).catch(e=>{})}}function M(e){let t=e.currentTarget.getAttribute(`target`);return t&&t!==`_self`||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&e.nativeEvent.which===2}function N(e,t,n,r,i,a,o,s,c){let{nodeName:l}=e.currentTarget;if(!(l.toUpperCase()===`A`&&M(e)||e.currentTarget.hasAttribute(`download`))){if(!(0,x.isLocalURL)(n)){i&&(e.preventDefault(),location.replace(n));return}e.preventDefault(),(()=>{if(c){let e=!1;if(c({preventDefault:()=>{e=!0}}),e)return}let e=o??!0;`beforePopState`in t?t[i?`replace`:`push`](n,r,{shallow:a,locale:s,scroll:e}):t[i?`replace`:`push`](r||n,{scroll:e})})()}}function P(e){return typeof e==`string`?e:(0,S.formatUrl)(e)}var F=h.default.forwardRef(function(e,t){let n,{href:r,as:i,children:a,prefetch:o=null,passHref:s,replace:c,shallow:u,scroll:d,locale:f,onClick:p,onNavigate:m,onMouseEnter:_,onTouchStart:v,legacyBehavior:y=!1,transitionTypes:b,...x}=e;n=a,y&&(typeof n==`string`||typeof n==`number`)&&(n=(0,l.jsx)(`a`,{children:n}));let S=h.default.useContext(T.RouterContext),A=o!==!1,{href:M,as:F}=h.default.useMemo(()=>{if(!S){let e=P(r);return{href:e,as:i?P(i):e}}let[e,t]=(0,g.resolveHref)(S,r,!0);return{href:e,as:i?(0,g.resolveHref)(S,i):t||e}},[S,r,i]),I=h.default.useRef(M),L=h.default.useRef(F),R;y&&(R=h.default.Children.only(n));let z=y?R&&typeof R==`object`&&R.ref:t,[B,V,H]=(0,E.useIntersection)({rootMargin:`200px`}),U=h.default.useCallback(e=>{(L.current!==F||I.current!==M)&&(H(),L.current=F,I.current=M),B(e)},[F,M,H,B]),W=(0,k.useMergedRef)(U,z);h.default.useEffect(()=>{S&&(!V||!A||j(S,M,F,{locale:f}))},[F,M,V,f,A,S?.locale,S]);let G={ref:W,onClick(e){!y&&typeof p==`function`&&p(e),y&&R.props&&typeof R.props.onClick==`function`&&R.props.onClick(e),S&&(e.defaultPrevented||N(e,S,M,F,c,u,d,f,m))},onMouseEnter(e){!y&&typeof _==`function`&&_(e),y&&R.props&&typeof R.props.onMouseEnter==`function`&&R.props.onMouseEnter(e),S&&j(S,M,F,{locale:f,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){!y&&typeof v==`function`&&v(e),y&&R.props&&typeof R.props.onTouchStart==`function`&&R.props.onTouchStart(e),S&&j(S,M,F,{locale:f,priority:!0,bypassPrefetchedCheck:!0})}};if((0,C.isAbsoluteUrl)(F))G.href=F;else if(!y||s||R.type===`a`&&!(`href`in R.props)){let e=f===void 0?S?.locale:f;G.href=S?.isLocaleDomain&&(0,D.getDomainLocale)(F,e,S?.locales,S?.domainLocales)||(0,O.addBasePath)((0,w.addLocale)(F,e,S?.defaultLocale))}return y?h.default.cloneElement(R,G):(0,l.jsx)(`a`,{...x,...G,children:n})}),I=(0,h.createContext)({pending:!1}),L=()=>(0,h.useContext)(I),R=F;(typeof e.default==`function`||typeof e.default==`object`&&e.default!==null)&&e.default.__esModule===void 0&&(Object.defineProperty(e.default,`__esModule`,{value:!0}),Object.assign(e.default,e),t.exports=e.default)})),S=n(((e,t)=>{t.exports=x()}));function C({children:e}){return(0,k.jsx)(`header`,{className:`border-rule sticky top-0 z-50 border-b saturate-150 backdrop-blur-[10px]`,children:(0,k.jsx)(`div`,{className:`flex items-center justify-between px-8 py-[14px]`,children:e})})}function w(){return(0,k.jsxs)(`span`,{className:`text-ink font-sans font-semibold tracking-tight`,children:[`josoe`,(0,k.jsx)(`span`,{className:`text-ochre`,children:`.`})]})}function T({children:e}){return(0,k.jsx)(`nav`,{"aria-label":`Main`,className:`flex gap-[18px]`,children:e})}function E({href:e,active:t,onNav:n,children:r}){return(0,k.jsx)(A.default,{href:e,onClick:()=>n?.(e),"aria-current":t?`page`:void 0,className:`font-sans text-sm no-underline ${t?`text-ochre`:`text-ink-2`}`,children:r})}function D({children:e}){return(0,k.jsx)(`div`,{className:`flex items-center gap-4`,children:e})}function O({theme:e,onTheme:t}){return(0,k.jsx)(g,{variant:`secondary`,size:`compact`,className:`text-ink-2`,onClick:t,"aria-pressed":e===`ink`,children:e===`paper`?`dark`:`light`})}var k,A,j,M=e((()=>{k=m(),A=t(S()),h(),j={Root:C,Brand:w,Links:T,Link:E,Actions:D,ThemeToggle:O}})),N,P,F,I,L,R,z,B,V;e((()=>{N=m(),M(),P={title:`Components/Nav`},F={render:()=>(0,N.jsxs)(j.Root,{children:[(0,N.jsx)(j.Brand,{}),(0,N.jsxs)(j.Actions,{children:[(0,N.jsxs)(j.Links,{children:[(0,N.jsx)(j.Link,{href:`/essays`,active:!0,onNav:()=>{},children:`essays`}),(0,N.jsx)(j.Link,{href:`/projects`,onNav:()=>{},children:`projects`}),(0,N.jsx)(j.Link,{href:`/now`,onNav:()=>{},children:`now`})]}),(0,N.jsx)(j.ThemeToggle,{theme:`paper`,onTheme:()=>{}})]})]})},I={render:()=>(0,N.jsxs)(j.Root,{children:[(0,N.jsx)(j.Brand,{}),(0,N.jsxs)(j.Actions,{children:[(0,N.jsxs)(j.Links,{children:[(0,N.jsx)(j.Link,{href:`/essays`,active:!0,onNav:()=>{},children:`essays`}),(0,N.jsx)(j.Link,{href:`/projects`,onNav:()=>{},children:`projects`}),(0,N.jsx)(j.Link,{href:`/now`,onNav:()=>{},children:`now`})]}),(0,N.jsx)(j.ThemeToggle,{theme:`paper`,onTheme:()=>{}})]})]})},L={render:()=>(0,N.jsx)(`div`,{"data-theme":`ink`,className:`bg-ink min-h-screen`,children:(0,N.jsxs)(j.Root,{children:[(0,N.jsx)(j.Brand,{}),(0,N.jsxs)(j.Actions,{children:[(0,N.jsxs)(j.Links,{children:[(0,N.jsx)(j.Link,{href:`/essays`,active:!0,onNav:()=>{},children:`essays`}),(0,N.jsx)(j.Link,{href:`/projects`,onNav:()=>{},children:`projects`}),(0,N.jsx)(j.Link,{href:`/now`,onNav:()=>{},children:`now`})]}),(0,N.jsx)(j.ThemeToggle,{theme:`ink`,onTheme:()=>{}})]})]})})},R={render:()=>(0,N.jsx)(j.Root,{children:(0,N.jsx)(j.Brand,{})})},z={render:()=>(0,N.jsx)(j.Link,{href:`/essays`,active:!0,onNav:()=>{},children:`essays`})},B={render:()=>(0,N.jsx)(j.Link,{href:`/essays`,onNav:()=>{},children:`essays`})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Nav.Root>
      <Nav.Brand />
      <Nav.Actions>
        <Nav.Links>
          <Nav.Link href="/essays" active onNav={() => {}}>
            essays
          </Nav.Link>
          <Nav.Link href="/projects" onNav={() => {}}>
            projects
          </Nav.Link>
          <Nav.Link href="/now" onNav={() => {}}>
            now
          </Nav.Link>
        </Nav.Links>
        <Nav.ThemeToggle theme="paper" onTheme={() => {}} />
      </Nav.Actions>
    </Nav.Root>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Nav.Root>
      <Nav.Brand />
      <Nav.Actions>
        <Nav.Links>
          <Nav.Link href="/essays" active onNav={() => {}}>
            essays
          </Nav.Link>
          <Nav.Link href="/projects" onNav={() => {}}>
            projects
          </Nav.Link>
          <Nav.Link href="/now" onNav={() => {}}>
            now
          </Nav.Link>
        </Nav.Links>
        <Nav.ThemeToggle theme="paper" onTheme={() => {}} />
      </Nav.Actions>
    </Nav.Root>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div data-theme="ink" className="bg-ink min-h-screen">
      <Nav.Root>
        <Nav.Brand />
        <Nav.Actions>
          <Nav.Links>
            <Nav.Link href="/essays" active onNav={() => {}}>
              essays
            </Nav.Link>
            <Nav.Link href="/projects" onNav={() => {}}>
              projects
            </Nav.Link>
            <Nav.Link href="/now" onNav={() => {}}>
              now
            </Nav.Link>
          </Nav.Links>
          <Nav.ThemeToggle theme="ink" onTheme={() => {}} />
        </Nav.Actions>
      </Nav.Root>
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Nav.Root>
      <Nav.Brand />
    </Nav.Root>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Nav.Link href="/essays" active onNav={() => {}}>
      essays
    </Nav.Link>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Nav.Link href="/essays" onNav={() => {}}>
      essays
    </Nav.Link>
}`,...B.parameters?.docs?.source}}},V=[`Default`,`WithActiveLink`,`DarkTheme`,`BrandOnly`,`LinkActive`,`LinkInactive`]}))();export{R as BrandOnly,L as DarkTheme,F as Default,z as LinkActive,B as LinkInactive,I as WithActiveLink,V as __namedExportsOrder,P as default};