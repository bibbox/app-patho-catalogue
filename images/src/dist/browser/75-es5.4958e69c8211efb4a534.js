!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{mVFA:function(r,a,i){"use strict";i.r(a),i.d(a,"SubmissionImportExternalComponent",(function(){return j}));var o=i("mEo1"),l=i("RMpN"),p=i("8Y7J"),c=i("3cpT"),s=i("SVse"),u=i("iInd"),d=i("O/5o"),f=i("jLV+"),m=i("Frqi"),x=i("VYMa"),y=i("TSSN");function g(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"h3"),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"](3);p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](2,1,"submission.sections.describe.relationship-lookup.selection-tab.title."+n.routeData.sourceId))}}var v=function(e,t){return{repeatable:e,listId:t}};function b(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"ds-viewable-collection",13),p["\u0275\u0275listener"]("importObject",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](3).import(e)})),p["\u0275\u0275text"](1,"\n        "),p["\u0275\u0275elementEnd"]()}if(2&e){var r=p["\u0275\u0275nextContext"]().ngVar,a=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("@fadeIn",void 0)("objects",r)("selectionConfig",p["\u0275\u0275pureFunction2"](8,v,a.repeatable,a.listId))("config",a.initialPagination)("hideGear",!0)("context",a.context)("importable",!0)("importConfig",a.importConfig)}}function h(e,t){1&e&&(p["\u0275\u0275element"](0,"ds-loading",14),p["\u0275\u0275pipe"](1,"translate")),2&e&&p["\u0275\u0275propertyInterpolate"]("message",p["\u0275\u0275pipeBind1"](1,1,"loading.search-results"))}function S(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",15),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"]("\n          ",p["\u0275\u0275pipeBind1"](2,1,"search.results.empty"),"\n        "))}function I(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275text"](1,"\n        "),p["\u0275\u0275template"](2,g,3,3,"h3",9),p["\u0275\u0275text"](3,"\n        "),p["\u0275\u0275template"](4,b,2,11,"ds-viewable-collection",10),p["\u0275\u0275pipe"](5,"async"),p["\u0275\u0275text"](6,"\n        "),p["\u0275\u0275template"](7,h,2,3,"ds-loading",11),p["\u0275\u0275pipe"](8,"async"),p["\u0275\u0275text"](9,"\n        "),p["\u0275\u0275template"](10,S,3,3,"div",12),p["\u0275\u0275pipe"](11,"async"),p["\u0275\u0275text"](12,"\n      "),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.ngVar,r=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",n&&0!==(null==n||null==n.payload||null==n.payload.page?null:n.payload.page.length)),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",(null==n?null:n.hasSucceeded)&&!p["\u0275\u0275pipeBind1"](5,4,r.isLoading$)&&(null==n||null==n.payload||null==n.payload.page?null:n.payload.page.length)>0),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngIf",p["\u0275\u0275pipeBind1"](8,6,r.isLoading$)),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngIf",!p["\u0275\u0275pipeBind1"](11,8,r.isLoading$)&&0===(null==n||null==n.payload||null==n.payload.page?null:n.payload.page.length))}}function E(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",2),p["\u0275\u0275text"](1,"\n      "),p["\u0275\u0275template"](2,I,13,10,"ng-container",8),p["\u0275\u0275pipe"](3,"async"),p["\u0275\u0275text"](4,"\n    "),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngVar",p["\u0275\u0275pipeBind1"](3,1,n.entriesRD$))}}function C(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",2),p["\u0275\u0275text"](1,"\n      "),p["\u0275\u0275elementStart"](2,"ds-alert",16),p["\u0275\u0275text"](3,"\n        "),p["\u0275\u0275elementStart"](4,"p",17),p["\u0275\u0275text"](5),p["\u0275\u0275pipe"](6,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](7,"\n      "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](8,"\n    "),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("type","alert-info"),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](6,2,"submission.import-external.page.hint")))}var w=function(){return["/mydspace"]},j=function(){var r=function(r){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(i,r);var a=n(i);function i(){return e(this,i),a.apply(this,arguments)}return i}(l.SubmissionImportExternalComponent);return r.\u0275fac=function(e){return D(e||r)},r.\u0275cmp=p["\u0275\u0275defineComponent"]({type:r,selectors:[["ds-submission-import-external"]],features:[p["\u0275\u0275InheritDefinitionFeature"]],decls:37,vars:11,consts:[[1,"container"],[1,"row"],[1,"col-md-12"],["id","header",1,"pb-2"],[3,"initExternalSourceData","externalSourceData"],["class","col-md-12",4,"ngIf"],["role","button",1,"btn","btn-outline-secondary",3,"routerLink"],["aria-hidden","true",1,"fa","fa-chevron-left"],[4,"ngVar"],[4,"ngIf"],[3,"objects","selectionConfig","config","hideGear","context","importable","importConfig","importObject",4,"ngIf"],[3,"message",4,"ngIf"],["id","empty-external-entry-list",4,"ngIf"],[3,"objects","selectionConfig","config","hideGear","context","importable","importConfig","importObject"],[3,"message"],["id","empty-external-entry-list"],[3,"type"],[1,"lead","mb-0"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275text"](1,"\n  "),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275text"](3,"\n    "),p["\u0275\u0275elementStart"](4,"div",2),p["\u0275\u0275text"](5,"\n      "),p["\u0275\u0275elementStart"](6,"h2",3),p["\u0275\u0275text"](7),p["\u0275\u0275pipe"](8,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](9,"\n      "),p["\u0275\u0275elementStart"](10,"ds-submission-import-external-searchbar",4),p["\u0275\u0275listener"]("externalSourceData",(function(e){return t.getExternalSourceData(e)})),p["\u0275\u0275text"](11,"\n      "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](12,"\n    "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](13,"\n  "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](14,"\n  "),p["\u0275\u0275elementStart"](15,"div",1),p["\u0275\u0275text"](16,"\n    "),p["\u0275\u0275template"](17,E,5,3,"div",5),p["\u0275\u0275text"](18,"\n    "),p["\u0275\u0275template"](19,C,9,4,"div",5),p["\u0275\u0275text"](20,"\n  "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](21,"\n  "),p["\u0275\u0275elementStart"](22,"div",1),p["\u0275\u0275text"](23,"\n    "),p["\u0275\u0275elementStart"](24,"div",2),p["\u0275\u0275text"](25,"\n      "),p["\u0275\u0275element"](26,"hr"),p["\u0275\u0275text"](27,"\n      "),p["\u0275\u0275elementStart"](28,"a",6),p["\u0275\u0275text"](29,"\n        "),p["\u0275\u0275element"](30,"i",7),p["\u0275\u0275text"](31),p["\u0275\u0275pipe"](32,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](33,"\n    "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](34,"\n  "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](35,"\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](36,"\n")),2&e&&(p["\u0275\u0275advance"](7),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](8,6,"submission.import-external.title")),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("initExternalSourceData",t.routeData),p["\u0275\u0275advance"](7),p["\u0275\u0275property"]("ngIf",""!==t.routeData.sourceId),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",""===t.routeData.sourceId),p["\u0275\u0275advance"](9),p["\u0275\u0275property"]("routerLink",p["\u0275\u0275pureFunction0"](10,w)),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"](" ",p["\u0275\u0275pipeBind1"](32,8,"submission.import-external.back-to-my-dspace"),"\n      "))},directives:[c.a,s.u,u.j,d.a,f.a,m.a,x.a],pipes:[y.e,s.b],styles:[""],data:{animation:[o.a]}}),r}(),D=p["\u0275\u0275getInheritedFactory"](j)}}])}();
//# sourceMappingURL=75-es5.4958e69c8211efb4a534.js.map