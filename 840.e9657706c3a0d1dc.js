"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[840],{428:(R,x,u)=>{u.r(x),u.d(x,{default:()=>Ee});var o=u(6889),_=u(8692),C=u(9900),c=u(190),p=u(3672),m=u(2942),M=u(2628),w=u(9506),O=u(441),G=u(9186),y=u(6437),e=u(4537),b=u(6480),z=u(3770),I=u(8033),j=u(3633),q=u(5059),V=u(6060),W=u(2130),k=u(1906);const te=["*"];let X=(()=>{class n extends b.F9{constructor(i,t,a,s){super(i,t),this.mode$=a,this.options=s,this.size=this.options.size,this.identityMatcher=z.bg,this.pseudoDisabled=!1}get nativeFocusableElement(){var i,t;return null!==(t=null===(i=this.radio)||void 0===i?void 0:i.nativeFocusableElement)&&void 0!==t?t:null}get focused(){return!!this.radio&&this.radio.focused}get computedDisabled(){return this.disabled||this.pseudoDisabled}onFocused(i){this.updateFocused(i)}onModelChange(i){this.value=i}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(C.a5,10),e.Y36(e.sBO),e.Y36(V.Au),e.Y36(k.nh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-radio-labeled"]],viewQuery:function(i,t){if(1&i&&e.Gf(k._M,5),2&i){let a;e.iGM(a=e.CRH())&&(t.radio=a.first)}},hostVars:1,hostBindings:function(i,t){1&i&&e.NdJ("$.data-mode.attr",function(){return t.mode$}),2&i&&e.uIk("data-size",t.size)},inputs:{item:"item",size:"size",identityMatcher:"identityMatcher",pseudoDisabled:"pseudoDisabled"},features:[e._Bn([(0,I.FT)(n),(0,b.wB)(n),W.CV]),e.qOj],ngContentSelectors:te,decls:4,vars:15,consts:[[1,"t-wrapper"],[3,"focusable","identityMatcher","item","name","nativeId","pseudoActive","pseudoDisabled","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","size","ngModel","ngModelChange","focusedChange"],[1,"t-content"]],template:function(i,t){1&i&&(e.F$t(),e.TgZ(0,"label",0)(1,"tui-radio",1),e.NdJ("ngModelChange",function(s){return t.value=s})("focusedChange",function(s){return t.onFocused(s)}),e.qZA(),e.TgZ(2,"div",2),e.Hsn(3),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("focusable",t.focusable)("identityMatcher",t.identityMatcher)("item",t.item)("name",t.computedName||"")("nativeId",t.nativeId)("pseudoActive",t.pseudoActive)("pseudoDisabled",t.computedDisabled)("pseudoFocus",t.pseudoFocus)("pseudoHover",t.pseudoHover)("pseudoInvalid",t.computedInvalid)("readOnly",t.readOnly)("size",t.size)("ngModel",t.value),e.xp6(1),e.ekj("t-content_disabled",t.computedDisabled))},dependencies:[k._M,C.JJ,C.On],styles:["[_nghost-%COMP%]{position:relative;display:block;font:var(--tui-font-text-s);line-height:1rem}._readonly[_nghost-%COMP%]{pointer-events:none}.t-wrapper[_ngcontent-%COMP%]{display:inline-flex;max-width:100%;cursor:pointer;vertical-align:top;align-items:inherit}._disabled[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{cursor:default}[data-mode=onDark][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.t-content[_ngcontent-%COMP%]{word-wrap:break-word;min-width:0}.t-content_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{margin-left:.5rem}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m);margin-left:.75rem}"],changeDetection:0}),n})(),ee=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.ez,C.u5,j.u,q.F,k.FE]]}),n})();var g=u(8024),Z=u(6511),f=u(47),l=u(4911),B=u(8023),S=u(4945),ie=u(1528),J=u(5124),ae=u(2936),D=u(5155),E=u(4533),P=u(7282);let re=(()=>{var n;class r extends AudioBufferSourceNode{set bufferSetter(t){this.buffer$.next(t)}constructor(t,a,s,d,h,v){const Q=(0,P.Q)(h,0),T=(0,P.Q)(v,1);if(!s){const N=a.createBufferSource();return Object.setPrototypeOf(r.prototype,Object.getPrototypeOf(N)),Object.setPrototypeOf(N,r.prototype),N.playbackRate.value=T,r.init(N,null,d,t),N}super(a,{detune:Q,playbackRate:T}),(0,o.Z)(this,"detuneParam",void 0),(0,o.Z)(this,"playbackRateParam",void 0),(0,o.Z)(this,"ended",void 0),(0,o.Z)(this,"buffer$",void 0),r.init(this,null,d,t)}static init(t,a,s,d){null!==s&&t.start();const h=new e.vpe;t.ended=h,t.onended=()=>h.emit(),t.buffer$=new B.x,t.buffer$.pipe((0,ie.w)(v=>"string"==typeof v?d.fetch(v):(0,S.of)(v))).subscribe(v=>{t.buffer=v})}ngOnDestroy(){this.buffer$.complete();try{this.stop()}catch{}this.disconnect()}}return n=r,(0,o.Z)(r,"\u0275fac",function(t){return new(t||n)(e.Y36(ae.L),e.Y36(c.N),e.Y36(E.j),e.$8M("autoplay"),e.$8M("detune"),e.$8M("playbackRate"))}),(0,o.Z)(r,"\u0275dir",e.lG2({type:n,selectors:[["","waAudioBufferSourceNode",""]],inputs:{loop:"loop",loopStart:"loopStart",loopEnd:"loopEnd",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",bufferSetter:["buffer","bufferSetter"],detuneParam:["detune","detuneParam"],playbackRateParam:["playbackRate","playbackRateParam"]},outputs:{ended:"ended"},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,D.j)(n)]),e.qOj]})),(0,l.gn)([(0,J.v)("detune")],r.prototype,"detuneParam",void 0),(0,l.gn)([(0,J.v)("playbackRate")],r.prototype,"playbackRateParam",void 0),r})(),se=(()=>{var n;class r extends MediaElementAudioSourceNode{constructor(t,a,{nativeElement:s}){if(!a){const d=t.createMediaElementSource(s);return Object.setPrototypeOf(d,r.prototype),d}super(t,{mediaElement:s})}ngOnDestroy(){this.disconnect()}}return n=r,(0,o.Z)(r,"\u0275fac",function(t){return new(t||n)(e.Y36(c.N),e.Y36(E.j),e.Y36(e.SBq))}),(0,o.Z)(r,"\u0275dir",e.lG2({type:n,selectors:[["audio","waMediaElementAudioSourceNode",""],["video","waMediaElementAudioSourceNode",""]],exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,D.j)(n)]),e.qOj]})),r})();var ue=u(5772),L=u(2725),Y=u(9239),H=u(7969),K=u(815),F=u(2568);let de=(()=>{var n;class r extends AnalyserNode{constructor(t,a,s,d,h,v,Q){const T=(0,P.Q)(d,2048),N=(0,P.Q)(h,-30),U=(0,P.Q)(v,-100),$=(0,P.Q)(Q,.8);if(!s){const A=t.createAnalyser();return Object.setPrototypeOf(A,r.prototype),r.init(A,a),A.fftSize=T,A.maxDecibels=N,A.minDecibels=U,A.smoothingTimeConstant=$,A}super(t,{fftSize:T,maxDecibels:N,minDecibels:U,smoothingTimeConstant:$}),(0,o.Z)(this,"frequencyByte$",void 0),(0,o.Z)(this,"frequencyFloat$",void 0),(0,o.Z)(this,"timeByte$",void 0),(0,o.Z)(this,"timeFloat$",void 0),r.init(this,a)}static init(t,a){(0,F.$)(a,t);let s=new Uint8Array(t.frequencyBinCount),d=new Float32Array(t.frequencyBinCount),h=new Uint8Array(t.fftSize),v=new Float32Array(t.fftSize);t.frequencyByte$=(0,L.F)(0,Y.Z).pipe((0,H.U)(()=>(s.length!==t.frequencyBinCount&&(s=new Uint8Array(t.frequencyBinCount)),t.getByteFrequencyData(s),s)),(0,K.B)()),t.frequencyFloat$=(0,L.F)(0,Y.Z).pipe((0,H.U)(()=>(d.length!==t.frequencyBinCount&&(d=new Float32Array(t.frequencyBinCount)),t.getFloatFrequencyData(d),d)),(0,K.B)()),t.timeByte$=(0,L.F)(0,Y.Z).pipe((0,H.U)(()=>(h.length!==t.fftSize&&(h=new Uint8Array(t.frequencyBinCount)),t.getByteTimeDomainData(h),h)),(0,K.B)()),t.timeFloat$=(0,L.F)(0,Y.Z).pipe((0,H.U)(()=>(v.length!==t.fftSize&&(v=new Float32Array(t.frequencyBinCount)),t.getFloatTimeDomainData(v),v)),(0,K.B)())}ngOnDestroy(){this.disconnect()}}return n=r,(0,o.Z)(r,"\u0275fac",function(t){return new(t||n)(e.Y36(c.N),e.Y36(D.K,4),e.Y36(E.j),e.$8M("fftSize"),e.$8M("maxDecibels"),e.$8M("minDecibels"),e.$8M("smoothingTimeConstant"))}),(0,o.Z)(r,"\u0275dir",e.lG2({type:n,selectors:[["","waAnalyserNode",""]],inputs:{fftSize:"fftSize",minDecibels:"minDecibels",maxDecibels:"maxDecibels",smoothingTimeConstant:"smoothingTimeConstant",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation"},outputs:{frequencyByte$:"frequencyByte$",frequencyFloat$:"frequencyFloat$",timeByte$:"timeByte$",timeFloat$:"timeFloat$"},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,D.j)(n)]),e.qOj]})),r})(),ce=(()=>{var n;class r extends BiquadFilterNode{constructor(t,a,s,d,h,v,Q){const T=(0,P.Q)(d,0),N=(0,P.Q)(h,350),U=(0,P.Q)(v,0),$=(0,P.Q)(Q,1);if(!a){const A=t.createBiquadFilter();return Object.setPrototypeOf(A,r.prototype),A.detune.value=T,A.frequency.value=N,A.gain.value=U,A.Q.value=$,(0,F.$)(s,A),A}super(t,{detune:T,frequency:N,gain:U,Q:$}),(0,o.Z)(this,"detuneParam",void 0),(0,o.Z)(this,"frequencyParam",void 0),(0,o.Z)(this,"gainParam",void 0),(0,o.Z)(this,"qParam",void 0),(0,F.$)(s,this)}static init(t,a){(0,F.$)(a,t)}ngOnDestroy(){this.disconnect()}}return n=r,(0,o.Z)(r,"\u0275fac",function(t){return new(t||n)(e.Y36(c.N),e.Y36(E.j),e.Y36(D.K,4),e.$8M("detune"),e.$8M("frequency"),e.$8M("gain"),e.$8M("Q"))}),(0,o.Z)(r,"\u0275dir",e.lG2({type:n,selectors:[["","waBiquadFilterNode",""]],inputs:{type:"type",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",detuneParam:["detune","detuneParam"],frequencyParam:["frequency","frequencyParam"],gainParam:["gain","gainParam"],qParam:["Q","qParam"]},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,D.j)(n)]),e.qOj]})),(0,l.gn)([(0,J.v)("detune")],r.prototype,"detuneParam",void 0),(0,l.gn)([(0,J.v)("frequency")],r.prototype,"frequencyParam",void 0),(0,l.gn)([(0,J.v)("gain")],r.prototype,"gainParam",void 0),(0,l.gn)([(0,J.v)("Q")],r.prototype,"qParam",void 0),r})();var le=u(6667);let ge=(()=>{var n;class r extends DelayNode{constructor(t,a,s,d,h){const v=(0,P.Q)(d,0),Q=(0,P.Q)(h,1);if(!s){const T=t.createDelay(Q);return Object.setPrototypeOf(T,r.prototype),(0,F.$)(a,T),T.delayTime.value=v,T}super(t,{delayTime:v,maxDelayTime:Q}),(0,o.Z)(this,"delayTimeParam",void 0),(0,F.$)(a,this)}static init(t,a){(0,F.$)(a,t)}ngOnDestroy(){this.disconnect()}}return n=r,(0,o.Z)(r,"\u0275fac",function(t){return new(t||n)(e.Y36(c.N),e.Y36(D.K,4),e.Y36(E.j),e.$8M("delayTime"),e.$8M("maxDelayTime"))}),(0,o.Z)(r,"\u0275dir",e.lG2({type:n,selectors:[["","waDelayNode",""]],inputs:{channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",delayTimeParam:["delayTime","delayTimeParam"]},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,D.j)(n)]),e.qOj]})),(0,l.gn)([(0,J.v)("delayTime")],r.prototype,"delayTimeParam",void 0),r})();var pe=u(3555);function ne(n){if(!n)return 0;if("number"==typeof n)return n;if(n instanceof Array){const r=n[n.length-1].value;return"number"==typeof r?r:r[r.length-1]}return n.value instanceof Array?n.value[n.value.length-1]:n.value}var me=u(4676);let fe=(()=>{var n;class r extends StereoPannerNode{set panParam(t){"setPosition"in this?this.fallbackToPannerNode(ne(t)):(0,me.Z)(this.pan,t,this.context.currentTime)}constructor(t,a,s){const d=(0,P.Q)(s,0);try{new StereoPannerNode(t)}catch{const h=t.createPanner();return Object.setPrototypeOf(h,r.prototype),h.fallbackToPannerNode(ne(d)),(0,F.$)(a,h),h}super(t,{pan:d}),(0,F.$)(a,this)}ngOnDestroy(){this.disconnect()}fallbackToPannerNode(t){const a=100*t,s=a>0?270-a:a+90,d=Math.sin(a*(Math.PI/180)),h=Math.sin(s*(Math.PI/180));this.setPosition(d,0,h)}}return n=r,(0,o.Z)(r,"\u0275fac",function(t){return new(t||n)(e.Y36(c.N),e.Y36(D.K,4),e.$8M("pan"))}),(0,o.Z)(r,"\u0275dir",e.lG2({type:n,selectors:[["","waStereoPannerNode",""]],inputs:{channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",panParam:["pan","panParam"]},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,D.j)(n)]),e.qOj]})),r})(),he=(()=>{var n;class r extends WaveShaperNode{constructor(t,a,s){if(!s){const d=t.createWaveShaper();return Object.setPrototypeOf(d,r.prototype),(0,F.$)(a,d),d}super(t),(0,F.$)(a,this)}ngOnDestroy(){this.disconnect()}}return n=r,(0,o.Z)(r,"\u0275fac",function(t){return new(t||n)(e.Y36(c.N),e.Y36(D.K,4),e.Y36(E.j))}),(0,o.Z)(r,"\u0275dir",e.lG2({type:n,selectors:[["","waWaveShaperNode",""]],inputs:{oversample:"oversample",curve:"curve",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation"},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,D.j)(n)]),e.qOj]})),r})(),_e=(()=>{var n;class r{transform(t,a,s="exponential"){return t instanceof Array?{value:t,duration:a}:{value:t,duration:a,mode:s}}}return n=r,(0,o.Z)(r,"\u0275fac",function(t){return new(t||n)}),(0,o.Z)(r,"\u0275pipe",e.Yjl({name:"waAudioParam",type:n,pure:!0,standalone:!0})),r})(),Ce=(()=>{var n;class r{constructor(t){(0,o.Z)(this,"context",void 0),this.context=t}transform(t,a,s){return this.context.createPeriodicWave(new Float32Array(t),a?new Float32Array(a):new Float32Array(t.length),{disableNormalization:!!s})}}return n=r,(0,o.Z)(r,"\u0275fac",function(t){return new(t||n)(e.Y36(c.N,16))}),(0,o.Z)(r,"\u0275pipe",e.Yjl({name:"waPeriodicWave",type:n,pure:!0,standalone:!0})),r})();var Me=u(6134),ve=u(9641),ye=u(454),Ae=u(5590),Pe=u(9806);let Te=(()=>{var n;class r{transform(t){return new Path2D(t)}}return n=r,(0,o.Z)(r,"\u0275fac",function(t){return new(t||n)}),(0,o.Z)(r,"\u0275pipe",e.Yjl({name:"path",type:n,pure:!0,standalone:!0})),r})();var xe=u(7489),be=u(5111);const Ze=["chain"];function De(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"button",2),e.NdJ("click",function(){e.CHM(i);const a=e.oxw();return e.KtG(a.start())}),e._uU(1," Start AudioContext\n"),e.qZA()}}function Oe(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"button",17,18),e.NdJ("click",function(a){e.CHM(i);const s=e.MAs(1),d=e.oxw(3);return e.KtG(d.onClick(s,a.target))}),e._uU(2," Play "),e.ynx(3,19),e.NdJ("timeByte$",function(a){e.CHM(i);const s=e.oxw(3);return e.KtG(s.onTimeDomain(a))}),e.GkF(4,20),e.BQk(),e.qZA()}if(2&n){e.oxw(2);const i=e.MAs(27),t=e.oxw();e.Q6J("loop",!0),e.xp6(3),e.Q6J("fftSize",t.fftSize),e.xp6(1),e.Q6J("waOutput",t.chain||i)}}function Fe(n,r){if(1&n&&(e.ynx(0),e.YNc(1,Oe,5,3,"button",16),e.BQk()),2&n){const i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",i.buffers)}}function Ne(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"audio",21),e.ynx(1,19),e.NdJ("timeByte$",function(a){e.CHM(i);const s=e.oxw(2);return e.KtG(s.onTimeDomain(a))}),e.GkF(2,20),e.BQk(),e.qZA()}if(2&n){e.oxw();const i=e.MAs(27),t=e.oxw();e.xp6(1),e.Q6J("fftSize",t.fftSize),e.xp6(1),e.Q6J("waOutput",t.chain||i)}}function we(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"button",23,18),e.NdJ("click",function(a){e.CHM(i);const s=e.MAs(1),d=e.oxw(3);return e.KtG(d.onClick(s,a.target))}),e.ALo(2,"waPeriodicWave"),e._uU(3," Play "),e.ynx(4,19),e.NdJ("timeByte$",function(a){e.CHM(i);const s=e.oxw(3);return e.KtG(s.onTimeDomain(a))}),e.GkF(5,20),e.BQk(),e.qZA()}if(2&n){e.oxw(2);const i=e.MAs(27),t=e.oxw();e.Q6J("frequency",100)("periodicWave",e.lcZ(2,4,t.real)),e.xp6(4),e.Q6J("fftSize",t.fftSize),e.xp6(1),e.Q6J("waOutput",t.chain||i)}}function Be(n,r){if(1&n&&(e.ynx(0),e.YNc(1,we,6,6,"button",22),e.BQk()),2&n){const i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",i.buffers)}}function Se(n,r){if(1&n){const i=e.EpF();e.ynx(0),e.TgZ(1,"fieldset",24,25),e.ALo(3,"waAudioParam"),e.TgZ(4,"legend"),e._uU(5,"GainNode"),e.qZA(),e.TgZ(6,"input",26),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw(2);return e.KtG(s.gain=a)}),e.qZA(),e.TgZ(7,"fieldset",27),e.ALo(8,"waAudioParam"),e.TgZ(9,"legend"),e._uU(10,"StereoPannerNode"),e.qZA(),e.TgZ(11,"input",28),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw(2);return e.KtG(s.pan=a)}),e.qZA(),e.TgZ(12,"fieldset",29)(13,"legend"),e._uU(14,"AudioDestinationNode"),e.qZA()()()(),e.BQk()}if(2&n){const i=e.oxw(2);e.xp6(1),e.Q6J("gain",e.xi3(3,4,i.gain,.1)),e.xp6(5),e.Q6J("ngModel",i.gain),e.xp6(1),e.Q6J("pan",e.xi3(8,7,i.pan,.1)),e.xp6(4),e.Q6J("ngModel",i.pan)}}function ke(n,r){if(1&n){const i=e.EpF();e.ynx(0),e.TgZ(1,"fieldset",24,25),e.ALo(3,"waAudioParam"),e.TgZ(4,"legend"),e._uU(5,"GainNode"),e.qZA(),e.TgZ(6,"em"),e._uU(7,"For feedback loop purposes only"),e.qZA(),e.TgZ(8,"fieldset",30),e.ALo(9,"waAudioParam"),e.TgZ(10,"legend"),e._uU(11,"DelayNode"),e.qZA(),e.TgZ(12,"input",26),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw(2);return e.KtG(s.delayTime=a)}),e.qZA(),e.TgZ(13,"fieldset",24)(14,"legend"),e._uU(15,"GainNode"),e.qZA(),e.TgZ(16,"input",26),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw(2);return e.KtG(s.delayGain=a)}),e.qZA(),e.TgZ(17,"fieldset",20)(18,"legend"),e._uU(19,"Output"),e.qZA(),e.TgZ(20,"em"),e._uU(21,"Connected back to the beginning of the chain"),e.qZA()()()(),e.TgZ(22,"fieldset",29)(23,"legend"),e._uU(24,"AudioDestinationNode"),e.qZA()()(),e.BQk()}if(2&n){const i=e.MAs(2),t=e.oxw(2);e.xp6(1),e.Q6J("gain",e.xi3(3,6,t.gain,.1)),e.xp6(7),e.Q6J("delayTime",e.xi3(9,9,t.delayTime,.1)),e.xp6(4),e.Q6J("ngModel",t.delayTime),e.xp6(1),e.Q6J("gain",t.delayGain),e.xp6(3),e.Q6J("ngModel",t.delayGain),e.xp6(1),e.Q6J("waOutput",i)}}function Qe(n,r){if(1&n&&e._UZ(0,"tui-data-list-wrapper",44),2&n){const i=e.oxw(3);e.Q6J("items",i.items)}}function Je(n,r){if(1&n){const i=e.EpF();e.ynx(0),e.TgZ(1,"fieldset",31,25),e.ALo(3,"waAudioParam"),e.ALo(4,"waAudioParam"),e.ALo(5,"waAudioParam"),e.ALo(6,"waAudioParam"),e.TgZ(7,"legend"),e._uU(8,"BiquadFilterNode"),e.qZA(),e.TgZ(9,"tui-select",32),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw(2);return e.KtG(s.type=a)}),e._uU(10," Type "),e.YNc(11,Qe,1,1,"tui-data-list-wrapper",33),e.qZA(),e.TgZ(12,"label",34)(13,"input",26),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw(2);return e.KtG(s.filterGain=a)}),e.qZA()(),e.TgZ(14,"label",35)(15,"input",36),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw(2);return e.KtG(s.frequency=a)}),e.qZA()(),e.TgZ(16,"label",37)(17,"input",38),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw(2);return e.KtG(s.Q=a)}),e.qZA()(),e.TgZ(18,"label",39)(19,"input",40),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw(2);return e.KtG(s.detune=a)}),e.qZA()(),e.TgZ(20,"fieldset",41)(21,"legend"),e._uU(22,"WaveShaperNode"),e.qZA(),e.TgZ(23,"input",42),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw(2);return e.KtG(s.onCurveChange(a))}),e.qZA(),e.ynx(24,24),e.ALo(25,"waAudioParam"),e.TgZ(26,"fieldset",43)(27,"legend"),e._uU(28,"ConvolverNode"),e.qZA(),e.TgZ(29,"fieldset",29)(30,"legend"),e._uU(31,"AudioDestinationNode"),e.qZA()()(),e.BQk(),e.qZA()(),e.BQk()}if(2&n){const i=e.oxw(2);e.xp6(1),e.Q6J("detune",e.xi3(3,13,i.detune,.1))("frequency",e.xi3(4,16,i.frequency,.1))("gain",e.xi3(5,19,i.filterGain,.1))("Q",e.xi3(6,22,i.Q,.1))("type",i.type),e.xp6(8),e.Q6J("ngModel",i.type),e.xp6(4),e.Q6J("ngModel",i.filterGain),e.xp6(2),e.Q6J("ngModel",i.frequency),e.xp6(2),e.Q6J("ngModel",i.Q),e.xp6(2),e.Q6J("ngModel",i.detune),e.xp6(1),e.Q6J("curve",i.curve),e.xp6(3),e.Q6J("ngModel",i.distortion),e.xp6(1),e.Q6J("gain",e.xi3(25,25,i.distortionCompensation,.1))}}function Ge(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"section")(1,"h2"),e._uU(2,"Description"),e.qZA(),e.TgZ(3,"p"),e._uU(4," This is a demo for "),e.TgZ(5,"strong"),e._uU(6,"@ng-web-apis/audio"),e.qZA(),e._uU(7," \u2014 a Web Audio API declarative library for Angular. Here you can select different audio source options and see AudioNode graph for selected configuration. Demo page uses HTML elements as directives hosts, in real life scenario you can use "),e.TgZ(8,"code"),e._uU(9,"ng-container"),e.qZA(),e._uU(10," so you will not have redundant DOM tags. "),e.qZA()(),e.TgZ(11,"section")(12,"h2"),e._uU(13,"Source"),e.qZA(),e.TgZ(14,"tui-radio-labeled",3),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw();return e.KtG(s.selectedSource=a)}),e._uU(15," AudioBufferSourceNode "),e.qZA(),e.TgZ(16,"tui-radio-labeled",4),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw();return e.KtG(s.selectedSource=a)}),e._uU(17," MediaElementAudioSourceNode "),e.qZA(),e.TgZ(18,"tui-radio-labeled",5),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw();return e.KtG(s.selectedSource=a)}),e._uU(19," OscillatorNode "),e.qZA(),e.ynx(20,6),e.YNc(21,Fe,2,1,"ng-container",7),e.YNc(22,Ne,3,2,"audio",8),e.YNc(23,Be,2,1,"ng-container",7),e.BQk(),e.TgZ(24,"p")(25,"canvas",9,10),e._UZ(28,"canvas-path",11),e.ALo(29,"path"),e.ALo(30,"transform"),e.qZA()()(),e.TgZ(31,"section")(32,"h2"),e._uU(33,"Chain"),e.qZA(),e.TgZ(34,"tui-radio-labeled",12),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw();return e.KtG(s.selectedChain=a)}),e._uU(35," Dry "),e.qZA(),e.TgZ(36,"tui-radio-labeled",13),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw();return e.KtG(s.selectedChain=a)}),e._uU(37," Balance "),e.qZA(),e.TgZ(38,"tui-radio-labeled",14),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw();return e.KtG(s.selectedChain=a)}),e._uU(39," Delay "),e.qZA(),e.TgZ(40,"tui-radio-labeled",15),e.NdJ("ngModelChange",function(a){e.CHM(i);const s=e.oxw();return e.KtG(s.selectedChain=a)}),e._uU(41," Complex "),e.qZA(),e.ynx(42,6),e.YNc(43,Se,15,10,"ng-container",7),e.YNc(44,ke,25,12,"ng-container",7),e.YNc(45,Je,32,28,"ng-container",7),e.BQk(),e.qZA()}if(2&n){const i=e.MAs(26),t=e.oxw();e.xp6(14),e.Q6J("ngModel",t.selectedSource),e.xp6(2),e.Q6J("ngModel",t.selectedSource),e.xp6(2),e.Q6J("ngModel",t.selectedSource),e.xp6(2),e.Q6J("ngSwitch",t.selectedSource),e.xp6(1),e.Q6J("ngSwitchCase","buffer"),e.xp6(1),e.Q6J("ngSwitchCase","media"),e.xp6(1),e.Q6J("ngSwitchCase","oscillator"),e.xp6(5),e.Q6J("lineWidth",4/i.height)("path",e.lcZ(29,18,t.path))("transform",e.lcZ(30,20,t.getTransform(i))),e.xp6(6),e.Q6J("ngModel",t.selectedChain),e.xp6(2),e.Q6J("ngModel",t.selectedChain),e.xp6(2),e.Q6J("ngModel",t.selectedChain),e.xp6(2),e.Q6J("ngModel",t.selectedChain),e.xp6(2),e.Q6J("ngSwitch",t.selectedChain),e.xp6(1),e.Q6J("ngSwitchCase","balance"),e.xp6(1),e.Q6J("ngSwitchCase","delay"),e.xp6(1),e.Q6J("ngSwitchCase","complex")}}let Ee=(()=>{var n;class r{constructor(t){(0,o.Z)(this,"context",void 0),(0,o.Z)(this,"chain",void 0),(0,o.Z)(this,"buffers",[Date.now()]),(0,o.Z)(this,"selectedChain","dry"),(0,o.Z)(this,"selectedSource","buffer"),(0,o.Z)(this,"gain",1),(0,o.Z)(this,"pan",0),(0,o.Z)(this,"delayTime",1),(0,o.Z)(this,"delayGain",.5),(0,o.Z)(this,"distortion",20),(0,o.Z)(this,"frequency",350),(0,o.Z)(this,"detune",0),(0,o.Z)(this,"filterGain",0),(0,o.Z)(this,"Q",1),(0,o.Z)(this,"type","lowpass"),(0,o.Z)(this,"curve",oe(this.distortion)),(0,o.Z)(this,"started",!1),(0,o.Z)(this,"fftSize",2048),(0,o.Z)(this,"path",""),(0,o.Z)(this,"items",["lowpass","highpass","bandpass","lowshelf","highshelf","peaking","notch","allpass"]),(0,o.Z)(this,"real",[0,0,1,0,1]),this.context=t}get distortionCompensation(){return 1.2-this.distortion/20}start(){this.started=!0,this.context.resume()}getTransform({width:t,height:a}){return`scale(${t/this.fftSize}, ${a/2})`}onCurveChange(t){this.distortion=t,this.curve=oe(t)}onClick(t,a){"Play"===a.textContent.trim()?(a.textContent="Stop",t.start()):this.buffers[0]=Date.now()}onTimeDomain(t){this.path=t.reduce((a,s,d)=>`${a} L ${d} ${s/128}`,"M 0 0")}}return n=r,(0,o.Z)(r,"\u0275fac",function(t){return new(t||n)(e.Y36(c.N))}),(0,o.Z)(r,"\u0275cmp",e.Xpm({type:n,selectors:[["audio-page"]],viewQuery:function(t,a){if(1&t&&e.Gf(Ze,5),2&t){let s;e.iGM(s=e.CRH())&&(a.chain=s.first)}},standalone:!0,features:[e.jDz],decls:3,vars:2,consts:[["appearance","secondary","tuiButton","",3,"click",4,"ngIf","ngIfElse"],["graph",""],["appearance","secondary","tuiButton","",3,"click"],["item","buffer","name","source",3,"ngModel","ngModelChange"],["item","media","name","source",3,"ngModel","ngModelChange"],["item","oscillator","name","source",3,"ngModel","ngModelChange"],[3,"ngSwitch"],[4,"ngSwitchCase"],["controls","","loop","","src","assets/demo.mp3","waMediaElementAudioSourceNode","",4,"ngSwitchCase"],["waAudioDestinationNode","","waCanvas2d","",1,"canvas"],["canvas","","fallback","AudioNode"],["fillStyle","transparent","strokeStyle","black",3,"lineWidth","path","transform"],["item","dry","name","chain",3,"ngModel","ngModelChange"],["item","balance","name","chain",3,"ngModel","ngModelChange"],["item","delay","name","chain",3,"ngModel","ngModelChange"],["item","complex","name","chain",3,"ngModel","ngModelChange"],["buffer","assets/demo.mp3","size","s","tuiButton","","waAudioBufferSourceNode","",3,"loop","click",4,"ngFor","ngForOf"],["buffer","assets/demo.mp3","size","s","tuiButton","","waAudioBufferSourceNode","",3,"loop","click"],["source","AudioNode"],["waAnalyserNode","",3,"fftSize","timeByte$"],[3,"waOutput"],["controls","","loop","","src","assets/demo.mp3","waMediaElementAudioSourceNode",""],["size","s","tuiButton","","waOscillatorNode","",3,"frequency","periodicWave","click",4,"ngFor","ngForOf"],["size","s","tuiButton","","waOscillatorNode","",3,"frequency","periodicWave","click"],["waGainNode","",3,"gain"],["chain","AudioNode"],["max","1","min","0","step","0.01","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["waStereoPannerNode","",3,"pan"],["max","1","min","-1","step","0.01","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["waAudioDestinationNode",""],["waDelayNode","",3,"delayTime"],["waBiquadFilterNode","",3,"detune","frequency","gain","Q","type"],["tuiTextfieldSize","m",3,"ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["tuiLabel","gain"],["tuiLabel","frequence"],["max","5000","min","20","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["tuiLabel","Q"],["max","100","min","1","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["tuiLabel","detune"],["max","100","min","0","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["oversample","4x","waWaveShaperNode","",3,"curve"],["max","20","min","0","step","0.1","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["buffer","assets/response.m4a","waConvolverNode",""],[3,"items"]],template:function(t,a){if(1&t&&(e.YNc(0,De,2,0,"button",0),e.YNc(1,Ge,46,22,"ng-template",null,1,e.W1O)),2&t){const s=e.MAs(2);e.Q6J("ngIf",!a.started)("ngIfElse",s)}},dependencies:[_.ez,_.sg,_.O5,_.RF,_.n9,C.u5,C.Fj,C.eT,C.JJ,C.On,p.O,Z.i,f.g,re,se,ue.P,de,ce,le.g,ge,pe.z,fe,he,_e,Ce,m.tZ,Me.C,ve.$,ye.l,Ae.I,Pe.g,Te,xe.a,M.fN,M.v0,G.c2,G.iN,w.U,w.A,y.Jy,y.uJ,y.OI,ee,X,O.cn,O.sz,g.zX,g.eC,be.gX],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;gap:12px}@media (max-width: 1100px){[_nghost-%COMP%]{flex-direction:column;width:320px;margin:0 auto}}tui-radio-labeled[_ngcontent-%COMP%]{margin:1rem 0}section[_ngcontent-%COMP%]{flex:1;max-width:320px;padding:1px 10px 10px;box-sizing:border-box;background:whitesmoke;border-radius:8px}audio[_ngcontent-%COMP%]{margin-top:1em}label[_ngcontent-%COMP%]{margin-top:.5rem}input[_ngcontent-%COMP%]{margin:0}fieldset[_ngcontent-%COMP%]{margin-top:1em;border:none;border-radius:4px}legend[_ngcontent-%COMP%]{background:white;box-shadow:0 0 2px;padding:5px 10px;border-radius:2px}*[ng-reflect--waoutput][_ngcontent-%COMP%]{background:thistle}*[waGainNode][_ngcontent-%COMP%]{background:pink}*[waDelayNode][_ngcontent-%COMP%]{background:lightgreen}*[waStereoPannerNode][_ngcontent-%COMP%]{background:skyblue}*[waAudioDestinationNode][_ngcontent-%COMP%]{background:khaki}*[waWaveShaperNode][_ngcontent-%COMP%]{background:salmon}*[waBiquadFilterNode][_ngcontent-%COMP%]{background:gold}*[waConvolverNode][_ngcontent-%COMP%]{background:aquamarine}"],changeDetection:0})),r})();function oe(n){const i=new Float32Array(44100),t=Math.PI/180;for(let a=0;a<44100;++a){const s=2*a/44100-1;i[a]=(3+n)*s*20*t/(Math.PI+n*Math.abs(s))}return i}},4541:(R,x,u)=>{u.d(x,{S:()=>C,t:()=>_});var o=u(4537);let _=(()=>{class c{constructor(){this.indeterminate=!1,this.checked=!1,this.tuiCheckedChange=new o.vpe}get isChecked(){return this.checked}get isIndeterminate(){return this.indeterminate}set tuiChecked(m){this.checked=m||!1,this.indeterminate=null===m}onChange({checked:m}){this.checked=m,this.indeterminate=!1,this.tuiCheckedChange.emit(m)}}return c.\u0275fac=function(m){return new(m||c)},c.\u0275dir=o.lG2({type:c,selectors:[["input","tuiChecked",""],["input","tuiCheckedChange",""]],hostVars:2,hostBindings:function(m,M){1&m&&o.NdJ("change",function(O){return M.onChange(O.target)}),2&m&&o.Ikx("checked",M.isChecked)("indeterminate",M.isIndeterminate)},inputs:{tuiChecked:"tuiChecked"},outputs:{tuiCheckedChange:"tuiCheckedChange"}}),c})(),C=(()=>{class c{}return c.\u0275fac=function(m){return new(m||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({}),c})()},8491:(R,x,u)=>{u.d(x,{c:()=>c,q:()=>C});var o=u(4537),_=u(7786);let C=(()=>{class p{constructor(M){this.tuiFocusVisibleChange=M}}return p.\u0275fac=function(M){return new(M||p)(o.Y36(_.ku))},p.\u0275dir=o.lG2({type:p,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[o._Bn([_.a3,_.ku])]}),p})(),c=(()=>{class p{}return p.\u0275fac=function(M){return new(M||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({}),p})()},5059:(R,x,u)=>{u.d(x,{F:()=>G,U:()=>O});var o=u(4537),_=u(2325),C=u(7179),c=u(1860),p=u(7969),m=u(1927),M=u(2147),w=u(1588);let O=(()=>{class y{constructor({nativeElement:b},z){this.tuiFocusedChange=(0,c.T)((0,_.mL)(b,"focusin"),(0,_.mL)(b,"focusout")).pipe((0,p.U)(()=>(0,C.V8)(b)),(0,m.O)(!1),(0,M.x)(),(0,w.T)(1),(0,_.Yr)(z))}}return y.\u0275fac=function(b){return new(b||y)(o.Y36(o.SBq),o.Y36(o.R0b))},y.\u0275dir=o.lG2({type:y,selectors:[["","tuiFocusedChange",""]],outputs:{tuiFocusedChange:"tuiFocusedChange"}}),y})(),G=(()=>{class y{}return y.\u0275fac=function(b){return new(b||y)},y.\u0275mod=o.oAB({type:y}),y.\u0275inj=o.cJS({}),y})()},1906:(R,x,u)=>{u.d(x,{nh:()=>k,_M:()=>X,FE:()=>ee});var o=u(4537),_=u(9900),C=u(4541),c=u(3633),p=u(5059),m=u(8491),M=u(8659),w=u(6480),O=u(3770),G=u(7179),y=u(8033);const e=["*"];let b=(()=>{class g{constructor(){this.name="tui-radio-group-"+g.index++}}return g.index=0,g.\u0275fac=function(f){return new(f||g)},g.\u0275cmp=o.Xpm({type:g,selectors:[["tui-radio-group"]],inputs:{name:"name"},ngContentSelectors:e,decls:1,vars:0,template:function(f,l){1&f&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),g})();var I=u(1489),j=u(7320),q=u(8692);const V=["focusableElement"],k=(0,M.JN)({size:"m",appearances:{unchecked:j.Nm.Outline,checked:j.Nm.Primary}});let X=(()=>{class g extends w.F9{constructor(f,l,B,S){super(f,l),this.options=B,this.radioGroup=S,this.identityMatcher=O.bg,this.name=null,this.size=this.options.size,this.pseudoDisabled=!1}get appearance(){return this.checked?this.options.appearances.checked:this.options.appearances.unchecked}get computedDisabled(){return this.disabled||this.pseudoDisabled}get nativeFocusableElement(){return!this.focusableElement||this.computedDisabled?null:this.focusableElement.nativeElement}get focused(){return(0,G.V8)(this.nativeFocusableElement)}get checked(){return null===this.value?null===this.item:null!=this.item&&this.identityMatcher(this.value,this.item)}get computedName(){return this.name||this.radioGroupName||this.controlName||""}get isFocusable(){return!this.readOnly&&this.computedFocusable}onChecked(f){f&&(this.value=void 0!==this.item?this.item:this.fallbackValue)}onFocused(f){this.updateFocused(f)}onFocusVisible(f){this.updateFocusVisible(f)}get radioGroupName(){return null===this.radioGroup?null:this.radioGroup.name}}return g.\u0275fac=function(f){return new(f||g)(o.Y36(_.a5,10),o.Y36(o.sBO),o.Y36(k),o.Y36(b,8))},g.\u0275cmp=o.Xpm({type:g,selectors:[["tui-radio"]],viewQuery:function(f,l){if(1&f&&o.Gf(V,5),2&f){let B;o.iGM(B=o.CRH())&&(l.focusableElement=B.first)}},hostVars:3,hostBindings:function(f,l){2&f&&(o.uIk("data-size",l.size),o.ekj("_disabled",l.computedDisabled))},inputs:{item:"item",identityMatcher:"identityMatcher",name:"name",size:"size",pseudoDisabled:"pseudoDisabled"},features:[o._Bn([(0,y.FT)(g),(0,w.wB)(g)]),o.qOj],decls:4,vars:13,consts:[["tuiWrapper","",3,"active","appearance","disabled","focus","hover","invalid"],[1,"t-mark"],["type","radio",1,"t-native",3,"disabled","id","tuiChecked","tuiFocusable","tuiCheckedChange","tuiFocusedChange","tuiFocusVisibleChange"],["focusableElement",""]],template:function(f,l){1&f&&(o.TgZ(0,"div",0),o._UZ(1,"div",1),o.TgZ(2,"input",2,3),o.NdJ("tuiCheckedChange",function(S){return l.onChecked(S)})("tuiFocusedChange",function(S){return l.onFocused(S)})("tuiFocusVisibleChange",function(S){return l.onFocusVisible(S)}),o.qZA()()),2&f&&(o.Q6J("active",l.pseudoActive)("appearance",l.appearance)("disabled",l.computedDisabled)("focus",l.computedFocusVisible)("hover",l.pseudoHover)("invalid",l.computedInvalid),o.xp6(1),o.ekj("t-mark_visible",l.checked),o.xp6(1),o.Q6J("disabled",l.computedDisabled)("id",l.id)("tuiChecked",l.checked)("tuiFocusable",l.isFocusable),o.uIk("name",l.computedName))},dependencies:[I.o,C.t,c.t,p.U,m.q],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:block;flex-shrink:0;border-radius:100%}[data-size=m][_nghost-%COMP%]{width:1rem;height:1rem}[data-size=l][_nghost-%COMP%]{width:1.5rem;height:1.5rem}._readonly[_nghost-%COMP%]{pointer-events:none}.t-mark[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;background-color:currentColor;border-radius:100%;transform:scale(0)}.t-mark_visible[_ngcontent-%COMP%]{transform:scale(1)}[data-size=m][_nghost-%COMP%]   .t-mark[_ngcontent-%COMP%]{margin:.25rem;width:.5rem;height:.5rem}[data-size=l][_nghost-%COMP%]   .t-mark[_ngcontent-%COMP%]{margin:.4375rem;width:.625rem;height:.625rem}.t-native[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.t-native[_ngcontent-%COMP%]:-webkit-autofill, .t-native[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-native[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}._disabled[_nghost-%COMP%]   .t-native[_ngcontent-%COMP%]{cursor:default}"],changeDetection:0}),g})(),ee=(()=>{class g{}return g.\u0275fac=function(f){return new(f||g)},g.\u0275mod=o.oAB({type:g}),g.\u0275inj=o.cJS({imports:[[q.ez,C.S,c.u,p.F,m.c,I.W]]}),g})()},5184:(R,x,u)=>{u.d(x,{n:()=>C});var o=u(2085),_=u(8499);function C(c){return(0,o.e)((p,m)=>{let M=!1,w=0;p.subscribe((0,_.x)(m,O=>(M||(M=!c(O,w++)))&&m.next(O)))})}}}]);