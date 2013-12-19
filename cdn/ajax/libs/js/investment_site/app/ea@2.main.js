/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: The business logic bootstrap script file for the email authentication page (../../../../../../www/email.authentication@2.html).    ...//TODO: Check description.
 * 
 * Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 * 
 * Javascript Design Pattern (Code Management):    ...//TODO: Cehck design pattern.
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
 * Creation Date: 2013.12.19 15:58 ( Tony ).
 * 
 * Last Update: 2013.12.20 01:19 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Countdown (feat. Makj).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

(function (require, console) {
	
	var fn, _AMD;
	
	fn = function (require) {
		
		var modernizr, SJ, basicLogic, plusLogic, modifyTitle, deepLink, srl, cont;
		
		modernizr = require('modernizr');
		
		SJ = require('jquery');
		
		basicLogic = require('logic/ea@2.logic.min');
		
		plusLogic = require('logic/ea@2.logic.plus');
		
		modifyTitle = require('titleModify');
		
		deepLink = require('deepLink');

		srl = require('srl');

		cont = require('cont');
		
		SJ(function ($) {
			
			// TODO: Import basic business logic script here.
			
			/* Test script: testScript($, modernizr); */

			$('html').studioScroll();
			
			modifyTitle();
			
			//deepLink.init();
			
		});
		
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
	
} (require, (typeof console !== 'undefined' ? console : undefined)));