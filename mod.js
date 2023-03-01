// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,a=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,f.get),v&&u&&u.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.floor;function v(r){return y(r)===r}function p(r){return v(r/2)}function b(r){return p(r>0?r-1:r+1)}var s=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY;function A(r){return r===s||r===w}var _=Math.sqrt;function m(r){return Math.abs(r)}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var U=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var N="function"==typeof Symbol?Symbol.toStringTag:"";var h=d&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return U.call(r);t=r[N],u=N,n=null!=(o=r)&&g.call(o,u);try{r[N]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[N]=t:delete r[N],e}:function(r){return U.call(r)},j="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null;var O,S="function"==typeof Uint32Array?Uint32Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===h(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Float64Array;var H="function"==typeof Float64Array?Float64Array:null;var T,G="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,L="function"==typeof Uint8Array;var V="function"==typeof Uint8Array?Uint8Array:null;var W,x="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===h(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var M=W,k="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var q,C="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===h(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:q,uint8:M};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new P(1),X=new E(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n,t,e){return R[0]=r,n[e]=X[Z],n[e+t]=X[$],n}function nr(r){return rr(r,[0,0],1,0)}c(nr,"assign",rr);var tr=!0===K?0:1,er=new P(1),or=new E(er.buffer);function ur(r,n){return er[0]=r,or[tr]=n>>>0,er[0]}function ir(r){return 0|r}var ar,fr,cr=!0===K?1:0,lr=new P(1),yr=new E(lr.buffer);function vr(r){return lr[0]=r,yr[cr]}!0===K?(ar=1,fr=0):(ar=0,fr=1);var pr={HIGH:ar,LOW:fr},br=new P(1),sr=new E(br.buffer),wr=pr.HIGH,Ar=pr.LOW;function _r(r,n){return sr[wr]=r,sr[Ar]=n,br[0]}var mr=[0,0];function dr(r,n){var t,e;return nr.assign(r,mr,1,0),t=mr[0],t&=2147483647,e=vr(n),_r(t|=e&=2147483648,mr[1])}var Ur=!0===K?1:0,gr=new P(1),Nr=new E(gr.buffer);function hr(r,n){return gr[0]=r,Nr[Ur]=n>>>0,gr[0]}var jr=[1,1.5],Ir=[0,.5849624872207642],Or=[0,1.350039202129749e-8];function Sr(r,n,t,e){return l(r)||A(r)?(n[e]=r,n[e+t]=0,n):0!==r&&m(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Sr(r,[0,0],1,0)}),"assign",Sr);var Er=[0,0],Fr=[0,0];function Hr(r,n){var t,e;return 0===n||0===r||l(r)||A(r)?r:(Sr(r,Er,1,0),n+=Er[1],n+=function(r){var n=vr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Er[0]),n<-1074?dr(0,r):n>1023?r<0?w:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr.assign(r,Fr,1,0),t=Fr[0],t&=2148532223,e*_r(t|=n+1023<<20,Fr[1])))}var Tr=1e300,Gr=1e-300,Pr=[0,0],Lr=[0,0];function Vr(r,n){var t,e,o,u,i,a,f,c,y,p,d,U,g,N;if(l(r)||l(n))return NaN;if(nr.assign(n,Pr,1,0),i=Pr[0],0===Pr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return _(r);if(-.5===n)return 1/_(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:m(r)<1==(n===s)?0:s}(r,n)}if(nr.assign(r,Pr,1,0),u=Pr[0],0===Pr[1]){if(0===u)return function(r,n){return n===w?s:n===s?0:n>0?b(n)?r:0:b(n)?dr(s,r):s}(r,n);if(1===r)return 1;if(-1===r&&b(n))return-1;if(A(r))return r===w?Vr(-0,-n):n<0?0:s}if(r<0&&!1===v(n))return(r-r)/(r-r);if(o=m(r),t=2147483647&u|0,e=2147483647&i|0,f=i>>>31|0,a=(a=u>>>31|0)&&b(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&vr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*Tr*Tr:a*Gr*Gr;if(t>1072693248)return 0===f?a*Tr*Tr:a*Gr*Gr;d=function(r,n){var t,e,o,u,i,a;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=ur(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Lr,o)}else d=function(r,n,t){var e,o,u,i,a,f,c,l,y,v,p,b,s,w,A,_,m,d,U,g,N;return d=0,t<1048576&&(d-=53,t=vr(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?g=0:U<767610?g=1:(g=0,d+=1,t-=1048576),i=ur(o=(_=(n=hr(n,t))-(c=jr[g]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=hr(0,e+=g<<18),A=(u=o*o)*u*(0===(N=u)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=ur(f=3+(u=i*i)+(A+=(a=m*(_-i*f-i*(n-(f-c))))*(i+o)),0),s=(p=-7.028461650952758e-9*(y=ur(y=(_=i*f)+(m=a*f+(A-(f-3-u))*o),0))+.9617966939259756*(m-(y-_))+Or[g])-((b=ur(b=(v=.9617967009544373*y)+p+(l=Ir[g])+(w=d),0))-w-l-v),r[0]=b,r[1]=s,r}(Lr,o,t);if(U=(p=(n-(c=ur(n,0)))*d[0]+n*d[1])+(y=c*d[0]),nr.assign(U,Pr,1,0),g=ir(Pr[0]),N=ir(Pr[1]),g>=1083179008){if(0!=(g-1083179008|N))return a*Tr*Tr;if(p+8008566259537294e-32>U-y)return a*Tr*Tr}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|N))return a*Gr*Gr;if(p<=U-y)return a*Gr*Gr}return U=function(r,n,t){var e,o,u,i,a,f,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=hr(0,e)),r=ir(r=vr(c=1-((c=(i=.6931471824645996*(u=ur(u=t+n,0)))+(a=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((f=a-(c-i))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Hr(c,l):hr(c,r)}(g,y,p),a*U}var Wr=.6931471803691238,xr=1.9082149292705877e-10;function Mr(r){var n,t,e,o,u,i,a,f,c,y,v,p;return 0===r?w:l(r)||r<0?NaN:(u=0,(t=vr(r))<1048576&&(u-=54,t=vr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=(t&=1048575)+614244&1048576|0)>>20|0,a=(r=hr(r,t|1072693248^f))-1,(1048575&2+t)<3?0===a?0===u?0:u*Wr+u*xr:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*Wr-(i-u*xr-a)):(f=t-398458|0,c=440401-t|0,o=(v=(p=(y=a/(2+a))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=e+o,(f|=c)>0?(n=.5*a*a,0===u?a-(n-y*(n+i)):u*Wr-(n-(y*(n+i)+u*xr)-a)):0===u?a-y*(a-i):u*Wr-(y*(a-i)-u*xr-a))))}function kr(r,n,t){return l(r)||l(n)||l(t)||n<=0||t<=0?NaN:r<=0?w:r>=1?0:Mr(1-Vr(1-Vr(r,n),t))}function Yr(r,n){return l(r)||l(n)||r<=0||n<=0?(t=NaN,function(){return t}):function(t){if(l(t))return NaN;if(t<=0)return w;if(t>=1)return 0;return Mr(1-Vr(1-Vr(t,r),n))};var t}c(kr,"factory",Yr);export{kr as default,Yr as factory};
//# sourceMappingURL=mod.js.map
