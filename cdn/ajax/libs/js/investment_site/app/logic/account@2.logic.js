/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: The basic business logic script file for the " my investment list " page (../../../../../../www/account@2.html).    ...//TODO: Check description.
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
 * Creation Date: 2014.01.09 17:51 ( Tony ).
 * 
 * Last Update: 2014.01.13 16:44 ( Tony ).    ...//TODO: Update the 'Last Update'.
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
		
		var SJ, slt, easing, modernizr, sticky, tlns, extend, _mod, mute, evtName;
		
		
		
		SJ = require('jquery');
		
		slt = require('slt');
		
		easing = require('easing');
		
		modernizr = require('modernizr');
		
		sticky = require('sticky');
		
		mute = true; //TODO: Have to cancel "console" function before release.
		
		tlns = tlns || {}; //top-level namespace
		
		modernizr.touch ? evtName = 'touchstart' : evtName = 'click';
		
		
		
		/**
		 * Module: Automating nested namespacing function.
		 */
		
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
		 * Module: Selector.
		 */
		
		_mod = (function (hawaii) {
			
			tlns.init = function () {
				
				SJ("select").selecter({
					
					callback: function (value) {
						
						if (!mute) {
							
							console.log('Value: ' + value + '.');
							
						}
						
					}
					
				});
				
			};
			
			// Add method(logic) here ...
			
			hawaii.init = function () {
				
				this.init();
				
			}.call(tlns);
			
			return hawaii;
			
		} (_mod || {})).init;
		
		
		
		/**
		 * Module: Sticky Side Bar.
		 */
		
		_mod = (function () {
			
			return {
				
				init: function () {
					
					SJ("aside").sticky({
						
						topSpacing: 0,
						
						getWidthFrom: 'aside'
						
					});
					
				}
				
			};
			
		} ()).init();
		
		
		
		/**
		 * Module: Table Row.
		 */
		
		_mod = (function (hawaii) {
			
			tlns.init = function () {
				
				for (var i = 1; i <= 29; i++) {
					
					SJ('<div class="minHeight_50 tableRow clearfix"><div class="left trow1"></div><div class="left trow2" itemprop="name">CZ20131021015389</div><div class="left trow3 textCenter" itemprop="text">2013-03-18</div><div class="left trow4 textCenter" itemprop="text">2013-03-18</div><div class="left trow5 textCenter" itemprop="text">10,00.00</div><div class="left trow6 textCenter" itemprop="text">36个月</div><div class="left trow7 textCenter" itemprop="text">正在收款</div><div class="left trow8 textCenter" itemprop="text"><a href="account%407.min.html">查看详情</a></div></div>').appendTo(SJ('.tableRowSet'));
					
				}
				
			};
			
			// Add method(logic) here ...
			
			hawaii.init = function () {
				
				this.init();
				
			}.call(tlns);
			
			return hawaii;
			
		} (_mod || {})).init;
		
		
		
		/**
		 * Module: Even/Odd Row Style Control.
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