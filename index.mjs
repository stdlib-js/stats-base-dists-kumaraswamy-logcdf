// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function m(t,r,m){return s(t)||s(r)||s(m)||r<=0||m<=0?NaN:t<=0?i:t>=1?0:e(1-n(1-n(t,r),m))}function d(t,m){return s(t)||s(m)||t<=0||m<=0?r(NaN):function(r){if(s(r))return NaN;if(r<=0)return i;if(r>=1)return 0;return e(1-n(1-n(r,t),m))}}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
