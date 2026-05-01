import{n as e}from"./chunk-BEldbCjX.js";import{u as t}from"./iframe-D6d4QXiA.js";function n({items:e}){return(0,r.jsx)(`dl`,{children:e.map(e=>(0,r.jsxs)(`div`,{className:`border-rule grid grid-cols-[160px_1fr] border-b py-3`,children:[(0,r.jsx)(`dt`,{className:`text-ink-3 font-mono text-[0.6875rem] tracking-[0.04em] uppercase`,children:e.label}),(0,r.jsxs)(`dd`,{className:`font-serif text-base`,children:[e.value,e.note&&(0,r.jsx)(`span`,{className:`text-ink-3 ml-1.5 italic`,children:e.note})]})]},e.label))})}var r,i=e((()=>{r=t(),n.__docgenInfo={description:``,methods:[],displayName:`NowList`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  label: string;
  value: string;
  note?: string;
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}},{key:`note`,value:{name:`string`,required:!1}}]}}],raw:`NowListItem[]`},description:``}}}})),a,o,s,c;e((()=>{a=t(),i(),o={title:`Components/NowList`,component:n},s={render:()=>(0,a.jsx)(n,{items:[{label:`location`,value:`lisbon`},{label:`reading`,value:`the remains of the day`,note:`ishiguro`},{label:`building`,value:`this site`},{label:`listening`,value:`burial — untrue`}]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <NowList items={[{
    label: "location",
    value: "lisbon"
  }, {
    label: "reading",
    value: "the remains of the day",
    note: "ishiguro"
  }, {
    label: "building",
    value: "this site"
  }, {
    label: "listening",
    value: "burial — untrue"
  }]} />
}`,...s.parameters?.docs?.source}}},c=[`Default`]}))();export{s as Default,c as __namedExportsOrder,o as default};