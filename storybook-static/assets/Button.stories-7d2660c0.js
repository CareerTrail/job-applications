import{C as a,j as D}from"./constants-e937329e.js";import"./index-8365acb2.js";const B="_button_1al3d_1",V={button:B},y=({color:s,width:T,height:_,radius:v,padding:w,gap:S,border:z,fontSize:q,fontWeight:W,textTransform:k="none",disabled:r=!1,onClick:C})=>{const j={backgroundColor:s?a[s]:a.accent,color:a.bg_white,width:T,height:_,borderRadius:v||"auto",padding:w||"auto",gap:S||"auto",border:z||"none",fontSize:q||"auto",fontWeight:W||"auto",fontFamily:"Onest, sans-serif",textTransform:k,cursor:r?"not-allowed":"pointer",opacity:r?.5:1,display:"inline-flex",alignItems:"center",justifyContent:"center"};return D.jsx("button",{className:V.button,style:j,onClick:C,disabled:r,children:"Log in"})};y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{required:!1,tsType:{name:"unknown"},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},radius:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},gap:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},fontWeight:{required:!1,tsType:{name:"string"},description:""},textTransform:{required:!1,tsType:{name:"union",raw:'"none" | "capitalize" | "uppercase" | "lowercase"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"capitalize"'},{name:"literal",value:'"uppercase"'},{name:"literal",value:'"lowercase"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const H={title:"Components/Button",component:y,tags:["autodocs"],argTypes:{color:{control:"select",options:["accent","button_bg_hover","button_bg_active","tertiary_stroke"]},disabled:{control:"boolean"},width:{control:"text"},height:{control:"text"},radius:{control:"text"},padding:{control:"text"},gap:{control:"text"},fontSize:{control:"text"},fontWeight:{control:"text"},textTransform:{control:"select",options:["none","capitalize","uppercase","lowercase"],defaultValue:"none"}}},e={args:{color:"accent",width:"400px",height:"52px",radius:"12px",padding:"16px 207px",gap:"8px",fontSize:"16px",fontWeight:"500",textTransform:"none"}},t={args:{color:"button_bg_hover",width:"400px",height:"52px",radius:"12px",padding:"16px 207px",gap:"8px",fontSize:"16px",fontWeight:"500",textTransform:"none"}},n={args:{color:"button_bg_active",width:"400px",height:"52px",radius:"12px",padding:"16px 207px",gap:"8px",fontSize:"16px",fontWeight:"500",textTransform:"none"}},o={args:{color:"tertiary_stroke",width:"400px",height:"52px",radius:"12px",padding:"16px 207px",gap:"8px",fontSize:"16px",fontWeight:"500",textTransform:"none",disabled:!0}};var i,p,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: "accent",
    width: "400px",
    height: "52px",
    radius: "12px",
    padding: "16px 207px",
    gap: "8px",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none"
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: "button_bg_hover",
    width: "400px",
    height: "52px",
    radius: "12px",
    padding: "16px 207px",
    gap: "8px",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none"
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,x,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: "button_bg_active",
    width: "400px",
    height: "52px",
    radius: "12px",
    padding: "16px 207px",
    gap: "8px",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none"
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var m,h,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: "tertiary_stroke",
    width: "400px",
    height: "52px",
    radius: "12px",
    padding: "16px 207px",
    gap: "8px",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none",
    disabled: true
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const I=["Default","Hover","Active","Disabled"];export{n as Active,e as Default,o as Disabled,t as Hover,I as __namedExportsOrder,H as default};
