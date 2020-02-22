$("#botao-placar").click(mostrarPlacar);

function inserirPlacar(){
	var corpoTabela = $(".placar").find("tbody");
	var usuario = "Mateus";
	var numPalavras = $("#contador-palavras").text();

	var linha = novaLinha(usuario, numPalavras);
	linha.find(".botao-remover").click(removerLinha);

    corpoTabela.prepend(linha); //append coloca depois e prepend coloca antes
    $(".placar").slideDown(500);
    scrollPlacar();

}

function scrollPlacar(){
	var posicaoPlacar = $(".placar").offset().top();
	$("body").animate(
	{
		scrollTop: posicaoPlacar + "px"
	}, 1000);
}

function novaLinha(usuario, numPalavras){
	var linha = $("<tr>");
	var colunaUsuario = $("<td>").text(usuario);
	var colunaPalavras = $("<td>").text(numPalavras);
	var colunaRemover = $("<td>");

	var link = $("<a>").addClass("botao-remover").attr("href", "#");
	var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

	link.append(icone);
	colunaRemover.append(link);
	linha.append(colunaUsuario);
	linha.append(colunaPalavras);
	linha.append(colunaRemover);

	return linha;
}

function removerLinha(){
	event.preventDefault();
	var linha = $(this).parent().parent(); //subindo na arvore pra apagar o pai do pai, ou seja, o tr
	linha.fadeOut();
	setTimeout(function(){
			linha.remove(); 
		}, 1000);
}

function mostrarPlacar(){
	//$(".placar").toggle(); // .toggle() = igual o tira/coloca do .toggleClass()
	//$(".placar").slideDown(2000); //.slideDown() e .slideUp()= mostrar suavemente
	$(".placar").stop().slideToggle(600);

}