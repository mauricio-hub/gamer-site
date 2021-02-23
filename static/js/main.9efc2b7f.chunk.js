(this["webpackJsonpreact-app-db"]=this["webpackJsonpreact-app-db"]||[]).push([[0],{73:function(t,e,n){"use strict";n.r(e);var a,c,r,i,s,o,d,b,l,g,m,p,u,j=n(0),h=n.n(j),O=n(22),A=n.n(O),f=n(4),x=n(13),w=n(16),v=n.n(w),E=n(21),y=n(17),k=n.n(y),I="https://api.rawg.io/api/",C=(new Date).getFullYear(),S=function(){var t=(new Date).getMonth()+1;return t<10?"0".concat(t):t}(),D=function(){var t=(new Date).getDay();return t<10?"0".concat(t):t}(),R="".concat(C,"-").concat(S,"-").concat(D),U="".concat(C-1,"-").concat(S,"-").concat(D),B="".concat(C+1,"-").concat(S,"-").concat(D),L="games?dates=".concat(U,",").concat(R,"&ordering=-rating&page_size=9"),N="games?dates=".concat(R,",").concat(B,"&ordering=-added&page_size=9"),z="games?dates=".concat(U,",").concat(R,"&ordering=-realease"),T=function(t){return"".concat(I,"games/").concat(t,"/screenshots")},G=function(t){return"".concat(I,"games?search=").concat(t,"&page_size=9")},H=n(5),J=n(6),_=function(t){return function(){var e=Object(E.a)(v.a.mark((function e(n){var a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"LOADING_DETAIL"}),e.next=3,k.a.get((r=t,"".concat(I,"games/").concat(r)));case 3:return a=e.sent,e.next=6,k.a.get(T(t));case 6:c=e.sent,n({type:"GET_DETAIL",payload:{game:a.data,screen:c.data}});case 8:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=n(18),V=function(t,e){return t.match(/media\/screenshots/)?t.replace("media/screenshots","media/resize/".concat(e,"/-/screenshots")):t.replace("/media/games/","/media/resize/".concat(e,"/-/games/"))},X=n(1),M=function(t){var e=t.name,n=t.released,a=t.image,c=t.id,r=c.toString(),i=Object(x.b)();return Object(X.jsx)(P,{LayoutId:r,onClick:function(){document.body.style.overflow="hidden",i(_(c))},children:Object(X.jsxs)(Z.b,{to:"/game/".concat(c),children:[Object(X.jsx)("h3",{children:e}),Object(X.jsx)("p",{children:n}),Object(X.jsx)(J.a.img,{LayoutId:"image ".concat(r),src:V(a,640),alt:e})]})})},P=Object(H.b)(J.a.div)(a||(a=Object(f.a)(["\n\tmin-height:30vh;\n\tbox-shadow:0px 5px 30px rgba(0,0,0,0.4);\n\ttext-align:center;\n\tborder-radius:1rem;\n\tcursor:pointer;\n\toverflow:hidden;\n\timg{\n\t\twidth:100%;\n\t\theight:40vh;\n\t\tobject-fit:cover;\n\t}\n"]))),F=n(3),W=n.p+"static/media/playstation.18cc4b9c.svg",Q=n.p+"static/media/steam.d7b8819f.svg",Y=n.p+"static/media/xbox.3e7db735.svg",K=n.p+"static/media/nintendo.f579be04.svg",q=n.p+"static/media/apple.5757c37e.svg",$=n.p+"static/media/gamepad.c9269ef5.svg",tt=Object(H.b)(J.a.div)(c||(c=Object(f.a)(["\n\twidth:100%;\n\tmin-height:100vh;\n\toverflow-y:scroll;\n\tbackground:#f4f9f9;\n\tbackground:rgba(0,0,0,0.5);\n\tposition:fixed;\n\ttop:0;\n\tleft:0;\n\tz-index:5;\n\t&::-webkit-scrollbar{\n\t\twidth:0.5rem;\n\t}\n\t&::-webkit-scrollbar-thumb{\n\t\tbackground-color:#ff7676;\n\t}\n\t&::-webkit-scrollbar-track{\n\t\tbackground:white;\n\t}\n"]))),et=Object(H.b)(J.a.div)(r||(r=Object(f.a)(["\n\twidth:80%;\n\tborder-radius:1rem;\n\tpadding:2rem 5rem;\n\tbackground:white;\n\tposition:absolute;\n\tleft:10%;\n\tcolor:black;\n\tz-index:10;\n\timg{\n\t\twidth:100%;\n\t}\n\n"]))),nt=Object(H.b)(J.a.div)(i||(i=Object(f.a)(["\n\tdisplay:flex;\n\talign-item:center;\n\tjustify-content:space-between;\n\timg{\n\t\twidth:2rem;\n\t\theight:2rem;\n\t\tdisplay:inline;\n\t}\n"]))),at=Object(H.b)(J.a.div)(s||(s=Object(f.a)(["\n\ttext-align:center;\n"]))),ct=Object(H.b)(J.a.div)(o||(o=Object(f.a)(["\n\tdisplay:flex;\n\tjustify-content:space-evenly;\n\timg{\n\t\tmargin-left:3rem;\n\t}\n"]))),rt=Object(H.b)(J.a.div)(d||(d=Object(f.a)(["\n\tmargin-top:5rem;\n\n\timg{\n\t\twidth:100%;\n\t\t\n\t}\n"]))),it=Object(H.b)(J.a.div)(b||(b=Object(f.a)(["\n\tmargin:5rem 0rem;\n"]))),st=function(t){var e=t.pathId,n=Object(F.e)(),a=Object(x.c)((function(t){return t.detail})),c=a.screen,r=a.game,i=a.isLoading,s=function(t){switch(t){case"PlayStation 4":return W;case"Xbox one":return Y;case"PC":return Q;case"Nintendo Switch":return K;case"iOS":return q;default:return $}};return Object(X.jsx)(X.Fragment,{children:!i&&Object(X.jsx)(tt,{className:"shadow",onClick:function(t){t.target.classList.contains("shadow")&&(document.body.style.overflow="auto",n.push("/"))},children:Object(X.jsxs)(et,{LayoutId:e,children:[Object(X.jsxs)(nt,{children:[Object(X.jsxs)("div",{className:"rating",children:[Object(X.jsx)("h2",{children:r.name}),Object(X.jsxs)("p",{children:["Rating:",r.rating]}),Object(X.jsx)("p",{children:function(){for(var t=[],e=Math.floor(r.rating),n=1;n<=5;n++)n<=e?t.push(Object(X.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg==",alt:"star"},n)):t.push(Object(X.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII=",alt:"star"},n));return t}()})]}),Object(X.jsxs)(at,{children:[Object(X.jsx)("h3",{children:"Plataformas"}),Object(X.jsx)(ct,{children:r.platforms.map((function(t){return Object(X.jsx)("img",{alt:t.platform.name,src:s(t.platform.name)},t.platform.id)}))})]})]}),Object(X.jsx)(rt,{children:Object(X.jsx)("img",{src:V(r.background_image,1280),alt:r.background_image})}),Object(X.jsx)(it,{children:Object(X.jsx)("p",{children:r.description_raw})}),Object(X.jsx)("div",{className:"gallery",children:c.results.map((function(t){return Object(X.jsx)("img",{src:V(t.image,1280),alt:t.image},t.id)}))})]})})})},ot=function(){var t=Object(F.f)().pathname.split("/")[2],e=Object(x.b)();Object(j.useEffect)((function(){e(function(){var t=Object(E.a)(v.a.mark((function t(e){var n,a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("".concat(I).concat(L));case 2:return n=t.sent,t.next=5,k.a.get("".concat(I).concat(N));case 5:return a=t.sent,t.next=8,k.a.get("".concat(I).concat(z));case 8:c=t.sent,e({type:"FETCH_GAMES",payload:{popular:n.data.results,newGames:a.data.results,upcoming:c.data.results}});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e]);var n=Object(x.c)((function(t){return t.games})),a=n.popular,c=n.newGames,r=n.upcoming,i=n.searched;return Object(X.jsxs)(dt,{children:[t&&Object(X.jsx)(st,{pathId:t}),i.length?Object(X.jsxs)("div",{className:"searched",children:[Object(X.jsx)("h2",{children:"Juegos Encontrados"}),Object(X.jsx)(bt,{children:i.map((function(t){return Object(X.jsx)(M,{name:t.name,released:t.released,id:t.id,image:t.background_image,clip:t.clip},t.id)}))})]}):"",Object(X.jsx)("h2",{children:"Proximos Juegos"}),Object(X.jsx)(bt,{children:r.map((function(t){return Object(X.jsx)(M,{name:t.name,released:t.released,id:t.id,image:t.background_image,clip:t.clip},t.id)}))}),Object(X.jsx)("h2",{children:"Juegos Populares"}),Object(X.jsx)(bt,{children:a.map((function(t){return Object(X.jsx)(M,{name:t.name,released:t.released,id:t.id,image:t.background_image,clip:t.clip},t.id)}))}),Object(X.jsx)("h2",{children:"Juegos Nuevos"}),Object(X.jsx)(bt,{children:c.map((function(t){return Object(X.jsx)(M,{name:t.name,released:t.released,id:t.id,image:t.background_image,clip:t.clip},t.id)}))})]})},dt=Object(H.b)(J.a.div)(l||(l=Object(f.a)(["\n\t\n\tpadding : 0rem 5rem;\n\n\th2{\n\t\tpadding: 5rem 0rem;\n\t}\n\n"]))),bt=Object(H.b)(J.a.div)(g||(g=Object(f.a)(["\n\tminHeight : 80vh;\n\tdisplay:grid;\n\tgrid-template-columns: repeat( auto-fit, minmax(500px, 1fr) );\n\tgrid-column-gap:3rem;\n\tgrid-row-gap:5rem;\n\n\n"]))),lt=Object(H.a)(m||(m=Object(f.a)(["\n\t*{\n\t\tmargin:0;\n\t\tpadding:0;\n\t\tbox-sizing:border-box;\n\t}\n\n\thtml{\n\t\t&::-webkit-scrollbar{\n\t\t\twidth:0.5rem;\n\t\t}\n\t\t&::-webkit-scrollbar-thumb{\n\t\t\tbackground-color:darkgrey;\n\t\t}\n\t\t&::-webkit-scrollbar-track{\n\t\tbackground:white;\n\t}\n\n\t\tbody{\n\t\t\tfont-family: 'Roboto', sans-serif;\n\t\t\twidth : 100%;\n\t\t\tbackground:#f4f9f9;\n\t\t\n\t\t}\n\n\t\th1{\n\t\t\tmargin-top:20px;\n\t\t\ttext-align:center;\t\n\t\t\tfont-size:4rem;\n\t\t\tfont-family: 'Big Shoulders Inline Display', cursive;\n\t\t\tcolor:rgb(228, 71, 82);\n\t\t\tfont-weight:900;\n\t\t\tletter-spacing: 5px;\n\n\t\t}\n\t\th2{\n\t\t\tfont-size:3rem;\n\t\t\tfont-family: 'Montserrat', sans-serif;\n\t\t\tcolor:#333;\n\t\t\tfont-weight:300;\n\n\t\t}\n\t\th3{\n\t\t\tfont-size:1.3rem;\n\t\t\tcolor:#333;\n\t\t\tpadding:1.5rem 0rem;\n\t\t}\n\t\tp{\n\t\t\tfont-size:1.2rem;\n\t\t\tline-height:200%;\n\t\t\tcolor:#696969;\n\t\t}\n\t\ta{\n\t\t\ttext-decoration:none;\n\t\t\tcolor:#333;\n\t\t}\n\n\t\timg{\n\t\t\tdisplay:block;\n\t\t}\n\t}\n\n\tinput{\n\t\twidth:30%;\n\t\tfont-size:1.5rem;\n\t\tpadding:0.5rem;\n\t\tborder:none;\n\t\tmargin-top:1rem;\n\t\tbox-shadow:0px 0px 30px rgba(0,0,0,0.4);\n\t\toutline:none;\n\t\tfont-weight:bold;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\n"]))),gt=n(44),mt=(n.p,Object(H.b)(J.a.nav)(p||(p=Object(f.a)(["\n  padding: 3rem 5rem;\n  text-align: center;\n  input {\n    width: 30%;\n    font-size: 1.5rem;\n    padding: 0.5rem;\n    border: none;\n    margin-top: 1rem;\n\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n  }\n  button {\n    font-size: 1.5rem;\n    border: none;\n    padding: 0.5rem 2rem;\n    cursor: pointer;\n    background: #ff7676;\n    color: white;\n    margin:10px;\n  }\n"])))),pt=Object(H.b)(J.a.div)(u||(u=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  cursor: pointer;\n \n"]))),ut=function(){var t=Object(x.b)(),e=Object(j.useState)(""),n=Object(gt.a)(e,2),a=n[0],c=n[1];return Object(X.jsxs)(mt,{children:[Object(X.jsx)(pt,{onClick:function(){t({type:"CLEAR_SEARCHED"})},children:Object(X.jsx)("h1",{children:"Gamer Site"})}),Object(X.jsxs)("form",{className:"search",children:[Object(X.jsx)("input",{value:a,onChange:function(t){c(t.target.value)},type:"text"}),Object(X.jsx)("button",{onClick:function(e){var n;e.preventDefault(),t((n=a,function(){var t=Object(E.a)(v.a.mark((function t(e){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get(G(n));case 2:a=t.sent,e({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),c("")},type:"submit",children:"Buscar"})]})]})};var jt=function(){return Object(X.jsxs)("div",{className:"App",children:[Object(X.jsx)(lt,{}),Object(X.jsxs)(F.a,{path:["/game/:id","/"],children:[Object(X.jsx)(ut,{}),Object(X.jsx)(ot,{})]})]})},ht=n(15),Ot=n(8),At={popular:[],newGames:[],upcoming:[],searched:[]},ft=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_GAMES":return Object(Ot.a)(Object(Ot.a)({},t),{},{popular:e.payload.popular,newGames:e.payload.newGames,upcoming:e.payload.upcoming});case"FETCH_SEARCHED":return Object(Ot.a)(Object(Ot.a)({},t),{},{searched:e.payload.searched});case"CLEAR_SEARCHED":return Object(Ot.a)(Object(Ot.a)({},t),{},{searched:[]});default:return Object(Ot.a)({},t)}},xt={game:{platforms:[]},screen:{results:[]},isLoading:!0},wt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_DETAIL":return Object(Ot.a)(Object(Ot.a)({},t),{},{game:e.payload.game,screen:e.payload.screen,isLoading:!1});case"LOADING_DETAIL":return Object(Ot.a)(Object(Ot.a)({},t),{},{isLoading:!0});default:return Object(Ot.a)({},t)}},vt=Object(ht.c)({games:ft,detail:wt}),Et=n(43),yt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ht.d,kt=Object(ht.e)(vt,yt(Object(ht.a)(Et.a)));A.a.render(Object(X.jsx)(h.a.StrictMode,{children:Object(X.jsx)(x.a,{store:kt,children:Object(X.jsx)(Z.a,{children:Object(X.jsx)(jt,{})})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.9efc2b7f.chunk.js.map