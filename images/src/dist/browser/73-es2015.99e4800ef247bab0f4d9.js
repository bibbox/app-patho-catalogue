(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{tHLB:function(t,e,n){"use strict";n.r(e),n.d(e,"SiteStatisticsPageComponent",(function(){return y}));var a=n("U5Nl"),i=n("8Y7J"),r=n("O/5o"),o=n("SVse"),p=n("Frqi"),s=n("NOWk"),c=n("TSSN");const d=function(t){return{scope:t}};function l(t,e){if(1&t&&(i["\u0275\u0275elementStart"](0,"h2",3),i["\u0275\u0275text"](1),i["\u0275\u0275pipe"](2,"translate"),i["\u0275\u0275elementEnd"]()),2&t){const t=i["\u0275\u0275nextContext"]().ngVar,e=i["\u0275\u0275nextContext"]();i["\u0275\u0275propertyInterpolate"]("id",t.id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"]("\n      ",i["\u0275\u0275pipeBind2"](2,2,"statistics.header",i["\u0275\u0275pureFunction1"](5,d,e.getName(t))),"\n    ")}}function m(t,e){if(1&t&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275text"](1,"\n    "),i["\u0275\u0275template"](2,l,3,7,"h2",2),i["\u0275\u0275text"](3,"\n  "),i["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngVar;i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",t)}}function f(t,e){1&t&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275text"](1,"\n      "),i["\u0275\u0275element"](2,"ds-loading"),i["\u0275\u0275text"](3,"\n    "),i["\u0275\u0275elementContainerEnd"]())}function x(t,e){if(1&t&&(i["\u0275\u0275elementStart"](0,"ds-statistics-table",6),i["\u0275\u0275text"](1,"\n      "),i["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;i["\u0275\u0275classMapInterpolate1"]("m-2 ",t.id,""),i["\u0275\u0275property"]("report",t)}}function g(t,e){1&t&&(i["\u0275\u0275elementStart"](0,"div"),i["\u0275\u0275text"](1),i["\u0275\u0275pipe"](2,"translate"),i["\u0275\u0275elementEnd"]()),2&t&&(i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"]("\n        ",i["\u0275\u0275pipeBind1"](2,1,"statistics.page.no-data"),"\n      "))}function u(t,e){if(1&t&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275text"](1,"\n      "),i["\u0275\u0275template"](2,x,2,4,"ds-statistics-table",5),i["\u0275\u0275text"](3,"\n      "),i["\u0275\u0275template"](4,g,3,3,"div",4),i["\u0275\u0275pipe"](5,"async"),i["\u0275\u0275text"](6,"\n    "),i["\u0275\u0275elementContainerEnd"]()),2&t){const t=i["\u0275\u0275nextContext"]().ngVar,e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",t),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",!i["\u0275\u0275pipeBind1"](5,2,e.hasData$))}}function v(t,e){if(1&t&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275text"](1,"\n\n    "),i["\u0275\u0275template"](2,f,4,0,"ng-container",4),i["\u0275\u0275text"](3,"\n\n    "),i["\u0275\u0275template"](4,u,7,4,"ng-container",4),i["\u0275\u0275text"](5,"\n\n  "),i["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngVar;i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",!t),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",t)}}let y=(()=>{class t extends a.SiteStatisticsPageComponent{}return t.\u0275fac=function(e){return C(e||t)},t.\u0275cmp=i["\u0275\u0275defineComponent"]({type:t,selectors:[["ds-site-statistics-page"]],features:[i["\u0275\u0275InheritDefinitionFeature"]],decls:9,vars:6,consts:[[1,"container"],[4,"ngVar"],["class","header",3,"id",4,"ngIf"],[1,"header",3,"id"],[4,"ngIf"],[3,"report","class",4,"ngFor","ngForOf"],[3,"report"]],template:function(t,e){1&t&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275text"](1,"\n\n  "),i["\u0275\u0275template"](2,m,4,1,"ng-container",1),i["\u0275\u0275pipe"](3,"async"),i["\u0275\u0275text"](4,"\n\n  "),i["\u0275\u0275template"](5,v,6,2,"ng-container",1),i["\u0275\u0275pipe"](6,"async"),i["\u0275\u0275text"](7,"\n\n"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](8,"\n")),2&t&&(i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngVar",i["\u0275\u0275pipeBind1"](3,2,e.scope$)),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngVar",i["\u0275\u0275pipeBind1"](6,4,e.reports$)))},directives:[r.a,o.u,p.a,o.t,s.a],pipes:[o.b,c.e],styles:[""]}),t})();const C=i["\u0275\u0275getInheritedFactory"](y)}}]);
//# sourceMappingURL=73-es2015.99e4800ef247bab0f4d9.js.map