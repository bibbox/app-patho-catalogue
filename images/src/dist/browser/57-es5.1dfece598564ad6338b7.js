!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=a(t);if(e){var c=a(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return r(this,n)}}function r(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"4sPU":function(r,a,o){"use strict";o.r(a),o.d(a,"BreadcrumbsComponent",(function(){return O}));var c=o("YHbe"),i=o("8Y7J"),u=o("O/5o"),l=o("SVse"),p=o("iInd"),f=o("TSSN");function m(t,e){1&t&&i["\u0275\u0275elementContainer"](0)}function s(t,e){1&t&&i["\u0275\u0275elementContainer"](0)}function d(t,e){if(1&t&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275text"](1,"\n                "),i["\u0275\u0275template"](2,s,1,0,"ng-container",6),i["\u0275\u0275text"](3,"\n            "),i["\u0275\u0275elementContainerEnd"]()),2&t){var n=e.$implicit,r=e.last;i["\u0275\u0275nextContext"](2);var a=i["\u0275\u0275reference"](6),o=i["\u0275\u0275reference"](9);i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngTemplateOutlet",r?o:a)("ngTemplateOutletContext",n)}}var b=function(){return{text:"home.breadcrumbs",url:"/"}};function g(t,e){if(1&t&&(i["\u0275\u0275elementStart"](0,"nav",4),i["\u0275\u0275text"](1,"\n        "),i["\u0275\u0275elementStart"](2,"ol",5),i["\u0275\u0275text"](3,"\n            "),i["\u0275\u0275template"](4,m,1,0,"ng-container",6),i["\u0275\u0275text"](5,"\n            "),i["\u0275\u0275template"](6,d,4,2,"ng-container",7),i["\u0275\u0275text"](7,"\n        "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](8,"\n    "),i["\u0275\u0275elementEnd"]()),2&t){var n=i["\u0275\u0275nextContext"]().ngVar,r=i["\u0275\u0275reference"](6),a=i["\u0275\u0275reference"](9);i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngTemplateOutlet",(null==n?null:n.length)>0?r:a)("ngTemplateOutletContext",i["\u0275\u0275pureFunction0"](3,b)),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",n)}}function v(t,e){if(1&t&&(i["\u0275\u0275text"](0,"\n        "),i["\u0275\u0275elementStart"](1,"li",8),i["\u0275\u0275elementStart"](2,"a",9),i["\u0275\u0275text"](3),i["\u0275\u0275pipe"](4,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](5,"\n    ")),2&t){var n=e.text,r=e.url;i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("routerLink",r),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](4,2,n))}}function x(t,e){if(1&t&&(i["\u0275\u0275text"](0,"\n        "),i["\u0275\u0275elementStart"](1,"li",10),i["\u0275\u0275text"](2),i["\u0275\u0275pipe"](3,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](4,"\n    ")),2&t){var n=e.text;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](3,1,n))}}function y(t,e){if(1&t&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275text"](1,"\n    "),i["\u0275\u0275template"](2,g,9,4,"nav",1),i["\u0275\u0275pipe"](3,"async"),i["\u0275\u0275text"](4,"\n\n    "),i["\u0275\u0275template"](5,v,6,4,"ng-template",null,2,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275text"](7,"\n\n    "),i["\u0275\u0275template"](8,x,5,3,"ng-template",null,3,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275text"](10,"\n"),i["\u0275\u0275elementContainerEnd"]()),2&t){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngIf",i["\u0275\u0275pipeBind1"](3,1,n.showBreadcrumbs$))}}var O=function(){var r=function(r){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(o,r);var a=n(o);function o(){return t(this,o),a.apply(this,arguments)}return o}(c.BreadcrumbsComponent);return r.\u0275fac=function(t){return C(t||r)},r.\u0275cmp=i["\u0275\u0275defineComponent"]({type:r,selectors:[["ds-breadcrumbs"]],features:[i["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:3,consts:[[4,"ngVar"],["aria-label","breadcrumb","class","nav-breadcrumb",4,"ngIf"],["breadcrumb",""],["activeBreadcrumb",""],["aria-label","breadcrumb",1,"nav-breadcrumb"],[1,"container","breadcrumb"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngFor","ngForOf"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"]],template:function(t,e){1&t&&(i["\u0275\u0275template"](0,y,11,3,"ng-container",0),i["\u0275\u0275pipe"](1,"async"),i["\u0275\u0275text"](2,"\n\n")),2&t&&i["\u0275\u0275property"]("ngVar",i["\u0275\u0275pipeBind1"](1,1,e.breadcrumbs$))},directives:[u.a,l.u,l.B,l.t,p.j],pipes:[l.b,f.e],styles:['@charset "UTF-8";.breadcrumb[_ngcontent-%COMP%], .nav-breadcrumb[_ngcontent-%COMP%]{background-color:var(--ds-breadcrumb-bg)}.breadcrumb[_ngcontent-%COMP%]{border-radius:0;margin-top:calc(-1 * var(--ds-content-spacing));padding-bottom:var(--ds-content-spacing/3);padding-top:var(--ds-content-spacing/3)}li.breadcrumb-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:var(--ds-breadcrumb-link-color)!important}li.breadcrumb-item.active[_ngcontent-%COMP%]{color:var(--ds-breadcrumb-link-active-color)!important}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:"\u2022"!important}']}),r}(),C=i["\u0275\u0275getInheritedFactory"](O)}}])}();
//# sourceMappingURL=57-es5.1dfece598564ad6338b7.js.map