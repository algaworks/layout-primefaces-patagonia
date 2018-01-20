$(function() {
	$('.js-toggle').bind('click', function(event) {
		$('.js-sidebar, .js-content').toggleClass('is-toggled');
		event.preventDefault();
	});

	$('.aw-item-link').bind('click', function(event) {
		expandirRecolherItensDoMenu();
	});
});

function expandirRecolherItensDoMenu() {

	debugger;
	event.preventDefault();
	var linkClicado = event.target;

	// se clicou no icone do link em vez do link
	if ($(linkClicado).hasClass('fa-fw')) {
		linkClicado = $(linkClicado).parent();
	}

	var liPai = $(linkClicado).parent();

	//se ja estiver selecionada e for subitem nao precisa fazer nada
	if (!($(liPai).hasClass('is-selected')) && !($(liPai).hasClass('subitem'))) {
		desativarLiSelecionada();
		expandirRecolherMenu(linkClicado, liPai);
	}
}

function expandirRecolherMenu(linkClicado, liPai) {
	$(liPai).toggleClass('is-selected');
	var proximoMenu = $(linkClicado).next('.aw-menu-tree');
	proximoMenu.toggle('1000');
}

function desativarLiSelecionada() {
	var liAtiva = $('.is-selected');
	if (liAtiva.length > 0) {
		var menuExpandido = $(liAtiva).find('.aw-menu-tree');
		menuExpandido.toggle('1000');
		$(liAtiva).removeClass('is-selected');
	}
}