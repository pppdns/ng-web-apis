"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[40],{40:(W,C,n)=>{n.r(C),n.d(C,{default:()=>$});var e=n(8974),d=n(6568),t=n(6528),v=n(3972),_=n(3324),h=n(2008),k=n(824),P=n(4312),O=n(6708),M=n(2436),y=n(6458),E=n(3652);class f extends _._{constructor(r,s){let o,u;try{o=new Worker(r,s)}catch(p){u=p}super(p=>{let x=h.k;u?p.error(u):this.destroy$.isStopped?p.complete():o&&(x=(0,k.U)((0,P.w)(o,"message").pipe((0,O.y)(T=>p.next(T))),(0,P.w)(o,"error").pipe((0,O.y)(T=>p.error(T)))).pipe((0,M.a)(this.destroy$))),x.subscribe().add(p)}),(0,e.c)(this,"worker",void 0),(0,e.c)(this,"url",void 0),(0,e.c)(this,"destroy$",void 0),this.worker=o,this.url=r,this.destroy$=new y.E}static fromFunction(r,s){return new f(f.createFnUrl(r),s)}static execute(r,s){return(0,v.c)(function*(){const o=f.fromFunction(r),u=o.pipe((0,E.U)(1)).toPromise();return o.postMessage(s),u.then(p=>(o.terminate(),p))})()}static createFnUrl(r){const o=new Blob([`(\nfunction(fn){\n    function isFunction(type){\n        return type === 'function';\n    }\n\n    self.addEventListener('message', function(e) {\n        var result = fn.call(null, e.data);\n        if (result && [typeof result.then, typeof result.catch].every(isFunction)){\n            result\n                .then(postMessage)\n                .catch(function(error) {\n                    setTimeout(function(){throw error}, 0)\n                })\n        } else {\n            postMessage(result);\n        }\n    })\n}\n)(${r});`],{type:"text/javascript"});return URL.createObjectURL(o)}terminate(){this.destroy$.isStopped||(this.worker&&this.worker.terminate(),URL.revokeObjectURL(this.url),this.destroy$.next(),this.destroy$.complete())}postMessage(r){this.worker&&this.worker.postMessage(r)}}var i=n(4184),l=n(368),g=n(3976),D=n(6468);let b=(()=>{var c;class r{constructor(){(0,e.c)(this,"date$",(0,D.k)(0,1e3).pipe((0,i.k)(()=>Date.now())))}}return c=r,(0,e.c)(r,"\u0275fac",function(o){return new(o||c)}),(0,e.c)(r,"\u0275cmp",t.In1({type:c,selectors:[["app-clock"]],standalone:!0,features:[t.UHJ],decls:3,vars:6,template:function(o,u){1&o&&(t.OEk(0),t.wVc(1,"date"),t.wVc(2,"async")),2&o&&t.oRS(" ",t.g7$(1,1,t.kDX(2,4,u.date$),"mediumTime")," ")},dependencies:[d.MD,d.a,d.y],encapsulation:2,changeDetection:0})),r})();function R(c,r){if(1&c){const s=t.KQA();t.SAx(0),t.wR5(1,"app-clock"),t.I0R(2,"div",1)(3,"button",2),t.qCj("click",function(){t.usT(s);const u=t.GaO();return t.CGJ(u.workerThread.postMessage())}),t.OEk(4," Run in worker process "),t.C$Y(),t.I0R(5,"p"),t.OEk(6),t.wVc(7,"async"),t.C$Y(),t.I0R(8,"tui-notification"),t.OEk(9,"This would be calculated in several seconds in a background thread"),t.C$Y()(),t.I0R(10,"div",1)(11,"button",2),t.qCj("click",function(){t.usT(s);const u=t.GaO();return t.CGJ(u.emitter.next())}),t.OEk(12," Run in main process "),t.C$Y(),t.I0R(13,"p"),t.OEk(14),t.wVc(15,"async"),t.C$Y(),t.I0R(16,"tui-notification"),t.OEk(17,"This would freeze your main thread for several seconds"),t.C$Y()(),t.k70()}if(2&c){const s=t.GaO();t.yG2(6),t.oRS("Execution time: ",t.kDX(7,2,s.workerData$),""),t.yG2(8),t.oRS("Execution time: ",t.kDX(15,4,s.result$),"")}}function I(){const c=performance.now();return Array.from({length:16e3}).forEach((r,s)=>Array.from({length:s}).reduce(o=>o+1,0)),performance.now()-c}let $=(()=>{var c;class r{constructor(o){(0,e.c)(this,"platformId",void 0),(0,e.c)(this,"isBrowser",(0,d.c0)(this.platformId)),(0,e.c)(this,"workerThread",f.fromFunction(I)),(0,e.c)(this,"workerData$",this.workerThread.pipe(function m(){return(0,i.k)(({data:c})=>c)}())),(0,e.c)(this,"emitter",new y.E),(0,e.c)(this,"result$",this.emitter.pipe((0,i.k)(I))),this.platformId=o}}return c=r,(0,e.c)(r,"\u0275fac",function(o){return new(o||c)(t.GI1(t.AHE))}),(0,e.c)(r,"\u0275cmp",t.In1({type:c,selectors:[["workers-page"]],standalone:!0,features:[t.UHJ],decls:1,vars:1,consts:[[4,"ngIf"],[1,"example"],["appearance","secondary","tuiButton","",3,"click"]],template:function(o,u){1&o&&t.yuY(0,R,18,6,"ng-container",0),2&o&&t.E7m("ngIf",u.isBrowser)},dependencies:[d.MD,d.u_,d.a,l.CI,l.Kw,g.O,g.e,b],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.example[_ngcontent-%COMP%]{min-width:360px;border-top:1px solid gainsboro;margin-top:16px;padding-top:16px}"],changeDetection:0})),r})()},3976:(W,C,n)=>{n.d(C,{O:()=>f,e:()=>w});var e=n(6528),d=n(2320),t=n(7708),v=n(6532),_=n(368),h=n(6568),k=n(8200);function P(i,m){1&i&&e.wR5(0,"tui-svg",5),2&i&&e.E7m("src",m.polymorpheusOutlet)}const O=function(i){return{$implicit:i}};function M(i,m){if(1&i&&(e.SAx(0),e.yuY(1,P,1,1,"tui-svg",4),e.k70()),2&i){const a=e.GaO();e.yG2(1),e.E7m("polymorpheusOutlet",a.icon)("polymorpheusOutletContext",e.S45(2,O,a.status))}}function y(i,m){if(1&i){const a=e.KQA();e.I0R(0,"button",6),e.qCj("click",function(){e.usT(a);const g=e.GaO();return e.CGJ(g.close.emit())}),e.wVc(1,"async"),e.C$Y()}if(2&i){const a=e.GaO();e.E7m("icon",a.icons.close)("title",e.kDX(1,2,a.closeWord$))}}const E=["*"];let w=(()=>{class i{constructor(a,l,g){this.closeWord$=a,this.icons=l,this.options=g,this.hasIcon=this.options.hasIcon,this.icon=this.options.icon,this.status=this.options.status,this.size=this.options.size,this.hideClose=!1,this.close=new e._w7}get hasClose(){return!this.hideClose&&(0,d.UT)(this.close)}}return i.\u0275fac=function(a){return new(a||i)(e.GI1(t.Ks),e.GI1(t.QJ),e.GI1(t.pk))},i.\u0275cmp=e.In1({type:i,selectors:[["tui-notification"],["a","tuiNotification",""],["button","tuiNotification",""]],hostVars:2,hostBindings:function(a,l){2&a&&e.e48("data-status",l.status)("data-size",l.size)},inputs:{hasIcon:"hasIcon",icon:"icon",status:"status",size:"size",hideClose:"hideClose"},outputs:{close:"close"},ngContentSelectors:E,decls:5,vars:3,consts:[[4,"ngIf"],[1,"t-content"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button","class","t-close",3,"icon","title","click",4,"ngIf"],["automation-id","tui-notification__more",1,"t-more",3,"src"],["automation-id","tui-notification__icon","class","t-icon",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-notification__icon",1,"t-icon",3,"src"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button",1,"t-close",3,"icon","title","click"]],template:function(a,l){1&a&&(e.kPM(),e.yuY(0,M,2,4,"ng-container",0),e.I0R(1,"div",1),e._Xx(2),e.C$Y(),e.yuY(3,y,2,4,"button",2),e.wR5(4,"tui-svg",3)),2&a&&(e.E7m("ngIf",l.icon&&l.hasIcon),e.yG2(3),e.E7m("ngIf",l.hasClose),e.yG2(1),e.E7m("src",l.icons.more))},dependencies:[v.Wu,_.Kw,h.u_,k.Af,h.a],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:flex;padding:.75rem 1rem;border-radius:var(--tui-radius-m);background:#fff;background:var(--tui-base-01);box-sizing:border-box;overflow:hidden}[_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{display:none}button[_nghost-%COMP%], a[_nghost-%COMP%]{border:none;cursor:pointer}button[_nghost-%COMP%]   .t-more[_ngcontent-%COMP%], a[_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{display:inline-flex;color:var(--tui-text-01);opacity:.5}[data-size=s][_nghost-%COMP%]{padding:.375rem .625rem}[data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1rem;height:1.25rem;margin:0 .375rem 0 -.125rem}[data-size=s][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem .75rem}[data-size=s][_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem 0}[data-size=m][_nghost-%COMP%]{padding:.75rem}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;margin-right:.5rem}[data-size=m][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.125rem -.125rem 1rem}[data-size=m][_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem 0}[data-size=l][_nghost-%COMP%]{padding:1rem;font:var(--tui-font-text-m);border-radius:var(--tui-radius-l)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;margin-right:.5rem}[data-size=l][_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{margin-right:-.5rem}[data-status=info][_nghost-%COMP%]{color:var(--tui-info-fill);background:linear-gradient(var(--tui-info-bg),var(--tui-info-bg)),var(--tui-base-01)}[data-status=success][_nghost-%COMP%]{color:var(--tui-success-fill);background:linear-gradient(var(--tui-success-bg),var(--tui-success-bg)),var(--tui-base-01)}[data-status=error][_nghost-%COMP%]{color:var(--tui-error-fill);background:linear-gradient(var(--tui-error-bg),var(--tui-error-bg)),var(--tui-base-01)}[data-status=warning][_nghost-%COMP%]{color:var(--tui-warning-fill);background:linear-gradient(var(--tui-warning-bg),var(--tui-warning-bg)),var(--tui-base-01)}[data-status=neutral][_nghost-%COMP%]{color:var(--tui-neutral-fill);background:linear-gradient(var(--tui-neutral-bg),var(--tui-neutral-bg)),var(--tui-base-01)}.t-content[_ngcontent-%COMP%]{flex:1;word-break:break-word;color:var(--tui-text-01);text-align:left;align-self:center}"],changeDetection:0}),i})(),f=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[[h.MD,v.Yt,_.CI,k.Ux]]}),i})()}}]);