(this["webpackJsonpslidr-demo"]=this["webpackJsonpslidr-demo"]||[]).push([[0],{10:function(e,a,t){e.exports={slider:"styles-hor_slider__v6Ig2",rail:"styles-hor_rail__fVKPY",thumb:"styles-hor_thumb__2T3yt",thumb__tooltip:"styles-hor_thumb__tooltip__1zeDJ",progress:"styles-hor_progress__2eJza",scale:"styles-hor_scale__339vY",scale__wrapper:"styles-hor_scale__wrapper__1wpm3",scale__division:"styles-hor_scale__division__1WoHE",scale__subdivision:"styles-hor_scale__subdivision__1Olej",scale__values:"styles-hor_scale__values__1R5Av",scale__valuesItem:"styles-hor_scale__valuesItem__1hUy1"}},13:function(e,a,t){e.exports={slider:"styles-ver_slider__GFitD",rail:"styles-ver_rail__D9cTf",thumb:"styles-ver_thumb__1yzdH",thumb__tooltip:"styles-ver_thumb__tooltip__3EdW-",progress:"styles-ver_progress__3qSq0",scale:"styles-ver_scale__3GZz1",scale__wrapper:"styles-ver_scale__wrapper__-DEtc",scale__division:"styles-ver_scale__division__gZB06",scale__subdivision:"styles-ver_scale__subdivision__2R4R-",scale__values:"styles-ver_scale__values__3UV3P",scale__valuesItem:"styles-ver_scale__valuesItem__2u3Bf"}},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var l=t(1),s=t(0),n=t.n(s),c=t(5),r=t.n(c),u=t(4),i=t(3),o=t(11),m={minValue:0,maxValue:1,valueFrom:0,valueTo:1,stepSize:1,isRange:!1,isTooltip:!1,isScale:!1,isVertical:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0,t=Object(i.a)({},e);switch(a.type){case"isRange":return t.isRange=a.value,a.value&&(t.valueTo>t.maxValue&&(t.valueTo=t.maxValue),t.valueTo<t.valueFrom&&(t.valueTo=t.valueFrom)),t;case"isTooltip":return t.isTooltip=a.value,t;case"isScale":return t.isScale=a.value,t;case"isVertical":return t.isVertical=a.value,t;case"minValue":var l=a.value;if(l<t.valueFrom){var s=Math.round((t.valueFrom-l)/t.stepSize)*t.stepSize;t.minValue=t.valueFrom-s}else t.minValue=t.valueFrom;return t.minValue===t.maxValue&&(t.minValue-=t.stepSize),t;case"stepSize":var n=a.value,c=Math.abs(t.maxValue-t.minValue);if(c%(n=Math.abs(Math.round(n)))!==0)for(;c%n!==0;)if((n-=1)<=0)return t.stepSize=1,t;return t.stepSize=n<c&&n>0?Math.round(n):n>=c?c:1,t.valueFrom>t.minValue?(t.valueFrom=Math.round((t.valueFrom-t.minValue)/t.stepSize),t.valueFrom=t.valueFrom*t.stepSize+t.minValue):t.valueFrom=t.minValue,t.isRange&&(t.valueTo>t.valueFrom?(t.valueTo=Math.round((t.valueTo-t.minValue)/t.stepSize),t.valueTo=t.valueTo*t.stepSize+t.minValue):t.valueTo=t.valueFrom),t;case"maxValue":var r=a.value;return t.isRange&&r<=t.valueTo?t.maxValue=t.valueTo:r<=t.valueFrom?t.maxValue=t.valueFrom:(t.maxValue=Math.round((r-t.minValue)/t.stepSize),t.maxValue=t.maxValue*t.stepSize+t.minValue),t.maxValue===t.minValue&&(t.maxValue+=t.stepSize),t;case"valueFrom":var u=a.value;return u<=t.minValue?t.valueFrom=t.minValue:t.isRange&&u>=t.valueTo?t.valueFrom=t.valueTo:u>=t.maxValue?t.valueFrom=t.maxValue:(t.valueFrom=Math.round((u-t.minValue)/t.stepSize),t.valueFrom=t.valueFrom*t.stepSize+t.minValue),t;case"valueTo":var o=a.value;return t.isRange&&(o>t.valueFrom&&o<t.maxValue?(t.valueTo=Math.round((o-t.valueFrom)/t.stepSize),t.valueTo=t.valueTo*t.stepSize+t.valueFrom):o>=t.maxValue?t.valueTo=t.maxValue:t.valueTo=t.valueFrom),t;default:return e}},v={rangeSlider:[{minValue:-80,maxValue:245,valueFrom:10,valueTo:90,stepSize:5,isRange:!0,isTooltip:!0,isScale:!0,isVertical:!1},Object(i.a)(Object(i.a)({},m),{},{valueFrom:10,valueTo:90,isVertical:!0,maxValue:100}),Object(i.a)(Object(i.a)({},m),{},{isTooltip:!0,isScale:!0,isRange:!0,maxValue:10}),Object(i.a)({},m)]},j=Object(o.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0,t=Object(i.a)({},e);switch(a.type){case"rangeSlider":return t.rangeSlider[a.id]=_(t.rangeSlider[a.id],a.value),t;default:return e}}),v);function b(e,a){return a.map((function(a){return Object(u.c)((function(t){return t.rangeSlider[e][a]}))}))}var d=function(e,a){var t=Object(u.b)();return a.map((function(a){return function(l){return t({type:"rangeSlider",id:e,value:{type:a,value:l}})}}))},p=t(2),h=t(10),O=t.n(h),x=t(13),g=t.n(x),V=Object(s.createContext)(O.a),f=function(e){var a=e.thumbFor,t=Object(s.useContext)(V),n=Object(p.a)(t,2),c=n[0],r=n[1],u=b(r,["minValue","maxValue",a]),i=Object(p.a)(u,3),o=i[0],m=i[1],_=i[2],v=b(r,["isVertical","isTooltip"]),j=Object(p.a)(v,2),h=j[0],O=j[1],x=d(r,[a]),g=Object(p.a)(x,1)[0],f=(m-o)/100,S=(_-o)/f,N={left:h?"0":"".concat(S,"%"),top:h?"".concat(S,"%"):"0"},y=Object(s.useRef)(null),F=function e(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",e)},T=function(e){var a=y.current?y.current.parentElement:null;if(a){var t=a.getBoundingClientRect(),l=h?e.clientY:e.clientX,s=h?t.top:t.left,n=h?t.height:t.width;g((l-s)/(n/100)*f+o)}};return Object(l.jsx)("div",{onMouseDown:function(e){e.preventDefault(),document.addEventListener("mousemove",T),document.addEventListener("mouseup",F)},style:N,ref:y,className:c.thumb,children:O?Object(l.jsx)("div",{className:c.thumb__tooltip,children:_}):null})},S=function(){var e=Object(s.useContext)(V),a=Object(p.a)(e,2),t=a[0],n=a[1],c=b(n,["minValue","maxValue","valueFrom","valueTo"]),r=Object(p.a)(c,4),u=r[0],i=r[1],o=r[2],m=r[3],_=b(n,["isVertical","isRange"]),v=Object(p.a)(_,2),j=v[0],d=v[1],h=(i-u)/100,O=(o-u)/h,x=(m-u)/h,g={left:j?"0":"".concat(O,"%"),right:j||!d?"0":"".concat(100-x,"%"),top:j?"".concat(O,"%"):"0",bottom:j&&d?"".concat(100-x,"%"):"0"};return Object(l.jsxs)("div",{className:t.rail,children:[Object(l.jsx)(f,{thumbFor:"valueFrom"}),d?Object(l.jsx)(f,{thumbFor:"valueTo"}):null,Object(l.jsx)("div",{className:t.progress,style:g})]})},N=function(){var e=Object(s.useContext)(V),a=Object(p.a)(e,2),t=a[0],n=a[1],c=b(n,["minValue","maxValue"]),r=Object(p.a)(c,2),u=r[0],i=r[1],o=b(n,["isVertical","isRange"]),m=Object(p.a)(o,2),_=m[0],v=m[1],j=d(n,["valueFrom","valueTo"]),h=Object(p.a)(j,2),O=h[0],x=h[1],g=Object(l.jsx)("span",{className:t.scale__subdivision}),f=Object(l.jsxs)("div",{className:t.scale__division,children:[g,g,g,g,g]}),S=Object(s.useState)(!0),N=Object(p.a)(S,2),y=N[0],F=N[1],T=(i-u)/100;return Object(l.jsxs)("div",{className:t.scale,onMouseDown:function(e){var a=e.currentTarget.getBoundingClientRect(),t=(_?(e.clientY-a.top)/(a.height/100):(e.clientX-a.left)/(a.width/100))*T+u;v?(y?O(t):x(t),F(!y)):(O(t),F(!0))},children:[Object(l.jsxs)("div",{className:t.scale__wrapper,children:[f,f,f]}),Object(l.jsxs)("div",{className:t.scale__values,children:[Object(l.jsx)("span",{className:t.scale__valuesItem,children:u}),Object(l.jsx)("span",{className:t.scale__valuesItem,children:(u+(i-u)/3).toFixed()}),Object(l.jsx)("span",{className:t.scale__valuesItem,children:(u+(i-u)/3*2).toFixed()}),Object(l.jsx)("span",{className:t.scale__valuesItem,children:i})]})]})},y=function(e){var a=e.rangeSliderId,t=b(a,["isVertical","isScale"]),s=Object(p.a)(t,2),n=s[0],c=s[1],r=n?g.a:O.a;return Object(l.jsx)(V.Provider,{value:[r,a],children:Object(l.jsxs)("div",{className:r.slider,children:[Object(l.jsx)(S,{}),c?Object(l.jsx)(N,{}):null]})})},F=(t(25),function(e){var a=e.rangeSliderId,t=b(a,["minValue","maxValue","valueFrom","valueTo","stepSize"]),n=Object(p.a)(t,5),c=n[0],r=n[1],u=n[2],i=n[3],o=n[4],m=b(a,["isRange","isTooltip","isScale","isVertical"]),_=Object(p.a)(m,4),v=_[0],j=_[1],h=_[2],O=_[3],x=d(a,["minValue","maxValue","valueFrom","valueTo","stepSize","isRange","isTooltip","isScale","isVertical"]),g=Object(p.a)(x,9),V=g[0],f=g[1],S=g[2],N=g[3],F=g[4],T=g[5],z=g[6],I=g[7],R=g[8],C=Object(s.useState)(c),M=Object(p.a)(C,2),k=M[0],w=M[1],B=Object(s.useState)(r),E=Object(p.a)(B,2),D=E[0],J=E[1],L=Object(s.useState)(u),P=Object(p.a)(L,2),Y=P[0],q=P[1],G=Object(s.useState)(i),H=Object(p.a)(G,2),U=H[0],W=H[1],X=Object(s.useState)(o),Z=Object(p.a)(X,2),A=Z[0],K=Z[1];return Object(s.useEffect)((function(){w(c),J(r),q(u),W(i),K(o)}),[c,r,u,i,o]),Object(l.jsxs)("form",{className:"control",children:[Object(l.jsx)("div",{className:"control__slider",children:Object(s.useMemo)((function(){return Object(l.jsx)(y,{rangeSliderId:a})}),[a])}),Object(l.jsxs)("fieldset",{className:"control__panel",children:[Object(l.jsx)("legend",{children:"Control Panel"}),Object(l.jsxs)("label",{className:"control__panel-item",children:[Object(l.jsx)("input",{className:"control__min-value",type:"number",value:k,onChange:function(e){w(Number(e.target.value))},onBlur:function(){V(k),w(c)}}),"Min value"]}),Object(l.jsxs)("label",{className:"control__panel-item",children:[Object(l.jsx)("input",{className:"control__max-value",type:"number",value:D,onChange:function(e){return J(Number(e.target.value))},onBlur:function(){f(D),J(r)}}),"Max value"]}),Object(l.jsxs)("label",{className:"control__panel-item",children:[Object(l.jsx)("input",{className:"control__value-from",type:"number",value:Y,onChange:function(e){return q(Number(e.target.value))},onBlur:function(){S(Y),q(u)}}),"Value from"]}),Object(l.jsxs)("label",{className:"control__panel-item",children:[Object(l.jsx)("input",{className:"control__value-to",type:"number",value:U,onChange:function(e){return W(Number(e.target.value))},onBlur:function(){N(U),W(i)}}),"Value to"]}),Object(l.jsxs)("label",{className:"control__panel-item",children:[Object(l.jsx)("input",{className:"control__step-size",type:"number",value:A,onChange:function(e){return K(Number(e.target.value))},onBlur:function(){F(A),K(o)}}),"Step size"]}),Object(l.jsxs)("label",{className:"control__panel-item",children:[Object(l.jsx)("input",{className:"control__is-vertical",type:"checkbox",checked:O,onChange:function(e){return R(Boolean(e.target.checked))}}),"Is vertical"]}),Object(l.jsxs)("label",{className:"control__panel-item",children:[Object(l.jsx)("input",{className:"control__is-range",type:"checkbox",checked:v,onChange:function(e){return T(Boolean(e.target.checked))}}),"Is range"]}),Object(l.jsxs)("label",{className:"control__panel-item",children:[Object(l.jsx)("input",{className:"control__is-tooltip",type:"checkbox",checked:j,onChange:function(e){return z(Boolean(e.target.checked))}}),"Is tooltip"]}),Object(l.jsxs)("label",{className:"control__panel-item",children:[Object(l.jsx)("input",{className:"control__is-scale",type:"checkbox",checked:h,onChange:function(e){return I(Boolean(e.target.checked))}}),"Is scale"]}),Object(l.jsxs)("label",{className:"control__panel-item",children:[Object(l.jsx)("span",{className:"control__range",children:v?U-Y:Y}),"Range"]})]})]})});t(26);r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsxs)(u.a,{store:j,children:[Object(l.jsx)(F,{rangeSliderId:0}),Object(l.jsx)(F,{rangeSliderId:1}),Object(l.jsx)(F,{rangeSliderId:2}),Object(l.jsx)(F,{rangeSliderId:3})]})}),document.querySelector(".app-main"))}},[[27,1,2]]]);
//# sourceMappingURL=main.9a56d223.chunk.js.map