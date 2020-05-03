(window.webpackJsonphiric=window.webpackJsonphiric||[]).push([[10],{107:function(e,t,n){"use strict";var o=l(n(92)),r=l(n(152)),i=l(n(108)),a=l(n(150));function l(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:a.default,TransitionGroup:i.default,ReplaceTransition:r.default,CSSTransition:o.default}},108:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=l(n(7)),r=l(n(0)),i=n(119),a=n(153);function l(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},c=function(e){var t,n;function o(t,n){var o,r=(o=e.call(this,t,n)||this).handleExited.bind(s(s(o)));return o.state={handleExited:r,firstRender:!0},o}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=o.prototype;return i.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},i.componentDidMount=function(){this.appeared=!0,this.mounted=!0},i.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(e,t){var n=t.children,o=t.handleExited;return{children:t.firstRender?(0,a.getInitialChildMapping)(e,o):(0,a.getNextChildMapping)(e,n,o),firstRender:!1}},i.handleExited=function(e,t){var n=(0,a.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=u({},t.children);return delete n[e.key],{children:n}})))},i.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["component","childFactory"]),i=d(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===t?i:r.default.createElement(t,o,i)},o}(r.default.Component);c.childContextTypes={transitionGroup:o.default.object.isRequired},c.propTypes={},c.defaultProps={component:"div",childFactory:function(e){return e}};var p=(0,i.polyfill)(c);t.default=p,e.exports=t.default},152:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;a(n(7));var o=a(n(0)),r=n(16),i=a(n(108));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t,n;function a(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=a.prototype;return l.handleLifecycle=function(e,t,n){var i,a=this.props.children,l=o.default.Children.toArray(a)[t];l.props[e]&&(i=l.props)[e].apply(i,n),this.props[e]&&this.props[e]((0,r.findDOMNode)(this))},l.render=function(){var e=this.props,t=e.children,n=e.in,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","in"]),a=o.default.Children.toArray(t),l=a[0],u=a[1];return delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,o.default.createElement(i.default,r,n?o.default.cloneElement(l,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):o.default.cloneElement(u,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},a}(o.default.Component);l.propTypes={};var u=l;t.default=u,e.exports=t.default},153:function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=r,t.mergeChildMappings=i,t.getInitialChildMapping=function(e,t){return r(e.children,(function(n){return(0,o.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:a(n,"appear",e),enter:a(n,"enter",e),exit:a(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var l=r(e.children),u=i(t,l);return Object.keys(u).forEach((function(r){var i=u[r];if((0,o.isValidElement)(i)){var s=r in t,d=r in l,c=t[r],p=(0,o.isValidElement)(c)&&!c.props.in;!d||s&&!p?d||!s||p?d&&s&&(0,o.isValidElement)(c)&&(u[r]=(0,o.cloneElement)(i,{onExited:n.bind(null,i),in:c.props.in,exit:a(i,"exit",e),enter:a(i,"enter",e)})):u[r]=(0,o.cloneElement)(i,{in:!1}):u[r]=(0,o.cloneElement)(i,{onExited:n.bind(null,i),in:!0,exit:a(i,"exit",e),enter:a(i,"enter",e)})}})),u};var o=n(0);function r(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function i(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o,r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var l={};for(var u in t){if(r[u])for(o=0;o<r[u].length;o++){var s=r[u][o];l[r[u][o]]=n(s)}l[u]=n(u)}for(o=0;o<i.length;o++)l[i[o]]=n(i[o]);return l}function a(e,t,n){return null!=n[t]?n[t]:e.props[t]}},277:function(e,t,n){"use strict";var o,r,i=n(0),a=(n(7),n(107)),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=(r=o=function(e){function t(){var n,o;u(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=s(this,e.call.apply(e,[this].concat(i))),o.state={current:null,index:0,entered:!1},o.willUnmount=!1,o.trigger=function(){var e=o.props,t=e.content,n=e.startDelay,r=e.time;t.length>0&&(o.timeOut=setTimeout((function(){o.next(),o.interval=setInterval((function(){return o.next()}),r)}),n))},o.next=function(){if(!o.willUnmount){var e=o.props,t=e.content,n=(e.time,o.state.index),r=t.length||0,i=0;o.state.current&&(i=r===n+1?0:n+1);var a=t[i];o.setState({index:i}),o.setCurrent(a)}},o.setCurrent=function(e){var t=o.props,n=t.time,r=t.transitionTime;o.setState({current:e,entered:!0}),setTimeout((function(){return o.setState({entered:!1})}),n-r)},s(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.trigger()},t.prototype.componentWillUnmount=function(){clearInterval(this.interval),clearTimeout(this.timeOut),this.willUnmount=!0},t.prototype.render=function(){var e=this.props,t=e.transitionTime,n=e.content,o=this.state,r=o.current,u=o.index,s=o.entered,d=r||n&&n[0]||{},c=d.className,p=d.animation,f=void 0===p?"fade":p,h=d.text,m={"fade-default":{transition:"opacity "+{duration:t}.duration+"ms ease-in",opacity:0},"fade-entering":{opacity:0},"fade-entered":{opacity:1},"fade-exiting":{opacity:0},"fade-exited":{opacity:0}};return h?i.createElement(a.Transition,{in:s,timeout:t},(function(e){return i.createElement("span",{key:u,className:c,style:l({},m[f+"-default"],m[f+"-"+e])},h)})):i.createElement("span",null)},t}(i.Component),o.defaultProps={time:2500,startDelay:250,transitionTime:500},r);t.a=d},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n(0)),i=a(n(92));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"render",value:function(){var e=this,t={paddingBottom:this.getPadding(this.props.ratio)};return r.default.createElement(i.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?r.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},r.default.createElement("div",{className:e.props.classNames.modalVideoBody},r.default.createElement("div",{className:e.props.classNames.modalVideoInner},r.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:t},r.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),r.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(r.default.Component);t.default=l,l.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},73:function(e,t,n){}}]);
//# sourceMappingURL=10.4f28ca97.chunk.js.map