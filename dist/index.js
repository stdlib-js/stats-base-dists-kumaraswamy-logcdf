"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=a(function(R,o){
var u=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-pow/dist'),l=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/constants-float64-ninf/dist');function y(e,r,i){return u(e)||u(r)||u(i)||r<=0||i<=0?NaN:e<=0?p:e>=1?0:l(1-f(1-f(e,r),i))}o.exports=y
});var v=a(function(h,q){
var d=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-pow/dist'),F=require('@stdlib/math-base-special-ln/dist'),g=require('@stdlib/constants-float64-ninf/dist');function w(e,r){if(n(e)||n(r)||e<=0||r<=0)return d(NaN);return i;function i(t){return n(t)?NaN:t<=0?g:t>=1?0:F(1-s(1-s(t,e),r))}}q.exports=w
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=c(),m=v();I(N,"factory",m);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
