/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: The basic business logic script file for home page (../../../../../../www/index.html).
 * 
 * Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 * 
 * Javascript Design Pattern (Code Management):
 *     
 *     Namespacing Patterns, Immediately-invoked Function Expressions (IIFE)s
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
 * Creation Date: 2013.12.09 09:19 ( Tony ).
 * 
 * Last Update: 2013.12.13 12:30 ( Tony ).    ...//TODO: Update the 'Last Update'.
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
		
		var SJ = require('jquery'),
			
			modernizr = require('modernizr'),
			
			easing = require('easing'),
			
			slides = require('slides');
		
		var tlns, extend, _mod,
			
			mute = false; //TODO: Have to cancel "console" function before release.
		
		tlns = tlns || {}; //top-level namespace
		
		
		
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
		 * Module: Navigation Animation.
		 */
		
		_mod = (function () {
			
			return {
				
				init: function () {
					
					SJ('.logoNavArea').children('a').on('click', function (e) {
						
						if (SJ('body').hasClass('home')) {
							
							e.preventDefault();
							
						}
						
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
		 * Module: Slides Animation.
		 */
		
		_mod = (function () {
			
			return {
				
				init: function () {
					
					SJ("#slides").studioSlides({
						
						play: {
							
							active: true,
							
							effect: "slide",
							
							interval: 3000,
							
							auto: true,
							
							swap: true,
							
							pauseOnHover: true
							
						},
						
						navigation: {active: false}
						
					});
					
					SJ('.promo').each(function (index) {
						
						var that = SJ(this),
							
							_data = that.data('bg');
						
						that.css({
							
							'backgroundImage': 'url('+ _data +')'
							
						});
						
					});
					
				}
				
			};
			
		} ()).init();
		
		
		
		/**
		 * Module: Slides Animation.
		 */
		
		_mod = (function () {
			
			return {
				
				init: function () {
					
					var tableRow = SJ('.tableRow');
					
					tableRow.filter(':last').addClass('lastRow');
					
					tableRow.filter(':odd').addClass('oddRow');
					
					tableRow.on('mouseover', function () {
						
						var that = SJ(this);
						
						that.addClass('hovers');
						
					});
					
					tableRow.on('mouseout', function () {
						
						var that = SJ(this);
						
						that.removeClass('hovers');
						
					});
					
				}
				
			};
			
		} ()).init();
		
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