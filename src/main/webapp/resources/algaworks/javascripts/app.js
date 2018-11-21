$(function() {
	$('.js-toggle').bind('click', function(event) {
		$('.js-sidebar, .js-content').toggleClass('is-toggled');
		event.preventDefault();
	});

	$('.aw-item-link').bind('click', function(event) {
		debugger;
		event.preventDefault();
		expandirRecolherItensDoMenu(event);
	});
});

function expandirRecolherItensDoMenu(event) {

	debugger;

	var linkClicado = event.target;

	// se clicou no icone do link em vez de clicar no link
	if ($(linkClicado).hasClass('fa-fw')) {
		linkClicado = $(linkClicado).parent();
	}

	avaliarQualLiRecolherExpandir($(linkClicado).parent(), linkClicado);
}

function avaliarQualLiRecolherExpandir(liPai, linkClicado) {

	// quando for subitem nao precisa fazer nada
	if (!($(liPai).hasClass('subitem'))) {

		// se nao estiver selecionada, desativa a li que estiver selecionda
		if (!($(liPai).hasClass('is-selected'))) {
			desativarLiSelecionada();
		}
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
