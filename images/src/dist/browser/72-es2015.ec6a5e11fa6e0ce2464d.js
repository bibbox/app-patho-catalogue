(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{u0ua:function(t,e,n){"use strict";n.r(e),n.d(e,"ItemStatisticsPageComponent",(function(){return v}));var a=n("9Kxy"),r=n("8Y7J"),i=n("O/5o"),o=n("SVse"),p=n("Frqi"),s=n("NOWk"),c=n("TSSN");const d=function(t){return{scope:t}};function l(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"h2",3),r["\u0275\u0275text"](1),r["\u0275\u0275pipe"](2,"translate"),r["\u0275\u0275elementEnd"]()),2&t){const t=r["\u0275\u0275nextContext"]().ngVar,e=r["\u0275\u0275nextContext"]();r["\u0275\u0275propertyInterpolate"]("id",t.id),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("\n      ",r["\u0275\u0275pipeBind2"](2,2,"statistics.header",r["\u0275\u0275pureFunction1"](5,d,e.getName(t))),"\n    ")}}function m(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275template"](2,l,3,7,"h2",2),r["\u0275\u0275text"](3,"\n  "),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngVar;r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t)}}function f(t,e){1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n      "),r["\u0275\u0275element"](2,"ds-loading"),r["\u0275\u0275text"](3,"\n    "),r["\u0275\u0275elementContainerEnd"]())}function x(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"ds-statistics-table",6),r["\u0275\u0275text"](1,"\n      "),r["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;r["\u0275\u0275classMapInterpolate1"]("m-2 ",t.id,""),r["\u0275\u0275property"]("report",t)}}function g(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275text"](1),r["\u0275\u0275pipe"](2,"translate"),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("\n        ",r["\u0275\u0275pipeBind1"](2,1,"statistics.page.no-data"),"\n      "))}function u(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n      "),r["\u0275\u0275template"](2,x,2,4,"ds-statistics-table",5),r["\u0275\u0275text"](3,"\n      "),r["\u0275\u0275template"](4,g,3,3,"div",4),r["\u0275\u0275pipe"](5,"async"),r["\u0275\u0275text"](6,"\n    "),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=r["\u0275\u0275nextContext"]().ngVar,e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",t),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!r["\u0275\u0275pipeBind1"](5,2,e.hasData$))}}function y(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n\n    "),r["\u0275\u0275template"](2,f,4,0,"ng-container",4),r["\u0275\u0275text"](3,"\n\n    "),r["\u0275\u0275template"](4,u,7,4,"ng-container",4),r["\u0275\u0275text"](5,"\n\n  "),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngVar;r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!t),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t)}}let v=(()=>{class t extends a.ItemStatisticsPageComponent{}return t.\u0275fac=function(e){return C(e||t)},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["ds-item-statistics-page"]],features:[r["\u0275\u0275InheritDefinitionFeature"]],decls:9,vars:6,consts:[[1,"container"],[4,"ngVar"],["class","header",3,"id",4,"ngIf"],[1,"header",3,"id"],[4,"ngIf"],[3,"report","class",4,"ngFor","ngForOf"],[3,"report"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275text"](1,"\n\n  "),r["\u0275\u0275template"](2,m,4,1,"ng-container",1),r["\u0275\u0275pipe"](3,"async"),r["\u0275\u0275text"](4,"\n\n  "),r["\u0275\u0275template"](5,y,6,2,"ng-container",1),r["\u0275\u0275pipe"](6,"async"),r["\u0275\u0275text"](7,"\n\n"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](8,"\n")),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngVar",r["\u0275\u0275pipeBind1"](3,2,e.scope$)),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngVar",r["\u0275\u0275pipeBind1"](6,4,e.reports$)))},directives:[i.a,o.u,p.a,o.t,s.a],pipes:[o.b,c.e],styles:[""]}),t})();const C=r["\u0275\u0275getInheritedFactory"](v)}}]);
//# sourceMappingURL=72-es2015.ec6a5e11fa6e0ce2464d.js.map