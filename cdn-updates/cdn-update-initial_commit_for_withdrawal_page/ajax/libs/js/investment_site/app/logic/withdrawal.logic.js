/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: The basic business logic script file for the withdrawal page (../../../../../../www/withdrawal.html).    ...//TODO: Check description.
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
 * Creation Date: 2014.02.25 10:21 ( Tony ).
 * 
 * Last Update: 2014.02.26 12:09 ( Tony ).    ...//TODO: Update the 'Last Update'.
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
		
		var SJ, modernizr, slt, tlns, extend, _mod, mute, evtName;
		
		
		
		SJ = require('jquery');
		
		modernizr = require('modernizr');
		
		slt = require('slt');
		
		mute = false; //TODO: Have to cancel "console" function before release.
		
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
		 * Module: Form Control. ( Exist Performance Issues ... )
		 */
		
		_mod = (function (hawaii) {
			
			var formswitch, frmWithdrawal, field;
			
			formswitch  = extend(tlns, 'tlns.formswitch');
			
			frmWithdrawal = SJ("#frmWithdrawal");
			
			field = SJ('.fieldArea');
			
			formswitch.åüinit = function () {
				
				this.åüdefault();
				
				this.åüswitch();
				
			};
			
			formswitch.åüutils = {
				
				pdControl: function (e) {
					
					e.stopPropagation();
					
					e.preventDefault();
					
				}
				
			};
			
			formswitch.åüselect = function () {
				
				SJ("select").selecter({
					
					callback: function (value) {
						
						if (!mute) {
							
							//console.log('Value: ' + value + '.');
							
						}
						
					}
					
				});
				
			};
			
			formswitch.åüdefault = function () {
				
				if (frmWithdrawal.hasClass('noRecord')) {
					
					SJ('#iptOutlets, #iptAccount').prop('disabled', false);
					
				}
				
				if (frmWithdrawal.hasClass('binding')) {
					
					SJ('#iptCardholder, #iptOutlets, #iptAccount, #iptPhone').prop('disabled', false);
					
				}
				
				if (!frmWithdrawal.hasClass('hasRecord')) {
					
					this.åüselect();
					
				}
				
				field.on(evtName, function (e) {
					
					if (e.target.nodeName == 'DIV') {
						
						SJ(this).children('input').focus();
						
					}
					
				});
				
			};
			
			formswitch.åüswitch = function () {
				
				var switcher = SJ('.aBingOrChangeBank'),
					
					that = this;
				
				var edit = function (frmStauts, include) {
					
					if (!frmWithdrawal.hasClass('binding')) {
						
						frmWithdrawal.removeClass(frmStauts).addClass('binding');
						
						SJ(include).prop('disabled', false).val('');
						
						field.filter(':eq(0)').children('input').focus();
						
					}
					
				};
				
				switcher.on(evtName, {dt: switcher.html()}, function (e) {
					
					that.åüutils.pdControl(e);
					
					if (e.data.dt === '绑定银行卡') {
						
						edit('noRecord', '#iptCardholder, #iptPhone');
						
						/* Test script: console.log(e.data.dt); */
						
					} else if (e.data.dt === '更换银行卡') {
						
						edit('hasRecord', '#iptCardholder, #iptOutlets, #iptAccount, #iptPhone');
						
						that.åüselect();
						
						/* Test script: console.log(e.data.dt); */
						
					}
					
				});
				
			};
			
			// Add method(logic) here ...
			
			return {
				
				init: function () {
					
					this.åüinit();
					
				}.call(formswitch)
				
			};
			
		} (_mod || {})).init;
	
		
		
		/**
		 * Count Dowm Function. ( Need to be optimized. )
		 */
		
		_mod = (function () {
			
			var intervalID_1, intervalID_2, stauts;
			
			stauts = false;
			
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
								
								stauts = true;
								
							} else {
								
								i--;
								
								o.text(i);
								
							}
							
						}
						
						intervalID_2 = window.setInterval(countDown, 1000);
						
					}
					
					SJ('.getDynamicCode').on(evtName, function (e) {
						
						e.stopPropagation();
						
						e.preventDefault();
						
						excute_1(SJ('.s3p_2').children('span').first());
						
						excute_2(SJ('.s3p_2').children('span').last());
						
					});
					
					SJ('.aResent').on(evtName, function(e) {
						
						e.preventDefault();
						
						if (stauts) {
							
							window.clearInterval(intervalID_1);
							
							window.clearInterval(intervalID_2);
							
							SJ('.s3p_2').children('span').first().text(120);
							
							SJ('.s3p_2').children('span').last().text(60);
							
							excute_1(SJ('.s3p_2').children('span').first());
							
							excute_2(SJ('.s3p_2').children('span').last());
							
							stauts = false;
							
						}
						
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