/*! General JS */

jQuery(function($){

	// clica no elemento, aparece conteudo no topo
	$('#tabela .elemento').click(function(event){
		event.preventDefault();

		var back = $(this).attr('class');
		var titulo = $(this).attr('title');
		var simbolo = $(this).children('span.simb').text();
		var ato = $(this).children('span.ato').text();
		var m_ato = $(this).children('span.m_ato').text();

		console.log(back);

		$('#conteudo .elemento').attr('class',back);

		$('#conteudo .elemento p.nome').text(titulo);

		$('#conteudo .elemento p.simbolo').text(simbolo);

		$('#conteudo .elemento p.m_ato').text(m_ato);

		$('#conteudo .elemento span.ato').text(ato);

	});

	// hover nos tipos dos elementos
	$('#tipos_estados li a').each(function(){

		var class_element;

		$(this).hover(function(){

			class_element = $(this).attr('class');

			$('#tabela .elemento').each(function(){

				$(this).not('.'+class_element).addClass('transparent');
			});

		}, function(){

			$('#tabela .elemento').each(function(){

				$(this).not('.'+class_element).removeClass('transparent');
			});
		});
	});

	// hover nos tipos dos elementos, e fecha o bloco 'conteudo'
	// $('section#conteudo, section#tabela').hover(function(){

	// $('section#conteudo, section#tabela').animate({'top': '-190px'});
	// });

	// clica elemento, e abre o bloco de 'conteudo'
	$('section#tabela .line .elemento, nav#sublinks ul li a').click(function(event){
		event.preventDefault();

		$('#toggle_conteudo').text('Ocultar informações ↑');
		$('section#conteudo, section#tabela').animate({'top': '0px'});
	});

	// click para fechar bloco 'conteudo'
	$('#toggle_conteudo').toggle(function(event){
		event.preventDefault();

		$(this).text('Mostrar mais informações ↓');
		$('section#conteudo, section#tabela').animate({'top': '-190px'});
	}, function(event){
		event.preventDefault();

		$(this).text('Ocultar informações ↑');
		$('section#conteudo, section#tabela').animate({'top': '0px'});
	});
	
});