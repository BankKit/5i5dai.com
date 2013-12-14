/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: The plugin for text overflow (ellipsis).    ...//TODO: Check description.
 * 
 * Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 * 
 * Javascript Design Pattern (Code Management):    ...//TODO: Check design pattern.
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
 * Creation Date: 2013.12.14 15:07 ( Tony ).
 * 
 * Last Update: 2013.12.14 15:38 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Countdown (feat. Makj).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

(function (global, document, require, console) {
	
	var fn, _AMD;
	
	fn = function (require) {
		
		var SJ;
		
		SJ = require('jquery');
		
		(function ($) {
			
			$.fn.txtOver = function (options) {
				
				var defaults = {
					
					size: 240,
					
					omission: '...',
					
					ignore: true
					
				},
				
				options = $.extend(defaults, options);
				
				return this.each(function(){
					
					var textDefault,

						textTruncated,

						elements = $(this),

						regex = /[!-\/:-@\[-`{-~]$/;
					
					var truncate = function(){
						
						elements.each(function(){
							
							textDefault = $(this).text();
							
							if (textDefault.length > options.size) {
								
								//TODO: English string condition, textTruncated = $.trim(textDefault).substring(0, options.size).split(' ').slice(0, -1).join(' ')*/;

								textTruncated = $.trim(textDefault).substring(0, options.size);
								
								if (options.ignore) {
									
									textTruncated = textTruncated.replace(regex , '');
									
								}
								
								$(this).text(textTruncated + options.omission);
								
							}
							
						});
						
					};
					
					var init = function() {
						
						truncate();
						
					};
					
					init();
					
				});
			};
			
		})(SJ);
		
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