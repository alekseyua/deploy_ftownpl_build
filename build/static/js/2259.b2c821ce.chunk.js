"use strict";(self.webpackChunkftownpl=self.webpackChunkftownpl||[]).push([[2259],{2259:function(e,n,t){t.r(n);var r=t(3433),a=t(4942),i=t(1413),s=t(9439),u=t(2791),c=t(9610),l=t(165),o=t(6993),f=t(4261),d=(t(8478),t(184));n.default=function(e){var n=e.brands,t=void 0===n?[]:n,Z=e.values,b=void 0===Z?{brands:[]}:Z,v=e.openBtnSubmit,h=void 0!==v&&v,p=e.setValues,k=void 0===p?function(){}:p,S=e.role,g=void 0===S?{number:2}:S,m="brands",w=(0,u.useState)(""),C=(0,s.Z)(w,2),A=C[0],j=C[1],x=(0,u.useState)([]),y=(0,s.Z)(x,2),V=y[0],F=y[1],N=(0,u.useState)(!1),U=(0,s.Z)(N,2),B=U[0],E=U[1];(0,u.useEffect)((function(){F(t)}),[t]);return(0,d.jsx)(o.Z,{setSertificate:E,sertificate:B,resetFilter:function(e){k((0,i.Z)((0,i.Z)({},b),{},(0,a.Z)({},m,[]))),j(""),F(t)},sercheHandler:function(e){!function(e){var n=e.target.value;if(""===n)return j(n),F(t);var r=t.filter((function(e){return-1!==e.title.toUpperCase().search(n.toUpperCase())}));F(r),j(n)}(e)},sercheValue:A,role:g,is_visibleViewAll:V.length,children:V.map((function(e){var n=e.id,t=b.brands.includes(n);return(0,d.jsx)(l.Z,{children:(0,d.jsx)(c.Z,{checked:t,name:m,"data-cy":"brandFilters-".concat(e.id),onChange:function(e){return function(e,n){if("SPAN"!==e.tagName){var t=!!e.checked;if(Array.isArray(b.brands)||(b.brands=(0,r.Z)(b.brands)),t){var s=b.brands.filter((function(e){return e!==n}));k((0,i.Z)((0,i.Z)({},b),{},(0,a.Z)({},m,s)))}else k((0,i.Z)((0,i.Z)({},b),{},(0,a.Z)({},m,[].concat((0,r.Z)(b.brands),[n]))));h()}}(e,n)},variant:"light",label:e.title},(0,f.Z)())},n)}))})}}}]);
//# sourceMappingURL=2259.b2c821ce.chunk.js.map