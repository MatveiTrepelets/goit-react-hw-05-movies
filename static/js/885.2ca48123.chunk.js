"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[885],{910:function(e,t,n){n.d(t,{Z:function(){return m}});var r="MovieGallery_gallery__Oyx2w",s=n(87),i=n(689),a="MovieCard_poster__oqG-U",c="MovieCard_title__d8n7V",o="MovieCard_container__IvRZB",u="MovieCard_link__5Vqwp",l=n(723),_=n(184),d=function(e){var t=e.item,n=t.backdrop_path,r=t.title,d=t.poster_path,m=t.id,f=n||d,h=(0,i.TH)();return(0,_.jsx)("li",{className:o,children:(0,_.jsxs)(s.OL,{className:u,to:"/movies/".concat(m),state:{from:h},children:[f?(0,_.jsx)("img",{className:a,src:"https://image.tmdb.org/t/p/w500"+f,alt:r}):(0,_.jsx)(l.Z,{className:a,noText:"NO POSTER"}),(0,_.jsx)("p",{className:c,children:r})]})})},m=function(e){var t=e.items;return(0,_.jsx)("ul",{className:r,children:t.map((function(e){return(0,_.jsx)(d,{item:e},e.id)}))})}},885:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(439),s="Home_title__L087v",i=n(390),a=n(910),c=n(791),o=n(184),u=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],u=t[1];return(0,c.useEffect)((function(){i.Z.getTrending().then((function(e){return e.json()})).then((function(e){return u(e.results)})).catch((function(e){return u("")}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:s,children:"Trending today"}),(0,o.jsx)(a.Z,{items:n||[]})]})}}}]);
//# sourceMappingURL=885.2ca48123.chunk.js.map