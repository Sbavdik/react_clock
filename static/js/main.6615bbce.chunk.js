(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=(n(12),n(0)),m=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={currentTime:new Date,timerId:0},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.setInterval((function(){e.setState({currentTime:new Date}),console.info(e.state.currentTime.toUTCString().slice(-12,-4))}),1e3);this.setState({timerId:t})}},{key:"componentDidUpdate",value:function(e){var t=this.props.clockName,n=e.clockName;t!==n&&console.debug("Renamed from ".concat(n," to ").concat(t))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.state.timerId)}},{key:"render",value:function(){var e=this.props.clockName,t=this.state.currentTime;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:t.toUTCString().slice(-12,-4)})]})}}]),n}(l.Component);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0",timerId:0},e.handleRightClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleLeftClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.setInterval((function(){e.setState({clockName:d()})}),3300);this.setState({timerId:t}),document.addEventListener("click",this.handleLeftClick),document.addEventListener("contextmenu",this.handleRightClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.state.timerId),document.removeEventListener("click",this.handleLeftClick),document.removeEventListener("contextmenu",this.handleRightClick)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(m,{clockName:n})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6615bbce.chunk.js.map