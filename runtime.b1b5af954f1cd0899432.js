(()=>{"use strict";var e,g={},_={};function a(e){var f=_[e];if(void 0!==f)return f.exports;var t=_[e]={exports:{}};return g[e](t,t.exports,a),t.exports}a.m=g,e=[],a.O=(f,t,d,c)=>{if(!t){var r=1/0;for(n=0;n<e.length;n++){for(var[t,d,c]=e[n],s=!0,b=0;b<t.length;b++)(!1&c||r>=c)&&Object.keys(a.O).every(p=>a.O[p](t[b]))?t.splice(b--,1):(s=!1,c<r&&(r=c));if(s){e.splice(n--,1);var i=d();void 0!==i&&(f=i)}}return f}c=c||0;for(var n=e.length;n>0&&e[n-1][2]>c;n--)e[n]=e[n-1];e[n]=[t,d,c]},a.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return a.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;a.t=function(t,d){if(1&d&&(t=this(t)),8&d||"object"==typeof t&&t&&(4&d&&t.__esModule||16&d&&"function"==typeof t.then))return t;var c=Object.create(null);a.r(c);var n={};f=f||[null,e({}),e([]),e(e)];for(var r=2&d&&t;"object"==typeof r&&!~f.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach(s=>n[s]=()=>t[s]);return n.default=()=>t,a.d(c,n),c}})(),a.d=(e,f)=>{for(var t in f)a.o(f,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((f,t)=>(a.f[t](e,f),f),[])),a.u=e=>(592===e?"common":e)+"."+{30:"624ae382d2988dd82268",82:"e6631f315eb338850028",88:"54008daa1bec5a17af03",92:"175deb33a1227661a4ea",118:"80f48dfd97aa49068151",146:"c23182ca2ff4395b049d",220:"e9f16b5d1dfcf4d3ae42",224:"181a84236c12014c94a4",258:"3a76445d99544979879d",265:"c27bdf31111c7863176e",266:"bb681fe0292bf3208ee7",322:"e4d06704b2e59694537b",380:"903620e5d3368b7717f7",409:"9b587f68268a4efa75c1",420:"7798c7f3261275296b7e",423:"404719f904395d8597f8",443:"cc9f9322cbf3a213d5d9",504:"063dbd32c4bad323534b",521:"46cfac3c1c8ca408f08b",524:"8ab2fa02e35bdf6db0c7",571:"3ea630377b33ce0f693a",579:"a0a4ee85891f4976490d",592:"85fe3e8de776998b3f9d",628:"7a059e4f0dae6de3cd4b",648:"87085d12205d444288a6",728:"abf0205e56c0c76c7e16",739:"b09d70a7fdc38ca32c62",742:"125c17d017f3e060a56a",785:"ce015fbe778d46d7295e",808:"0a2495103b388a5969d1",812:"a080b7637db865686e6d",820:"b0d09272b9ab7ccbd19d",821:"b2bbd7bbed97c49c457a",892:"9f76517c81683bab7df3",948:"edf279c69d66e76601d6",954:"7e74e3039c86a5c6e54e",994:"506bf7a29cf93d662bab"}[e]+".js",a.miniCssF=e=>"styles.eed0c98a9b510eaf1b7b.css",a.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="ng-web-apis:";a.l=(t,d,c,n)=>{if(e[t])e[t].push(d);else{var r,s;if(void 0!==c)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var o=b[i];if(o.getAttribute("src")==t||o.getAttribute("data-webpack")==f+c){r=o;break}}r||(s=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",f+c),r.src=a.tu(t)),e[t]=[d];var u=(v,p)=>{r.onerror=r.onload=null,clearTimeout(l);var m=e[t];if(delete e[t],r.parentNode&&r.parentNode.removeChild(r),m&&m.forEach(y=>y(p)),v)return v(p)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),s&&document.head.appendChild(r)}}})(),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={666:0};a.f.j=(d,c)=>{var n=a.o(e,d)?e[d]:void 0;if(0!==n)if(n)c.push(n[2]);else if(666!=d){var r=new Promise((o,u)=>n=e[d]=[o,u]);c.push(n[2]=r);var s=a.p+a.u(d),b=new Error;a.l(s,o=>{if(a.o(e,d)&&(0!==(n=e[d])&&(e[d]=void 0),n)){var u=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;b.message="Loading chunk "+d+" failed.\n("+u+": "+l+")",b.name="ChunkLoadError",b.type=u,b.request=l,n[1](b)}},"chunk-"+d,d)}else e[d]=0},a.O.j=d=>0===e[d];var f=(d,c)=>{var b,i,[n,r,s]=c,o=0;if(n.some(l=>0!==e[l])){for(b in r)a.o(r,b)&&(a.m[b]=r[b]);if(s)var u=s(a)}for(d&&d(c);o<n.length;o++)a.o(e,i=n[o])&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},t=self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();