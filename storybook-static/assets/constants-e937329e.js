import{r as f}from"./index-8365acb2.js";var s={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=f,E=Symbol.for("react.element"),y=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,m=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,p){var t,n={},o=null,i=null;p!==void 0&&(o=""+p),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(i=r.ref);for(t in r)c.call(r,t)&&!v.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:E,type:e,key:o,ref:i,props:n,_owner:m.current}}_.Fragment=y;_.jsx=a;_.jsxs=a;s.exports=_;var x=s.exports,F=(e=>(e.accent="#FE6E06",e.button_bg_hover="#EA690C",e.button_bg_active="#DC6109",e.tertiary_stroke="#DEDEDE",e.bg_white="#FFFFFF",e.secondary="#929292",e.error_stroke="#C13515",e.input_disabled="#F9F9F9",e))(F||{});export{F as C,x as j};
