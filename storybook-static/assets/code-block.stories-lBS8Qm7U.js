import{n as e}from"./chunk-BEldbCjX.js";import{u as t}from"./iframe-D6d4QXiA.js";function n({file:e,lang:t,lines:n,children:i}){return(0,r.jsxs)(`figure`,{children:[e&&(0,r.jsxs)(`figcaption`,{className:`text-ink-3 mb-1 font-mono text-[0.6875rem] tracking-[0.02em]`,children:[(0,r.jsx)(`span`,{className:`text-ochre`,children:e}),t&&(0,r.jsxs)(`span`,{children:[` · `,t]}),n&&(0,r.jsxs)(`span`,{children:[` · `,n]})]}),(0,r.jsx)(`pre`,{className:`bg-bg-sunken border-rule overflow-x-auto rounded-sm border px-4 py-3.5 font-mono text-[0.8125rem] leading-[1.65]`,children:i})]})}var r,i=e((()=>{r=t(),n.__docgenInfo={description:``,methods:[],displayName:`CodeBlock`,props:{file:{required:!1,tsType:{name:`string`},description:``},lang:{required:!1,tsType:{name:`string`},description:``},lines:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),a,o,s,c,l;e((()=>{a=t(),i(),o={title:`Components/CodeBlock`,component:n},s={render:()=>(0,a.jsx)(n,{file:`app/layout.tsx`,lang:`tsx`,lines:`1-12`,children:`export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`})},c={render:()=>(0,a.jsx)(n,{children:`const x = 1 + 1; // 2`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <CodeBlock file="app/layout.tsx" lang="tsx" lines="1-12">
      {\`export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}\`}
    </CodeBlock>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <CodeBlock>{\`const x = 1 + 1; // 2\`}</CodeBlock>
}`,...c.parameters?.docs?.source}}},l=[`WithCaption`,`Minimal`]}))();export{c as Minimal,s as WithCaption,l as __namedExportsOrder,o as default};