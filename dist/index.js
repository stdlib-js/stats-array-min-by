"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=m(function(_,n){
var c=require('@stdlib/assert-is-collection/dist'),p=require('@stdlib/array-dtypes/dist'),g=require('@stdlib/array-dtype/dist'),y=require('@stdlib/array-base-assert-contains/dist'),f=require('@stdlib/array-base-join/dist'),q=require('@stdlib/stats-base-min-by/dist').ndarray,t=require('@stdlib/error-tools-fmtprodmsg/dist'),w=require('@stdlib/assert-is-function/dist'),i=p("real_and_generic"),E="generic";function h(e,r,o){var a;if(!c(e))throw new TypeError(t('null2O',e));if(a=g(e)||E,!y(i,a))throw new TypeError(t('nullHZ',f(i,'", "'),a));if(!w(r))throw new TypeError(t('null2H',r));return q(e.length,e,1,0,s);function s(v,d,D,l){return r.call(o,v,d,l)}}n.exports=h
});var T=u();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
