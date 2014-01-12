/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: jQuery plugin for making an element on the page stick on the screen as you scroll.
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
 * Creation Date: 2014.01.11 06:05 ( Tony ).
 * 
 * Last Update: 2014.01.12 0:00 ( Tony ).    ...//TODO: Update the 'Last Update'.
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
		
		var defaults, $window, $document, sticked, windowHeight, scroller, resizer, methods;
		
		defaults = {
			
			topSpacing: 0,
			
			bottomSpacing: 0,
			
			className: 'is-sticky',
			
			wrapperClassName: 'sticky-wrapper'
			
		},
		
		$window = SJ(window),
		
		$document = SJ(document),
		
		sticked = [],
		
		windowHeight = $window.height(),
		
		scroller = function() {
			
			var scrollTop = $window.scrollTop(),
				
				documentHeight = $document.height(),
				
				dwh = documentHeight - windowHeight,
				
				extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
			
			/*Test Script: console.log('Scroll Top: ' + scrollTop);*/
			
			/*Test Script: console.log('Document Height: ' + documentHeight);*/
			
			/*Test Script: console.log('documentHeight - windowHeight: ' + dwh);*/
			
			/*Test Script: console.log('Extra: ' + extra);*/
			
			for (var i = 0; i < sticked.length; i++) {
				
				var s = sticked[i],
					
					elementTop = s.stickyWrapper.offset().top,
					
					etse = elementTop - s.topSpacing - extra;
				
				/*Test Script: console.log('ElementTop: ' + elementTop);*/
					
				if (scrollTop <= etse) {
					
					if (s.currentTop !== null) {
						
						s.stickyElement.css('position', '').css('top', '');
						
						s.stickyElement.parent().removeClass(s.className);
						
						s.currentTop = null;
						
					}
					
				} else {
					
					var newTop = s.topSpacing;
					
					/*Test Script: console.log('Current Top: ' + s.currentTop);*/
					
					if (s.currentTop != newTop) {
						
						s.stickyElement.css('position', 'fixed').css('top', newTop);
						
					}
					
					s.stickyElement.parent().addClass(s.className);
					
					s.currentTop = newTop;
					
				}
			}
			
		},
		
		resizer = function() {
			
			windowHeight = $window.height();
			
			/*Test Script: console.log(windowHeight);*/
			
		},
		
		methods = {
			
			init: function(options) {
				
				var o = SJ.extend(defaults, options);
				
				return this.each(function() {
					
					var stickyElement = SJ(this);
					
					var stickyId = stickyElement.attr('id');
					
					var wrapper = SJ('<div></div>').attr('id', stickyId + '-sticky-wrapper').addClass(o.wrapperClassName);
					
					stickyElement.wrapAll(wrapper);
					
					var stickyWrapper = stickyElement.parent();
					
					stickyWrapper.css('height', stickyElement.outerHeight());
					
					sticked.push({
						
						topSpacing: o.topSpacing,
						
						bottomSpacing: o.bottomSpacing,
						
						stickyElement: stickyElement,
						
						currentTop: null,
						
						stickyWrapper: stickyWrapper,
						
						className: o.className
						
					});
					
				});
				
			},
			
			update: scroller
			
		};
		
		$window.on('scroll', scroller);
		
		$window.on('resize', resizer);
		
		SJ(function() {
			
			setTimeout(scroller, 0);
			
		});
		
		SJ.fn.sticky = function(method) {
			
			if (methods[method]) {
				
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
				
			} else if (typeof method === 'object' || !method ) {
				
				return methods.init.apply( this, arguments );
				
			} else {
				
				SJ.error('Method ' + method + ' does not exist on jQuery.sticky');
				
			}
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