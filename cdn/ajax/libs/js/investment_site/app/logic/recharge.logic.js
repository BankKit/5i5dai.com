/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: The basic business logic script file for the recharge page (../../../../../../www/recharge.html).    ...//TODO: Check description.
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
 * Creation Date: 2014.01.07 10:36 ( Tony ).
 * 
 * Last Update: 2014.01.08 15:07 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

(function (global, document, require, console, undefined) {
	
	'use strict';
	
	var fn, _AMD;
	
	fn= function (require) {
		
		var SJ = require('jquery'),
			
			scheck = require('scheck'),
			
			modernizr = require('modernizr'),
			
			easing = require('easing'),
			
			srl = require('srl'),
			
			åütrigger = SJ('.otherPaymentLink'),
			
			åüpanel = SJ('#pnlBankSelect'),
			
			tlns,
			
			extend,
			
			_mod,
			
			mute = false; //TODO: Have to cancel "console" function before release.
		
		
		
		tlns = tlns || {}; //top-level namespace
		
		var evtName;
		
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
		 * Module: Simple Field Interaction Details.
		 */
		
		_mod = (function () {
			
			return {
				
				init: function () {
					
					var field = SJ('.field');
					
					field.filter(':eq(0)').children('input').focus();
					
					field.on(evtName, function (e) {
						
						if (e.target.nodeName == 'DIV') {
							
							SJ(this).children('input').focus();
							
						}
						
					});
					
				}
				
			};
			
		} ()).init();
		
		
		
		/**
		 * Module: Bank Choosing Control.
		 */
		
		_mod = (function () {
			
			var bankChoosingControl  = extend(tlns, 'tlns.bankChoosingControl');
			
			bankChoosingControl.åüinit = function () {
				
				this.åüdefault();
				
				this.åüanimation();
				
				this.åüclickOption();
				
			};
			
			bankChoosingControl.åüutils = {
				
				pdControl: function (e) {
					
					e.stopPropagation();
					
					e.preventDefault();
					
				}
				
			};
			
			bankChoosingControl.åüdefault = function () {
				
				var selectedBank = SJ('.selectedBank'),
					
					selectedBankL = selectedBank.length;
				
				if (selectedBankL >= 1) {
					
					selectedBank.first().children('input').prop('checked', true);
					
				} else {
					
					selectedBank.children('input').prop('checked', true);
					
				}
				
				åüpanel.find('li').filter('[id|="'+ selectedBank.children('input').filter(':checked').val() +'"]').children('input').prop('checked', true);
				
				/* Test script: console.log(selectedBank.children('input').filter(':checked').val()); */
				
				/* Test script: console.log(åüpanel.find('li').filter('[id|="'+ selectedBank.children('input').filter(':checked').val() +'"]').children('input').val()); */
				
			};
			
			bankChoosingControl.åühelper = {
				
				setRdo: function (obj) {
					
					obj.children('input').prop('checked', true);
					
				}
				
			};
			
			bankChoosingControl.åüclickOption = function () {
				
				var _this = this;
				
				åüpanel.on('click.option.tony', 'li', function () {
					
					_this.åühelper.setRdo(SJ(this));
					
				});
				
				SJ('.selectedBank').on('click.selected.tony', function () {
					
					_this.åühelper.setRdo(SJ(this));
					
				});
				
			};
			
			bankChoosingControl.åüswitchData = function () {
				
				var checkedObj = åüpanel.find('input[name=rdoBankUnit]:checked'),
					
					suck = SJ('.selectedBank'),
					
					_status = false,
					
					_this = this;
				
				suck.children('input').prop('checked', false);
				
				if (!checkedObj.length == 0) {
					
					var checkedObjVal = checkedObj.val(),
						
						checkedId = checkedObj.parent().attr('id'),
						
						selectedBank = suck,
						
						insertFn = function () {
							
							var newItem = SJ('<li id="'+ checkedId +'" class="selectedBank"><input type="radio" class="left" value="'+ checkedObjVal +'" name="rdoBanks" checked="checked" /><div class="right"></div></li>');
							
							newItem.insertBefore(selectedBank.first());
							
							SJ('.selectedBank').on('click.selected.tony', function () {
								
								_this.åühelper.setRdo(SJ(this));
								
							});
							
						};
				   
				   /* Test script: console.log(checkedObjVal); */
					
				   selectedBank.each(function (index) {
						
						var that = SJ(this),
							
							_ID = that.attr('id');
						
						if (_ID == checkedId) {
							
							selectedBank.filter('[id|='+ checkedId +']').children('input').prop('checked', true);
							
							return false;
							
						} else {
							
							if (index == (selectedBank.length-1)) {
								
								selectedBank.length >= 1 ? insertFn() : selectedBank.attr('id', checkedId).children('input').val(checkedObjVal).prop('checked', true);
								
								/* Test script: console.log(selectedBank.children('input').val()); */
								
							}
							
						}
						
					});
					
				}
				
			};
			
			bankChoosingControl.åüanimation = function () {
				
				var _this = this;
				
				var fadeAnimation = function (obj, fadeType) {
					
					if (fadeType == 'fadeIn') {
						
						obj.fadeIn({
							
							duration: 100,
							
							easing: 'swing',
							
							queue: false,
							
							done: SJ.noop()
							
						});
						
					} else if (fadeType == 'fadeOut') {
						
						obj.fadeOut({
							
							duration: 100,
							
							easing: 'swing',
							
							queue: false,
							
							done: SJ.noop()
							
						});
						
					}
					
				};
				
				var _showModal = function (e) {
					
					_this.åüutils.pdControl(e);
					
					fadeAnimation(åüpanel, 'fadeIn');
					
				};
				
				var _btnClose = function (e) {
					
					_this.åüutils.pdControl(e);
					
					fadeAnimation(åüpanel, 'fadeOut');
					
				};
				
				var _confirm = function (e) {
					
					_this.åüutils.pdControl(e);
					
					_this.åüswitchData();
					
					fadeAnimation(åüpanel, 'fadeOut');
					
				};
				
				åütrigger.on('click.start.tony', _showModal);
				
				åüpanel.on('click.btnclose.tony', '.closePnlBankSlect', _btnClose);
				
				åüpanel.on('click.btnclose.tony', '.btnConfrim', _confirm);
				
			};
			
			return {
				
				init: function () {
					
					this.åüinit();
					
				}.call(bankChoosingControl)
				
			};
			
		} ()).init;
		
		
		
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
					
					ele.on(evtName, 'a', function (e) {
						
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