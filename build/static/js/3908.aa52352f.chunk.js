"use strict";(self.webpackChunkftownpl=self.webpackChunkftownpl||[]).push([[3908],{9807:function(e,t,n){var i=n(2791),a=n(9217),c=n(184),s=function(e){var t=e.amountNotifications,n=e.cabinet_site_menu,i=e.cabinet_menu,s=(e.create_shop,e.is_has_shop),o=e.currency,r=e.username,l=e.balance,h=e.role,d=e.shop;return(0,c.jsxs)(a.Z.Container,{children:[(0,c.jsx)(a.Z.UserRoutingPanel,{amountNotifications:t,cabinet_menu:i,username:r,currency:o,balance:l,role:h}),s?(0,c.jsx)(a.Z.StoreRoutingPanel,{shop:d,cabinet_site_menu:n}):(0,c.jsx)(a.Z.CreateStore,{create_shop:"motivacionnaya-strannica-im",className:"desktop",role:h})]})};t.Z=i.memo(s)},3908:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var i=n(2791),a=n(8478),c=n(9439),s=n(524),o=n(7358),r=n(9807),l=n(6429),h="styles_cabinet-notifications__item-context__2V3wf",d="styles_cabinet-notifications__item-date__mmZQE",u="styles_cabinet-notifications__item-image-wrapper__0ayQ6",_="styles_cabinet-notifications__head__IQNPJ",m="styles_cabinet-notifications__mark__opEJz",b="styles_cabinet-notifications__delete__Pw4r0",f="styles_cabinet-notifications__item__KuYVL",g="styles_cabinet-notifications__item-cheked__hgp0C",N="styles_cabinet-notifications__item-wrapper__+ooH9",p="styles_cabinet-notifications__item-mark__dooak",k="styles_cabinet-notifications__item-mark--unread__X9ZNV",x="styles_cabinet-subtext__0JzSw",C="styles_cabinet-mobile__wrapper__GpDyg",v=n(184),j=function(e){var t=e.children;return(0,v.jsx)("div",{className:C,children:t})},y=i.memo(j),A=function(e){var t=e.children;return(0,v.jsx)("p",{className:x,children:t})},Z=i.memo(A),L=n(9136),P=n(9610),I=n(9044),S=n(9678),w=function(e){var t=e.heandlerReedNotic,n=e.heandlerDelNotic,i=e.heandlerCheckAllNotice,a=(e.stateActiveCheckNotice,e.stateCheck);return(0,v.jsxs)("div",{className:_,children:[(0,v.jsx)(P.Z,{onChange:function(e){i(e)},variant:"input",label:a?"\u0421\u043d\u044f\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f":"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0441\u0435",checked:a}),(0,v.jsx)(I.default,{onClick:t,variant:"text",size:"med",className:m,children:"\u041f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0435"}),(0,v.jsxs)(I.default,{onClick:n,variant:"text",size:"med",className:b,children:[(0,v.jsx)(S.default,{slot:"icon-left",src:L.ob,height:20,width:20}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]})},R=i.memo(w),E=n(3433),D=n(4942),z=n(1694),H=n.n(z),T=function(e){var t,n=e.isRead,i=e.date,a=void 0===i?"16 \u0434\u0435\u043a, 14:15":i,c=e.message,s=void 0===c?"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0443\u0441\u043b\u043e\u0432\u0438\u0439":c,o=e.selectItemsNotice,r=void 0===o?[]:o,l=e.heandlerCheckNotice,_=e.product_image_url,m=e.el.id;return(0,v.jsxs)("div",{className:f,children:[(0,v.jsxs)("div",{className:N,children:[(0,v.jsx)(P.Z,{id:m,className:g,onChange:function(e){var t=e.id;l(t)},variant:"input",checked:r.includes(m)}),(0,v.jsx)("span",{className:H()((t={},(0,D.Z)(t,p,!0),(0,D.Z)(t,k,!n),t))}),_?(0,v.jsx)("div",{className:u,children:(0,v.jsx)(S.default,{src:_,width:50,height:70})}):null,(0,v.jsx)("span",{className:h,dangerouslySetInnerHTML:{__html:s.split(" ").reduce((function(e,t,n,i){return"\u2116"===i[n]&&(t="<strong>\u2116"),"\u2116"===i[n-2]&&(t=i[n]+"</strong>&nbsp"),[].concat((0,E.Z)(e),[t])}),[]).join(" ")}})]}),(0,v.jsx)("span",{className:d,children:a})]})},G={Wrapper:y,Item:i.memo(T),Header:R,SubText:Z},K=n(244),J=n(9310),Q=n(5423),V=n(3786),W=(0,n(5378).Z)((function(){return n.e(4772).then(n.bind(n,4772))})),F=function(e){var t=e.heandlerCheckAllNotice,n=e.stateActiveCheckNotice,a=e.setAllCheckEnableChange,c=e.amountNotifications,s=e.allCheckEnableChange,o=e.heandlerCheckNotice,r=e.changePaginations,h=e.heandlerReedNotic,d=e.heandlerDelNotic,u=e.isLoadingAction,_=e.setCheckEnable,m=e.notifications,b=e.currentPage,f=(e.checkEnable,e.stateCheck),g=e.isLoading;return(0,v.jsxs)(i.Fragment,{children:[(0,v.jsx)(J.Z,{variant:"cabinet__heading",type:"h3",children:(0,l.Z)({text:"notifications"})}),(0,v.jsxs)(G.Wrapper,{children:[(0,v.jsx)(G.SubText,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0432\u0441\u0435\u0445 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u0438 \u043f\u0438\u0441\u0435\u043c \u043e\u0442 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),(0,v.jsx)(G.Header,{heandlerReedNotic:h,heandlerDelNotic:d,heandlerCheckAllNotice:t,stateActiveCheckNotice:n,stateCheck:f}),u?(0,v.jsx)(Q.Z.Spinner,{sizeWidth:30,sizeHeight:30,slot:"absolute-center"}):null,g?m.results.length?m.results.map((function(e){return(0,v.jsx)(G.Item,{setAllCheckEnableChange:a,allCheckEnableChange:s,heandlerCheckNotice:o,isRead:e.is_read,date:e.created_at,message:e.message,setCheckEnable:_,selectItemsNotice:m.selectItemsNotice,product_image_url:e.product_image_url,el:e},e.id)})):(0,v.jsxs)(J.Z,{variant:"lk-message",type:"h1",children:[(0,v.jsx)(V.Z,{offset:20}),"\u0423 \u0412\u0430\u0441 \u043d\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"]}):(0,v.jsx)(W,{text:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",children:"\u0423\u0412\u0415\u0414\u041e\u041c\u041b\u0415\u041d\u0418\u0419 \u041d\u0415 \u041d\u0410\u0419\u0414\u0415\u041d\u041e."})]}),g?(0,v.jsx)(K.Z,{allCount:c,count:30,handlerChangePaginations:r,currentPage:b}):null]})},M=function(e){var t=e.amountNotifications,n=e.cabinet_site_menu,a=e.isLoadingAction,c=e.cabinet_menu,l=e.breadcrumbs,h=e.currentPage,d=e.create_shop,u=e.is_has_shop,_=e.isLoading,m=e.username,b=e.currency,f=e.balance,g=e.shop,N=e.role,p=e.notifications,k=e.heandlerReedNotic,x=e.heandlerDelNotic,C=e.heandlerCheckAllNotice,j=e.stateActiveCheckNotice,y=e.changePaginations,A=e.heandlerCheckNotice,Z=e.stateCheck;return(0,v.jsx)(i.Fragment,{children:(0,v.jsxs)(s.Z.Container,{children:[(0,v.jsx)(o.Z,{breadcrumbs:l}),(0,v.jsxs)(s.Z.GridPageLK,{children:[(0,v.jsx)(s.Z.GridPageLeftLK,{children:(0,v.jsx)(r.Z,{amountNotifications:t,cabinet_site_menu:n,cabinet_menu:c,create_shop:d,is_has_shop:u,currency:b,username:m,balance:f,role:N,shop:g})}),(0,v.jsx)(s.Z.GridPageRightLK,{children:(0,v.jsx)(F,{heandlerCheckAllNotice:C,stateActiveCheckNotice:j,amountNotifications:t,heandlerCheckNotice:A,changePaginations:y,heandlerReedNotic:k,heandlerDelNotic:x,isLoadingAction:a,notifications:p,currentPage:h,stateCheck:Z,isLoading:_})})]})]})})},U=function(e){var t=e.amountNotifications,n=e.cabinet_site_menu,s=e.isLoadingAction,o=e.cabinet_menu,r=e.currentPage,l=e.breadcrumbs,h=e.create_shop,d=e.is_has_shop,u=e.isLoading,_=e.currency,m=e.username,b=e.balance,f=e.shop,g=e.role,N=(0,a.bI)("notificationTest"),p=N.dispatch,k=N.notificationTest,x=(0,i.useState)(!1),C=(0,c.Z)(x,2),j=C[0],y=C[1];return(0,v.jsx)(M,{amountNotifications:t,isSelectAllItems:k.isSelectAllItems,cabinet_site_menu:n,isLoadingAction:s,notifications:k,cabinet_menu:o,breadcrumbs:l,create_shop:h,is_has_shop:d,currentPage:r,stateCheck:j,isLoading:u,currency:_,username:m,balance:b,shop:f,role:g,heandlerReedNotic:function(){p("reedItemsNotice"),y(!1)},heandlerDelNotic:function(){p("deleteItemsNotice"),y(!1)},heandlerCheckAllNotice:function(e){var t={idItems:+e};y((function(e){return!e})),p("checkedAllItemsNotice",t)},heandlerCheckNotice:function(e){p("checkedItemsNotice",{idItem:+e})},stateActiveCheckNotice:k.isSelectAllItems,changePaginations:function(e){p("getNotice",{page:e})}})},X=function(e){var t=e.context,n=(0,a.bI)("currency","balanceStore"),i=n.currency,c=n.balanceStore,s=t.cabinet_site_menu,o=t.notifications,r=t.cabinet_menu,l=t.currentPage,h=t.breadcrumbs,d=t.isLoading,u=t.profile,_=t.shop,m=u.user,b=void 0===m?{}:m,f=u.role,g=null===u||void 0===u?void 0:u.notifications,N=b.username;return(0,v.jsx)(U,{currency:i,balance:c.balance,amountNotifications:g,cabinet_site_menu:s,isLoadingAction:null===d||void 0===d?void 0:d.isLoadingActionNotice,notifications:o,cabinet_menu:r,currentPage:l,breadcrumbs:h,create_shop:null===_||void 0===_?void 0:_.shop_link,is_has_shop:null===_||void 0===_?void 0:_.is_has_shop,username:N,isLoading:null===d||void 0===d?void 0:d.isLoadingNotice,shop:_,role:f,stateActiveCheckNotice:!1})}}}]);
//# sourceMappingURL=3908.aa52352f.chunk.js.map