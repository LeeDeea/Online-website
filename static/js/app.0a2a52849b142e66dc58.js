webpackJsonp([1],{"78sb":function(t,e){},"7ThI":function(t,e){},HA4g:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("7ThI")},null,null).exports,o=n("/ocq"),r={name:"IndexHeader",data:function(){return{difficulty:"难度 :",levels:[{id:"0001",content:"初级"},{id:"0002",content:"中级"},{id:"0003",content:"高级"}],questionClassification:[{id:"0001",content:"思考题"},{id:"0001",content:"选择题"},{id:"0002",content:"综合题"},{id:"0003",content:"功能题"}]}},methods:{addEventListenerNavClick:function(t){"初级"===t.content?this.$emit("selectHeader","primaryKnowledage"):"中级"===t.content?this.$emit("selectHeader","intermediateKnowledge"):"高级"===t.content&&alert("此部分功能尚未扩展")}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-shadow"}),t._v(" "),n("header",{staticClass:"header"}),t._v(" "),n("div",{staticClass:"top-nav"},[n("ul",{staticClass:"top-nav-ul"},[n("div",[n("li",{staticClass:"top-nav-ul-li level0"},[t._v(t._s(t.difficulty))]),t._v(" "),t._l(t.levels,function(e,i){return n("li",{key:i.id,staticClass:"top-nav-ul-li level1",on:{click:function(n){return t.addEventListenerNavClick(e)}}},[t._v(t._s(e.content))])})],2),t._v(" "),n("span",[n("a",{staticClass:"github",attrs:{title:"github",href:"https://github.com/LeeDeea/Online-website"}},[n("svg",{staticClass:"github",attrs:{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])]),t._v(" "),n("div",t._l(t.questionClassification,function(e,i){return n("li",{key:i.id,staticClass:"top-nav-ul-li level4",on:{click:function(n){return t.addEventListenerNavClick(e)}}},[t._v(t._s(e.content))])}),0)])])])},staticRenderFns:[]};var l=n("VU/8")(r,c,!1,function(t){n("btOE")},"data-v-1dd3b9bf",null).exports,d={name:"IndexKnowledge",props:{levels:Array},data:function(){return{classification:"分类："}},methods:{addEventListenerNavClick:function(t){this.$emit("selectKnowleage",t.articleList)}},mounted:function(){}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"top-knowledge-ul"},[n("li",{staticClass:"top-knowledge-ul-li",staticStyle:{background:"darkgray",color:"white"}},[t._v(t._s(t.classification))]),t._v(" "),t._l(t.levels,function(e,i){return n("li",{key:i.id,staticClass:"top-knowledge-ul-li",on:{click:function(n){return t.addEventListenerNavClick(e)}}},[t._v(t._s(e.title))])})],2)])},staticRenderFns:[]};var h=n("VU/8")(d,u,!1,function(t){n("XY+t")},"data-v-20cfc47e",null).exports,v={name:"IndexArticleList",props:{articleListData:Array},data:function(){return{hotArticle:"文章列表",show:"hidden",articleLists:!0,godColor:1e6,dataQuestion:"题目：请点击上方分类按钮,切换文章列表",dataAnswer:[{id:12,answer:"这是一个简单的网站，会存放一些我整理的有关习题，不过个人时间精力有限,题目整理不当的地方或更新进度缓慢请给予谅解并及时反馈给我,十分感谢,联系方式：VX:VsevenV73999",explanation:"绿色代表题目描述解析",ImgExplanation:"粉色代表图片描述或细节分析"}],dataImge:[{url:"nothing"}],articleList:[{id:1,titleList:"题目存放处",questions:{question:"题目：请点击上方分类按钮,切换文章列表",answer:[{answer:"这是一个简单的网站，会存放一些我整理的有关习题，不过个人时间精力有限,题目整理不当的地方或更新进度缓慢请给予谅解并及时反馈给我,十分感谢,联系方式：VX:VsevenV73999"}]}},{id:2,titleList:"点击切换题目",questions:{question:"题目：请点击上方分类按钮,切换文章列表",answer:[{answer:"点击左侧切换文章，点击上方分类切换文章列表"}]}}],shows:!0}},methods:{addEventListenerNavClick:function(t,e){var n=this;this.shows=!this.shows,this.godColor=e,setTimeout(function(){for(var e=0;e<n.articleList.length;e++)n.articleList[e].id===t.id&&(n.dataQuestion=n.articleList[e].questions.question,n.dataAnswer=n.articleList[e].questions.answer);n.shows=!n.shows},300)},hideenArticleList:function(){"show"===this.show?(this.$refs.articleOl.style.display="block",this.show="hidden"):(this.$refs.articleOl.style.display="none",this.show="show")}},mounted:function(){},watch:{articleListData:function(){this.articleList=this.articleListData,this.godColor=1e6}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-wrap"},[n("div",{staticClass:"article-size article-left-width"},[n("div",{staticClass:"hot-article"},[n("div",{staticClass:"hot-article-title"},[t._v("文章列表")]),t._v(" "),n("span",{staticClass:"showArticle",on:{click:function(e){return t.hideenArticleList()}}},[t._v("\n        "+t._s(t.show))])]),t._v(" "),n("div",{ref:"articleOl",attrs:{id:"articleOl"}},[n("ul",{staticClass:"articleListUl"},t._l(t.articleList,function(e,i){return n("li",{key:i,ref:"article",refInFor:!0,class:{articleList:t.articleLists,godColor:i==t.godColor},on:{click:function(n){return t.addEventListenerNavClick(e,i)}}},[t._v(t._s(i+1)+"."+t._s(e.titleList))])}),0)])]),t._v(" "),n("div",{staticClass:"article-size article-right-width "},[n("div",[n("div",{staticClass:"questions"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.shows,expression:"shows"}]},[t._v("\n            Q:"+t._s(t.dataQuestion)+"\n          ")])])],1),t._v(" "),n("div",{staticClass:"answer article-right-boxshadow"},[n("transition-group",{attrs:{name:"fade",mode:"out-in"}},t._l(t.dataAnswer,function(e,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.shows,expression:"shows"}],key:i},[n("p",{staticClass:"answer-fontsize"},[n("b",[t._v(t._s(e.answer))])]),t._v(" "),n("p",{staticClass:"answerExplanation",domProps:{innerHTML:t._s(e.explanation)}},[t._v("\n              "+t._s(e.explanation)+"\n            ")]),t._v(" "),n("div",{staticClass:"questionImgWrap"},[e.url?n("img",{staticClass:"questionImg",attrs:{src:e.url,alt:""}}):t._e()]),t._v(" "),n("p",{staticClass:"imgAnswe",domProps:{innerHTML:t._s(e.ImgExplanation)}},[t._v("\n              "+t._s(e.ImgExplanation)+"\n            ")])])}),0)],1)])])])},staticRenderFns:[]};var m=n("VU/8")(v,f,!1,function(t){n("p4T3")},"data-v-986300b8",null).exports,p={name:"canvasBg",data:function(){return{}},methods:{initCanvas:function(){var t=this.$refs.canvas,e=t.getContext("2d"),n=document.body.clientWidth,i=document.body.clientHeight,a=80;n<675&&(a=30);var s=[];function o(t,n){e.save(),e.fillStyle="rgba(255, 255, 255, 0)",e.beginPath(),e.arc(t,n,1.2,0,2*Math.PI,!1),e.closePath(),e.fill(),e.restore()}function r(e,n,i,a){var s=t.getContext("2d"),o=s.createLinearGradient(e,n,i,a);o.addColorStop(0,"#bcbcbc"),o.addColorStop(1,"#f2f2f2"),s.save(),s.strokeStyle=o,s.beginPath(),s.moveTo(e,n),s.lineTo(i,a),s.lineCap="butt",s.closePath(),s.stroke(),s.restore()}!function(){t.width=n,t.height=i;for(var e=0;e<a;e++)s[e]={x:Math.random()*n,y:Math.random()*i,cx:1.2*(.6*Math.random()-.4),cy:1.2*(.6*Math.random()-.4)},o(s[e].x,s[e].y)}(),setInterval(function(){e.clearRect(0,0,n,i);for(var t=0;t<a;t++){s[t].x+=s[t].cx,s[t].y+=s[t].cy,o(s[t].x,s[t].y),s[t].x<0||s[t].x>n?s[t].cx=-s[t].cx:(s[t].y<0||s[t].y>i)&&(s[t].cy=-s[t].cy);for(var c=t+1;c<a;c++)Math.pow(s[t].x-s[c].x,2)+Math.pow(s[t].y-s[c].y,2)<3600&&r(s[t].x,s[t].y,s[c].x,s[c].y)}},25)}},mounted:function(){this.initCanvas()}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{ref:"canvas",staticClass:"canvasss",attrs:{id:"canvas"}})])},staticRenderFns:[]};var w=n("VU/8")(p,g,!1,function(t){n("gSWM")},"data-v-2ae03970",null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"#"}},[e("div",{staticClass:"backTop"},[e("svg",{staticClass:"icon",attrs:{t:"1562837425709",viewBox:"0 0 1961 1024",version:"1.1","p-id":"1972",width:"30",height:"30"}},[e("path",{attrs:{d:"M1659.19911261 650.488383a69.211299 69.211299 0 0 1-20.050514 48.783294 67.904604 67.904604 0 0 1-96.739016 0L1014.76598561 166.735232 479.48547961 707.053774a67.933641 67.933641 0 0 1-96.753534 0 69.458119 69.458119 0 0 1 0-97.66822l583.657273-589.145394a67.933641 67.933641 0 0 1 96.753534 0l576.005846 581.406853A69.240337 69.240337 0 0 1 1659.19911261 650.488383z m0 0","p-id":"1973",fill:"#ffffff"}})])])])])},staticRenderFns:[]};var C=n("VU/8")({name:"IndexBackTop",data:function(){return{}},methods:{}},_,!1,function(t){n("p2cM")},"data-v-2fe02c48",null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"buttom-space"})},staticRenderFns:[]};var L=n("VU/8")({name:"IndexButtonSpace",data:function(){return{}},methods:{}},x,!1,function(t){n("ZJbE")},"data-v-70420a38",null).exports,b={name:"IndexTopLine",data:function(){return{comWidth:0,timer:null}},methods:{watch:function(){var t=this;window.addEventListener("scroll",function(e){t.timer&&clearTimeout(t.timer),t.timer=setTimeout(function(){var e=(document.body.scrollHeight||document.documentElement.scrollHeight)-(document.documentElement.clientHeight||document.body.clientHeight),n=document.documentElement.scrollTop/e*100;n=Number(n.toString().slice(0,6)),t.comWidth=n},15)})}},mounted:function(){this.watch()}},y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"Line",staticClass:"top-line",style:"width:"+this.comWidth+"%"})},staticRenderFns:[]};var I=n("VU/8")(b,y,!1,function(t){n("YItT")},"data-v-0cea1edc",null).exports,k=n("mtWM"),E=n.n(k),A={name:"index",components:{IndexHeader:l,IndexKnowledge:h,IndexArticleList:m,IndexCanvasBg:w,IndexBackTop:C,IndexButtonSpace:L,IndexTopLine:I},data:function(){return{getJsonData:"primaryKnowledage.json",getJsonHeader:"primaryKnowledage",levels:[],articleList:[]}},methods:{getKnowleage:function(){E.a.get("./static/mock/"+this.getJsonData).then(this.handleGetKnowleageInfoSucc)},handleGetKnowleageInfoSucc:function(t){t=t.data,this.levels=t.data.knowledge},changetHeader:function(t){this.getJsonHeader=t;var e=t+".json";E.a.get("./static/mock/"+e).then(this.handleGetKnowleageInfoSucc)},changeKnowleage:function(t){this.getJsonData=t,E.a.get("./static/mock/"+this.getJsonHeader+"/"+this.getJsonData).then(this.changeArticleList)},changeArticleList:function(t){t=t.data.articleList,this.articleList=t}},mounted:function(){this.getKnowleage()}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bodySize"},[n("IndexCanvasBg"),t._v(" "),n("Index-TopLine"),t._v(" "),n("Index-Header",{on:{selectHeader:t.changetHeader}}),t._v(" "),n("Index-Knowledge",{attrs:{levels:t.levels},on:{selectKnowleage:t.changeKnowleage}}),t._v(" "),n("Index-ArticleList",{attrs:{articleListData:t.articleList}}),t._v(" "),n("Index-BackTop"),t._v(" "),n("Index-ButtonSpace")],1)},staticRenderFns:[]};var H=n("VU/8")(A,M,!1,function(t){n("o7cX")},null,null).exports,S={name:"LoginCanvasBg",data:function(){return{}},methods:{initCanvas:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),n=t.width=window.innerWidth,i=t.height=window.innerHeight,a=217,s=[],o=0,r=document.createElement("canvas"),c=r.getContext("2d");r.width=100,r.height=100;var l=r.width/2,d=c.createRadialGradient(l,l,0,l,l,l);function u(t,e){if(arguments.length<2&&(e=t,t=0),t>e){var n=e;e=t,t=n}return Math.floor(Math.random()*(e-t+1))+t}d.addColorStop(.025,"#CCC"),d.addColorStop(.1,"hsl("+a+", 61%, 33%)"),d.addColorStop(.25,"hsl("+a+", 64%, 6%)"),d.addColorStop(1,"transparent"),c.fillStyle=d,c.beginPath(),c.arc(l,l,l,0,2*Math.PI),c.fill();var h=function(){var t,e,a;this.orbitRadius=u((t=n,e=i,a=Math.max(t,e),Math.round(Math.sqrt(a*a+a*a))/2)),this.radius=u(60,this.orbitRadius)/8,this.orbitX=n/2,this.orbitY=i/2,this.timePassed=u(0,800),this.speed=-u(this.orbitRadius)/5e4,this.alpha=u(2,10)/10,s[++o]=this};h.prototype.draw=function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,n=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,i=u(10);1===i&&this.alpha>0?this.alpha-=.05:2===i&&this.alpha<1&&(this.alpha+=.05),e.globalAlpha=this.alpha,e.drawImage(r,t-this.radius/2,n-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var v=0;v<800;v++)new h;!function t(){e.globalCompositeOperation="source-over",e.globalAlpha=.5,e.fillStyle="hsla("+a+", 64%, 6%, 2)",e.fillRect(0,0,n,i),e.globalCompositeOperation="lighter";for(var o=1,r=s.length;o<r;o++)s[o].draw();window.requestAnimationFrame(t)}()}},mounted:function(){this.initCanvas()}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"canvasBg"}),this._v(" "),e("canvas",{ref:"canvas",staticClass:"canvass",attrs:{id:"canvas"}})])},staticRenderFns:[]};var R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top_logo"}),t._v(" "),n("div",{staticClass:"nav"},[n("div",{staticClass:"introduce",attrs:{onselectstart:"return false"}},[t._v(t._s(t.say))]),t._v(" "),n("router-link",{attrs:{to:"/index"}},[n("div",{staticClass:"gv",attrs:{onselectstart:"return false",href:""}},[t._v(t._s(t.click))])])],1)])},staticRenderFns:[]};var V={name:"index",components:{LoginCanvasBg:n("VU/8")(S,T,!1,function(t){n("78sb")},"data-v-684e005b",null).exports,LoginImg:n("VU/8")({name:"LoginImg",data:function(){return{say:"来自一位刚毕业的前端学童的介绍：本网站内主要存放一些前端常用知识，有兴趣的同学可以收藏一下哟",click:"点击新世界"}}},R,!1,function(t){n("HA4g")},null,null).exports},data:function(){return{test:"test"}},methods:{}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvasSize"},[e("Login-Img"),this._v(" "),e("Login-CanvasBg")],1)},staticRenderFns:[]};var B=n("VU/8")(V,$,!1,function(t){n("sOs1")},null,null).exports;i.a.use(o.a);var K=new o.a({routes:[{path:"/index",name:"Index",component:H},{path:"/",name:"login",component:B}]}),q=n("DVXL"),F=n.n(q),P=n("NYxO");i.a.use(P.a);var N={count:1,getters:O},O={addEventLisenner:function(t){return t.count}},U=new P.a.Store({state:N});i.a.config.productionTip=!1,F.a.attach(document.body),new i.a({el:"#app",store:U,router:K,components:{App:s},template:"<App/>"})},"XY+t":function(t,e){},YItT:function(t,e){},ZJbE:function(t,e){},btOE:function(t,e){},gSWM:function(t,e){},o7cX:function(t,e){},p2cM:function(t,e){},p4T3:function(t,e){},sOs1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0a2a52849b142e66dc58.js.map