"use strict";(self.webpackChunknb_trans_demo=self.webpackChunknb_trans_demo||[]).push([[651],{651:(d,m,u)=>{u.r(m),u.d(m,{Feature2Component:()=>s,routes:()=>F});var p=u(895),a=u(723),t=u(738);function r(n,e){if(1&n&&t._UZ(0,"b",4),2&n){const c=e.list;t.Q6J("nb-trans-subcontent",e.content)("subcontentList",c)}}function l(n,e){if(1&n&&t._UZ(0,"a",4),2&n){const c=e.list;t.Q6J("nb-trans-subcontent",e.content)("subcontentList",c)}}function i(n,e){if(1&n&&(t.TgZ(0,"b"),t._uU(1),t.qZA()),2&n){const o=e.content;t.xp6(1),t.Oqu(o)}}const _=function(){return{prefix:"content"}},C=function(n,e,o){return[n,e,o]},g=function(n){return{params:n,prefix:"content"}};class s{constructor(){this.params={params1:"{{params2}}",params2:"1111",params3:"2222"},this.compStr1='\n    <div>\n      <nb-trans key="complexContent" [components]="[com0,com1,com2]" [options]="{params,prefix:\'content\'}"> </nb-trans>\n    </div>\n\n    <ng-template #com0 let-comContent="content" let-list="list">\n      <b [nb-trans-subcontent]="comContent" [subcontentList]="list"></b>\n    </ng-template>\n\n    <ng-template #com1 let-comContent="content" let-list="list">\n      <app-widget [comContent]="comContent" [list]="list"></app-widget>\n    </ng-template>\n\n    <ng-template #com2 let-comContent="content">\n      <b>{{comContent}}</b>\n    </ng-template>\n  '}ngOnInit(){}}s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-feature2"]],standalone:!0,features:[t.jDz],decls:18,vars:17,consts:[["key","complexContent",3,"components","options"],["com0",""],["com1",""],["com2",""],[3,"nb-trans-subcontent","subcontentList"]],template:function(e,o){if(1&e&&(t.TgZ(0,"h5"),t._uU(1),t.ALo(2,"json"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.ALo(5,"nbTrans"),t.qZA(),t.TgZ(6,"div")(7,"pre")(8,"code"),t._uU(9),t.qZA()()(),t.TgZ(10,"div"),t._UZ(11,"nb-trans",0),t.qZA(),t.YNc(12,r,1,2,"ng-template",null,1,t.W1O),t.YNc(14,l,1,2,"ng-template",null,2,t.W1O),t.YNc(16,i,2,1,"ng-template",null,3,t.W1O)),2&e){const c=t.MAs(13),b=t.MAs(15),f=t.MAs(17);t.xp6(1),t.hij("\u4f7f\u7528ng-trans\u7ec4\u4ef6\uff0c\u5e26\u6709components\u53c2\u6570\u548coptions\u53c2\u6570\u3002\u8bbe\u7f6ekey\u503c\u524d\u7f00\u548c\u7ffb\u8bd1\u6587\u672c\u4e2d\u7684\u53c2\u6570,params\u53c2\u6570\u4e3a\uff1a",t.lcZ(2,5,o.params),""),t.xp6(3),t.hij(" \u7ffb\u8bd1\u6587\u672c\u539f\u6587\uff1a",t.xi3(5,7,"complexContent",t.DdM(10,_)),"\n"),t.xp6(5),t.Oqu(o.compStr1),t.xp6(2),t.Q6J("components",t.kEZ(11,C,c,b,f))("options",t.VKq(15,g,o.params))}},dependencies:[a.pT,a.gD,a.DA,a.y6,p.ez,p.Ts],styles:["a[_ngcontent-%COMP%]{color:#0ff;cursor:pointer}"]});const F=[{path:"",component:s}]}}]);