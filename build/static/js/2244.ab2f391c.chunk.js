"use strict";(self.webpackChunkftownpl=self.webpackChunkftownpl||[]).push([[2244],{2244:function(r,c,d){d.r(c),d.d(c,{default:function(){return j}});var t=d(3433),a=d(4925),_=(d(2791),d(8478)),e=d(4942),o=d(1087),i=d(1694),s=d.n(i),u=d(5378),l=d(6429),p=d(9044),n=d(9678),m=d(9136),h=d(2318),C=d(1349),v=d(184),x=(0,u.Z)((function(){return Promise.all([d.e(6605),d.e(9649)]).then(d.bind(d,9649))})),g=function(r){var c,d=r.swapperDisabled,t=r.disabledHover,a=r.isLoadingMyWish,_=r.title,i=r.role,u=r.id,g=r.url,k=r.brand,Z=r.prices,j=r.stock,f=r.colors,w=r.images,b=void 0===w?[]:w,N=r.isSales,y=r.isNew,z=r.isHit,H=r.sizes,L=r.currency,W=r.is_liked,R=r.handlerClick,P=r.handleQuickView,T=r.addLikeProductCard,I=r.removeLikeProductCard;return(0,v.jsx)("div",{className:[h.Z["product-card"]],children:(0,v.jsxs)("div",{className:h.Z["product-card__wrap"],children:[(0,v.jsxs)("div",{className:h.Z["product-card__top"],children:[(0,v.jsx)("div",{className:"product_card-hide_hydrate",children:(0,v.jsxs)("div",{className:h.Z["product-card__tags"],children:[N?(0,v.jsx)("div",{className:h.Z["product-card__tag"],children:(0,v.jsx)("img",{width:"20px",height:"20px",src:m.Bl,alt:(0,l.Z)({text:"sale"})})}):null,y?(0,v.jsx)("div",{className:h.Z["product-card__tag"],children:(0,v.jsx)("img",{width:"20px",height:"20px",src:m.Gl,alt:(0,l.Z)({text:"new"})})}):null,z?(0,v.jsx)("div",{className:h.Z["product-card__tag"],children:(0,v.jsx)("img",{width:"20px",height:"20px",src:m.dc,alt:(0,l.Z)({text:"hit"})})}):null]})}),j?(0,v.jsx)("div",{className:h.Z["product-card__stock"],children:(0,l.Z)({text:"inStock"})}):"",d?(0,v.jsx)("img",{src:b[0],alt:"default image"}):(0,v.jsx)(x,{url:g,images:b,id:u,handlerClick:R}),(0,v.jsxs)("div",{className:h.Z["product-card__head"],children:[i!==C.HB.UNREGISTRED&&i!==C.HB.RETAIL?(0,v.jsx)("h6",{className:h.Z["product-card__brand"],children:k}):null,(0,v.jsx)(p.default,{variant:"text",disabled:a,className:s()((0,e.Z)({},h.Z["product-card__favorite"],!0)),children:(0,v.jsx)("div",{children:(0,v.jsx)(n.default,{disabled:a,src:W?m.wY:m.k7,height:20,width:20,onClick:function(){W?I(u):T(u)}})})})]}),(0,v.jsx)("h5",{className:h.Z["product-card__name"],children:(0,v.jsx)(o.rU,{to:"/".concat(g),state:{test:"text test1"},children:_})}),(0,v.jsxs)("div",{className:h.Z["product-card__prices"],children:[(0,v.jsxs)("div",{className:s()((c={},(0,e.Z)(c,h.Z["product-card__price"],!0),(0,e.Z)(c,h.Z["product-card__price--new"],null===Z||void 0===Z?void 0:Z.old_price),c)),children:[Z.price," ",L]}),null!==Z&&void 0!==Z&&Z.old_price&&i!==C.HB.RETAIL&&i!==C.HB.UNREGISTRED?(0,v.jsxs)("div",{className:h.Z["product-card__price--old"],children:[null===Z||void 0===Z?void 0:Z.old_price," ",L]}):null]})]}),(0,v.jsx)("div",{className:h.Z["product-card__bottom--sizes"],children:(0,v.jsx)("ul",{className:h.Z["product-card__sizes"],children:H.map((function(r,c){return(0,v.jsx)("li",{className:h.Z["product-card__sizes--item"],children:r.title},c)}))})}),t?(0,v.jsx)("ul",{className:h.Z["product-card__colors"],children:f.map((function(r,c){return(0,v.jsx)("li",{className:h.Z["product-card__colors--item"],style:{backgroundColor:r.color}},c)}))}):(0,v.jsxs)("div",{className:h.Z["product-card__bottom"],children:[(0,v.jsx)("ul",{className:h.Z["product-card__colors"],children:f.map((function(r,c){return(0,v.jsx)("li",{className:h.Z["product-card__colors--item"],style:{backgroundColor:r.color}},c)}))}),(0,v.jsx)("span",{onClick:function(){return P(u,g)},className:h.Z["product-card__link"],children:(0,v.jsx)(l.Z,{text:"quickView"})})]})]})})},k=d(7689),Z=["key","id","url","title","role","brand","prices","stock","colors","sizes","images","isSales","isNew","isHit","is_liked","product_rc","article","currency","disabledHover","isLoadingMyWish"],j=function(r){var c=r.key,d=r.id,e=r.url,o=r.title,i=r.role,s=r.brand,u=r.prices,l=r.stock,p=r.colors,n=r.sizes,h=r.images,C=r.isSales,x=r.isNew,j=r.isHit,f=r.is_liked,w=r.product_rc,b=r.article,N=r.currency,y=r.disabledHover,z=r.isLoadingMyWish,H=void 0!==z&&z,L=((0,a.Z)(r,Z),(0,_.bI)().dispatch),W=(0,k.TH)(),R=(0,k.s0)(),P=[m.QG];return(0,v.jsx)(g,{id:d,url:e,role:i,brand:s,prices:u,stock:l,title:o,sizes:n,images:null!==h&&void 0!==h&&h.length?h:P,isNew:x,isHit:j,colors:p,isSales:C,is_liked:f,article:b,currency:N,product_rc:w,isLoadingMyWish:H,disabledHover:y,handlerClick:function(r){var c={id:d,title:o,category:"",brand:s,slug:"",minimum_rc:null,minimum_rc_price:null,media:(0,t.Z)(h),colors:p,sizes:(0,t.Z)(n),collections:[],is_new:x,is_bestseller:j,is_closeout:C,is_in_stock:l,is_liked:f,in_cart_count:0,in_stock_count:0,prices:u,product_rc:w,is_collection:!1,product_sku:[],content:"",extra:"",short_content:"",created_at:"",updated_at:"",ordering:0,review:{all_count:0,all_count_percent:0},seo_title:"",seo_keywords:"",seo_description:"",seo_author:"",seo_og_type:"website",seo_image:null,article:b,product_url:"",isLoadingProductData:!0};R("/".concat(r),{state:c})},handleQuickView:function(r,c){L("quickViewProduct",{id:r,url:c})},addLikeProductCard:function(r){var c={id:r,whereLike:"product",pathname:W.pathname,redirectTo:function(r){var c=setTimeout((function(){return R(r),function(){return clearTimeout(c)}}),500)}};L("addWishList",c)},removeLikeProductCard:function(r){var c={id:r,whereLike:"product",pathname:W.pathname,redirectTo:function(r){var c=setTimeout((function(){return R(r),function(){return clearTimeout(c)}}),500)}};L("removeWishList",c)}},c)}},2318:function(r,c){c.Z={"product-card__link":"productCard_product-card__link__JVDPi","product-card__price--old":"productCard_product-card__price--old__ci1nM","product-card__price--new":"productCard_product-card__price--new__7FW8W","product-card__price":"productCard_product-card__price__aPHWZ","product-card__name":"productCard_product-card__name__p0OcW","product-card__brand":"productCard_product-card__brand__wza7b","product-card__overlay":"productCard_product-card__overlay__u1C7Z","product-card__stock":"productCard_product-card__stock__wpJDM","product-card":"productCard_product-card__S0KAg","product-card__wrap":"productCard_product-card__wrap__Rsass","product-card__bottom":"productCard_product-card__bottom__qyv1V","product-card__top":"productCard_product-card__top__ROAc2","product-card__tags":"productCard_product-card__tags__-Au7R","product-card__slider":"productCard_product-card__slider__VFoiC","product-card__slider-pagination":"productCard_product-card__slider-pagination__3jPpY","product-card__option":"productCard_product-card__option__XVlpz","product-card__option-title":"productCard_product-card__option-title__ZfRDm","product-card__option-text_accent":"productCard_product-card__option-text_accent__vBsp8","product-card__image":"productCard_product-card__image__ldm5l","product-card__image-container":"productCard_product-card__image-container__Or9b4","product-card__image-item":"productCard_product-card__image-item__4RGfw","product-card__image-img":"productCard_product-card__image-img__CyncR","product-card__head":"productCard_product-card__head__A9fIJ","product-card__favorite":"productCard_product-card__favorite__3K9h2","product-card__prices":"productCard_product-card__prices__KfWgD","product-card__bottom--sizes":"productCard_product-card__bottom--sizes__xaWW6","product-card__colors":"productCard_product-card__colors__HApq1","product-card__colors--item":"productCard_product-card__colors--item__JvCH-","product-card__sizes":"productCard_product-card__sizes__zGzo5","product-card__sizes--item":"productCard_product-card__sizes--item__CZ4vv",like:"productCard_like__I2-iP",heart:"productCard_heart__tJO1+",line:"productCard_line__+dIjR",second:"productCard_second__OUGYk",main:"productCard_main__WIFqv",slidertimer:"productCard_slidertimer__qp86e"}}}]);
//# sourceMappingURL=2244.ab2f391c.chunk.js.map