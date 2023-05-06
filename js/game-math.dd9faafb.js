"use strict";(self["webpackChunknavchayko"]=self["webpackChunknavchayko"]||[]).push([[755],{3692:function(t,i){i["Z"]={methods:{tileLetterCreate(t,i,e=null){return{id:t,value:i,relationId:e,class:{filled:null!==i&&null===e,disabled:null!==e}}},tileBind(t,i,e=null){t&&("number"===typeof i&&(t.relationId=i,t.class.disabled=!0),null!==e&&(t.value=e))},tileUnbind(t,i){t&&(t.relationId=null,t.class.disabled=!1,!0===i&&(t.value=null))},tileBindByTile(t,i,e){t&&i&&(this.tileBind(t,i.id,i.value),!0===e&&this.tileBind(i,t.id))},tileIsUsed(t){return t?null!==t.relationId:void 0},tileCreate(t,i){return{id:t,value:i,class:{disabled:!1}}}}}},1162:function(t,i,e){e.d(i,{Z:function(){return H}});var l=e(3396),s=e(9242),n=e(7139);const a={class:"wrapper",key:"result-tile-list"},r={class:"wrapper",key:"input-tile-list"};function u(t,i,e,u,o,h){const d=(0,l.up)("TileList"),c=(0,l.up)("ControlsPanel");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s.W3,{tag:"div",name:"main-transition",class:"main area-main"},{default:(0,l.w5)((()=>[(0,l._)("div",a,[(0,l.WI)(t.$slots,"result-left"),(0,l.Wm)(d,{class:(0,n.C_)(["bg-blue not-disabled",{"animation-shake":!1===e.resultFlag}]),tileList:e.resultList,onClickTile:i[0]||(i[0]=i=>{t.$emit("clickTileResult",i)})},null,8,["class","tileList"]),(0,l.WI)(t.$slots,"result-right")]),!0!==e.resultFlag?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.WI)(t.$slots,"input-left"),(0,l.Wm)(d,{class:"bg-yellow",tileList:e.inputList,onClickTile:i[1]||(i[1]=i=>{t.$emit("clickTileInput",i)})},null,8,["tileList"]),(0,l.WI)(t.$slots,"input-right")])):(0,l.kq)("",!0)])),_:3}),(0,l.Wm)(c,{checkFlag:e.resultFlag?null:e.inputFlag,nextFlag:!!e.resultFlag||null,hintFlag:e.resultFlag?null:e.hintFlag,refreshFlag:!e.resultFlag||null,onClickRefresh:i[2]||(i[2]=i=>t.$emit("clickControlRefresh")),onClickNext:i[3]||(i[3]=i=>t.$emit("clickControlNext")),onClickCheck:i[4]||(i[4]=i=>t.$emit("clickControlCheck")),onClickHint:i[5]||(i[5]=i=>t.$emit("clickControlHint"))},null,8,["checkFlag","nextFlag","hintFlag","refreshFlag"])],64)}const o={class:"tile-list"};function h(t,i,e,s,a,r){const u=(0,l.up)("TileItem");return(0,l.wg)(),(0,l.iD)("div",o,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.tileList,(i=>((0,l.wg)(),(0,l.j4)(u,{class:(0,n.C_)(i.class),key:i.id,value:i.value,onClick:e=>t.$emit("clickTile",i)},null,8,["class","value","onClick"])))),128))])}const d={class:"tile-item"};function c(t,i,e,s,a,r){return(0,l.wg)(),(0,l.iD)("div",d,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.valueList,((t,i)=>((0,l.wg)(),(0,l.iD)("span",{key:i,class:"tile-content"},(0,n.zw)(t),1)))),128))])}var m={props:["value"],computed:{valueList(){return Array.from(""+(this.value??""))}}},b=e(89);const g=(0,b.Z)(m,[["render",c],["__scopeId","data-v-3496d368"]]);var p=g,k={props:["tileList"],components:{TileItem:p}};const f=(0,b.Z)(k,[["render",h],["__scopeId","data-v-6bf59150"]]);var C=f;const y={class:"controls-panel"},v={class:"controls-group left"},F={class:"controls-group center"},L={class:"controls-group right"};function I(t,i,e,s,a,r){return(0,l.wg)(),(0,l.iD)("div",y,[(0,l._)("div",v,[(0,l._)("div",{onClick:i[0]||(i[0]=(...t)=>r.clickBackHandler&&r.clickBackHandler(...t)),class:"control tile-blue svg-back"})]),(0,l._)("div",F,["boolean"===typeof e.refreshFlag?((0,l.wg)(),(0,l.iD)("div",{key:0,class:(0,n.C_)(["control tile-blue svg-reload",{disabled:!e.refreshFlag}]),onClick:i[1]||(i[1]=t=>r.clickControl("clickRefresh",e.refreshFlag))},null,2)):(0,l.kq)("",!0),"boolean"===typeof e.hintFlag?((0,l.wg)(),(0,l.iD)("div",{key:1,class:(0,n.C_)(["control tile-blue svg-lamp",{disabled:!e.hintFlag}]),onClick:i[2]||(i[2]=t=>r.clickControl("clickHint",e.hintFlag))},null,2)):(0,l.kq)("",!0)]),(0,l._)("div",L,["boolean"===typeof e.checkFlag?((0,l.wg)(),(0,l.iD)("div",{key:0,class:(0,n.C_)(["control tile-blue svg-check",{disabled:!e.checkFlag}]),onClick:i[3]||(i[3]=t=>r.clickControl("clickCheck",e.checkFlag))},null,2)):(0,l.kq)("",!0),"boolean"===typeof e.nextFlag?((0,l.wg)(),(0,l.iD)("div",{key:1,class:(0,n.C_)(["control tile-blue svg-play",{disabled:!e.nextFlag}]),onClick:i[4]||(i[4]=t=>r.clickControl("clickNext",e.nextFlag))},null,2)):(0,l.kq)("",!0)])])}var w={props:["refreshFlag","checkFlag","nextFlag","hintFlag"],methods:{clickBackHandler(){this.$router.push({name:"home"})},clickControl(t,i=!0){i&&this.$emit(t)}}};const x=(0,b.Z)(w,[["render",I],["__scopeId","data-v-24e6da22"]]);var R=x,D=e(662),_={mixins:[D.Z],created(){this.domSetDocumentBackgroundUrl(e(2319))},props:["inputFlag","resultFlag","hintFlag","resultList","inputList","component"],components:{ControlsPanel:R,TileList:C},emits:["clickTileResult","clickTileInput","clickControlRefresh","clickControlNext","clickControlCheck","clickControlHint"],mounted(){this.resultAnimation=this.resultFlag}};const B=(0,b.Z)(_,[["render",u]]);var H=B},1098:function(t,i,e){e.r(i),e.d(i,{default:function(){return F}});var l=e(3396);function s(t,i,e,s,n,a){const r=(0,l.up)("MathExample"),u=(0,l.up)("InputResultGame");return(0,l.wg)(),(0,l.j4)(u,{inputFlag:t.inputFlag,resultFlag:t.resultFlag,hintFlag:n.hintFlag,resultList:t.round.equation,inputList:t.inputList,onClickTileInput:a.inputAddDigit,onClickTileResult:a.inputRemoveDigit,onClickControlRefresh:a.refreshRound,onClickControlNext:a.buildRound,onClickControlCheck:a.roundCheckResult,onClickControlHint:a.showHint},{"result-left":(0,l.w5)((()=>[n.hintFlag?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(r,{key:0,numA:t.round.number.term1,numB:t.round.number.term2,sign:t.round.sign,class:"hint"},null,8,["numA","numB","sign"]))])),_:1},8,["inputFlag","resultFlag","hintFlag","resultList","inputList","onClickTileInput","onClickTileResult","onClickControlRefresh","onClickControlNext","onClickControlCheck","onClickControlHint"])}var n=e(662),a={methods:{digitCreate(t,i=!1){return{id:t,value:t,disabled:i,class:{disabled:i}}},digitSetDisabled(t,i){return t.disabled=i,t.class.disabled=i,t},digitIsDisabled(t){return t.disabled},digitListRestrictByMax(t,i,e){t.forEach((t=>this.digitSetDisabled(t,""+i==="0"||parseInt(""+i+t.value)>parseInt(e))))}}},r={data(){return{mode:{sign:{plus:!0,minus:!0},side:{right:!0,left:!1},maxNumber:20},history:{lengthMax:100,length:null,list:{}},round:{sign:null,side:null,input:null,number:{sum:null,term1:null,term2:null},equation:{}},display:{sign:{plus:"+",minus:"-"}},assertResult:null,resultFlag:null,inputFlag:!1,resultList:[],inputList:[]}},mounted(){},watch:{resultFlag(){!0===this.resultFlag&&(this.hintFlag=!0)}},methods:{gameRefreshLevel(){},gameNextLevel(){},prepareHistory(){let t=0;for(let i=0;i<=this.mode.maxNumber;i++)if(t+=Math.floor(i/2)+1,t>=this.history.lengthMax){t=this.history.lengthMax;break}this.history.length=t,Object.keys(this.mode.sign).forEach((t=>{this.history.list[t]=[]}))},historyCheck(t,i){return-1===this.history.list[this.round.sign].indexOf([t+i,t>i?t:i].join())},historyAdd(t,i){this.history.list[this.round.sign].length+1>=this.history.length&&(this.history.list[this.round.sign]=[]),this.history.list[this.round.sign].push([t+i,t>i?t:i].join())},buildSign(){this.round.sign=Object.entries(this.mode.sign).filter((t=>!!t[1])).map((t=>t[0])).sort((()=>.5-Math.random()))[0]},buildSide(){this.round.side=Object.entries(this.mode.side).filter((t=>!!t[1])).map((t=>t[0])).sort((()=>.5-Math.random()))[0]},buildNumbers(){let t,i,e=!0;while(e)t=Math.floor(Math.random()*(this.mode.maxNumber+1)),i=Math.floor(Math.random()*(this.mode.maxNumber+1)),t+i>this.mode.maxNumber||this.historyCheck(t,i)&&(e=!1);this.historyAdd(t,i),this.round.number.term1=t,this.round.number.term2=i,this.round.number.sum=t+i}}},u=e(3692),o=e(1162),h=(e(6699),e(9242)),d=e(7139);const c={class:"table-wrapper"},m={key:0},b={key:1};function g(t,i,e,s,n,a){return(0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(h.W3,{tag:"div",name:"fade",class:"table",onClick:a.sort},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.itemsList,(t=>((0,l.wg)(),(0,l.iD)("div",{key:t.id,class:(0,d.C_)([t.class,"table-item"])},[["a","b","ba"].includes(t.type)?((0,l.wg)(),(0,l.iD)("div",m)):(0,l.kq)("",!0),"header"===t.type?((0,l.wg)(),(0,l.iD)("span",b,(0,d.zw)(t.label),1)):(0,l.kq)("",!0)],2)))),128))])),_:1},8,["onClick"])])}var p={props:["numA","numB","sign"],data(){return{itemsList:[],sortStep:null,sortIncrement:null}},created(){this.$watch((()=>this.numA+this.sign+this.numB),this.rebuild),this.rebuild()},methods:{rebuild(){this.buildItemsList(this.numA<this.numB&&"plus"===this.sign?this.numB:this.numA,this.numA<this.numB&&"plus"===this.sign?this.numA:this.numB),"plus"===this.sign?(this.sortStep=0,this.sortIncrement=1):(this.sortStep=2,this.sortIncrement=-1),this.sort()},calculate(){let t=0;for(let i=this.itemsList.length-1;i>=0;i--)"header"!==this.itemsList[i].type?t+=["a","b","ba"].includes(this.itemsList[i].type):(this.itemsList[i].label=t||null,t=0)},generateItemsList(t,i){let e=0;for(const l of i)for(let i=0;i<l.num;i++)e%11===0&&(this.addListItem(e,e,t,{type:"header",from:0}),e++),this.addListItem(e,i,t,l),e++},addListItem(t,i,e,l){this.itemsList[t]?this.itemsList[t].sort[e]=l.from+i+("header"!==l.type?Math.floor((l.from+i)/10)+1:0):this.itemsList.push({id:t,type:l.type,sort:{0:t,[e]:l.from+i+("header"!==l.type?Math.floor((l.from+i)/10)+1:0)},class:{"item-a":"a"===l.type,"item-b":"b"===l.type||"ba"===l.type,"item-header":"header"===l.type},label:null})},buildItemsList(t,i){let e={};e.a=t,e.am=(10-e.a%10)%10,e.ab=i<e.am?i:e.am,e.a0=e.am-e.ab,e.b=i>e.am?i-e.am:0,e.bb=(10-(e.b+e.ab+e.a0)%10)%10>e.ab?e.ab:(10-(e.b+e.ab+e.a0)%10)%10,e.b0=(10-(e.b+e.ab+e.bb+e.a0)%10)%10,this.itemsList=[],this.generateItemsList(1,[{from:0,num:e.a,type:"a"},{from:e.a,num:e.ab,type:null},{from:e.a+e.ab,num:e.a0,type:null},{from:e.a+e.ab+e.a0,num:e.b,type:"b"},{from:e.a+e.ab+e.a0+e.b+e.bb+e.b0,num:e.ab,type:"ba"},{from:e.a+e.ab+e.a0+e.b+e.bb,type:null,num:e.b0},{from:e.a+e.ab+e.a0+e.b,num:e.bb,type:null},{from:e.a+2*e.ab+e.a0+e.b+e.b0+e.bb,type:null,num:e.a0}]),this.generateItemsList(2,[{from:0,num:e.a,type:"a"},{from:e.a+e.ab+e.a0+e.b+e.bb+e.b0,num:e.ab,type:"ba"},{from:e.a+e.ab,num:e.a0,type:null},{from:e.a+e.ab+e.a0,num:e.b,type:"b"},{from:e.a,num:e.ab,type:null},{from:e.a+e.ab+e.a0+e.b+e.bb,type:null,num:e.b0},{from:e.a+e.ab+e.a0+e.b,num:e.bb,type:null},{from:e.a+2*e.ab+e.a0+e.b+e.b0+e.bb,type:null,num:e.a0}])},sort(){this.itemsList=this.itemsList.sort(((t,i)=>t.sort[this.sortStep]-i.sort[this.sortStep])),this.sortStep=(this.sortStep+this.sortIncrement+3)%3,this.calculate()}}},k=e(89);const f=(0,k.Z)(p,[["render",g],["__scopeId","data-v-b17cbb8c"]]);var C=f,y={mixins:[n.Z,a,r,u.Z],components:{InputResultGame:o.Z,MathExample:C},data(){return{hintFlag:!0}},mounted(){this.prepareHistory(),this.buildRound()},watch:{resultList:{handler(t){this.round.equation[this.round.input].value=t.join(""),this.digitListRestrictByMax(this.inputList,parseInt(t.join("")),this.mode.maxNumber),this.inputFlag=t.length>0,this.resultFlag=null},deep:!0}},methods:{buildInputList(){this.inputList=[0,1,2,3,4,5,6,7,8,9].map((t=>this.digitCreate(t)))},buildRound(){this.refreshRound(),this.buildInputList(),this.buildSign(),this.buildSide(),this.buildNumbers(),this.buildEquation(),this.hintFlag=!0},refreshRound(){this.resultList=[],this.resultFlag=null},buildEquation(){this.round.input="right"===this.round.side?"right":["left1","left2"].sort((()=>.5-Math.random()))[0];const t={left1:this.tileCreate("left1","plus"===this.round.sign?this.round.number.term1:this.round.number.sum),sign:this.tileCreate("sign",this.display.sign[this.round.sign]),left2:this.tileCreate("left2",this.round.number.term2),equal:this.tileCreate("equal","="),right:this.tileCreate("right","plus"===this.round.sign?this.round.number.sum:this.round.number.term1)};this.assertResult=t[this.round.input].value,t[this.round.input].value=null,this.round.equation=t},inputAddDigit(t){this.digitIsDisabled(t)||this.resultList.push(t.value)},inputRemoveDigit(t){!0!==this.resultFlag&&this.round.input===t.id&&this.resultList.length>0&&this.resultList.pop()},roundCheckResult(){this.resultList.length>0&&(this.resultFlag=this.resultList.join("")===""+this.assertResult),this.inputFlag=!1},showHint(){this.hintFlag=!1}}};const v=(0,k.Z)(y,[["render",s],["__scopeId","data-v-59e82ffc"]]);var F=v}}]);
//# sourceMappingURL=game-math.dd9faafb.js.map