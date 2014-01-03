/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: The plus business logic script file for the investment list page (../../../../../../www/invest.list.html).    ...//TODO: Check description.
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
 * Creation Date: 2014.01.02 14:12 ( Tony ).
 * 
 * Last Update: 2014.01.02 14:13 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

(function (global, document, require, console, undefined) {
	
	var fn, _AMD;
	
	fn= function () {
		
		var tlns, extend, _mod, mute;
		
		mute = true; //TODO: Have to cancel "console" function before release.
		
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