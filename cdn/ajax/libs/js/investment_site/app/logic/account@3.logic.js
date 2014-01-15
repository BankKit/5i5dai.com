/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: The basic business logic script file for the transaction detail page (../../../../../../www/account@3.html).    ...//TODO: Check description.
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
 * Creation Date: 2014.01.09 17:43 ( Tony ).
 * 
 * Last Update: 2014.01.15 13:19 ( Tony ).    ...//TODO: Update the 'Last Update'.
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
		
		var SJ, uiDatePicker, slt, easing, modernizr, sticky, tlns, extend, _mod, mute, evtName;
		
		
		
		SJ = require('jquery');

		uiDatePicker = require('uiDatePicker');
		
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
		 * Module: Datepicker.
		 */
		
		_mod = (function () {
			
			return {
				
				init: function () {
					
					SJ(function($){
						
						$.datepicker.regional['zh-CN'] = {
							
							closeText: '关闭',
							
							prevText: '&#x3C;上月',
							
							nextText: '下月&#x3E;',
							
							currentText: '今天',
							
							monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
							
							monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
							
							dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
							
							dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
							
							dayNamesMin: ['日','一','二','三','四','五','六'],
							
							weekHeader: '周',
							
							dateFormat: 'yy-mm-dd',
							
							firstDay: 1,
							
							isRTL: false,
							
							showMonthAfterYear: true,
							
							yearSuffix: '年'
							
						};
						
						$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
						
					});
					
					SJ('#iptStartDate').datepicker({
						
						showAnim: 'fadeIn',
						
						showOtherMonths: true
						
					});
					
					SJ('#iptEndDate').datepicker({
						
						showAnim: 'fadeIn',
						
						showOtherMonths: true
						
					});
					
				}
				
			};
			
		} ()).init();
		
		
		
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
					
					SJ('<div class="minHeight_50 tableRow clearfix"><div class="left trow1"></div><div class="left trow2" itemprop="name">2013-03-12 21:22</div><div class="left trow3 textCenter" itemprop="text">收款</div><div class="left trow4 textCenter" itemprop="text">10,000.00</div><div class="left trow5 textCenter" itemprop="text"></div><div class="left trow6 textCenter" itemprop="text">56，200.00</div><div class="left trow7 textCenter textOverflow" title="收回本金丨投资：汇通安汇通安汇通安汇通安汇通安汇通安汇通安" itemprop="text">收回本金丨投资：汇通安汇通安汇通安汇通安汇通安汇通安汇通安</div></div>').appendTo(SJ('.tableRowSet'));
					
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