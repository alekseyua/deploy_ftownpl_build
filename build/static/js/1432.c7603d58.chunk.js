"use strict";(self.webpackChunkftownpl=self.webpackChunkftownpl||[]).push([[1432],{1432:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var a=r(2791),t=r(8478),i=r(7689),c=r(5378),o=r(9044),s=(r(5423),"styles_catalog-search__header__fhMrG"),l="styles_catalog-search__fXqWc",u="styles_catalog-search__wrap__YVIbW",d="styles_catalog-search__line__waQkn",_="styles_catalog-search__container__MMnRf",h=r(184),g=function(e){var n=e.count,r=e.product;return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsxs)("p",{className:l,children:[n," ",r]}),(0,h.jsx)("hr",{className:d})]})},f=function(e){var n=e.text;return(0,h.jsx)("h1",{className:s,children:n})},m=function(e){var n=e.children;return(0,h.jsx)("div",{className:_,children:n})},p=function(e){var n=e.children;return(0,h.jsx)("div",{className:u,children:n})},v={InfoOfSearch:a.memo(g),HeaderOfSearch:a.memo(f),Container:a.memo(m),SearchWrapper:a.memo(p)},x=r(524),b=r(7358),j=r(244),P=r(6429),S=(0,c.Z)((function(){return Promise.all([r.e(6476),r.e(3784)]).then(r.bind(r,3784))})),C=function(e){var n=e.handlerChangePaginations,r=e.currentPage,t=e.showMore,i=e.textSearchStore,c=e.gotoPrevPage,s=e.breadcrumbs,l=e.currency,u=e.search,d=e.role;return Object.keys(u).length?(0,h.jsx)(a.Fragment,{children:(0,h.jsxs)(x.Z.Container,{children:[(0,h.jsx)(b.Z,{breadcrumbs:s}),(0,h.jsx)(v.Container,{children:(0,h.jsx)(v.HeaderOfSearch,{text:'\u041f\u043e\u043a\u0430\u0437\u0430\u043d \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0434\u043b\u044f "'.concat(i,'"')})}),(0,h.jsxs)(v.SearchWrapper,{children:[u.results.map((function(e){return(0,h.jsx)(S,{role:d,title:e.title,id:e.id,url:e.url,brand:e.brand,prices:e.prices,stock:e.stock,colors:e.colors,sizes:e.sizes,images:e.images,isSales:e.isSales,isNew:e.isNew,isHit:e.isHit,is_liked:e.is_liked,product_rc:e.product_rc,article:e.article,currency:l},"".concat(e.title,"-").concat(e.id))})),(0,h.jsxs)(v.Container,{children:[null!==u&&void 0!==u&&u.results.length&&30*r<(null===u||void 0===u?void 0:u.count)?(0,h.jsx)(o.default,{full:!0,onClick:t,variant:"show_more",children:(0,h.jsx)(P.Z,{text:"show.more"})}):null,null!==u&&void 0!==u&&u.results.length?(0,h.jsx)(j.Z,{location:"center",count:30,allCount:null===u||void 0===u?void 0:u.count,currentPage:null!==r&&void 0!==r?r:1,handlerChangePaginations:n}):null]})]})]})}):(0,h.jsx)(a.Fragment,{children:(0,h.jsxs)(x.Z.Container,{children:[(0,h.jsx)(b.Z,{breadcrumbs:s}),(0,h.jsxs)(v.Container,{children:[(0,h.jsx)(v.HeaderOfSearch,{text:"\u041f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),(0,h.jsxs)(o.default,{onClick:c,variant:"catalog-link-uppercase",children:["<"," \u043d\u0430\u0437\u0430\u0434 \u043a \u0440\u0430\u0437\u0434\u0435\u043b\u0443"]})]})]})})},w=function(e){var n,r=e.breadcrumbs,a=e.currency,c=e.role,o=(0,t.bI)("search","textSearchStore"),s=o.dispatch,l=o.search,u=o.textSearchStore,d=(0,i.s0)();return(0,h.jsx)(C,{handlerChangePaginations:function(e){s("getProductSearch",{page:e})},currentPage:null!==(n=null===l||void 0===l?void 0:l.currentPage)&&void 0!==n?n:1,showMore:function(){var e={page:(null===l||void 0===l?void 0:l.currentPage)+1};s("getProductSearch",e)},textSearchStore:u,gotoPrevPage:function(){d(-1)},breadcrumbs:r,currency:a,search:l,role:c})},y=function(e){var n=e.context,r=(0,t.bI)("currency").currency,a=n.breadcrumbs,i=n.profile.role;return(0,h.jsx)(w,{breadcrumbs:a,currency:r,role:i})}},7358:function(e,n,r){r.d(n,{Z:function(){return l}});var a=r(2791),t=r(1087),i="styles_breadcrumbs-wrapper__link__8giDx",c="styles_breadcrumbs-wrapper__9OZPR",o="styles_breadcrumbs-wrapper__arrow__Pg3WS",s=r(184),l=function(e){var n=e.breadcrumbs,r=void 0===n?[]:n;return(0,s.jsx)("div",{className:c,children:r.map((function(e,n){return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)(t.rU,{className:i,to:""===e.slug?"/":"/".concat(e.slug),children:e.title}),r.length-1!==n?(0,s.jsx)("span",{className:o,children:">"}):null]},n)}))})}},244:function(e,n,r){r.d(n,{Z:function(){return u}});var a=r(6459),t=r(9439),i=r(4925),c=r(2791),o={pagination__container:"pagination_pagination__container__okr96","pagination__inner-container":"pagination_pagination__inner-container__I4F39",pagination__item:"pagination_pagination__item__gS+bg","pagination__item-active":"pagination_pagination__item-active__FGmiL"},s=r(184),l=["handlerChangePaginations","isLoadingPagination","searchCount","currentPage","allCount","count"],u=function(e){var n=e.handlerChangePaginations,r=e.isLoadingPagination,u=e.searchCount,d=void 0===u?0:u,_=e.currentPage,h=void 0===_?1:_,g=e.allCount,f=void 0===g?0:g,m=e.count,p=void 0===m?0:m,v=(0,i.Z)(e,l),x=(0,c.useState)("pagination__item-active"),b=(0,t.Z)(x,2),j=b[0],P=b[1],S=(0,c.useState)("center"),C=(0,t.Z)(S,2),w=C[0],y=C[1],k=(0,c.useState)(h),Z=(0,t.Z)(k,2),N=Z[0],M=Z[1];(0,a.Z)(v);var F=Math.ceil((d||f)/p),O=new Array(F).fill("").map((function(e,n){return n+1}));(0,c.useEffect)((function(){switch(M(h),v.location){case"left":y("start");break;case"right":y("end");break;default:y("center")}}),[h]),(0,c.useEffect)((function(){d>0&&(F=Math.ceil(d/p))}),[d]);var H=function(e){var r=+e.target.id;M(r),P("pagination__item-active"),n(r);var a=setTimeout((function(){return window.scrollTo(0,0),function(){return clearTimeout(a)}}),900)};return(0,s.jsx)("div",{className:o.pagination__container,style:{justifyContent:w,pointerEvents:r?"none":"all",cursor:r?"not-allowed":"none"},children:(0,s.jsx)("div",{className:o["pagination__inner-container"],children:O.map((function(e){return F>1?(0,s.jsx)("div",{id:e,className:N===e?o[j]:o.pagination__item,onClick:H,style:{display:N-1===e||N-2===e||N===e||N+1===e||N+2===e?"flex":"none"},children:e},e):null}))})})}}}]);
//# sourceMappingURL=1432.c7603d58.chunk.js.map