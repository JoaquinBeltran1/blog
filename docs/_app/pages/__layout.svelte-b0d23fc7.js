import{S as F,i as H,s as L,e as h,t as y,c as v,a as p,h as A,d as u,b as d,g as M,F as n,G as I,H as z,k as w,m as D,I as k,J as P,K as Q,w as G,x as K,y as T,L as W,M as X,N as Y,q as J,o as S,B as U}from"../chunks/vendor-6df9a78c.js";function Z(r){let e,a,t,l;return{c(){e=h("footer"),a=y("\xA9 2022 Joaquin Beltran | Made with "),t=h("a"),l=y("Sveltekit"),this.h()},l(o){e=v(o,"FOOTER",{class:!0});var g=p(e);a=A(g,"\xA9 2022 Joaquin Beltran | Made with "),t=v(g,"A",{href:!0,target:!0,class:!0});var i=p(t);l=A(i,"Sveltekit"),i.forEach(u),g.forEach(u),this.h()},h(){d(t,"href","https://kit.svelte.dev"),d(t,"target","_blank"),d(t,"class","text-blue-400"),d(e,"class","blue text-center py-1 svelte-bbuasi")},m(o,g){M(o,e,g),n(e,a),n(e,t),n(t,l)},p:I,i:I,o:I,d(o){o&&u(e)}}}class ee extends F{constructor(e){super();H(this,e,null,Z,L,{})}}const te=()=>{const r=z("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},ae={subscribe(r){return te().page.subscribe(r)}};function se(r){let e,a,t,l,o,g,i,_,m,c,s,f,b,E;return{c(){e=h("header"),a=h("div"),t=h("div"),l=h("a"),o=y("Joaquin Beltran"),g=w(),i=h("ul"),_=h("li"),m=h("a"),c=y("Blog"),s=w(),f=h("li"),b=h("a"),E=y("About"),this.h()},l($){e=v($,"HEADER",{});var x=p(e);a=v(x,"DIV",{class:!0});var B=p(a);t=v(B,"DIV",{class:!0});var V=p(t);l=v(V,"A",{href:!0,class:!0});var j=p(l);o=A(j,"Joaquin Beltran"),j.forEach(u),V.forEach(u),g=D(B),i=v(B,"UL",{class:!0});var q=p(i);_=v(q,"LI",{class:!0});var C=p(_);m=v(C,"A",{href:!0});var N=p(m);c=A(N,"Blog"),N.forEach(u),C.forEach(u),s=D(q),f=v(q,"LI",{class:!0});var O=p(f);b=v(O,"A",{href:!0});var R=p(b);E=A(R,"About"),R.forEach(u),O.forEach(u),q.forEach(u),B.forEach(u),x.forEach(u),this.h()},h(){d(l,"href","/"),d(l,"class","text-center text-4xl font-extralight blue hover:text-blue-400 svelte-1ooddnn"),d(t,"class","text-center"),d(m,"href","/blog"),d(_,"class","hover:text-blue-400 svelte-1ooddnn"),k(_,"active",r[0].url.pathname==="/blog"),d(b,"href","/about"),d(f,"class","hover:text-blue-400 svelte-1ooddnn"),k(f,"active",r[0].url.pathname==="/about"),d(i,"class","flex justify-center space-x-4 pt-8 text-2xl font-extralight blue svelte-1ooddnn"),d(a,"class","pt-10")},m($,x){M($,e,x),n(e,a),n(a,t),n(t,l),n(l,o),n(a,g),n(a,i),n(i,_),n(_,m),n(m,c),n(i,s),n(i,f),n(f,b),n(b,E)},p($,[x]){x&1&&k(_,"active",$[0].url.pathname==="/blog"),x&1&&k(f,"active",$[0].url.pathname==="/about")},i:I,o:I,d($){$&&u(e)}}}function re(r,e,a){let t;return P(r,ae,l=>a(0,t=l)),[t]}class le extends F{constructor(e){super();H(this,e,re,se,L,{})}}function ne(r){let e,a,t,l,o,g,i,_;t=new le({});const m=r[1].default,c=Q(m,r,r[0],null);return i=new ee({}),{c(){e=h("div"),a=h("div"),G(t.$$.fragment),l=w(),o=h("main"),c&&c.c(),g=w(),G(i.$$.fragment),this.h()},l(s){e=v(s,"DIV",{class:!0});var f=p(e);a=v(f,"DIV",{class:!0});var b=p(a);K(t.$$.fragment,b),l=D(b),o=v(b,"MAIN",{class:!0});var E=p(o);c&&c.l(E),E.forEach(u),g=D(b),K(i.$$.fragment,b),b.forEach(u),f.forEach(u),this.h()},h(){d(o,"class","flex-auto pt-32"),d(a,"class","test m-auto flex flex-col h-screen svelte-ab03u"),d(e,"class","justify-center px-4 bg selection:bg-orange-200  svelte-ab03u")},m(s,f){M(s,e,f),n(e,a),T(t,a,null),n(a,l),n(a,o),c&&c.m(o,null),n(a,g),T(i,a,null),_=!0},p(s,[f]){c&&c.p&&(!_||f&1)&&W(c,m,s,s[0],_?Y(m,s[0],f,null):X(s[0]),null)},i(s){_||(J(t.$$.fragment,s),J(c,s),J(i.$$.fragment,s),_=!0)},o(s){S(t.$$.fragment,s),S(c,s),S(i.$$.fragment,s),_=!1},d(s){s&&u(e),U(t),c&&c.d(s),U(i)}}}function oe(r,e,a){let{$$slots:t={},$$scope:l}=e;return r.$$set=o=>{"$$scope"in o&&a(0,l=o.$$scope)},[l,t]}class ce extends F{constructor(e){super();H(this,e,oe,ne,L,{})}}export{ce as default};