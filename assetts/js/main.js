$(function() {
	var $window = $(window);
	
	$('section[data-type="background]')/each(function() {
		
		var $bgobj = $ (this); // assinging the object
		
		$(window).scroll(function() {
			// scroll the bg at var speed 
			// the ypos is a neg valuye because were scrolling it up	
			
			var ypos = -($window.scrollTop() /$bgobj.data('speed'));
			
			//pu tpogether our final bg pos
			var coords = '50% ' + yPos + 'px';
			
			// move the bg
			$bgobj.css({ backgroundPosition: coords});
			
		}); // edn window scroll
		
	});
	
});