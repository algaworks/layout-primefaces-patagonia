$(function() {
	$('.js-toggle').bind('click', function(event) {
		debugger;
		$('.js-sidebar, .js-content').toggleClass('is-toggled');
		event.preventDefault();
	});

	$('.aw-item-link').bind('click', function(event) {
		debugger;
		var elementoClicado = event.target;
		var proximoMenu = $(elementoClicado).next('.aw-menu-tree');
		//$('.aw-menu-tree').toggle();
		proximoMenu.toggle();
		event.preventDefault();
	});
});
