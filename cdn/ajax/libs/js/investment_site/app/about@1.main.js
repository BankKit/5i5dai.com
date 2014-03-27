/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: The business logic bootstrap script file for the about page (../../../../../../www/about@1.html).    ...//TODO: Check description.
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
 * Creation Date: 2014.11.20 11:26 ( Tony ).
 * 
 * Last Update: 2014.03.27 18:04 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Countdown (feat. Makj).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

(function (require) {
	
	var fn, _AMD;
	
	fn = function (require) {
		
		var SJ, basicLogic/*, plusLogic*/, modifyTitle/*, deepLink*/, urlParser, srl, cont;
		
		SJ = require('jquery');
		
		basicLogic = require('logic/about@1.logic.min');
		
		/*plusLogic = require('logic/about@1.logic.plus');*/
		
		modifyTitle = require('titleModify');
		
		// deepLink = require('deepLink');
		
		urlParser = require('urlParser');
		
		srl = require('srl');
		
		cont = require('cont');
		
		SJ(function ($) {
			
			// TODO: Import basic business logic script here.
			
			var mod = (function () {
				
				return {
					
					init: function () {
						
						var pageIdentity, _arry, arrSearch, sideMenu;
						
						pageIdentity = Arg.get("direct");
						
						_arry = ['sec_1', 'sec_2', 'sec_3', 'sec_4', 'sec_5', 'sec_6', 'sec_7', 'sec_8'];
						
						arrSearch = $.inArray(pageIdentity, _arry);
						
						sideMenu = $('aside').find('li');
						
						if (arrSearch !== -1) {
							
							sideMenu.filter(':eq(' + arrSearch + ')').addClass('current').siblings('li').removeClass('current');
							
							$('.' + pageIdentity).removeClass('_hide');
							
						} else {
							
							sideMenu.filter(':eq(0)').addClass('current');
							
							$('.sec_1').removeClass('_hide');
							
						}
						
					}
					
				};
				
			} ()).init();
			
			$('html').studioScroll({zindex: 50, cursorborder: 0, cursorborderradius: 0});
			
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
	
} (require));