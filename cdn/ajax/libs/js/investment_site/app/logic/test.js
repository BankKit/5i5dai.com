define(function () {
	
	return function ($, modernizr) {
		
		console.log('Begin TEST.');
			
			console.log(modernizr.webgl);
			
			if ($.cookie) {
				
				$.cookie('the_cookie', 'the_value', {expires: 7});
				
				console.log($.cookie('the_cookie'));
				
			}
			
		console.log('End TEST.');
		
	};
	
});