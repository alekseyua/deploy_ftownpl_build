/*! For license information please see 6086.ca0d35a8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkftownpl=self.webpackChunkftownpl||[]).push([[6086],{6086:function(e,t,i){i.r(t),i.d(t,{default:function(){return te}});var n=i(2791),r=i(8478),l=i(4942),o=i(1413),a=i(9439),s=i(6429),c=i(5378),u=i(6864),d=i(3786),h=(i(524),i(1949)),f=i(7358),g=i(368),y=i(4549),b=i(7108),m=i(4360),x=i(7385),F=i(9292),v=i(4588),j=i(9918),p=i(2592),Z=i(9310),_=i(9044),S=i(9136),k=i(8339),C=i(2923),D=i(184),w=function(e){var t=e.role,i=void 0===t?{number:2}:t,n=e.valueCheckBoxFilters,r=e.loadData;return(0,D.jsx)(C.Z,{valueCheckBoxFilters:n,handleChangeFilters:function(e){var t=e.checked,i=e.name;if(null!==e.checked){var a=(0,o.Z)((0,o.Z)({},n),{},(0,l.Z)({},i,!t));r(a)}},role:i})},L=i(4555),M=(i(5423),i(845)),P=i(7661),W=i(3433),B=i(4261),T=i(4906),A=function(e){var t=e.enabledFilterData,i=e.defaultFilterData,r=e.translateKey,l=e.resetContextFilter,o=e.translateItem,c=e.keyFilter,u=(0,n.useState)([]),d=(0,a.Z)(u,2),h=d[0],f=d[1];return(0,n.useEffect)((function(){var e=[],n=function(e){f(e?[{title:(0,s.Z)({text:o}),id:(0,B.Z)()}]:[])};"object"===typeof t[c]&&function(t){var n=function(n){var r=i["categories"===c?c="by_type":"brands"===c?c="by_brand":"colors"===c?c="by_color":"sizes"===c?c="by_size":c].filter((function(e){return e.id===t[n]}));e=[].concat((0,W.Z)(e),(0,W.Z)(r))};for(var r in t)n(r);f(e)}(t[c]),"boolean"===typeof t[c]&&n(t[c]),"boolean"===typeof t[c]&&"is_polish"===c&&n(!t[c]),"boolean"===typeof t[c]&&"is_import"===c&&n(!t[c])}),[t]),(0,D.jsx)(D.Fragment,{children:h.length?h.map((function(e){var t=(0,D.jsx)(s.Z,{text:r});return(0,D.jsx)(n.Fragment,{children:(0,D.jsx)(T.Z.Tag,{onClick:function(){return l(c,e.id)},title:e.title?e.title:"",filterType:t})},e.id)})):null})},I=i(244),z=i(1349),K=(0,c.Z)((function(){return i.e(4772).then(i.bind(i,4772))})),E=(0,c.Z)((function(){return i.e(1431).then(i.bind(i,1431))})),R=(0,c.Z)((function(){return i.e(110).then(i.bind(i,110))})),H=(0,c.Z)((function(){return i.e(6040).then(i.bind(i,6040))})),N=(0,c.Z)((function(){return i.e(2259).then(i.bind(i,2259))})),V=(0,c.Z)((function(){return i.e(3569).then(i.bind(i,3569))})),Y=(0,c.Z)((function(){return Promise.all([i.e(6476),i.e(3784)]).then(i.bind(i,3784))})),q=(0,c.Z)((function(){return Promise.all([i.e(6605),i.e(534),i.e(6476),i.e(2982)]).then(i.bind(i,6242))})),J=function(e){var t=e.isLoadingMyWishYouAlredy,i=e.isLoadingMyWishRecomended,r=e.breadcrumbs,l=e.setShowFilters,o=e.showFilters,a=e.isShowBtnSubmit,c=e.offsetTopBtnSubmit,C=e.youAlredyWatch,W=e.recommendedProducts,B=e.isLoadingMyWish,T=e.isLoading,J=e.content,O=e.dataProducts,G=e.valueProducts,Q=e.valueCheckBoxFilters,U=e.filterParams,X=e.currentPage,$=e.options,ee=e.currency,te=e.isMobile,ie=e.role,ne=e.isFilters,re=e.loadData,le=e.getTitleForDocument,oe=e.openBtnSubmit,ae=e.resetAllFilters,se=e.resetContextFilter,ce=e.checkIsShowCategorysAndProducType,ue=e.handlerChangePaginations,de=e.showMore,he=e.showMoreSpinner,fe=e.offsetLeftBtnSubmit;return(0,D.jsxs)(n.Fragment,{children:[(0,D.jsxs)(h.Z,{children:[(0,D.jsx)(f.Z,{breadcrumbs:r}),(0,D.jsxs)(n.Fragment,{children:[(0,D.jsx)(p.Z,{children:(0,D.jsx)(j.Z,{children:(0,D.jsx)(Z.Z,{variant:"catalog-heading",type:"h1",children:le(G)})})}),(0,D.jsx)(p.Z,{children:(0,D.jsxs)(n.Fragment,{children:[(0,D.jsxs)(m.Z,{children:[(0,D.jsx)(_.default,{full:!0,onClick:function(){l(!o)},onClickIcon:function(){l(!1)},classNameIcon:"catalog_mobile__icon",variant:o?"catalog_mobile__filter-closed":"catalog_mobile__filter",iconRight:o&&S.SJ,children:(0,D.jsx)(s.Z,{text:"filters"})}),(0,D.jsx)(b.Z,{isShowMobileFilters:o,catfilter:!0,children:(0,D.jsx)(u.J9,{enableReinitialize:!0,initialValues:U,onSubmit:function(e){re(e)},children:function(e){var t=e.handleSubmit,i=e.values,n=e.setValues;return(0,D.jsxs)(k.Z,{novalidate:!0,onClick:t,children:[(0,D.jsx)(y.Z,{isShowBtnSubmit:a,offsetLeftBtnSubmit:fe,offsetTop:c,onClick:function(){return t(i)}}),(0,D.jsx)(w,{valueCheckBoxFilters:Q,loadData:re,role:ie}),ce()?(0,D.jsx)(V,{categories:G.by_type,values:i,handleSubmit:t,setValues:n,openBtnSubmit:oe}):null,ie!==z.HB.RETAIL&&ie!==z.HB.UNREGISTRED?(0,D.jsx)(N,{brands:G.by_brand,values:i,openBtnSubmit:oe,setValues:n,role:ie}):null,(0,D.jsx)(R,{colors:G.by_color,values:i,setValues:n,openBtnSubmit:oe}),(0,D.jsx)(H,{sizes:G.by_size,values:i,setValues:n,openBtnSubmit:oe}),(0,D.jsxs)(b.Z,{mobBtns:!0,children:[(0,D.jsx)(_.default,{onClick:ae,variant:"catalog_mobile__clear",children:(0,D.jsx)(s.Z,{text:"reset.all"})}),(0,D.jsx)(_.default,{onClick:function(e){e.preventDefault(),t()},variant:"catalog_mobile__apply",children:(0,D.jsx)(s.Z,{text:"apply"})})]})]})}})})]}),(0,D.jsxs)(j.Z,{children:[J?(0,D.jsx)(L.Z,{variant:"catalog-wrapper",textWarning:J?(0,D.jsx)("span",{dangerouslySetInnerHTML:{__html:J}}):""}):null,T?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(x.Z,{valueOptionsSort:U.ordering,selectedSortFilters:function(e){return re({ordering:e})},options:$}),G.length?null:(0,D.jsxs)(F.Z,{children:[(0,D.jsx)(E,{enabledFilterData:U,defaultFilterData:$,translateKey:"options",resetContextFilter:se,keyFilter:"ordering"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,resetContextFilter:se,translateItem:"inStock",translateKey:"catalog",keyFilter:"is_in_stock"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,resetContextFilter:se,translateItem:"new",translateKey:"catalog",keyFilter:"is_new"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,resetContextFilter:se,translateItem:"hit",translateKey:"catalog",keyFilter:"is_bestseller"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,resetContextFilter:se,translateItem:"sell.out",translateKey:"catalog",keyFilter:"is_closeout"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,translateKey:"category",resetContextFilter:se,keyFilter:"categories"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,translateKey:"is_polish",resetContextFilter:se,keyFilter:"is_import"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,translateKey:"is_import",resetContextFilter:se,keyFilter:"is_polish"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,translateKey:"assembled",resetContextFilter:se,keyFilter:"is_in_collection"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,translateKey:"not.in.rows",resetContextFilter:se,keyFilter:"is_not_range"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,translateKey:"brand",resetContextFilter:se,keyFilter:"brands"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,translateKey:"color",resetContextFilter:se,keyFilter:"colors"}),(0,D.jsx)(A,{enabledFilterData:U,defaultFilterData:G,translateKey:"size",resetContextFilter:se,keyFilter:"sizes"}),ne(U,ae)]}),null!==O&&void 0!==O&&O.results.length||!o?null:(0,D.jsx)(g.Z,{}),null!==O&&void 0!==O&&O.results.length?(0,D.jsxs)(v.Z,{children:[O.results.map((function(e){return(0,D.jsx)(Y,{role:ie,title:e.title,id:e.id,url:e.url,brand:e.brand,prices:e.prices,stock:e.stock,colors:e.colors,sizes:e.sizes,images:e.images,isSales:e.isSales,isNew:e.isNew,isHit:e.isHit,is_liked:e.is_liked,product_rc:e.product_rc,article:e.article,isLoadingMyWish:B,currency:ee},"".concat(e.title,"-").concat(e.id))})),he?(0,D.jsx)(P.Z,{children:(0,D.jsx)(M.Z,{sizeHeight:"30",sizeWidth:"30"})}):null]}):(0,D.jsx)(K,{children:"\u041f\u041e \u0412\u0410\u0428\u0415\u041c\u0423 \u0417\u0410\u041f\u0420\u041e\u0421\u0423 \u041d\u0418\u0427\u0415\u0413\u041e \u041d\u0415 \u041d\u0410\u0419\u0414\u0415\u041d\u041e."}),(null===O||void 0===O?void 0:O.results.length)<(null===O||void 0===O?void 0:O.count)&&30*X<(null===O||void 0===O?void 0:O.count)?(0,D.jsx)(_.default,{full:!0,onClick:de,variant:"show_more",children:(0,D.jsx)(s.Z,{text:"show.more"})}):null,(0,D.jsx)(I.Z,{location:"left",count:te?10:30,allCount:null===O||void 0===O?void 0:O.count,currentPage:null!==X&&void 0!==X?X:1,handlerChangePaginations:ue})]}):(0,D.jsx)(P.Z,{children:(0,D.jsx)(M.Z,{sizeHeight:"30",sizeWidth:"30"})})]})]})})]})]}),(0,D.jsx)(q,{headerText:(0,s.Z)({text:"already.watched"}),youAlredyWatch:C,isLoadingMyWish:t,currency:ee,role:ie}),(0,D.jsx)(q,{youAlredyWatch:W,isLoadingMyWish:i,headerText:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u043e\u0435",currency:ee,role:ie}),(0,D.jsx)(d.Z,{offset:"catalog"})]})},O=i(4402),G=i(9542),Q=i(7499),U=i(7689),X=function(e){var t=e.isLoadingMyWishYouAlredy,i=e.isLoadingMyWishRecomended,c=e.recommendedProducts,u=e.isLoadingMyWish,d=e.youAlredyWatch,h=e.dataProducts,f=e.isMobile,g=e.breadcrumbs,y=e.currentPage,b=e.categories,m=void 0===b?[]:b,x=e.isLoading,F=e.currency,v=e.content,j=e.role,p=(0,U.TH)(),Z=(0,U.s0)(),_=(0,r.bI)("valueFilters","multyChoiseFilters"),S=_.dispatch,k=_.valueFilters,C=_.multyChoiseFilters,w=(0,n.useState)(!1),L=(0,a.Z)(w,2),M=L[0],P=L[1],W=(0,n.useState)(!1),B=(0,a.Z)(W,2),T=B[0],A=B[1],I=(0,n.useState)(0),z=(0,a.Z)(I,2),K=z[0],E=z[1],R=(0,n.useState)(0),H=(0,a.Z)(R,2),N=H[0],V=H[1],Y=(0,n.useState)(!1),q=(0,a.Z)(Y,2),X=q[0],$=q[1];(0,n.useEffect)((function(){var e=function(e){var t;"apply"!==e.target.getAttribute("name")&&"noClick"!==e.target.getAttribute("datanoclick")||$(!1),E(e.y),V(null===(t=document.querySelector("main"))||void 0===t?void 0:t.offsetLeft)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[]);return(0,n.useEffect)((function(){var e=setTimeout((function(){$(!1),clearTimeout(e)}),7e3);return function(){clearTimeout(e)}}),[X]),(0,n.useEffect)((function(){A(!1)}),[null===h||void 0===h?void 0:h.results.length]),(0,D.jsx)(n.Fragment,{children:(0,D.jsx)(J,{breadcrumbs:g,isLoadingMyWish:u,isLoadingMyWishYouAlredy:t,isLoadingMyWishRecomended:i,setShowFilters:P,showFilters:M,isShowBtnSubmit:X,offsetTopBtnSubmit:K,offsetLeftBtnSubmit:N,setOffsetTopBtnSubmit:E,youAlredyWatch:d,isLoading:x,content:v,getTitleForDocument:function(e){var t=e.category,i=void 0!==t&&t;return i?(0,O.j)(Number(i),m):(0,D.jsx)(s.Z,{text:"catalog"})},valueProducts:C,dataProducts:h,filterParams:k,currentPage:y,currency:F,options:G.Q7,recommendedProducts:c,isMobile:f,role:j,isFilters:function(e,t){var i=e.categories,n=void 0===i?[]:i,r=e.brands,l=void 0===r?[]:r,o=e.colors,a=void 0===o?[]:o,c=e.sizes,u=void 0===c?[]:c,d=e.is_bestseller,h=e.is_closeout,f=e.is_in_stock,g=e.is_new,y=e.is_import,b=e.is_polish,m=e.is_not_range,x=e.is_in_collection,F=e.ordering,v=e.type;if(n.length||l.length||a.length||u.length||v.length||d||h||f||g||m||x||F.length||!y||!b){var j=(0,D.jsx)(s.Z,{text:"clear.all"});return(0,D.jsx)(Q.Z,{onClick:t,title:j,isLabel:!1})}return null},loadData:function(e){P(!1),S("changeParamsFiltersNew",e),document.querySelector(".goto").scrollIntoView({block:"center",behavior:"smooth"})},showMore:function(){A(!0),S("showMoreCatalog",(0,o.Z)({},k))},openBtnSubmit:function(e){$(!0)},resetContextFilter:function(e,t){var i;"string"===typeof k[e]&&(i=""),"boolean"===typeof k[e]&&(i=!k[e]),"object"===typeof k[e]&&(i=k[e].filter((function(e){return e!==t}))),S("changeParamsFiltersNew",(0,o.Z)((0,o.Z)({},k),{},(0,l.Z)({},e,i)))},valueCheckBoxFilters:k,resetAllFilters:function(e){P(!1),e.preventDefault(),S("changeParamsFiltersNew",(0,o.Z)({},G.ng)),p.search&&Z("/catalog")},checkIsShowCategorysAndProducType:function(){return!0},handlerChangePaginations:function(e){var t=(0,o.Z)((0,o.Z)({},k),{},{page:e});S("getCatalog",t);var i=setTimeout((function(){return document.querySelector(".goto").scrollIntoView({block:"center",behavior:"smooth"}),function(){return clearTimeout(i)}}),3e3)},showMoreSpinner:T})})},$=n.memo(X),ee=function(e){var t=e.context,i=t.breadcrumbs,l=t.categories,o=t.page_info,a=t.profile,s=(0,r.bI)("currency","productStore","recommendedProductsStore","productYouAlredyWatchStore","isMobile"),c=s.productStore,u=s.isMobile,d=s.recommendedProductsStore,h=s.productYouAlredyWatchStore,f=s.currency,g=o.content,y=a.role;return console.log("CatalogPage",c),(0,D.jsx)(n.Fragment,{children:(0,D.jsx)($,{breadcrumbs:i,currentPage:null===c||void 0===c?void 0:c.currentPage,categories:l,currency:f,dataProducts:c,isLoading:null===c||void 0===c?void 0:c.isLoadingCatalog,isLoadingMyWish:c.isLoadingMyWish,isMobile:u,youAlredyWatch:h,isLoadingMyWishYouAlredy:h.isLoadingMyWish,recommendedProducts:d,isLoadingMyWishRecomended:d.isLoadingMyWish,content:g,role:y})})},te=n.memo(ee)}}]);
//# sourceMappingURL=6086.ca0d35a8.chunk.js.map