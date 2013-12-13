/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: Hide address bar on mobile devices.    ...//TODO: Check description.
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
 * Creation Date: 2013.12.09 09:25 ( Tony ).
 * 
 * Last Update: 2013.12.13 13:11 ( Tony ).    ...//TODO: Update the 'Last Update'.
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
		
		var modernizr, SJ, deep;
		
		modernizr = require('modernizr');
		
		SJ = require('jquery');
		
		deep = function () {
			
			SJ(function ($) {
				
				/*if (modernizr.touch && !window.location.hash) {
					
					SJ('body').text('modernizr');
					
				}
				
				function hideAddressBar() {
					
					if (!window.location.hash) {
						
						if (document.height <= window.outerHeight + 10) {
							
							document.body.style.height = (window.outerHeight + 50) + 'px';
							
							setTimeout(function () {
								
								window.scrollTo(0, 1);
								
							}, 50);
							
						} else {
							
							setTimeout(function () {
								
								window.scrollTo(0, 1);
								
							}, 0);
							
						}
						
					}
					
				}
				
				window.addEventListener("load", hideAddressBar);
				
				window.addEventListener("orientationchange", hideAddressBar);*/
				
			});
			
		};
		
		return {
			
			init: deep
			
		};
		
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