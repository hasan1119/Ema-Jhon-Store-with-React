(this["webpackJsonpema-john-simple"]=this["webpackJsonpema-john-simple"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(6),a=c.n(r),i=(c(14),c(9)),d=c(4),l=(c(15),c(0)),j=function(e){return Object(l.jsx)("span",{className:e.headStyle,children:e.quantity})},o=c.p+"static/media/logo.0dd9a510.png",b=(c(17),function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)("img",{style:{width:"250px"},src:o,alt:""})}),Object(l.jsxs)("nav",{style:{background:"black"},children:[Object(l.jsx)("a",{href:"/shop",children:"Shop"}),Object(l.jsx)("a",{href:"/review",children:"Order Review"}),Object(l.jsx)("a",{href:"/inventory",children:"Manage INventory header"})]}),Object(l.jsxs)("div",{className:"d-flex py-3 justify-content-center  bg-dark",children:[Object(l.jsx)("input",{onChange:e.eventHandler,className:"w-75",type:"text",placeholder:"search here"}),Object(l.jsx)("div",{className:"ms-2",children:Object(l.jsxs)("button",{className:"btn",children:[Object(l.jsx)("i",{className:"fas fa-cart-arrow-down text-white fs-4"}),Object(l.jsx)(j,{quantity:e.quantity,headStyle:"text-white fs-5 ms-2"})]})})]})]})}),x=c(7),h=(c(18),function(e){var t,c=e.selected.length,s=0,n=0,r=Object(x.a)(e.selected);try{for(r.s();!(t=r.n()).done;){var a=t.value;s+=a.price,n+=a.shipping}}catch(o){r.e(o)}finally{r.f()}var i=(s/100*10).toFixed(2),d=Number(s)+Number(n)+Number(i);return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"border",children:[Object(l.jsx)("h3",{children:"Order Summary"}),Object(l.jsxs)("p",{children:["Items ordered:",Object(l.jsx)(j,{quantity:c,headStyle:"text-danger fs-6"})]}),Object(l.jsx)("hr",{className:"m-0"}),Object(l.jsx)("table",{className:"table",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-start",children:"Price:"}),Object(l.jsxs)("td",{className:"text-start",children:["$",s.toFixed(2)]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-start",children:"Shipping & Handling: "}),Object(l.jsxs)("td",{className:"text-start",children:["$",n.toFixed(2)]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-start",children:"Total before tax: "}),Object(l.jsxs)("td",{className:"text-start",children:["$",(s+n).toFixed(2)]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-start",children:"Estimated Tax (10%): "}),Object(l.jsxs)("td",{className:"text-start",children:["$",i]})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-start text-danger fs-3",children:"Order Total:"}),Object(l.jsxs)("td",{className:"text-start text-danger fs-3",children:["$",d.toFixed(2)]})]})]})}),Object(l.jsx)("button",{style:{background:"goldenrod",border:"1px solid grey",marginBottom:"10px",padding:"2px 10px",borderRadius:"5px"},children:"Review your order"})]})})}),u=c(8);function O(e){var t=e.product,c=e.eventHandlerFunc;return Object(l.jsxs)("div",{className:"row p-2 border my-3",children:[Object(l.jsx)("div",{className:"product-image col-3",children:Object(l.jsx)("img",{className:"img-fluid",src:t.img,alt:""})}),Object(l.jsxs)("div",{className:"col-9",children:[Object(l.jsx)("h6",{className:"text-primary",children:t.name}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-5",children:[Object(l.jsxs)("p",{children:["by: ",t.seller]}),Object(l.jsxs)("p",{children:["Price: $",t.price]}),Object(l.jsxs)("p",{children:["Shipping: $",t.shipping]}),Object(l.jsxs)("p",{children:["only ",t.stock," left in stock - order soon"]}),Object(l.jsxs)("button",{onClick:function(){return c(t.key)},className:"btn py-0 px-5",style:{background:"goldenrod"},children:[Object(l.jsx)("i",{className:"fas fa-cart-arrow-down"}),"add to cart"]})]}),Object(l.jsxs)("div",{className:"col-7",children:[Object(l.jsx)(u.a,{style:{color:"goldenrod"},initialRating:t.star,emptySymbol:"far fa-star",fullSymbol:"fa fa-star",readonly:!0}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h5",{children:"Features"}),Object(l.jsx)("ul",{children:t.features.map((function(e){return Object(l.jsxs)("li",{children:[null===e||void 0===e?void 0:e.description,": ",Object(l.jsx)("b",{children:null===e||void 0===e?void 0:e.value})]},e.description)}))})]})]})]})]})]})}var m=function(e){var t=e.products;return Object(l.jsx)("div",{children:Object(l.jsx)("div",{children:t.map((function(t){return Object(l.jsx)(O,{eventHandlerFunc:e.eventHandlerFunc,product:t},t.key)}))})})},f=(c(19),function(e){var t=e.products,c=e.selected;return Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"shop row",children:[Object(l.jsx)("h1",{className:"col-1",children:" "}),Object(l.jsx)("div",{className:"col-8",children:Object(l.jsx)(m,{eventHandlerFunc:e.eventHandlerFunc,products:t})}),Object(l.jsx)("div",{className:"col-3 text-center border my-3 order",children:Object(l.jsx)(h,{selected:c,className:"text-dark"})})]})})});var p=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)([]),a=Object(d.a)(r,2),j=a[0],o=a[1],x=Object(s.useState)([]),h=Object(d.a)(x,2),u=h[0],O=h[1];return Object(s.useEffect)((function(){fetch("./products.JSON").then((function(e){return e.json()})).then((function(e){o(e),n(e)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{quantity:u.length,eventHandler:function(e){var t=e.target.value,s=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));o(s)}}),Object(l.jsx)(f,{eventHandlerFunc:function(e){var t=j.find((function(t){return t.key===e})),c=[].concat(Object(i.a)(u),[t]);O(c)},products:j,selected:u})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.3633c359.chunk.js.map