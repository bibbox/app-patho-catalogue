!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=a(t);if(e){var i=a(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return r(this,n)}}function r(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{tHLB:function(r,a,o){"use strict";o.r(a),o.d(a,"SiteStatisticsPageComponent",(function(){return b}));var i=o("U5Nl"),c=o("8Y7J"),p=o("O/5o"),s=o("SVse"),f=o("Frqi"),u=o("NOWk"),l=o("TSSN"),d=function(t){return{scope:t}};function m(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"h2",3),c["\u0275\u0275text"](1),c["\u0275\u0275pipe"](2,"translate"),c["\u0275\u0275elementEnd"]()),2&t){var n=c["\u0275\u0275nextContext"]().ngVar,r=c["\u0275\u0275nextContext"]();c["\u0275\u0275propertyInterpolate"]("id",n.id),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"]("\n      ",c["\u0275\u0275pipeBind2"](2,2,"statistics.header",c["\u0275\u0275pureFunction1"](5,d,r.getName(n))),"\n    ")}}function y(t,e){if(1&t&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275text"](1,"\n    "),c["\u0275\u0275template"](2,m,3,7,"h2",2),c["\u0275\u0275text"](3,"\n  "),c["\u0275\u0275elementContainerEnd"]()),2&t){var n=e.ngVar;c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",n)}}function g(t,e){1&t&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275text"](1,"\n      "),c["\u0275\u0275element"](2,"ds-loading"),c["\u0275\u0275text"](3,"\n    "),c["\u0275\u0275elementContainerEnd"]())}function x(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"ds-statistics-table",6),c["\u0275\u0275text"](1,"\n      "),c["\u0275\u0275elementEnd"]()),2&t){var n=e.$implicit;c["\u0275\u0275classMapInterpolate1"]("m-2 ",n.id,""),c["\u0275\u0275property"]("report",n)}}function v(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"div"),c["\u0275\u0275text"](1),c["\u0275\u0275pipe"](2,"translate"),c["\u0275\u0275elementEnd"]()),2&t&&(c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"]("\n        ",c["\u0275\u0275pipeBind1"](2,1,"statistics.page.no-data"),"\n      "))}function h(t,e){if(1&t&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275text"](1,"\n      "),c["\u0275\u0275template"](2,x,2,4,"ds-statistics-table",5),c["\u0275\u0275text"](3,"\n      "),c["\u0275\u0275template"](4,v,3,3,"div",4),c["\u0275\u0275pipe"](5,"async"),c["\u0275\u0275text"](6,"\n    "),c["\u0275\u0275elementContainerEnd"]()),2&t){var n=c["\u0275\u0275nextContext"]().ngVar,r=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",n),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",!c["\u0275\u0275pipeBind1"](5,2,r.hasData$))}}function S(t,e){if(1&t&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275text"](1,"\n\n    "),c["\u0275\u0275template"](2,g,4,0,"ng-container",4),c["\u0275\u0275text"](3,"\n\n    "),c["\u0275\u0275template"](4,h,7,4,"ng-container",4),c["\u0275\u0275text"](5,"\n\n  "),c["\u0275\u0275elementContainerEnd"]()),2&t){var n=e.ngVar;c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",!n),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",n)}}var b=function(){var r=function(r){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(o,r);var a=n(o);function o(){return t(this,o),a.apply(this,arguments)}return o}(i.SiteStatisticsPageComponent);return r.\u0275fac=function(t){return C(t||r)},r.\u0275cmp=c["\u0275\u0275defineComponent"]({type:r,selectors:[["ds-site-statistics-page"]],features:[c["\u0275\u0275InheritDefinitionFeature"]],decls:9,vars:6,consts:[[1,"container"],[4,"ngVar"],["class","header",3,"id",4,"ngIf"],[1,"header",3,"id"],[4,"ngIf"],[3,"report","class",4,"ngFor","ngForOf"],[3,"report"]],template:function(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275text"](1,"\n\n  "),c["\u0275\u0275template"](2,y,4,1,"ng-container",1),c["\u0275\u0275pipe"](3,"async"),c["\u0275\u0275text"](4,"\n\n  "),c["\u0275\u0275template"](5,S,6,2,"ng-container",1),c["\u0275\u0275pipe"](6,"async"),c["\u0275\u0275text"](7,"\n\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](8,"\n")),2&t&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngVar",c["\u0275\u0275pipeBind1"](3,2,e.scope$)),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngVar",c["\u0275\u0275pipeBind1"](6,4,e.reports$)))},directives:[p.a,s.u,f.a,s.t,u.a],pipes:[s.b,l.e],styles:[""]}),r}(),C=c["\u0275\u0275getInheritedFactory"](b)}}])}();
//# sourceMappingURL=73-es5.99e4800ef247bab0f4d9.js.map