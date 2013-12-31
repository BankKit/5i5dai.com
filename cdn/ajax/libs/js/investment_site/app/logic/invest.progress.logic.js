/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: The basic business logic script file for the investment progress page (../../../../../../www/invest.progress.html).    ...//TODO: Check description.
 * 
 * Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 * 
 * Javascript Design Pattern (Code Management):
 *     
 *     Namespacing Patterns, Immediately-invoked Function Expressions (IIFE)s
 *     
 *     Modules Patterns, Object literal notation
 *     
 *     Module Patterns, Module pattern
 *     
 *     Modules Patterns, Revealing Module Pattern
 *     
 *     Modules Patterns, AMD modules
 *     
 * Docs: ...//TODO: Give a link about project documents.
 * 
 * Original Author: Shen Weizhong ( Tony Stark ).
 * 
 * Thanks: ...//TODO: If there are some contributors, just mark them.
 * 
 * Version: 0.1.0-alpha
 * 
 * Creation Date: 2013.12.30 19:40 ( Tony ).
 * 
 * Last Update: 2013.12.31 09:23 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

(function (global, document, require, console, undefined) {
	
	var fn, _AMD;
	
	fn= function (require) {
		
		var SJ, easing, modernizr, mute, tlns, extend, _mod, evtName;
		
		SJ = require('jquery');
		
		easing = require('easing');

		modernizr = require('modernizr');
			
		mute = true; //TODO: Have to cancel "console" function before release.
		
		tlns = tlns || {}; //top-level namespace

		modernizr.touch ? evtName = 'touchstart' : evtName = 'click';
		
		
		
		extend = function (ns, nsString) { // Usage, eg: var tlns = extend(tlns, "tlns.ns1.ns2.ns3");
			
			var parts = nsString.split("."),
				
				parent = ns,
				
				pl;
			
			pl = parts.length;
			
			for (var i = 0; i < pl; i++) {
				
				if (typeof parent[parts[i]] === "undefined") {
					
					parent[parts[i]] = {};
					
				}
				
				parent = parent[parts[i]];
				
			}
			
			return parent;
			
		};
		
		
		
		/**
		 * Module: Mutiple Form Interaction Details.
		 */
		
		_mod = (function () {
			
			return {
				
				init: function () {
					
					var field = SJ('.field');
					
					field.filter(':eq(1)').children('input').focus();
					
					field.on(evtName, function (e) {
						
						if (e.target.nodeName == 'DIV') {
							
							SJ(this).children('input').focus();
							
						}
						
					});
					
				}
				
			};
			
		} ()).init();
	
		
		
		/**
		 * Count Dowm Function. ( Need to be optimized. )
		 */
		
		_mod = (function () {
			
			var intervalID_1, intervalID_2, countDown;
			
			return {
				
				init: function () {
					
					function excute_1 (o) {
						
						var i = +SJ.trim(o.text());
						
						function countDown() {
							
							if (i === 0) {
								
								window.clearInterval(intervalID_1);
								
							} else {
								
								i--;
								
								o.text(i);
								
							}
							
						}
						
						intervalID_1 = window.setInterval(countDown, 1000);
						
					}
					
					function excute_2 (o) {
						
						var i = +SJ.trim(o.text());
						
						function countDown() {
							
							if (i === 0) {
								
								window.clearInterval(intervalID_2);
								
							} else {
								
								i--;
								
								o.text(i);
								
							}
							
						}
						
						intervalID_2 = window.setInterval(countDown, 1000);
						
					}
					
					excute_1(SJ('.s3p_2').children('span').first());
					
					excute_2(SJ('.s3p_2').children('span').last());

					SJ('.sec_3').children('a').on('click', function(e) {

						e.preventDefault();

						window.clearInterval(intervalID_1);

						window.clearInterval(intervalID_2);

						SJ('.s3p_2').children('span').first().text(120);

						SJ('.s3p_2').children('span').last().text(60);
						
						excute_1(SJ('.s3p_2').children('span').first());
						
						excute_2(SJ('.s3p_2').children('span').last());

					});
					
				}
				
			};
			
		} ()).init();
		
		
		
		/**
		 * Module: Navigation Animation.
		 */
		
		_mod = (function () {
			
			var nav = SJ('nav'),
				
				drogue = SJ('.drogue'),
				
				initPos = drogue.css('margin-left'),
				
				mainNavLabel = ['home', 'investProject', 'investProgress', 'aboutUs'];
			
			return {
				
				config: {
					
					speed: 600,
					
					easing: 'easeOutBounce'
					
				},
				
				animationPrototype: function (targetPos) {
					
					var _this = this;
					
					drogue.stop().animate({
						
						marginLeft: targetPos
						
					}, {
						
						duration: _this.config.speed,
						
						easing: _this.config.easing,
						
						queue: false
						
					});
					
				},
				
				onMouseEnter: function (ele) {
					
					var _this = this;
					
					ele.on('mouseenter', 'li', function (e) {
						
						var that = SJ(this),
							
							idx = that.index(),
							
							distance = idx * 140;
						
						_this.animationPrototype(distance);
						
					});
					
				},
				
				onMouseLeave: function (ele) {
					
					var _this = this;
					
					ele.on('mouseleave', function () {
						
						_this.animationPrototype(initPos);
						
					});
					
				},
				
				onClick: function (ele) {
					
					ele.on('click', 'a', function (e) {
						
						if (SJ('body').hasClass(mainNavLabel[SJ(this).parent().index()])) {
							
							e.preventDefault();
							
						}
						
					});
					
				},
				
				init: function () {
					
					this.onMouseEnter(nav);
					
					this.onMouseLeave(nav);
					
					this.onClick(nav);
					
				}
				
			};
			
		} ()).init();
		
		
		
		/**
		 * Module: Simple Module Demo.
		 */
		
		_mod = (function (hawaii) {
			
			tlns.init = function () {
				
				if (!mute) {
					
					console.info('Master page (../www/master@3.html) basic logic loaded.');
					
				}
				
			};
			
			// Add method(logic) here ...
			
			hawaii.init = function () {
				
				this.init();
				
			}.call(tlns);
			
			return hawaii;
			
		} (_mod || {})).init;
		
		// Add module here ...
		
	};
	
	_AMD = (function (_register, _module) {
		
		var hasDefine, registryProfile;
		
		hasDefine = typeof define === "function" && define.amd;
		
		registryProfile = function () {
			
			hasDefine ? define(_module) : console.error('Sorry! There is no "define" object.');
			
		};
		
		return {
			
			init: registryProfile
			
		};
		
	}(_AMD || {}, fn)).init();
	
} (window, document, require, (typeof console !== 'undefined' ? console : undefined)));