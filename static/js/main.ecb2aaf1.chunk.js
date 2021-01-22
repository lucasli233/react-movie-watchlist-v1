(this["webpackJsonpreact-movie-watchlist-v1"]=this["webpackJsonpreact-movie-watchlist-v1"]||[]).push([[0],{14:function(e,t,a){e.exports={navBar:"Header_navBar__2gQSn",innerContent:"Header_innerContent__3OlgA",brand:"Header_brand__2MCxw",navLinks:"Header_navLinks__KsnjT"}},15:function(e,t,a){e.exports={moviePage:"Watchlist_moviePage__2zaIL",header:"Watchlist_header__AZ0U1",countPill:"Watchlist_countPill__AmjZ0",heading:"Watchlist_heading__2nxn2",movieGrid:"Watchlist_movieGrid__200Wc",noMovies:"Watchlist_noMovies__31hEO"}},21:function(e,t,a){e.exports={ctrlBtn:"MovieControls_ctrlBtn__3x8Q6"}},22:function(e,t,a){e.exports={addContent:"Add_addContent__1bAPU",inputWrapper:"Add_inputWrapper__2ZdOi",results:"Add_results__2ybxW"}},35:function(e,t,a){},41:function(e,t,a){e.exports={movieCard:"MovieCard_movieCard__38eW7",overlay:"MovieCard_overlay__2aLFB"}},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(2),n=a.n(s),r=a(25),i=a.n(r),l=(a(35),a(8)),d=a(3),o=a(14),j=a.n(o),h=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("header",{className:j.a.navBar,children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:j.a.innerContent,children:[Object(c.jsx)("div",{className:j.a.brand,children:Object(c.jsx)(l.b,{to:"/",children:"Movie Watch List"})}),Object(c.jsxs)("ul",{className:j.a.navLinks,children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",children:"Watch List"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/watched",children:"Watched"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/add",className:"navButton",children:"Add"})})]})]})})})})},b=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Watched page"})})},u=a(13),O=a(29),_=a(23),v=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(_.a)(Object(_.a)({},e),{},{watchlist:[t.payload].concat(Object(O.a)(e.watchlist))});default:return e}},x={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},m=Object(s.createContext)(x),p=function(e){var t=Object(s.useReducer)(v,x),a=Object(u.a)(t,2),n=a[0],r=a[1];Object(s.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(n.watchlist)),localStorage.setItem("watched",JSON.stringify(n.watched))}),[n]);return Object(c.jsx)(m.Provider,{value:{watchlist:n.watchlist,watched:n.watched,addMovieToWatchList:function(e){r({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})}},children:e.children})},f=a(27),g=a(28),C=a(21),N=a.n(C),w=function(e){e.movie;var t=e.type;return Object(c.jsx)("div",{className:"innerCardControls",children:"watchlist"===t&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:N.a.ctrlBtn,children:Object(c.jsx)(f.a,{})}),Object(c.jsx)("button",{className:N.a.ctrlBtn,children:Object(c.jsx)(g.a,{})})]})})},W=(a(41),function(e){var t=e.movie,a=e.type;return Object(c.jsxs)("div",{className:"movieCard",children:[Object(c.jsx)("div",{className:"overlay"}),Object(c.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}),Object(c.jsx)(w,{type:a,movie:t})]})}),y=a(15),S=a.n(y),P=function(){var e=Object(s.useContext)(m).watchlist;return Object(c.jsx)("div",{className:S.a.moviePage,children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:S.a.header,children:Object(c.jsx)("div",{className:S.a.heading,children:"My Watchlist"})}),e.length>0?Object(c.jsx)("div",{className:S.a.movieGrid,children:e.map((function(e){return Object(c.jsx)(W,{movie:e,type:"watchlist"})}))}):Object(c.jsx)("h2",{className:"noMovies",children:"No movies in your list, go add some!"})]})})},L=a(9),M=a.n(L),A=function(e){var t=e.movie,a=Object(s.useContext)(m),n=a.addMovieToWatchList,r=!!a.watchlist.find((function(e){return e.id===t.id}));return Object(c.jsxs)("div",{className:M.a.resultCard,children:[Object(c.jsx)("div",{className:M.a.posterWrapper,children:t.poster_path?Object(c.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):Object(c.jsx)("div",{className:M.a.fillerPoster})}),Object(c.jsxs)("div",{className:M.a.info,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:M.a.title,children:t.title}),Object(c.jsx)("h4",{className:M.a.releaseDate,children:t.release_date?t.release_date.substring(0,4):"-"})]}),Object(c.jsx)("div",{className:M.a.controls,children:Object(c.jsx)("button",{className:M.a.btn,disabled:r,onClick:function(){return n(t)},children:"Add to Watchlist"})})]})]})},I=a(22),B=a.n(I),T=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)([]),i=Object(u.a)(r,2),l=i[0],d=i[1];return Object(c.jsx)("div",{className:"add-page",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:B.a.addContent,children:[Object(c.jsx)("div",{className:B.a.inputWrapper,children:Object(c.jsx)("input",{type:"text",placeholder:"Search for a movie",value:a,onChange:function(e){e.preventDefault(),n(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("398f4afbe998073c17f9f3c74f8830d6","&language=en-US&page=1&include_adult=false&query=").concat(e.target.value)).then((function(e){return e.json()})).then((function(e){e.errors?d([]):d(e.results)}))}})}),l.length>0&&Object(c.jsx)("ul",{className:"results",children:l.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(A,{movie:e})},e.id)}))})]})})})};a(42);var R=function(){return Object(c.jsx)(p,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(h,{}),Object(c.jsxs)(d.b,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(P,{})}),Object(c.jsx)(l.a,{path:"/watched",children:Object(c.jsx)(b,{})}),Object(c.jsx)(l.a,{path:"/add",children:Object(c.jsx)(T,{})})]})]})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(R,{})}),document.getElementById("root")),D()},9:function(e,t,a){e.exports={resultCard:"ResultCard_resultCard__2n4mL",posterWrapper:"ResultCard_posterWrapper__10JfF",fillerPoster:"ResultCard_fillerPoster__19Nf-",info:"ResultCard_info__2Vs-Y",title:"ResultCard_title__3oURj",releaseDate:"ResultCard_releaseDate__3eJm9",controls:"ResultCard_controls__1PSX0",btn:"ResultCard_btn__1K7z8"}}},[[43,1,2]]]);
//# sourceMappingURL=main.ecb2aaf1.chunk.js.map