!function(l){"use strict";var J="ht",z=l[J],$=Math,A=$.max,U=$.min,q=$.abs,S=$.atan2,x=$.cos,G=$.sin,r=$.ceil,e=z.Default,E=e.getInternal(),Q=z.List,N=E.Mat,k=E.getNodeRect,t=E.intersectionLineRect,o=e.getDistance,H=e.setEdgeType,W="left",Z="right",h="top",b="bottom",j="edge.type",T="edge.gap",u="edge.center",B="edge.extend",w=function(O,p){return k(O,p).width},D=function(C,m){return k(C,m).height},i=function(N,p){return E.getEdgeAgentPosition(N,p._40I,p.s("edge.source.position"),p.s("edge.source.offset.x"),p.s("edge.source.offset.y"),p.s("edge.source.anchor.x"),p.s("edge.source.anchor.y"))},O=function(J,u){return E.getEdgeAgentPosition(J,u._41I,u.s("edge.target.position"),u.s("edge.target.offset.x"),u.s("edge.target.offset.y"),u.s("edge.target.anchor.x"),u.s("edge.target.anchor.y"))},P=function(d,y){var _=d.s(j),b=d.getEdgeGroup();if(b){var u=0;if(b.eachSiblingEdge(function(p){y.isVisible(p)&&p.s(j)==_&&u++}),u>1)return d.s(T)*(u-1)/2}return 0},m=function(U,N){var y=U.s(j),R=U.isLooped();if(!U.getEdgeGroup())return R?U.s(T):0;var L,M=0,b=0,A=0;return U.getEdgeGroup().getSiblings().each(function(G){G.each(function(p){if(p._40I===U._40I&&p.s(j)==y&&N.isVisible(p)){var H=p.s(T);L?(b+=A/2+H/2,A=H):(L=p,A=H),p===U&&(M=b)}})}),R?b-M+A:M-b/2},C=function(M,i){var O=M.size(),w=i.s("edge.corner.radius");if(0===w)return{points:M,segments:new Q([1,O])};if(0>w)return{points:M};var I,_=new Q,s=new Q,e=M.get(0);_.add(e),s.add(1);for(var p=1;O>p;p++)if(O>p+1){var W=M.get(p),C=M.get(p+1),a=e.x,N=e.y,A=W.x,y=W.y,L=y-N,d=A-a,t=S(L,d);I=U(.99*o(e,W),w),_.add({x:A-I*x(t),y:y-I*G(t)}),_.add(W),a=W.x,N=W.y,A=C.x,y=C.y,L=y-N,d=A-a,t=S(L,d),I=U(.99*o(W,C),w),e={x:a+I*x(t),y:N+I*G(t)},_.add(e),s.addAll([2,3])}else _.add(M.get(p)),s.add(2);return{points:_,segments:s}};E.addMethod(z.Style,{"edge.ripple.elevation":-20,"edge.ripple.size":1,"edge.ripple.both":!1,"edge.ripple.straight":!1,"edge.ripple.length":-1,"edge.corner.radius":-1,"edge.ortho":.5,"edge.flex":20,"edge.extend":20},!0),H("boundary",function(W,$,g,q){q||($=-$);var b,h=i(g,W),I=O(g,W),M=k(g,W._40I),H=k(g,W._41I),z=new N(S(I.y-h.y,I.x-h.x)),d=o(h,I),A=h.x,X=h.y;return b=z.tf(0,$),h={x:b.x+A,y:b.y+X},b=z.tf(d,$),I={x:b.x+A,y:b.y+X},b=t(h,I,M),b&&(h={x:b[0],y:b[1]}),b=t(h,I,H),b&&(I={x:b[0],y:b[1]}),{points:new Q([h,I])}}),H("ripple",function(q,L,A,I){I||(L=-L);var Y=i(A,q),$=O(A,q),p=o(Y,$),h=U(q.s("edge.offset"),p/2),D=q.s("edge.ripple.size"),d=q.s("edge.ripple.length"),j=q.s("edge.ripple.both"),v=q.s(u),E=q.s("edge.ripple.elevation"),f=new Q,l=q.s("edge.ripple.straight")?null:new Q,s=new N(S($.y-Y.y,$.x-Y.x));I||(E=-E),p-=2*h,d>0&&(D=r(p/d));var C=p/D;l&&l.add(1);for(var k=0;D>k;k++)l&&l.add(3),0===k?f.add({x:h+C*k,y:v?0:L}):f.add({x:h+C*k,y:L}),f.add({x:h+C*k+C/2,y:E+L}),j&&(E=-E);for(f.add({x:h+p,y:v?0:L}),k=0;k<f.size();k++){var B=s.tf(f.get(k));B.x+=Y.x,B.y+=Y.y,f.set(k,B)}return{points:f,segments:l}}),H("h.v",function(N,E,X){E=m(N,X);var s=new Q,Y=N.s(u),R=i(X,N),k=R.x,v=R.y,d=O(X,N),V=d.x,B=d.y,z=0,S=0,T=V-k,U=B-v;return Y||(z=w(X,N._40I)/2,S=D(X,N._41I)/2),T>=0&&0>=U?(s.add({x:k+z,y:v+E}),s.add({x:V+E,y:v+E}),s.add({x:V+E,y:B+S})):0>=T&&U>=0?(s.add({x:k-z,y:v+E}),s.add({x:V+E,y:v+E}),s.add({x:V+E,y:B-S})):T>=0&&U>=0?(s.add({x:k+z,y:v+E}),s.add({x:V-E,y:v+E}),s.add({x:V-E,y:B-S})):(s.add({x:k-z,y:v+E}),s.add({x:V-E,y:v+E}),s.add({x:V-E,y:B+S})),C(s,N)}),H("v.h",function(W,l,Z){l=m(W,Z);var d=new Q,o=W.s(u),J=i(Z,W),p=J.x,n=J.y,V=O(Z,W),P=V.x,r=V.y,F=0,k=0,a=P-p,H=r-n;return o||(F=w(Z,W._41I)/2,k=D(Z,W._40I)/2),a>=0&&0>=H?(d.add({x:p+l,y:n-k}),d.add({x:p+l,y:r+l}),d.add({x:P-F,y:r+l})):0>=a&&H>=0?(d.add({x:p+l,y:n+k}),d.add({x:p+l,y:r+l}),d.add({x:P+F,y:r+l})):a>=0&&H>=0?(d.add({x:p-l,y:n+k}),d.add({x:p-l,y:r+l}),d.add({x:P-F,y:r+l})):(d.add({x:p-l,y:n-k}),d.add({x:p-l,y:r+l}),d.add({x:P+F,y:r+l})),C(d,W)}),H("ortho",function(e,h,F){var o=new Q,z=e.s(u),A=e.s("edge.ortho"),$=e._40I,k=e._41I,c=i(F,e),K=c.x,V=c.y,J=O(F,e),I=J.x,a=J.y,j=I-K,R=a-V,Z=z?0:w(F,$)/2,f=z?0:D(F,$)/2,y=z?0:w(F,k)/2,X=z?0:D(F,k)/2,s=(j-(Z+y)*(j>0?1:-1))*A,n=(R-(f+X)*(R>0?1:-1))*A;return q(j)<q(R)?j>=0&&0>=R?(o.add({x:K+h,y:V-f}),o.add({x:K+h,y:V+n+h-f}),o.add({x:I+h,y:V+n+h-f}),o.add({x:I+h,y:a+X})):0>=j&&R>=0?(o.add({x:K+h,y:V+f}),o.add({x:K+h,y:V+n+h+f}),o.add({x:I+h,y:V+n+h+f}),o.add({x:I+h,y:a-X})):j>=0&&R>=0?(o.add({x:K+h,y:V+f}),o.add({x:K+h,y:V+n-h+f}),o.add({x:I+h,y:V+n-h+f}),o.add({x:I+h,y:a-X})):(o.add({x:K+h,y:V-f}),o.add({x:K+h,y:V+n-h-f}),o.add({x:I+h,y:V+n-h-f}),o.add({x:I+h,y:a+X})):j>=0&&0>=R?(o.add({x:K+Z,y:V+h}),o.add({x:K+s+h+Z,y:V+h}),o.add({x:K+s+h+Z,y:a+h}),o.add({x:I-y,y:a+h})):0>=j&&R>=0?(o.add({x:K-Z,y:V+h}),o.add({x:K+s+h-Z,y:V+h}),o.add({x:K+s+h-Z,y:a+h}),o.add({x:I+y,y:a+h})):j>=0&&R>=0?(o.add({x:K+Z,y:V+h}),o.add({x:K+s-h+Z,y:V+h}),o.add({x:K+s-h+Z,y:a+h}),o.add({x:I-y,y:a+h})):(o.add({x:K-Z,y:V+h}),o.add({x:K+s-h-Z,y:V+h}),o.add({x:K+s-h-Z,y:a+h}),o.add({x:I+y,y:a+h})),C(o,e)}),H("flex",function(M,c,N){var Z=new Q,s=M.s("edge.flex")+P(M,N),l=M.s(u),L=M._40I,R=M._41I,$=i(N,M),p=$.x,x=$.y,G=O(N,M),z=G.x,K=G.y,F=z-p,_=K-x,o=l?0:w(N,L)/2,H=l?0:D(N,L)/2,j=l?0:w(N,R)/2,E=l?0:D(N,R)/2,m=F>0?s:-s,f=_>0?s:-s;return q(F)<q(_)?F>=0&&0>=_?(Z.add({x:p+c,y:x-H}),Z.add({x:p+c,y:x+f+c-H}),Z.add({x:z+c,y:K-f+c+E}),Z.add({x:z+c,y:K+E})):0>=F&&_>=0?(Z.add({x:p+c,y:x+H}),Z.add({x:p+c,y:x+f+c+H}),Z.add({x:z+c,y:K-f+c-E}),Z.add({x:z+c,y:K-E})):F>=0&&_>=0?(Z.add({x:p+c,y:x+H}),Z.add({x:p+c,y:x+f-c+H}),Z.add({x:z+c,y:K-f-c-E}),Z.add({x:z+c,y:K-E})):(Z.add({x:p+c,y:x-H}),Z.add({x:p+c,y:x+f-c-H}),Z.add({x:z+c,y:K-f-c+E}),Z.add({x:z+c,y:K+E})):F>=0&&0>=_?(Z.add({x:p+o,y:x+c}),Z.add({x:p+m+c+o,y:x+c}),Z.add({x:z-m+c-j,y:K+c}),Z.add({x:z-j,y:K+c})):0>=F&&_>=0?(Z.add({x:p-o,y:x+c}),Z.add({x:p+m+c-o,y:x+c}),Z.add({x:z-m+c+j,y:K+c}),Z.add({x:z+j,y:K+c})):F>=0&&_>=0?(Z.add({x:p+o,y:x+c}),Z.add({x:p+m-c+o,y:x+c}),Z.add({x:z-m-c-j,y:K+c}),Z.add({x:z-j,y:K+c})):(Z.add({x:p-o,y:x+c}),Z.add({x:p+m-c-o,y:x+c}),Z.add({x:z-m-c+j,y:K+c}),Z.add({x:z+j,y:K+c})),C(Z,M)}),H("extend.east",function($,r,K){var e=new Q,v=$.s(B)+P($,K),p=$.s(u),y=i(K,$),Z=y.x+(p?0:w(K,$._40I)/2),M=y.y,R=O(K,$),X=R.x+(p?0:w(K,$._41I)/2),U=R.y,g=A(Z,X)+v;return M>U?(e.add({x:Z,y:M+r}),e.add({x:g+r,y:M+r}),e.add({x:g+r,y:U-r}),e.add({x:X,y:U-r})):(e.add({x:Z,y:M-r}),e.add({x:g+r,y:M-r}),e.add({x:g+r,y:U+r}),e.add({x:X,y:U+r})),C(e,$)}),H("extend.west",function(Z,N,L){var q=new Q,h=Z.s(B)+P(Z,L),T=Z.s(u),M=i(L,Z),G=M.x-(T?0:w(L,Z._40I)/2),J=M.y,V=O(L,Z),e=V.x-(T?0:w(L,Z._41I)/2),R=V.y,v=U(G,e)-h;return J>R?(q.add({x:G,y:J+N}),q.add({x:v-N,y:J+N}),q.add({x:v-N,y:R-N}),q.add({x:e,y:R-N})):(q.add({x:G,y:J-N}),q.add({x:v-N,y:J-N}),q.add({x:v-N,y:R+N}),q.add({x:e,y:R+N})),C(q,Z)}),H("extend.north",function(I,Y,W){var l=new Q,g=I.s(B)+P(I,W),L=I.s(u),S=i(W,I),k=S.x,q=S.y-(L?0:D(W,I._40I)/2),$=O(W,I),f=$.x,v=$.y-(L?0:D(W,I._41I)/2),s=U(q,v)-g;return k>f?(l.add({y:q,x:k+Y}),l.add({y:s-Y,x:k+Y}),l.add({y:s-Y,x:f-Y}),l.add({y:v,x:f-Y})):(l.add({y:q,x:k-Y}),l.add({y:s-Y,x:k-Y}),l.add({y:s-Y,x:f+Y}),l.add({y:v,x:f+Y})),C(l,I)}),H("extend.south",function($,g,o){var z=new Q,f=$.s(B)+P($,o),m=$.s(u),x=i(o,$),b=x.x,v=x.y+(m?0:D(o,$._40I)/2),T=O(o,$),j=T.x,W=T.y+(m?0:D(o,$._41I)/2),H=A(v,W)+f;return b>j?(z.add({y:v,x:b+g}),z.add({y:H+g,x:b+g}),z.add({y:H+g,x:j-g}),z.add({y:W,x:j-g})):(z.add({y:v,x:b-g}),z.add({y:H+g,x:b-g}),z.add({y:H+g,x:j+g}),z.add({y:W,x:j+g})),C(z,$)});var a=function(Y,q,y,x,t){if(x.sort(function(C,B){var U=C.getSourceAgent()===q?C.getTargetAgent():C.getSourceAgent(),O=B.getSourceAgent()===q?B.getTargetAgent():B.getSourceAgent(),s=U.p(),M=O.p();if(y===W||y===Z){if(s.y>M.y)return 1;if(s.y<M.y)return-1}else{if(s.x>M.x)return 1;if(s.x<M.x)return-1}return e.sortFunc(C.getId(),B.getId())}),t){for(var r,B,P,K=Y.getSourceAgent(),S=Y.getTargetAgent(),$=0;$<x.size();$++){var w=x.get($);w.getSourceAgent()===K&&w.getTargetAgent()===S||w.getTargetAgent()===K&&w.getSourceAgent()===S?(B||(B=new Q),B.add(w,0)):B?(P||(P=new Q),P.add(w)):(r||(r=new Q),r.add(w))}x.clear(),r&&x.addAll(r),B&&x.addAll(B),P&&x.addAll(P)}var b=x.indexOf(Y),c=x.size(),E=Y.s(T);return{side:y,index:b,size:c,offset:-E*(c-1)/2+E*b}},F=function(y,C,Q,x,q){var I=C.s(j);return a(C,Q,x,Q.getAgentEdges().toList(function(w){return y.isVisible(w)&&w.s(j)===I}),q)},v=function(N,m){var x=N.getSourceAgent()===m?N.getTargetAgent():N.getSourceAgent(),L=m.p(),r=x.p(),R=r.x-L.x,_=r.y-L.y;return R>0&&q(_)<=R?Z:0>R&&q(_)<=-R?W:_>0&&q(R)<=_?b:h},s=function(U,M,E){var Q=M.s(j),H=v(M,E);return a(M,E,H,E.getAgentEdges().toList(function(K){return U.isVisible(K)&&K.s(j)===Q&&v(K,E)===H}))},p=function($,U){var l=$.getSourceAgent()===U,w=l?$.getTargetAgent():$.getSourceAgent(),I=U.p(),j=w.p();return l?I.y>j.y?h:b:I.x<j.x?Z:W},y=function(s,B,N){var A=B.s(j),n=p(B,N);return a(B,N,n,N.getAgentEdges().toList(function(R){return s.isVisible(R)&&R.s(j)===A&&p(R,N)===n}),n===Z||n===b)},R=function(F,R){var O=F.getSourceAgent()===R,M=O?F.getTargetAgent():F.getSourceAgent(),L=R.p(),d=M.p();return O?L.x<d.x?Z:W:L.y>d.y?h:b},n=function(E,t,q){var i=t.s(j),w=R(t,q);return a(t,q,w,q.getAgentEdges().toList(function(h){return E.isVisible(h)&&h.s(j)===i&&R(h,q)===w}),w===Z||w===b)},f=function(n,V,F){var J=n.getSourceAgent(),L=n.getTargetAgent(),r=J.getId()>L.getId(),y=r?L:J,m=r?J:L,_=y.p(),q=m.p(),U=F(V,n,y),M=F(V,n,m),P=n.s(u),t=P?0:w(V,y)/2,i=P?0:w(V,m)/2,I=P?0:D(V,y)/2,E=P?0:D(V,m)/2,d=U.offset,B=M.offset,S=U.side,s=M.side,o=new Q;return S===h?(o.add({x:_.x+d,y:_.y-I}),o.add({x:_.x+d,y:q.y+B}),s===W?o.add({x:q.x-i,y:q.y+B}):o.add({x:q.x+i,y:q.y+B})):S===b?(o.add({x:_.x+d,y:_.y+I}),o.add({x:_.x+d,y:q.y+B}),s===W?o.add({x:q.x-i,y:q.y+B}):o.add({x:q.x+i,y:q.y+B})):S===W?(o.add({x:_.x-t,y:_.y+d}),o.add({x:q.x+B,y:_.y+d}),s===b?o.add({x:q.x+B,y:q.y+E}):o.add({x:q.x+B,y:q.y-E})):S===Z&&(o.add({x:_.x+t,y:_.y+d}),o.add({x:q.x+B,y:_.y+d}),s===b?o.add({x:q.x+B,y:q.y+E}):o.add({x:q.x+B,y:q.y-E})),r&&o.reverse(),C(o,n)};H("ortho2",function(N,P,l){var S,t,v=N.s(u),g=N.s("edge.ortho"),a=N.getSourceAgent(),p=N.getTargetAgent(),O=a.getId()>p.getId(),q=O?p:a,L=O?a:p,o=q.p(),$=L.p(),J=s(l,N,q),i=s(l,N,L),G=v?0:w(l,q)/2,X=v?0:D(l,q)/2,x=v?0:w(l,L)/2,Y=v?0:D(l,L)/2,r=new Q,B=J.offset,A=i.offset,e=J.side;return e===Z?(S=$.y>o.y?-B:B,t=o.x+G+($.x-x-o.x-G)*g,r.add({x:o.x+G,y:o.y+B}),r.add({x:t+S,y:o.y+B}),r.add({x:t+S,y:$.y+A}),r.add({x:$.x-x,y:$.y+A})):e===W?(S=$.y>o.y?-B:B,t=o.x-G-(o.x-G-$.x-x)*g,r.add({x:o.x-G,y:o.y+B}),r.add({x:t-S,y:o.y+B}),r.add({x:t-S,y:$.y+A}),r.add({x:$.x+x,y:$.y+A})):e===b?(S=$.x>o.x?-B:B,t=o.y+X+($.y-Y-o.y-X)*g,r.add({x:o.x+B,y:o.y+X}),r.add({x:o.x+B,y:t+S}),r.add({x:$.x+A,y:t+S}),r.add({x:$.x+A,y:$.y-Y})):e===h&&(S=$.x>o.x?-B:B,t=o.y-X-(o.y-X-$.y-Y)*g,r.add({x:o.x+B,y:o.y-X}),r.add({x:o.x+B,y:t-S}),r.add({x:$.x+A,y:t-S}),r.add({x:$.x+A,y:$.y+Y})),O&&r.reverse(),C(r,N)},!0),H("flex2",function(J,e,y){var R,B=J.getSourceAgent(),d=J.getTargetAgent(),_=B.getId()>d.getId(),P=_?d:B,V=_?B:d,Y=P.p(),L=V.p(),r=s(y,J,P),S=s(y,J,V),U=J.s(u),G=J.s("edge.flex")+(r.size-1)/2*J.s(T),x=U?0:w(y,P)/2,i=U?0:D(y,P)/2,H=U?0:w(y,V)/2,v=U?0:D(y,V)/2,I=new Q,E=r.offset,q=S.offset,j=r.side;return j===Z?(R=L.y>Y.y?-E:E,I.add({x:Y.x+x,y:Y.y+E}),I.add({x:Y.x+x+G+R,y:Y.y+E}),I.add({x:L.x-H-G+R,y:L.y+q}),I.add({x:L.x-H,y:L.y+q})):j===W?(R=L.y>Y.y?-E:E,I.add({x:Y.x-x,y:Y.y+E}),I.add({x:Y.x-x-G-R,y:Y.y+E}),I.add({x:L.x+H+G-R,y:L.y+q}),I.add({x:L.x+H,y:L.y+q})):j===b?(R=L.x>Y.x?-E:E,I.add({x:Y.x+E,y:Y.y+i}),I.add({x:Y.x+E,y:Y.y+i+G+R}),I.add({x:L.x+q,y:L.y-v-G+R}),I.add({x:L.x+q,y:L.y-v})):j===h&&(R=L.x>Y.x?-E:E,I.add({x:Y.x+E,y:Y.y-i}),I.add({x:Y.x+E,y:Y.y-i-G-R}),I.add({x:L.x+q,y:L.y+v+G-R}),I.add({x:L.x+q,y:L.y+v})),_&&I.reverse(),C(I,J)},!0),H("extend.north2",function(w,G,v){var e=w.getSourceAgent(),W=w.getTargetAgent(),f=e.getId()>W.getId(),b=f?W:e,o=f?e:W,I=b.p(),N=o.p(),i=F(v,w,b,h),V=F(v,w,o,h,!0),x=w.s(u),H=x?0:D(v,b)/2,E=x?0:D(v,o)/2,z=i.offset,r=V.offset,R=w.s(B)+(i.size-1)/2*w.s(T),g=U(I.y-H,N.y-E)-R+(I.x<N.x?z:-z),n=new Q;return n.add({x:I.x+z,y:I.y-H}),n.add({x:I.x+z,y:g}),n.add({x:N.x+r,y:g}),n.add({x:N.x+r,y:N.y-E}),f&&n.reverse(),C(n,w)},!0),H("extend.south2",function(y,x,W){var I=y.getSourceAgent(),e=y.getTargetAgent(),$=I.getId()>e.getId(),V=$?e:I,g=$?I:e,Z=V.p(),q=g.p(),l=F(W,y,V,b),H=F(W,y,g,b,!0),m=y.s(u),M=m?0:D(W,V)/2,Y=m?0:D(W,g)/2,E=l.offset,p=H.offset,a=y.s(B)+(l.size-1)/2*y.s(T),U=A(Z.y+M,q.y+Y)+a+(Z.x>q.x?E:-E),j=new Q;return j.add({x:Z.x+E,y:Z.y+M}),j.add({x:Z.x+E,y:U}),j.add({x:q.x+p,y:U}),j.add({x:q.x+p,y:q.y+Y}),$&&j.reverse(),C(j,y)},!0),H("extend.west2",function(m,r,G){var Y=m.getSourceAgent(),d=m.getTargetAgent(),j=Y.getId()>d.getId(),p=j?d:Y,S=j?Y:d,n=p.p(),P=S.p(),X=F(G,m,p,h),x=F(G,m,S,h,!0),l=m.s(u),L=l?0:w(G,p)/2,A=l?0:w(G,S)/2,b=X.offset,Z=x.offset,k=m.s(B)+(X.size-1)/2*m.s(T),z=U(n.x-L,P.x-A)-k+(n.y<P.y?b:-b),J=new Q;return J.add({x:n.x-L,y:n.y+b}),J.add({x:z,y:n.y+b}),J.add({x:z,y:P.y+Z}),J.add({x:P.x-A,y:P.y+Z}),j&&J.reverse(),C(J,m)},!0),H("extend.east2",function(P,O,m){var E=P.getSourceAgent(),U=P.getTargetAgent(),x=E.getId()>U.getId(),H=x?U:E,S=x?E:U,D=H.p(),p=S.p(),v=F(m,P,H,h),Z=F(m,P,S,h,!0),r=P.s(u),_=r?0:w(m,H)/2,V=r?0:w(m,S)/2,Y=v.offset,k=Z.offset,M=P.s(B)+(v.size-1)/2*P.s(T),$=A(D.x+_,p.x+V)+M+(D.y>p.y?Y:-Y),i=new Q;return i.add({x:D.x+_,y:D.y+Y}),i.add({x:$,y:D.y+Y}),i.add({x:$,y:p.y+k}),i.add({x:p.x+V,y:p.y+k}),x&&i.reverse(),C(i,P)},!0),H("v.h2",function(S,v,O){return f(S,O,y)},!0),H("h.v2",function(k,U,R){return f(k,R,n)},!0)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:this,Object);