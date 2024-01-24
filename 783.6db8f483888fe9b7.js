"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[783],{3783:(E,v,n)=>{n.r(v),n.d(v,{default:()=>U});var e=n(6889),d=n(8692),t=n(4537),_=n(8239),C=n(7241),h=n(9018),y=n(1860),P=n(4581),k=n(8168),O=n(3528),M=n(8023),x=n(5598);class f extends C.y{constructor(r,s){let o,u;try{o=new Worker(r,s)}catch(m){u=m}super(m=>{let b=h.E;u?m.error(u):this.destroy$.isStopped?m.complete():o&&(b=(0,y.T)((0,P.R)(o,"message").pipe((0,k.b)(w=>m.next(w))),(0,P.R)(o,"error").pipe((0,k.b)(w=>m.error(w)))).pipe((0,O.R)(this.destroy$))),b.subscribe().add(m)}),(0,e.Z)(this,"worker",void 0),(0,e.Z)(this,"url",void 0),(0,e.Z)(this,"destroy$",void 0),this.worker=o,this.url=r,this.destroy$=new M.x}static fromFunction(r,s){return new f(f.createFnUrl(r),s)}static execute(r,s){return(0,_.Z)(function*(){const o=f.fromFunction(r),u=o.pipe((0,x.q)(1)).toPromise();return o.postMessage(s),u.then(m=>(o.terminate(),m))})()}static createFnUrl(r){const o=new Blob([`(\nfunction(fn){\n    function isFunction(type){\n        return type === 'function';\n    }\n\n    self.addEventListener('message', function(e) {\n        var result = fn.call(null, e.data);\n        if (result && [typeof result.then, typeof result.catch].every(isFunction)){\n            result\n                .then(postMessage)\n                .catch(function(error) {\n                    setTimeout(function(){throw error}, 0)\n                })\n        } else {\n            postMessage(result);\n        }\n    })\n}\n)(${r});`],{type:"text/javascript"});return URL.createObjectURL(o)}terminate(){this.destroy$.isStopped||(this.worker&&this.worker.terminate(),URL.revokeObjectURL(this.url),this.destroy$.next(),this.destroy$.complete())}postMessage(r){this.worker&&this.worker.postMessage(r)}}var i=n(7969),l=n(2628),g=n(885),D=n(1995);let W=(()=>{var c;class r{constructor(){(0,e.Z)(this,"date$",(0,D.H)(0,1e3).pipe((0,i.U)(()=>Date.now())))}}return c=r,(0,e.Z)(r,"\u0275fac",function(o){return new(o||c)}),(0,e.Z)(r,"\u0275cmp",t.Xpm({type:c,selectors:[["app-clock"]],standalone:!0,features:[t.jDz],decls:3,vars:6,template:function(o,u){1&o&&(t._uU(0),t.ALo(1,"date"),t.ALo(2,"async")),2&o&&t.hij(" ",t.xi3(1,1,t.lcZ(2,4,u.date$),"mediumTime")," ")},dependencies:[d.ez,d.Ov,d.uU],encapsulation:2,changeDetection:0})),r})();function N(c,r){if(1&c){const s=t.EpF();t.ynx(0),t._UZ(1,"app-clock"),t.TgZ(2,"div",1)(3,"button",2),t.NdJ("click",function(){t.CHM(s);const u=t.oxw();return t.KtG(u.workerThread.postMessage())}),t._uU(4," Run in worker process "),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"async"),t.qZA(),t.TgZ(8,"tui-notification"),t._uU(9,"This would be calculated in several seconds in a background thread"),t.qZA()(),t.TgZ(10,"div",1)(11,"button",2),t.NdJ("click",function(){t.CHM(s);const u=t.oxw();return t.KtG(u.emitter.next())}),t._uU(12," Run in main process "),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.ALo(15,"async"),t.qZA(),t.TgZ(16,"tui-notification"),t._uU(17,"This would freeze your main thread for several seconds"),t.qZA()(),t.BQk()}if(2&c){const s=t.oxw();t.xp6(6),t.hij("Execution time: ",t.lcZ(7,2,s.workerData$),""),t.xp6(8),t.hij("Execution time: ",t.lcZ(15,4,s.result$),"")}}function Z(){const c=performance.now();return Array.from({length:16e3}).forEach((r,s)=>Array.from({length:s}).reduce(o=>o+1,0)),performance.now()-c}let U=(()=>{var c;class r{constructor(o){(0,e.Z)(this,"platformId",void 0),(0,e.Z)(this,"isBrowser",(0,d.NF)(this.platformId)),(0,e.Z)(this,"workerThread",f.fromFunction(Z)),(0,e.Z)(this,"workerData$",this.workerThread.pipe(function p(){return(0,i.U)(({data:c})=>c)}())),(0,e.Z)(this,"emitter",new M.x),(0,e.Z)(this,"result$",this.emitter.pipe((0,i.U)(Z))),this.platformId=o}}return c=r,(0,e.Z)(r,"\u0275fac",function(o){return new(o||c)(t.Y36(t.Lbi))}),(0,e.Z)(r,"\u0275cmp",t.Xpm({type:c,selectors:[["workers-page"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"example"],["appearance","secondary","tuiButton","",3,"click"]],template:function(o,u){1&o&&t.YNc(0,N,18,6,"ng-container",0),2&o&&t.Q6J("ngIf",u.isBrowser)},dependencies:[d.ez,d.O5,d.Ov,l.fN,l.v0,g.H,g.L,W],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.example[_ngcontent-%COMP%]{min-width:360px;border-top:1px solid gainsboro;margin-top:16px;padding-top:16px}"],changeDetection:0})),r})()},885:(E,v,n)=>{n.d(v,{H:()=>f,L:()=>T});var e=n(4537),d=n(2325),t=n(6060),_=n(4789),C=n(2628),h=n(8692),y=n(9570);function P(i,p){1&i&&e._UZ(0,"tui-svg",4),2&i&&e.Q6J("src",p.polymorpheusOutlet)}const k=function(i){return{$implicit:i}};function O(i,p){if(1&i&&(e.ynx(0),e.YNc(1,P,1,1,"tui-svg",3),e.BQk()),2&i){const a=e.oxw();e.xp6(1),e.Q6J("polymorpheusOutlet",a.icon)("polymorpheusOutletContext",e.VKq(2,k,a.status))}}function M(i,p){if(1&i){const a=e.EpF();e.TgZ(0,"button",5),e.NdJ("click",function(){e.CHM(a);const g=e.oxw();return e.KtG(g.close.emit())}),e.ALo(1,"async"),e.qZA()}if(2&i){const a=e.oxw();e.Q6J("icon",a.icons.close)("title",e.lcZ(1,2,a.closeWord$))}}const x=["*"];let T=(()=>{class i{constructor(a,l,g){this.closeWord$=a,this.icons=l,this.options=g,this.hasIcon=this.options.hasIcon,this.icon=this.options.icon,this.status=this.options.status,this.size=this.options.size,this.hideClose=!1,this.close=new e.vpe}get hasClose(){return!this.hideClose&&(0,d.fw)(this.close)}}return i.\u0275fac=function(a){return new(a||i)(e.Y36(t.U0),e.Y36(t.Gs),e.Y36(t.Ln))},i.\u0275cmp=e.Xpm({type:i,selectors:[["tui-notification"]],hostVars:2,hostBindings:function(a,l){2&a&&e.uIk("data-status",l.status)("data-size",l.size)},inputs:{hasIcon:"hasIcon",icon:"icon",status:"status",size:"size",hideClose:"hideClose"},outputs:{close:"close"},ngContentSelectors:x,decls:4,vars:2,consts:[[4,"ngIf"],[1,"t-content"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button","class","t-close",3,"icon","title","click",4,"ngIf"],["automation-id","tui-notification__icon","class","t-icon",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-notification__icon",1,"t-icon",3,"src"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button",1,"t-close",3,"icon","title","click"]],template:function(a,l){1&a&&(e.F$t(),e.YNc(0,O,2,4,"ng-container",0),e.TgZ(1,"div",1),e.Hsn(2),e.qZA(),e.YNc(3,M,2,4,"button",2)),2&a&&(e.Q6J("ngIf",l.icon&&l.hasIcon),e.xp6(3),e.Q6J("ngIf",l.hasClose))},dependencies:[_.PN,C.v0,h.O5,y.Li,h.Ov],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:flex;padding:.75rem 1rem;border-radius:var(--tui-radius-m);background:#fff;background:var(--tui-base-01);box-sizing:border-box;overflow:hidden}[data-size=s][_nghost-%COMP%]{padding:.375rem .625rem}[data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1rem;height:1.25rem;margin:0 .375rem 0 -.125rem}[data-size=s][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem .75rem}[data-size=m][_nghost-%COMP%]{padding:.75rem}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;margin-right:.5rem}[data-size=m][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.125rem -.125rem 1rem}[data-size=l][_nghost-%COMP%]{padding:1rem;font:var(--tui-font-text-m);border-radius:var(--tui-radius-l)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;margin-right:.5rem}[data-status=info][_nghost-%COMP%]{color:var(--tui-info-fill);background:linear-gradient(var(--tui-info-bg),var(--tui-info-bg)),var(--tui-base-01)}[data-status=success][_nghost-%COMP%]{color:var(--tui-success-fill);background:linear-gradient(var(--tui-success-bg),var(--tui-success-bg)),var(--tui-base-01)}[data-status=error][_nghost-%COMP%]{color:var(--tui-error-fill);background:linear-gradient(var(--tui-error-bg),var(--tui-error-bg)),var(--tui-base-01)}[data-status=warning][_nghost-%COMP%]{color:var(--tui-warning-fill);background:linear-gradient(var(--tui-warning-bg),var(--tui-warning-bg)),var(--tui-base-01)}[data-status=neutral][_nghost-%COMP%]{color:var(--tui-neutral-fill);background:linear-gradient(var(--tui-neutral-bg),var(--tui-neutral-bg)),var(--tui-base-01)}.t-content[_ngcontent-%COMP%]{flex:1;word-wrap:break-word;overflow-wrap:anywhere;color:var(--tui-text-01)}"],changeDetection:0}),i})(),f=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[h.ez,_.EI,C.fN,y.wq]]}),i})()}}]);