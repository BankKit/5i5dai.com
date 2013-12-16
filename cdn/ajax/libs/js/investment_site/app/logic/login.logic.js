/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: The basic business logic script file for login page (../../../../../../www/login.html).    ...//TODO: Check description.
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
 * Creation Date: 2013.12.13 14:48 ( Tony ).
 * 
 * Last Update: 2013.12.16 11:28 ( Tony ).    ...//TODO: Update the 'Last Update'.
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
			
			_validator = require('validator'),
			
			easing = require('easing');
		
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
		 * Module: Mutiple Form Interaction Details.
		 */
		
		_mod = (function () {
			
			return {
				
				init: function () {
					
					SJ('.login').animate({opacity: 1, marginTop: '-250px'}, {
						
						duration: 400
						
					});
					
				}
				
			};
			
		} ()).init();
		
		
		
		/**
		 * Module: Logo Mask Animation.
		 */
		
		_mod = (function () {
			
			var radi = 0;
			
			return {
				
				maskPrototype: function () {
					
					SJ({ radi : 0 }).animate({ radi : 200 },{ step : function(radi){
						
						var delta_radius = 15;
						
						SJ("#investLogo").css("-webkit-mask","-webkit-gradient(radial, 36 36, "+radi+", 36 36, "+(radi+delta_radius)+", from(rgb(0, 0, 0)), color-stop(0.5, rgba(0, 0, 0, 0.2)), to(rgb(0, 0, 0)))");
						
					}, duration : 5000});
					
				},
				
				hoverLogo: function () {
					
					var _this = this;
					
					SJ("#investLogo").on('mouseover', function () {
						
						_this.maskPrototype();
						
					});
					
				},
				
				init: function () {
					
					this.maskPrototype();
					
					this.hoverLogo();
					
				}
				
			};
			
		} ()).init();
		
		
		
		/**
		 * Module: Mutiple Form Interaction Details.
		 */
		
		_mod = (function () {
			
			return {
				
				_setDefaults: function () {
					
					SJ.validator.setDefaults({
						
						debug: true,
						
						onfocusout: function(element) {
							
							SJ(element).valid();
							
						},
						
						onkeyup: function(element) {
							
							SJ(element).valid();
							
						},
						
						success: function(error) {
							
							SJ(error).remove();
							
						},
						
						errorElement: 'span'
						
					});
					
				},
				
				_setMethods: function () {
					
					SJ.validator.addMethod("nowhitespace", function(value, element) {
						
						return this.optional(element) || /^\S+$/i.test(value);
						
					}, "不允许有空格。");
					
				},
				
				_setEles: function () {
					
					SJ.validator.addClassRules({
						
						iptUserName: {
							
							required: true,
							
							nowhitespace: true,
							
							rangelength: [6, 25]
							
						},
						
						iptUserPass: {
							
							required: true,
							
							nowhitespace: true,
							
							rangelength: [6, 25]
							
						},
						
						iptUserCode: {
							
							required: true,
							
							nowhitespace: true,
							
							number: true,
							
							maxlength: 4
							
						}
						
					});
					
				},
				
				_todoIt: function () {
					
					var validator = SJ('#frmLogin').validate({
						
						errorPlacement: function (error, element) {
							
							error.appendTo(element.parent().prev());
							
						},
						
						submitHandler: function (form, event) {
							
							if (SJ('html').hasClass('ie8')) {
								
								SJ('#frmLogin').valid();
								
								validator.focusInvalid();
								
								if (validator.numberOfInvalids() === 0) {
									
									form.submit();
									
								} else {
									
									return false;
									
								}
								
							} else {
								
								form.submit();
								
							}
							
						}
						
					});
					
				},
				
				init: function () {
					
					this._setDefaults();
					
					this._setMethods();
					
					this._setEles();
					
					this._todoIt();
					
					var field = SJ('.loginField');
					
					field.filter(':eq(0)').children('input').focus();
					
					field.on('click', function (e) {
						
						if (e.target.nodeName == 'DIV') {
							
							SJ(this).children('input').focus();
							
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