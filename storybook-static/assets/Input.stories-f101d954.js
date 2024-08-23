import{C as c,j as e}from"./constants-e937329e.js";import{r as $}from"./index-8365acb2.js";const ee="_inputContainer_ab9ss_1",re="_bordered_ab9ss_21",oe="_eyeIcon_ab9ss_41",te="_helperText_ab9ss_67",t={inputContainer:ee,bordered:re,eyeIcon:oe,helperText:te},se=""+new URL("eye-f1604087.svg",import.meta.url).href,ae=""+new URL("eyeOff-2a4d60f8.svg",import.meta.url).href,Y=({backgroundColor:u,value:E,width:N,placeholder:F,height:O,borderRadius:L,borderWidth:U="1px",borderStyle:H="solid",borderColor:b,padding:g="0px",isPassword:r=!1,helperText:x,helperTextColor:B="error_stroke",helperTextFontSize:G="16px"})=>{const[o,J]=$.useState(!1),K=b?c[b]:"#ccc",M=u?c[u]:"transparent",Q=c[B],X=()=>{J(!o)};return e.jsxs("div",{className:t.inputContainer,style:{width:N},children:[e.jsx("input",{type:r&&o?"text":r?"password":"text",name:"input",placeholder:F,value:E,onChange:Z=>console.log(Z.target.value),style:{backgroundColor:M,width:"100%",height:O,borderRadius:L,borderWidth:U,borderStyle:H,borderColor:K,padding:g,paddingRight:r?"40px":g,boxSizing:"border-box"},className:t.bordered}),r&&e.jsx("button",{type:"button",onClick:X,className:t.eyeIcon,"aria-label":o?"Hide password":"Show password",children:e.jsx("img",{src:o?se:ae,alt:""})}),x&&e.jsx("div",{className:t.helperText,style:{color:Q,fontSize:G},children:x})]})};Y.__docgenInfo={description:"",methods:[],displayName:"Input",props:{backgroundColor:{required:!1,tsType:{name:"unknown"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:""},borderWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"1px"',computed:!1}},borderStyle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"solid"',computed:!1}},borderColor:{required:!1,tsType:{name:"unknown"},description:""},padding:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"0px"',computed:!1}},isPassword:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},helperTextColor:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:'"error_stroke"',computed:!1}},helperTextFontSize:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"16px"',computed:!1}}}};const ie={title:"Components/Input",component:Y,tags:["autodocs"],argTypes:{value:{control:"text"},width:{control:"text"},height:{control:"text"},borderRadius:{control:"text"},borderWidth:{control:"text"},borderStyle:{control:"text"},borderColor:{control:"select",options:["accent","button_bg_hover","button_bg_active","tertiary_stroke","error_stroke"]},backgroundColor:{control:"select",options:["accent","bg_white","button_bg_hover","button_bg_active","tertiary_stroke","error_stroke","input_disabled"]},padding:{control:"text"},placeholder:{control:"text"},isPassword:{control:"boolean"},helperText:{control:"text"},helperTextColor:{control:"select",options:["accent","button_bg_hover","button_bg_active","tertiary_stroke","error_stroke"]},helperTextFontSize:{control:"text"}}},s={args:{placeholder:"Your email",width:"400px",height:"52px",borderRadius:"12px",borderWidth:"1px",borderStyle:"solid",borderColor:"tertiary_stroke",padding:"16px",isPassword:!1,backgroundColor:"bg_white"}},a={args:{placeholder:"Password",width:"400px",height:"52px",borderRadius:"12px",borderWidth:"1px",borderStyle:"solid",borderColor:"tertiary_stroke",padding:"16px",isPassword:!0,backgroundColor:"bg_white"}},d={args:{value:"froggy@gmail.c",width:"400px",height:"52px",borderRadius:"12px",borderWidth:"2px",borderStyle:"solid",borderColor:"accent",padding:"16px",isPassword:!1,backgroundColor:"bg_white"}},n={args:{value:"Your password",width:"400px",height:"52px",borderRadius:"12px",borderWidth:"1px",borderStyle:"solid",borderColor:"tertiary_stroke",padding:"16px",isPassword:!0,backgroundColor:"bg_white"}},i={args:{value:"froggy@gmail.c",width:"400px",height:"52px",borderRadius:"12px",borderWidth:"1px",borderStyle:"solid",borderColor:"tertiary_stroke",padding:"16px",isPassword:!1,backgroundColor:"bg_white"}},l={args:{value:"email.com",width:"400px",height:"52px",borderRadius:"12px",borderWidth:"2px",borderStyle:"solid",borderColor:"error_stroke",padding:"16px",isPassword:!1,backgroundColor:"bg_white",helperText:"Invalid email format",helperTextColor:"error_stroke",helperTextFontSize:"14px"}},p={args:{placeholder:"Your email",width:"400px",height:"52px",borderRadius:"12px",borderWidth:"2px",borderStyle:"solid",borderColor:"tertiary_stroke",padding:"16px",isPassword:!1,backgroundColor:"input_disabled"}};var h,m,_;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: "Your email",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "tertiary_stroke",
    padding: "16px",
    isPassword: false,
    backgroundColor: "bg_white"
  }
}`,...(_=(m=s.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var w,y,f;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: "Password",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "tertiary_stroke",
    padding: "16px",
    isPassword: true,
    backgroundColor: "bg_white"
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var C,k,v;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: "froggy@gmail.c",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "accent",
    padding: "16px",
    isPassword: false,
    backgroundColor: "bg_white"
  }
}`,...(v=(k=d.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var S,T,R;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: "Your password",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "tertiary_stroke",
    padding: "16px",
    isPassword: true,
    backgroundColor: "bg_white"
  }
}`,...(R=(T=n.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var P,W,q;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: "froggy@gmail.c",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "tertiary_stroke",
    padding: "16px",
    isPassword: false,
    backgroundColor: "bg_white"
  }
}`,...(q=(W=i.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var I,j,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: "email.com",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "error_stroke",
    padding: "16px",
    isPassword: false,
    backgroundColor: "bg_white",
    helperText: "Invalid email format",
    helperTextColor: "error_stroke",
    helperTextFontSize: "14px"
  }
}`,...(z=(j=l.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var A,D,V;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    placeholder: "Your email",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "tertiary_stroke",
    padding: "16px",
    isPassword: false,
    backgroundColor: "input_disabled"
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const le=["Default","Default_password_eye_on","Active","Active_password","After_active","Error","Disabled"];export{d as Active,n as Active_password,i as After_active,s as Default,a as Default_password_eye_on,p as Disabled,l as Error,le as __namedExportsOrder,ie as default};
