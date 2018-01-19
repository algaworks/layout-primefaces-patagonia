$(function() {
	$('.js-toggle').bind('click', function(event) {
		debugger;
		$('.js-sidebar, .js-content').toggleClass('is-toggled');
		event.preventDefault();
	});
	
	$('.aw-item-link').bind('click', function(event) {
		debugger;
		$('.aw-menu-tree').toggle();
		event.preventDefault();
	});
});
