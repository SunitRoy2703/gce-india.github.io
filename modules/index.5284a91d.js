var ie=Object.defineProperty,le=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var K=(t,r,n)=>r in t?ie(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,S=(t,r)=>{for(var n in r||(r={}))oe.call(r,n)&&K(t,n,r[n]);if(Y)for(var n of Y(r))de.call(r,n)&&K(t,n,r[n]);return t},W=(t,r)=>le(t,ce(r));import{j as e,a,N as ue,b as me,C as he,c as pe,d as T,e as _,F as H,U as ge,s as z,r as v,f as N,R as c,g as s,L as x,W as fe,u as q,h as L,i as D,k as j,l as F,m as I,n as B,o as u,p as G,q as O,t as be,v as ye,w as ve,x as xe,y as we,z as Ne,A as Ee,B as ke,D as Ae,E as V,G as Ce,H as Ie,I as Q,J as $e,K as R,M,O as Le,P as De,Q as Fe,S as Be,T as Re,V as Se,X as Te,Y as _e,Z as He,_ as je,$ as Ge,a0 as Oe,a1 as C,a2 as Ue,a3 as ze,a4 as J,a5 as Me,a6 as Pe,a7 as Ye,a8 as Ke}from"./vendor.74ea755c.js";const We=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}};We();const qe="Campus Experts India",X={English:"Hello!",Hindi:"\u0928\u092E\u0938\u094D\u0924\u0947 \u0964",Punjabi:"\u0A38\u0A24\u0A3F \u0A38\u0A3C\u0A4D\u0A30\u0A40 \u0A05\u0A15\u0A3E\u0A32 \u0964",Bangla:"\u09A8\u09AE\u09B8\u09CD\u0995\u09BE\u09B0 \u0964",Kashmiri:"\u0906\u0926\u093E\u092C \u0964",Urdu:"\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u0645\u06D4",UPBihar:"\u{110A3}\u{110A9}\u{1109D}\u{110B0}\u{110A7} \u{110C0}",Marathi:"\u0928\u092E\u0938\u094D\u0915\u093E\u0930 \u0964",Gujarati:"\u0AA8\u0AAE\u0AB8\u0ACD\u0AA4\u0AC7.",Tamil:"\u0BB5\u0BA3\u0B95\u0BCD\u0B95\u0BAE\u0BCD.",Malayalam:"\u0D28\u0D2E\u0D38\u0D4D\u0D15\u0D3E\u0D30\u0D02.",Telugu:"\u0C28\u0C2E\u0C38\u0C4D\u0C15\u0C30\u0C02.",Kannada:"\u0CA8\u0CAE\u0CB8\u0CCD\u0CA4\u0CC6.",Braj:"\u0930\u093E\u0927\u0947 \u0930\u093E\u0927\u0947 \u0964",Odia:"\u0B28\u0B2E\u0B38\u0B4D\u0B15\u0B3E\u0B30 \u0964",Tibetan:"\u0F56\u0F40\u0FB2\u0F0B\u0F64\u0F72\u0F66\u0F0B\u0F56\u0F51\u0F7A\u0F0B\u0F63\u0F7A\u0F42\u0F66\u0F0D",Manipuri:"\uABC8\uABE8\uABD4\uABE8\uABDD\uABD6\uABD4\uABE4 \uABEB",Marwari:"\u{11156}\u{1116C}\u{1116C}\u{11150} \u{11158}\u{11162}\u{11151} \u0964",Mizo:"Chibai!",Ao:"Salem!",Chokri:"Vebatho!",Kokborok:"Khulumkha!"},P={diff:.5,len:Object.keys(X).length,charLen:2};P.frac=parseFloat((100/P.len).toFixed(4));const Ve=.02,Qe=200,Je="https://docs.google.com/forms/d/e/1FAIpQLSdX6AocQg8d_g8Snq6vWxdOQN7p_Y6nCaeCWMKDfdsIZm8Pww/viewform?usp=sf_link",k=qe,Z=X,y=P,$=Ve,U=Qe,Xe=Je,Ze=()=>e("header",{children:a(ue,{color:"dark",expand:"md",className:"mb-2",dark:!0,children:[a(me,{href:"/",children:[e("img",{alt:k,src:"/assets/logo.png",style:{marginRight:"1ex"},width:30}),k]}),e("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar",children:e("span",{className:"navbar-toggler-icon"})}),e(he,{id:"navbar",navbar:!0,children:a(pe,{className:"ms-auto",navbar:!0,children:[e(T,{children:e(_,{className:"nav-link",to:"/",children:"Home"})}),e(T,{children:e(_,{className:"nav-link",to:"/discover",children:"Discover"})}),e(T,{children:e(_,{className:"nav-link",to:"/about",children:"About"})}),e(T,{children:e(_,{className:"nav-link",to:"/contact",children:"Contact Us"})})]})})]})});const et=()=>e(H,{children:Object.keys(Z).map((t,r)=>{const n=Z[t],i=ge`
			0% {
				transform: translateY(0);
				opacity: 0;
			}
			${r*y.frac}% {
				transform: translateY(0);
				opacity: 0;
			}
			${r*y.frac+y.diff}% {
				transform: translateY(-${y.charLen}em);
				opacity: 1;
			}
			${(r+1)*y.frac-y.diff}% {
				transform: translateY(-${y.charLen}em);
				opacity: 1;
			}
			${(r+1)*y.frac}% {
				transform: translateY(-${y.charLen*2}em);
				opacity: 0;
			}
			100% {
				transform: translateY(-${y.charLen*2}em);
			}
		`,l=z.h1`
			position: relative;
			opacity: 0;
			user-select: none;
			animation: ${i} ${y.len}s infinite forwards;
		`;return e("div",{className:"greeting-minidiv",style:{position:"absolute",transform:"translateY(8em)",left:0,right:0,marginLeft:0,marginRight:0,zIndex:-(y.len+1)},children:e(l,{className:"greeting",children:n},r)},r)})}),tt=()=>{const t=v.exports.useRef(null),r=v.exports.useRef(null);let n;const i=({type:o,limit:h})=>{switch(o){case"in":{const p=()=>{var g;if(t.current.volume+$>=h){t.current.volume=h;return}((g=t.current)==null?void 0:g.volume)!==h&&(t.current.volume+=$,n=window.setTimeout(p,U))};p()}break;case"out":{const p=()=>{if(t.current.volume-$<=0){t.current.volume=0;return}t.current.volume>=0&&(t.current.volume-=$,n=window.setTimeout(p,U))};p()}break}},l=async()=>{var h,p,g,d,m,b;const o=.3;n!=null&&window.clearTimeout(n),((h=t.current)==null?void 0:h.paused)?(t.current.currentTime=0,t.current.volume=0,i({type:"in",limit:o}),(p=r.current)==null||p.classList.add("show"),(g=r.current)==null||g.addEventListener("click",()=>{l()}),n=window.setTimeout(()=>{var E,f;i({type:"out"}),(E=r.current)==null||E.classList.remove("show"),(f=r.current)==null||f.removeEventListener("click",()=>{l()})},t.current.duration*1e3-U*(o/$)),await((d=t.current)==null?void 0:d.play()),t.current.volume=0):(i({type:"out"}),(m=r.current)==null||m.classList.remove("show"),(b=r.current)==null||b.removeEventListener("click",()=>{l()}),n=window.setTimeout(()=>{var E;(E=t.current)==null||E.pause(),t.current.volume=0,t.current.currentTime=0},U*(o/$)))};return a(N,{fluid:"lg",className:"p-responsive gutter-spacious mx-auto",color:"dark",children:[e("div",{ref:r,className:"hidden",style:{position:"absolute",right:30},children:e("img",{src:"/assets/sound.gif",style:{width:40,opacity:.2,borderRadius:"50%"}})}),e(c,{children:a(s,{className:"text-center",children:[e(s,{xs:"6",md:"4",lg:"2",className:"mx-auto my-4",children:e(x,{onClick:o=>(o.preventDefault(),l()),to:"/",children:e("img",{src:"/assets/logo.png",alt:"Logo",className:"w-100"})})}),e(s,{className:"levitating",children:e(et,{})})]})}),a(c,{className:"text-center px-1",style:{marginTop:`${5*y.charLen}em`,zIndex:4},children:[e(s,{xs:"12 mb-2",children:e("h5",{children:"We are GitHub Campus Experts from India."})}),e(s,{xs:"12",children:a(c,{children:[e("audio",{ref:t,src:"/assets/Vande_Mataram.mp3"}),e(s,{className:"col-12 col-md-2 offset-md-3 mb-1",children:e("a",{href:"https://apply.githubcampus.expert/",target:"_blank",className:"btn d-block w-100 btn-light",style:{backgroundColor:"#DD5522",borderColor:"#DD5522",color:"white"},rel:"noreferrer",children:e("b",{children:"\u{1F6A9} Apply"})})}),e(s,{className:"col-12 col-md-2 mb-1",children:e(x,{to:"/discover",className:"btn d-block w-100 btn-light text-black",children:e("b",{children:"\u{1F3AD} Discover"})})}),e(s,{className:"col-12 col-md-2 mb-1",children:e(x,{to:"/contact",className:"btn d-block w-100 btn-success",children:e("b",{children:"\u{1F4E8} Contact"})})})]})})]})]})};const ee=1,at=z.footer`
	opacity: 0.8;
	filter: blur(0.5px);
	transition: all ${ee}s;

	&:hover {
		filter: blur(0);
		opacity: 1;
	}
`,nt=z.div`
	z-index: -100;
	position: absolute;
	opacity: 0.05;
	left: 50%;
	transform: translate(-50%, -1.2em);
	width: 100%;
	max-width: 900px;
	height: 100%;
	border-radius: 50%;
	height: 140%;
	filter: blur(3px);
	background-color: white;
	transition: all ${ee}s;

	&:hover {
		opacity: 0.08;
	}
`,rt=()=>a(H,{children:[a(at,{id:"footer",className:"container mt-5 pt-2 mb-5 pb-2 text-center",children:[e(nt,{}),a(s,{children:["\xA9 ",k," 2021-",new Date().getFullYear()]}),a(s,{children:["Made with ",e("span",{className:"heart",children:"\u2764"})," by ",e("a",{style:{color:"pink"},href:"https://www.paramsid.com",target:"_blank",rel:"noreferrer",children:"Param"}),"."]})]}),e(N,{style:{transform:"scale(80%)",opacity:.3},children:a(c,{className:"text-center",children:[e(s,{xs:"12",className:"offset-md-8 col-md-2 mb-2",children:e("a",{href:"https://education.github.com/experts/terms",target:"_blank",rel:"noreferrer",children:"Terms of Service"})}),e(s,{xs:"12",className:"col-md-2 mb-2",children:e("a",{href:"https://education.github.com/experts/",target:"_blank",rel:"noreferrer",children:"Campus Experts"})})]})})]}),A=({title:t,description:r,keywords:n})=>a(fe,{children:[t!=null?e("title",{children:`${k} - ${t}`}):e("title",{children:k}),r!=null?e("meta",{name:"description",content:r}):"",n!=null?e("meta",{name:"keywords",content:n.map(i=>i.toLocaleLowerCase()).join(", ")}):""]}),te=()=>a(N,{fluid:"md mt-5 mb-5",children:[e(A,{title:"Not Found",description:"404 - Not Found! This is the official website of GitHub Campus Experts India. Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities."}),e(c,{style:{minHeight:400},className:"align-items-center mt-auto mb-auto",children:a(s,{xs:"12",className:"text-center",children:[e("h1",{children:"Uh oh!"}),e("h3",{className:"mb-2",children:"Looks like you came to the wrong page."}),e("p",{className:"mb-4",children:"Try going back to the homepage."}),e(x,{to:"/",className:"btn text-black btn-info",children:"Return to Home"})]})})]});const st=t=>{const r=q();return a(N,{fluid:"md mt-5 mb-5",children:[e(A,{title:`${t.name} - ${t.username}`}),a(c,{style:{minHeight:400},className:"justify-content-center mt-auto mb-auto",children:[e(s,{xs:"11",lg:"2",children:e(c,{children:a(L,{className:"py-3 text-black",style:{minHeight:"480px"},children:[a(D,{children:[e(j,{className:"cursor-pointer rounded-3",title:t.name,src:t.picture,alt:t.name}),e(F,{className:"mt-3",children:e(x,{className:"no-decor",title:`${t.name} - Local profile`,to:r.pathname,children:e("h5",{children:t.name})})}),e(I,{children:e("a",{href:`https://github.com/${t.username}`,target:"_blank",title:`${t.name} - GitHub profile`,className:"no-decor",rel:"noreferrer",children:e("code",{children:e("b",{children:t.username})})})}),e(I,{className:"pt-1",children:e("small",{children:t.title})})]}),a(B,{className:"px-1",children:[a("div",{title:t.university,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[e(u,{style:{marginRight:5},icon:G}),t.university]}),a("div",{title:t.location,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[e(u,{style:{marginLeft:4,marginRight:8},icon:O}),t.location]}),e("div",{className:"my-3",style:{borderTop:"1px solid lightgrey"}}),e("div",{children:t.modules.map((n,i)=>e("img",{className:"w-25 p-1",src:n.img,alt:n.name,title:n.name,style:{cursor:"pointer"}},i))})]})]})})}),a(s,{xs:"11",lg:"8",className:"px-1 px-lg-4 mt-4 mt-lg-0",children:[a("h4",{children:["About ",t.name]}),e("div",{className:"mt-3 mb-4",style:{borderTop:"1px solid lightgrey"}}),e("div",{children:t.about.map((n,i)=>e("div",{className:"mb-3",children:n},i))}),e("h4",{children:"Skills"}),e("div",{className:"mt-3 mb-4",style:{borderTop:"1px solid lightgrey"}}),e("div",{children:t.skills.map((n,i)=>a(v.exports.Fragment,{children:[e("span",{className:"code d-inline-block mb-2",style:{padding:5,backgroundColor:"#a8328f",color:"white",borderRadius:3,width:"max-content"},children:n})," "]},i))})]})]}),e(c,{className:"mt-3 justify-content-center",children:a(s,{style:{fontSize:"0.9em"},xs:"12",md:"8",className:"opacity-50",children:["This profile was generated via the official ",e("a",{target:"_blank",href:"https://githubcampus.expert",rel:"noreferrer",children:"GitHub Campus Expert website"}),". Click here to ",e("a",{target:"_blank",href:`https://githubcampus.expert/${t.username}`,rel:"noreferrer",children:"view the original profile"}),".",e("br",{}),"Are you ",t.name,"? ",e("a",{href:"https://github.com/gce-india/gce-india.github.io",target:"_blank",rel:"noreferrer",children:"Create your own profile"})," on the ",k," website."]})})]})},it=({name:t})=>{switch(t==null?void 0:t.toLocaleLowerCase()){case"facebook":return e(u,{style:{marginLeft:2,marginRight:8},color:"blue",icon:Ae});case"twitter":return e(u,{style:{marginLeft:2,marginRight:8},color:"#66F",icon:ke});case"instagram":return e(u,{style:{marginLeft:2,marginRight:8},color:"#e95950",icon:Ee});case"youtube":return e(u,{style:{marginLeft:2,marginRight:8},color:"red",icon:Ne});case"linkedin":return e(u,{style:{marginLeft:2,marginRight:8},color:"blue",icon:we});case"github":return e(u,{style:{marginLeft:2,marginRight:8},color:"black",icon:xe});case"spotify":return e(u,{style:{marginLeft:2,marginRight:8},color:"#0D0",icon:ve});case"stack overflow":return e(u,{style:{marginLeft:2,marginRight:8},color:"red",icon:ye});case"website":default:return e(u,{style:{marginLeft:2,marginRight:8},icon:be})}},lt=t=>{const r=q();return a(N,{fluid:"md mt-5 mb-5",children:[e(A,{title:`${t.name} - ${t.username}`}),a(c,{style:{minHeight:400},className:"justify-content-center mt-auto mb-auto",children:[e(s,{xs:"11",lg:"2",children:e(c,{children:a(L,{className:"py-3 text-black",style:{minHeight:"480px"},children:[a(D,{children:[e(j,{className:"cursor-pointer rounded-3",title:t.name,src:t.avatar,alt:t.name}),e(F,{className:"mt-3",children:e(x,{className:"no-decor",title:`${t.name} - Local profile`,to:r.pathname,children:e("h5",{children:t.name})})}),e(I,{children:e("a",{href:`https://github.com/${t.username}`,target:"_blank",title:`${t.name} - GitHub profile`,className:"no-decor",rel:"noreferrer",children:e("code",{children:e("b",{children:t.username})})})})]}),a(B,{className:"px-1",children:[a("div",{title:t.university,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[e(u,{style:{marginRight:5},icon:G}),t.university]}),a("div",{title:t.location,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[e(u,{style:{marginLeft:4,marginRight:8},icon:O}),t.location]}),a("div",{title:t.country,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[e(u,{style:{marginLeft:2,marginRight:8},icon:V}),t.country]}),e("div",{title:t.country,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:a("a",{href:`mailto:${t.email}`,children:[e(u,{style:{marginLeft:2,marginRight:8},icon:Ce}),t.email]})}),e("div",{className:"my-3",style:{borderTop:"1px solid lightgrey"}}),t.social.map(({name:n,url:i},l)=>e("div",{title:n,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},className:"mt-1",children:a("a",{href:i,target:"_blank",children:[e(it,{name:n}),n]})},l))]})]})})}),a(s,{xs:"11",lg:"8",className:"px-1 px-lg-4 mt-4 mt-lg-0",children:[a("h4",{children:["About ",t.name]}),e("div",{className:"mt-3 mb-4",style:{borderTop:"1px solid lightgrey"}}),e(Ie,{linkTarget:"_blank",children:t.about}),t.skills.length>0?a(H,{children:[e("h4",{className:"mt-2",children:"Skills"}),e("div",{className:"mt-3 mb-4",style:{borderTop:"1px solid lightgrey"}}),e("div",{children:t.skills.map((n,i)=>a(v.exports.Fragment,{children:[e("span",{className:"code d-inline-block mb-2",style:{padding:5,backgroundColor:"#a8328f",color:"white",borderRadius:3,width:"max-content"},children:n})," "]},i))})]}):"",t.communities.length>0?a(H,{children:[e("h4",{className:"mt-2",children:"Communities"}),e("div",{className:"mt-3 mb-4",style:{borderTop:"1px solid lightgrey"}}),e("div",{children:t.communities.map((n,i)=>a(v.exports.Fragment,{children:[e(Q,{color:"primary",className:"fs-6 py-2",children:n})," "]},i))})]}):"",e(c,{className:"mt-3 justify-content-center",children:a(s,{style:{fontSize:"0.9em"},xs:"12",className:"opacity-50",children:["Click here to ",e("a",{target:"_blank",href:`https://githubcampus.expert/${t.username}`,rel:"noreferrer",children:"view the profile"})," on the official ",e("a",{target:"_blank",href:"https://githubcampus.expert",rel:"noreferrer",children:"GitHub Campus Expert website"}),"."]})})]})]})]})},ct=({children:t})=>e(N,{fluid:"md mt-5 mb-5",children:e(c,{style:{minHeight:400},className:"align-items-center mt-auto mb-auto",children:a(s,{xs:"12",className:"text-center",children:[e(c,{className:"justify-content-center mb-4",children:e(s,{className:"d-flex justify-content-center",children:e($e,{color:"yellow"})})}),t?e(c,{className:"justify-content-center",children:e(s,{className:"d-flex justify-content-center",children:t})}):""]})})}),ot=async t=>{const{data:r}=await R.get(`https://githubcampus.expert/${encodeURIComponent(t)}`),n=Le.load(r),i=n(n(`a[href='/${t}']`).get(0)).text().trim(),l=n(n("img.avatar").get(0)).attr("src"),o=n(n("div.text-gray").get(0)).text().trim(),h=n(n("span[title]").get(0)).text().trim(),p=n(n("span[title]").get(1)).text().trim(),g=[...n(".hex").map((f,w)=>n(w).text())].map(f=>f.trim().split(/\s{2,}/g)[0]),d=[...n(".Popover img").map((f,w)=>n(w).attr("src"))].map(f=>`https://githubcampus.expert${f}`),m=[...n(".about p").map((f,w)=>n(w).text())].slice(1,-1),b=[...n(".skills div").map((f,w)=>n(w).text())];return{name:i,username:t,picture:l,title:o,university:h,location:p,modules:g.map((f,w)=>({name:f,img:d[w]})),about:m,skills:b}},dt=async t=>{const r=`/users/${encodeURIComponent(t)}`,{data:n}=await R.get(`${r}/info.yml`),{data:i}=await R.get(`${r}/about.md`),l=M.parse(n);return W(S({social:[],skills:[],communities:[],username:t},l),{about:i})},ut=async(t,r)=>{const n=`/users/${encodeURIComponent(t)}`;switch(r){case"local":return{type:"local",expert:await ne(t)};case"external":return{type:"global",expert:await ae(t)};default:try{const{data:i}=await R.get(`${n}/info.yml`);M.parse(i)}catch{return{type:"global",expert:await ae(t)}}return{type:"local",expert:await ne(t)}}},mt=async()=>{const t=await R.get("/resources/index.yml");return{users:[...M.parse(t.data).users.map(i=>({expert:(i.local,i),type:i.local?"local":"external"}))]}},ae=ot,ne=dt,re=ut,ht=mt,se=({fallback:t}={fallback:!1})=>{const{username:r}=De(),[n,i]=v.exports.useState(),[l,o]=v.exports.useState("local"),[h,p]=v.exports.useState(!1);return v.exports.useEffect(()=>{(async()=>{if(t){o("external");const d=await re(r,"external");i(d.expert),o("external"),p(!0);return}const g=await re(r);if(g.type==="local"){const d=g.expert;i(d),o("local"),p(!0)}else{const d=g.expert;i(d),o("external"),p(!0)}})().catch(g=>{console.error(g),p(!0)})},[]),h?h&&n&&l==="external"?e(st,S({},n)):h&&n&&l==="local"?e(lt,S({},n)):e(te,{}):a(ct,{children:[e(A,{title:r}),"Looking for\xA0",e("span",{className:"code",children:e("b",{children:r})}),"..."]})},pt=()=>a(N,{fluid:"md mt-5 mb-5",children:[e(A,{title:"About",description:"About GitHub Campus Experts India. Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities."}),e(c,{style:{minHeight:400},className:"justify-content-center mt-auto mb-auto",children:a(s,{xs:"12",md:"8",children:[e("h4",{className:"text-center mb-3",children:"GitHub Campus Experts India"}),a(c,{className:"align-items-center",children:[e(s,{xs:"12",md:"6",children:e("img",{className:"img img-block mb-3",style:{width:"min(80%, 80vw)"},src:"/assets/logo.png",alt:k})}),e(s,{xs:"12",md:"6",children:"People learn better when they can learn with a community of likeminded peers. Campus Experts are student leaders that strive to build diverse and inclusive spaces to learn skills, share their experiences, and build projects together. They can be found across the globe leading in-person and online conferences, meetups, and hackathons, and maintaining open source projects. A Campus Expert is trained to build a strong technical community, on campus. As well as training, Campus Experts have access to resources and support from GitHub, such as swag, sponsorship, and the opportunity to attend events like GitHub Universe."})]})]})}),e(c,{className:"mt-3 justify-content-center",children:e(s,{xs:"12",md:"8",children:"India, being such a diverse and populated country, is full of engineers of all kinds. As campus experts, we volunteer to help our Indian engineering community flourish and support students and aspiring engineers, thus enabling them to reach their full potential."})}),e(c,{className:"mt-3 justify-content-center",children:a(s,{xs:"12",md:"6",children:[e("img",{className:"img img-block border border-3 border-danger rounded-3",width:"100%",src:"/assets/map.png",alt:"Campus Experts from India on the map",title:"Campus Experts from India on the map"}),e("img",{src:"/assets/hi.gif",width:"30px",style:{position:"absolute",left:"75%",transform:"translateY(350%)",opacity:.8}})]})}),e(c,{className:"justify-content-center mt-1",children:e(s,{xs:"12",md:"6",className:"text-center",children:e("i",{children:"Campus Experts from India on the map (2022)"})})}),a(c,{className:"mt-3 justify-content-center",children:[e(s,{xs:"12",md:"8",style:{maxWidth:"95vw"},className:"bg-light text-dark px-3 py-4 rounded-3 mb-2",children:"The red flag \u{1F6A9} is symbolic to laying down a strong and influencial foundation of worth, inclusivity, and development in the community. The concentration of red flags in India makes it evident that we have a large number of campus experts in India."}),a(s,{xs:"12",md:"8",className:"mt-2",children:["Our mission is to empower the technical communities in India by leading the initiative to spread awareness and knowledge (",e("a",{target:"_blank",href:"https://translate.google.com/?sl=auto&tl=en&text=%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A5%8B%E0%A4%82%E0%A4%95%E0%A4%BF%20%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%A8%20%E0%A4%AC%E0%A4%BE%E0%A4%82%E0%A4%9F%E0%A4%A8%E0%A5%87%20%E0%A4%B8%E0%A5%87%20%E0%A4%AC%E0%A5%9D%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%88&op=translate",rel:"noreferrer",children:"\u0915\u094D\u092F\u094B\u0902\u0915\u093F \u091C\u094D\u091E\u093E\u0928 \u092C\u093E\u0902\u091F\u0928\u0947 \u0938\u0947 \u092C\u095D\u0924\u093E \u0939\u0948"}),"). We wish to fulfill the dream of seeing India emerge as a superpower, from a developing nation to a developed nation, and eliminate the problems students face.",e("h5",{className:"text-center mt-1",children:"But how?"})]})]}),e(c,{className:"mt-3 justify-content-center",children:e(s,{xs:"12",md:"8",children:"There's no single way we do that. From organizing hackathons and events, to conducting workshops and giving talks, we put in a lot of efforts to help you out. \u{1F60E} The life of technical leaders is complicated. We love you! \u2764"})}),a(c,{className:"mt-3 justify-content-center",children:[e(s,{xs:"12",md:"8",children:"You can discover your local campus experts from the official GitHub Campus Experts website."}),e(s,{xs:"12",md:"8",className:"text-center mt-1",children:e("a",{href:"http://githubcampus.expert/",target:"_blank",className:"btn text-center btn-danger",rel:"noreferrer",children:"\u{1F6A9} GitHub Campus Experts"})})]}),e(c,{className:"mt-3 justify-content-center",children:a(s,{xs:"12",md:"8",className:"opacity-50",children:["Pssst... If you are also interested in becoming a campus expert, apply ",e("a",{href:"https://apply.githubcampus.expert/",target:"_blank",rel:"noreferrer",children:"here"}),". Applications open twice a year, so hurry up!"]})})]}),gt=()=>a(N,{style:{minHeight:400},fluid:"md mt-5 mb-5",children:[e(A,{title:"Contact Us",description:"Contact GitHub Campus Experts India. Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities."}),e(c,{className:"justify-content-center mt-auto mb-auto",children:e(s,{xs:"12",md:"8",children:e("h4",{className:"text-center mb-3",children:"Contact Us"})})}),e(c,{className:"mt-3 justify-content-center",children:a(s,{xs:"12",md:"8",children:["If you:",a("ul",{children:[e("li",{children:"Seek guidance or mentorship for projects"}),e("li",{children:"Need help in organizing an event"}),e("li",{children:"Have anything important to convey"})]}),"Just fill this form below and let us know!"]})}),e(c,{className:"mt-3 justify-content-center",children:e(s,{xs:"12",md:"8",className:"text-center",children:e("iframe",{src:Xe,style:{width:"95%",minHeight:400,border:"2px solid red",backgroundColor:"white"}})})}),e(c,{className:"mt-3 justify-content-center",children:a(s,{xs:"12",md:"8",className:"opacity-50",children:["Pssst... If you are also interested in becoming a campus expert, apply ",e("a",{href:"https://apply.githubcampus.expert/",target:"_blank",rel:"noreferrer",children:"here"}),". Applications open twice a year, so hurry up!"]})})]}),ft=({expert:t})=>e(s,{className:"text-dark mb-3",xs:"12",md:"6",lg:"3",children:a(L,{children:[a(D,{className:"text-center py-3",children:[e(x,{to:`/${encodeURIComponent(t.username)}`,children:e(j,{className:"cursor-pointer rounded-3",title:t.name,src:t.avatar,alt:t.name})}),e(F,{className:"mt-1",children:e(x,{className:"no-decor",title:`${t.name} - Local profile`,to:`/${encodeURIComponent(t.username)}`,children:e("h5",{children:t.name})})}),e(I,{children:e(x,{to:`/${encodeURIComponent(t.username)}`,title:`${t.name} - Local profile`,className:"no-decor",children:e("code",{children:e("b",{children:t.username})})})})]}),a(B,{children:[a("div",{title:t.university,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[e(u,{style:{marginRight:5},icon:G}),t.university]}),a("div",{title:t.location,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[e(u,{style:{marginLeft:4,marginRight:8},icon:O}),t.location]}),a("div",{title:t.country,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[e(u,{style:{marginLeft:2,marginRight:8},icon:V}),t.country]}),e("div",{className:"my-3",style:{borderTop:"1px solid lightgrey"}}),e(u,{icon:Fe})," ",t.communities.map((r,n)=>a(v.exports.Fragment,{children:[e(Q,{color:"secondary",children:r})," "]},n))]})]})}),bt=({expert:t})=>e(s,{className:"text-dark mb-3",xs:"12",md:"6",lg:"3",children:a(L,{children:[a(D,{className:"text-center py-3",children:[e(x,{to:`/${encodeURIComponent(t.username)}`,children:e(j,{className:"cursor-pointer rounded-3",title:t.name,src:t.picture,alt:t.name})}),e(F,{className:"mt-1",children:e(x,{className:"no-decor",title:`${t.name} - Local profile`,to:`/${encodeURIComponent(t.username)}`,children:e("h5",{children:t.name})})}),e(I,{children:e(x,{to:`/${encodeURIComponent(t.username)}`,title:`${t.name} - Local profile`,className:"no-decor",children:e("code",{children:e("b",{children:t.username})})})})]}),a(B,{children:[a("div",{title:t.university,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[e(u,{style:{marginRight:5},icon:G}),t.university]}),a("div",{title:t.location,style:{fontSize:"0.8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:[e(u,{style:{marginLeft:4,marginRight:8},icon:O}),t.location]})]})]})}),yt=()=>{var g;const t=Be(),[r,n]=Re(window.location,t),[i,l]=v.exports.useState([]);v.exports.useEffect(()=>{(async()=>{const d=await ht();l(d.users)})().catch(d=>{console.error(d)})},[]);const o=d=>{const{target:{value:m}}=d;n(m?{search:m}:{search:null})},h=d=>{const m=new RegExp(d,"ig");return({expert:b,type:E})=>m.test(b.username)||m.test(b.name)||m.test(b.university)||m.test(b.location)||E==="local"&&(m.test(b.country)||b.communities.map(f=>m.test(f)).reduce((f,w)=>f||w))},p=r.search==null?i:i.filter(h(r.search));return a(N,{style:{minHeight:400},fluid:"md mt-5 mb-5",children:[e(A,{title:"Discover",description:"Discover GitHub Campus Experts from India and explore events and more! Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities."}),e(c,{className:"d-block d-lg-none justify-content-center mt-auto mb-auto",children:a(s,{xs:"12",children:[e("h2",{className:"text-center mb-2",children:"Discover"}),e("h6",{className:"text-center mb-3",children:"Explore campus experts and events!"})]})}),a(c,{className:"mt-3 align-items-end",children:[a(s,{xs:"12",lg:"9",className:"order-2 mt-2 mt-lg-0",children:[a(c,{className:"align-items-center",children:[a(s,{xs:"12",className:"d-none d-lg-block",children:[e("h2",{className:"text-center mb-2",children:"Discover"}),e("h6",{className:"text-center mb-3",children:"Explore campus experts and events!"})]}),e(s,{className:"my-3 text-center",xs:"5",lg:"2",children:e("img",{src:"/assets/logo.png",className:"img img-fluid"})}),a(s,{className:"d-none d-lg-block text-center",lg:"10",children:[e("h1",{children:"We are the campus experts!"}),"Find your local campus expert to connect."]})]}),e(s,{xs:"12",children:a(Se,{children:[e(Te,{className:"bg-secondary text-white",children:"Search for a campus expert:"}),e(_e,{className:"bg-dark text-white",value:(g=r.search)!=null?g:"",onChange:o,type:"text"})]})})]}),e(s,{xs:"12",lg:"3",className:"order-1",children:a(L,{className:"text-dark",children:[a(D,{children:[e(F,{children:e("h4",{children:"Explore"})}),e(I,{children:e("h6",{children:"GitHub Campus Experts"})})]}),e(B,{children:a(He,{children:[e("a",{target:"_blank",href:"https://githubcampus.expert/events",className:"btn mb-1 d-block btn-success text-light",rel:"noreferrer",children:"\u{1F3AD} Global Events"}),e("a",{target:"_blank",href:"https://education.github.com/experts",className:"btn mb-1 d-block btn-primary text-light",rel:"noreferrer",children:"\u{1F6A9} Experts"}),e("a",{target:"_blank",href:"https://education.github.com/pack/offers",className:"btn mb-1 d-block btn-secondary text-light",rel:"noreferrer",children:"\u{1F4BB} Developer Pack"}),e("a",{target:"_blank",href:"https://www.twitch.tv/githubeducation/schedule",className:"btn mb-1 d-block btn-danger text-light",rel:"noreferrer",children:"\u{1F4FA} Campus TV"})]})})]})}),e(s,{xs:"12",className:"order-3 mt-4",children:i.length>0?e(je,{itemsRenderer:(d,m)=>e("div",{className:"row",ref:m,children:d}),itemRenderer:(d,m)=>{const b=p[d];return b.type==="local"?e(ft,{expert:b.expert},m):e(bt,{expert:b.expert},m)},length:p.length,type:"simple"}):e("div",{className:"d-flex justify-content-center",children:e(Ge,{color:"yellow"})})})]}),e(c,{className:"mt-3 justify-content-center",children:a(s,{style:{fontSize:"0.9em"},xs:"12",md:"8",className:"opacity-50",children:["Are you a new Indian campus expert? ",e("a",{href:"https://github.com/gce-india/gce-india.github.io",target:"_blank",rel:"noreferrer",children:"Create your own profile"})," on the ",k," website."]})})]})},vt=()=>a(Oe,{children:[e(C,{path:"/",element:e(tt,{})}),e(C,{path:"/discover",element:e(yt,{})}),e(C,{path:"/about",element:e(pt,{})}),e(C,{path:"/contact",element:e(gt,{})}),e(C,{path:"/global/:username",element:e(se,{fallback:!0})}),e(C,{path:"/:username",element:e(se,{})}),e(C,{path:"*",element:e(te,{})})]}),xt=()=>e(Ue,{children:a(ze,{children:[e(A,{description:"The official homepage of GitHub Campus Experts India. Campus Experts are student leaders that strive to build and support diverse and inclusive spaces in technical communities.",keywords:["GitHub","GitHub Campus","Campus Experts","India"]}),e(Ze,{}),e(vt,{}),e(rt,{})]})});J.add(Me);J.add(Pe);Ye.render(e(Ke.StrictMode,{children:e(xt,{})}),document.getElementById("root"));
