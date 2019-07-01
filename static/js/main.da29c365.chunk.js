(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){},112:function(e,t){},114:function(e,t){},135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var i,r=n(0),a=n(7),o=n(29),c=n(30),u=n(62),s=n(46),l=n(63),m=n(87),h=n(172),p=n(61),d=n(47),f=(n(103),n(159)),E=n(162),S=n(137),T=n(173),y=n(163),I=n(164),b=n(167),O=n(171),v=n(170),k=n(165),N=n(166),j=n(168),_=n(169),g=n(15),w=n(85),P=n.n(w),x=n(48),C=n.n(x),M=n(49),R=n(10),A=M.a.fromProp()("milliSeconds"),F=function(e){return e.milliSeconds/1e3},D=function(e,t){return A.modify(function(t){return t-e})(t)},U=function(e){return e.milliSeconds<=0?"00:00:00":C()("%02d:%02d:%02d",Math.floor(F(e)/3600),Math.floor(F(e)%3600/60),Math.floor(F(e)%60))},W=function(e){return e.milliSeconds<0},G=F,H=function(e){var t=Math.ceil(e.milliSeconds/1e3);if(t<10)return t.toString();var n=Math.floor(t/3600),i=Math.floor(t%3600/60),r=Math.floor(t%60);return"\u6b8b\u308a".concat(n>0?"{hour}\u6642\u9593":"","\n        ").concat(i>0?"".concat(i,"\u5206"):"","\n        ").concat(r>0?"".concat(r,"\u79d2"):"","\n        \u3067\u3059")};!function(e){e[e.BEFORE_START=0]="BEFORE_START",e[e.RUNNING=1]="RUNNING",e[e.SUSPEND=2]="SUSPEND",e[e.FINISHED=3]="FINISHED"}(i||(i={}));var X=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};Object(o.a)(this,e),this.timerEntry=t,this.onTick=n,this.onFinish=r,this.checkPoints=void 0,this.remainTime1=void 0,this.timeoutIds=[],this.state=i.BEFORE_START,this.startedAt=void 0,this.remainTime1={milliSeconds:1e3*t.duration},this.checkPoints=B(t.duration)}return Object(c.a)(e,[{key:"go",value:function(){var e=this;switch(this.state){case i.RUNNING:case i.FINISHED:return;case i.BEFORE_START:var t=new SpeechSynthesisUtterance("".concat(this.timerEntry.title,"\u3067\u3059"));t.lang="ja-JP",speechSynthesis.speak(t)}this.startedAt=new Date,this.timeoutIds.push(window.setTimeout(function(){return e.tick_()},100)),this.state=i.RUNNING}},{key:"pause",value:function(){switch(this.state){case i.SUSPEND:case i.FINISHED:return}this.remainTime1=this.remainTime(),this.startedAt=void 0,this.timeoutIds.forEach(function(e){return clearTimeout(e)}),this.state=i.SUSPEND}},{key:"remainTime",value:function(){return D(this.startedAt?Date.now()-this.startedAt.getTime():0,this.remainTime1)}},{key:"tick_",value:function(){var e=this;this.timeoutIds.push(window.setTimeout(function(){e.onTick(e),W(e.remainTime())?(e.state=i.FINISHED,e.onFinish(e)):e.tick_()},90))}},{key:"canRun",value:function(){return this.state===i.BEFORE_START||this.state===i.SUSPEND}},{key:"shiftCheckPoints",value:function(){this.checkPoints.shift()}},{key:"firstCheckPoint",value:function(){return this.checkPoints[0]}}]),e}(),B=function(e){return Object(g.reverse)(g.array.filter(g.array.reduce([Object(g.range)(1,5),Object(g.range)(1,5).map(function(e){return 10*e}),Object(g.range)(1,15).map(function(e){return 60*e})],[],R.concat),function(t){return t<e}))},J={title:"",duration:0},q={menuEntries:Object(R.concat)([{name:"\u30c7\u30a3\u30d7\u30ed\u30de\u30b7\u30fc",timers:[{title:"\u5916\u4ea4\u30d5\u30a7\u30a4\u30ba",duration:900},{title:"\u547d\u4ee4\u8a18\u8ff0\u30d5\u30a7\u30a4\u30ba",duration:300},{title:"\u547d\u4ee4\u89e3\u6c7a\u30d5\u30a7\u30a4\u30ba",duration:600}]},{name:"\u30c6\u30b9\u30c8",timers:[{title:"A",duration:5},{title:"B",duration:4},{title:"C",duration:3}]},{name:"\u30c6\u30b9\u30c82",timers:[{title:"A",duration:1}]}],Object(g.range)(1,15).map(function(e){return{name:"".concat(e,"\u5206"),timers:[{title:"".concat(e,"\u5206"),duration:60*e}]}}))},z=M.a.fromProp()("timerIndex"),K={menuIndex:0,timerIndex:0,timerMenu:q,time:"",label:"Go",running:!1,finish:!1,sw:new X(J)},L=function(e,t,n){return new X(function(e,t,n){return Object(g.lookup)(e,n.menuEntries).chain(function(e){return Object(g.lookup)(t,e.timers)}).getOrElse(J)}(n.menuIndex,n.timerIndex,n.timerMenu),e,t)},Q=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).noSleep=new P.a,n.onPlayClick=function(){n.noSleep.enable(),n.props.dataStore.sw.canRun()?(n.props.dataStore.sw.go(),n.props.execPause()):(n.props.dataStore.sw.pause(),n.props.execGo())},n.onResetClick=function(){return n.onChange(n.props.dataStore.menuIndex)},n.onMenuSelect=function(e){return n.onChange(parseInt(e.target.value,10))},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.onChange(this.props.dataStore.menuIndex)}},{key:"render",value:function(){return r.createElement("div",null,$(this.onMenuSelect,this.props.dataStore),r.createElement(f.a,null,V(this.props.dataStore),r.createElement(E.a,null),Z(this.props.dataStore),Y(this.onPlayClick,this.onResetClick,this.props.dataStore)))}},{key:"onChange",value:function(e){var t=this,n=function(e){if(G(e.remainTime())<e.firstCheckPoint()){var n=new SpeechSynthesisUtterance(H(e.remainTime()));n.lang="ja-JP",n.rate=1.2,speechSynthesis.speak(n),e.shiftCheckPoints()}t.props.setRemainTime(U(e.remainTime()))};this.props.dataStore.sw.pause(),this.noSleep.disable(),this.props.setMenuIndex(e),this.props.newStopWatch(n,function e(i){if(a=t.props.dataStore,Object(g.lookup)(a.menuIndex,a.timerMenu.menuEntries).map(function(e){return a.timerIndex+1<e.timers.length}).getOrElse(!1))t.props.setNextTimer(),t.props.newStopWatch(n,e),t.props.dataStore.sw.go();else{var r=new SpeechSynthesisUtterance("\u7d42\u4e86\u3067\u3059\u3002");r.lang="ja-JP",speechSynthesis.speak(r),t.props.setFinish()}var a})}}]),t}(r.Component),V=function(e){return(t=e,Object(g.lookup)(t.menuIndex,t.timerMenu.menuEntries)).map(function(t){return t.timers.map(function(t,n){return r.createElement(S.a,{button:!0,disabled:!0,className:"timer-list","data-is-current":n===e.timerIndex,key:n},r.createElement(T.a,null,C()("%s %d:%02d",t.title,Math.floor(t.duration/60),t.duration%60)),r.createElement(y.a,null,r.createElement(I.a,{"aria-label":"Delete"},n===e.timerIndex?r.createElement(k.a,null):r.createElement(N.a,null))))})}).getOrElse(g.empty);var t},Y=function(e,t,n){return r.createElement("div",{className:"control-buttons"},n.finish?"":r.createElement(b.a,{variant:"contained",className:"button",onClick:e},n.running?r.createElement(j.a,null):r.createElement(_.a,null),n.label),r.createElement(b.a,{variant:"contained",className:"button",color:"secondary",onClick:t},"Reset"))},Z=function(e){return r.createElement("div",{className:"time-display","data-is-finish":e.finish},r.createElement("code",null,e.time))},$=function(e,t){return r.createElement(O.a,{value:t.menuIndex,onChange:e},t.timerMenu.menuEntries.map(function(e){return e.name}).map(function(e,t){return r.createElement(v.a,{value:t,key:e},e)}))},ee=Object(p.b)(function(e){return{dataStore:e}},function(e){return{setRemainTime:function(t){return e({type:"SET_REMAIN_TIME",payload:{remainTime:t}})},execPause:function(){return e({type:"EXEC_PAUSE"})},execGo:function(){return e({type:"EXEC_GO"})},setMenuIndex:function(t){return e({type:"SET_MENU_INDEX",payload:{menuIndex:t}})},setFinish:function(){return e({type:"SET_FINISH"})},setNextTimer:function(){return e({type:"SET_NEXT_TIMER"})},newStopWatch:function(t,n){return e({type:"NEW_STOP_WATCH",payload:{onTick:t,onFinish:n}})},setStopWatch:function(t){return e(function(e){return{type:"SET_STOP_WATCH",payload:{stopWatch:e}}}(t))}}})(Q),te=n(23),ne=Object(d.b)(function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_REMAIN_TIME":return Object(te.a)({},t,{time:n.payload.remainTime});case"EXEC_PAUSE":return Object(te.a)({},t,{label:"Pause",running:!0});case"EXEC_GO":return Object(te.a)({},t,{label:"Go",running:!1});case"SET_MENU_INDEX":return Object(te.a)({},t,{menuIndex:n.payload.menuIndex,timerIndex:0,finish:!1,label:"Go",running:!1});case"SET_FINISH":return Object(te.a)({},t,{finish:!0});case"SET_NEXT_TIMER":return e=t,z.modify(function(e){return e+1})(e);case"NEW_STOP_WATCH":var i=L(n.payload.onTick,n.payload.onFinish,t);return Object(te.a)({},t,{sw:i,time:U(i.remainTime())});case"SET_STOP_WATCH":return Object(te.a)({},t,{sw:n.payload.stopWatch});default:return t}},K),ie=Object(m.a)({}),re=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.createElement(h.a,{theme:ie},r.createElement(p.a,{store:ne},r.createElement(ee,null)))}}]),t}(r.Component);n(135);a.render(r.createElement(re,null),document.getElementById("root"))},92:function(e,t,n){e.exports=n(136)}},[[92,1,2]]]);
//# sourceMappingURL=main.da29c365.chunk.js.map