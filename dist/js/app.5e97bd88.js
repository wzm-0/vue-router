(function(){"use strict";var e={1241:function(e,n,t){var o=t(9242),r=t(3396);function i(e,n,t,o,i,u){const a=(0,r.up)("router-link"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("首页")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(a,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("关于")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(a,{to:"/news"},{default:(0,r.w5)((()=>[(0,r.Uk)("新闻")])),_:1}),(0,r.Wm)(c)],64)}var u={name:"App",components:{}},a=t(89);const c=(0,a.Z)(u,[["render",i]]);var f=c,s=t(5431);(0,s.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var l=t(2483);function d(e,n){return(0,r.wg)(),(0,r.iD)("h3",null,"首页")}const p={},v=(0,a.Z)(p,[["render",d]]);var h=v;const m=[{path:"/",name:"home",component:h},{path:"/about",name:"about",redirect:"/about/us",component:()=>t.e(958).then(t.bind(t,2958)),children:[{path:"us",component:()=>t.e(26).then(t.bind(t,3026))},{path:"info",component:()=>t.e(658).then(t.bind(t,3075))}]},{path:"/news",name:"news",component:()=>t.e(727).then(t.bind(t,3727))},{path:"/newsdetails/:name",name:"newsdetails",component:()=>t.e(272).then(t.bind(t,1272))}],b=(0,l.p7)({history:(0,l.r5)(),routes:m});var g=b;(0,o.ri)(f).use(g).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var u=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var f=r();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{26:"bf5d5990",272:"6baf0737",658:"9283abfc",727:"eec472db",958:"e0bd6cf6"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-router-demo:";t.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=o),e[o]=[r];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var u=t.p+t.u(n),a=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,u=o[0],a=o[1],c=o[2],f=0;if(u.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(c)var s=c(t)}for(n&&n(o);f<u.length;f++)i=u[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},o=self["webpackChunkvue_router_demo"]=self["webpackChunkvue_router_demo"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1241)}));o=t.O(o)})();
//# sourceMappingURL=app.5e97bd88.js.map