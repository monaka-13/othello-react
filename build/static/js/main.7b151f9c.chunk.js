(this.webpackJsonpothello=this.webpackJsonpothello||[]).push([[0],{12:function(e,r,n){},14:function(e,r,n){"use strict";n.r(r);var l=n(7),u=n.n(l),s=(n(12),n(2)),t=n(3),a=n(5),i=n(4),d=n(1),h=n.n(d);function c(e,r,n){for(var l=0,u=0,s=0;s<=7;s++)for(var t=0;t<7;t++){if(null===e[s][t])return null;e[s][t]!==r?u++:l++}return l>u?r:u>l?n:"draw"}var q=n(0);function o(e){return Object(q.jsx)("button",{className:"square",onClick:function(){return e.onClick()},children:e.value})}var S="\u25cb",j="\u25cf",b=[[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null]],v=function(e){Object(a.a)(n,e);var r=Object(i.a)(n);function n(e){var l;return Object(s.a)(this,n),(l=r.call(this,e)).state={squares:b,isX:!0},l.state.squares[3][3]=j,l.state.squares[3][4]=S,l.state.squares[4][3]=S,l.state.squares[4][4]=j,l}return Object(t.a)(n,[{key:"handleClick",value:function(e,r){var n=this.state.squares.slice();if(!c(n,S,j)&&!n[e][r]){var l=this.state.isX?S:j;n[e][r]=l,this.setState({squares:n,isX:!this.state.isX}),function(e,r,n){for(var l=r,u=n,s=e[r][n],t=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],a=[],i=[],d=0;d<t.length;d++){for(;;){if(r+=t[d][0],n+=t[d][1],r<0||r>7||n<0||n>7){console.log("\u67a0\u5916"),a=[];break}if(null==e[r][n]){console.log("null"),a=[];break}if(s===e[r][n]){console.log("\u5473\u65b9\u306e\u99d2");break}console.log("\u6575\u306e\u99d2"),a.push([r,n])}if(a.length>0)for(var h=0;h<a.length;h++)i.push(a[h]);r=l,n=u,a=[]}if(0===i.length)e[l][u]=null;else for(var c=0;c<i.length;c++)e[i[c][0]][i[c][1]]=s}(n,e,r)}}},{key:"renderSquare",value:function(e,r){var n=this;return Object(q.jsx)(o,{value:this.state.squares[e][r],onClick:function(){return n.handleClick(e,r)}})}},{key:"render",value:function(){var e,r=c(this.state.squares);return e=r?"draw"===r?"DRAW":"Winner: "+r:"Next player: "+(this.state.isX?S:j),Object(q.jsxs)("div",{children:[Object(q.jsx)("div",{className:"status",children:e}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(0,0),this.renderSquare(0,1),this.renderSquare(0,2),this.renderSquare(0,3),this.renderSquare(0,4),this.renderSquare(0,5),this.renderSquare(0,6),this.renderSquare(0,7)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(1,0),this.renderSquare(1,1),this.renderSquare(1,2),this.renderSquare(1,3),this.renderSquare(1,4),this.renderSquare(1,5),this.renderSquare(1,6),this.renderSquare(1,7)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(2,0),this.renderSquare(2,1),this.renderSquare(2,2),this.renderSquare(2,3),this.renderSquare(2,4),this.renderSquare(2,5),this.renderSquare(2,6),this.renderSquare(2,7)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(3,0),this.renderSquare(3,1),this.renderSquare(3,2),this.renderSquare(3,3),this.renderSquare(3,4),this.renderSquare(3,5),this.renderSquare(3,6),this.renderSquare(3,7)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(4,0),this.renderSquare(4,1),this.renderSquare(4,2),this.renderSquare(4,3),this.renderSquare(4,4),this.renderSquare(4,5),this.renderSquare(4,6),this.renderSquare(4,7)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(5,0),this.renderSquare(5,1),this.renderSquare(5,2),this.renderSquare(5,3),this.renderSquare(5,4),this.renderSquare(5,5),this.renderSquare(5,6),this.renderSquare(5,7)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(6,0),this.renderSquare(6,1),this.renderSquare(6,2),this.renderSquare(6,3),this.renderSquare(6,4),this.renderSquare(6,5),this.renderSquare(6,6),this.renderSquare(6,7)]}),Object(q.jsxs)("div",{className:"board-row",children:[this.renderSquare(7,0),this.renderSquare(7,1),this.renderSquare(7,2),this.renderSquare(7,3),this.renderSquare(7,4),this.renderSquare(7,5),this.renderSquare(7,6),this.renderSquare(7,7)]})]})}}]),n}(h.a.Component),f=function(e){Object(a.a)(n,e);var r=Object(i.a)(n);function n(){return Object(s.a)(this,n),r.apply(this,arguments)}return Object(t.a)(n,[{key:"render",value:function(){return Object(q.jsx)("div",{className:"game",children:Object(q.jsx)("div",{className:"game-board",children:Object(q.jsx)(v,{})})})}}]),n}(h.a.Component);u.a.render(Object(q.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7b151f9c.chunk.js.map