import{S as F,i as H,s as L,e as p,t as A,c as v,a as g,h as I,d as f,b as d,g as M,F as o,G as B,H as K,k,m as D,I as q,J as T,K as U,w as N,x as O,y as R,L as j,M as z,N as P,q as J,o as S,B as G}from"../chunks/vendor-6df9a78c.js";function Q(l){let e,r,a,n;return{c(){e=p("footer"),r=A("\xA9 2022 Joaquin Beltran | Made with "),a=p("a"),n=A("Sveltekit"),this.h()},l(s){e=v(s,"FOOTER",{class:!0});var i=g(e);r=I(i,"\xA9 2022 Joaquin Beltran | Made with "),a=v(i,"A",{href:!0,target:!0,class:!0});var _=g(a);n=I(_,"Sveltekit"),_.forEach(f),i.forEach(f),this.h()},h(){d(a,"href","https://kit.svelte.dev"),d(a,"target","_blank"),d(a,"class","text-blue-400"),d(e,"class","blue text-center py-1 border-t border-gray-300 svelte-bbuasi")},m(s,i){M(s,e,i),o(e,r),o(e,a),o(a,n)},p:B,i:B,o:B,d(s){s&&f(e)}}}class W extends F{constructor(e){super();H(this,e,null,Q,L,{})}}const X=()=>{const l=K("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},Y={subscribe(l){return X().page.subscribe(l)}};function Z(l){let e,r,a,n,s,i,_,x,b,h,m,c;return{c(){e=p("header"),r=p("a"),a=A("Joaquin Beltran"),n=k(),s=p("ul"),i=p("li"),_=p("a"),x=A("Blog"),b=k(),h=p("li"),m=p("a"),c=A("About"),this.h()},l(t){e=v(t,"HEADER",{class:!0});var u=g(e);r=v(u,"A",{href:!0,class:!0});var E=g(r);a=I(E,"Joaquin Beltran"),E.forEach(f),n=D(u),s=v(u,"UL",{class:!0});var $=g(s);i=v($,"LI",{class:!0});var w=g(i);_=v(w,"A",{href:!0});var y=g(_);x=I(y,"Blog"),y.forEach(f),w.forEach(f),b=D($),h=v($,"LI",{class:!0});var V=g(h);m=v(V,"A",{href:!0});var C=g(m);c=I(C,"About"),C.forEach(f),V.forEach(f),$.forEach(f),u.forEach(f),this.h()},h(){d(r,"href","/"),d(r,"class","text-5xl blue text-length uppercase leading-tight svelte-w7owg3"),d(_,"href","/blog"),d(i,"class","hover:text-blue-400 svelte-w7owg3"),q(i,"active",l[0].url.pathname==="/blog"),d(m,"href","/about"),d(h,"class","hover:text-blue-400 svelte-w7owg3"),q(h,"active",l[0].url.pathname==="/about"),d(s,"class","flex flex-col space-y-2 pt-8 text-2xl font-extralight blue svelte-w7owg3"),d(e,"class","w-56")},m(t,u){M(t,e,u),o(e,r),o(r,a),o(e,n),o(e,s),o(s,i),o(i,_),o(_,x),o(s,b),o(s,h),o(h,m),o(m,c)},p(t,[u]){u&1&&q(i,"active",t[0].url.pathname==="/blog"),u&1&&q(h,"active",t[0].url.pathname==="/about")},i:B,o:B,d(t){t&&f(e)}}}function ee(l,e,r){let a;return T(l,Y,n=>r(0,a=n)),[a]}class te extends F{constructor(e){super();H(this,e,ee,Z,L,{})}}function ae(l){let e,r,a,n,s,i,_,x,b,h;s=new te({});const m=l[1].default,c=U(m,l,l[0],null);return b=new W({}),{c(){e=p("div"),r=p("div"),a=p("div"),n=p("div"),N(s.$$.fragment),i=k(),_=p("main"),c&&c.c(),x=k(),N(b.$$.fragment),this.h()},l(t){e=v(t,"DIV",{class:!0});var u=g(e);r=v(u,"DIV",{class:!0});var E=g(r);a=v(E,"DIV",{class:!0});var $=g(a);n=v($,"DIV",{class:!0});var w=g(n);O(s.$$.fragment,w),w.forEach(f),i=D($),_=v($,"MAIN",{class:!0});var y=g(_);c&&c.l(y),y.forEach(f),$.forEach(f),x=D(E),O(b.$$.fragment,E),E.forEach(f),u.forEach(f),this.h()},h(){d(n,"class","border-b pb-4 md:pb-0 md:border-r md:border-b-0 border-gray-300 px-8 pt-8"),d(_,"class","pt-8 px-10 w-full"),d(a,"class","flex flex-col md:flex-row parent svelte-er6d64"),d(r,"class","selection:bg-orange-200 flex flex-col h-full"),d(e,"class","h-screen font-inter")},m(t,u){M(t,e,u),o(e,r),o(r,a),o(a,n),R(s,n,null),o(a,i),o(a,_),c&&c.m(_,null),o(r,x),R(b,r,null),h=!0},p(t,[u]){c&&c.p&&(!h||u&1)&&j(c,m,t,t[0],h?P(m,t[0],u,null):z(t[0]),null)},i(t){h||(J(s.$$.fragment,t),J(c,t),J(b.$$.fragment,t),h=!0)},o(t){S(s.$$.fragment,t),S(c,t),S(b.$$.fragment,t),h=!1},d(t){t&&f(e),G(s),c&&c.d(t),G(b)}}}function se(l,e,r){let{$$slots:a={},$$scope:n}=e;return l.$$set=s=>{"$$scope"in s&&r(0,n=s.$$scope)},[n,a]}class le extends F{constructor(e){super();H(this,e,se,ae,L,{})}}export{le as default};