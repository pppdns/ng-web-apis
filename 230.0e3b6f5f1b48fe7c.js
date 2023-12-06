"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[230],{22230:(O,s,i)=>{i.r(s),i.d(s,{ScreenOrientationPageModule:()=>S});var c=i(88692),d=i(22864),h=i(16098),g=i(73930),m=i(87241),l=i(14581),p=i(51927),u=i(27969),v=i(66466),e=i(64537);let f=(()=>{var t;class a extends m.y{constructor(n){super(r=>this.stream$.subscribe(r)),this.win=n,this.stream$=(this.isModern?(0,l.R)(this.win.screen.orientation,"change").pipe((0,p.O)(null),(0,u.U)(()=>this.win.screen.orientation.type)):(0,l.R)(this.win,"orientationchange").pipe((0,p.O)(null),(0,u.U)(()=>{switch(parseInt(this.win.orientation,10)){case 0:return"portrait-primary";case 180:return"portrait-secondary";case 90:return"landscape-primary";case-90:return"landscape-secondary"}}))).pipe((0,v.d)({bufferSize:1,refCount:!0}))}get isModern(){var n,r;return!(null===(n=this.win)||void 0===n||null===(r=n.screen)||void 0===r||!r.orientation)}}return(t=a).\u0275fac=function(n){return new(n||t)(e.LFG(g.m9))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),a})(),Z=(()=>{var t;class a{constructor(n){this.orientation$=n,this.sample="import {ScreenOrientationService} from '@ng-web-apis/screen-orientation';\n\n// ...\nexport class MyComponent {\n  constructor(readonly orientation$: ScreenOrientationService) {}\n}",this.sampleHtml="<p>{{ orientation$ | async }}</p>"}}return(t=a).\u0275fac=function(n){return new(n||t)(e.Y36(f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["screen-orientation-page"]],decls:31,vars:5,consts:[[3,"highlight"]],template:function(n,r){1&n&&(e.TgZ(0,"p")(1,"b"),e._uU(2,"Current type:\xa0"),e.qZA(),e.TgZ(3,"code"),e._uU(4),e.ALo(5,"async"),e.qZA()(),e._UZ(6,"hr")(7,"br"),e.TgZ(8,"h2"),e._uU(9,"How to use"),e.qZA(),e.TgZ(10,"pre"),e._UZ(11,"code",0),e.qZA(),e.TgZ(12,"pre"),e._UZ(13,"code",0),e.qZA(),e._UZ(14,"hr"),e.TgZ(15,"p")(16,"b"),e._uU(17,"Landscape-primary"),e.qZA(),e._uU(18," is an orientation where the screen width is greater than the screen height. If the device's natural orientation is landscape, then it is in landscape-primary when held in that position. If the device's natural orientation is portrait, the user agent sets landscape-primary from the two options as shown in the screen orientation values table.\n"),e.qZA(),e.TgZ(19,"p")(20,"b"),e._uU(21,"Landscape-secondary"),e.qZA(),e._uU(22," is an orientation where the screen width is greater than the screen height. If the device's natural orientation is landscape, it is in landscape-secondary when rotated 180\xba from its natural orientation. If the device's natural orientation is portrait, the user agent sets landscape-secondary from the two options as shown in the screen orientation values table.\n"),e.qZA(),e.TgZ(23,"p")(24,"b"),e._uU(25,"Portrait-primary"),e.qZA(),e._uU(26," is an orientation where the screen width is less than or equal to the screen height. If the device's natural orientation is portrait, then it is in portrait-primary when held in that position. If the device's natural orientation is landscape, the user agent sets portrait-primary from the two options as shown in the screen orientation values table.\n"),e.qZA(),e.TgZ(27,"p")(28,"b"),e._uU(29,"Portrait-secondary"),e.qZA(),e._uU(30," is an orientation where the screen width is less than or equal to the screen height. If the device's natural orientation is portrait, then it is in portrait-secondary when rotated 180\xba from its natural position. If the device's natural orientation is landscape, the user agent sets portrait-secondary from the two options as shown in the screen orientation values table.\n"),e.qZA()),2&n&&(e.xp6(4),e.Oqu(e.lcZ(5,3,r.orientation$)),e.xp6(7),e.Q6J("highlight",r.sample),e.xp6(2),e.Q6J("highlight",r.sampleHtml))},dependencies:[h.y$,c.Ov],styles:["[_nghost-%COMP%]{display:block;max-width:700px;margin:0 auto;line-height:1.5;font-size:1.1em}button[_ngcontent-%COMP%]{margin:0 auto;display:block}iframe[_ngcontent-%COMP%]{width:100%;height:20rem}"],changeDetection:0}),a})(),S=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,h._l,d.Bz.forChild([{path:"",component:Z}])]}),a})()}}]);