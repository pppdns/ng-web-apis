"use strict";(self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[]).push([[82],{16775:(R,x,a)=>{a.r(x),a.d(x,{AudioPageModule:()=>Re});var u=a(30190),e=a(74788),C=a(12057),m=a(12628),c=a(441),l=a(75111),h=a(19506),M=a(81422),O=a(76480),U=a(33770),y=a(13034),S=a(13633),D=a(75059),I=a(4022),j=a(12130),k=a(13487);const K=["*"];let X=(()=>{class n extends O.F9{constructor(t,o,i,r){super(t,o),this.mode$=i,this.options=r,this.size=this.options.size,this.identityMatcher=U.bg,this.pseudoDisabled=!1}get nativeFocusableElement(){var t,o;return null!==(o=null===(t=this.radio)||void 0===t?void 0:t.nativeFocusableElement)&&void 0!==o?o:null}get focused(){return!!this.radio&&this.radio.focused}get computedDisabled(){return this.disabled||this.pseudoDisabled}onFocused(t){this.updateFocused(t)}onModelChange(t){this.value=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(M.a5,10),e.Y36(e.sBO),e.Y36(I.Au),e.Y36(k.nh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-radio-labeled"]],viewQuery:function(t,o){if(1&t&&e.Gf(k._M,5),2&t){let i;e.iGM(i=e.CRH())&&(o.radio=i.first)}},hostVars:1,hostBindings:function(t,o){1&t&&e.NdJ("$.data-mode.attr",function(){return o.mode$}),2&t&&e.uIk("data-size",o.size)},inputs:{item:"item",size:"size",identityMatcher:"identityMatcher",pseudoDisabled:"pseudoDisabled"},features:[e._Bn([(0,y.FT)(n),(0,O.wB)(n),j.CV]),e.qOj],ngContentSelectors:K,decls:4,vars:15,consts:[[1,"t-wrapper"],[3,"focusable","identityMatcher","item","name","nativeId","pseudoActive","pseudoDisabled","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","size","ngModel","ngModelChange","focusedChange"],[1,"t-content"]],template:function(t,o){1&t&&(e.F$t(),e.TgZ(0,"label",0),e.TgZ(1,"tui-radio",1),e.NdJ("ngModelChange",function(r){return o.value=r})("focusedChange",function(r){return o.onFocused(r)}),e.qZA(),e.TgZ(2,"div",2),e.Hsn(3),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("focusable",o.focusable)("identityMatcher",o.identityMatcher)("item",o.item)("name",o.computedName||"")("nativeId",o.nativeId)("pseudoActive",o.pseudoActive)("pseudoDisabled",o.computedDisabled)("pseudoFocus",o.pseudoFocus)("pseudoHover",o.pseudoHover)("pseudoInvalid",o.computedInvalid)("readOnly",o.readOnly)("size",o.size)("ngModel",o.value),e.xp6(1),e.ekj("t-content_disabled",o.computedDisabled))},directives:[k._M,M.JJ,M.On],styles:["[_nghost-%COMP%]{position:relative;display:block;font:var(--tui-font-text-s);line-height:1rem}._readonly[_nghost-%COMP%]{pointer-events:none}.t-wrapper[_ngcontent-%COMP%]{display:inline-flex;max-width:100%;cursor:pointer;vertical-align:top;align-items:inherit}._disabled[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{cursor:default}[data-mode=onDark][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.t-content[_ngcontent-%COMP%]{word-wrap:break-word;min-width:0}.t-content_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{margin-left:.5rem}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m);margin-left:.75rem}"],changeDetection:0}),n})(),q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[C.ez,M.u5,S.u,D.F,k.FE]]}),n})();var J=a(18106),W=a(41088),G=a(62662),ee=a(26134),s=a(54295),b=a(80454),g=a(55590),p=a(69641),w=a(69806),v=a(97582),oe=a(9359),ie=a(84945),ae=a(61528),Q=a(25124),re=a(12936),Z=a(5155),E=a(64533),T=a(67282);let ue=(()=>{class n extends AudioBufferSourceNode{constructor(t,o,i,r,_,f){const B=(0,T.Q)(_,0),P=(0,T.Q)(f,1);if(!i){const N=o.createBufferSource();return Object.setPrototypeOf(n.prototype,Object.getPrototypeOf(N)),Object.setPrototypeOf(N,n.prototype),N.playbackRate.value=P,n.init(N,null,r,t),N}super(o,{detune:B,playbackRate:P}),n.init(this,null,r,t)}set bufferSetter(t){this.buffer$.next(t)}ngOnDestroy(){this.buffer$.complete();try{this.stop()}catch(t){}this.disconnect()}static init(t,o,i,r){null!==i&&t.start();const _=new e.vpe;t.ended=_,t.onended=()=>_.emit(),t.buffer$=new oe.x,t.buffer$.pipe((0,ae.w)(f=>"string"==typeof f?r.fetch(f):(0,ie.of)(f))).subscribe(f=>{t.buffer=f})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(re.L),e.Y36(u.N),e.Y36(E.j),e.$8M("autoplay"),e.$8M("detune"),e.$8M("playbackRate"))},n.\u0275dir=e.lG2({type:n,selectors:[["","waAudioBufferSourceNode",""]],inputs:{loop:"loop",loopStart:"loopStart",loopEnd:"loopEnd",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",bufferSetter:["buffer","bufferSetter"],detuneParam:["detune","detuneParam"],playbackRateParam:["playbackRate","playbackRateParam"]},outputs:{ended:"ended"},exportAs:["AudioNode"],features:[e._Bn([(0,Z.j)(n)]),e.qOj]}),(0,v.gn)([(0,Q.v)("detune")],n.prototype,"detuneParam",void 0),(0,v.gn)([(0,Q.v)("playbackRate")],n.prototype,"playbackRateParam",void 0),n})();var L=a(15490),Y=a(14054),H=a(27969),V=a(26903),F=a(62568);let de=(()=>{class n extends AnalyserNode{constructor(t,o,i,r,_,f,B){const P=(0,T.Q)(r,2048),N=(0,T.Q)(_,-30),z=(0,T.Q)(f,-100),$=(0,T.Q)(B,.8);if(!i){const A=t.createAnalyser();return Object.setPrototypeOf(A,n.prototype),n.init(A,o),A.fftSize=P,A.maxDecibels=N,A.minDecibels=z,A.smoothingTimeConstant=$,A}super(t,{fftSize:P,maxDecibels:N,minDecibels:z,smoothingTimeConstant:$}),n.init(this,o)}ngOnDestroy(){this.disconnect()}static init(t,o){(0,F.$)(o,t);let i=new Uint8Array(t.frequencyBinCount),r=new Float32Array(t.frequencyBinCount),_=new Uint8Array(t.fftSize),f=new Float32Array(t.fftSize);t.frequencyByte$=(0,L.F)(0,Y.Z).pipe((0,H.U)(()=>(i.length!==t.frequencyBinCount&&(i=new Uint8Array(t.frequencyBinCount)),t.getByteFrequencyData(i),i)),(0,V.B)()),t.frequencyFloat$=(0,L.F)(0,Y.Z).pipe((0,H.U)(()=>(r.length!==t.frequencyBinCount&&(r=new Float32Array(t.frequencyBinCount)),t.getFloatFrequencyData(r),r)),(0,V.B)()),t.timeByte$=(0,L.F)(0,Y.Z).pipe((0,H.U)(()=>(_.length!==t.fftSize&&(_=new Uint8Array(t.frequencyBinCount)),t.getByteTimeDomainData(_),_)),(0,V.B)()),t.timeFloat$=(0,L.F)(0,Y.Z).pipe((0,H.U)(()=>(f.length!==t.fftSize&&(f=new Float32Array(t.frequencyBinCount)),t.getFloatTimeDomainData(f),f)),(0,V.B)())}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.N),e.Y36(Z.K,4),e.Y36(E.j),e.$8M("fftSize"),e.$8M("maxDecibels"),e.$8M("minDecibels"),e.$8M("smoothingTimeConstant"))},n.\u0275dir=e.lG2({type:n,selectors:[["","waAnalyserNode",""]],inputs:{fftSize:"fftSize",minDecibels:"minDecibels",maxDecibels:"maxDecibels",smoothingTimeConstant:"smoothingTimeConstant",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation"},outputs:{frequencyByte$:"frequencyByte$",frequencyFloat$:"frequencyFloat$",timeByte$:"timeByte$",timeFloat$:"timeFloat$"},exportAs:["AudioNode"],features:[e._Bn([(0,Z.j)(n)]),e.qOj]}),n})();var se=a(20047);let ce=(()=>{class n extends MediaElementAudioSourceNode{constructor(t,o,{nativeElement:i}){if(!o){const r=t.createMediaElementSource(i);return Object.setPrototypeOf(r,n.prototype),r}super(t,{mediaElement:i})}ngOnDestroy(){this.disconnect()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.N),e.Y36(E.j),e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["audio","waMediaElementAudioSourceNode",""],["video","waMediaElementAudioSourceNode",""]],exportAs:["AudioNode"],features:[e._Bn([(0,Z.j)(n)]),e.qOj]}),n})();var le=a(45772),ge=a(33555);function te(n){if(!n)return 0;if("number"==typeof n)return n;if(n instanceof Array){const d=n[n.length-1].value;return"number"==typeof d?d:d[d.length-1]}return n.value instanceof Array?n.value[n.value.length-1]:n.value}var pe=a(74676);let me=(()=>{class n extends StereoPannerNode{constructor(t,o,i){const r=(0,T.Q)(i,0);try{new StereoPannerNode(t)}catch(_){const f=t.createPanner();return Object.setPrototypeOf(f,n.prototype),f.fallbackToPannerNode(te(r)),(0,F.$)(o,f),f}super(t,{pan:r}),(0,F.$)(o,this)}set panParam(t){"setPosition"in this?this.fallbackToPannerNode(te(t)):(0,pe.Z)(this.pan,t,this.context.currentTime)}ngOnDestroy(){this.disconnect()}fallbackToPannerNode(t){const o=100*t,i=o>0?270-o:o+90,r=Math.sin(o*(Math.PI/180)),_=Math.sin(i*(Math.PI/180));this.setPosition(r,0,_)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.N),e.Y36(Z.K,4),e.$8M("pan"))},n.\u0275dir=e.lG2({type:n,selectors:[["","waStereoPannerNode",""]],inputs:{channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",panParam:["pan","panParam"]},exportAs:["AudioNode"],features:[e._Bn([(0,Z.j)(n)]),e.qOj]}),n})(),fe=(()=>{class n extends DelayNode{constructor(t,o,i,r,_){const f=(0,T.Q)(r,0),B=(0,T.Q)(_,1);if(!i){const P=t.createDelay(B);return Object.setPrototypeOf(P,n.prototype),(0,F.$)(o,P),P.delayTime.value=f,P}super(t,{delayTime:f,maxDelayTime:B}),(0,F.$)(o,this)}ngOnDestroy(){this.disconnect()}static init(t,o){(0,F.$)(o,t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.N),e.Y36(Z.K,4),e.Y36(E.j),e.$8M("delayTime"),e.$8M("maxDelayTime"))},n.\u0275dir=e.lG2({type:n,selectors:[["","waDelayNode",""]],inputs:{channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",delayTimeParam:["delayTime","delayTimeParam"]},exportAs:["AudioNode"],features:[e._Bn([(0,Z.j)(n)]),e.qOj]}),(0,v.gn)([(0,Q.v)("delayTime")],n.prototype,"delayTimeParam",void 0),n})(),_e=(()=>{class n extends BiquadFilterNode{constructor(t,o,i,r,_,f,B){const P=(0,T.Q)(r,0),N=(0,T.Q)(_,350),z=(0,T.Q)(f,0),$=(0,T.Q)(B,1);if(!o){const A=t.createBiquadFilter();return Object.setPrototypeOf(A,n.prototype),A.detune.value=P,A.frequency.value=N,A.gain.value=z,A.Q.value=$,(0,F.$)(i,A),A}super(t,{detune:P,frequency:N,gain:z,Q:$}),(0,F.$)(i,this)}ngOnDestroy(){this.disconnect()}static init(t,o){(0,F.$)(o,t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.N),e.Y36(E.j),e.Y36(Z.K,4),e.$8M("detune"),e.$8M("frequency"),e.$8M("gain"),e.$8M("Q"))},n.\u0275dir=e.lG2({type:n,selectors:[["","waBiquadFilterNode",""]],inputs:{type:"type",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",detuneParam:["detune","detuneParam"],frequencyParam:["frequency","frequencyParam"],gainParam:["gain","gainParam"],qParam:["Q","qParam"]},exportAs:["AudioNode"],features:[e._Bn([(0,Z.j)(n)]),e.qOj]}),(0,v.gn)([(0,Q.v)("detune")],n.prototype,"detuneParam",void 0),(0,v.gn)([(0,Q.v)("frequency")],n.prototype,"frequencyParam",void 0),(0,v.gn)([(0,Q.v)("gain")],n.prototype,"gainParam",void 0),(0,v.gn)([(0,Q.v)("Q")],n.prototype,"qParam",void 0),n})(),he=(()=>{class n extends WaveShaperNode{constructor(t,o,i){if(!i){const r=t.createWaveShaper();return Object.setPrototypeOf(r,n.prototype),(0,F.$)(o,r),r}super(t),(0,F.$)(o,this)}ngOnDestroy(){this.disconnect()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.N),e.Y36(Z.K,4),e.Y36(E.j))},n.\u0275dir=e.lG2({type:n,selectors:[["","waWaveShaperNode",""]],inputs:{oversample:"oversample",curve:"curve",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation"},exportAs:["AudioNode"],features:[e._Bn([(0,Z.j)(n)]),e.qOj]}),n})();var Ce=a(16667);let Me=(()=>{class n{transform(t){return new Path2D(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"path",type:n,pure:!0}),n})();var ye=a(47489);let ve=(()=>{class n{constructor(t){this.context=t}transform(t,o,i){return this.context.createPeriodicWave(new Float32Array(t),o?new Float32Array(o):new Float32Array(t.length),{disableNormalization:!!i})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.N,16))},n.\u0275pipe=e.Yjl({name:"waPeriodicWave",type:n,pure:!0}),n})(),Ae=(()=>{class n{transform(t,o,i="exponential"){return t instanceof Array?{value:t,duration:o}:{value:t,duration:o,mode:i}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"waAudioParam",type:n,pure:!0}),n})();const Te=["chain"];function Pe(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"button",2),e.NdJ("click",function(){return e.CHM(t),e.oxw().start()}),e._uU(1," Start AudioContext\n"),e.qZA()}}function xe(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"button",17,18),e.NdJ("click",function(i){e.CHM(t);const r=e.MAs(1);return e.oxw(3).onClick(r,i.target)}),e._uU(2," Play "),e.ynx(3,19),e.NdJ("timeByte$",function(i){return e.CHM(t),e.oxw(3).onTimeDomain(i)}),e.GkF(4,20),e.BQk(),e.qZA()}if(2&n){e.oxw(2);const t=e.MAs(27),o=e.oxw();e.Q6J("loop",!0),e.xp6(3),e.Q6J("fftSize",o.fftSize),e.xp6(1),e.Q6J("waOutput",o.chain||t)}}function be(n,d){if(1&n&&(e.ynx(0),e.YNc(1,xe,5,3,"button",16),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.buffers)}}function Ze(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"audio",21),e.ynx(1,19),e.NdJ("timeByte$",function(i){return e.CHM(t),e.oxw(2).onTimeDomain(i)}),e.GkF(2,20),e.BQk(),e.qZA()}if(2&n){e.oxw();const t=e.MAs(27),o=e.oxw();e.xp6(1),e.Q6J("fftSize",o.fftSize),e.xp6(1),e.Q6J("waOutput",o.chain||t)}}function Oe(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"button",23,18),e.NdJ("click",function(i){e.CHM(t);const r=e.MAs(1);return e.oxw(3).onClick(r,i.target)}),e.ALo(2,"waPeriodicWave"),e._uU(3," Play "),e.ynx(4,19),e.NdJ("timeByte$",function(i){return e.CHM(t),e.oxw(3).onTimeDomain(i)}),e.GkF(5,20),e.BQk(),e.qZA()}if(2&n){e.oxw(2);const t=e.MAs(27),o=e.oxw();e.Q6J("frequency",100)("periodicWave",e.lcZ(2,4,o.real)),e.xp6(4),e.Q6J("fftSize",o.fftSize),e.xp6(1),e.Q6J("waOutput",o.chain||t)}}function De(n,d){if(1&n&&(e.ynx(0),e.YNc(1,Oe,6,6,"button",22),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.buffers)}}function Fe(n,d){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"fieldset",24,25),e.ALo(3,"waAudioParam"),e.TgZ(4,"legend"),e._uU(5,"GainNode"),e.qZA(),e.TgZ(6,"input",26),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).gain=i}),e.qZA(),e.TgZ(7,"fieldset",27),e.ALo(8,"waAudioParam"),e.TgZ(9,"legend"),e._uU(10,"StereoPannerNode"),e.qZA(),e.TgZ(11,"input",28),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).pan=i}),e.qZA(),e.TgZ(12,"fieldset",29),e.TgZ(13,"legend"),e._uU(14,"AudioDestinationNode"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("gain",e.xi3(3,4,t.gain,.1)),e.xp6(5),e.Q6J("ngModel",t.gain),e.xp6(1),e.Q6J("pan",e.xi3(8,7,t.pan,.1)),e.xp6(4),e.Q6J("ngModel",t.pan)}}function Ne(n,d){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"fieldset",24,25),e.ALo(3,"waAudioParam"),e.TgZ(4,"legend"),e._uU(5,"GainNode"),e.qZA(),e.TgZ(6,"em"),e._uU(7,"For feedback loop purposes only"),e.qZA(),e.TgZ(8,"fieldset",30),e.ALo(9,"waAudioParam"),e.TgZ(10,"legend"),e._uU(11,"DelayNode"),e.qZA(),e.TgZ(12,"input",26),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).delayTime=i}),e.qZA(),e.TgZ(13,"fieldset",24),e.TgZ(14,"legend"),e._uU(15,"GainNode"),e.qZA(),e.TgZ(16,"input",26),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).delayGain=i}),e.qZA(),e.TgZ(17,"fieldset",20),e.TgZ(18,"legend"),e._uU(19,"Output"),e.qZA(),e.TgZ(20,"em"),e._uU(21,"Connected back to the beginning of the chain"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"fieldset",29),e.TgZ(23,"legend"),e._uU(24,"AudioDestinationNode"),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=e.MAs(2),o=e.oxw(2);e.xp6(1),e.Q6J("gain",e.xi3(3,6,o.gain,.1)),e.xp6(7),e.Q6J("delayTime",e.xi3(9,9,o.delayTime,.1)),e.xp6(4),e.Q6J("ngModel",o.delayTime),e.xp6(1),e.Q6J("gain",o.delayGain),e.xp6(3),e.Q6J("ngModel",o.delayGain),e.xp6(1),e.Q6J("waOutput",t)}}function we(n,d){if(1&n&&e._UZ(0,"tui-data-list-wrapper",44),2&n){const t=e.oxw(3);e.Q6J("items",t.items)}}function Be(n,d){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"fieldset",31,25),e.ALo(3,"waAudioParam"),e.ALo(4,"waAudioParam"),e.ALo(5,"waAudioParam"),e.ALo(6,"waAudioParam"),e.TgZ(7,"legend"),e._uU(8,"BiquadFilterNode"),e.qZA(),e.TgZ(9,"tui-select",32),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).type=i}),e._uU(10," Type "),e.YNc(11,we,1,1,"tui-data-list-wrapper",33),e.qZA(),e.TgZ(12,"label",34),e.TgZ(13,"input",26),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).filterGain=i}),e.qZA(),e.qZA(),e.TgZ(14,"label",35),e.TgZ(15,"input",36),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).frequency=i}),e.qZA(),e.qZA(),e.TgZ(16,"label",37),e.TgZ(17,"input",38),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).Q=i}),e.qZA(),e.qZA(),e.TgZ(18,"label",39),e.TgZ(19,"input",40),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).detune=i}),e.qZA(),e.qZA(),e.TgZ(20,"fieldset",41),e.TgZ(21,"legend"),e._uU(22,"WaveShaperNode"),e.qZA(),e.TgZ(23,"input",42),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw(2).onCurveChange(i)}),e.qZA(),e.ynx(24,24),e.ALo(25,"waAudioParam"),e.TgZ(26,"fieldset",43),e.TgZ(27,"legend"),e._uU(28,"ConvolverNode"),e.qZA(),e.TgZ(29,"fieldset",29),e.TgZ(30,"legend"),e._uU(31,"AudioDestinationNode"),e.qZA(),e.qZA(),e.qZA(),e.BQk(),e.qZA(),e.qZA(),e.BQk()}if(2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("detune",e.xi3(3,13,t.detune,.1))("frequency",e.xi3(4,16,t.frequency,.1))("gain",e.xi3(5,19,t.filterGain,.1))("Q",e.xi3(6,22,t.Q,.1))("type",t.type),e.xp6(8),e.Q6J("ngModel",t.type),e.xp6(4),e.Q6J("ngModel",t.filterGain),e.xp6(2),e.Q6J("ngModel",t.frequency),e.xp6(2),e.Q6J("ngModel",t.Q),e.xp6(2),e.Q6J("ngModel",t.detune),e.xp6(1),e.Q6J("curve",t.curve),e.xp6(3),e.Q6J("ngModel",t.distortion),e.xp6(1),e.Q6J("gain",e.xi3(25,25,t.distortionCompensation,.1))}}function Se(n,d){if(1&n){const t=e.EpF();e.TgZ(0,"section"),e.TgZ(1,"h1"),e._uU(2,"Description"),e.qZA(),e.TgZ(3,"p"),e._uU(4," This is a demo for "),e.TgZ(5,"strong"),e._uU(6,"@ng-web-apis/audio"),e.qZA(),e._uU(7," \u2014 a Web Audio API declarative library for Angular. Here you can select different audio source options and see AudioNode graph for selected configuration. Demo page uses HTML elements as directives hosts, in real life scenario you can use "),e.TgZ(8,"code"),e._uU(9,"ng-container"),e.qZA(),e._uU(10," so you will not have redundant DOM tags. "),e.qZA(),e.qZA(),e.TgZ(11,"section"),e.TgZ(12,"h1"),e._uU(13,"Source"),e.qZA(),e.TgZ(14,"tui-radio-labeled",3),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().selectedSource=i}),e._uU(15," AudioBufferSourceNode "),e.qZA(),e.TgZ(16,"tui-radio-labeled",4),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().selectedSource=i}),e._uU(17," MediaElementAudioSourceNode "),e.qZA(),e.TgZ(18,"tui-radio-labeled",5),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().selectedSource=i}),e._uU(19," OscillatorNode "),e.qZA(),e.ynx(20,6),e.YNc(21,be,2,1,"ng-container",7),e.YNc(22,Ze,3,2,"audio",8),e.YNc(23,De,2,1,"ng-container",7),e.BQk(),e.TgZ(24,"p"),e.TgZ(25,"canvas",9,10),e._UZ(28,"canvas-path",11),e.ALo(29,"path"),e.ALo(30,"transform"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(31,"section"),e.TgZ(32,"h1"),e._uU(33,"Chain"),e.qZA(),e.TgZ(34,"tui-radio-labeled",12),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().selectedChain=i}),e._uU(35," Dry "),e.qZA(),e.TgZ(36,"tui-radio-labeled",13),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().selectedChain=i}),e._uU(37," Balance "),e.qZA(),e.TgZ(38,"tui-radio-labeled",14),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().selectedChain=i}),e._uU(39," Delay "),e.qZA(),e.TgZ(40,"tui-radio-labeled",15),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().selectedChain=i}),e._uU(41," Complex "),e.qZA(),e.ynx(42,6),e.YNc(43,Fe,15,10,"ng-container",7),e.YNc(44,Ne,25,12,"ng-container",7),e.YNc(45,Be,32,28,"ng-container",7),e.BQk(),e.qZA()}if(2&n){const t=e.MAs(26),o=e.oxw();e.xp6(14),e.Q6J("ngModel",o.selectedSource),e.xp6(2),e.Q6J("ngModel",o.selectedSource),e.xp6(2),e.Q6J("ngModel",o.selectedSource),e.xp6(2),e.Q6J("ngSwitch",o.selectedSource),e.xp6(1),e.Q6J("ngSwitchCase","buffer"),e.xp6(1),e.Q6J("ngSwitchCase","media"),e.xp6(1),e.Q6J("ngSwitchCase","oscillator"),e.xp6(5),e.Q6J("lineWidth",4/t.height)("path",e.lcZ(29,18,o.path))("transform",e.lcZ(30,20,o.getTransform(t))),e.xp6(6),e.Q6J("ngModel",o.selectedChain),e.xp6(2),e.Q6J("ngModel",o.selectedChain),e.xp6(2),e.Q6J("ngModel",o.selectedChain),e.xp6(2),e.Q6J("ngModel",o.selectedChain),e.xp6(2),e.Q6J("ngSwitch",o.selectedChain),e.xp6(1),e.Q6J("ngSwitchCase","balance"),e.xp6(1),e.Q6J("ngSwitchCase","delay"),e.xp6(1),e.Q6J("ngSwitchCase","complex")}}let ke=(()=>{class n{constructor(t){this.context=t,this.buffers=[Date.now()],this.selectedChain="dry",this.selectedSource="buffer",this.gain=1,this.pan=0,this.delayTime=1,this.delayGain=.5,this.distortion=20,this.frequency=350,this.detune=0,this.filterGain=0,this.Q=1,this.type="lowpass",this.curve=ne(this.distortion),this.started=!1,this.fftSize=2048,this.path="",this.items=["lowpass","highpass","bandpass","lowshelf","highshelf","peaking","notch","allpass"],this.real=[0,0,1,0,1]}get distortionCompensation(){return 1.2-this.distortion/20}start(){this.started=!0,this.context.resume()}getTransform({width:t,height:o}){return`scale(${t/this.fftSize}, ${o/2})`}onCurveChange(t){this.distortion=t,this.curve=ne(t)}onClick(t,o){"Play"===o.textContent.trim()?(o.textContent="Stop",t.start()):this.buffers[0]=Date.now()}onTimeDomain(t){this.path=t.reduce((o,i,r)=>`${o} L ${r} ${i/128}`,"M 0 0")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.N))},n.\u0275cmp=e.Xpm({type:n,selectors:[["audio-page"]],viewQuery:function(t,o){if(1&t&&e.Gf(Te,5),2&t){let i;e.iGM(i=e.CRH())&&(o.chain=i.first)}},decls:3,vars:2,consts:[["appearance","secondary","tuiButton","",3,"click",4,"ngIf","ngIfElse"],["graph",""],["appearance","secondary","tuiButton","",3,"click"],["item","buffer","name","source",3,"ngModel","ngModelChange"],["item","media","name","source",3,"ngModel","ngModelChange"],["item","oscillator","name","source",3,"ngModel","ngModelChange"],[3,"ngSwitch"],[4,"ngSwitchCase"],["controls","","loop","","src","assets/demo.mp3","waMediaElementAudioSourceNode","",4,"ngSwitchCase"],["waAudioDestinationNode","","waCanvas2d","",1,"canvas"],["canvas","","fallback","AudioNode"],["fillStyle","transparent","strokeStyle","black",3,"lineWidth","path","transform"],["item","dry","name","chain",3,"ngModel","ngModelChange"],["item","balance","name","chain",3,"ngModel","ngModelChange"],["item","delay","name","chain",3,"ngModel","ngModelChange"],["item","complex","name","chain",3,"ngModel","ngModelChange"],["buffer","assets/demo.mp3","size","s","tuiButton","","waAudioBufferSourceNode","",3,"loop","click",4,"ngFor","ngForOf"],["buffer","assets/demo.mp3","size","s","tuiButton","","waAudioBufferSourceNode","",3,"loop","click"],["source","AudioNode"],["waAnalyserNode","",3,"fftSize","timeByte$"],[3,"waOutput"],["controls","","loop","","src","assets/demo.mp3","waMediaElementAudioSourceNode",""],["size","s","tuiButton","","waOscillatorNode","",3,"frequency","periodicWave","click",4,"ngFor","ngForOf"],["size","s","tuiButton","","waOscillatorNode","",3,"frequency","periodicWave","click"],["waGainNode","",3,"gain"],["chain","AudioNode"],["max","1","min","0","step","0.01","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["waStereoPannerNode","",3,"pan"],["max","1","min","-1","step","0.01","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["waAudioDestinationNode",""],["waDelayNode","",3,"delayTime"],["waBiquadFilterNode","",3,"detune","frequency","gain","Q","type"],["tuiTextfieldSize","m",3,"ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["tuiLabel","gain"],["tuiLabel","frequence"],["max","5000","min","20","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["tuiLabel","Q"],["max","100","min","1","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["tuiLabel","detune"],["max","100","min","0","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["oversample","4x","waWaveShaperNode","",3,"curve"],["max","20","min","0","step","0.1","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["buffer","assets/response.m4a","waConvolverNode",""],[3,"items"]],template:function(t,o){if(1&t&&(e.YNc(0,Pe,2,0,"button",0),e.YNc(1,Se,46,22,"ng-template",null,1,e.W1O)),2&t){const i=e.MAs(2);e.Q6J("ngIf",!o.started)("ngIfElse",i)}},directives:[C.O5,m.v0,X,M.JJ,M.On,C.RF,C.n9,ee.C,s.i,b.l,g.I,p.$,w.g,C.sg,ue,de,se.g,ce,le.P,ge.z,J.iN,M.eT,M.Fj,me,fe,_e,W.uJ,W.OI,c.sz,l.gX,h.A,he,Ce.g,G.eC],pipes:[Me,ye.a,ve,Ae],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;grid-gap:12px;gap:12px}@media (max-width: 1100px){[_nghost-%COMP%]{flex-direction:column;width:320px;margin:0 auto}}tui-radio-labeled[_ngcontent-%COMP%]{margin:1rem 0}section[_ngcontent-%COMP%]{flex:1;max-width:320px;padding:1px 10px 10px;box-sizing:border-box;background:whitesmoke;border-radius:8px}audio[_ngcontent-%COMP%]{margin-top:1em}label[_ngcontent-%COMP%]{margin-top:.5rem}input[_ngcontent-%COMP%]{margin:0}fieldset[_ngcontent-%COMP%]{margin-top:1em;border:none;border-radius:4px}legend[_ngcontent-%COMP%]{background:white;box-shadow:0 0 2px;padding:5px 10px;border-radius:2px}*[ng-reflect--waoutput][_ngcontent-%COMP%]{background:thistle}*[waGainNode][_ngcontent-%COMP%]{background:pink}*[waDelayNode][_ngcontent-%COMP%]{background:lightgreen}*[waStereoPannerNode][_ngcontent-%COMP%]{background:skyblue}*[waAudioDestinationNode][_ngcontent-%COMP%]{background:khaki}*[waWaveShaperNode][_ngcontent-%COMP%]{background:salmon}*[waBiquadFilterNode][_ngcontent-%COMP%]{background:gold}*[waConvolverNode][_ngcontent-%COMP%]{background:aquamarine}"],changeDetection:0}),n})();function ne(n){const d=44100,t=new Float32Array(d),o=Math.PI/180;for(let i=0;i<d;++i){const r=2*i/d-1;t[i]=(3+n)*r*20*o/(Math.PI+n*Math.abs(r))}return t}var Qe=a(59367),Je=a(3672),Ee=a(8871);let Re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[C.ez,M.u5,Je.O,Qe.Bz.forChild([{path:"",component:ke}]),q,Ee.tZ,m.fN,J.c2,h.U,W.Jy,c.cn,G.zX]]}),n})()},44541:(R,x,a)=>{a.d(x,{S:()=>C,t:()=>e});var u=a(74788);let e=(()=>{class m{constructor(){this.indeterminate=!1,this.checked=!1,this.tuiCheckedChange=new u.vpe}get isChecked(){return this.checked}get isIndeterminate(){return this.indeterminate}set tuiChecked(l){this.checked=l||!1,this.indeterminate=null===l}onChange({checked:l}){this.checked=l,this.indeterminate=!1,this.tuiCheckedChange.emit(l)}}return m.\u0275fac=function(l){return new(l||m)},m.\u0275dir=u.lG2({type:m,selectors:[["input","tuiChecked",""],["input","tuiCheckedChange",""]],hostVars:2,hostBindings:function(l,h){1&l&&u.NdJ("change",function(O){return h.onChange(O.target)}),2&l&&u.Ikx("checked",h.isChecked)("indeterminate",h.isIndeterminate)},inputs:{tuiChecked:"tuiChecked"},outputs:{tuiCheckedChange:"tuiCheckedChange"}}),m})(),C=(()=>{class m{}return m.\u0275fac=function(l){return new(l||m)},m.\u0275mod=u.oAB({type:m}),m.\u0275inj=u.cJS({}),m})()},88491:(R,x,a)=>{a.d(x,{c:()=>m,q:()=>C});var u=a(74788),e=a(71552);let C=(()=>{class c{constructor(h){this.tuiFocusVisibleChange=h}}return c.\u0275fac=function(h){return new(h||c)(u.Y36(e.ku))},c.\u0275dir=u.lG2({type:c,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[u._Bn([e.a3,e.ku])]}),c})(),m=(()=>{class c{}return c.\u0275fac=function(h){return new(h||c)},c.\u0275mod=u.oAB({type:c}),c.\u0275inj=u.cJS({}),c})()},75059:(R,x,a)=>{a.d(x,{F:()=>U,U:()=>O});var u=a(74788),e=a(2325),C=a(57179),m=a(21860),c=a(27969),l=a(51927),h=a(42147),M=a(11588);let O=(()=>{class y{constructor({nativeElement:D},I){this.tuiFocusedChange=(0,m.T)((0,e.mL)(D,"focusin"),(0,e.mL)(D,"focusout")).pipe((0,c.U)(()=>(0,C.V8)(D)),(0,l.O)(!1),(0,h.x)(),(0,M.T)(1),(0,e.Yr)(I))}}return y.\u0275fac=function(D){return new(D||y)(u.Y36(u.SBq),u.Y36(u.R0b))},y.\u0275dir=u.lG2({type:y,selectors:[["","tuiFocusedChange",""]],outputs:{tuiFocusedChange:"tuiFocusedChange"}}),y})(),U=(()=>{class y{}return y.\u0275fac=function(D){return new(D||y)},y.\u0275mod=u.oAB({type:y}),y.\u0275inj=u.cJS({}),y})()},13487:(R,x,a)=>{a.d(x,{nh:()=>J,_M:()=>G,FE:()=>ee});var u=a(74788),e=a(81422),C=a(44541),m=a(13633),c=a(75059),l=a(88491),h=a(11927),M=a(76480),O=a(33770),U=a(57179),y=a(13034);const S=["*"];let D=(()=>{class s{constructor(){this.name="tui-radio-group-"+s.index++}}return s.index=0,s.\u0275fac=function(g){return new(g||s)},s.\u0275cmp=u.Xpm({type:s,selectors:[["tui-radio-group"]],inputs:{name:"name"},ngContentSelectors:S,decls:1,vars:0,template:function(g,p){1&g&&(u.F$t(),u.Hsn(0))},encapsulation:2,changeDetection:0}),s})();var j=a(91489),k=a(77320),K=a(12057);const X=["focusableElement"],J=(0,h.JN)({size:"m",appearances:{unchecked:k.Nm.Outline,checked:k.Nm.Primary}});let G=(()=>{class s extends M.F9{constructor(g,p,w,v){super(g,p),this.options=w,this.radioGroup=v,this.identityMatcher=O.bg,this.name=null,this.size=this.options.size,this.pseudoDisabled=!1}get appearance(){return this.checked?this.options.appearances.checked:this.options.appearances.unchecked}get computedDisabled(){return this.disabled||this.pseudoDisabled}get nativeFocusableElement(){return!this.focusableElement||this.computedDisabled?null:this.focusableElement.nativeElement}get focused(){return(0,U.V8)(this.nativeFocusableElement)}get checked(){return null===this.value?null===this.item:null!=this.item&&this.identityMatcher(this.value,this.item)}get computedName(){return this.name||this.radioGroupName||this.controlName||""}get isFocusable(){return!this.readOnly&&this.computedFocusable}onChecked(g){g&&(this.value=void 0!==this.item?this.item:this.fallbackValue)}onFocused(g){this.updateFocused(g)}onFocusVisible(g){this.updateFocusVisible(g)}get radioGroupName(){return null===this.radioGroup?null:this.radioGroup.name}}return s.\u0275fac=function(g){return new(g||s)(u.Y36(e.a5,10),u.Y36(u.sBO),u.Y36(J),u.Y36(D,8))},s.\u0275cmp=u.Xpm({type:s,selectors:[["tui-radio"]],viewQuery:function(g,p){if(1&g&&u.Gf(X,5),2&g){let w;u.iGM(w=u.CRH())&&(p.focusableElement=w.first)}},hostVars:3,hostBindings:function(g,p){2&g&&(u.uIk("data-size",p.size),u.ekj("_disabled",p.computedDisabled))},inputs:{item:"item",identityMatcher:"identityMatcher",name:"name",size:"size",pseudoDisabled:"pseudoDisabled"},features:[u._Bn([(0,y.FT)(s),(0,M.wB)(s)]),u.qOj],decls:4,vars:13,consts:[["tuiWrapper","",3,"active","appearance","disabled","focus","hover","invalid"],[1,"t-mark"],["type","radio",1,"t-native",3,"disabled","id","tuiChecked","tuiFocusable","tuiCheckedChange","tuiFocusedChange","tuiFocusVisibleChange"],["focusableElement",""]],template:function(g,p){1&g&&(u.TgZ(0,"div",0),u._UZ(1,"div",1),u.TgZ(2,"input",2,3),u.NdJ("tuiCheckedChange",function(v){return p.onChecked(v)})("tuiFocusedChange",function(v){return p.onFocused(v)})("tuiFocusVisibleChange",function(v){return p.onFocusVisible(v)}),u.qZA(),u.qZA()),2&g&&(u.Q6J("active",p.pseudoActive)("appearance",p.appearance)("disabled",p.computedDisabled)("focus",p.computedFocusVisible)("hover",p.pseudoHover)("invalid",p.computedInvalid),u.xp6(1),u.ekj("t-mark_visible",p.checked),u.xp6(1),u.Q6J("disabled",p.computedDisabled)("id",p.id)("tuiChecked",p.checked)("tuiFocusable",p.isFocusable),u.uIk("name",p.computedName))},directives:[j.o,C.t,m.t,c.U,l.q],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:block;flex-shrink:0;border-radius:100%}[data-size=m][_nghost-%COMP%]{width:1rem;height:1rem}[data-size=l][_nghost-%COMP%]{width:1.5rem;height:1.5rem}._readonly[_nghost-%COMP%]{pointer-events:none}.t-mark[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;background-color:currentColor;border-radius:100%;transform:scale(0)}.t-mark_visible[_ngcontent-%COMP%]{transform:scale(1)}[data-size=m][_nghost-%COMP%]   .t-mark[_ngcontent-%COMP%]{margin:.25rem;width:.5rem;height:.5rem}[data-size=l][_nghost-%COMP%]   .t-mark[_ngcontent-%COMP%]{margin:.4375rem;width:.625rem;height:.625rem}.t-native[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.t-native[_ngcontent-%COMP%]:-webkit-autofill, .t-native[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-native[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}._disabled[_nghost-%COMP%]   .t-native[_ngcontent-%COMP%]{cursor:default}"],changeDetection:0}),s})(),ee=(()=>{class s{}return s.\u0275fac=function(g){return new(g||s)},s.\u0275mod=u.oAB({type:s}),s.\u0275inj=u.cJS({imports:[[K.ez,C.S,m.u,c.F,l.c,j.W]]}),s})()},15184:(R,x,a)=>{a.d(x,{n:()=>C});var u=a(32085),e=a(28499);function C(m){return(0,u.e)((c,l)=>{let h=!1,M=0;c.subscribe(new e.Q(l,O=>(h||(h=!m(O,M++)))&&l.next(O)))})}}}]);