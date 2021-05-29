(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{28:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var r,c=n(1),i=n.n(c),u=n(12),o=n.n(u),a=(n(44),n(45),n(5)),s=n(8),l=n(24),d=n(26),j=n(7),b=50,f=function(t){var e=Object(d.a)(t),n=e[0],r=e[1],c=e[2],i=e.slice(3);return[].concat(Object(l.a)(i),[n,r,c])},v=function(t){var e=Object(d.a)(t),n=e[0],r=e.slice(1);return[].concat(Object(l.a)(r),[n])},O=function(){var t=Object(j.shuffle)(Object(j.range)(1,10)),e=f(t),n=f(e),r=v(n),c=f(r),i=f(c),u=v(i),o=f(u),a=f(o);return Object(j.flatten)(Object(j.shuffle)([[t,e,n],[r,c,i],[u,o,a]])).map((function(t){return t.map((function(t){return{value:t,isEditable:!0}}))}))},h=function(){return function(t){for(var e=t.map((function(t){return Object(l.a)(t.map((function(t){return{value:t.value,isEditable:!1}})))})),n=0;n<b;n+=1){var r=Object(j.random)(0,8),c=Object(j.random)(0,8);e[r][c]={value:null,isEditable:!0}}return e}(O())};!function(t){t.Incorrect="Incorrect",t.Correct="Correct"}(r||(r={}));var p=function(t,e,n){return t.slice(3*e,3*e+3).map((function(t){return t.slice(3*n,3*n+3)}))},k=function(t,e){return!t.value||1!==e.filter((function(e){return e.value===t.value})).length},m=function(t){var e=t.map((function(e,n){return e.map((function(r,c){if(!r.isEditable)return r;if(!r.value)return Object(a.a)(Object(a.a)({},r),{},{hasError:!0});var i=function(t,e){return t.map((function(t){return t[e]}))}(t,c),u=Object(j.flatten)(function(t,e,n){var r=Math.floor(e/3),c=Math.floor(n/3);return p(t,r,c)}(t,n,c)),o=k(r,e),s=k(r,i),l=k(r,u);return Object(a.a)(Object(a.a)({},r),{},{hasError:l||o||s})}))})),n=e.find((function(t){return t.find((function(t){return t.hasError}))}));return{board:e,result:n?r.Incorrect:r.Correct}},x=n(0),g=i.a.createContext(void 0),N=function(t){var e=t.children,n=function(){var t=Object(c.useState)(h()),e=Object(s.a)(t,2),n=e[0],r=e[1],i=Object(c.useState)(),u=Object(s.a)(i,2),o=u[0],l=u[1];return{board:n,setBoard:r,updateSquare:function(t,e,c){r(n.map((function(n,r){return r!==t?n:n.map((function(t,n){return n!==e?t:Object(a.a)(Object(a.a)({},t),{},{value:c})}))})))},reset:function(){r(h()),l(void 0)},validate:function(){var t=m(n);r(t.board),l(t.result)},result:o}}();return Object(x.jsx)(g.Provider,{value:n,children:e})},w=function(){var t=i.a.useContext(g);if(!t)throw new Error("useSudoku must be used within SudokuProvider");return t},C=n(36),y=n(4),S=n.n(y),E=(n(49),function(t){var e=t.variant,n=t.children,r=Object(C.a)(t,["variant","children"]);return Object(x.jsx)("div",Object(a.a)(Object(a.a)({className:S()("button",e)},r),{},{children:n}))}),P=(n(50),n(75)),q=n(29),I=n(30),B=new(function(){function t(){Object(q.a)(this,t)}return Object(I.a)(t,[{key:"log",value:function(){var t;(t=console).log.apply(t,arguments)}},{key:"info",value:function(){var t;(t=console).info.apply(t,arguments)}},{key:"warn",value:function(){var t;(t=console).warn.apply(t,arguments)}},{key:"error",value:function(){var t;(t=console).error.apply(t,arguments)}}]),t}()),D=(n(51),function(t){var e=t.value,n=t.onChange,r=t.placeholder,c=t.className;return Object(x.jsx)("input",{className:S()("text-input",c),onChange:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return n(t.target.value)})),value:e,placeholder:r})}),J=(n(52),function(){var t=w().setBoard,e=Object(c.useState)(!1),n=Object(s.a)(e,2),r=n[0],i=n[1],u=Object(c.useState)(""),o=Object(s.a)(u,2),a=o[0],l=o[1];return Object(x.jsxs)("div",{className:"sudoku-input",children:[Object(x.jsx)(E,{variant:"button-outlined",onClick:function(){return i(!r)},children:"Start a custom game"}),Object(x.jsxs)("div",{className:S()("sudoku-input-area",{"sudoku-input-area-active":r}),children:[Object(x.jsx)(D,{value:a,onChange:l,placeholder:'"[1,null,5,..],[3,...],...]"'}),Object(x.jsx)("i",{onClick:function(){var e=function(t){try{var e=JSON.parse(t.replace(/[\s"]/g,""));return e instanceof Array&&e[0]instanceof Array?9!==e.length||e.find((function(t){return 9!==t.length}))?void B.warn("Received input array is not of correct shape",e,t):e.find((function(t){return t.find((function(t){return t&&"number"!==typeof t}))}))?void B.warn("Received input has illegal values",e,t):e.map((function(t){return t.map((function(t){return{value:t,isEditable:!t}}))})):void B.warn("Received input is not a correct array",e,t)}catch(n){return void B.warn("Couldn't parse input to sudoku board",n,t)}}(a);e&&t(e)},children:Object(x.jsx)(P.a,{children:"done"})}),Object(x.jsx)("i",{onClick:function(){l(""),i(!1)},children:Object(x.jsx)(P.a,{children:"close"})})]})]})}),M=(n(57),function(t){var e=t.result;return Object(x.jsx)("div",{className:S()("sudoku-result",{"sudoku-result-showing":void 0!==e,"sudoku-result-danger":e===r.Incorrect,"sudoku-result-success":e===r.Correct}),children:e&&(e===r.Correct?Object(x.jsx)("p",{children:"Leapin' lizards! Sudoku is correct"}):Object(x.jsx)("p",{children:"Son of a biscuit! Something's wrong"}))})}),R=function(){var t=w(),e=t.reset,n=t.validate,r=t.result;return Object(x.jsxs)("div",{className:"actions",children:[Object(x.jsx)(J,{}),Object(x.jsxs)("div",{className:"actions-buttons",children:[Object(x.jsx)(E,{variant:"button-normal",onClick:e,children:"New game"}),Object(x.jsx)(E,{variant:"button-outlined",onClick:n,children:"Check solution"})]}),Object(x.jsx)(M,{result:r})]})},A=n(76),V=(n(58),function(t){var e=t.onPicked,n=function(t){return Object(x.jsx)("div",{className:"digit-picker-btn",onClick:function(){e(t)},children:t})};return Object(x.jsxs)("div",{className:"digit-picker",children:[Object(x.jsxs)("div",{className:"digit-picker-row",children:[n(1),n(2),n(3)]}),Object(x.jsxs)("div",{className:"digit-picker-row",children:[n(4),n(5),n(6)]}),Object(x.jsxs)("div",{className:"digit-picker-row",children:[n(7),n(8),n(9)]}),Object(x.jsx)("div",{className:"digit-picker-clear-btn",onClick:function(){return e(null)},children:"Clear"})]})}),z=(n(28),function(t){var e=t.digit,n=t.position,r=t.onDigitPicked,i=Object(c.useState)(),u=Object(s.a)(i,2),o=u[0],a=u[1],l=function(t){a(void 0),r(t)};return Object(x.jsxs)("button",{type:"button",onBlur:function(){return a(!1)},onFocus:function(){return a(!0)},onClick:void 0===o?function(){return a(!0)}:void 0,className:S()("sudoku-digit","sudoku-digit-editable",n,{"sudoku-digit-error":e.hasError}),children:[o&&Object(x.jsx)(A.a,{in:!0,timeout:250,children:Object(x.jsx)("div",{className:"sudoku-digit-picker",children:Object(x.jsx)(V,{onPicked:l})})}),Object(x.jsx)("p",{children:e.value})]})}),F=function(t){var e=t.digit,n=t.position;return Object(x.jsx)("button",{type:"button",className:S()("sudoku-digit",n),children:Object(x.jsx)("p",{children:e.value})})},L=(n(59),function(t){var e=t.sudokuValues,n=t.onDigitPicked,r=function(t,r,c){var i=e[t][r];return i.isEditable?Object(x.jsx)(z,{digit:e[t][r],position:c,onDigitPicked:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(e){return n(t,r,e)}))}):Object(x.jsx)(F,{digit:i,position:c})};return Object(x.jsxs)("div",{className:"sudoku-square",children:[Object(x.jsxs)("div",{className:"sudoku-square-row",children:[r(0,0,"top-left"),r(0,1,"top-middle"),r(0,2,"top-right")]}),Object(x.jsxs)("div",{className:"sudoku-square-row",children:[r(1,0,"center-left"),r(1,1,"center-middle"),r(1,2,"center-right")]}),Object(x.jsxs)("div",{className:"sudoku-square-row",children:[r(2,0,"bottom-left"),r(2,1,"bottom-middle"),r(2,2,"bottom-right")]})]})}),G=(n(60),function(){var t=w(),e=t.board,n=t.updateSquare,r=function(t,r){var c=p(e,t,r);return Object(x.jsx)(L,{sudokuValues:c,onDigitPicked:function(e,c,i){return n(3*t+e,3*r+c,i)}})};return Object(x.jsxs)("div",{className:"sudoku",children:[Object(x.jsxs)("div",{className:"sudoku-row",children:[r(0,0),r(0,1),r(0,2)]}),Object(x.jsxs)("div",{className:"sudoku-row",children:[r(1,0),r(1,1),r(1,2)]}),Object(x.jsxs)("div",{className:"sudoku-row",children:[r(2,0),r(2,1),r(2,2)]})]})});var H=function(){return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)(N,{children:[Object(x.jsx)(G,{}),Object(x.jsx)(R,{})]})})};o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.c525707a.chunk.js.map